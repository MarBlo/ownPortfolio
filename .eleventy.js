const pluginDate = require("eleventy-plugin-date");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addWatchTarget("./src/scss");
  eleventyConfig.addWatchTarget("./src/js");
  eleventyConfig.addWatchTarget("./src");

  eleventyConfig.addPassthroughCopy("./src/scss");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: ["md", "njk", "html"],
  };
};
