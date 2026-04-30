function sumOfArray(arr) {
    if (!Array.isArray(arr)) return 0;

    return arr.reduce((sum, value) => {
        return typeof value === "number" ? sum + value : sum;
    }, 0);
}

function reverseString(str) {
    return String(str).split("").reverse().join("");
}

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const numbersOnly = arr.filter((value) => typeof value === "number");

    if (numbersOnly.length === 0) return null;

    return Math.max(...numbersOnly);
}

function capitalizeWords(str) {
    if (typeof str !== "string") return "";

    return str
        .split(" ")
        .map((word) => {
            if (word.length === 0) return word;
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}

module.exports = {
    sumOfArray,
    reverseString,
    findMax,
    capitalizeWords,
};
