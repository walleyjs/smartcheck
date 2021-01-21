import './Header.css';


function Home() {
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

export default Home;
