import Search from '../Assets/Search.png'
import Pdf from '../Assets/PDF.png';
import Xls from '../Assets/xls.png';
import '../Home/Home.css';
import './Application.css';

function Application() {
    return (
      <div className="HomeBody">
        <div className="ApplContent">
     <ul className="ApplInputs">
       <li className="ApplSearchInp">
        <input type="text" style={{backgroundImage:`url(${Search})`}} />
       </li>
       <li className="ApplSelectInp">
       <select>
           <option value="">Active status</option>
           <option value="Application 1">Active status 1</option>
          <option value="Application 2">Active status 2</option>
          <option value="Application 3">Active status 3</option>
          </select>
       </li>
    
     </ul>
      <div className="HTable">
       <ul className="HtableTop">
         <li className="Hpdfi" > <img src={Pdf} width="70%" alt="logo" /></li>
         <li> <img src={Xls} width="70%" alt="logo" /></li>
         <li style={{fontSize:"12px",color: "#06232C", padding:"5px 0px 0px 25px"}}>Showing 10 of 5000 Entries</li>
       </ul>
        <div className="HmainTab">
          <ul className="AtableHead">
            
            <li >S/N<span style={{marginLeft:'0px',marginRight:'45px'}}>APPLICATION</span> </li>
            <li>APPLICATION type</li>
            <li>Application Dcsc</li>
            <li>Application Port</li>
            <li>End point</li>
            <li>Host/ Server</li>
            <li>Action</li>
          
          </ul>
         
            
              <ul className="HinnerDet">
              <li>1<span className="Hcc">a</span>Application name goes here </li>
                  <li >Application type</li>
                  <li>Application type</li>
                  <li > Application port</li>
                 
                  <li>End point</li>
                  <li>10.1.101.53</li>
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li>2<span className="Hcc">a</span>Application name goes here </li>
                  <li >Application type</li>
                  <li>Application type</li>
                  <li > Application port</li>
                 
                  <li>End point</li>
                  <li>10.1.101.53</li>
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li>3<span className="Hcc">a</span>Application name goes here </li>
                  <li >Application type</li>
                  <li>Application type</li>
                  <li > Application port</li>
                 
                  <li>End point</li>
                  <li>10.1.101.53</li>
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li>4<span className="Hcc">a</span>Application name goes here </li>
                  <li >Application type</li>
                  <li>Application type</li>
                  <li > Application port</li>
                 
                  <li>End point</li>
                  <li>10.1.101.53</li>
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
                  <li>5<span className="Hcc" style={{backgroundColor:'#FF4343F7',color:'#FF4343F7'}}>a</span>Application name goes here </li>
                  <li >Application type</li>
                  <li>Application type</li>
                  <li > Application port</li>
                 
                  <li>End point</li>
                  <li>10.1.101.53</li>
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
        </div>
        <div className="Hlsection">
        <ul className="HNextPage">
         <li>PREVIOUS</li>
         <li className="Hcirc">1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>...</li>
         <li>1539</li>
         <li>NEXT</li>
       </ul>
        </div>
     
      </div>
     
     </div>
    </div>
    );
  }
  
  export default Application;