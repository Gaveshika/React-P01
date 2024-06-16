import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
   /* <div className="App">
      <Home/> 
    </div>*/
    <Router>
      <div>
        <Routes>

         

          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
