//Packages
import { Button } from "react-bootstrap"
import { HideUntilLoaded } from 'react-animation'

const Hero = () => {
  return (
    <HideUntilLoaded
      imageToLoad="https://cms-cdn.thesolesupplier.co.uk/2017/11/DSC09822.jpg"
      style={{display: "block"}}
    >
      <div className="hero vh-100 d-flex justify-content-center align-items-end" style={{ backgroundImage: "url('https://cms-cdn.thesolesupplier.co.uk/2017/11/DSC09822.jpg')" }}>
        <div className="hero-data mb-5 text-center text-white">
          <h1 className="display-1 fw-bolder text-uppercase fst-italic">Get <span className="highlight">fresh</span></h1>
          <p>Buy the latest's sneakers</p>
          <Button href="#itemlist" className="text-light">View more</Button>
        </div>
      </div>
    </HideUntilLoaded>
  )
}

export default Hero