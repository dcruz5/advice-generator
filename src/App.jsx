import { useEffect, useState } from 'react'
import Card from './components/Card'

const API_URL = 'https://api.adviceslip.com/advice'

function App() {
  const [advice, setAdvice] = useState([])

  const getAdvice = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(({slip}) => {
      console.log('Render app');
      setAdvice({...slip})
    })
  }

  useEffect(getAdvice, [])

  return (
    <div className="App">
      <Card id={advice.id} advice={advice.advice} changeAdvice={getAdvice}/>
    </div>
  )
}

export default App
