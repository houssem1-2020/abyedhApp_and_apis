import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Icon, Placeholder } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'

function FavoritePage() {
    /* ########################[Const]########################## */
    let UID = JSON.parse(localStorage.getItem("UID"));
    let [favoriteList, setFList] = useState([])
    let [loading, SetLoading] = useState(true)
    const panes = [
        {
           menuItem: { key: 'admin', icon: 'building', content:  <span className='me-2'>إدارة  </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><FavoriteList categ='Admin' /></>,
        },
        {
            menuItem: { key: 'commerce', icon: 'shopping cart', content:  <span className='me-2'>نقطة بيع </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <> <FavoriteList categ='PTVente' /> </>,
        },
        {
             menuItem: { key: 'sante', icon: 'heart', content:  <span className='me-2'>صحة   </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><FavoriteList categ='Sante' /></>,
        },
        {
             menuItem: { key: 'education', icon: 'book', content:  <span className='me-2'>تعليم</span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <> <FavoriteList categ='Education' /> </>,
        },
        {
            menuItem: { key: 'trasnport', icon: 'truck', content:  <span className='me-2'>نقل و سيارة   </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
            render: () => <><FavoriteList categ='Transpo' /></>,
        },
        
       {
           menuItem: { key: 'life', icon: 'leaf', content:  <span className='me-2'>  حياة و ترفيه </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><FavoriteList categ='Life' /></>,
       },
       {
            menuItem: { key: 'sport', icon: 'bicycle', content:  <span className='me-2'>رياضة و ثقافة </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
            render: () => <><FavoriteList categ='Sport' /> </>,
        },
        {
            menuItem: { key: 'finance', icon: 'bitcoin', content:  <span className='me-2'>مالية و اعمال </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
            render: () => <><FavoriteList categ='Finance' /> </>,
        },
        {
            menuItem: { key: 'build', icon: 'factory', content:  <span className='me-2'>خدمات عقارية  </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
            render: () => <><FavoriteList categ='Construct' /></>,
        },
        {
            menuItem: { key: 'other', icon: 'wizard', content:  <span className='me-2'> خدمات اخري </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
            render: () => <><FavoriteList categ='Other' /></>,
        },
          
    ]
    
    /* ########################[UseEffect]###################### */
    useEffect(() => {
        axios.post(`${GConf.ApiProfileLink}/favorite`, {
            UID:UID
          })
          .then(function (response) {
            setFList(response.data)
            SetLoading(false)
          })
      }, [])

    /* ########################[Functions]###################### */
    /* ########################[Card]########################### */
    const FavoriteList = (props) =>{
        let result = favoriteList.filter(table => table.Category == props.categ)
        const ProfileCard = (props) =>{
            return(<>
                <div className='mb-3 text-center'>
                    <NavLink exact='trur' to={`/S/P/${props.data.Genre}/${props.data.PID}`}>
                        <div className='mb-0'><img src={`https://cdn.abyedh.tn/Images/Search/Icons/${props.data.Genre}.gif`} className='img-responsive rounded-circle mb-0'  width='60px' height='60px' /></div>
                        <h6 className='mt-1 small'>{props.data.Name}</h6>
                    </NavLink>
                </div>
            </>)
        }

        return(<>
                {
                    loading ? 
                    <SekeltonCard /> 
                    :
                    <>
                        {
                            result.length == 0 ?
                            <EmptyCard />
                            :
                            <div className='row'>
                                {
                                    result.map( (data,index) => <div className='col-6 col-lg-2'> <ProfileCard key={index} data={data} /></div> )  
                                }
                                
                            </div>
                        }
                    </>
                }
             
        </>)
    }
    const SekeltonCard = () =>{
        const PlaceHolderCard = () =>{
            return(<>
            <Placeholder className='mb-0 rounded-circle' style={{ height: 70, width: 70 }}>
                <Placeholder.Image />
            </Placeholder>
            </>)
        }
        return(<>
            <div className='row'>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
                    <div className='col-3 col-lg-2 mb-3'><PlaceHolderCard /></div>
            </div>
        </>)
    }

    const EmptyCard = () =>{
        return(<>
            <div className='card-body text-center'>
                <img src='https://cdn.abyedh.tn/images/profile/empty-fvrt.png' width='80%'  height='220px' />
                <h5>ليس لديك اي عنصر في المفضلة . قم بإكتشاف محرك البحث في الصفحة الرئسية</h5> 
            </div>
        </>)
    }
    return (  <>
            <Tab menu={{ secondary: true , style: {overflowX : 'auto', overflowY : 'hidden', paddingBottom:'5px' } }} panes={panes} />
            <br />
 
    </>);
}


export default FavoritePage;