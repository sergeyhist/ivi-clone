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