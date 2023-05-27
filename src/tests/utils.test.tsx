import { getMovieDeclination } from "/src/utils/getMovieDeclination";
import { notify } from "/src/utils/defaultToast";
import toastify, { toast } from "react-toastify";
import {
  getPersonFirstName,
  getPersonLastName,
  getPersonRole,
} from "/src/utils/person";
import {
  getMovieName,
  getMovieCounty,
  getFormateNumber,
  getFormateDate,
  getAgeImg,
} from "../utils/movie";
import { TFunction } from "next-i18next";
import { declOfNum } from "/src/utils/declOfNum";
import { getBackendImage } from "/src/utils/getBackendImg";
import { setAuthData } from "/src/utils/localStorage";
import { getCookieByName } from "/src/utils/cookies";
import { mockPerson } from "/src/utils/mocks/person";
import { isBrowser } from "../utils/isBrowser";
import { mockMovie } from "../utils/mocks/movies";

describe("getMovieDeclination", () => {
  it("should return the correct declination for 'ru' locale", () => {
    const movies = 5;
    const locale = "ru";
    const result = getMovieDeclination(movies, locale);
    expect(result).toBe(`${movies} фильмов`);
  });

  it("should return the correct declination for non-'ru' locale", () => {
    const movies = 5;
    const locale = "en";
    const result = getMovieDeclination(movies, locale);
    expect(result).toBe(`${movies} movies`);
  });

  it("should return the correct declination for zero movies", () => {
    const movies = 0;
    const locale = "ru";
    const result = getMovieDeclination(movies, locale);
    expect(result).toBe(`${movies} фильмов`);
  });

  it("should return the correct declination for single movie", () => {
    const movies = 1;
    const locale = "en";
    const result = getMovieDeclination(movies, locale);
    expect(result).toBe(`${movies} movie`);
  });
});
jest.mock("react-toastify");

describe("notify", () => {
  const mockToast = jest.spyOn(toastify, "toast") as jest.MockedFunction<
    typeof toast
  >;
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show a toast notification with the provided text and options", () => {
    const text = "Notification text";
    const id = "notificationId";
    notify(text, id);

    expect(mockToast).toHaveBeenCalledTimes(1);
    expect(mockToast).toHaveBeenCalledWith(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      toastId: id,
    });
  });

  it("should not show a toast notification if a toast with the same id is already active", () => {
    const text = "Notification text";
    const id = "notificationId";
    (mockToast.isActive as jest.Mock).mockReturnValueOnce(true);

    notify(text, id);

    expect(mockToast).not.toHaveBeenCalled();
  });
});

describe("person utils", () => {
  it("should return the first name of the person in the specified locale", () => {
    const firstNameEn = getPersonFirstName(mockPerson);
    expect(firstNameEn).toBe(mockPerson.first_name_en);

    const firstNameRu = getPersonFirstName(mockPerson, "ru");
    expect(firstNameRu).toBe(mockPerson.first_name_ru);
  });
  it("should return the last name of the person in the specified locale", () => {
    const lastNameEn = getPersonLastName(mockPerson);
    expect(lastNameEn).toBe(mockPerson.last_name_en);

    const lastNameRu = getPersonLastName(mockPerson, "ru");
    expect(lastNameRu).toBe(mockPerson.last_name_ru);
  });
  it("should return the slug of the first film role of the person", () => {
    const role = getPersonRole(mockPerson);
    expect(role).toBe(mockPerson.filmRoles[0].slug);
  });
});

describe("movie utils", () => {
  it("should return en name", () => {
    expect(getMovieName(mockMovie)).toEqual(mockMovie.name_en);
  });
  it("should return ru name", () => {
    const locale = "ru";
    expect(getMovieName(mockMovie, locale)).toEqual(mockMovie.name_ru);
  });
  it("should return formatted number", () => {
    expect(getFormateNumber(1555).charCodeAt(1)).toEqual(160);
  });
  it("should return format movie date", () => {
    expect(getMovieCounty(mockMovie)).toEqual("usa");
  });
  it("should return age img", () => {
    expect(getAgeImg(16)).toEqual("/images/age16.svg");
    expect(getAgeImg(18)).toEqual("/images/age18.svg");
    expect(getAgeImg(12)).toEqual("/images/age12.svg");
    expect(getAgeImg(6)).toEqual("/images/age6.svg");
    expect(getAgeImg(0)).toEqual("/images/age0.svg");
    expect(getAgeImg(14)).toEqual("/images/age16.svg");
  });
  it("should return format date", () => {
    const t = (srt: string): string => srt;
    const date = new Date("2023-05-08T07:38:01.507Z");
    expect(getFormateDate(date, t as TFunction)).toMatch(/movie:months.4/);
    expect(getFormateDate(date, t as TFunction)).toMatch(/2023/);
    expect(getFormateDate(date, t as TFunction)).toMatch(/8/);
  });
  it("should be define mockMovie", () => {
    expect(mockMovie).toBeDefined();
    expect(mockMovie.name_en).toBeDefined();
  });
});

describe("declOfNum", () => {
  it("should return a correct text form", () => {
    expect(declOfNum(15, ["фильм", "фильма", "фильмов"])).toBe("15 фильмов");
    expect(declOfNum(4, ["movie", "movies", "movies"])).toBe("4 movies");
    expect(declOfNum(1, ["car", "cars", "cars"])).toBe("1 car");
    expect(declOfNum(443, ["house", "houses", "houses"])).toBe("443 houses");
  });
});

describe("getBackendImg", () => {
  it("should return original img if protocol includes http or https", () => {
    const link = "http://example.com";
    const linkHttps = "https://example.com";
    expect(getBackendImage(link)).toBe(link);
    expect(getBackendImage(linkHttps)).toBe(linkHttps);
  });
  it("should return image with https if link doesn't have any protocol", () => {
    expect(getBackendImage("//example.jp")).toBe("https://example.jp");
  });
  it("should return undefined.scg if img is an empty string", () => {
    expect(getBackendImage("")).toBe("/images/undefined.svg");
  });
});

describe("localStorage", () => {
  const email = "test@example.com";
  const token = "testToken";

  it("should save data to localstorage", () => {
    setAuthData(email, token);

    expect(localStorage.getItem("email")).toBe(email);
    expect(localStorage.getItem("token")).toBe(token);
  });
  it("should save empty data if arguments haven't passed", () => {
    setAuthData();

    expect(localStorage.getItem("email")).toBe("");
    expect(localStorage.getItem("token")).toBe("");
  });
  it("should save only email to localStorage", () => {
    setAuthData(email);

    expect(localStorage.getItem("email")).toBe(email);
    expect(localStorage.getItem("token")).toBe("");
  });
  test("should save only token to localStorage", () => {
    setAuthData(undefined, token);

    expect(localStorage.getItem("email")).toBe("");
    expect(localStorage.getItem("token")).toBe(token);
  });
});

describe("cookies", () => {
  it("should return proper cookie", () => {
    document.cookie = "cookie1=value1";
    document.cookie = "cookie2=value2";

    const result = getCookieByName("cookie2");

    expect(result).toBe("value2");
  });
  it("should return null if can not find cookie", () => {
    document.cookie = "cookie1=value1";
    document.cookie = "cookie2=value2";

    const result = getCookieByName("cookie3");

    expect(result).toBeNull();
  });
});

describe("isBrowser", () => {
  it("createAppPortal returns a ReactPortal when documentRoot is found", () => {
    expect(isBrowser(undefined)).toBe(false);
  });
  it("createAppPortal returns a ReactPortal when documentRoot is found", () => {
    expect(isBrowser(true)).toBe(true);
  });
});
