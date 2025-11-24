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

console.log(calculateChecksum());