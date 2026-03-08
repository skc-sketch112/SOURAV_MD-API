export default {
  async fetch(request, env, ctx) {
    try {

      const cache = caches.default;
      const cacheKey = new Request("https://cache/images-v2");

      let response = await cache.match(cacheKey);
      let images;

      if (response) {
        images = await response.json();
      } else {

        const repo = "skc-sketch112/Image-sourav-md";
        const url = `https://api.github.com/repos/${repo}/contents`;

        const res = await fetch(url, {
          headers: { "User-Agent": "Cloudflare-Worker" }
        });

        const data = await res.json();

        images = data
          .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
          .map(f => f.download_url);

        response = new Response(JSON.stringify(images), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60"
          }
        });

        ctx.waitUntil(cache.put(cacheKey, response.clone()));
      }

      if (!images || images.length === 0) {
        return new Response("No images found in repository");
      }

      const randomImage = images[Math.floor(Math.random() * images.length)];

      const img = await fetch(randomImage);

      return new Response(img.body, {
        headers: {
          "Content-Type": img.headers.get("Content-Type") || "image/jpeg",
          "Cache-Control": "public, max-age=86400"
        }
      });

    } catch (err) {
      return new Response("Error: " + err.message);
    }
  }
};
