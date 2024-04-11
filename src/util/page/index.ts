export const generatePaginate = <T>(list: T[], pageSize: number, page: number): T[] => {
	const startIndex = (page - 1) * pageSize;
	const endIndex = Math.min(startIndex + pageSize, list.length);
	return list.slice(startIndex, endIndex);
};
