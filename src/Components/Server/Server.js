import Search from '../Assets/Search.png'
import Pdf from '../Assets/PDF.png';
import Xls from '../Assets/xls.png';
import '../Home/Home.css';
import '../Application/Application.css';

function Server() {
  return (
    <div className="ServerBody">
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
            
            <li >S/N<span style={{marginLeft:'0px',marginRight:'65px'}}>SERVER NAME</span> </li>
            <li>IP address</li>
            <li>CPU(%)</li>
            <li>MEMORY(%)</li>
            <li>STORAGE(%)</li>
           
            <li>Action</li>
          
          </ul>
         
            
              <ul className="HinnerDet">
              <li  style={{marginLeft:'10px',marginRight:'0px'}}>1<span className="Hcc">a</span>Server name goes here </li>
                  <li >IP Address goes here</li>
                  <li  className="Smedia">85.6</li>
                  <li className="Sfmedia"> 73.9</li>
                 
                  <li style={{marginLeft:'0px',marginRight:'50px'}}>50</li>
                 
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li  style={{marginLeft:'10px',marginRight:'0px'}}>2<span className="Hcc">a</span>Server name goes here </li>
                  <li >IP Address goes here</li>
                  <li className="Smedia">85.6</li>
                  <li className="Sfmedia"> 73.9</li>
                 
                  <li style={{marginLeft:'0px',marginRight:'50px'}}>50</li>
                 
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li  style={{marginLeft:'10px',marginRight:'0px'}}>3<span className="Hcc">a</span>Server name goes here </li>
                  <li >IP Address goes here</li>
                  <li className="Smedia">85.6</li>
                  <li  className="Sfmedia" > 73.9</li>
                 
                  <li style={{marginLeft:'0px',marginRight:'50px'}}>50</li>
                 
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li  style={{marginLeft:'10px',marginRight:'0px'}}>4<span className="Hcc">a</span>Server name goes here </li>
                  <li >IP Address goes here</li>
                  <li className="Smedia">85.6</li>
                  <li className="Sfmedia"> 73.9</li>
                 
                  <li style={{marginLeft:'0px',marginRight:'50px'}}>50</li>
                 
                  <li className="HvBtn"><div> <button>Edit</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
              <li  style={{marginLeft:'10px',marginRight:'0px'}}>5<span className="Hcc">a</span>Server name goes here </li>
                  <li >IP Address goes here</li>
                  <li className="Smedia">85.6</li>
                  <li className="Sfmedia"> 73.9</li>
                 
                  <li style={{marginLeft:'0px',marginRight:'50px'}}>50</li>
                 
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
    </div>
  );
}

export default Server;


