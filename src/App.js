import Albums from './Albums';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Home from './Home';
import Album1 from './Album1';
import { BrowserRouter as Router} from 'react-router-dom'; 
import {Routes, Route} from 'react-router-dom';
import Galerie from './Galerie';
import Presentation from './Presentation';
import Contact from './Contact';
import Actualities from './Actualities';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/ovalskylight1" element={<Album1/>}/>
          <Route path="/galerie" element={<Galerie/>}/>
          <Route path="/presentation" element={<Presentation/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/actualites" element={<Actualities/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
