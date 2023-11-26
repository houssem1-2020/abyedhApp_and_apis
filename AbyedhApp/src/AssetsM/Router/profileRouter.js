import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';




//camion
// import LogInPage from '../../Profile/logInPage'
// import ProfileLandingPage from '../../Profile/profileLandingPage'
// import MainPage from "../../Profile/Main/mainPage";
// import SuiviePage from '../../Profile/Suivie/suiviePage';
// import SuivieSelectPage from '../../Profile/Suivie/suivieSelectPage';
// import FavoritePage from '../../Profile/Favorite/favoritePage';
// import DocummentPage from '../../Profile/Documments/docummentsPage';
// import CalendarPage from '../../Profile/Calendar/calendarPage';
// import SettingPage from '../../Profile/Setting/settingPage';
// import SignUpPage from '../../Profile/signUpPage';
// import DocummentLanding from '../../Profile/Documments/documentsLanding';
// import DocummentInfo from '../../Profile/Documments/docummentDate';

const LogInPage = React.lazy(() => import('../../Profile/logInPage'));
const ProfileLandingPage = React.lazy(() => import('../../Profile/profileLandingPage'));
const MainPage = React.lazy(() => import('../../Profile/Main/mainPage'));
const SuiviePage = React.lazy(() => import('../../Profile/Suivie/suiviePage'));
const SuivieSelectPage = React.lazy(() => import('../../Profile/Suivie/suivieSelectPage'));
const FavoritePage = React.lazy(() => import('../../Profile/Favorite/favoritePage'));
const DocummentPage = React.lazy(() => import('../../Profile/Documments/docummentsPage'));
const CalendarPage = React.lazy(() => import('../../Profile/Calendar/calendarPage'));
const SettingPage = React.lazy(() => import('../../Profile/Setting/settingPage'));
const SignUpPage = React.lazy(() => import('../../Profile/signUpPage'));
const DocummentLanding = React.lazy(() => import('../../Profile/Documments/documentsLanding'));
const DocummentInfo = React.lazy(() => import('../../Profile/Documments/docummentDate'));


const ForLazyLoadingLoader = () =>{
    return (<>
            <div className="loader-container">
              <div className="loader-small"></div>
            </div>              
        </>);
  }

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
            <Route path="logIn" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LogInPage /></Suspense>} />
            <Route path="signUp" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SignUpPage /></Suspense>} />
            <Route path="L" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProfileLandingPage /></Suspense>} >
                    <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><MainPage /></Suspense>} />
                    <Route path="ma" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><MainPage /></Suspense>} />
                    <Route path="sv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SuiviePage /></Suspense>} />
                    <Route path="sv/:RID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SuivieSelectPage /></Suspense>} />
                    <Route path="fv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><FavoritePage /></Suspense>} >
                        <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><MainPage /></Suspense>} />
                        {/* <Route path="info/:code" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><MainPage /></Suspense>} /> */}
                    </Route>
                    <Route path="dc" exact element={<Outlet />} >
                        <Route path='' exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DocummentPage /></Suspense>} />
                        <Route path='landing/:g' exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DocummentLanding /></Suspense>} />
                        <Route path='info/:g/:ID' exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DocummentInfo /></Suspense>} />
                    </Route>
                    {/* <Route path="cl" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CalendarPage /></Suspense>} /> */}
                    <Route path="st" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SettingPage /></Suspense>} />
            </Route>
    </Route>
)

export default UserRouter 