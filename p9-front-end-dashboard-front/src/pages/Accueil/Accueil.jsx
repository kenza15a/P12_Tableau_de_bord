import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Mainpage from "../../components/Mainpage/Mainpage";
import "./accueil.css"
function Accueil() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Mainpage />
      </div>
    </>
  );
}

export default Accueil;
