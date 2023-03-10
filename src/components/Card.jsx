import React from 'react'
import Button from './Button'

export default function Card({id, advice, changeAdvice}) {
  return (
    <div className='card'>
      <span className='card-id'>Advice #{id}</span>
      <p className='card-advice'><span className='quotes'>&quot;</span>{advice}<span className='quotes'>&quot;</span></p>
      <div className="divider">
      </div>
      <Button changeAdvice={changeAdvice}/>
    </div>
  )
}
