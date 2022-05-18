import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Footer from "./components/Footer"
import Header from "./components/Header"

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
