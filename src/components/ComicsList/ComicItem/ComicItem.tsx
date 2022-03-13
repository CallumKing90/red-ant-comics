import React from "react";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { ComicImage } from "../ComicImage/ComicImage";
import { comicIdInArray } from "../../../utils/utils";
import { getFavourites } from "../../../redux/selectors/applicationState/applicationStateSelector";
import actions from "../../../redux/actions-index";
import Comic from "../../../ts/types/Comic";

interface comicProps {
  comic: Comic;
}

export function ComicItem({ comic }: comicProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(getFavourites);
  const { title, id, thumbnail } = comic;

  const isAddedToFavourites = comicIdInArray(favourites, id);

  const addToFavourites = () => {
    dispatch(actions.addToFavourites({ title, id }));
  };

  const removeFromFavourites = () => {
    dispatch(actions.removeFromFavourites(id));
  };

  return (
    <li className="comic-item" id={id} data-testid="comic-item">
      <div className="comic-card">
        <ComicImage
          title={title}
          variation="standard_fantastic"
          thumbnail={thumbnail}
        />
        <Heading variation="h2">{title}</Heading>
        {isAddedToFavourites ? (
          <Button className="button js-add" onClick={removeFromFavourites}>
            Remove from favourites
          </Button>
        ) : (
          <Button className="button js-add" onClick={addToFavourites}>
            Add to favourites
          </Button>
        )}
      </div>
    </li>
  );
}
