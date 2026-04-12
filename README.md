# WDV3322-ProgrammingForWebApplications

The focus of this course includes:

- Modern JavaScript (ES6+)
- Node.js fundamentals
- SCSS styling
- Webpack and module bundling
- Building interactive web applications

---

## Project Structure

20-ProgrammingForWebApplications/
│
├── week_1/
│ ├── assignment/
│ │ └── car-finder/
│ └── notes/
│
├── week_2/
├── week_3/
└── ...

---

## Week 1 – Car Finder Application

### Overview

The Car Finder application allows users to search for vehicles based on Year, Make, and Model.

The application dynamically filters available options based on user selections and prints the full car details to the browser console once all selections are made.

---

### Features

- Dynamic dropdown population using JavaScript
- Data filtering using map(), filter(), and find()
- ES6 syntax including arrow functions and destructuring
- Use of Set to extract unique values
- Progressive form behavior:
    - Make is disabled until Year is selected
    - Model is disabled until Make is selected
- SCSS styling with nested structure and variables
- Responsive layout

---

### Technologies Used

- HTML5
- SCSS (Sass)
- JavaScript (ES6)
- Node.js
- Webpack

---

### How to Run the Project

Navigate to the project folder:

cd week_1/assignment/car-finder

Install dependencies:

npm install

Start the development server:

npm run start

Open your browser and go to:

http://localhost:9000

---

### How It Works

1. Select a Year
2. Select a Make
3. Select a Model
4. View the selected car details in the browser console

---

### Notes

- The dataset is stored locally in car-dataset.json
- Webpack is used to bundle JavaScript and SCSS
- The UI was built from scratch based on provided design assets

---

## Author

Stephanie Olivares  
WDV3322 – Programming for Web Applications
