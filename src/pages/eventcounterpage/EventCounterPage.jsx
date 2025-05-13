import { useParams, useNavigate } from 'react-router-dom'
import useStore from '../../store/store'
import Counter from '../../component/counter/Counter'
import './eventcounterpage.css'

function EventCounterPage() {
  const { id } = useParams()
  const { events } = useStore()
  const event = events.find(e => e.id === id)
  const navigate = useNavigate();

  if (!event) return <p>inget event hittades</p>

  return (
    <div className="event-counter-page">
      <button className='back-arrow' onClick={()=> navigate('/events')}> ← </button>
      <h2 className="event-counter-title">Event</h2>
      <p className="event-counter-subtitle">You are about to score some tickets to</p>
      <h1 className="event-counter-name">{event.name}</h1>
      <p className="event-counter-info">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p className="event-counter-location">@ {event.where}</p>

      <Counter price={event.price} event={event} />
    </div>
  )
}

export default EventCounterPage
