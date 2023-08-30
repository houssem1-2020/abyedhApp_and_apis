import axios from 'axios';
import React, { useEffect, useState , useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Rating, Table, Comment, Menu,Form, TabPane, Placeholder, TextArea } from 'semantic-ui-react';
import GConf from '../../AssetsM/generalConf';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Tab } from 'semantic-ui-react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

 
function ProfilePage() {
    /*#########################[Const]##################################*/
        let {tag,PID} = useParams()
        let [loading,setLoading] =useState(true)
        let [rateValue,setRateValue] =useState({comment:'', rating:0})
        let [isFavorite,setIsFavorite] =useState(false)
        let [profileData, setProfileData] = useState({photoes:[]})
        let [clientActivated, setClientActivated] = useState(false)
        L.Icon.Default.mergeOptions(GConf.LeafleftIcon);
        let UID = localStorage.getItem('UID')
         
        const [activeIndex, setActiveIndex] = useState(0)
    /* ############### UseEffect #################*/
        useEffect(() => {
        window.scrollTo(0, 0);
         
        }, [])

    /* ############### Functions #################*/
         
    /* ############### Card #################*/
        const TopNavBar = () =>{
            
            const UserCard = () =>{
                return(<>
                    <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                        <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                    </NavLink>
                </>)
            }
            return(<>
                    <nav className="p-2 fixed-top navshad bg-white"  >
                        <div className='row'>
                            <div className='col-6 text-start align-self-center'>
                                <NavLink exact='true' to={`/`} className="m-0 p-0 ms-3">
                                    {/* <img  className="border-div d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} /> */}
                                    <div  className="  d-inline-block t p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                                </NavLink>
                            </div>
                            <div className='col-6 text-end align-self-center'>
                                {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                            </div>
                        </div>
                    </nav>
                </>)
        }
        const ButtomCard = () =>{
            return(<>
                <div className='card-body rounded-bottom-card bg-danger'  >
                    <div className='text-end text-white me-5'>
                        <b>منصة أبيض التونسية </b>
                    </div>
                </div>
            </>)
        }
        const LinkCard = (props) =>{
            return(<>
            <div className={`col-12 col-lg-${props.link.col} mb-2 p-1 `}>
                <NavLink to={`/S/I/add/${props.link.tag}`}>
                <div className={`card border-div shadow-sm p-3 ${props.link.ready ? 'border-ready':''} ${props.link.next ? 'border-next':''}`} >
                    <div className="row">
                        <div className="col-4 align-self-center text-center">
                            <div className="icon-system icon-system-shape shadow" style={{backgroundColor: props.link.color}}>
                                <img src={`https://cdn.abyedh.tn/Images/Search/WIcons/${props.link.img_url}`} className="img-responsive" width="100%" />
                            </div>
                        </div>
                        <div className="col-8 align-self-center">
                            <div className="text-end text-secondary mb-2"><h4><b> {props.link.name} </b></h4></div>
                        </div>
                    </div>
                </div>
                </NavLink>
                </div>
            </>)
        }
        const ContainerLinksCard = (props) =>{
            return(<>
                <div className="text-end text-info mb-3" dir="rtl"><h5><b><span className="fa fa-shopping-cart"></span> {props.data.title} :</b></h5></div>
                <div className="row">
                    <div className={`col-12 col-lg-3 align-self-center ${props.data.genre === 'LI' ? 'order-2': ''}`}>
                        <img src={`https://cdn.abyedh.tn/Images/img_ads/${props.data.adsUrl}`} className="img-responsive d-none d-lg-block" width="80%" />
                    </div>
                    <div className="col-12 col-lg-9 align-self-center">
                        <div className='row' dir='rtl'>
                            {props.data.Links.map( (linksData) => <LinkCard key={linksData.id} link={linksData}  />)}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </>)
        }
    return ( <>
            <TopNavBar /> 
 
            <br /> 
            <div className='container p-4'>
                <br />  
                <br />  
                <br />  
                <br />  
    
                {GConf.ASIL.map( (tabData) => <ContainerLinksCard key={tabData.id} data={tabData}  />)}   
                
            </div>
            <ButtomCard />
        </> );
}

export default ProfilePage;