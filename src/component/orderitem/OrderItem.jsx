import useStore from '../../store/store'
import './orderitem.css'

function OrderItem({ item }) {
    const updateQty = useStore((state) => state.updateQty)
    const removeFromCart = useStore((state) => state.removeFromCart)
  
    const increase = () => updateQty(item.id, item.qty + 1)
  
    const decrease = () => {
      if (item.qty === 1) {
        removeFromCart(item.id) 
      } else {
        updateQty(item.id, item.qty - 1)
      }
    }
  
    return (
      <div className="order-item">
        <div className="order-text">
        <h2 className="order-event-name">{item.name}</h2>
        <p className="order-event-time">
          {item.when?.date} kl {item.when?.from} - {item.when?.to}
        </p>
        </div>
  
        <div className="order-counter">
          <button className='order-section' onClick={decrease}>-</button>
          <span className='order-section order-value'>{item.qty}</span>
          <button className='order-section' onClick={increase}>+</button>
        </div>
      </div>
    )
  }

export default OrderItem
