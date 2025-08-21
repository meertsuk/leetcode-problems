function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  type Direction = "n" | "s" | "e" | "w";

  const directions = walk.reduce<Record<Direction, number>>(
    (acc, dir) => {
      acc[dir as Direction] += 1;
      return acc;
    },
    { n: 0, s: 0, e: 0, w: 0 }
  );
  return directions.n === directions.s && directions.e === directions.w;
}