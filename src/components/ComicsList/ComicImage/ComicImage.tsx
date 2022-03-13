import React from "react";

interface ComicImageProps {
  title: string;
  variation: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function ComicImage({
  thumbnail,
  variation,
  title,
}: ComicImageProps): JSX.Element {
  const url = `${thumbnail.path}/${variation}.${thumbnail.extension}`;

  return (
    <img
      src={url}
      alt={title}
      loading="lazy"
      data-testid="comic-image"
      role="img"
    />
  );
}
