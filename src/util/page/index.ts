export const paginateFAQList = (
  list: any[],
  pageSize: number,
  page: number
) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, list.length);
  return list.slice(startIndex, endIndex);
};
