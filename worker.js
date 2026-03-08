export default {
  async fetch(request) {
    try {

      const repo = "skc-sketch112/Image-sourav-md";
      const url = `https://api.github.com/repos/${repo}/contents`;

      const res = await fetch(url, {
        headers: {
          "User-Agent": "Cloudflare-Worker"
        }
      });

      if (!res.ok) {
        return new Response("GitHub API error: " + res.status);
      }

      const data = await res.json();

      const images = data
        .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
        .map(f => f.download_url);

      if (images.length === 0) {
        return new Response("No images found");
      }

      const random = images[Math.floor(Math.random() * images.length)];

      const img = await fetch(random);

      return new Response(img.body, {
        headers: {
          "Content-Type": img.headers.get("Content-Type")
        }
      });

    } catch (err) {
      return new Response("Error: " + err.message);
    }
  }
}
