import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import {  Dimmer, Tab } from 'semantic-ui-react'
import { Button, Icon, Input, Modal, Form, TextArea,  Loader, Select } from 'semantic-ui-react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const MapEventsHandler = ({ onLocationSelected }) => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        onLocationSelected({ lat, lng });
      },
    });
  
    return null;
};

const CommandeCard = ({commandeData, setCommandeD, myPosition, loaderState, disabledSaveBtn, SaveCommande, targetPosition, handleLocationSelected}) =>{
    const optionBagage = [
        {key : 2 , value : 'لا', text :'لا'},
        {key : 1 , value : 'نعم', text :'نعم'},
        
    ]
    const handleLocationSelectedFrom = (location) => {
        setCommandeD({...commandeData, targetPositionFrom: {Lat: location.lat , Lng : location.lng} })
    };
    const handleLocationSelectedTo = (location) => {
        setCommandeD({...commandeData, targetPositionTo: {Lat: location.lat , Lng : location.lng} })
    };
    return(<>
            <h5 className='text-end'>إختر   مكان الإنطلاق </h5>
            <MapContainer center={[commandeData.targetPositionFrom.Lat, commandeData.targetPositionFrom.Lng]} zoom={15} scrollWheelZoom={false} style={{height:50}} className="map-height-taxi cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelectedFrom} />
                <Marker position={[commandeData.targetPositionFrom.Lat, commandeData.targetPositionFrom.Lng]}> <Popup> </Popup> </Marker>
            </MapContainer>

            <h5 className='text-end'>إختر   مكان الوصول </h5>
            <MapContainer center={[commandeData.targetPositionTo.Lat, commandeData.targetPositionTo.Lng]} zoom={15} scrollWheelZoom={false} style={{height:50}} className="map-height-taxi cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelectedTo} />
                <Marker position={[commandeData.targetPositionTo.Lat, commandeData.targetPositionTo.Lng]}> <Popup> </Popup> </Marker>
            </MapContainer>

            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Select placeholder='إختر ولاية' fluid className='mb-2' options={optionBagage} value={commandeData.Bagage} onChange={(e, data) => setCommandeD({...commandeData, Bagage: data.value })} />
             
            <div className=' mt-4' dir='ltr'>
                <Button  className='rounded-pill text-white    '  style={{backgroundColor: GConf.Tools.taxi.themeColor}} disabled={disabledSaveBtn} fluid onClick={() => SaveCommande()}>  <Icon name='save' className='ms-4  ' /> تسجيل  </Button>
            </div>
            <Dimmer active={loaderState} inverted className='border-div'>
                <Loader inverted> </Loader>
            </Dimmer>

    </>)
}

const ReservationCard = ({reservationD, setReservationD, myPosition , loaderState, disabledSaveBtn, SaveReservation, targetPosition, handleLocationSelected}) =>{
    const optionBagage = [
        {key : 2 , value : 'لا', text :'لا'},
        {key : 1 , value : 'نعم', text :'نعم'},
    ]
    const handleLocationSelectedFrom = (location) => {
        setReservationD({...reservationD, targetPositionFrom: {Lat: location.lat , Lng : location.lng} })
    };
    const handleLocationSelectedTo = (location) => {
        setReservationD({...reservationD, targetPositionTo: {Lat: location.lat , Lng : location.lng} })
    };
    
    return(<>
            <h5 className='text-end'> عدد الأشخاص</h5>
            <Input icon='user' type='number' size="small" iconPosition='left' placeholder='عدد الأشخاص'  fluid className='mb-3' value={reservationD.Nombre} onChange={(e) => setReservationD({...reservationD, Nombre: e.target.value })}/>
            
            <h5 className='text-end'>حدد وقت الحجز</h5>
            <div className='row'>
                <div className='col-6'><Input icon='calendar alternate' type='time' size="small" iconPosition='left'   fluid className='mb-3' value={reservationD.RDV_Time} onChange={(e) => setReservationD({...reservationD, RDV_Time: e.target.value })}/></div>
                <div className='col-6'><Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-3' value={reservationD.RDV_Date} onChange={(e) => setReservationD({...reservationD, RDV_Date: e.target.value })}/></div>
            </div>
            

            <h5 className='text-end'>إختر   مكان الإنطلاق </h5>
            <MapContainer center={[reservationD.targetPositionFrom.Lat, reservationD.targetPositionFrom.Lng]} zoom={15} scrollWheelZoom={false} style={{height:50}} className="map-height-taxi cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelectedFrom} />
                <Marker position={[reservationD.targetPositionFrom.Lat, reservationD.targetPositionFrom.Lng]}> <Popup> </Popup> </Marker>
            </MapContainer>

            <h5 className='text-end'>إختر   مكان الوصول </h5>
            <MapContainer center={[reservationD.targetPositionTo.Lat, reservationD.targetPositionTo.Lng]} zoom={15} scrollWheelZoom={false} style={{height:50}} className="map-height-taxi cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelectedTo} />
                <Marker position={[reservationD.targetPositionTo.Lat, reservationD.targetPositionTo.Lng]}> <Popup> </Popup> </Marker>
            </MapContainer>

            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Select placeholder='إختر ولاية' fluid className='mb-2' options={optionBagage} value={reservationD.Bagage} onChange={(e, data) => setReservationD({...reservationD, Bagage: data.value })} />
             
            <div className=' mt-4' dir='ltr'>
                <Button  className='rounded-pill text-white    '  style={{backgroundColor: GConf.Tools.taxi.themeColor}} disabled={disabledSaveBtn} fluid onClick={() => SaveReservation()}>  <Icon name='save' className='ms-4  ' /> تسجيل   </Button>
            </div>
            <Dimmer active={loaderState} inverted className='border-div'>
                <Loader inverted> </Loader>
            </Dimmer>
    </>)
}

