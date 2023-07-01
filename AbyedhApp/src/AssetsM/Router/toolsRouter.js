import React from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import ToolsLandingPage from '../../Tools/toolsLandingPage'

/* APPS */
//Public Transport
import PublicPage from '../../Tools/Public/publicPage';
import PublicLandingPage from '../../Tools/Public/Landing/landingPage';
import PublicProfilePage from '../../Tools/Public/Profile/profilePage';
//Taxi
import TaxiPage from '../../Tools/Taxi/taxiPage';
import IndivTaxiPage from '../../Tools/Taxi/IndivTaxiPage';
import CollectifTaxiPage from '../../Tools/Taxi/collectivTaxiPage';
//Louage
import LouagePage from '../../Tools/Louage/louagePage';
import LouageLandingPage from '../../Tools/Louage/Landing/landingPage';
import LouageProfilePage from '../../Tools/Louage/Profile/profilePage';
//Renting
import RentingPage from '../../Tools/Renting/mainPage';
import RentingLandingPage from '../../Tools/Renting/Landing/landingPage';
import RentingProfilePage from '../../Tools/Renting/Profile/profilePage';
//Agritools
import AgriToolsPage from '../../Tools/AgriTools/mainPage';
import AgriToolsLandingPage from '../../Tools/AgriTools/Landing/landingPage';
import AgriToolsProfilePage from '../../Tools/AgriTools/Profile/profilePage';


/* BLOGS */
//Blog
import BlogPage from '../../Tools/Blog/mainPage';
import BlogLandingPage from '../../Tools/Blog/Landing/landingPage';
import BlogProfilePage from '../../Tools/Blog/Profile/profilePage';
//Art
import ArtPage from '../../Tools/Art/mainPage';
import ArtLandingPage from '../../Tools/Art/Landing/landingPage';
import ArtProfilePage from '../../Tools/Art/Profile/profilePage';
//Products
import ProductsPage from '../../Tools/Products/mainPage';
import ProductsLandingPage from '../../Tools/Products/Landing/landingPage';
import ProductsProfilePage from '../../Tools/Products/Profile/profilePage';
//Sport
import SportPage from '../../Tools/Sport/mainPage';
import SportLandingPage from '../../Tools/Sport/Landing/landingPage';
import SportProfilePage from '../../Tools/Sport/Profile/profilePage';

/* TOOLS */
//Data
import DataPage from '../../Tools/Data/mainPage';
import DataLandingPage from '../../Tools/Data/Landing/landingPage';
import DataProfilePage from '../../Tools/Data/Profile/profilePage';
//News
import NewsPage from '../../Tools/News/mainPage';
import NewsLandingPage from '../../Tools/News/Landing/landingPage';
import NewsProfilePage from '../../Tools/News/Profile/profilePage';

const ToolsRouter = () => (
    <Route path="Tools" exact element={<Outlet  />} >
            <Route path="" exact element={<ToolsLandingPage />} />
            {/* Apps */}
            <Route path="Taxi" exact element={<Outlet />} >
                <Route path="" exact element={<TaxiPage />} />
                <Route path="indiv" exact element={<IndivTaxiPage />} />
                <Route path="collectiv" exact element={<CollectifTaxiPage />} />
            </Route>
            <Route path="Louage" exact element={<Outlet />} >
                <Route path="" exact element={<LouagePage />} />
                <Route path="landing/:tag" exact element={<LouageLandingPage />} />
                <Route path="page/:tag" exact element={<LouageProfilePage />} />
            </Route>
            <Route path="Public" exact element={<Outlet />} >
                <Route path="" exact element={<PublicPage />} />
                <Route path="landing/:tag" exact element={<PublicLandingPage />} />
                <Route path="page/:tag" exact element={<PublicProfilePage />} />
            </Route>
            <Route path="Renting" exact element={<Outlet />} >
                <Route path="" exact element={<RentingPage />} />
                <Route path="result/:genre/:gouv/:deleg" exact element={<RentingLandingPage />} />
                <Route path="profile/:HID" exact element={<RentingProfilePage />} />
            </Route>
            <Route path="AgriTools" exact element={<Outlet />} >
                <Route path="" exact element={<AgriToolsPage />} />
                <Route path="result/:genre/:gouv/:deleg" exact element={<AgriToolsLandingPage />} />
                <Route path="profile/:HID" exact element={<AgriToolsProfilePage />} />
            </Route>

            {/* Blogs */}
            <Route path="Blog" exact element={<Outlet />} >
                <Route path="" exact element={<BlogPage />} />
                <Route path="landing/:tag" exact element={<BlogLandingPage />} />
                <Route path="page/:PAID" exact element={<BlogProfilePage />} />
            </Route>
            <Route path="Products" exact element={<Outlet />} >
                <Route path="" exact element={<ProductsPage />} />
                <Route path="landing/:genre" exact element={<ProductsLandingPage />} />
                <Route path="profile" exact element={<ProductsProfilePage />} />
            </Route>
            <Route path="Art" exact element={<Outlet />} >
                <Route path="" exact element={<ArtPage />} />
                <Route path="landing/:genre" exact element={<ArtLandingPage />} />
                <Route path="profile" exact element={<ArtProfilePage />} />
            </Route>
            <Route path="Sport" exact element={<Outlet />} >
                <Route path="" exact element={<SportPage />} />
                <Route path="landing/:genre" exact element={<SportLandingPage />} />
                <Route path="profile" exact element={<SportProfilePage />} />
            </Route>


            {/* Tolls */}
            <Route path="Data" exact element={<Outlet />} >
                <Route path="" exact element={<DataPage />} />
                <Route path="landing/:tag" exact element={<DataLandingPage />} />
                <Route path="page/:PAID" exact element={<DataProfilePage />} />
            </Route>
            <Route path="News" exact element={<Outlet />} >
                <Route path="" exact element={<NewsPage />} />
                <Route path="landing/:tag" exact element={<NewsLandingPage />} />
                <Route path="page/:PAID" exact element={<NewsProfilePage />} />
            </Route>
        
    </Route>
)

export default ToolsRouter 