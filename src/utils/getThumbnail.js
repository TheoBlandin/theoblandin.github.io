const thumbnails = {
  'manger-de-saison': require('./../assets/screens/manger-de-saison/thumbnail.png'),
  'borne-orange': require('./../assets/screens/borne-orange/thumbnail.png'),
  'swap': require('./../assets/screens/swap/thumbnail.png'),
};

export const getThumbnailPath = (project) => {
  return thumbnails[project] || null;
};
