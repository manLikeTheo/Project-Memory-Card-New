import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=6"
        );
        const data = await response.json();
        // console.log(data.results);
        const pokemonCards = data.results.map((pokemon) => ({
          name: pokemon.name,
          image: "https://pokeapi.co/api/v2/pokemon/1/",
        }));
        setCards(pokemonCards);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchCards();
  }, []);

  //Shuffle Cards
  const shuffleCards = () => {
    const shudffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card }));
    setCards(shudffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gradient-to-tr from-blue-700 to-purple-900 h-screen">
      <h1 className="text-4xl text-center font-bold text-white">
        Memory Game!
      </h1>
      <button
        onClick={shuffleCards}
        className="text-white font-semibold p-3 bg-purple-900 hover:bg-purple-700 rounded-md"
      >
        New Game
      </button>
    </div>
  );
}

export default App;
