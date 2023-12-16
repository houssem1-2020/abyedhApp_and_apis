import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { _ } from "gridjs-react";
import { Modal, Placeholder, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
import QRCode from "react-qr-code";
import { useEffect } from 'react';
 

function SanteDocumment() {
    /* ############### Const #################*/
    const {tag, PID} = useParams()
    const UID = localStorage.getItem('UID')
    const [favoriteList, setFList] = useState({ rdv :{}, ordonance :{}, seance:{}, analyses:{}})
    const [loading, SetLoading] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)
    const [modalS, setModalS] = useState(false)
    const [seledtedItem, setSelectedItem] = useState({})
    const [seledtedItemData, setSelectedItemData] = useState({})
    const [loaderState, setLS] = useState(false)
    
    const panes = [
        {
           menuItem: { key: 'admin', icon: 'building', content:  <span className='me-2'>إدارة  </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><OrdonanceListeCrad /></>,
        },
        {
            menuItem: { key: 'autres', icon: 'shopping cart', content:  <span className='me-2'>نقطة بيع </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <> <RendyVousListeCard /> </>,
        },
        {
             menuItem: { key: 'seanes', icon: 'heart', content:  <span className='me-2'>صحة   </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><SeanceListeCard /></>,
        },
        {
            menuItem: { key: 'analyses', icon: 'heart', content:  <span className='me-2'>صحة   </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <><AnalyseListeCard /></>,
       },
    ]

    /* ############### UseEffect #################*/
    useEffect(() => {
            axios.post(`${GConf.ApiProfileLink}/documment/sante`, {
                tag : tag,
                PID : PID,
                UID : UID,
            }).then(function (response) {
                 setFList(response.data)
                 SetLoading(false)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
    }, [])
    
    /* ############### Functions #################*/
    const OpenModalFunction = (genre,data) => {
        setSelectedItem(genre)
        setSelectedItemData(data)
        setModalS(true)
    }
 
    /* ############### Card #################*/
    const ActivePaneCard = (props) =>{
        return(<>
            <div className={`card p-2 btn-cursor mb-1  text-center    border-div ${ activeIndex == props.activeI ? 'border-2 border-danger ': '' }`} onClick={ () => setActiveIndex(props.activeI)}>
                    <h2 className='text-center mb-0'  ><img src={`https://cdn.abyedh.tn/images/Profile/documments/sante/${props.icon}`} width='40px'  height='40px' /></h2> 
                    <h5 className='mt-2'>{props.text}</h5>
            </div>
        </>)
    }

    const OrdonanceListeCrad = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card p-2 mb-2 border-div  text-center'>
                <NavLink exact='true' to={`/S/P/docteur/${props.data.PID}`} className='stretched-link'> </NavLink>
                    <div className='row' dir='ltr'>
                        <div className='col-2 align-self-center'><span className='bi bi-receipt-cutoff text-secondary bi-md'></span></div>
                        <div className='col-7 align-self-center text-start text-secondary'><div><b>{props.data.Name}</b></div><small>{new Date(props.data.OR_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                        <div className='col-3 align-self-center text-center'><Button icon className='rounded-circle' onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='arrow right' /></Button></div>
                    </div>                     
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
                            favoriteList.ordonance.length == 0 ?
                            <EmptyCard />
                            :
                            <div className='row'>
                                {
                                    favoriteList.ordonance.map( (data,index) => <div className='col-12 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
                                }
                                
                            </div>
                        }
                    </>
                }
             
        </>)
    }
    const SeanceListeCard = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card p-2 mb-2 border-div  text-center'>
                <NavLink exact='true' to={`/S/P/docteur/${props.data.PID}`} className='stretched-link'> </NavLink>
                    <div className='row' dir='ltr'>
                        <div className='col-2 align-self-center'><span className='bi bi-stopwatch text-secondary bi-md'></span></div>
                        <div className='col-7 align-self-center text-start text-secondary'><div><b>{props.data.Name}</b></div><small>{new Date(props.data.S_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                        <div className='col-3 align-self-center text-center'><Button icon className='rounded-circle' onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='arrow right' /></Button></div>
                    </div>                     
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
                            favoriteList.seance.length == 0 ?
                            <EmptyCard />
                            :
                            <div className='row'>
                                {
                                    favoriteList.seance.map( (data,index) => <div className='col-12 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
                                }
                                
                            </div>
                        }
                    </>
                }
             
        </>)
    } 
    const RendyVousListeCard = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card p-2 mb-2 border-div  text-center'>
                <NavLink exact='true' to={`/S/P/docteur/${props.data.PID}`} className='stretched-link'> </NavLink>
                    <div className='row' dir='ltr'>
                        <div className='col-2 align-self-center'><span className='bi bi-calendar-date text-secondary bi-md'></span></div>
                        <div className='col-7 align-self-center text-start text-secondary'><div><b>{props.data.Name}</b></div><small>{new Date(props.data.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                        <div className='col-3 align-self-center text-center'><Button icon className='rounded-circle' onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='arrow right' /></Button></div>
                    </div>                     
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
                            favoriteList.rdv.length == 0 ?
                            <EmptyCard />
                            :
                            <div className='row'>
                                {
                                    favoriteList.rdv.map( (data,index) => <div className='col-12 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
                                }
                                
                            </div>
                        }
                    </>
                }
             
        </>)
    }
    const AnalyseListeCard = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card p-2 mb-2 border-div  text-center'>
                <NavLink exact='true' to={`/S/P/docteur/${props.data.PID}`} className='stretched-link'> </NavLink>
                    <div className='row' dir='ltr'>
                        <div className='col-2 align-self-center'><span className='bi bi-stopwatch text-secondary bi-md'></span></div>
                        <div className='col-7 align-self-center text-start text-secondary'><div><b>{props.data.Name}</b></div><small>{new Date(props.data.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                        <div className='col-3 align-self-center text-center'><Button icon className='rounded-circle' onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='arrow right' /></Button></div>
                    </div>                     
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
                            favoriteList.analyses.length == 0 ?
                            <EmptyCard />
                            :
                            <div className='row'>
                                {
                                    favoriteList.seance.map( (data,index) => <div className='col-12 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
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
            <Placeholder className='mb-0 border-div ' style={{ height: 100, width: '100%' }}>
                <Placeholder.Image />
            </Placeholder>
            </>)
        }
        return(<>
                <div className='row'>
                    <PlaceHolderCard />
                    <PlaceHolderCard />
                    <PlaceHolderCard />
                </div>
        </>)
    }
    const EmptyCard = () =>{
        return(<>
            <div className='card-body text-center'>
                <img src='https://cdn.abyedh.tn/images/profile/doc-empty.svg' width='80%'  height='220px' />
                <h5>ليس لديك اي عنصر في المفضلة . قم بإكتشاف محرك البحث في الصفحة الرئسية</h5> 
            </div>
        </>)
    }
    
    return ( <>
            <div className=' d-flex pb-4' dir='rtl' style ={{overflowX : 'auto', overflowY : 'hidden', paddingBottom:'5px'} }>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='تذاكر ' icon='ordonnace.png' activeI={0} /> </div>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='حجوزات' icon='rendyVous.png' activeI={1} /> </div>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='فواتير' icon='seance.png' activeI={2} /> </div>                
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='حصص' icon='analyse.png' activeI={3} /> </div>                
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='مواعيد' icon='analyse.png' activeI={4} /> </div>                
            </div>

            <Tab 
                    menu={{ secondary: true ,style: {overflowX : 'auto', overflowY : 'hidden', paddingBottom:'5px' } }} 
                    panes={panes} 
                    activeIndex={activeIndex}
                    className='no-menu-tabs mt-2'/>

            <br />
             
    </> );
}

export default SanteDocumment;