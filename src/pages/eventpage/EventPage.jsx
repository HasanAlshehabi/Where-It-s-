import { useEffect, useState } from 'react'
import useStore from '../../store/store'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../../component/searchbar/SearchBar'
import CartBadge from '../../component/cart/Cart'
import './eventpage.css'

function EventsPage() {
  const { events, setEvents } = useStore()
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://santosnr6.github.io/Data/events.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.events)) {
          setEvents(data.events)
        }
      })
      .catch(error => console.error('API-fel:', error))
  },)

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="events-page">
      <CartBadge/>
      <h1 className="events-title">Events</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-item" onClick={() => navigate(`/event/${event.id}`)}>
              <div className="event-date">
                <span className="event-day">{event.when.date.split(' ')[0]}</span>
                <span className="event-month">{event.when.date.split(' ')[1].toUpperCase()}</span>
              </div>

              <div className="event-details">
                <h2 className="event-name">{event.name}</h2>
                <p className="event-location">{event.where}</p>
                <p className="event-time">{event.when.from} - {event.when.to}</p>
              </div>

              <div className="event-price">
                {event.price} <span>sek</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Inga event hittades</p>
        )}
      </div>
    </div>
  )
}

export default EventsPage
