import './App.css'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { LeftBar } from './components/LeftBar'
import { Skills } from './components/Skills'


function App() {

  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <LeftBar />
      <Skills 
        title='Front-end' 
        listSkills={["javascript-plain","html5-plain","css3-plain","nodejs-plain","react-original","express-original", "typescript-plain", "tailwindcss-plain"]}
      />
          
    </div>
  )
}

export default App
