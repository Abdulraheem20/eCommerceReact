import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbarr from './components/Navbarr';
// import Register from './components/Register';
import './App.css'
// import Products from './components/pages/Products';

const Home = lazy(()=>import('../src/components/pages/Home'))
const Product = lazy(()=>import('./components/pages/Products'))
const Login = lazy(()=>import('./components/ShowLogin'))


function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr/>
        <Suspense fallback={<h1>loading...</h1>}/>
        <Routes>
          <Route path='/'  exact element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
