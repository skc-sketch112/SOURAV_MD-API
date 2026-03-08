export default {
  async fetch(request) {
    try {
      const images = [
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/IMG-20260308-WA0000.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/712_blond_in.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/090_off_and.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/022_pink_taylor.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/943_foot_hardcore.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/375_her_big.jpg"
      ];

      const random = images[Math.floor(Math.random() * images.length)];

      return fetch(random);

    } catch (error) {
      return new Response('Error', { status: 500 });
    }
  }
}