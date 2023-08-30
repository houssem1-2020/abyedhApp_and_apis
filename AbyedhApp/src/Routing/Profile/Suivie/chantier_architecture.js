import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { _ } from "gridjs-react";
import { Grid, html,  h  } from "gridjs";
import { Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
import QRCode from "react-qr-code";
import { useEffect } from 'react';

function ChantierArchitectureSpecific() {
    /* ############### Const #################*/
    let {tag, PID} = useParams()
 
    let UID = localStorage.getItem('UID')
    const [rendyVousD, setRdvData] = useState([])
    const [seanceListe, setSeancesListe] = useState([])
    const [ordonanceListe, setOrdonanceListe] = useState([])

    const [seledtedRendyVousD, setSelectedRdvD] = useState({})
    const [seledtedSeanceD, setSelectedSeancesD] = useState({})
    const [seledtedOrdonanceD, setSelectedOrdonanceD] = useState({})

    const [modalS, setModalS] = useState(false)
    const [seledtedItem, setSelectedItem] = useState({})
    const [seledtedItemData, setSelectedItemData] = useState({})
    const [loaderState, setLS] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>طلبات</span> , dir:'rtl' },
          render: () => <TableGrid tableData={rendyVousD}  columns={['فتح','عدد','يوم','يوم']} />,
        },
        {
            menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>أعمال</span> , dir:'rtl' },
            render: () => <TableGrid tableData={seanceListe}  columns={['فتح','عدد','يوم','معرف']} />,
        },
        {
            menuItem: { key: 'oug', icon: 'list alternate outline', content:  <span className='me-2'>فواتير</span> , dir:'rtl' },
            render: () => <TableGrid tableData={ordonanceListe} columns={['فتح','عدد','يوم','معرف']} />,
        },
      ]

    /* ############### UseEffect #################*/
        useEffect(() => {
            axios.post(`${GConf.ApiLink}/suivie/docteur`, {
                tag : tag,
                PID : PID,
                UID : UID,
            }).then(function (response) {
                 
                let rdvContainer = []
                response.data.rdv.map( (getData) => rdvContainer.push([
                    _(<Button className='rounded-pill text-white' icon style={{backgroundColor:GConf.ADIL[tag].themeColor}} size='mini' onClick={ (e) => OpenModalFunction('rdv',getData)}><Icon  name='arrows alternate' /></Button>),
                new Date(getData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                new Date(getData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                getData.State,
                ],))
                setRdvData(rdvContainer)

                let seanceContainer = []
                response.data.seance.map( (getData) => seanceContainer.push([
                _(<Button className='rounded-pill text-white' icon style={{backgroundColor:GConf.ADIL[tag].themeColor}} size='mini' onClick={ (e) => OpenModalFunction('seance',getData)}><Icon  name='arrows alternate' /></Button>),
                getData.S_Time,
                new Date(getData.S_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                getData.S_ID,
                ],))
                setSeancesListe(seanceContainer)

                let ordonanceContainer = []
                response.data.ordonance.map( (getData) => ordonanceContainer.push([
                    _(<Button className='rounded-pill text-white' icon style={{backgroundColor:GConf.ADIL[tag].themeColor}} size='mini' onClick={ (e) => OpenModalFunction('ordonance',getData)}><Icon  name='arrows alternate' /></Button>),
                getData.OR_ID,
                new Date(getData.OR_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                getData.OR_Time,
                ],))
                setOrdonanceListe(ordonanceContainer)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        }, [])
    
    /* ############### Functions #################*/
    const EditRdvFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/suivie/docteur`, {
                rendyVousData : rendyVousD,
            }).then(function (response) {
                let factureListContainer = []
                response.data.map( (getData) => factureListContainer.push([
                getData.T_ID,
                getData.CA_Name,
                getData.CL_Name,
                new Date(getData.T_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                getData.T_Time,
                getData.Final_Value,
                // _( <a  className='data-link-modal'  onClick={() => openEditModal(getData,true)} ><b> <span className='bi bi-arrows-fullscreen'></span> </b></a>),
                _(<Button className='rounded-pill text-white' icon style={{backgroundColor:GConf.ADIL[tag].themeColor}} size='mini' onClick={ (e) => alert(`/S/ft/info/${getData.T_ID}`)}><Icon  name='arrows alternate' /></Button>)
                ],))
                setSeancesListe(factureListContainer)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const GetTheLastRDV = (dateList) =>{
        if (dateList.length === 0) {
            return <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-calendar-week bi-lg'></span></h1>;
          }
        
          let maxDate = new Date(0);
        
          dateList.forEach((obj) => {
            const rdvDate = new Date(obj[1]);
            if (rdvDate > maxDate) {
              maxDate = rdvDate;
            }
          });
          return maxDate.toISOString().split('T')[0];
    }
    const OpenModalFunction = (genre,data) => {
        setSelectedItem(genre)
        setSelectedItemData(data)
        setModalS(true)
    }
    /* ############### Card #################*/
    const NextRendyVous = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end text-secondary'> موعد تسليم العمل </h5> 
                <h1 className='display-3' style={{color:GConf.ADIL[tag].themeColor}}>{GetTheLastRDV(rendyVousD)}</h1>
            </div>
        </>)
    }
    const Statistics = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end text-secondary'> ملخص</h5> 
                <div className='row' dir='rtl'>
                    <div className='col-4 border-start'><h2 style={{color:GConf.ADIL[tag].themeColor}}>{ordonanceListe.length} </h2>  طلبات </div>
                    <div className='col-4 border-start'><h2 style={{color:GConf.ADIL[tag].themeColor}}>{rendyVousD.length} </h2> أعمال</div>
                    <div className='col-4 '><h2 style={{color:GConf.ADIL[tag].themeColor}}>{seanceListe.length} </h2> فواتير</div>
                </div>
            </div>
        </>)
    }
    const RDVViewCard = (props) =>{
        const rdvPannes = [
            {
              menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>عرض</span> , dir:'rtl' },
              render: () => <ShowRDVData />,
            },
            {
                menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>QR</span> , dir:'rtl' },
                render: () => <QRCode fgColor={GConf.ADIL[tag].themeColor} value={props.data.R_ID} size={300} />,
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
                render: () => <QRCode fgColor={GConf.ADIL[tag].themeColor} value={props.data.S_ID} size={300} />,
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
                render: () => <QRCode fgColor={GConf.ADIL[tag].themeColor} value={props.data.OR_ID} size={300} />,
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
    return ( <>
        <div className='row mt-4' >
            <div className='col-12 col-lg-4'> 
                <NextRendyVous  /> 
                <Statistics />
            </div>
            <div className='col-12 col-lg-8'>  
                <Tab menu={{secondary: true ,   dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={panes} />
            </div>
        </div>
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

export default ChantierArchitectureSpecific;