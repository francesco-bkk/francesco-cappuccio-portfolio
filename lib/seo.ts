export const siteUrl = "https://www.francescocappuccio.com";

export const siteName = "Francesco Cappuccio";

export const siteDescription =
  "Personal portfolio of designer Francesco Cappuccio, featuring sculptural lighting, collectible furniture, product design, and spatial works.";

export const contactEmail = "francesco@francescocappuccio.com";

export const socialImage = "/images/og-home.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function imageUrl(path: string) {
  return absoluteUrl(path);
}
