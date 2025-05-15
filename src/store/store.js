import { create } from 'zustand'

const useStore = create((set) => ({
  events: [],

  cart: [],

  tickets: [],

  // Sätter events i state när de hämtats
  setEvents: (events) => set({ events }),

  // här lägger jag till en biljett i varukorgen eller uppdaterar quantity om den redan finns
  addToCart: (event, qty) => set((state) => {
    const existing = state.cart.find(item => item.id === event.id)
    if (existing) {
      // om biljetten redan finns, uppdatera deras quantity
      return {
        cart: state.cart.map(item =>
          item.id === event.id ? { ...item, qty: item.qty + qty } : item
        )
      }
    } else {
      // om biljetten inte finns, lägg till den
      return {
        cart: [...state.cart, { ...event, qty }]
      }
    }
  }),

  // Uppdaterar quantity för en specifik biljett i varukorgen
  updateQty: (id, qty) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    )
  })),

  // man kan bort en biljett från varukorgen baserat på deras id
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  // tömmer hela varukorgen används efter att order har skickats
  clearCart: () => set({ cart: [] }),

  // sparar genererade biljetter i state, den används efter att en order har skickats
  setTickets: (tickets) => set({ tickets }),

  // returnerar totala antalet biljetter i varukorgen
  getTotalTickets: () =>
    useStore.getState().cart.reduce((sum, item) => sum + item.qty, 0),
}))

export default useStore
