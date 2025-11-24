import { readInputLines } from "../utils.js";

const input = readInputLines("day2.txt").map(x => x.split("\t").map(x => parseInt(x, 10)));

function calculateChecksum() {
    let checksum = 0;
    
    for (const line of input) {
        const min = Math.min(...line);
        const max = Math.max(...line);
        checksum += max - min;
    }
    
    return checksum;
}

function areEvenlyDivisible(a: number, b: number) {
    return isEvenlyDivisible(a, b) || isEvenlyDivisible(b, a);
}

function isEvenlyDivisible(a: number, b: number) {
    const result = a / b;
    if (result === Math.round(result)) return result;
    return false;
}

function calculateDivisibleChecksum() {
    return input.reduce((sum, line) => sum + getDivisibleForLine(line), 0);
}

function getDivisibleForLine(line: number[]): number {
    for (let i = 0; i < line.length-1; i++) {
        for (let j = i+1; j < line.length; j++) {
            const result = areEvenlyDivisible(line[i]!, line[j]!);
            console.log(line[i], line[j], result);
            if (result) return result;
        }
    }
    throw new Error("No divisible found");
}

console.log(calculateChecksum());
console.log(calculateDivisibleChecksum());