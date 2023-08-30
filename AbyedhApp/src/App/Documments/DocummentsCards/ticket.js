import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const [favoriteList, setFList] = useState({ rdv :{}, ordonance :{}, seance:{}, })
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
            menuItem: { key: 'commerce', icon: 'shopping cart', content:  <span className='me-2'>نقطة بيع </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <> <RendyVousListeCard /> </>,
        },
        {
             menuItem: { key: 'sante', icon: 'heart', content:  <span className='me-2'>صحة   </span> , dir:'rtl',  className:'rounded-pill border-tabs' },
           render: () => <><SeanceListeCard /></>,
        },
    ]

    /* ############### UseEffect #################*/
    useEffect(() => {
            axios.post(`${GConf.ApiProfileLink}/documment/sante`, {
                tag : tag,
                PID : PID,
                UID : UID,
            }).then(function (response) {
                 console.log(response.data)
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
 
    const RDVViewCard = (props) =>{
        const rdvPannes = [
            {
              menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>عرض</span> , dir:'rtl' },
              render: () => <ShowRDVData />,
            },
            {
                menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>QR</span> , dir:'rtl' },
                render: () => <QRCode fgColor={'red'} value={props.data.R_ID} size={300} />,
            },
            {
                menuItem: { key: 'oug', icon: 'list alternate outline', content:  <span className='me-2'>تعديل</span> , dir:'rtl' },
                render: () => <EditRDVCard />,
            },
          ]
        
        const ShowRDVData = () =>{
            return(<>Show</>)
        }
 
        const EditRDVCard = () =>{
            return(<>Show</>)
        }
        return(<>
            <Tab menu={{secondary: true ,   dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={rdvPannes} />
        </>)
    }
    const SeanceViewCard = (props) =>{
        const rdvPannes = [
            {
              menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>عرض</span> , dir:'rtl' },
              render: () => <ShowSeanceData />,
            },
            {
                menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>QR</span> , dir:'rtl' },
                render: () => <QRCode fgColor={'red'} value={props.data.S_ID} size={300} />,
            },

          ]
        
        const ShowSeanceData = () =>{
            return(<>{props.data.S_ID}</>)
        }
 
         return(<>
            <Tab menu={{secondary: true ,   dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={rdvPannes} />
        </>)
    }
    const OrdonanceViewCard = (props) =>{
        const ordonancePannes = [
            {
              menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>عرض</span> , dir:'rtl' },
              render: () => <ShowOrdonanceData />,
            },
            {
                menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>QR</span> , dir:'rtl' },
                render: () => <QRCode fgColor={'red'} value={props.data.OR_ID} size={300} />,
            },

          ]
        
        const ShowOrdonanceData = () =>{
            return(<>{JSON.parse(props.data.OR_Articles).map((data,index) => <span key={index}>{data.Nom}</span>)}</>)
        }
 
         return(<>
            <Tab menu={{secondary: true ,   dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={ordonancePannes} />
        </>)

    }
    const SelectedItemToViewCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'ordonance': return <OrdonanceViewCard data={seledtedItemData} />;  
            case 'seance': return <SeanceViewCard data={seledtedItemData} /> ;
            case 'rdv': return <RDVViewCard data={seledtedItemData} /> ;
            default:  return <StateCard color='secondary' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="p-1">
            {statusCard()}
          </div>
        );
    };

    const SeanceListeCard = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card card-body mb-2 border-div  text-center'>
                        
                        <h6 className='mt-1 small'>{props.data.Name}</h6>

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
                                    favoriteList.seance.map( (data,index) => <div className='col-6 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
                                }
                                
                            </div>
                        }
                    </>
                }
             
        </>)
    } 
    const OrdonanceListeCrad = (props) =>{
        const ProfileCard = (props) =>{
            return(<>
                <div className='card card-body mb-2 border-div  text-center'>
                        <h2 className='text-center mb-0 text-info'  ><span className='bi bi-receipt-cutoff  bi-xsm'></span></h2> 
                        <h6 className='mt-1 small'>{props.data.PID}</h6>
                        <h6 className='mt-1 small'>{new Date(props.data.OR_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</h6>
                        <Button onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='expand arrows alternate' /></Button>
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
                                    favoriteList.ordonance.map( (data,index) => <div className='col-6 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
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
                <div className='card card-body mb-2 border-div  text-center'>
                        <h2 className='text-center mb-0 text-info'  ><span className='bi bi-calendar  bi-xsm'></span></h2> 
                        <h6 className='mt-1 small'>{props.data.PID}</h6>
                        <h6 className='mt-1 small'>{new Date(props.data.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</h6>
                        <Button onClick={ (e) => OpenModalFunction('ordonance',props.data)}> <Icon name='expand arrows alternate' /></Button>
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
                                    favoriteList.rdv.map( (data,index) => <div className='col-6 col-lg-4' key={index}> <ProfileCard key={index} data={data} /></div> )  
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
                <img src='https://cdn.abyedh.tn/images/profile/doc-empty.svg' width='80%'  height='220px' />
                <h5>ليس لديك اي عنصر في المفضلة . قم بإكتشاف محرك البحث في الصفحة الرئسية</h5> 
            </div>
        </>)
    }
    const ActivePaneCard = (props) =>{
        return(<>
            <div className={`card p-2 btn-cursor mb-1  text-center    border-div ${ activeIndex == props.activeI ? 'border-2 border-danger ': '' }`} onClick={ () => setActiveIndex(props.activeI)}>
                    <h2 className='text-center mb-0'  ><span className={`bi bi-${props.icon} bi-xsm`}></span></h2> 
                    <h5 className='mt-2'>{props.text}</h5>
            </div>
        </>)
    }
    return ( <>
            <div className=' d-flex pb-4' dir='rtl' style ={{overflowX : 'auto', overflowY : 'hidden', paddingBottom:'5px'} }>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='وصفة طبية' icon='grid-3x3-gap-fill' activeI={0} /> </div>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='موعد' icon='view-list' activeI={1} /> </div>
                    <div className='col-4 col-lg-3 ms-2'><ActivePaneCard text='حصة' icon='pencil-square' activeI={2} /> </div>                
            </div>

            <Tab 
                    menu={{ secondary: true ,style: {overflowX : 'auto', overflowY : 'hidden', paddingBottom:'5px' } }} 
                    panes={panes} 
                    activeIndex={activeIndex}
                    className='no-menu-tabs mt-2'/>

            <br />
            <Modal
                    size='fullscreen'
                    open={modalS}
                    onClose={() => setModalS(false)}
                    onOpen={() => setModalS(true)}
                    className='fullscreen-profile-modal'
                >
                    <Modal.Content scrolling>
                        <SelectedItemToViewCard status={seledtedItem} />                         
                    </Modal.Content>
                    <Modal.Actions>
                                <Button className='rounded-pill' negative onClick={ () => setModalS(false)}>   غلق</Button>
                    </Modal.Actions>
            </Modal>
    </> );
}

export default SanteDocumment;