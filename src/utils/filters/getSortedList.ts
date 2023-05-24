import { IMovie } from "/src/types/IMovie";

const getSortedList = (listKey: string, list: IMovie[]): IMovie[] => {
  const strSort = (a: IMovie, b: IMovie): number =>
    String(a[listKey]) > String(b[listKey]) ? 1 : -1;

  const numSort = (a: IMovie, b: IMovie): number =>
    Number(b[listKey]) - Number(a[listKey]);

  if (list.length > 0) {
    return isNaN(list[0][listKey] as number)
      ? [...list].sort(strSort)
      : [...list].sort(numSort);
  } else {
    return list;
  }
};

export default getSortedList;
