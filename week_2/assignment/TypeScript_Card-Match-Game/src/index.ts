// Imports your SCSS stylesheet
import "@/styles/index.scss";

interface Card {
	id: number;
	value: string;
	isFlipped: boolean;
	isMatched: boolean;
}

enum GameStatus {
	Playing = "playing",
	Won = "won",
	Lost = "lost",
}

const gameBoard = document.querySelector("#game-board") as HTMLDivElement;
const attemptsCount = document.querySelector(
	"#attempts-count",
) as HTMLSpanElement;
const gameMessage = document.querySelector(
	"#game-message",
) as HTMLHeadingElement;
const restartButton = document.querySelector(
	"#restart-btn",
) as HTMLButtonElement;

let cards: Card[] = [];
let selectedCards: Card[] = [];
let attemptsLeft: number = 3;
let gameStatus: GameStatus = GameStatus.Playing;
let isCheckingMatch: boolean = false;

function createCards(): Card[] {
	const cardValues: string[] = ["A", "A", "B", "B", "C", "C"];

	return cardValues.map((value: string, index: number): Card => {
		return {
			id: index,
			value,
			isFlipped: false,
			isMatched: false,
		};
	});
}

function shuffleCards(cardArray: Card[]): Card[] {
	const shuffledCards: Card[] = [...cardArray];

	for (let i = shuffledCards.length - 1; i > 0; i--) {
		const randomIndex: number = Math.floor(Math.random() * (i + 1));
		[shuffledCards[i], shuffledCards[randomIndex]] = [
			shuffledCards[randomIndex],
			shuffledCards[i],
		];
	}

	return shuffledCards;
}

function updateAttemptsDisplay(): void {
	attemptsCount.textContent = attemptsLeft.toString();
}

function updateMessage(): void {
	if (gameStatus === GameStatus.Won) {
		gameMessage.textContent = "You Won!";
		return;
	}

	if (gameStatus === GameStatus.Lost) {
		gameMessage.textContent = "Game Over!";
		return;
	}

	gameMessage.textContent = "";
}

function renderCards(): void {
	gameBoard.innerHTML = "";

	cards.forEach((card: Card): void => {
		const cardButton = document.createElement("button");
		cardButton.type = "button";
		cardButton.classList.add("card");

		if (card.isFlipped || card.isMatched) {
			cardButton.classList.add("card--front");
			cardButton.textContent = card.value;
		} else {
			cardButton.classList.add("card--back");

			const cardBackImage = document.createElement("img");
			cardBackImage.src = "images/card-back.png";
			cardBackImage.alt = "Playing card back";
			cardButton.appendChild(cardBackImage);
		}

		if (card.isMatched) {
			cardButton.classList.add("card--matched");
		}

		cardButton.addEventListener("click", (): void => {
			handleCardClick(card.id);
		});

		gameBoard.appendChild(cardButton);
	});
}

function handleCardClick(cardId: number): void {
	if (gameStatus !== GameStatus.Playing) return;
	if (isCheckingMatch) return;
	if (selectedCards.length === 2) return;

	const clickedCard: Card | undefined = cards.find(
		(card: Card): boolean => card.id === cardId,
	);

	if (!clickedCard) return;
	if (clickedCard.isFlipped) return;
	if (clickedCard.isMatched) return;

	clickedCard.isFlipped = true;
	selectedCards.push(clickedCard);

	renderCards();

	if (selectedCards.length === 2) {
		checkForMatch();
	}
}

function checkForMatch(): void {
	isCheckingMatch = true;

	const [firstCard, secondCard] = selectedCards;

	if (firstCard.value === secondCard.value) {
		firstCard.isMatched = true;
		secondCard.isMatched = true;
		selectedCards = [];
		isCheckingMatch = false;

		if (cards.every((card: Card): boolean => card.isMatched)) {
			gameStatus = GameStatus.Won;
		}

		updateMessage();
		renderCards();
		return;
	}

	setTimeout((): void => {
		firstCard.isFlipped = false;
		secondCard.isFlipped = false;
		selectedCards = [];
		attemptsLeft -= 1;

		if (attemptsLeft <= 0) {
			gameStatus = GameStatus.Lost;

			cards.forEach((card: Card): void => {
				card.isFlipped = true;
			});
		}

		updateAttemptsDisplay();
		updateMessage();
		renderCards();

		isCheckingMatch = false;
	}, 800);
}

function startGame(): void {
	cards = shuffleCards(createCards());
	selectedCards = [];
	attemptsLeft = 3;
	gameStatus = GameStatus.Playing;
	isCheckingMatch = false;

	updateAttemptsDisplay();
	updateMessage();
	renderCards();
}

restartButton.addEventListener("click", (): void => {
	startGame();
});

startGame();