function CollectivTaxiPage() {
    /* ###########################[const]############################ */
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [targetPosition, setTragetPosition] = useState([36.17720,9.12337])
    const [taxiPosition, setTaxiPosition] = useState([])
    const [modalS, setModalS] = useState(false)
    const [modalInfoS, setModalInfoS] = useState(false)
    const [commandeData, setCommandeD] = useState({bagage:'', targetPositionFrom: {Lat: 36.17720 , Lng : 9.12337}, targetPositionTo: {Lat: 36.17720 , Lng : 9.12337}})
    const [reservationD, setReservationD] = useState({RDV_Date: new Date().toISOString().split('T')[0] , RDV_Time: new Date().toLocaleTimeString('fr-FR') ,  targetPositionFrom: {Lat: 36.17720 , Lng : 9.12337}, targetPositionTo: {Lat: 36.17720 , Lng : 9.12337} })
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    L.Icon.Default.mergeOptions(GConf.LeafleftIcon);
    const panes = [
        {
          menuItem: { key: 'save', icon: 'edit outline', content:  <span className='me-2'>طلب</span> , dir:'rtl'},
          render: () => <CommandeCard handleLocationSelected={handleLocationSelected} commandeData={commandeData} setCommandeD={setCommandeD} SaveCommande={SaveCommande} disabledSaveBtn={disabledSaveBtn}   loaderState={loaderState} myPosition={myPosition} targetPosition={targetPosition} />,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar', content:  <span className='me-2'>حجز</span> , dir:'rtl' },
            render: () => <ReservationCard handleLocationSelected={handleLocationSelected} reservationD={reservationD}  setReservationD={setReservationD} SaveReservation={SaveReservation} disabledSaveBtn={disabledSaveBtn}  loaderState={loaderState} myPosition={myPosition} targetPosition={targetPosition} />,
        },
    ]

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        GetPositionNow();
        axios.post(`${GConf.ApiToolsLink}/taxi/search`, {
            position : 'GetPositionNow()'
        })
        .then(function (response) {
            setTaxiPosition(response.data)

        })

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
                    commandeData.myPosition = {Lat: position.coords.latitude , Lng : position.coords.longitude}
                }
            },
            function(error) {
                // toast.error(<><div><h5>ENTRE VOTRE POSITION</h5></div></>, GConf.TostInternetGonf)
            }
        );
    }
    const SaveCommande = () =>{
        if (!commandeData.Bagage) {toast.error("أدخل  هل لديك أمتعة أم لا    !", GConf.TostErrorGonf)}
        else if (!commandeData.targetPositionFrom) {toast.error("أدخل  منطقة الأنطلاق !", GConf.TostErrorGonf)}
        else if (!commandeData.targetPositionTo) {toast.error("أدخل منطقة الوصول !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/taxi-request`, {
                UID : GConf.UserData.UData.UID,
                TAG : 'taxi' ,
                commandeD : commandeData,
            }).then(function (response) {
                //toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  //toast.error(<><div><h5>مشكل في الإتصال</h5>  </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const SaveReservation = () =>{
        if (!reservationD.Nombre) {toast.error("أدخل صاحب الحجز !", GConf.TostErrorGonf)}
        else if (!reservationD.RDV_Date) {toast.error("ادخل موعد الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.RDV_Time) {toast.error("ادخل زمن الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.Bagage) {toast.error("ادخل رقم الطاولة  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/taxi-rdv`, {
                UID : GConf.UserData.UData.UID,
                TAG : 'taxi' ,
                reservationData : reservationD,
            }).then(function (response) {
                //toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setDisabledBtn(true)
                setLS(false)
            }).catch((error) => {
                if(error.request) {
                  //toast.error(<><div><h5>مشكل في الإتصال</h5></div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const handleLocationSelected = (location) => {
        setTragetPosition([location.lat , location.lng])
        commandeData.targetPosition = {Lat: location.lat , Lng : location.lng}
    };

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
                <nav className="p-2 fixed-top navshad" style={{backgroundColor: GConf.Tools.taxi.themeColor}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools/Taxi' className="m-0 p-0 ms-3">
                                <img  className="border-div d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                                <div  className="d-lg-none d-inline-block text-white p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                        </div>
                    </div>
                </nav>
            </>)
    }
    const NotLoggedInCard = () =>{
        return(<>
            <div className='text-end' dir='rtl'>
                أنت لست مسجل . قم بالتسجيل من هنا 
                <br />
                <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3  "> تَسْجِيلْ الدٌخٌولْ</NavLink> 
            </div>  
        </>)
    }
 
    const MapCard = ()=>{
 
        return(<>
                <div className="sticky-top" style={{top:'70px'}}> 
                        <MapContainer center={myPosition} zoom={12} scrollWheelZoom={false} style={{height: '100vh' }} className='border-0 mt-2' >
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                
                                />
                                <Marker position={myPosition} >
                                    <Popup> مكاني </Popup>
                                </Marker>
                                {
                                    taxiPosition.map( (data,index) =>  <Marker key={index} position={[data.Lat, data.Lng]} icon={L.icon(GConf.LeafleftIconP)}> <Popup> {data.Voiture_Marque} <br /> {data.Voiture_Matricule} </Popup> </Marker> )
                                }
                        </MapContainer>
                </div>  
        </>)
    }
    return ( <>
        <TopNavBar />
        <br />
        <br />
        <MapCard />
        <div className="floating-card" style={{zIndex: 10000}} onClick={ () => setModalS(true)}>
            <i className="bi bi-diagram-2-fill"></i>
        </div>
        <div className="floating-card-2" style={{zIndex: 10000}} onClick={ () => setModalInfoS(true)}>
            <i className="bi bi-search"></i>
        </div>
        <Modal
                size='small'
                open={modalS}
                dimmer= 'blurring'
 
                onClose={() => setModalS(false)}
                onOpen={() => setModalS(true)}
            >
                <Modal.Header><h4 className='text-end'> طلب تاكسي </h4></Modal.Header>
                <Modal.Content scrolling>
                    {GConf.UserData.Logged ? 
                            <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} panes={panes} className='yes-menu-tabs' />  
                    : 
                            <NotLoggedInCard /> 
                    }
                    
                </Modal.Content>
                <Modal.Actions>
                        <Button className='rounded-pill' negative onClick={ () => setModalS(false)}> <span className='bi bi-x' ></span> غلق </Button>
                </Modal.Actions>
        </Modal>
        <Modal
                size='small'
                open={modalInfoS}
                dimmer= 'blurring'
 
                onClose={() => setModalInfoS(false)}
                onOpen={() => setModalInfoS(true)}
            >
                <Modal.Header><h5 className='text-end card-body'>  التاكسي الجماعي في تونس </h5></Modal.Header>
                <Modal.Content scrolling>
                    Info Modal 
                </Modal.Content>
                <Modal.Actions>
                     
                </Modal.Actions>
        </Modal>

    </> );
}

export default CollectivTaxiPage;

