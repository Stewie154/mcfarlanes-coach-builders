import Navbar from './Components/Navbar/Navbar';
import React, {useState} from 'react';

function App() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="App">
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen}/>
    </div>
  );
}

export default App;
