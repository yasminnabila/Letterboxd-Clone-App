const formatSlug = (title) => {
  return title.split(" ").join("-");
};

module.exports = formatSlug;
