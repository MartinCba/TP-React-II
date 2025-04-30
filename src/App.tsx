import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';
import './App.css'

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/details" className="text-blue-600 hover:underline">Details</Link>
        <Link to="/favorites" className="text-blue-600 hover:underline">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
