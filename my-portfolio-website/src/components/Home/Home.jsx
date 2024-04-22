import LogoTitle from '../../assets/images/main-jt-logo.png'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          ackson a
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / React.js / HTML / SCSS</h2>
        <Link to="/contact">CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
