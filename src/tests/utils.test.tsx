import {getMovieDeclination} from "/src/utils/getMovieDeclination";
import {notify} from "/src/utils/defaultToast";
import toastify from "react-toastify";
import {getPersonFirstName, getPersonLastName, getPersonRole, mockPersons} from "/src/utils/person";

describe("getMovieDeclination",()=>{
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
jest.mock('react-toastify');

describe("notify", () => {
  const mockToast = jest.spyOn(toastify,'toast');
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

describe("person utils",()=>{
  it("should return the first name of the person in the specified locale", () => {
    const firstNameEn = getPersonFirstName(mockPersons[0]);
    expect(firstNameEn).toBe(mockPersons[0].first_name_en);

    const firstNameRu = getPersonFirstName(mockPersons[0], "ru");
    expect(firstNameRu).toBe(mockPersons[0].first_name_ru);
  });
  it("should return the last name of the person in the specified locale", () => {
    const lastNameEn = getPersonLastName(mockPersons[0]);
    expect(lastNameEn).toBe(mockPersons[0].last_name_en);

    const lastNameRu = getPersonLastName(mockPersons[0], "ru");
    expect(lastNameRu).toBe(mockPersons[0].last_name_ru);
  });
  it("should return the slug of the first film role of the person", () => {
    const role = getPersonRole(mockPersons[0]);
    expect(role).toBe(mockPersons[0].filmRoles[0].slug);
  });
})