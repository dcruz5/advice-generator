import {ReactComponent as DiceIcon} from '../assets/icon-dice.svg'

export default function Button({changeAdvice}) {
  return (
    <button type='button' className='icon' onClick={changeAdvice}>
        <DiceIcon />
    </button>
  )
}
