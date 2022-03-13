import React from "react";
import { ComicItem } from "./ComicItem/ComicItem";
import { useGetAllComicsQuery } from "../../redux/services/marvel/marvelApi";
import Comic from "../../ts/types/Comic";

export function ComicsList() {
  const {
    data = [],
    error,
    isLoading,
  } = useGetAllComicsQuery({ baseUrl: "https://gateway.marvel.com/v1/public" });
  const { results: comics } = data?.data ?? [];

  return (
    <>
      {error && <p>Error</p>}
      {isLoading && <p>Loading</p>}
      {comics && (
        <ul id="comics-list" className="comics-list">
          {comics.map((comic: Comic): React.ReactNode => {
            const { id, title, thumbnail } = comic;
            const currentComic = { id, title, thumbnail };
            const key = `comic_${id}`;

            return <ComicItem key={key} comic={currentComic} />;
          })}
        </ul>
      )}
    </>
  );
}
