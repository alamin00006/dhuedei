function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/chooseImg", false, /\.(JPG|png|jpe?g|svg)$/)
);

export const chooses = [
  {
    id: 1,
    icon: images["High-Quality.jpeg"],
    title: "HIGH QUALITY SERVICE",
    description:
      "Your clothes are carefully cleaned with the most efficient laundry.",
  },
  {
    id: 2,
    icon: images["cutting-edge-technology.jpeg"],
    title: "CUTTING EDGE TECHNOLOGY",
    description:
      "We use the world's most modern technology machines and high quality chemicals.",
  },
  {
    id: 3,
    icon: images["One-stop-solution.JPG"],
    title: "ONE STOP SOLUTION",
    description:
      "You can do your laundry, dry cleaning, and ironing all at one place.",
  },
  {
    id: 4,
    icon: images["online-order-pick-up.jpeg"],
    title: "ONLINE ORDER & PICK UP",
    description:
      "After complete your order our rider will pick up and delivered to you.",
  },
  {
    id: 5,
    icon: images["safety-cloth.jpeg"],
    title: "SAFETY OF CLOTHES",
    description:
      "Your clothes are cleaned by expert staff with in-depth knowledge of fabric and garments.",
  },
  {
    id: 6,
    icon: images["complete-satisfaction.jpeg"],
    title: "COMPLETE SATISFACTION",
    description:
      "We ensure a smile with every service we provide you. Your smile is our reward.",
  },
];
