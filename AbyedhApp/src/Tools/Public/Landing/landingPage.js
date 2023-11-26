import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';
import { Button, Placeholder } from 'semantic-ui-react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';

import TrainData from './Genres/train'; 
import BusData from './Genres/bus';
import TGMData from './Genres/tgm';
import MetroData from './Genres/metro'; 


function BlogLandingPage() {
    /* ###########################[const]############################ */
    let {tag} = useParams()
    let [loading, SetLoading] = useState(true)
    let [blogListe, setBlogListe] = useState([])
    let [subCategListe, setSubCategListe] = useState([])
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    L.Icon.Default.mergeOptions(GConf.LeafleftIcon);

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        GetPositionNow();
    }, [])

    /* ###########################[Function]############################# */
        const GetPositionNow = () =>{
            //get position 
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    if (!position.coords.latitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lat</h5></div></>, GConf.TostInternetGonf)}
                    else if (!position.coords.longitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lng</h5></div></>, GConf.TostInternetGonf)}
                    else{
                        setMyPosition([position.coords.latitude, position.coords.longitude])
                    }
                },
                function(error) {
                    // toast.error(<><div><h5>ENTRE VOTRE POSITION</h5></div></>, GConf.TostInternetGonf)
                }
            );
        }
    /* ###########################[Card]############################# */
    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <nav className="p-2 fixed-top navshad" style={{backgroundColor: 'white'}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
                                <img  className="border-div-s d-none d-lg-inline border bg-danger" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                <div  className="d-lg-none d-inline-block text-secondary p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                        </div>
                    </div>
                </nav>
            </>)
    }

    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'metro': return <MetroData TAG={tag} PID={45858588555} UID={555555222} />;  
            case 'tgm': return <TGMData TAG={tag} PID={45858588555} UID={555555222} /> ;
            case 'bus': return <BusData TAG={tag} PID={45858588555} UID={555555222} /> ;
            case 'train': return <TrainData TAG={tag} PID={45858588555} UID={555555222} /> ;
             
            default:  return <StateCard color='secondary' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className=" ">
            {statusCard()}
          </div>
        );
    };

    return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                 <StateCard status={tag} />
            </div>
            
    </> );
}

export default BlogLandingPage;