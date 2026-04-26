# WDV3322 - Programming For Web Applications

The focus of this course includes:

- Modern JavaScript (ES6+)
- TypeScript fundamentals
- Node.js fundamentals
- SCSS styling
- Webpack and module bundling
- Building interactive web applications

---

## Project Structure

20-ProgrammingForWebApplications/
├── week_1/
│ ├── assignment/
│ │ └── car-finder/
│ └── notes/
├── week_2/
│ ├── assignment/
│ │ └── card-match/
│ └── notes/
├── week_3/
│ └── notes/
├── week_4/
│ ├── pixijs-project/
│ │ └── index.html
│ └── notes/
└── README.md

---

## Week 1 – Car Finder Application

### Overview

The Car Finder application allows users to search for vehicles based on Year, Make, and Model.

The application dynamically filters available options based on user selections and prints the full car details to the browser console once all selections are made.

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

### Technologies Used

- HTML5
- SCSS (Sass)
- JavaScript (ES6)
- Node.js
- Webpack

### How to Run the Project

Navigate to the project folder:

cd week_1/assignment/car-finder

Install dependencies:

npm install

Start the development server:

npm run start

Open your browser and go to:

http://localhost:9000

### How It Works

1. Select a Year
2. Select a Make
3. Select a Model
4. View the selected car details in the browser console

### Notes

- The dataset is stored locally in car-dataset.json
- Webpack is used to bundle JavaScript and SCSS
- The UI was built from scratch based on provided design assets

---

## Week 2 – Card Match Game

### Overview

The Card Match Game is an interactive browser-based memory game built using TypeScript and SCSS.

The objective is to match all three pairs of cards within a maximum of three attempts.

### Features

- 6-card game board with 3 matching pairs
- Randomized card shuffle on every new game
- Attempt tracking system (maximum of 3 attempts)
- Card flip and match comparison logic
- Matched cards remain visible
- Non-matching cards reset after a short delay
- Win and loss state detection
- Restart functionality
- TypeScript usage including interfaces and enums
- SCSS styling and responsive layout

### Technologies Used

- HTML5
- SCSS (Sass)
- TypeScript
- Node.js
- Webpack

### How to Run the Project

cd week_2/assignment/card-match

npm install

npm run start

http://localhost:9000

### How It Works

1. Game initializes with 6 shuffled cards
2. Player selects two cards per attempt
3. Matching cards remain visible
4. Non-matching cards reset
5. Game ends on win or loss
6. Player can restart anytime

### Notes

- TypeScript compiled to JavaScript
- Interfaces define card structure
- Enums manage game state
- Webpack handles bundling

---

## Week 4 – PixiJS Application

### Overview

This project uses PixiJS to create an interactive 2D application with a moving circle that bounces within a boundary.

The application tracks each border collision and uses a Promise to determine when all four borders have been hit.

### Features

- PixiJS rendering engine
- Animated circle using ticker
- Collision detection with four borders
- Accurate edge detection using circle radius
- Tracking collisions using a Set
- Promise-based completion logic
- Application stops after all borders are hit
- Border color changes on collision

### Technologies Used

- HTML5
- JavaScript (ES6)
- PixiJS

### How It Works

1. Circle starts in center of screen
2. Circle moves continuously using ticker
3. On collision:
    - Direction reverses
    - Border is recorded
    - Border color changes
4. After all borders are hit:
    - Promise resolves
    - Animation stops
    - Alert is displayed

### Notes

- Collision detection uses circle radius for accuracy
- Set ensures borders are only counted once
- Promise controls completion logic
- Demonstrates asynchronous behavior in a visual application

---

## Author

Stephanie Olivares
WDV3322 – Programming for Web Applications
SOLINYC LLC
