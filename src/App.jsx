import { useEffect, useState } from "react";
import CardGrid from "./Components/CardGrid";
import Scoreboard from "./Components/Scoreboard";
import Footer from "./Components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClickedArray, setCardsClickedArray] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

  const WINNING_SCORE = 6;
  const MAX_TURNS = 12;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters`
        );
        const data = await response.json();
        // console.log(data);
        const charactersNeeded = data.splice(0, 6);
        // console.log(charactersNeeded);
        const gotCards = charactersNeeded.flatMap((gotCard) => {
          // console.log(gotCard);
          return [
            {
              name: gotCard.fullName,
              image: gotCard.imageUrl,
              id: `${gotCard.id}-1`,
              matched: false,
            },
            {
              name: gotCard.fullName,
              image: gotCard.imageUrl,
              id: `${gotCard.id}-2`,
              matched: false,
            },
          ];
        });
        setCards(shuffleCards(gotCards));
        // shuffleCards(gotCards);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchCards();
  }, []);

  //Compare Cards
  useEffect(() => {
    if (firstPick && secondPick) {
      checkMatch();
    }
  }, [firstPick, secondPick]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);
  //Shuffle Cards
  const shuffleCards = (cardsToShuffle) => {
    const shuffledCards = [...cardsToShuffle].sort(() => Math.random() - 0.5);
    // setCards(shuffledCards);
    // setTurns(0);
    return shuffledCards;
  };

  const handleChoice = (card) => {
    // console.log(card);
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  const checkMatch = () => {
    if (firstPick.name === secondPick.name && !firstPick.matched) {
      // console.log("Cards Match!!");
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.name === firstPick.name) {
            return { ...card, matched: true };
          }
          return card;
        });
      });
      setScore((prevScore) => prevScore + 1);
      if (score + 1 === WINNING_SCORE) {
        alert("Congratulations! You won the game!");
        resetGame();
      }
    } else {
      // console.log("Cards Don't Match!");
      setTimeout(() => {
        resetTurns();
      }, 1000);
    }
  };

  const resetTurns = () => {
    setFirstPick(null);
    setSecondPick(null);
    setTurns((prevTurns) => prevTurns + 1);
    if (turns + 1 >= MAX_TURNS) {
      alert("Game Over! You lost!");
      resetGame();
    }
  };

  const resetGame = () => {
    setScore(0);
    setTurns(0);
    setFirstPick(null);
    setSecondPick(null);
    setCards((prevCards) =>
      shuffleCards(prevCards.map((card) => ({ ...card, matched: false })))
    );
    // setCards((prevCards) => {
    //   return prevCards.map((card) => ({ ...card, matched: false }));
    // });
    // setCards(shuffleCards(cards));
    // setCardsClickedArray([]);
  };

  return (
    <main className="h-screen flex flex-col gap-3 justify-center items-center bg-gradient-to-tr from-purple-500 to-indigo-900">
      <h1 className="text-4xl text-center font-bold text-white">
        Memory Game!
      </h1>
      <button
        onClick={() => resetGame()}
        className="text-white font-semibold p-3 bg-purple-900 hover:bg-purple-700 rounded-md"
      >
        New Game
      </button>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleChoice} flipped={false} />
      <Footer />
    </main>
  );
}

export default App;
