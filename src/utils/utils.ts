interface Favourite {
  title: string;
  id: string;
}

export const comicIdInArray = (
  favouritesList: Favourite[],
  comicId: string
) => {
  for (const favourite of favouritesList) {
    if (favourite.id === comicId) return true;
  }

  return false;
};
