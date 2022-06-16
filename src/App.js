import MoleContainer from "./MoleContainer";
import { useState } from 'react'
import './App.css'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++)
    hills.push(
      <MoleContainer key={i} setScore={setScore} score={score}/>
    )

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <>
      <h1>React-a-Mole!</h1>
      <h2>Score: {score}</h2>
      {createMoleHill()}
    </>
  );
}

export default App;
