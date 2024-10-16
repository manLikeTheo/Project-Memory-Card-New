import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://thronesapi.com/api/v2/Characters"
        );
        const data = await response.json();
        // console.log(data);
        const charactersNeeded = data.splice(0, 6);
        console.log(charactersNeeded);
        const gotCards = charactersNeeded.map((gotCard) => ({
          name: gotCard.fullName,
          image: gotCard.imageUrl,
        }));
        // const pokemonCards = data.results.map((pokemon) => ({
        //   name: pokemon.name,
        //   image: "https://pokeapi.co/api/v2/pokemon/1/",
        // }));
        setCards(gotCards);
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
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shudffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gradient-to-tr from-blue-700 to-purple-900 ">
      <h1 className="text-4xl text-center font-bold text-white">
        Memory Game!
      </h1>
      <button
        onClick={shuffleCards}
        className="text-white font-semibold p-3 bg-purple-900 hover:bg-purple-700 rounded-md"
      >
        New Game
      </button>

      <div className="grid grid-cols-3 gap-4 justify-center items-center border-4 border-purple-300">
        {cards.map((card) => (
          <div key={card.name} className="card">
            <div className="border-4 border-purple-700 cursor-pointer hover:scale-110">
              <img
                className="front w-full h-full p-2 rounded-lg"
                src={card.image}
                alt={"card-front"}
              />
              <img
                className="back w-full h-full p-2 rounded-lg"
                src={"/luke-chesser-eICUFSeirc0-unsplash.jpg"}
                alt="card-back"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
