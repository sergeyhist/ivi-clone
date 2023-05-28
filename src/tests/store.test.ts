import { authSlice, UserAuth } from "/src/store/slices/authSlice";
import { filtersSlice, FiltersState } from "/src/store/slices/filtersSlice";
import {
  IMovieModal,
  modalsSlice,
  ModalStates,
} from "/src/store/slices/modalsSlice";
import { slugsSlice, SlugsState } from "/src/store/slices/slugsSlice";
import { windowSizeSlice } from "/src/store/slices/windowSizeSlice";
import { IFilters } from "/src/types/IFilter";
import { IMovie } from "/src/types/IMovie";
import IWindowSize from "/src/types/IWindowSize";
import { defaultFilters } from "/src/utils/filters/filtersVariables";
import getSortedList from "/src/utils/filters/getSortedList";
import { mockMovie } from "/src/utils/mocks/movies";

/* eslint-disable */
describe("authSlice", () => {
  let initialState: UserAuth;

  beforeEach(() => {
    initialState = {
      isLogged: false,
      userEmail: "",
    };
  });

  test("setAuth should work correctly", () => {
    const authInfo: UserAuth = {
      isLogged: true,
      userEmail: "test",
    };

    const action = authSlice.actions.setAuth(authInfo);
    const newState = authSlice.reducer(initialState, action);

    expect(newState.isLogged).toEqual(true);
    expect(newState.userEmail).toEqual("test");
  });

  test("setRole should work correctly", () => {
    const role = "admin";

    const action = authSlice.actions.setRole(role);
    const newState = authSlice.reducer(initialState, action);

    expect(newState.role).toEqual("admin");
  });
});

describe("filtersSlice", () => {
  let initialState: FiltersState;
  beforeEach(() => {
    initialState = {
      filters: defaultFilters,
      filteredMovies: [],
      sortingMethod: "assessments",
      isMoviesLoading: false,
      moviesPage: 1,
    };
  });
  it("should handle setFilters", () => {
    const filters: IFilters = {
      genres: "Action",
      countries: "Brazil",
      year: "1999",
      rating: "100",
      assessments: "none",
      actor: "Jonny",
      director: "Billy",
    };
    const action = filtersSlice.actions.setFilters(filters);
    const newState = filtersSlice.reducer(initialState, action);

    expect(newState.filters).toEqual(filters);
  });
  it("should handle setFilteredMovies", () => {
    const movies: IMovie[] = [mockMovie];

    const expectedFilteredMovies = getSortedList(
      initialState.sortingMethod,
      movies
    );

    const action = filtersSlice.actions.setFilteredMovies(movies);
    const newState = filtersSlice.reducer(initialState, action);

    expect(newState.filteredMovies).toEqual(expectedFilteredMovies);
  });

  it("should handle setSortingMethod", () => {
    const sortingMethod = "newest";

    const action = filtersSlice.actions.setSortingMethod(sortingMethod);
    const newState = filtersSlice.reducer(initialState, action);

    expect(newState.sortingMethod).toEqual(sortingMethod);
  });

  it("should handle setIsMoviesLoading", () => {
    const isLoading = true;

    const action = filtersSlice.actions.setIsMoviesLoading(isLoading);
    const newState = filtersSlice.reducer(initialState, action);

    expect(newState.isMoviesLoading).toEqual(isLoading);
  });

  it("should handle setMoviesPage", () => {
    const moviesPage = 2;

    const action = filtersSlice.actions.setMoviesPage(moviesPage);
    const newState = filtersSlice.reducer(initialState, action);

    expect(newState.moviesPage).toEqual(moviesPage);
  });
});

describe("modalsSlice", () => {
  let initialState: ModalStates;

  beforeEach(() => {
    initialState = {
      showAuthModal: false,
      showSearchModal: false,
      showMovieModal: { isShow: false, defaultTab: "actors" },
    };
  });

  it("should handle setShowMovieModal", () => {
    const movieModal: IMovieModal = {
      isShow: true,
      defaultTab: "actors",
    };

    const action = modalsSlice.actions.setShowMovieModal(movieModal);
    const newState = modalsSlice.reducer(initialState, action);

    expect(newState.showMovieModal).toEqual(movieModal);
  });

  it("should handle setShowSearchModal", () => {
    const showSearchModal = true;

    const action = modalsSlice.actions.setShowSearchModal(showSearchModal);
    const newState = modalsSlice.reducer(initialState, action);

    expect(newState.showSearchModal).toEqual(showSearchModal);
  });

  it("should handle setShowAuthModal", () => {
    const showAuthModal = true;

    const action = modalsSlice.actions.setShowAuthModal(showAuthModal);
    const newState = modalsSlice.reducer(initialState, action);

    expect(newState.showAuthModal).toEqual(showAuthModal);
  });
});

describe("slugsSlice", () => {
  let initialState: SlugsState;

  beforeEach(() => {
    initialState = {
      genresSlugs: [],
      countriesSlugs: [],
    };
  });

  it("should handle setSlugs", () => {
    const newSlugs: SlugsState = {
      genresSlugs: ["action", "comedy", "drama"],
      countriesSlugs: ["usa", "uk", "france"],
    };

    const action = slugsSlice.actions.setSlugs(newSlugs);
    const newState = slugsSlice.reducer(initialState, action);

    expect(newState.genresSlugs).toEqual(newSlugs.genresSlugs);
    expect(newState.countriesSlugs).toEqual(newSlugs.countriesSlugs);
  });
});

describe("windowSizeSlice", () => {
  let initialState: IWindowSize;

  beforeEach(() => {
    initialState = { width: 0, height: 0 };
  });

  it("should handle setWindowSize", () => {
    const newWindowSize: IWindowSize = { width: 800, height: 600 };

    const action = windowSizeSlice.actions.setWindowSize(newWindowSize);
    const newState = windowSizeSlice.reducer(initialState, action);

    expect(newState.width).toEqual(newWindowSize.width);
    expect(newState.height).toEqual(newWindowSize.height);
  });
});
