import { readInput } from "./utils";

const input = readInput("day1a.txt")
console.log(input);

function calculateSum(offset = 1) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        const j = (i+offset)%input.length;
        if (input[i] == input[j]) {
            sum += parseInt(input[i]);
        }
    }
    return sum;
}

const answerA = calculateSum();
const answerB = calculateSum(input.length / 2);


console.log(answerA);
console.log(answerB);