const CleanCSS = require('clean-css');
const Terser = require('terser');

module.exports = function (eleventyConfig) {
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

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
