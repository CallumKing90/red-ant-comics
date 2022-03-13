import { createSelector } from "@reduxjs/toolkit";

type applicationStateType = {
  favouritesPanelOpen: Boolean;
  favourites: Array<{ id: string; title: string }>;
};

interface applicationState {
  applicationState: applicationStateType;
}

export const getFavourites = createSelector(
  (state: applicationState) => state.applicationState.favourites,
  (favourites) => favourites
);

export const getFavouritePanelStatus = createSelector(
  (state: applicationState) => state.applicationState.favouritesPanelOpen,
  (favouritesPanelOpen) => favouritesPanelOpen
);
