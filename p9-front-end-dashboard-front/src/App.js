
import Accueil from "./pages/Accueil/Accueil";
import Profile from "./pages/Profile/Profile";
import Reglage from "./pages/Reglage/Reglage";
import Communite from "./pages/Communaute/Communite";
import "./App.css"
function App() {


  let Component
  switch (window.location.pathname) {

    case "/":
      Component = <Accueil />;
      break
    case "/Profile":
      Component = <Profile />
      break
    case "/Reglage":
      Component = <Reglage />
      break
    case "/Communauté":
      Component = <Communite />
      break
    default: Component = <Accueil />
      break
  }
  return (
    <>
      {Component}

    </>

  );
}
/*
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
*/

export default App;
