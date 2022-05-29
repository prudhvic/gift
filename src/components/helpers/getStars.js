import Star from "../ProductSection/Star";

export let dispalyStar = (num) => {
  return [...new Array(5).fill(0)].map((_, i) =>
    num >= i + 1 ? (
      <Star key={i} color="gold" />
    ) : (
      <Star color="white" key={i} />
    )
  );
};
