export const siteUrl = "https://www.francescocappuccio.com";

export const siteName = "Cappuccio Design Studio";

export const siteDescription =
  "Portfolio of Francesco Cappuccio and Cappuccio Design Studio, featuring sculptural lighting, collectible furniture, product design, and spatial works.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function imageUrl(path: string) {
  return absoluteUrl(path);
}
