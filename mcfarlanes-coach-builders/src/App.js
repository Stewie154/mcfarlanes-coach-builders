import Navbar from './Components/Navbar/Navbar';
import React, {useState} from 'react';
import Hero from './Components/Hero/Hero';

function App() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="App">
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen}/>
      <Hero/>
    </div>
  );
}

export default App;
