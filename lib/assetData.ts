const assetVersion = "20260810";
const withVersion = (path: string) => `${path}?v=${assetVersion}`;

export const logoArt = withVersion("/logo.png");

export const heroArt = withVersion("/gallery/gallery-01.jpeg");

export const aboutArt = withVersion("/gallery/gallery-01.jpeg");

export const featuredGameArt = {
  tekken8: withVersion("/games/tekken-8.jpeg"),
  fc26: withVersion("/games/fc-26.jpeg"),
  gta6: withVersion("/games/gta-6.jpeg"),
  spiderman2: withVersion("/games/spiderman-2.jpeg"),
  gt7: withVersion("/games/gran-turismo-7.jpeg"),
  gow: withVersion("/games/god-of-war.jpeg"),
  cricket26: withVersion("/games/fc-26.jpeg"),
};

export const galleryArt = [
  withVersion("/gallery/gallery-01.jpeg"),
  withVersion("/gallery/gallery-02.jpeg"),
  withVersion("/gallery/gallery-03.jpeg"),
  withVersion("/gallery/gallery-04.jpeg"),
  withVersion("/gallery/gallery-05.jpeg"),
  withVersion("/gallery/gallery-01.jpeg"),
  withVersion("/gallery/gallery-02.jpeg"),
  withVersion("/gallery/gallery-03.jpeg"),
  withVersion("/gallery/gallery-04.jpeg"),
  withVersion("/gallery/gallery-05.jpeg"),
  withVersion("/gallery/gallery-01.jpeg"),
  withVersion("/gallery/gallery-02.jpeg"),
];
