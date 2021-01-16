import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import PreviousWork from './Components/PreviousWork/PreviousWork';

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
      <PreviousWork/>
    </div>
  );
}

export default App;
