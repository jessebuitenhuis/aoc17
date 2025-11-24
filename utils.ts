import fs from "fs";

export function readInput(path: string): string {
    return fs.readFileSync(`inputs/${path}`, 'utf-8');
}

export function readInputLines(path: string): string[] {
    const input = readInput(path);
    return input.split("\n");
}