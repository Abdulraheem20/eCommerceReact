import React from "react";
import Footer from "../Footer";
import Navbarr from "../Navbarr";
import Register from "../Register";
import "../styles/Navbarr.css";

const Home = () => {
  return (
    <div className="home">
      <Navbarr />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
