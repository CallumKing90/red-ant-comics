import React from "react";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { useAppDispatch } from "../../utils/hooks";
import actions from "../../redux/actions-index";

export function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  const FavouriteClick = () => {
    dispatch(actions.setFavouriteState());
  };

  return (
    <header className="site-header" role="banner">
      <Heading variation="h1" className="site-heading">
        Red Ant Comics
      </Heading>
      <Button
        className="favourites-toggle js-favourites-toggle"
        onClick={FavouriteClick}
      />
    </header>
  );
}
