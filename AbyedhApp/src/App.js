//React And GLOBAL CSS
import React, { useEffect, useState } from 'react';
import GConf from './AssetsM/generalConf';
import LoadingBar from 'react-top-loading-bar'
import { toast, ToastContainer } from 'react-toastify';

// /*CSS*/
import 'bootstrap-icons/font/bootstrap-icons.css';
import './theme.css';
import "gridjs/dist/theme/mermaid.css";
import 'react-toastify/dist/ReactToastify.css';

//Router & Routes
import { BrowserRouter as Router,Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
//import appRouter  from './AssetsM/Router/appRouter';
import profileRouter  from './AssetsM/Router/profileRouter';
import toolsRouter from './AssetsM/Router/toolsRouter'

//Login 

import MainLandingPage from './Routing/mainLandingPage'
import SearchLandingPage from './Routing/Landing/searchLandingPage';
import ResultPage from './Routing/Result/resulatPage';
import ProfilePage from './Routing/Profile/profilePage';
import ProfileAction from './Routing/Profile/actionPage';
import DocteurActions from './Routing/Profile/Actions/docteur';
import GarderieActions from './Routing/Profile/Actions/garderie';
import ProfileFollow from './Routing/Profile/followPage';
import AboutPage from './About/aboutPage';
import SearchPage from './Routing/Search/searchPage';
import SystemPage from './Routing/Systems/SystemPage';
import SystemAdd from './Routing/Systems/addPage';
import SystemUser from './Routing/Systems/userPage';

function App() {
  //const and variables 
  //const AppRouter = appRouter();
  const ProfileRouter = profileRouter();
  const ToolsRouter = toolsRouter();
  const [progress, setProgress] = useState(2)

  
  //useefeects
  useEffect(() => {
    setProgress(100);
  }, []);

  const NotFound = () =>{
    return (<div className="cpntainer text-danger pt-5 text-center">
            <h1>Page Introuvable 404 </h1>
            <img src='https://system.anaslouma.tn/Assets/images/404.svg' width='200px' className='img-responsive ' />
        </div>);
  }

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="S/S/:key" element={<SearchPage />} />
          <Route path="S/L/:tag" element={<SearchLandingPage />} />
          <Route path="S/R/:tag/:genre/:gouv/:deleg" element={<ResultPage />} />
          <Route path="S/P/:tag/:PID" element={<ProfilePage />} />
          <Route path="S/P/Action/:tag/:PID" element={<ProfileAction />} />
          <Route path="S/P/Suivie/:tag/:PID" element={<ProfileFollow />} />
          <Route path="S/I" element={<SystemPage />} />
          <Route path="S/I/add/:tag" element={<SystemAdd />} />
          <Route path="S/I/user/:tag" element={<SystemUser />} />
          {/* {AppRouter} */}
          {ProfileRouter}
          {ToolsRouter}
          <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>   
      </Router>
      <LoadingBar color={GConf.themeColor} progress={progress}  
        //onLoaderFinished={() => setProgress(0)} 
      />
      <ToastContainer rtl />
    </>
    
  );
}

export default App;
