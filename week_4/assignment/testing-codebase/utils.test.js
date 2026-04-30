const {
	sumOfArray,
	reverseString,
	findMax,
	capitalizeWords,
} = require("./utils");

describe("sumOfArray()", () => {
	test("adds all numbers in an array", () => {
		expect(sumOfArray([1, 2, 3, 4])).toBe(10);
	});

	test("handles negative numbers", () => {
		expect(sumOfArray([-1, -2, 3])).toBe(0);
	});

	test("returns 0 for an empty array", () => {
		expect(sumOfArray([])).toBe(0);
	});

	test("ignores non-number values", () => {
		expect(sumOfArray([5, "hello", 10, true])).toBe(15);
	});

	test("returns 0 if the input is not an array", () => {
		expect(sumOfArray("not an array")).toBe(0);
	});
});

describe("reverseString()", () => {
	test("reverses a normal string", () => {
		expect(reverseString("hello")).toBe("olleh");
	});

	test("reverses a string with spaces", () => {
		expect(reverseString("hello world")).toBe("dlrow olleh");
	});

	test("handles an empty string", () => {
		expect(reverseString("")).toBe("");
	});

	test("converts numbers to strings before reversing", () => {
		expect(reverseString(12345)).toBe("54321");
	});

	test("handles negative numbers", () => {
		expect(reverseString(-123)).toBe("321-");
	});
});

describe("findMax()", () => {
	test("returns the largest number in an array", () => {
		expect(findMax([1, 5, 3, 9, 2])).toBe(9);
	});

	test("handles negative numbers", () => {
		expect(findMax([-10, -3, -25])).toBe(-3);
	});

	test("handles mixed positive and negative numbers", () => {
		expect(findMax([-5, 0, 12, -2])).toBe(12);
	});

	test("returns null for an empty array", () => {
		expect(findMax([])).toBeNull();
	});

	test("ignores non-number values", () => {
		expect(findMax([4, "100", true, 8])).toBe(8);
	});

	test("returns null if the input is not an array", () => {
		expect(findMax("not an array")).toBeNull();
	});
});

describe("capitalizeWords()", () => {
	test("capitalizes the first letter of each word", () => {
		expect(capitalizeWords("hello world")).toBe("Hello World");
	});

	test("handles words with mixed casing", () => {
		expect(capitalizeWords("hELLo WoRLD")).toBe("Hello World");
	});

	test("handles a single word", () => {
		expect(capitalizeWords("javascript")).toBe("Javascript");
	});

	test("handles an empty string", () => {
		expect(capitalizeWords("")).toBe("");
	});

	test("keeps extra spaces in the string", () => {
		expect(capitalizeWords("hello  world")).toBe("Hello  World");
	});

	test("returns an empty string for non-string input", () => {
		expect(capitalizeWords(123)).toBe("");
	});
});
