import { create } from 'zustand'

const useStore = create((set) => ({
  events: [],
  cart: [],
  tickets: [], // ✅ renamed correctly

  setEvents: (events) => set({ events }),

  addToCart: (event, qty) => set((state) => {
    const existing = state.cart.find(item => item.id === event.id)
    if (existing) {
      return {
        cart: state.cart.map(item =>
          item.id === event.id ? { ...item, qty: item.qty + qty } : item
        )
      }
    } else {
      return {
        cart: [...state.cart, { ...event, qty }]
      }
    }
  }),

  updateQty: (id, qty) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    )
  })),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  clearCart: () => set({ cart: [] }),       // ✅ clear cart after order

  setTickets: (tickets) => set({ tickets }), // ✅ save generated tickets

  getTotalTickets: () =>
    useStore.getState().cart.reduce((sum, item) => sum + item.qty, 0),
}))

export default useStore
