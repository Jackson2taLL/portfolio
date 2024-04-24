import JLogoTitle from '../../assets/images/j-logo.png'
import TLogoTitle from '../../assets/images/t-logo.png'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#f5f7f7',
    fontSize: '12px',
    fontWeight: '500',
    padding: '10px 18px',
    letterSpacing: '4px',
    border: '1px solid #f5f7f7',
    width: '105px',
    marginTop: '20px',
    animation: 'fadeIn 1s 1.8s backwards',
    animationDelay: '5s',
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="introduction">
          <h1>Hi,</h1>
          <br />
          <div className="name">
            <h1>I'm</h1>
            <img src={JLogoTitle} alt="developer" />
            <h1>ackson</h1>
            <img src={TLogoTitle} alt="developer" />
            <h1>a</h1>
          </div>

          <br />
          <h1>Web Developer</h1>
          <h2>Frontend Developer : React.js / HTML / SCSS</h2>
          <Link to="/contact" style={linkStyle} className="contact-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
