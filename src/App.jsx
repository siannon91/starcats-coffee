import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'
import Users from './components/Users'
import background from './assets/background.jpg'
import './App.css'

function App() {
  return (
    <div>
      

      <div className="cafe">
        <img className="sfondo" src={background} alt="StarCats Coffee" />
        <div className="tv">
          <CatFacts />
        </div>
        
        <CookieClicker />
                
        <div className="lavagna-utenti">
          <Users />
        </div>

      </div>
           
    </div>
  )
}

export default App