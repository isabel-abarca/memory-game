import { GameHeader } from "./GameHeader"

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
  "🦊"
]

function App() {
  return (
    <div className="App">
      <GameHeader score={3} moves={10}/>
    </div>
  )
}

export default App
