const {
	sumOfArray,
	reverseString,
	findMax,
	capitalizeWords,
} = require("./utils");

describe("sumOfArray()", () => { // Check if the input is an array
	test("adds all numbers in an array", () => {
		expect(sumOfArray([1, 2, 3, 4])).toBe(10);
	}); // Use reduce to sum only numeric values, ignoring non-numeric ones

	test("handles negative numbers", () => { // Check if the value is a number before adding it to the sum
		expect(sumOfArray([-1, -2, 3])).toBe(0);
	}); // Check if the value is a number before adding it to the sum

	test("returns 0 for an empty array", () => { // Check if the input is an array
		expect(sumOfArray([])).toBe(0);
	}); // Check if the input is not an array

	test("ignores non-number values", () => { // Check if the value is a number before adding it to the sum
		expect(sumOfArray([5, "hello", 10, true])).toBe(15);
	}); // Check if the value is a number before adding it to the sum

	test("returns 0 if the input is not an array", () => {
		expect(sumOfArray("not an array")).toBe(0);
	}); // Check if the input is not an array
});

describe("reverseString()", () => { // Check if the input is a string
	test("reverses a normal string", () => { // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string
		expect(reverseString("hello")).toBe("olleh");
	});

	test("reverses a string with spaces", () => {
		expect(reverseString("hello world")).toBe("dlrow olleh");
	}); // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string

	test("handles an empty string", () => { // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string
		expect(reverseString("")).toBe("");
	}); // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string

	test("converts numbers to strings before reversing", () => { // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string
		expect(reverseString(12345)).toBe("54321");
	});

	test("handles negative numbers", () => { // Convert the input to a string, split it into characters, reverse the array of characters, and join them back into a string
		expect(reverseString(-123)).toBe("321-");
	});
});

describe("findMax()", () => { // Check if the input is an array and not empty
	test("returns the largest number in an array", () => {
		expect(findMax([1, 5, 3, 9, 2])).toBe(9);
	}); // Filter out non-number values and find the maximum among the remaining numbers

	test("handles negative numbers", () => {
		expect(findMax([-10, -3, -25])).toBe(-3);
	}); // Filter out non-number values and find the maximum among the remaining numbers

	test("handles mixed positive and negative numbers", () => {
		expect(findMax([-5, 0, 12, -2])).toBe(12);
	}); // Filter out non-number values and find the maximum among the remaining numbers

	test("returns null for an empty array", () => {
		expect(findMax([])).toBeNull();
	}); // Check if the input is an array and not empty

	test("ignores non-number values", () => {
		expect(findMax([4, "100", true, 8])).toBe(8);
	}); // Filter out non-number values and find the maximum among the remaining numbers

	test("returns null if the input is not an array", () => {
		expect(findMax("not an array")).toBeNull();
	});// Check if the input is an array and not empty
});

describe("capitalizeWords()", () => {
	test("capitalizes the first letter of each word", () => {
		expect(capitalizeWords("hello world")).toBe("Hello World");
	});// Check if the input is a string

	test("handles words with mixed casing", () => {
		expect(capitalizeWords("hELLo WoRLD")).toBe("Hello World");
	}); // Capitalize the first letter and lowercase the rest of each word

	test("handles a single word", () => {
		expect(capitalizeWords("javascript")).toBe("Javascript");
	}); // Capitalize the first letter and lowercase the rest of each word

	test("handles an empty string", () => {
		expect(capitalizeWords("")).toBe("");
	}); // Handle empty strings

	test("keeps extra spaces in the string", () => {
		expect(capitalizeWords("hello  world")).toBe("Hello  World");
	}); // Capitalize the first letter and lowercase the rest of each word

	test("returns an empty string for non-string input", () => {
		expect(capitalizeWords(123)).toBe("");
	});// Check if the input is a string
});
