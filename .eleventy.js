module.exports = function(eleventyConfig) {
  // 정적 파일 그대로 복사
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");

  // 갤러리 컬렉션: 날짜 내림차순 (최신순)
  eleventyConfig.addCollection("gallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/*.md")
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0));
  });

  // 서비스 컬렉션: order 순서대로
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // 연혁 컬렉션: 연도 오름차순
  eleventyConfig.addCollection("timeline", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/timeline/*.md")
      .sort((a, b) => (a.data.year || 0) - (b.data.year || 0));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
