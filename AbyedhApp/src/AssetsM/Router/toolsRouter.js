import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import ToolsLandingPage from '../../Tools/toolsLandingPage'



/* BLOGS */
//Blog
const BlogPage = React.lazy(() => import('../../Tools/Blog/mainPage'));
const BlogLandingPage = React.lazy(() => import('../../Tools/Blog/Landing/landingPage'));
const BlogProfilePage = React.lazy(() => import('../../Tools/Blog/Profile/profilePage'));
//Products
const ProductsPage = React.lazy(() => import('../../Tools/Products/mainPage'));
const ProductsLandingPage = React.lazy(() => import('../../Tools/Products/Landing/landingPage'));
const ProductsListePage = React.lazy(() => import('../../Tools/Products/Liste/listePage'));
const ProductsProfilePage = React.lazy(() => import('../../Tools/Products/Profile/profilePage'));
//Sport
const SportPage = React.lazy(() => import('../../Tools/Sport/mainPage'));
const SportLandingPage = React.lazy(() => import('../../Tools/Sport/Landing/landingPage'));
const SportProfilePage = React.lazy(() => import('../../Tools/Sport/Profile/profilePage'));
//Art
const ArtPage = React.lazy(() => import('../../Tools/Art/mainPage'));
const ArtLandingPage = React.lazy(() => import('../../Tools/Art/Landing/landingPage'));
const ArtProfilePage = React.lazy(() => import('../../Tools/Art/Profile/profilePage'));
//Jurdique
const JurdiquePage = React.lazy(() => import('../../Tools/Jurdique/mainPage'));
const JurdiqueLandingPage = React.lazy(() => import('../../Tools/Jurdique/Landing/landingPage'));
const JurdiqueProfilePage = React.lazy(() => import('../../Tools/Jurdique/Profile/profilePage'));
//Touristique
const TouristiquePage = React.lazy(() => import('../../Tools/Touristique/mainPage'));
const TouristiqueLandingPage = React.lazy(() => import('../../Tools/Touristique/Landing/landingPage'));
const TouristiqueProfilePage = React.lazy(() => import('../../Tools/Touristique/Profile/profilePage'));

/* TRANSPORT */
//Taxi
const TaxiPage = React.lazy(() => import('../../Tools/Taxi/taxiPage'));
const IndivTaxiPage = React.lazy(() => import('../../Tools/Taxi/IndivTaxiPage'));
const CollectifTaxiPage = React.lazy(() => import('../../Tools/Taxi/collectivTaxiPage'));
const AddTaxiPage = React.lazy(() => import('../../Tools/Taxi/App/addPage'));
const AppTaxiPage = React.lazy(() => import('../../Tools/Taxi/App/appPage'));
const LoginTaxi = React.lazy(() => import('../../Tools/Taxi/App/logInPage'));
//Louage
const LouagePage = React.lazy(() => import('../../Tools/Louage/louagePage'));
const LouageLandingPage = React.lazy(() => import('../../Tools/Louage/Landing/landingPage'));
const LouageProfilePage = React.lazy(() => import('../../Tools/Louage/Profile/profilePage'));
const AddLouagePage = React.lazy(() => import('../../Tools/Louage/App/addPage'));
const AppLouagePage = React.lazy(() => import('../../Tools/Louage/App/appPage'));
const LoginLouage = React.lazy(() => import('../../Tools/Louage/App/logInPage'));
//Public
const PublicPage = React.lazy(() => import('../../Tools/Public/publicPage'));
const PublicLandingPage = React.lazy(() => import('../../Tools/Public/Landing/landingPage'));
const PublicProfilePage = React.lazy(() => import('../../Tools/Public/Profile/profilePage'));
//Automobile
const AutomobilePage = React.lazy(() => import('../../Tools/Automobile/mainPage'));
const AutomobileLandingPage = React.lazy(() => import('../../Tools/Automobile/Landing/landingPage'));
const AutomobileProfilePage = React.lazy(() => import('../../Tools/Automobile/Profile/profilePage'));
 

/* Education */
//Etude
const EtudePage = React.lazy(() => import('../../Tools/Etude/mainPage'));
const EtudeLandingPage = React.lazy(() => import('../../Tools/Etude/Landing/landingPage'));
const EtudeProfilePage = React.lazy(() => import('../../Tools/Etude/Profile/profilePage'));
//ProgramScolair
const ProgramScolairPage = React.lazy(() => import('../../Tools/ProgramScolair/mainPage'));
const ProgramScolairLandingPage = React.lazy(() => import('../../Tools/ProgramScolair/Landing/landingPage'));
const ProgramScolairProfilePage = React.lazy(() => import('../../Tools/ProgramScolair/Profile/profilePage'));
//LivreScolair
const LivreScolairPage = React.lazy(() => import('../../Tools/LivreScolair/mainPage'));
const LivreScolairLandingPage = React.lazy(() => import('../../Tools/LivreScolair/Landing/landingPage'));
const LivreScolairProfilePage = React.lazy(() => import('../../Tools/LivreScolair/Profile/profilePage'));
//Devoirat
const DevoiratPage = React.lazy(() => import('../../Tools/Devoirat/mainPage'));
const DevoiratLandingPage = React.lazy(() => import('../../Tools/Devoirat/Landing/landingPage'));
const DevoiratProfilePage = React.lazy(() => import('../../Tools/Devoirat/Profile/profilePage'));

