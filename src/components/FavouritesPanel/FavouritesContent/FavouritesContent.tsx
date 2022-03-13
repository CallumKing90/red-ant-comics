import React from "react";
import { FavouriteItem } from "../FavouritesItem/FavouriteItem";
import { getFavourites } from "../../../redux/selectors/applicationState/applicationStateSelector";
import { useAppSelector } from "../../../utils/hooks";

export function FavouritesContent(): JSX.Element {
  const favourites = useAppSelector(getFavourites);
  return (
    <div className="favourites-content">
      <ul className="favourites-list">
        {favourites &&
          favourites.map((favourite) => {
            return <FavouriteItem favourite={favourite} />;
          })}
        {!favourites.length && <p>You've not added any favourites yet</p>}
      </ul>
    </div>
  );
}
