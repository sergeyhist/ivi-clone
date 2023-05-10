export const isFilterActive = (
  filter: string | string[],
  slug: string
): boolean => {
  return typeof filter === "string" ? filter === slug : filter.includes(slug);
};
