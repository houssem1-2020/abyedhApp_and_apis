import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Dimmer, Icon, Loader, Placeholder } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import NotifGenres from './notifGenres';
import ToolsNotifGenres from './toolsNotifGenres';
function MainPage() {
    
   /* ###########################[const]############################ */
   let userData = JSON.parse(localStorage.getItem("UID"));
   let [loading, setLoading] = useState(true)
   let [feedData, setFeedData] = useState([])
   let [feedAllData, setFeedAllData] = useState([])
   let [loadMoreSpinner, setLoadMoreSpinner] = useState(false)
   let [lastFeedOrder, setLastFeedOrder] = useState(7)
   let [reachTheEnd, setReachTheEnd] = useState(false)

   /*#########################[UseEffect]###########################*/
   useEffect(() => {
       //window.scrollTo(0, 0);
        axios.post(`${GConf.ApiProfileLink}/main`, {
           UID : userData,
        })
        .then(function (response) {
                console.log(response.data)
               let notification  = response.data.feeds.map(item => ({ ...item, NotifGenreTarget: 'notification' , dateAndTime: new Date(`${item.Notif_Date.split('T')[0]}T${item.Notif_Time}`).getTime() }));
               let publication  = response.data.publication.map(item => ({ ...item, NotifGenreTarget: 'publication' , dateAndTime: new Date(`${item.Pub_Date.split('T')[0]}T${item.Pub_Time}`).getTime() }));
               let tools  = response.data.tools.map(item => ({ ...item, NotifGenreTarget: 'tools' , dateAndTime: new Date(`${item.Notif_Date.split('T')[0]}T${item.Notif_Time}`).getTime()}));
               let toolsNews  = response.data.toolsNews.map(item => ({ ...item, NotifGenreTarget: 'toolsNews' , dateAndTime: new Date(`${item.News_Date.split('T')[0]}T${item.News_Time}`).getTime()}));
               let admin  = response.data.admin.map(item => ({ ...item, NotifGenreTarget: 'admin' , dateAndTime: new Date(`${item.Notif_Date.split('T')[0]}T${item.Notif_Time}`).getTime() }));
               let combinedArray = notification.concat(publication, tools, toolsNews, admin);
               let SortedTable = combinedArray.sort((a, b) => b.dateAndTime - a.dateAndTime);
               console.log(SortedTable)
               setFeedAllData(SortedTable)
               setFeedData(response.data.feeds)
               setLoading(false)
        }).catch((error) => {
           if(error.request) {
             toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
             setLoading(false)
             setFeedData([])
           }
        });
    
   }, [])

   

   /* ###########################[Function]############################# */
   const LoadMoreFunction = () => {
        setLoadMoreSpinner(true)
        axios.post(`${GConf.ApiProfileLink}/main/limitted`, {
            UID : userData,
            lastUpdate : feedData.length,
        })
        .then(function (response) {
            setLoadMoreSpinner(false)
            if (response.data.length != 0) { 
                setFeedData(prevResults => [...prevResults, ...response.data])
                setLastFeedOrder(prevLastFeedOrder => prevLastFeedOrder + 3)
            } else {
                //setLoadMoreSpinner(false)
                setReachTheEnd(true)
            }

        }).catch((error) => {
            if(error.request) {
            toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
            setLoadMoreSpinner(false)
            }
        });
    }

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //     const atBottom = scrollTop + clientHeight >= scrollHeight - 100;  
    //     if (atBottom && !reachTheEnd) { LoadMoreFunction();}

    //     };
    //     // Function to check if scrollbar is at the end of the page
    //     window.addEventListener('scroll', handleScroll);
    //     return () => { window.removeEventListener('scroll', handleScroll); };
    // }, [LoadMoreFunction]);

    
   /* ###########################[Card]############################# */
    const NotificationCard = (props) =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                {/* {
                                   props.data.PID == 0 ?
                                   <img  className="border-div-s bg-danger border border-danger ms-3" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                   : */}
                                   <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.P_Genre}.gif`} alt="..."  width='50px' height='50px'/>
                                {/* } */}

                                
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {
                                   props.data.PID == 0 ?
                                   <h4 className='mb-0 text-secondary'>{props.data.P_Genre}</h4>
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
                    <NavLink to={`/Profile/L/sv/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div>
            </div>
        </>)
    }
    const PublicationCard = (props) =>{
        const isRTL = (text) => {
            const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
            return rtlChars.test(text);
          };

          
        const PublicationGenreCard = ({ status, postData }) => {
            const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
            const statusCard = React.useCallback(() => {
              switch(status) {
                case 'text': return  <TextPostCard data={postData} Name={'Houssem Khelifi'} />;  
                case 'article': return  <ArticlePostCard data={postData} Name={'Houssem Khelifi'} />;  
                case 'image': return  <ImagePostCard data={postData} Name={'Houssem Khelifi'} />;  
                case 'video': return  <VideoPostCard data={postData} Name={'Houssem Khelifi'} />;  
    
                default:  return <>Indefinie Poste</>;    
              }
            }, [status]);
          
            return (
              <div className="container-stoppet">
                {statusCard()}
              </div>
            );
        }
        const TextPostCard = (props) =>{
            return(<>
            <div className='card  border-div mb-4 '>
                <div className='card-body'>
                    <div className=' row' dir='rtl'>
                        <div className='col-10'>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.Owner_Genre}.gif`}   width='50px' height='50px'/>     
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    {/* {props.data.PidData.Name}  */}
                                    <b>{props.Name}</b>
                                    <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2  align-self-center  '>
                            {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                        </div>
                    </div>
                    <p className='mt-3 mb-1' dir={isRTL(props.data.TextData) ? 'rtl' : 'ltr'}>
                        {props.data.TextData}
                    </p>
                </div>
                <div className='p-1'>
                    <Button.Group fluid>
                        <Button className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='like' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='comments' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='share' /></Button>
                    </Button.Group>
                </div>
            </div> 
            </>)
        }
        const ArticlePostCard = (props) =>{
            return(<>
            <div className='card  border-div mb-4 '>
                <div className='card-body'>
                    <div className=' row' dir='rtl'>
                        <div className='col-10'>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.Owner_Genre}.gif`}   width='50px' height='50px'/>     
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    {/* {props.data.PidData.Name}  */}
                                    <b>{props.Name}</b>
                                    <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2  align-self-center  '>
                            {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                        </div>
                    </div>
                    <p className='mt-3 mb-1' dir={isRTL(props.data.ArticleData) ? 'rtl' : 'ltr'}>
                        {props.data.ArticleData}
                    </p>
                </div>
                <div className='p-1'>
                    <Button.Group fluid>
                        <Button className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='like' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='comments' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='share' /></Button>
                    </Button.Group>
                </div>
            </div> 
            </>)
        }
        const ImagePostCard = (props) =>{
            return(<>
            <div className='card border-div mb-4 '> 
                <div className='card-body'>
                    <div className=' row' dir='rtl'>
                        <div className='col-10'>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.Owner_Genre}.gif`}   width='50px' height='50px'/>     
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    {/* {props.data.PidData.Name}  */}
                                    <b>{props.Name}</b>
                                    <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2  align-self-center  '>
                            {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                        </div>
                    </div>
                    <p className='mt-3 mb-1' dir={isRTL(JSON.parse(props.data.ImageData).text) ? 'rtl' : 'ltr'}> {JSON.parse(props.data.ImageData).text} </p>
                </div>
                
                <img src={JSON.parse(props.data.ImageData).url}  />
                <div className='p-1'>
                    <Button.Group fluid>
                        <Button className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='like' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='comments' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='share' /></Button>
                    </Button.Group>
                </div>
            </div> 
            </>)
        }
        const VideoPostCard = (props) =>{
            return(<>
            <div className='card border-div mb-4 '>
                <div className='card-body'>
                    <div className=' row' dir='rtl'>
                        <div className='col-10'>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.Owner_Genre}.gif`}   width='50px' height='50px'/>     
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    {/* {props.data.PidData.Name}  */}
                                    <b>{props.Name}</b>
                                    <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2  align-self-center  '>
                            {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                        </div>
                    </div>
    
                    {/* <div>{new Date(props.data.Pub_Date).toISOString().split('T')[0] } | {props.data.Pub_Time}</div>  */}
                    <p className='mt-3 mb-1' dir={isRTL(JSON.parse(props.data.VideoData).text) ? 'rtl' : 'ltr'}> {JSON.parse(props.data.VideoData).text} </p>
                </div>
                
                <iframe
                    width="100%" height="250"
                    src={`https://www.youtube.com/embed/${JSON.parse(props.data.VideoData).url}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className='p-1'>
                    <Button.Group fluid>
                        <Button className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='like' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='comments' /> </Button>
                        <Button  className='bg-white' style={{color: GConf.ADIL[props.data.Owner_Genre].themeColor}} icon> <Icon name='share' /></Button>
                    </Button.Group>
                </div>
            </div> 
            </>)
        }

        return(<>
        <PublicationGenreCard   status={props.data.Pub_Genre} postData={props.data} />
            {/* <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0"> */}
                                {/* {
                                   props.data.PID == 0 ?
                                   <img  className="border-div-s bg-danger border border-danger ms-3" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                   :
                                   <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.P_Genre}.gif`} alt="..."  width='50px' height='50px'/>
                                } */}

                                
                            {/* </div>
                            <div className="flex-grow-1 ms-3"> */}
                                {/* {
                                   props.data.PID == 0 ?
                                   <h4 className='mb-0 text-secondary'>Abyedh.Tn</h4>
                                   :
                                   <h4 className='mb-0 text-secondary'><NavLink exact='true' to={`/S/P/${props.data.P_Genre}/${props.data.PID}`}>{props.data.PidData.Name}</NavLink></h4>
                                } */}
                                
                                {/* <div><small>{props.data.Pub_Time} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '> */}
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    {/* </div>
                </div>
                
                <div className='card-body row ' >
                    <div className='col-12 align-self-center text-end'> */}
                            
                            {/* {NotifGenres[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)} */}
                    {/* </div> 
                </div> */}
                {/* <div className=' ' style={{zIndex: 1, left:10, bottom: 10, position: 'absolute'}} >
                    <NavLink to={`/Profile/L/sv/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div> */}
            {/* </div> */}
        </>)
    }
    const ToolsCard = (props) =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${props.data.P_Genre}.gif`} alt="..."  width='50px' height='50px'/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h4 className='mb-0 text-secondary'>{props.data.P_Genre}</h4>
                                
                                <div><small>{props.data.Notif_Time} | {new Date(props.data.Notif_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        <span className={`bi ${ToolsNotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span>
                    </div>
                </div>
                
                <div className='card-body row ' >
                    <div className='col-12 align-self-center text-end'>
                            {ToolsNotifGenres[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)}
                    </div> 
                </div>
                {/* <div className=' ' style={{zIndex: 1, left:10, bottom: 10, position: 'absolute'}} >
                    <NavLink to={`/Profile/L/sv/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div> */}
            </div>
        </>)
    }
    
    const ToolsNewsCard = (props) =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                    <img  className="border-div-s bg-danger border border-danger ms-3" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h4 className='mb-0 text-secondary'>أخبار منصة أبيض</h4>
                                <div><small>{props.data.News_Time} | {new Date(props.data.News_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>
                
                <div className='card-body row ' >
                    <div className='col-12 align-self-center text-end'>
                            {props.data.Description}
                            {/* {NotifGenres[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)} */}
                    </div> 
                </div>
                {/* <div className=' ' style={{zIndex: 1, left:10, bottom: 10, position: 'absolute'}} >
                    <NavLink to={`/Profile/L/sv/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div> */}
            </div>
        </>)
    }
    const AdminCard = (props) =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3 border-div ' style={{position: 'relative !important'}} >
                <div className=' row'>
                    <div className='col-10  '>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                    <img  className="border-div-s bg-danger border border-danger ms-3" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h4 className='mb-0 text-secondary'>إدارة منصة أبيض</h4>
                                <div><small>{props.data.Notif_Time} | {new Date(props.data.Notif_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>
                
                <div className='card-body row ' >
                    <div className='col-12 align-self-center text-end'>
                        رسالة من إدارة منصة أبيض 
                            {/* {NotifGenres[props.data.Notif_Name].GenTextFunction(props.data.RequestData,props.data.PidData)} */}
                    </div> 
                </div>
                {/* <div className=' ' style={{zIndex: 1, left:10, bottom: 10, position: 'absolute'}} >
                    <NavLink to={`/Profile/L/sv/${props.data.RequestData.R_ID}`}>
                        <Button className='rounded-circle bg-transparent border p-2' size='small' icon> <Icon name='arrow left' /> </Button>
                    </NavLink>
                </div> */}
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
    const NotifGenreCard = ({ status, postData }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'notification': return  <NotificationCard data={postData} />;  
            case 'publication': return  <PublicationCard data={postData} />;  
            case 'tools': return  <ToolsCard data={postData} />;  
            case 'toolsNews': return  <ToolsNewsCard data={postData} />;  
            case 'admin': return  <AdminCard data={postData} />;  

            default:  return <>Indefinie Poste</>;    
          }
        }, [status]);
      
        return (
          <div>
            {statusCard()}
          </div>
        );
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
                       { feedAllData.map((data,i) => <NotifGenreCard key={i} status={data.NotifGenreTarget} postData={data} />)}
                       {/* { feedData.map((data,i) => <NotificationCard key={i} data={data} />)} */}
                        <div className='text-center p-2'>
                            {loadMoreSpinner  ? <Loader active={!reachTheEnd} inline /> : <Button disabled={reachTheEnd} fluid onClick={() => LoadMoreFunction()} className='rounded-pill' size='tiny'>تحميل</Button>}    
                        </div>
                    </>
                }
            </>
        }
        
        
    </>);
}


export default MainPage;