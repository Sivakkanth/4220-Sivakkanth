import axios from 'axios';
import './Home.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from "../../photos/logo.png"
import { TiThMenu } from "react-icons/ti";
import profilepicture from '../../photos/profi.png'
import { MdCloseFullscreen } from "react-icons/md";
import MovingComponents from '../../Components/UserInterfaceCom/MovingComponents';

const Home = () => {
  const [openButtons, setOpenButtons] = useState(false)
  const [user,setUser]=useState({
    firstName:"",
    userName:"",
    mabalance:"0.00"
  })
  const {id}=useParams();
  useEffect(()=>{
    loadUser();
  },[]);
  const loadUser=async ()=>{
    const result =await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  
  function handleOptionSelect(event) {
    const selectedOption = event.target.value;
    // Redirect to the URL associated with the selected option
    if (selectedOption === "Home") {
      window.location.href = `/Homepage/${id}`;
    } 
    else if (selectedOption === 'PersonalData') {
      window.location.href = `/Personal/${id}`;
    }
    else if (selectedOption === 'Deposit') {
      window.location.href = `/Deposit/${id}`;
    }
    else if (selectedOption === 'Withdrawal') {
      window.location.href = `/Withdrawal/${id}`;
    }
    else if (selectedOption === 'CoinWallet') {
      window.location.href = `/CoinWallet/${id}`;
    }
    else if (selectedOption === 'Trade') {
      window.location.href = 'https://www.facebook.com';
    }
    else if (selectedOption === 'Participants') {
      window.location.href = '/Users/:id';
    }
    else if (selectedOption === 'Logout') {
      window.location.href = '/';
    }
  }

  return (
    <div className='home-main'>
      <div className='home-m1'>
        <img className='logo-home' src={logo} alt="Crypto Currency Wallet"/>
        <div className='home-menu-button' onClick={()=>setOpenButtons(true)}>
          <p className='home-balance'>${user.mabalance}.00</p>
          <TiThMenu onClick={()=>setOpenButtons(true)} style={{ color: 'black', fontSize: '24px' }}/>
        </div>
        <div className='home-buttons'>
          <p className='home-balance'>${user.mabalance}.00</p>
          <select onChange={handleOptionSelect} className='home-select-button'>
            <option className='home-select-button-option' value="Home">{user.firstName}</option>
            <option className='home-select-button-option' value="PersonalData">Personal Data</option>
            <option className='home-select-button-option' value="Deposit">Deposit</option>
            <option className='home-select-button-option' value="Withdrawal">Withdrawal</option>
            <option className='home-select-button-option' value="CoinWallet">Coin Wallet</option>
            <option className='home-select-button-option' value="Trade">Trade</option>
            <option className='home-select-button-option' value="Participants">Participants</option>
            <option className='home-select-button-option' value="Logout">Logout</option>
          </select>
          <img className='home-profile-photo' src={profilepicture}/>
        </div>
      </div>  
      <div className='Homecustombackground1'>
        <div className='home-background'>
          <p className='homeTitle1'>
            TRADE AND EARN MONEY WITH SAVE CRYPTO CURRENCY COIN
          </p>
        </div>
      </div>
      <div className='withdraw-accounts'>
        <p className='withdraw-accounts-head'>Deposit and Withdraw Method</p>
        <MovingComponents/>
      </div>
      {openButtons && (<div className='home-menu-buttons'>
          <div className='home-close-button' onClick={()=>setOpenButtons(false)}>
            <MdCloseFullscreen style={{ color: 'black', fontSize: '24px' }}/>
          </div>
          <div className='home-menubutt'>
            <Link className='home-subbutton' to={`/Homepage/${id}`}>{user.firstName}</Link>
            <Link className='home-subbutton' to={`/Personal/${id}`}>Personal Data</Link>
            <Link className='home-subbutton' to={`/Deposit/${id}`}>Deposit</Link>
            <Link className='home-subbutton' to={`/Withdrawal/${id}`}>Withdrawal</Link>
            <Link className='home-subbutton' to={`/CoinWallet/${id}`}>Coin Wallet</Link>
            <Link className='home-subbutton' to='https://www.facebook.com'>Trade</Link>
            <Link className='home-subbutton' to='/Users/:id'>Participants</Link>
            <Link className='home-subbutton' to="/">Logout</Link>         
         </div>
        </div>)}
    </div>
  )
}

export default Home