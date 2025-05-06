import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import './i18n';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
