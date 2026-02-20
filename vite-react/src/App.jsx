import { useEffect, useState } from "react";
import { GameHeader } from "./components/GameHeader";

const cardValues = [
  "🐵",
  "🐶",
  "🐺",
  "🐱",
  "🦁",
  "🐯",
  "🦒",
  "🦊",
  "🐵",
  "🐶",
  "🐺",
  "🐱",
  "🦁",
  "🐯",
  "🦒",
  "🦊",
];

function App() {
  const [cards, setCards] = useState([])

  const initGame = () => {
    // shuffle the cards
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ));

    setCards(finalCards);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (card) => {
    // don't allow clicking if the card is flipped or matched
    if (card.isFlipped || card.isMatched) {
      return;
    }

    // update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true};
      } else {
        return c;
      }
    });

    setCards(newCards);
  };


  return (
    <div className="App">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App;
