import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'
import Users from './components/Users'
import background from './assets/background.jpg'

function App() {
  return (
    <div>
      <div className="cafe">
        <img className="sfondo" src={background} alt="StarCats Coffee" />
      </div>
      <CookieClicker />
      <CatFacts />
      <Users />
    </div>
  )
}

export default App