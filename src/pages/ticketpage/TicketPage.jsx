import generateTicketId from '../../utils/generateTicketId'

function TicketPage() {
  const ticketId = generateTicketId()
  const section = 'C'
  const seatNumber = 200 + Math.floor(Math.random() * 100) // Slumpad plats

  return (
    <div className="ticket-page" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Din biljett</h1>
      <div style={{ border: '1px solid gray', padding: '2rem', marginTop: '2rem' }}>
        <p><strong>ID:</strong> {ticketId}</p>
        <p><strong>Sektion:</strong> {section}</p>
        <p><strong>Platsnummer:</strong> {seatNumber}</p>
        <p>Ha en trevlig konsert!</p>
      </div>
    </div>
  )
}

export default TicketPage
