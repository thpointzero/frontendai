import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function Dude2(props) {
  const [Data,setData]=useState({
    Company:'dfgdfg',
    Description:'dfgdfg'
})
  const url = "";
  const {
   
  } = props;
  useEffect(()=>{
    axios.get('https://reqres.in/api/unknown')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
},[])
  return (


    
    <div className="container">
<div>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            
        </div>

       <header className="">
       
          <h3>TH.0 Community Links</h3>
        </header>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Link</th>
      <th scope="col">Backend endpoint</th>
      <th scope="col">Admin or Open</th>
      <th scope="col">Is Frontend Working</th>
      <th scope="col">Is Backend Working</th>
      <th scope="col">Has Page Been Signed Off</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Link to="/create-account-desktop"><span className="">create account desktop</span></Link></td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      

       
       <Link to="/create-account-desktop">
             
            
             <span className="">create account desktop</span>
           </Link><br />
           <Link to="/create-account-desktop1">
             
            
             <span className="">Links Page</span>
           </Link><br />
           <Link to="/reward-dashboard-looking-at-a-reward-desktop">
             
            
             <span className="">add existing wallet desktop</span>
           </Link><br />
           <Link to="/add-existing-wallet-desktop">
             
            
             <span className="">/create-wallet-phrase-desktop-1</span>
           </Link><br />
           <Link to="/create-wallet-phrase-desktop-1">
             
            
             <span className="">/log-into-your-account-desktop</span>
           </Link><br />
           <Link to="/log-into-your-account-desktop">
             
            
             <span className="">/reward-dashboard-desktop</span>
           </Link><br />
           <Link to="/reward-dashboard-desktop">
             
            
             <span className="">/th-0-activities-desktop</span>
           </Link><br />
           <Link to="/th-0-activities-desktop">
             
            
             <span className="">/create-wallet-desktop-1</span>
           </Link><br />
           <Link to="/create-wallet-desktop-1">
             
            
             <span className="">/account-setup-complete-desktop</span>
           </Link><br />
           <Link to="/account-setup-complete-desktop">
             
            
             <span className="">/reward-dashboard-looking-at-a-reward-desktop1</span>
           </Link><br />
           <Link to="/reward-dashboard-looking-at-a-reward-desktop">
             
            
             <span className="">REGISTER</span>
           </Link><br />
           <Link to="/register">
             
            
             <span className="">test231</span>
           </Link>
       
      </div>
    
    
  );
}



export default Dude2;
