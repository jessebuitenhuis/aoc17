import { readInput } from "./utils";

const input = readInput("day1a.txt")
console.log(input);

let sum = 0;

for (let i = 0; i < input.length; i++) {
    const j = (i+1)%input.length;
    if (input[i] == input[j]) {
        sum += parseInt(input[i]);
    }
}

console.log(sum);