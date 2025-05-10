import useStore from '../../store/store'
import { useNavigate } from 'react-router-dom'
import './cart.css'

function CartBadge() {
    const { cart } = useStore()
    const navigate = useNavigate()
    const totalTickets = cart.reduce((sum, item) => sum + item.qty, 0)
  
    return (
      <div className="cart-badge" onClick={() => navigate('/order')}>
        <div className="cart-icon-wrapper">
          <img src="./src/assets/Cart.png" alt="cart" className="cart-icon" />
          {totalTickets > 0 && (
            <span className="cart-count">{totalTickets}</span>
          )}
        </div>
      </div>
    )
  }

export default CartBadge
