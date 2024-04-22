import React, { useEffect, useState } from "react";
import axios from "axios";
import './Signup/Register.css'
import { Link, useParams } from "react-router-dom";

export default function Send() {
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

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  //Send
  const valuefromdatabase = user.cabalance;
  const[withdrawalvalue,setwithdrawalvalue]=useState('');
  const [sum,setsum]=useState(null);
  const [message, setMessage]=useState('');

  const handlewithdrawal=()=>{
    const amount = parseFloat(withdrawalvalue);
    if(isNaN(valuefromdatabase)||valuefromdatabase<=0||valuefromdatabase<amount){
      setMessage('Please enter a valid positive amount.');
      return;
    }
    const newBalance = valuefromdatabase-amount;
    axios.put(`http://localhost:8080/user/${id}`,{
      cabalance:newBalance,
      id:user.id,
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      country:user.country,
      anumber:user.anumber,
      mabalance:user.mabalance
    })
    .then(response =>{
      setsum(newBalance);
      setMessage(`withdrawal of ${amount} was successful. New balance: ${newBalance}`);
      setwithdrawalvalue('');
    })
    .catch(error=>{
      setMessage('Error updating the balance. Please try again.');
    });
  };
  return (
    <div className='b1'>
      <form style={{backgroundColor:'transparent'}}>
        <h3 className='Header'>SEND</h3>
        <div  className='d2'>
          <label style={{paddingLeft:"70px"}} className="label" htmlFor="username">Available Balance : 
            <b style={{backgroundColor:'transparent',paddingLeft:"30px", color:"lightgreen", fontSize:"20px"}} >{user.cabalance}</b>
          </label>
          <label style={{marginTop:"35px"}} className="label" htmlFor="username">Enter Coin Amount to Send : </label>
          <div style={{backgroundColor:"transparent",color:"lightgreen", paddingLeft:"20px", fontSize:"20px", marginTop:"5px"}}
           className="mia">
            <input type="number" style={{margin:"10px", backgroundColor:"silver", width:"200px", border:"5px solid green", borderRadius:"15px"}}
              placeholder="Enter the Send Coin"
              value={withdrawalvalue} onChange={(e)=>setwithdrawalvalue(e.target.value)}/>
            <select id="servicequality">
              <option>BTC</option>
              <option>ETH</option>
              <option>USDT</option>
              <option>BNB</option>
              <option>LTC</option>
              <option>TRON</option>
          </select>
            </div>
            <div>
            <p style={{color:"#11AC15", fontSize:"13px", textAlign:"center"}}>{message}</p>
            </div>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <Link style={{margin:"20px", backgroundColor:"lightblue", color:"ThreeDDarkShadow"}} type='close' className='btn btn-outline-light mx-4' to={`/CoinWallet/${id}`}>
              Back
            </Link>
            <button style={{background:"darkgreen"}} type="Submit" onClick={handlewithdrawal} className='btn btn-outline-light mx-5'>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}