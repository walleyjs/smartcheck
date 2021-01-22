import './Home.css';
import Pdf from '../Assets/PDF.png';
import Xls from '../Assets/xls.png';
import Alert from '../Assets/triangle.png'
import Search from '../Assets/Search.png'

function Home() {
  return (
    <div className="HomeBody">
   <div className="HomeHead">
     <div className="hAppsat">
       <div className="StatTxt" >Application Status</div>
       <div className="StatDet">
       <ul>
        <li className="StatVal" style={{ border:"2px solid #1B1464", color:"#1B1464" }}>10</li>
        <li  className="StatVal" style={{backgroundColor:"#24C977",border:"2px solid #24C977", color:"#FFFFFF"}}>6</li>
        <li className="StatVal" style={{backgroundColor:"#FF4343F7", border:"2px solid #FF4343F7",color:"#FFFFFF"}}>4</li>
      </ul>
      <ul>
        <li className="StatIn"> All </li>
        <li className="StatIn">Available</li>
        <li className="StatIn">Critical</li>
        
      </ul>
     
       </div>
      
     </div>
     
     <div className="hAppsat">
       <div className="StatTxt">Servers</div>
          <div className="StatDet">
              <ul>
                <li className="StatVal" style={{ border:"2px solid #1B1464", color:"#1B1464" }}>4</li>
                <li  className="StatVal" style={{backgroundColor:"#24C977",border:"2px solid #24C977",color:"#FFFFFF"}}>2</li>
                <li className="StatVal" style={{backgroundColor:"#E0B237", border:"2px solid #E0B237",color:"#FFFFFF"}}>2</li>
              </ul>
              <ul>
                <li className="StatIn"> All </li>
                <li className="StatIn">Active</li>
                <li className="StatIn">Inactive</li>
                
              </ul>
            
          </div>
      
     </div>
     <div className="hAppsat">
     <div className="StatTxt">Health Check counts</div>
         <ul className="hcStat">
            <li style={{fontSize:"30px"}}>60</li>
            <li style={{fontSize:"12px",color: "#262626",marginTop:"15px"}}>counts</li>
    </ul>
     </div>
     </div>
     <div className="HomeContent">
     <ul className="HomeInputs">
       <li className="SearchInp">
        <input type="text" style={{backgroundImage:`url(${Search})`}} />
       </li>
       <li className="SelectInp">
       <select>
           <option value="">All applications</option>
           <option value="Application 1">Application 1</option>
          <option value="Application 2">Application 2</option>
          <option value="Application 3">Application 3</option>
          </select>
       </li>
       <li className="SelectInp">
       <select>
           <option value="">All servers</option>
           <option value="server 1">server 1</option>
           <option value="server 2">server 2</option>
          <option value="server 3">server 3</option>
          </select>
       </li>
       <li className="SelectInp">
       <select >
           <option value="">Health check status</option>
           <option value="status 1">status 1</option>
          <option value="status 2">status 2</option>
          <option value="status 3">status 3</option>
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
          <ul className="HtableHead">
            
            <li>S/N<span>APPLICATION</span> </li>
            <li>SERVERS MAPPED</li>
            <li>LAST SCAN DATE</li>
            <li>STATUS</li>
            <li>Action</li>
          
          </ul>
         
            
              <ul className="HinnerDet">
                  <li>1<span className="Hcc">a</span>Application name goes here </li>
                  <li style={{marginRight:"50px"}}>3 servers</li>
                  <li>11/12/20 3: 57:29 PM</li>
                  <li style={{width:'7%'}}> <span className="Hinnertic">&#10003;</span> Healthy</li>
                  <li className="HvBtn"><div> <button>View Result</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
                  <li>2<span className="Hcc">a</span>Application name goes here </li>
                  <li style={{marginRight:"50px"}}>3 servers</li>
                  <li>11/12/20 3: 57:29 PM</li>
                  <li style={{width:'7%'}}> <div className="Hinnertic">&#10003;</div> <div className="Hsectext"> </div></li>
                  <li className="HvBtn"><div> <button>View Result</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
                  <li>3<span className="Hcc">a</span>Application name goes here </li>
                  <li style={{marginRight:"50px"}}>3 servers</li>
                  <li>11/12/20 3: 57:29 PM</li>
                  <li style={{width:'7%'}}> <div className="Hinnertic" style={{backgroundColor:"white"}}>
                    <img src={Alert} alt="logo" />
                    </div> <div className="Hsectext"> </div></li>
                    <li className="HvBtn"><div> <button>View Result</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
                  <li>4<span className="Hcc">a</span>Application name goes here </li>
                  <li style={{marginRight:"50px"}}>3 servers</li>
                  <li>11/12/20 3: 57:29 PM</li>
                  <li style={{width:'7%'}}> <div className="Hinnertic">&#10003;</div> <div className="Hsectext"> </div></li>
                  <li className="HvBtn"><div> <button>View Result</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
              </ul>
              <ul className="HinnerDet">
                  <li>5<span className="Hcc" style={{backgroundColor:'#FF4343F7',color:'#FF4343F7'}}>a</span>Application name goes here </li>
                  <li style={{marginRight:"50px"}}>3 servers</li>
                  <li>11/12/20 3: 57:29 PM</li>
                  <li style={{width:'7%'}}> <div className="Hinnertic">&#10003;</div> <div className="Hsectext"> </div></li>
                  <li className="HvBtn"><div> <button>View Result</button>  </div> <div style={{marginLeft:"10px"}}> &#8942;</div> </li>
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

export default Home;
