import { getMovieDeclination } from "/src/utils/getMovieDeclination";
import { notify } from "/src/utils/defaultToast";
import toastify from "react-toastify";
import {
  getPersonFirstName,
  getPersonLastName,
  getPersonRole,
  mockPerson,
} from "/src/utils/person";
import {
  mockMovie,
  getMovieName,
  getMovieCounty,
  getFormateNumber,
  getFormateDate,
  getAgeImg,
} from "../utils/movie";
import { TFunction } from "next-i18next";

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
  const mockToast = jest.spyOn(toastify, "toast");
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
    const locale = "en";
    expect(getMovieName(mockMovie, locale)).toEqual(mockMovie.name_en);
  });
  it("should return ru name", () => {
    const locale = "ru";
    expect(getMovieName(mockMovie, locale)).toEqual(mockMovie.name_ru);
  });
  it("should return formate number", () => {
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
});
