import { useEffect, useState } from 'react'
import Advice from './components/Advice'
import './App.css'

function App() {
  const [advice, setAdvice] = useState([])

  useEffect(()=> {
    fetch('	https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(({slip}) => {
      const {id, advice} = slip
      setAdvice([id, advice])
    })
  }, [])

  return (
    <div className="App">
      <Advice id={advice[0]} advice={advice[1]}/>
    </div>
  )
}

export default App
