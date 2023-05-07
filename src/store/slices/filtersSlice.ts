import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "/src/types/IMovie";
import { IFilters } from "/src/types/IFilter";
import getSortedList from "/src/utils/filters/getSortedList";
import { defaultFilters } from "/src/utils/filters/filtersVariables";

const initialState: {
  filters: IFilters;
  filteredMovies: IMovie[];
  filteredMoviesPage: number;
  sortingMethod: string;
  isMoviesLoading: boolean;
} = {
  filters: defaultFilters,
  filteredMovies: [],
  filteredMoviesPage: 1,
  sortingMethod: "assessments",
  isMoviesLoading: false,
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
    setFilteredMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.filteredMovies = getSortedList(state.sortingMethod, action.payload);
    },
    setFilteredMoviesPage: (state, action: PayloadAction<number>) => {
      state.filteredMoviesPage = action.payload;
    },
    setSortingMethod: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
    setIsMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.isMoviesLoading = action.payload;
    },
  },
});

export const {
  setFilters,
  setFilteredMovies,
  setFilteredMoviesPage,
  setSortingMethod,
  setIsMoviesLoading,
} = localeSlice.actions;
export default localeSlice.reducer;
