import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {IPerson} from "/src/types/IPerson";

interface PersonsState {
  actors:IPerson[];
  directors: IPerson[];
}

const initialState: PersonsState = {
  actors: [],
  directors:[],
};
export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setPersons: (state, action: PayloadAction<PersonsState>) => {
      state.actors = action.payload.actors;
      state.directors = action.payload.directors;
    },
  },
});

export const {setPersons} = personsSlice.actions;
export default personsSlice.reducer;
