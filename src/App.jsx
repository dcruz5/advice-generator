import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [advice, setAdvice] = useState([])

  const fetchAdvice = () => {
    fetch('	https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(({slip}) => {
      const {id, advice} = slip
      setAdvice([id, advice])
    })
  }

  useEffect(fetchAdvice, [])

  return (
    <div className="App">
      <Card id={advice[0]} advice={advice[1]} changeAdvice={fetchAdvice}/>
    </div>
  )
}

export default App
