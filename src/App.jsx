import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Clinic from './pages/Clinic';

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1>The Midnight Atelier</h1></Link>
          </li>
          <li>
          <Link to="/clinic"><h2>The Cosplay Clinic</h2></Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinic" element={ <Clinic /> } />
      </Routes>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
