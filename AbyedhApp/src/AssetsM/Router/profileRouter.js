import React from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import LogInPage from '../../Profile/logInPage'

import ProfileLandingPage from '../../Profile/profileLandingPage'

//camion
import MainPage from "../../Profile/Main/mainPage";
import SuiviePage from '../../Profile/Suivie/suiviePage';
import FavoritePage from '../../Profile/Favorite/favoritePage';
import DocummentPage from '../../Profile/Documments/docummentsPage';
import CalendarPage from '../../Profile/Calendar/calendarPage';
import SettingPage from '../../Profile/Setting/settingPage';
import SignUpPage from '../../Profile/signUpPage';
import DocummentLanding from '../../Profile/Documments/documentsLanding';
import DocummentInfo from '../../Profile/Documments/docummentDate';

const RedirectingPage = () => {
    const UIDisSet = localStorage.getItem('UID');
    return (<>
        {
            UIDisSet ? <Navigate to='/Profile/L'  /> : <Navigate to='/Profile/logIn'  />
        } 
</>);}

const UserRouter = () => (
    <Route path="Profile" exact element={<Outlet />} >
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