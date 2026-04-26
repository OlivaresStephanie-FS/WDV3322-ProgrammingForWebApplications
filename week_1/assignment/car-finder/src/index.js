// Import SCSS stylesheet so styles are bundled by Webpack
import './styles/index.scss';

// Imports the car dataset (JSON file) so we can work with the data
import cars from "./car-dataset.json";

// Selects the dropdown elements from the HTML using their IDs
const yearSelect = document.getElementById("year");
const makeSelect = document.getElementById("make");
const modelSelect = document.getElementById("model");

// Extracts all years from the dataset using map() and destructuring
// new Set() removes duplicate years
// spread operator (...) converts Set back into an array
// sort() arranges the years in ascending order
const years = [...new Set(cars.map(({ year }) => year))].sort((a, b) => a - b);

// Loops through each year and creates a dropdown option for it
years.forEach((year) => {
	const option = document.createElement("option"); // creates <option> element
	option.value = year; // sets the value attribute
	option.textContent = year; // sets the visible text
	yearSelect.appendChild(option); // adds option to the Year dropdown
});

// Adds an event listener that runs when the user selects a year
yearSelect.addEventListener("change", () => {

	// Converts selected value from string to number
	const selectedYear = Number(yearSelect.value);

	// Resets the Make and Model dropdowns back to default options
	makeSelect.innerHTML = `<option value="">Select Make</option>`;
	modelSelect.innerHTML = `<option value="">Select Model</option>`;

	// Disables Make and Model until valid selections are made
	makeSelect.disabled = true;
	modelSelect.disabled = true;

	// If no year is selected, stop execution
	if (!selectedYear) {
		return;
	}

	// Filters cars by selected year
	// Then extracts Manufacturer values
	// new Set removes duplicates, and sort arranges alphabetically
	const makes = [
		...new Set(
			cars
				.filter(({ year }) => year === selectedYear)
				.map(({ Manufacturer }) => Manufacturer),
		),
	].sort();

	// Loops through each make and adds it to the Make dropdown
	makes.forEach((make) => {
		const option = document.createElement("option");
		option.value = make;
		option.textContent = make;
		makeSelect.appendChild(option);
	});

	// Enables the Make dropdown after populating it
	makeSelect.disabled = false;
});

// Adds an event listener for when the user selects a make
makeSelect.addEventListener("change", () => {

	const selectedYear = Number(yearSelect.value); // gets selected year
	const selectedMake = makeSelect.value; // gets selected make

	// Resets the Model dropdown
	modelSelect.innerHTML = `<option value="">Select Model</option>`;
	modelSelect.disabled = true;

	// If year or make is not selected, stop execution
	if (!selectedYear || !selectedMake) {
		return;
	}

	// Filters cars by year AND make
	// Then extracts model names and sorts them
	const models = cars
		.filter(
			({ year, Manufacturer }) =>
				year === selectedYear && Manufacturer === selectedMake,
		)
		.map(({ model }) => model)
		.sort();

	// Adds each model to the Model dropdown
	models.forEach((model) => {
		const option = document.createElement("option");
		option.value = model;
		option.textContent = model;
		modelSelect.appendChild(option);
	});

	// Enables the Model dropdown after populating it
	modelSelect.disabled = false;
});

// Adds an event listener for when the user selects a model
modelSelect.addEventListener("change", () => {

	const selectedYear = Number(yearSelect.value); // gets selected year
	const selectedMake = makeSelect.value; // gets selected make
	const selectedModel = modelSelect.value; // gets selected model

	// If any selection is missing, stop execution
	if (!selectedYear || !selectedMake || !selectedModel) {
		return;
	}

	// Finds the exact car object that matches all three selections
	const selectedCar = cars.find(
		({ year, Manufacturer, model }) =>
			year === selectedYear &&
			Manufacturer === selectedMake &&
			model === selectedModel,
	);

	// Logs the full car object to the browser console
	console.log(selectedCar);
});