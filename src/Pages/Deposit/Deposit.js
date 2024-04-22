import React, { useEffect, useState } from "react";
import axios from "axios";
import './Deposit.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from '../../photos/logo.png'

export default function Deposit() {
  const[user,setUsers]=useState({
    userName:"",
    password:"",
    firstName:"",
    country:"",
    anumber:"",
    cabalance:"",
    mabalance:""
  });
  const {id}=useParams();
  let navigate=useNavigate();

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  //Deposit
  const valuefromdatabase = user.mabalance;
  const[depositvalue,setdepositvalue]=useState('');
  const [sum,setsum]=useState(null);
  const [message, setMessage]=useState('');

  const handleDeposit=()=>{
    const amount = parseFloat(depositvalue);
    if(isNaN(amount)||amount<=0){
      setMessage('Please enter a valid positive amount.');
      return;
    }
    const newBalance = valuefromdatabase+amount;
    axios.put(`http://localhost:8080/user/${id}`,{
      mabalance:newBalance,
      id:user.id,
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      country:user.country,
      anumber:user.anumber,
      cabalance:user.cabalance
    })
    .then(response =>{
      setsum(newBalance);
      setMessage(`Deposit of $${amount}.00 was successful. New balance: $${newBalance}`);
      setdepositvalue('');
    })
    .catch(error=>{
      setMessage('Error updating the balance. Please try again.');
    });
  };
    
  return (
    <div className='deposit-b1'>
    <img className="logo-deposit" src={logo}/>
      <form className="deposit-form">
        <h3 className='deposit-Header'>DEPOSIT</h3>
        <div className='deposit-d2'>
          <div>
            select Payment Method
          </div>
          <div className='deposit-d1'>
          <label style={{paddingLeft:"70px"}} className="label" htmlFor="username">Available Balance : 
              <b style={{backgroundColor:'transparent',paddingLeft:"30px", color:"lightgreen", fontSize:"20px"}}>${user.mabalance}</b>
          </label>
          
          <label style={{marginTop:"35px"}} className="label" htmlFor="username">Enter Deposit Amount : </label>
          <div style={{backgroundColor:"transparent",color:"lightgreen", paddingLeft:"20px", fontSize:"20px", marginTop:"5px"}}
           className="mia">$
            <input type="number" style={{margin:"10px", backgroundColor:"silver", width:"200px", border:"5px solid green", borderRadius:"15px"}}
              placeholder="Enter the Deposite amount"
              value={depositvalue} onChange={(e)=>setdepositvalue(e.target.value)}/>
            <select id="servicequality">
              <option>USD</option>
              <option>LKR</option>
          </select>
            </div>
            <div>
            <p style={{color:"#11AC15", fontSize:"13px", textAlign:"center"}}>{message}</p>
            </div>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <Link style={{margin:"20px"}} type='close' className='btn btn-outline-light mx-4' to={`/Homepage/${id}`}>
              Back
            </Link>
            <button style={{margin:"10px"}} type="Submit" onClick={handleDeposit} className='btn btn-outline-danger mx-5'>
              DEPOSIT
            </button>
          </div>
          </div>
        </div>
      </form>
    </div>
  )
}
