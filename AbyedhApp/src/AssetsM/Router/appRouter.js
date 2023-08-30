import React from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import LogInPage from '../../App/logInPage'

import ProfileLandingPage from '../../App/profileLandingPage'

//camion
import MainPage from "../../App/Main/mainPage";
import SuiviePage from '../../App/Suivie/suiviePage';
import FavoritePage from '../../App/Favorite/favoritePage';
import DocummentPage from '../../App/Documments/docummentsPage';
import CalendarPage from '../../App/Calendar/calendarPage';
import SettingPage from '../../App/Setting/settingPage';
import SignUpPage from '../../App/signUpPage';
import DocummentLanding from '../../App/Documments/documentsLanding';
import DocummentInfo from '../../App/Documments/docummentDate';

const RedirectingPage = () => {
    const UIDisSet = localStorage.getItem('PID');
    return (<>
        {
            UIDisSet ? <Navigate to='/App/L'  /> : <Navigate to='/App/logIn'  />
        } 
</>);}

const UserRouter = () => (
    <Route path="App" exact element={<Outlet />} >
            <Route path="" exact element={<RedirectingPage />} />
            <Route path="logIn" exact element={<LogInPage />} />
            <Route path="signUp" exact element={<SignUpPage />} />
            <Route path="L" exact element={<ProfileLandingPage />} >
                    <Route path="" exact element={<MainPage />} />
                    <Route path="ma" exact element={<MainPage />} />
                    <Route path="sv" exact element={<SuiviePage />} />
                    <Route path="fv" exact element={<FavoritePage />} >
                        <Route path="" exact element={<MainPage />} />
                        <Route path="info/:code" exact element={<MainPage />} />
                    </Route>
                    <Route path="dc" exact element={<Outlet />} >
                        <Route path='' exact element={<DocummentPage />} />
                        <Route path='landing/:g' exact element={<DocummentLanding />} />
                        <Route path='info/:g/:ID' exact element={<DocummentInfo />} />
                    </Route>
                    <Route path="cl" exact element={<CalendarPage />} />
                    <Route path="st" exact element={<SettingPage />} />
            </Route>
    </Route>
)

export default UserRouter 