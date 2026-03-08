export default {
  async fetch(request) {
    try {

      const repo = "skc-sketch112/Image-sourav-md";
      const api = `https://api.github.com/repos/${repo}/contents`;

      const response = await fetch(api);
      const files = await response.json();

      const images = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name))
        .map(file => file.download_url);

      if (!images.length) {
        return new Response("No images found", { status: 404 });
      }

      const random = images[Math.floor(Math.random() * images.length)];

      return fetch(random);

    } catch (error) {
      return new Response("Error", { status: 500 });
    }
  }
}
