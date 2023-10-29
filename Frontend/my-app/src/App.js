import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link,BrowserRouter, Routes, Route } from "react-router-dom";
import WalletCard from './Components/ConWallet';
import BasicNavbar from './Components/Navbarcomp';
import Home from './Components/Home';
import About from './Components/About';
import { useState } from 'react';
import Champcard from './Components/Champaings';
import Signin from './Components/Signin';
import Login from './Components/Login';
import {app} from "./Components/Firebase";
import FirebaseImageUpload from './Components/Create_campaign';
// import renderMetamask from './Components/web3Integration';
// import Integration from './Components/web3Integration';

function App() {
  const [l, setl] = useState([]);
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/home" element={<Home />}></Route>
        <Route  path="/About" element={<About />}></Route>
        <Route  path="/Active_campaign" element={<Champcard glArr={l}/>}></Route>
        {/* send two values to the FirebaseImageUpload l and set l both as props*/}
        <Route  path="/Create_campaign" element={<FirebaseImageUpload l={l} setl={setl}/>}></Route>
      </Routes>
      < BasicNavbar/>
  
    </div>
    </BrowserRouter>
  //   <div>
  // <Integration/>  
  
  //   </div>
  




  

  );
}

export default App;
