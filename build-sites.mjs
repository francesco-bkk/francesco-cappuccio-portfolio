import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const worker = `const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || url.pathname.includes(".")) {
      return response;
    }

    const fallbackUrl = new URL(url);
    fallbackUrl.pathname = url.pathname.endsWith("/")
      ? url.pathname + "index.html"
      : url.pathname + "/index.html";

    response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    return response.status === 404
      ? new Response("Not found", { status: 404 })
      : response;
  },
};

export default worker;
`;

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await cp("out", "dist/client", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");
await writeFile("dist/server/index.js", worker);
