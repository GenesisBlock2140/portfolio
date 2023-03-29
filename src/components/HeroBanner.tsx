import { Badge } from "./Badge"
import HelloBulle from "../assets/hello-bulle.png"

export const HeroBanner = () => {
  return (
    <div className="hero-box">
      <div className="hero-left">
        <div className="hero-hi">
          <p>Hello !<span className="hero-hi-emoji">👋</span></p>
        </div>
        <img src="https://fakeimg.pl/300x300/" alt="profil picture" />
      </div>
      <div className="hero-right">
        <p className="hero-cmoi">Moi c'est ...</p>
        <p className="hero-name">Nathan</p>
        <p className="hero-desc">
          <span className="bold">Développeur Web. </span>
          <span className="hero-desc-second"> Autodidacte et actuellement 
          <span className="hero-desc-alt"> en recherche <br/> d’Alternance</span> en France. </span>
        </p>
        <div className="hero-btn">
          <Badge text="Github" size="medium"/>
          <Badge text="Email" size="medium"/>
        </div>
      </div>
    </div>
  )
}