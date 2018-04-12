export default (entries) => {
  return entries.filter((entry) => {
    return entry.favorite;
  });
};