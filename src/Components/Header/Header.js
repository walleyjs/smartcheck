import './Header.css';
import smartlogo from '../Assets/Smartcheck Logo White@0.75x.png';
import hIcon from '../Assets/noun_Home_2079957.png';
import sIcon from '../Assets/Group 42581.png';

import aIcon from '../Assets/noun_application_967926.png';
import HomeComp from '../Home/Home';
import ServerComp from '../Server/Server'
import AppComp from '../Application/Appilaction'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <Router>
    <div className="Header">
      <div className="FixedHead">
        <div className="Headlogo">
        <img src={smartlogo} width="10%" alt="logo" />
        </div>
        <ul className="HeadCont uHeadCount">
        <li className="HeadText HeadText1">
          <Link to="/"> 
          <img src={hIcon} width="23%"  alt="logo" /> Home
        </Link>
     </li>
     <li className="HeadText HeadText2">
     <Link to="/server"> 
      <img src={sIcon} width="2%"  alt="logo" /> Server
        </Link>
        </li>
        <li className="HeadText HeadText3">
        <Link to="/application"> 
        <img src={aIcon} width="16%"   alt="logo" /> Application
        </Link>
        </li>
        <li className="HeadText4"> <button>Check Health Status</button> </li>
      </ul>
      </div>
     <div className="Rcomp">
     <Switch>
  
  <Route path="/server">
       <ServerComp/>
       </Route>

  
       <Route path="/application">
       <AppComp/>
       </Route>
       <Route path="/">
       <HomeComp/>
       </Route>

      
       
     </Switch>
     </div>
    
    
    </div>
    </Router>
  );
}

export default Header;
