function sumOfArray(arr) { // Check if the input is an array
    if (!Array.isArray(arr)) return 0; // Use reduce to sum only numeric values, ignoring non-numeric ones

    return arr.reduce((sum, value) => { // Check if the value is a number before adding it to the sum
        return typeof value === "number" ? sum + value : sum;
    }, 0);
}

function reverseString(str) { // Check if the input is a string
    return String(str).split("").reverse().join(""); // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string
}

function findMax(arr) { // Check if the input is an array and not empty
    if (!Array.isArray(arr) || arr.length === 0) return null;// Filter out non-number values and find the maximum among the remaining numbers

    const numbersOnly = arr.filter((value) => typeof value === "number"); // Filter out non-number values

    if (numbersOnly.length === 0) return null; // If there are no numeric values, return null

    return Math.max(...numbersOnly); // Use the spread operator to find the maximum value among the numeric values
}

function capitalizeWords(str) { // Check if the input is a string
    if (typeof str !== "string") return "";

    return str
        .split(" ") // Split the string into words
        .map((word) => { // Capitalize the first letter and lowercase the rest of each word
            if (word.length === 0) return word; // Handle empty strings
            return word[0].toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter and lowercase the rest
        })
        .join(" "); // Join the words back into a single string
}

module.exports = {
    sumOfArray,
    reverseString,
    findMax,
    capitalizeWords,
};
