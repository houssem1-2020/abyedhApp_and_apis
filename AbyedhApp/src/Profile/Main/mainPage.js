import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Icon, Placeholder } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import NotifGenres from './notifGenres';
function MainPage() {
    
   /* ###########################[const]############################ */
   let userData = JSON.parse(localStorage.getItem("UID"));
   let [loading, SetLoading] = useState(true)
   let [feedData, setFeedData] = useState([])

   /*#########################[UseEffect]###########################*/
   useEffect(() => {
       window.scrollTo(0, 0);
       axios.post(`${GConf.ApiProfileLink}/main`, {
           UID : userData,
         })
         .then(function (response) {
               setFeedData(response.data)
               SetLoading(false)
         }).catch((error) => {
           if(error.request) {
             toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
             SetLoading(false)
             setFeedData([])
           }
         });

   }, [])

   /* ###########################[Function]############################# */

   /* ###########################[Card]############################# */
    const NotificationCard = (props) =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                {
                                   props.data.PID == 0 ?
                                   <img  className="border-div-s bg-danger border border-danger ms-3" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                   :
                                   <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.P_Genre}.gif`} alt="..."  width='50px' height='50px'/>
                                }

                                
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {
                                   props.data.PID == 0 ?
                                   <h4 className='mb-0 text-secondary'>Abyedh.Tn</h4>
                                   :
                                   <h4 className='mb-0 text-secondary'><NavLink exact='true' to={`/S/P/${props.data.P_Genre}/${props.data.PID}`}>{props.data.PidData.Name}</NavLink></h4>
                                }
                                
                                <div><small>{props.data.Notif_Time} | {new Date(props.data.Notif_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span>
                    </div>
                </div>
                
                <div className='card-body row ' >
                    <div className='col-12 align-self-center text-end'>
                            {NotifGenres[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)}
                    </div> 
                </div>
                <div className=' ' style={{zIndex: 1, left:10, bottom: 10, position: 'absolute'}} >
                    <NavLink to={`/Profile/L/ma/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div>
            </div>
        </>)
    }
    const SekeltonCard = () =>{
        const PlaceHolderCard = () =>{
            return(<>
            <Placeholder className='mb-0 border-div' style={{ height: 120, width: '100%' }}>
                <Placeholder.Image />
            </Placeholder>
            </>)
        }
        return(<>
            <PlaceHolderCard />
            <PlaceHolderCard />
            <PlaceHolderCard />
        </>)
    }
    const EmptyCard = () =>{
        return(<>
            <div className='card-body text-center'>
                <img src='https://cdn.abyedh.tn/images/profile/suivie-empty.png' width='80%'  height='290px' />
                <h5>لا توجد نتائج . قم بإكتشاف محرك البحث في الصفحة الرئسية</h5> 
            </div>
        </>)
    }
    return (  <>
        {
            loading ? 
            <SekeltonCard /> 
            :
            <>
                {
                    feedData.length == 0 ?
                    <EmptyCard />
                    :
                    <>
                       { feedData.map((data,i) => <NotificationCard key={i} data={data} />)}
                    </>
                }
            </>
        }
 
    </>);
}


export default MainPage;