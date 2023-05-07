export const isFilterActive = (
  filter: string | string[] | undefined,
  slug: string
) => {
  return typeof filter === "string"
    ? filter === slug
    : filter
    ? filter.includes(slug)
    : false;
};
