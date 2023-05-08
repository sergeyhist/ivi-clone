import { IMovie } from "/src/types/IMovie";

const getSortedList = (listKey: string, list: IMovie[]): IMovie[] => {
  const strSort = (a: IMovie, b: IMovie): number =>
    String(a[listKey]) > String(b[listKey]) ? 1 : -1;

  const numSort = (a: IMovie, b: IMovie): number =>
    Number(b[listKey]) - Number(a[listKey]);

  return list.length > 0 && isNaN(list[0][listKey] as number)
    ? list.sort(strSort)
    : list.sort(numSort);
};

export default getSortedList;
