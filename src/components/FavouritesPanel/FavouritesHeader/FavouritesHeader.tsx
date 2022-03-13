import React from "react";
import { useAppDispatch } from "../../../utils/hooks";
import { Heading } from "../../Heading/Heading";
import { Button } from "../../Button/Button";
import actions from "../../../redux/actions-index";

export function FavouritesHeader(): JSX.Element {
  const dispatch = useAppDispatch();

  const CloseButtonClick = () => {
    dispatch(actions.setFavouriteState());
  };

  return (
    <div className="favourites-header">
      <Heading variation="h2">Favourites</Heading>
      <Button className="close js-close" onClick={CloseButtonClick} />
    </div>
  );
}
