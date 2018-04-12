import moment from 'moment';

export default (entries, { text, sortBy, startDate, endDate, favorites, important }) => {
  if(favorites) {
    return entries.filter((entry) => {
      return entry.favorite;
    });
  } else if(important) {
    return entries.filter((entry) => {
      return entry.important;
    });
  }
  
  return entries.filter((entry) => {
    const createdAtMoment = moment(entry.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = entry.title.toLowerCase().includes(text.toLowerCase()) || entry.content.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
