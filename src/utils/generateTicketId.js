function generateTicketId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let id = ''
    for (let i = 0; i < 5; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return id
  }
  
  export default generateTicketId