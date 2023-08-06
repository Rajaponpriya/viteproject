import img1 from './mov11.jpg';
import img2 from './mov14.jpg';
import img3 from './mov13.jpg';
import img4 from './mov12.jpg';
import './movies.js';
//import './a.css';

function addmov() {
  return (
    <div className="addmov">
      <header className="addmov-header">
        <p> </p>
        <img src={img1} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'120%',left:'10%'}}/>
        <movies>
          mname=vikram
          rdate=20jan
          rate=4.5
        </movies>
          
        <p> </p> 
          <img src={img2} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'170%',left:'10%'}}/>
        <movies>
          mname=Harry Potter
          rdate=18jun
          rate=4.8
        </movies>
  
        <p> </p> 
          <img src={img3} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'220%',left:'10%'}}/>
        <movies>
          mname=Pirates of the garibbean
          rdate=09feb
          rate=4.7
        </movies>
  
        <p> </p> 
          <img src={img4} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'270%',left:'10%'}}/>
        <movies>
          mname=Vikkram Vedha
          rdate=31may
          rate=4.3
        </movies>
          <p>
            
          </p>
          
        </header>
    </div>
  )
}

export default addmov;

/*import img1 from './mov11.jpg';
import img2 from './mov14.jpg';
import img3 from './mov13.jpg';
import img4 from './mov12.jpg';
import './movies.js';
import './a1.css';
function a1() {
    return (
      <div className="a1">
        <header className="a1-header">
        <p> </p>
        <img src={img1} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'120%',left:'10%'}}/>
        <movies>
          mname="vikram"
          rdate="20jan"
          rate="4.5"
        </movies>
          
        <p> </p> 
          <img src={img2} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'170%',left:'10%'}}/>
        <movies>
          mname="Harry Potter"
          rdate="18jun"
          rate="4.8"
        </movies>
  
        <p> </p> 
          <img src={img3} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'220%',left:'10%'}}/>
        <movies>
          mname="Pirates of the garibbean"
          rdate="09feb"
          rate="4.7"
        </movies>
  
        <p> </p> 
          <img src={img4} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'270%',left:'10%'}}/>
        <movies>
          mname="Vikkram Vedha"
          rdate="31may"
          rate="4.3"
        </movies>
          <p>
            
          </p>
          
        </header>
      </div>
    );
  }
  
  export default a1;
  */