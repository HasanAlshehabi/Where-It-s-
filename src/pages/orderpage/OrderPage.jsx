import useStore from '../../store/store'
import OrderItem from '../../component/orderitem/OrderItem'
import { useNavigate } from 'react-router-dom'
import './orderpage.css'

function OrderPage() {
  const { cart } = useStore()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0)

  const handleSubmit = () => {
    if (cart.length === 0) return
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

      <button className="submit-btn" onClick={handleSubmit}>Skicka order</button>
    </div>
  )
}

export default OrderPage
