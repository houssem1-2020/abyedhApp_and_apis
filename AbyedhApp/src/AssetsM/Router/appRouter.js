import React , { useEffect, useState }from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet, useParams} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import GConf from '../../App/AssetsM/APPConf';

//navBar
import NavBar from '../../App/Dashboard/navBar'
import LeftSideCard from '../../App/Dashboard/leftSide';

import MainPage from '../../App/Dashboard/Main/mainPage';
import SystemPage from '../../App/Dashboard/System/systemPage';
import SpesificPage from '../../App/Dashboard/Spesific/spesificPage';

//Commandes
import RequestPage from '../../App/Dashboard/Requests/requestPage';
import RequestReservationInfo from "../../App/Dashboard/Requests/requestInfo"; 
import CalendarCommandes from '../../App/Dashboard/Requests/calendar';

import MessagesPages from '../../App/Dashboard/Messages/messagesPage'
import ProfilePage from '../../App/Dashboard/Profile/profilePage'

//Login  & Auth
import LogIn from '../../App/LogIn/logIn';
import AuthPage from '../../App/LogIn/authPage';

const RedirectingPage = () => {
    let {tag} = useParams()
    const getPID = localStorage.getItem('PID');
    return (<>
        {
            getPID ? <Navigate to='/App/S'  /> : <Navigate to={`/App/Login/${tag}`}  />
        } 
    </>);
}

const SystemLanding = () => {
    useEffect(() => {
        //CheckAuthentification()
        CheckLogIn()
    },[]);
  
    const CheckAuthentification = () =>{
        const AuthenKey = localStorage.getItem(`${GConf.SystemTag}_AuthKeyISSet`);
        if (!AuthenKey) {
            window.location.href = "/Auth";
        }
    }
  
    const CheckLogIn = () =>{
        const pidIsSet = localStorage.getItem('PID');
        if (!pidIsSet) {window.location.href = "/login";}
    }
  
    return (<>
        <NavBar/>
        <br />
        <br />
        <br />
         
        <div className='row pt-4 m-1'>
                <div className='col-12 col-md-12 col-lg-2'><LeftSideCard /></div>
                <div className='col-12 col-md-12 col-lg-10'><Outlet /></div>
        </div>
    </>);
  }

const UserRouter = () => (
    
    <Route path="App" exact element={<Outlet />} >
            <Route path="L/:tag" element={<RedirectingPage />} />
            <Route path="Login/:tag" element={<LogIn />} />
            <Route path="Auth" element={<AuthPage />} />
            <Route path="S" exact element={<SystemLanding />} >
                    <Route path="" exact element={<MainPage />} />
                    <Route path="System" exact element={<SystemPage />} />
                    <Route path="Spesific" exact element={<SpesificPage />} />
                    <Route path="rq" exact element={<Outlet />} >
                        <Route path=":TAG" exact element={<RequestPage />} />
                        <Route path="info/:TAG/:CID" exact element={<RequestReservationInfo />} />
                    </Route>
                    <Route path="Profile" exact element={<ProfilePage />} />
                    <Route path="Message" exact element={<MessagesPages />} />
            </Route>
    </Route>
)

export default UserRouter 