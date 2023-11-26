//React And GLOBAL CSS
import React, { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import GConf from './AssetsM/generalConf';
import LoadingBar from 'react-top-loading-bar'
import { Loader, Placeholder } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// /*CSS*/
import 'bootstrap-icons/font/bootstrap-icons.css';
import './theme.css';
import "gridjs/dist/theme/mermaid.css";
import 'react-toastify/dist/ReactToastify.css';

//Router & Routes
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import appRouter  from './AssetsM/Router/appRouter';
import profileRouter  from './AssetsM/Router/profileRouter';
import toolsRouter from './AssetsM/Router/toolsRouter'

//Login 

// import MainLandingPage from './Routing/mainLandingPage'
// import SearchLandingPage from './Routing/Landing/searchLandingPage';
// import ResultPage from './Routing/Result/resulatPage';
// import ProfilePage from './Routing/Profile/profilePage';
// import ProfileAction from './Routing/Profile/actionPage';
// import ProfileFollow from './Routing/Profile/followPage';
// import AboutPage from './About/aboutPage';
// import SearchPage from './Routing/Search/searchPage';
// import SystemPage from './Routing/Systems/SystemPage';
// import SystemAdd from './Routing/Systems/addPage';
// import SystemUser from './Routing/Systems/userPage';



//lazyLoad 
const SearchLandingPage = React.lazy(() => import('./Routing/Landing/searchLandingPage'));
const MainLandingPage = React.lazy(() => import('./Routing/mainLandingPage'));
const ResultPage = React.lazy(() => import('./Routing/Result/resulatPage'));
const ProfilePage = React.lazy(() => import('./Routing/Profile/profilePage'));
const AboutPage = React.lazy(() => import('./About/aboutPage'));
const SearchPage = React.lazy(() => import('./Routing/Search/searchPage'));
const SystemPage = React.lazy(() => import('./Routing/Systems/SystemPage'));
const SystemAdd = React.lazy(() => import('./Routing/Systems/addPage'));
const SystemUser = React.lazy(() => import('./Routing/Systems/userPage'));

function App() {
  //const and variables 
  const AppRouter = appRouter();
  const ProfileRouter = profileRouter();
  const ToolsRouter = toolsRouter();
  const [progress, setProgress] = useState(2)

  
  //useefeects
  useEffect(() => {
    setProgress(100);
  }, []);

  const NotFound = () =>{
    return (<div className="cpntainer text-danger pt-5 text-center">
            <br />
            <br />
            <br />
            <br />
            <h1 className='mt-5'>هَذِهِ الصَفْحَة غَيْرْ مَوْجُودَة ! </h1>
            <img src='https://cdn.abyedh.tn/images/system/404.svg' width='200px' className='img-responsive' alt='Logo' />
        </div>);
  }
  const ForLazyLoading = () =>{
    return (<>
            {/* <div className={`progress-bar-loading mt-0`}>
                <div className="progress-bar-loading-value"></div>
            </div> */}
            {/* <Loader active /> */}
            {/* <div className="loader-container">
              <div className="loader"></div>
            </div> */}
            <div className="loader-container">
              <img src='/loadingImage.gif' width={'100%'} />
            </div>
            
          
              
        </>);
  }
  const ForLazyLoadingLoader = () =>{
    return (<>
            {/* <div className={`progress-bar-loading mt-0`}>
                <div className="progress-bar-loading-value"></div>
            </div> */}
            {/* <Loader active /> */}
            <div className="loader-container">
              <div className="loader-small"></div>
            </div>
            {/* <div className="loader-container">
              <img src='/loadingImage.gif' width={'100%'} />
            </div> */}
            
          
              
        </>);
  }
  const LandingLazyLoading = () =>{
      const PlaceHolderCard = (props) =>{
          return(<>
          <Placeholder className='mb-2 border-div' style={{ height: props.hg, width: '100%' }}>
              <Placeholder.Image />
          </Placeholder>
          </>)
      }
      return(<>
          <div className='container mt-3'>
              <PlaceHolderCard hg={60} />
              <br />
              <br />
              <br />
              <div className='row mb-4'>
                <div className='col-6'><PlaceHolderCard hg={50} /></div>
                <div className='col-6'><PlaceHolderCard hg={50} /></div>
                <div className='col-6'><PlaceHolderCard hg={50} /></div>
                <div className='col-6'><PlaceHolderCard hg={50} /></div>
              </div>
              <br />
              <br />
              <div className='card card-body mb-2 border-div mb-4 '>
                <br />
                <br />
                <PlaceHolderCard hg={40} />
                <PlaceHolderCard hg={40} />
                <PlaceHolderCard hg={40} />
              </div>
              <PlaceHolderCard hg={100} />
              
          </div>
          
      </>)
  }
  const ResultLazyLoading = () =>{
    const PlaceHolderCard = (props) =>{
      return(<>
      <Placeholder className='mb-2 border-div' style={{ height: props.hg, width: '100%' }}>
          <Placeholder.Image />
      </Placeholder>
      </>)
    }
    const PlaceHolderCardRounded = (props) =>{
      return(<>
      <Placeholder className='mb-2   rounded-pill' style={{ height: props.hg, width: '100%', borderRaduis:'50px' }}>
          <Placeholder.Image />
      </Placeholder>
      </>)
    }
    return(<>
        <div className='container mt-3'>
            <PlaceHolderCard hg={60} />
            <br />
            <br />
            <div className='row mb-2'>
              <div className='col-4'><PlaceHolderCardRounded hg={40} /></div>
              <div className='col-4'><PlaceHolderCardRounded hg={40} /></div>
              <div className='col-4'><PlaceHolderCardRounded hg={40} /></div>
            </div>
            
            <PlaceHolderCard hg={190} />
            <PlaceHolderCard hg={190} />
            
        </div>
        
    </>)
  }
  const ProfileLazyLoading = () =>{
    const PlaceHolderCard = (props) =>{
      return(<>
      <Placeholder className='mb-2 border-div' style={{ height: props.hg, width: '100%' }}>
          <Placeholder.Image />
      </Placeholder>
      </>)
    }
    return(<>
        <div className='container mt-3'>
            <PlaceHolderCard hg={60} />
            <br />
            <br />
            <div className='row mb-2'>
              <div className='col-3'><PlaceHolderCard hg={50} /></div>
              <div className='col-3'><PlaceHolderCard hg={50} /></div>
              <div className='col-3'><PlaceHolderCard hg={50} /></div>
              <div className='col-3'><PlaceHolderCard hg={50} /></div>
            </div>
            <div className='row'>
              <div className='col-6'><PlaceHolderCard hg={120} /></div>
              <div className='col-6'><PlaceHolderCard hg={120} /></div>
              <div className='col-12'><PlaceHolderCard hg={120} /></div>
              <div className='col-8'><PlaceHolderCard hg={120} /></div>
              <div className='col-4'><PlaceHolderCard hg={120} /></div>
              <div className='col-12'><PlaceHolderCard hg={70} /></div>
            </div>            
        </div>
        
    </>)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<ForLazyLoading />}><MainLandingPage /></Suspense>} />
          <Route path="S/S/:key" element={<Suspense fallback={<ForLazyLoadingLoader />}><SearchPage /></Suspense>} />
          <Route path="S/L/:tag" element={<Suspense fallback={<ForLazyLoadingLoader />}><SearchLandingPage /></Suspense>} />
          <Route path="S/R/:tag/:genre/:gouv/:deleg" element={<Suspense fallback={<ForLazyLoadingLoader />}><ResultPage /></Suspense>} />
          <Route path="S/P/:tag/:PID" element={<Suspense fallback={<ForLazyLoadingLoader />}><ProfilePage /></Suspense>} />

          <Route path="S/I" element={<Suspense fallback={<ForLazyLoadingLoader />}><SystemPage /></Suspense>} />
          <Route path="S/I/add/:tag" element={<Suspense fallback={<ForLazyLoadingLoader />}><SystemAdd /></Suspense>} />
          <Route path="S/I/user/:tag" element={<Suspense fallback={<ForLazyLoadingLoader />}><SystemUser /></Suspense>} />
          {AppRouter}
          {ProfileRouter}
          {ToolsRouter}  
          <Route path="About" element={<Suspense fallback={<ForLazyLoadingLoader />}><AboutPage /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>   
      </Router>
      {/* <LoadingBar color={GConf.themeColor} progress={progress}  
        //onLoaderFinished={() => setProgress(0)} 
      /> */}
      <ToastContainer rtl />
    </>
    
  );
}

export default App;
