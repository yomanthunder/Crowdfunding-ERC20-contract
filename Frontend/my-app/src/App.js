import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,BrowserRouter, Routes, Route } from "react-router-dom";
// import WalletCard from './Components/ConWallet';
import BasicNavbar from './Components/Navbarcomp';
import Home from './Components/Home';
import About from './Components/About';
import Champcard from './Components/Champaings';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/home" element={<Home />}></Route>
        <Route  path="/About" element={<About />}></Route>
        <Route  path="/Active_campaign" element={<Champcard/>}></Route>
      </Routes>
      < BasicNavbar/>
      {/* <WalletCard /> */}
    </div>
    </BrowserRouter>


  );
}

export default App;
