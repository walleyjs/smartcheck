import './Header.css';
import smartlogo from '../Assets/Smartcheck Logo White@0.75x.png';
import hIcon from '../Assets/noun_Home_2079957.png';
import sIcon from '../Assets/Group 42581.png'
import aIcon from '../Assets/noun_application_967926.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="Headlogo">
      <img src={smartlogo} width="13%" alt="logo" />
      </div>
      <ul className="HeadCont">
        <li className="HeadText HeadText1"><img src={hIcon} width="20%"  alt="logo" /> Home</li>
        <li className="HeadText HeadText2"><img src={sIcon} width="20%"  alt="logo" /> Server</li>
        <li className="HeadText HeadText3"><img src={aIcon} width="16%"   alt="logo" /> Application</li>
        <li className="HeadText4">Check Health Status</li>
      </ul>
    </div>
  );
}

export default Header;
