const CleanCSS = require('clean-css');
const {minify} = require('terser');
const pluginDate = require('eleventy-plugin-date');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addPlugin(pluginDate, {
    formats: {
      readableDate: {year: 'numeric', month: 'short', day: 'numeric'},
      readableMonth: {year: 'numeric', month: 'long'},
      timeZone: 'z',
    },
  });

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addNunjucksAsyncFilter(
    'jsmin',
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        callback(null, code);
      }
    },
  );

  eleventyConfig.addPairedShortcode('pattern', function (content, patternName) {
    return `
      <div class="pattern__block">
      <h2 class="pattern__title">pattern: "${patternName}"</h2>
      ${content}
      </div>
    `;
  });

  eleventyConfig.addPairedShortcode(
    'footerCopyright',
    () => `&#169; ${new Date().getFullYear()} Andrew Harvard`,
  );

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
