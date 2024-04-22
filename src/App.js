import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './Components/Header/Header';
import Userinterface from "./Pages/UserInterface/Userinterface";
import Register from "./Pages/Signup/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Update from "./Pages/Update";
import personal from "./Pages/personal";
import Deposit from "./Pages/Deposit/Deposit";
import Withdrawal from "./Pages/Withdrawal";
import CoinWallet from "./Pages/CoinWallet";
import Send from "./Pages/Send";
import Receive from "./Pages/Receive";
import Swap from "./Pages/Swap";
import Coinas from "./Pages/Coinas";
import Cashas from "./Pages/Cashas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Userinterface} exact/>
        <Route path="/signup/:id" Component={Register} exact/>
        <Route path="/Login/:id" Component={Login} exact/>
        <Route path="/Homepage/:id" Component={Home} exact/>
        <Route path="/Deposit/:id" Component={Deposit} exact/>
        <Route path="/Withdrawal/:id" Component={Withdrawal} exact/>
        <Route path="/Personal/:id" Component={personal} exact/>
        <Route path="/CoinWallet/:id" Component={CoinWallet} exact/>
        <Route path="/Updatepage/:id" Component={Update} exact/>
        <Route path="/Users/:id" Component={Users} exact/>
        <Route path="/Send/:id" Component={Send} exact/>
        <Route path="/Receive/:id" Component={Receive} exact/>
        <Route path="/Swap/:id" Component={Swap} exact/>
        <Route path="/Coinas/:id" Component={Coinas} exact/>
        <Route path="/Cashas/:id" Component={Cashas} exact/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;