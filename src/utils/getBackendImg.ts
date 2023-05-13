export const getBackendImage = (img: string): string => {
  if (img.match(/https/) || img.match(/http/)) {
    return img;
  }
  if (img) {
    return `https:${img}`;
  }
  return "/images/undefined.svg";
};
