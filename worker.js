export default {
  async fetch(request) {
    try {

      const repo = "skc-sketch112/Image-sourav-md";
      const api = `https://api.github.com/repos/${repo}/contents`;

      const res = await fetch(api);
      const data = await res.json();

      const images = data
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name))
        .map(file => file.download_url);

      if (images.length === 0) {
        return new Response("No images found", { status: 404 });
      }

      const random = images[Math.floor(Math.random() * images.length)];

      const img = await fetch(random);

      return new Response(img.body, {
        headers: {
          "Content-Type": img.headers.get("Content-Type"),
          "Cache-Control": "public, max-age=86400"
        }
      });

    } catch (err) {
      return new Response("Error: " + err.message);
    }
  }
}
