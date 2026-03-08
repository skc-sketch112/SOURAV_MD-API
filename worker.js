export default {
  async fetch(request) {
    try {
      const images = [
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/IMG-20260308-WA0000.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/712_blond_in.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/090_off_and.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/main/022_pink_taylor.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/943_foot_hardcore.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/375_her_big.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/132_17_watching.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/084_real_showing.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/690_with_holes.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/280292_masonry_600.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/278160_masonry_600.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/270144_masonry_600.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/263112_masonry_600.jpg",
        "https://raw.githubusercontent.com/skc-sketch112/Image-sourav-md/refs/heads/main/942_sex_Petite.jpg"
      ];

      const random = images[Math.floor(Math.random() * images.length)];

      return fetch(random);

    } catch (error) {
      return new Response('Error', { status: 500 });
    }
  }
}
