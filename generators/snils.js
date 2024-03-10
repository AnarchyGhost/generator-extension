import {randomWithLength} from "../utils/random.js";

export const snils = () => {
    const number = randomWithLength(9)

    let sum = number
        .split('')
        .map((val, i) => parseInt(val) * (9 - i))
        .reduce((a, b) => a + b)

    const checkSum = String(sum%101%100).padStart(2, '0')
    return String(number + checkSum)
}