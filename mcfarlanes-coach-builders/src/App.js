import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

function App() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="App">
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen}/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
