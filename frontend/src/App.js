import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Footer from "./components/Footer"

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
