import {useEffect, useState} from 'react';
import './App.css';
import Home  from "./pages/Home"
import Header from './components/Header/Header';

function App() {

const [transparent, setTransparent] = useState<boolean>(true);

const scrollEventHandler = () => {
  if (document.documentElement.scrollTop >= 440) {
    setTransparent(false);
  }else if (document.documentElement.scrollTop < 440) {
    setTransparent(true);
  }
};

useEffect(() => {
  // scrollEventHandler();
  window.addEventListener("scroll", scrollEventHandler);

  return () => {
    setTransparent(false);
    window.removeEventListener("scroll", scrollEventHandler);
  }
}, []);



  return (
    <>
     <Header transparent={transparent} />
      <Home />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <footer style={{textAlign: "center"}}>Soy un footer</footer>
    </>
  );
}

export default App;
