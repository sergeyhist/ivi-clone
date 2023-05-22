export const getCookieByName = (cookieName: string): string | null => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(`${cookieName}=`)) {
      const cookieValue = cookie.substring(cookieName.length + 1);
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
};

export const deleteCookiesByNames = (cookieNames: string[]):void => {
  cookieNames.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
};