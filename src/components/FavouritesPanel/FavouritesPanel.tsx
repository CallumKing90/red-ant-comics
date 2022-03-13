import React from "react";
import { useAppSelector } from "../../utils/hooks";
import { getFavouritePanelStatus } from "../../redux/selectors/applicationState/applicationStateSelector";
import { FavouritesContent } from "./FavouritesContent/FavouritesContent";
import { FavouritesHeader } from "./FavouritesHeader/FavouritesHeader";

export function FavouritesPanel(): JSX.Element {
  const status = useAppSelector(getFavouritePanelStatus);

  return (
    <div
      id="favourites-panel"
      className={`favourites-panel ${status ? "open" : ""}`}
    >
      <FavouritesHeader />
      <FavouritesContent />
    </div>
  );
}
