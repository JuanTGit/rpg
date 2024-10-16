import GameCanvas from "./components/GameCanvas"
import TestAPI from "./components/TestAPI"
import './App.css'


function App() {
  return (
    <div>
      <h1 className="text-center">Game Frontend</h1>
      <TestAPI />
      <GameCanvas />
    </div>
  )
}

export default App
