import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  favouritesPanelOpen: Boolean;
  favourites: Array<{ id: string; title: string }>;
};

const initialState: SliceState = { favouritesPanelOpen: false, favourites: [] };

export const applicationState = createSlice({
  name: "applicationState",
  initialState,
  reducers: {
    setFavouriteState: (state) => {
      state.favouritesPanelOpen = !state.favouritesPanelOpen;
    },
    addToFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFromFavourites: (state, action) => {
      const id = action.payload;

      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== id
      );
    },
  },
});

export const actions = applicationState.actions;

export default applicationState.reducer;
