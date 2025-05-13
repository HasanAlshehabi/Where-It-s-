import useStore from '../../store/store'
import './ticketpage.css'
import Barcode from 'react-barcode'

function TicketPage() {
  const { tickets } = useStore()

  if (tickets.length === 0) {
    return <p>Inga biljetter än. Skicka en beställning först.</p>
  }

  return (
    <div className="ticket-page">
    {tickets.map((ticket) => (
      <div className="ticket-card" key={ticket.id}>
          <div className="ticket-section what">
            <span className="label">WHAT</span>
            <h1>{ticket.name}</h1>
          </div>

          <div className="ticket-section where">
            <span className="label">WHERE</span>
            <h2>{ticket.where}</h2>
            <p>Göteborgs universitet. Pedagogen, hus A</p>
          </div>

          <div className="ticket-section when">
            <span className="label">WHEN</span>
            <div className="when-row">
              <div>
                <span className="sub-label">DATE</span>
                <p>{ticket.date}</p>
              </div>
              <div>
                <span className="sub-label">FROM</span>
                <p>{ticket.from}</p>
              </div>
              <div>
                <span className="sub-label">TO</span>
                <p>{ticket.to}</p>
              </div>
            </div>
          </div>

          <div className="ticket-section info">
            <span className="label">INFO</span>
            <p>{ticket.info}</p>
          </div>

          <div className="barcode">
            <Barcode value={ticket.id} height={40} width={1.5} />
            <p className="barcode-id">#{ticket.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TicketPage
