const CleanCSS = require('clean-css');
const Terser = require('terser');
const pluginDate = require('eleventy-plugin-date');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: {year: 'numeric', month: 'short', day: 'numeric'},
      // Add a new filter to format a Date to just the month and year.
      readableMonth: {year: 'numeric', month: 'long'},
      // Add a new filter using formatting tokens.
      timeZone: 'z',
    },
  });

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter('jsmin', function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log('Terser error: ', minified.error);
      return code;
    }
    return minified.code;
  });

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
