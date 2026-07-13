import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Francesco Cappuccio",
    short_name: "Francesco Cappuccio",
    description:
      "The personal portfolio of designer Francesco Cappuccio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#f7f5f0"
  };
}
