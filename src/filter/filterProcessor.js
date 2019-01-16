const applyFilter = (posts, filter) => {
  const lowerCaseSearchTerm = filter.searchTerm.toLowerCase();
  return posts.filter(item => {
    return item.title.toLowerCase().includes(lowerCaseSearchTerm);
  });
};

export default applyFilter;
