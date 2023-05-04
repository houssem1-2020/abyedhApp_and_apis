import React from 'react'
import { BrowserRouter as Router, Routes,Route, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import ToolsLandingPage from '../../Tools/toolsLandingPage'

//Blog
import BlogPage from '../../Tools/Blog/mainPage';
import BlogLandingPage from '../../Tools/Blog/Landing/landingPage';
import BlogProfilePage from '../../Tools/Blog/Profile/profilePage';

//Art
import ArtPage from '../../Tools/Art/mainPage';
//import ArtLandingPage from '../../Tools/Art/Landing/landingPage';
//import ArtProfilePage from '../../Tools/Art/Profile/profilePage';

//Products
import ProductsPage from '../../Tools/Products/mainPage';
//import ProductsLandingPage from '../../Tools/Products/Landing/landingPage';
//import ProductsProfilePage from '../../Tools/Products/Profile/profilePage';

//Sport
//import SportPage from '../../Tools/Sport/mainPage';
//import SportLandingPage from '../../Tools/Sport/Landing/landingPage';
//import SportProfilePage from '../../Tools/Sport/Profile/profilePage';

//Public Transport
import PublicPage from '../../Tools/Public/publicPage';

//Taxi
import TaxiPage from '../../Tools/Taxi/taxiPage';



const ToolsRouter = () => (
    <Route path="Tools" exact element={<Outlet  />} >
            <Route path="" exact element={<ToolsLandingPage />} />
            <Route path="Blog" exact element={<Outlet />} >
                <Route path="" exact element={<BlogPage />} />
                <Route path="landing/:genre" exact element={<BlogLandingPage />} />
                <Route path="profile" exact element={<BlogProfilePage />} />
            </Route>
            <Route path="Public" exact element={<PublicPage />} />
            <Route path="Art" exact element={<Outlet />} >
                <Route path="" exact element={<ArtPage />} />
                <Route path="landing/:genre" exact element={<BlogLandingPage />} />
                <Route path="profile" exact element={<BlogProfilePage />} />
            </Route>
            <Route path="Products" exact element={<Outlet />} >
                <Route path="" exact element={<ProductsPage />} />
                <Route path="landing/:genre" exact element={<BlogLandingPage />} />
                <Route path="profile" exact element={<BlogProfilePage />} />
            </Route>
            <Route path="Sport" exact element={<Outlet />} >
                <Route path="" exact element={<BlogPage />} />
                <Route path="landing/:genre" exact element={<BlogLandingPage />} />
                <Route path="profile" exact element={<BlogProfilePage />} />
            </Route>

            <Route path="Taxi" exact element={<TaxiPage />} />
    </Route>
)

export default ToolsRouter 