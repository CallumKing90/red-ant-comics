import React from "react";
import { useAppDispatch } from "../../../utils/hooks";
import { Button } from "../../Button/Button";
import actions from "../../../redux/actions-index";
import Favourite from "../../../ts/types/Favourite";

export function FavouriteItem({ favourite }: Favourite): JSX.Element {
  const { title, id } = favourite;
  const dispatch = useAppDispatch();

  const removeFromFavourites = () => {
    dispatch(actions.removeFromFavourites(id));
  };

  return (
    <li>
      {title}
      <Button className="remove js-remove" onClick={removeFromFavourites} />
    </li>
  );
}
