import React, {useState} from 'react'
import logo from "../../photos/logo.png"
import './Header.css'
import { TiThMenu } from "react-icons/ti";
import { MdCloseFullscreen } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [openButtons, setOpenButtons] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return(
        <div class='main-header'>
            <img className='logo-header' src={logo} alt="Crypto Currency Wallet"/>
            <div className='menu-button' onClick={()=>setOpenButtons(true)}>
                <TiThMenu style={{ color: 'black', fontSize: '24px' }}/>
            </div>
            <div className='buttons'>
                <Link className='signin-button' to="/Login/:id">SIGN IN</Link>
                <Link className='signup-button' to="/signup/:id">SIGN UP</Link>
                <select className='translator' value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="ENGLISH">ENG</option>
                    <option value="TAMIL">TAM</option>
                    <option value="SHINHALA">SHI</option>
                </select>
            </div>
            {openButtons && (<div className='menu-buttons'>
                <div className='closebutton' onClick={()=>setOpenButtons(false)}>
                <MdCloseFullscreen style={{ color: 'black', fontSize: '24px' }}/>
                </div>
                <div className='menubutt'>
                <Link className='signbutton' to="/Login/:id">SIGN IN</Link>
                <Link className='signbutton' to="/signup/:id">SIGN UP</Link>
                <select className='signbutton' value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="ENGLISH">ENG</option>
                    <option value="TAMIL">TAM</option>
                    <option value="SHINHALA">SHI</option>
                </select>
                </div>
            </div>)}
        </div>
    )
};

export default Header;