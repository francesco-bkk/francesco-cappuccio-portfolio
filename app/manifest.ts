import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cappuccio Design Studio",
    short_name: "Cappuccio Studio",
    description:
      "The portfolio of Francesco Cappuccio and Cappuccio Design Studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#f7f5f0"
  };
}
