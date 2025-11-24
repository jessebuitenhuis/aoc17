import { CoordinateMap, Position, sumFn, type Direction } from "../utils.js";

function getManhattanDistance(target: number) {
  let size = 1;
  let area = 1;

  while (area < target) {
    size += 2;
    area = size * size;
  }

  const prev = size - 1;
  const ownSize = prev * 4;
  const start = area - ownSize + 1;

  const levelLocation = target - start;
  const placeOnSide = levelLocation % prev;
  const center = prev / 2;
  const centerOffset = Math.abs(placeOnSide - center + 1);

  const manhattanDistance = centerOffset + prev / 2;
  return manhattanDistance;
}

function stressTest(input: number) {
  const values = new CoordinateMap<number>();
  const pos = new Position();
  values.set(pos.cur, 1);

  let max = 3;

  while (true) {
    const steps: [Direction, number][] = [
      ["right", 1],
      ["up", max - 2],
      ["left", max - 1],
      ["down", max - 1],
      ["right", max - 1],
    ];

    for (const [direction, stepCount] of steps) {
      for (let i = 0; i < stepCount; i++) {
        pos.move(direction);
        const sum = sumFn(values.getAdjacent(pos.cur));
        values.set(pos.cur, sum);
        if (sum > input) return sum;
      }
    }

    max += 2;
  }
}

const INPUT = 361527;
console.log(getManhattanDistance(INPUT));
console.log(stressTest(INPUT));
