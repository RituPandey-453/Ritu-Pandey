import logo from './logo.svg';
import './App.css';
import Aboutus from './Component/Aboutus'
import Image from './Component/Image';
import Header from './Component/Header';
import Mission from './Component/Mission';
import Sign from './Component/Sign';
import Footer from './Component/Footer';
import Number from './Component/Number';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Value from './Component/Value';
import Subscribe from './Component/Subscribe';





function App() {
  return (
    <div className="App">

      <Header/>
      <Aboutus/>
      <Number/>
      <Value/>
      <Image/>
      <Subscribe/>
      <Mission/>
    
      <Sign/>
    
<Footer/>
    </div>
  );
}

export default App;
