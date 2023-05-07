import {IMovie} from "/src/types/IMovie";

const getSortedList = (listKey: string, list: IMovie[]): IMovie[] => {
  const strSort = (a: IMovie, b: IMovie) => (a[listKey] > b[listKey] ? 1 : -1);

  const numSort = (a: IMovie, b: IMovie) => b[listKey] - a[listKey];

  return isNaN(list[0][listKey]) ? list.sort(strSort) : list.sort(numSort);
};

export default getSortedList;
