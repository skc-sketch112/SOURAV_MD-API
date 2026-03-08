export default {
  async fetch(request) {

    const images = [
      "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/IMG-20260308-WA0000.jpg"
    ];

    const random = images[Math.floor(Math.random() * images.length)];

    return fetch(random);

  }
}
