import useStore from '../../store/store'
import OrderItem from '../../component/orderitem/OrderItem'
import generateTicketsFromCart from '../../utils/generateTicketId'
import { useNavigate } from 'react-router-dom'
import './orderpage.css'

function OrderPage() {
  const { cart, setTickets, clearCart } = useStore()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0)

  const handleSubmitOrder = () => {
    const tickets = generateTicketsFromCart(cart)
    setTickets(tickets)
    clearCart()
    navigate('/ticket')
  }

  return (
    <div className="order-page">
      <h1 className="order-title">Order</h1>
      {cart.map(item => (
        <OrderItem key={item.id} item={item} />
      ))}
      <p className="order-total-text">Totalt värde på order</p>
      <h2 className="order-total">{total} sek</h2>

      <button className="submit-btn" onClick={handleSubmitOrder}>Skicka order</button>
    </div>
  )
}

export default OrderPage
