import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import PreviousWork from './Components/PreviousWork/PreviousWork';
import Contact from './Components/Contact/Contact';
import Links from './Components/Links/Links';

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
      <Links />
      <Contact/>
    </div>
  );
}

export default App;
