import axios, { Axios } from 'axios';
import './cryptolist.css';
import '../Pages/Home/Home.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CoinWallet() {
  const [user,setUser]=useState({
    firstName:"",
    userName:"",
    mabalance:""
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
  };

  // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
 
    // Fetching crypto data from the API only
    // once when the component is mounted
    useEffect(() => {
        axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=LKR`)
        .then((res) => {
        setCrypto(res.data.coins);
        });
    }, []);

  return (
    <div>
      <main className='m1'>
        <section className='s1'>
            <h2 style={{color:'lightgreen',paddingLeft:"68%",fontSize:"180%"}}>
            ${user.mabalance}
            <select onChange={handleOptionSelect} style={{color:'lightgreen',fontSize:"80%", border:"2px solid #FFFFFF", marginLeft:"10%",width:"50%"}}>
              <option value="Home">{user.firstName}</option>
              <option value="PersonalData">Personal Data</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdrawal">Withdrawal</option>
              <option value="CoinWallet">Coin Wallet</option>
              <option value="Trade">Trade</option>
              <option value="Participants">Participants</option>
              <option value="Logout">Logout</option>
            </select>
            </h2>
        </section>
        <section>
          <div className='Homecustombackground4'>
            <nav>
              <ul className="menuItems">
                <li style={{backgroundColor:"transparent", paddingBottom:"0px"}}><a style={{backgroundColor:"transparent"}} href={`/Send/${id}`} data-item='SEND'>SEND</a></li>
                <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Receive/${id}`} value="RECIEVE" data-item='RECIEVE'>RECIEVE</a></li>
                <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Swap/${id}`} value="SWAP" data-item='SWAP'>SWAP</a></li>
                <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Coinas/${id}`} value="COIN" data-item='COIN'>COIN</a></li>
                <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Cashas/${id}`} value="CASH" data-item='CASH'>CASH</a></li>
                <h3 style={{border:"3px solid white", borderRadius:"20px",paddingBottom:"10px",color:'lightgreen', backgroundColor:"#4C275B", fontSize:"120%", textAlign:"center"}}>Coin Balance
                <h3 style={{color:'lightgreen', backgroundColor:"#4C275B", fontSize:"120%", textAlign:"center"}}>${user.cabalance}</h3></h3>
              </ul>
            </nav>
            <h1 data-aos="fade-up" className='homeTitle5'>
              EXCHANGE AND SAVE YOUR CRYPTO CURRENCIES COINS
            </h1>
            <div className="cryptolist">
            <h1>All Cryptocurrencies</h1>
            <input type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table style={{backgroundColor:"white"}}>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Available Supply</td>
                        <td>Volume(24hrs)</td>
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody style={{backgroundColor:"white"}}>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}} className="rank">{val.rank}</td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}} className="logo">
                                            <a style={{backgroundColor:"aliceblue"}} href={val.websiteUrl}>
                                              <img style={{backgroundColor:"aliceblue", fontSize:"5px",width:"30px",height:"30px"}} src={val.icon} alt="logo" width="30px" />
                                            </a>
                                            <p style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}}>{val.name}</p>
                                        </td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}} className="symbol">{val.symbol}</td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>Rs {val.marketCap}</td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>Rs {val.price.toFixed(2)}</td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>{val.availableSupply}</td>
                                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>{val.volume.toFixed(0)}</td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        </div>
          </div>
        </section>
      </main>
    </div>
  )
}
