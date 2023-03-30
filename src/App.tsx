import './App.css'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { LeftBar } from './components/LeftBar'
import { ProjectBox } from './components/ProjectBox'
import { Skills } from './components/Skills'
import Polygon from "./assets/polygon-purple.png"

function App() {

  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <LeftBar />
      <div className='allSkillsContainer' id='skills'>
        <div className='titre'>
          <img src={Polygon} alt="competences logo" />
          <h2>Compétences</h2>
        </div>
        <Skills 
          title='Front-end' 
          listSkills={["react-original","typescript-plain", "javascript-plain","html5-plain","css3-plain", "tailwindcss-plain","bootstrap-plain"]}
        />
        <Skills 
          title='Back-end' 
          listSkills={["nodejs-plain","express-original", "mongodb-plain", "typescript-plain", "jest-plain"]}
        />
      </div>
      <div className='titre'>
          <img src={Polygon} alt="projets logo" />
          <h2>Projets</h2>
      </div>
      <div className='projectContainer' id='project'>
        <ProjectBox githubRepo='GenesisBlock2140/blog-mern-stack' name='Blog MERN Stack' description='Thisistech est un blog personnel qui donne la possiblité de publier des articles de blog, les modifier, supprimer via un panel administrateur... Un système de connexion et inscription est aussi disponible...' tech={["React", "Nodejs", "Express", "Mongodb"]} />
        <ProjectBox githubRepo='GenesisBlock2140/agence-immo-app' name='EazyLoger' description='EazyLoger est un projet de site web permettant à une agence immobilière de lister ses biens en vente par exemple, le front-end utilise React et le back-end un headless cms, Strapi.' tech={["React", "Strapi", "Vite", "Mysql"]} />
        <ProjectBox githubRepo='GenesisBlock2140/agence-immo-app' name='A venir' description='EazyLoger est un projet de site web permettant à une agence immobilière de lister ses biens en vente par exemple, le front-end utilise React et le back-end un headless cms, Strapi.' tech={["React", "Strapi", "Vite", "Mysql"]} />
      </div>
    </div>
  )
}

export default App