/* SANTE */


/* FINANCE & BUSINESS */
//Salaire
const SalairePage = React.lazy(() => import('../../Tools/Salaire/mainPage'));
const SalaireLandingPage = React.lazy(() => import('../../Tools/Salaire/Landing/landingPage'));
const SalaireProfilePage = React.lazy(() => import('../../Tools/Salaire/Profile/profilePage'));
//Jobs
const JobsPage = React.lazy(() => import('../../Tools/Jobs/mainPage'));
const JobsLandingPage = React.lazy(() => import('../../Tools/Jobs/Landing/landingPage'));
const JobsProfilePage = React.lazy(() => import('../../Tools/Jobs/Profile/profilePage'));


/* CONSTRUCTION */
//Renting
const RentingPage = React.lazy(() => import('../../Tools/Renting/mainPage'));
const RentingLandingPage = React.lazy(() => import('../../Tools/Renting/Landing/landingPage'));
const RentingProfilePage = React.lazy(() => import('../../Tools/Renting/Profile/profilePage'));


/* AUTRES */
//News
const NewsPage = React.lazy(() => import('../../Tools/News/mainPage'));
const NewsLandingPage = React.lazy(() => import('../../Tools/News/Landing/landingPage'));
const NewsProfilePage = React.lazy(() => import('../../Tools/News/Profile/profilePage'));
//Forum
const ForumPage = React.lazy(() => import('../../Tools/Forum/mainPage'));
const ForumLandingPage = React.lazy(() => import('../../Tools/Forum/Landing/landingPage'));
const ForumProfilePage = React.lazy(() => import('../../Tools/Forum/Profile/profilePage'));
//Data
const DataPage = React.lazy(() => import('../../Tools/Data/mainPage'));
const DataLandingPage = React.lazy(() => import('../../Tools/Data/Landing/landingPage'));
const DataProfilePage = React.lazy(() => import('../../Tools/Data/Profile/profilePage'));
//Calendrier
const CalendrierPage = React.lazy(() => import('../../Tools/Calendrier/mainPage'));
const CalendrierLandingPage = React.lazy(() => import('../../Tools/Calendrier/Landing/landingPage'));
const CalendrierProfilePage = React.lazy(() => import('../../Tools/Calendrier/Profile/profilePage'));
//Agritools
const AgriToolsPage = React.lazy(() => import('../../Tools/AgriTools/mainPage'));
const AgriToolsLandingPage = React.lazy(() => import('../../Tools/AgriTools/Landing/landingPage'));
const AgriToolsProfilePage = React.lazy(() => import('../../Tools/AgriTools/Profile/profilePage'));
//Camping
const CampingPage = React.lazy(() => import('../../Tools/Camping/mainPage'));
const CampingLandingPage = React.lazy(() => import('../../Tools/Camping/Landing/landingPage'));
const CampingProfilePage = React.lazy(() => import('../../Tools/Camping/Profile/profilePage'));
//Story
const StoryPage = React.lazy(() => import('../../Tools/Story/mainPage'));
const StoryLandingPage = React.lazy(() => import('../../Tools/Story/Landing/landingPage'));
const StoryProfilePage = React.lazy(() => import('../../Tools/Story/Profile/profilePage'));
//Invitation
const InvitationPage = React.lazy(() => import('../../Tools/Invitation/mainPage'));
const InvitationLandingPage = React.lazy(() => import('../../Tools/Invitation/Landing/landingPage'));
const InvitationProfilePage = React.lazy(() => import('../../Tools/Invitation/Profile/profilePage'));




const ForLazyLoadingLoader = () =>{
    return (<>
            <div className="loader-container">
              <div className="loader-small"></div>
            </div>              
        </>);
  }

