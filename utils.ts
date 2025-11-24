import fs from "fs";

export function readInput(path: string): string {
  return fs.readFileSync(`inputs/${path}`, "utf-8");
}

export function readInputLines(path: string): string[] {
  const input = readInput(path);
  return input.split("\n");
}

type Coord = [x: number, y: number];

export class CoordinateMap<T> {
  private _values: T[][] = [];

  get([x, y]: Coord): T | undefined {
    return this._values[y]?.[x];
  }

  set([x, y]: Coord, value: T): void {
    this._values[y] = this._values[y] ?? [];
    this._values[y][x] = value;
  }

  getAdjacent([posX, posY]: Coord): T[] {
    const found: T[] = [];

    for (let x = posX - 1; x <= posX + 1; x++) {
      for (let y = posY - 1; y <= posY + 1; y++) {
        const value = this.get([x, y]);
        if (value) found.push(value);
      }
    }

    return found;
  }

  mapAdjacent<V>(coord: Coord, mapFn: (items: T[]) => V): V {
    return mapFn(this.getAdjacent(coord));
  }
}

export function sumFn(items: number[]): number {
  return items.reduce((sum, cur) => sum + cur, 0);
}

export type Direction = "left" | "right" | "up" | "down";

export class Position {
  constructor(public cur: Coord = [0, 0]) {}

  move(direction: Direction) {
    this.cur = Position.move(this.cur, direction);
  }

  static move([x, y]: Coord, direction: Direction): Coord {
    switch (direction) {
      case "left":
        return [x - 1, y];
      case "up":
        return [x, y - 1];
      case "right":
        return [x + 1, y];
      case "down":
        return [x, y + 1];
      default:
        return [x, y];
    }
  }
}
