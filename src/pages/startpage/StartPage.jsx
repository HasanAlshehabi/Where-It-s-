import './startpage.css'
import logo from '../../assets/logo.png'

function StartPage() {
  
  return (
    <div className="start-page">
     <img src={logo} alt="Where It's @" className="logo" />
     <h1 className="title">Where It's @</h1>
     <p className="subtitle">Ticketing made easy</p>
    </div>
  )
}

export default StartPage
