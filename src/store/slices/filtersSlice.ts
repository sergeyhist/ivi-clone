import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "/src/types/IMovie";
import { IFilters } from "/src/types/IFilter";
import getSortedList from "/src/utils/filters/getSortedList";
import { defaultFilters } from "/src/utils/filters/filtersVariables";

export interface FiltersState  {
  filters: IFilters;
  filteredMovies: IMovie[];
  filteredMoviesPage: number;
  sortingMethod: string;
  isMoviesLoading: boolean;
}

const initialState: FiltersState= {
  filters: defaultFilters,
  filteredMovies: [],
  filteredMoviesPage: 1,
  sortingMethod: "assessments",
  isMoviesLoading: false,
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
} = filtersSlice.actions;
export default filtersSlice.reducer;
