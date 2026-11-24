export const siteUrl = "https://www.francescocappuccio.com";

export const siteName = "Francesco Cappuccio";

export const siteDescription =
  "Architectural lighting and bespoke luminaires by Francesco Cappuccio, with selected furniture, objects and art collaborations.";

export const contactEmail = "francesco@francescocappuccio.com";

export const socialImage = "/images/og-home.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function imageUrl(path: string) {
  return absoluteUrl(path);
}
