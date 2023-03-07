import React from 'react'
import {ReactComponent as DiceIcon} from '../assets/icon-dice.svg'

export default function Advice({id, advice}) {
  return (
    <div className='card'>
      <p className='card-id'>Advice #{id}</p>
      <p className='card-advice'>"{advice}"</p>
      <button type='button' className='icon'>
        <DiceIcon />
      </button>
    </div>
  )
}
