import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
// import About from './pages/About'
import ShelterCats from './pages/ShelterCats'
import './App.css'
// import './Style.css'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="shelters/:id/cats" element={<ShelterCats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
