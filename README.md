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

```
20-ProgrammingForWebApplications/
│
├── week_1/
│   ├── assignment/
│   │   └── car-finder/
│   └── notes/
│
├── week_2/
│   ├── assignment/
│   │   └── card-match/
│   └── notes/
│
├── week_3/
└── ...
```

---

## Week 1 – Car Finder Application

### Overview

The Car Finder application allows users to search for vehicles based on Year, Make, and Model.

The application dynamically filters available options based on user selections and prints the full car details to the browser console once all selections are made.

---

### Features

- Dynamic dropdown population using JavaScript
- Data filtering using `map()`, `filter()`, and `find()`
- ES6 syntax including arrow functions and destructuring
- Use of `Set` to extract unique values
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

```
cd week_1/assignment/car-finder
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run start
```

Open your browser and go to:

```
http://localhost:9000
```

---

### How It Works

1. Select a Year  
2. Select a Make  
3. Select a Model  
4. View the selected car details in the browser console  

---

### Notes

- The dataset is stored locally in `car-dataset.json`
- Webpack is used to bundle JavaScript and SCSS
- The UI was built from scratch based on provided design assets

---

## Week 2 – Card Match Game

### Overview

The Card Match Game is an interactive browser-based memory game built using TypeScript and SCSS.

The objective is to match all three pairs of cards within a maximum of three attempts. Players flip two cards per attempt and must rely on memory and strategy to win the game before attempts run out.

---

### Features

- 6-card game board with 3 matching pairs
- Randomized card shuffle on every new game
- Attempt tracking system (maximum of 3 attempts)
- Card flip and match comparison logic
- Matched cards remain visible
- Non-matching cards reset after a short delay
- Win and loss state detection
- Restart functionality to reset and reshuffle the game
- Strong TypeScript usage including:
  - Interfaces
  - Enums
  - Typed functions and variables
- SCSS styling with variables, nesting, and responsive layout
- Clean UI built from provided design mockup

---

### Technologies Used

- HTML5
- SCSS (Sass)
- TypeScript
- Node.js
- Webpack

---

### How to Run the Project

Navigate to the project folder:

```
cd week_2/assignment/card-match
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run start
```

Open your browser and go to:

```
http://localhost:9000
```

---

### How It Works

1. The game initializes with 6 shuffled cards (3 matching pairs)  
2. The player selects two cards per attempt  
3. If the cards match, they remain face up  
4. If the cards do not match:
   - They flip back after a short delay  
   - The attempt counter decreases  
5. The game ends when:
   - All pairs are matched (Win)  
   - Attempts reach zero (Loss)  
6. The player can restart the game at any time using the "Start Over" button  

---

### Notes

- Game logic is written in TypeScript and compiled to JavaScript
- Interfaces are used to define card structure
- Enums are used to manage game state
- Webpack bundles TypeScript and SCSS into the final build
- The UI was built from scratch following the provided design system

---

## Author

Stephanie Olivares  
WDV3322 – Programming for Web Applications  
SOLINYC LLC