import useStore from '../../store/store'
import { useNavigate } from 'react-router-dom'
import './cart.css'
import cartIcon from '../../assets/Cart.png' 

function CartBadge() {
    const { cart } = useStore()
    const navigate = useNavigate()
    const totalTickets = cart.reduce((sum, item) => sum + item.qty, 0)
  
    return (
      <div className="cart-badge" onClick={() => navigate('/order')}>
        <div className="cart-icon-wrapper">
          <img src={cartIcon} alt="cart" className="cart-icon" />
          {totalTickets > 0 && (
            <span className="cart-count">{totalTickets}</span>
          )}
        </div>
      </div>
    )
  }

export default CartBadge
