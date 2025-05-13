function generateTicketId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = ''
  for (let i = 0; i < 5; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return id
}

function generateTicketsFromCart(cart) {
  const allTickets = []

  cart.forEach((item) => {
    const section = `Section C`
    const seats = Array.from({ length: item.qty }, (_, i) => i + 1)

    seats.forEach((seat, index) => {
      const ticketId = generateTicketId()

      allTickets.push({
        id: ticketId,
        name: item.name,
        where: item.where,
        date: item.when.date,
        from: item.when.from,
        to: item.when.to,
        info: `${section} - seat ${233 + index}, bring umbrella`
      })
    })
  })

  return allTickets
}

export default generateTicketsFromCart
