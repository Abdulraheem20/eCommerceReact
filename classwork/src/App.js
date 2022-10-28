import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbarr from './components/Navbarr';

// const Home = lazy(()=>import())

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr/>
        <Routes>
          <Route />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
