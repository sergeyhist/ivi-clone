import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "/src/types/IMovie";
import { IFilters } from "/src/types/IFilter";
import getSortedList from "/src/utils/filters/getSortedList";
import { defaultFilters } from "/src/utils/filters/filtersVariables";

export interface FiltersState {
  filters: IFilters;
  filteredMovies: IMovie[];
  sortingMethod: string;
  isMoviesLoading: boolean;
  moviesPage: number;
}

const initialState: FiltersState = {
  filters: defaultFilters,
  filteredMovies: [],
  sortingMethod: "assessments",
  isMoviesLoading: false,
  moviesPage: 1,
};

export const filtersSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
    setFilteredMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.filteredMovies = getSortedList(state.sortingMethod, action.payload);
    },
    setSortingMethod: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
    setIsMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.isMoviesLoading = action.payload;
    },
    setMoviesPage: (state, action: PayloadAction<number>) => {
      state.moviesPage = action.payload;
    },
  },
});

export const {
  setFilters,
  setFilteredMovies,
  setSortingMethod,
  setIsMoviesLoading,
  setMoviesPage,
} = filtersSlice.actions;
export default filtersSlice.reducer;