const ToolsRouter = () => (
    <Route path="Tools" exact element={<Outlet  />} >
            <Route path="" exact element={<ToolsLandingPage />} />

            {/* Blogs */}
            <Route path="Blog" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><BlogPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><BlogLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><BlogProfilePage /></Suspense>} />
            </Route>
            <Route path="Products" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProductsPage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProductsLandingPage /></Suspense>} />
                <Route path="Liste/:genre/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProductsListePage /></Suspense>} />
                <Route path="profile/:genre/:tag/:code" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProductsProfilePage /></Suspense>} />
            </Route>
            <Route path="Sport" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportPage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportLandingPage /></Suspense>} />
                <Route path="profile" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportProfilePage /></Suspense>} />
            </Route>
            <Route path="Art" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ArtPage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ArtLandingPage /></Suspense>} />
                <Route path="profile" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ArtProfilePage /></Suspense>} />
            </Route>
            <Route path="Economique" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportPage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportLandingPage /></Suspense>} />
                <Route path="profile" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SportProfilePage /></Suspense>} />
            </Route>
            <Route path="Touristique" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><TouristiquePage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><TouristiqueLandingPage /></Suspense>} />
                <Route path="profile" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><TouristiqueProfilePage /></Suspense>} />
            </Route>
            <Route path="Jurdique" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JurdiquePage /></Suspense>} />
                <Route path="landing/:genre" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JurdiqueLandingPage /></Suspense>} />
                <Route path="profile" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JurdiqueProfilePage /></Suspense>} />
            </Route>

            {/* Transport */}
            <Route path="Taxi" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><TaxiPage /></Suspense>} />
                <Route path="indiv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><IndivTaxiPage /></Suspense>} />
                <Route path="collectiv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CollectifTaxiPage /></Suspense>} />
                <Route path="add" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AddTaxiPage /></Suspense>} />
                <Route path="app" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AppTaxiPage /></Suspense>} />
                <Route path="logIn" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LoginTaxi /></Suspense>} />
            </Route>
            <Route path="Louage" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LouagePage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LouageLandingPage /></Suspense>} />
                <Route path="page/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LouageProfilePage /></Suspense>} />
                <Route path="add" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AddLouagePage /></Suspense>} />
                <Route path="app" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AppLouagePage /></Suspense>} />
                <Route path="logIn" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LoginLouage /></Suspense>} />
            </Route>
            <Route path="Public" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><PublicPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><PublicLandingPage /></Suspense>} />
                <Route path="page/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><PublicProfilePage /></Suspense>} />
            </Route>
            <Route path="Automobile" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AutomobilePage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AutomobileLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AutomobileProfilePage /></Suspense> } />
            </Route>

            {/* Education */}
            <Route path="Etude" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><EtudePage /></Suspense>} />
                <Route path="result/:genre/:gouv/:deleg" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><EtudeLandingPage /></Suspense>} />
                <Route path="profile/:HID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><EtudeProfilePage /></Suspense>} />
            </Route>
            <Route path="ProgramScolair" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProgramScolairPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProgramScolairLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ProgramScolairProfilePage /></Suspense>} />
            </Route>
            <Route path="LivreScolair" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LivreScolairPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LivreScolairLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LivreScolairProfilePage /></Suspense>} />
            </Route>
            <Route path="Devoirat" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DevoiratPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DevoiratLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DevoiratProfilePage /></Suspense>} />
            </Route>

            {/* Sante */}
            
            {/* Finance */}
            <Route path="Salaire" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SalairePage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SalaireLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><SalaireProfilePage /></Suspense>} />
            </Route>
            <Route path="Jobs" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JobsPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JobsLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><JobsProfilePage /></Suspense>} />
            </Route>

            {/* Construction */}
            <Route path="Renting" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><RentingPage /></Suspense>} />
                <Route path="result/:genre/:gouv/:deleg" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><RentingLandingPage /></Suspense>} />
                <Route path="profile/:HID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><RentingProfilePage /></Suspense>} />
                <Route path="add" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AddTaxiPage /></Suspense>} />
                <Route path="app" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AppTaxiPage /></Suspense>} />
                <Route path="logIn" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><LoginTaxi /></Suspense>} />
            </Route>

            {/* Autres */}
            <Route path="News" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><NewsPage /></Suspense>} />
                <Route path="landing/:Gouv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><NewsLandingPage /></Suspense>} />
                <Route path="page/:Gouv" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><NewsProfilePage /></Suspense>} />
            </Route>
            <Route path="Forum" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ForumPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ForumLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><ForumProfilePage /></Suspense>} />
            </Route>
            <Route path="Data" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DataPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DataLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><DataProfilePage /></Suspense>} />
            </Route>
            <Route path="Calendrier" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CalendrierPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CalendrierLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CalendrierProfilePage /></Suspense>} />
            </Route>
            <Route path="AgriTools" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AgriToolsPage /></Suspense>} />
                <Route path="result/:genre/:gouv/:deleg" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AgriToolsLandingPage /></Suspense>} />
                <Route path="profile/:HID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><AgriToolsProfilePage /></Suspense>} />
            </Route>
            <Route path="Camping" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CampingPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CampingLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><CampingProfilePage /></Suspense>} />
            </Route>
            <Route path="Story" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><StoryPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><StoryLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><StoryProfilePage /></Suspense>} />
            </Route>
            <Route path="Invitation" exact element={<Outlet />} >
                <Route path="" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><InvitationPage /></Suspense>} />
                <Route path="landing/:tag" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><InvitationLandingPage /></Suspense>} />
                <Route path="page/:PAID" exact element={<Suspense fallback={<ForLazyLoadingLoader />}><InvitationProfilePage /></Suspense>} />
            </Route>
    </Route>
)

export default ToolsRouter 