import { useEffect, useState } from "react";
import { Card } from "./components/Card";
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
]

function App() {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  const initGame = () => {
    // shuffle the cards
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ))

    setCards(finalCards);
  }

  useEffect(() => {
    initGame()
  }, [])

  const handleCardClick = (card) => {
    // don't allow clicking if the card is flipped or matched
    if (card.isFlipped || card.isMatched) {
      return
    }

    // update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true}
      } else {
        return c
      }
    })

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // check for match if two cards are flipped
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]]

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id])
          const newMatchedCards = cards.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return {...c, isMatched: true}
            } else {
              return c
            }
          })

          setCards(newMatchedCards)
          setFlippedCards([])
        }, 500)
      } else {
        // flip back card 1, card 2

        setTimeout(() => {
          const flippedBackCards =  newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return {...c, isFlipped: false}
            } else {
              return c
            }
          })

          setCards(flippedBackCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }


  return (
    <div className="App">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cards.map((card) =>(
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
