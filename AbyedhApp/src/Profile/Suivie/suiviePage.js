import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Icon, Placeholder } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';
import SuivieRequestData from './suivieRequestData'

function SuiviePage() {
    /* ###########################[const]############################ */
   let userData = JSON.parse(localStorage.getItem("UID"));
   let [loading, SetLoading] = useState(true)
   let [suivieData, setSuivieData] = useState([])

   /*#########################[UseEffect]###########################*/
   useEffect(() => {
       window.scrollTo(0, 0);
       axios.post(`${GConf.ApiProfileLink}/suivie`, {
           UID : userData,
         })
         .then(function (response) {
               setSuivieData(response.data)
               console.log(response.data)
               SetLoading(false)
         }).catch((error) => {
           if(error.request) {
             toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
             SetLoading(false)
             setSuivieData([])
           }
         });

   }, [])

   /* ###########################[Function]############################# */

   /* ###########################[Card]############################# */
    const SuivieCard = (props) =>{
        const CircularPourcentage = (props) =>{
            return(<>
                <div style={{ width: 100, height: 100 ,marginRight: props.small ? 100 : 0}} >
                    <CircularProgressbar strokeWidth={2}  maxValue={100} minValue={0} value={props.value} text={`${props.value}%`}  styles={ {background:{ fill: 'red'}}} /> 
                </div>
                <div className='text-start'>
                    <Button size='mini' className='rounded-pill' icon> <Icon name='info' /> </Button>
                </div>
            </>)
        }
        const ActionBtns = () =>{
            return(<>
                <div className='p-1 mt-2 mb-0 m-0 '>
                    <Button size='mini'  className='rounded-pill mb-2 '  icon> <Icon name='trash' /> حــذف </Button>
                    <Button size='mini'  className='rounded-pill mb-2' icon> <Icon name='edit' /> تعديــل </Button>
                </div>
            </>)
        }
        const SmallActionBtns = () =>{
            return(<>
                <div className='p-1  mb-0 m-0 mt-5'>
                    <Button size='mini' fluid className='rounded-pill w-action-btn mb-2 '  icon> <Icon name='trash' /> حــذف </Button>
                    <Button size='mini' fluid  className='rounded-pill w-action-btn mb-2' icon> <Icon name='edit' /> تعديــل </Button>
                </div>
            </>)
        }
        const RendredData = () =>{
            return(<>
                <div className='text-end pe-3' style={{height:'190px', overflowX:'auto', overflowX:'hidden'}} dir='ltr'>
                    <div dir='rtl'>
                        <div className='text-end mb-3'><b> <span className='bi bi-bookmarks-fill text-danger'></span> التفاصيل : </b></div> 
                        {SuivieRequestData[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)}
                    </div>
                </div>
            </>)
        }
        return(<>
            <div className='card p-2 pb-0 shadow-sm mb-3 border-div'>
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img src={`https://cdn.abyedh.tn/images/Search/Icons/${props.data.P_Genre}.gif`} alt="..."  width='50px' height='50px'/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h4 className='mb-0 text-secondary'><NavLink exact='true' to={`/S/P/${props.data.P_Genre}/${props.data.PID}`}>{props.data.PidData.Name}</NavLink></h4>
                        <div><small>{new Date(props.data.Notif_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {SuivieRequestData[props.data.Notif_Name].title} </small></div>
                    </div>
                </div>

                <div className='card-body pb-0 d-none d-lg-block'>
                    <div className='row'>
                        <div className='col-8'> <RendredData /> </div>
                        <div className='col-4 align-self-center'> <CircularPourcentage value={SuivieRequestData[props.data.Notif_Name].stepsValues[props.data.State].value} /> </div>
                        <div className='col-12 text-end pt-2 navshad-top'><ActionBtns /></div>
                    </div>
                </div>
                <div className='card-body d-lg-none pb-0'>
                    <Swiper
                        spaceBetween={1}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper pb-0 text-center"
                    >
                                <SwiperSlide key={1}> <CircularPourcentage value={SuivieRequestData[props.data.Notif_Name].stepsValues[props.data.State].value} small /></SwiperSlide>
                                <SwiperSlide key={2}> <RendredData /> </SwiperSlide>
                                {/* <SwiperSlide key={3}> <SmallActionBtns  /> </SwiperSlide> */}
                        
                    </Swiper>
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
                    suivieData.length == 0 ?
                    <EmptyCard />
                    :
                    <>
                       { suivieData.map((data,i) => <SuivieCard  key={i} data={data} />)}
                    </>
                }
            </>
        }
    </>);
}


export default SuiviePage;