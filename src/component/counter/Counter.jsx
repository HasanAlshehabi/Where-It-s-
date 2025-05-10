import { useState } from 'react'
import useStore from '../../store/store'
import './counter.css'
import { useNavigate } from 'react-router-dom'


function Counter({ price, event }) {
  const [qty, setQty] = useState(1)
  const addToCart = useStore((state) => state.addToCart)
  const navigate = useNavigate()

  const total = qty * price

  const handleAdd = () => setQty(qty + 1)
  const handleSubtract = () => {
    if (qty > 1) setQty(qty - 1)
  }

  const handleAddToCart = () => {
    addToCart(event, qty) // Lägg till i state
    navigate('/events')   // Navigera tillbaka
  }

  return (
    <>
      <div className="price-box">
        <div className="price-text">{total} sek</div>
        <div className="counter-box">
          <button className="counter-section" onClick={handleSubtract}>-</button>
          <span className='counter-section counter-value'>{qty}</span>
          <button className="counter-section" onClick={handleAdd}>+</button>
        </div>
      </div>

      <button className="add-button" onClick={handleAddToCart}>
        Lägg i varukorgen
      </button>
    </>
  )
}

export default Counter

