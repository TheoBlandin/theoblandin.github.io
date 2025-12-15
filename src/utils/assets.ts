type AssetMap = Record<string, string>;

const projectAssets = import.meta.glob(
  "/src/assets/projects/**/*.{webp,svg,png,mp4}",
  {
    eager: true,
    import: "default",
  }
);

const aboutAssets = import.meta.glob(
  "/src/assets/about/**/*.{webp,svg,png}",
  {
    eager: true,
    import: "default",
  }
);

const homeAssets = import.meta.glob(
  "/src/assets/home/*.{webp,svg,png}",
  {
    eager: true,
    import: "default",
  }
);

export const assets: AssetMap = {
  ...projectAssets,
  ...aboutAssets,
  ...homeAssets
};
