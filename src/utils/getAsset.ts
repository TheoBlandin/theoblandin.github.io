import { assets } from "./assets";

export function getAsset(path: string): string {
  const asset = assets[path];

  if (!asset) {
    console.warn(`Asset introuvable : ${path}`);
    return "";
  }

  return asset;
}
