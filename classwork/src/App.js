import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbarr from "./components/Navbarr";
import "./App.css";
import Header from "./components/Header";
import ShoppingCartTable from "./components/ShoppingCartTable";

const Home = lazy(() => import("../src/components/pages/Home"));
const Product = lazy(() => import("./components/pages/Products"));
const Login = lazy(() => import("./components/ShowLogin"));
const Shop = lazy(() => import("./components/pages/Shop"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Contact = lazy(() => import("./components//pages/Contact"));
const Detailed = lazy(() => import("./components/DetailedDesc"));
const CartTable = lazy(() => import("./components/ShoppingCartTable"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr />
        {/* <Header /> */}
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<Detailed />} />
            <Route path="/ShoppingCart" element={<ShoppingCartTable />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
