import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import StartPage from './pages/startpage/StartPage'
import EventPage from './pages/eventpage/EventPage'
import OrderPage from './pages/orderpage/OrderPage'
import TicketPage from './pages/ticketpage/TicketPage'
import EventCounterPage from './pages/eventcounterpage/EventCounterPage'

import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const swiperRef = useRef(null)

  useEffect(() => {
    if (!swiperRef.current) return
    switch (location.pathname) {
      case '/events':
        swiperRef.current.slideTo(1)
        break
      case '/order':
        swiperRef.current.slideTo(2)
        break
      case '/ticket':
        swiperRef.current.slideTo(3)
        break
      case '/':
        swiperRef.current.slideTo(0)
        break
      default:
        break
    }
  }, [location.pathname])

  const handleSlideChange = (swiper) => {
    switch (swiper.activeIndex) {
      case 1:
        navigate('/events')
        break
      case 2:
        navigate('/order')
        break
      case 3:
        navigate('/ticket')
        break
      default:
        navigate('/')
        break
    }
  }

  return (
    <Routes>
      {/* Route för alla sidor i Swiper */}
      <Route
        path="/*"
        element={
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            allowTouchMove={true}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            onSlideChange={handleSlideChange}
            loop={false}
          >
            <SwiperSlide><StartPage /></SwiperSlide>
            <SwiperSlide><EventPage /></SwiperSlide>
            <SwiperSlide><OrderPage /></SwiperSlide>
            <SwiperSlide><TicketPage /></SwiperSlide>
          </Swiper>
        }
      />

      {/* Route för EventCounterPage */}
      <Route path="/event/:id" element={<EventCounterPage />} />
    </Routes>
  )
}

export default App
