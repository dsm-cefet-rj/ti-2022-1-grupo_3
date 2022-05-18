import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Footer from "./components/Footer"
import Header from "./components/Header";
import CreatePublication from "./pages/CreatePublication"
import ProfileUser from "./pages/ProfileUser"
import ProfileCabelereiro from "./pages/ProfileCabelereiro"

function App() {
  return (
    <div className = "App">
      <Header/>
      <Home/>
      <Footer/>
   </div>
  );
}

export default App;
