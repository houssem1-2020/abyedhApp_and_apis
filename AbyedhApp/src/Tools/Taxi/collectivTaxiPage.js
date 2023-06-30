import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Tab } from 'semantic-ui-react'
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
        {key : 1 , value : 'true', text :'نعم'},
        {key : 2 , value : 'false', text :'لا'}
    ]
    return(<>
            <h5 className='text-end'>إختر المكان الذي تود الذهاب إليه </h5>
            <MapContainer center={myPosition} zoom={15} scrollWheelZoom={false} className="map-height cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelected} />
                <Marker position={targetPosition}>
                    <Popup>
                        
                    </Popup>
                </Marker>
            </MapContainer>

            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Select placeholder='إختر ولاية' fluid className='mb-2' options={optionBagage} value={commandeData.bagage} onChange={(e, data) => setCommandeD({...commandeData, bagage: data.value })} />

            <div className=' mt-4' dir='ltr'>
                <Button  className='rounded-pill text-white    '  style={{backgroundColor: GConf.Tools.taxi.themeColor}} disabled={disabledSaveBtn} fluid onClick={() => SaveCommande()}>  <Icon name='save' className='ms-4  ' /> تسجيل  <Loader inverted active={loaderState} inline  size='tiny' className='ms-4  ' /></Button>
            </div>


    </>)
}

const ReservationCard = ({reservationD, setReservationD, myPosition , loaderState, disabledSaveBtn, SaveReservation, targetPosition, handleLocationSelected}) =>{
    const optionBagage = [
        {key : 1 , value : 'true', text :'نعم'},
        {key : 2 , value : 'false', text :'لا'}
    ]
    return(<>
            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Input icon='circle'  size="small" iconPosition='left'   fluid className='mb-3' value={reservationD.Table_Num} onChange={(e) => setReservationD({...reservationD, Table_Num: e.target.value })}/>
            
            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-3' value={reservationD.Wanted_Date} onChange={(e) => setReservationD({...reservationD, Wanted_Date: e.target.value })}/>

            <h5 className='text-end'>إختر المكان الذي تود الذهاب إليه </h5>
            <MapContainer center={myPosition} zoom={15} scrollWheelZoom={false} className="map-height cursor-map-crosshair border-div">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler onLocationSelected={handleLocationSelected} />
                <Marker position={targetPosition}>
                    <Popup>
                        
                    </Popup>
                </Marker>
            </MapContainer>

            <h5 className='text-end'>هل لديك أمتعة ؟ </h5>
            <Select placeholder='إختر ولاية' fluid className='mb-2' options={optionBagage} value={reservationD.bagage} onChange={(e, data) => setReservationD({...reservationD, bagage: data.value })} />

            <div className=' mt-4' dir='ltr'>
                <Button  className='rounded-pill text-white    '  style={{backgroundColor: GConf.Tools.taxi.themeColor}} disabled={disabledSaveBtn} fluid onClick={() => SaveReservation()}>  <Icon name='save' className='ms-4  ' /> تسجيل  <Loader inverted active={loaderState} inline  size='tiny' className='ms-4  ' /></Button>
            </div>
    </>)
}

function CollectivTaxiPage() {
    /* ###########################[const]############################ */
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [targetPosition, setTragetPosition] = useState([36.17720,9.12337])
    const [taxiPosition, setTaxiPosition] = useState([])
    const [modalS, setModalS] = useState(false)
    const [commandeData, setCommandeD] = useState({Wanted_Date: new Date().toISOString().split('T')[0] , bagage:''})
    const [reservationD, setReservationD] = useState([])
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
        if (!commandeData.bagage) {toast.error("أدخل رقم الطاولة !", GConf.TostErrorGonf)}
        else if (!commandeData.targetPosition) {toast.error("أدخل اليوم المطلوب !", GConf.TostErrorGonf)}
        else if (!commandeData.myPosition) {toast.error("أدخل اليوم المطلوب !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            // axios.post(`${GConf.ApiLink}/Action/restaurant-commande`, {
            //     // UID : props.UID,
            //     // PID : props.PID ,
            //     // TAG : props.TAG ,
            //     commandeD : commandeData,
            // }).then(function (response) {
            //     toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
            //     setLS(false)
            //     setDisabledBtn(true)
            // }).catch((error) => {
            //     if(error.request) {
            //       toast.error(<><div><h5>مشكل في الإتصال</h5>  </div></>, GConf.TostInternetGonf)   
            //       setLS(false)
            //     }
            // });
        } 
    }
    const SaveReservation = () =>{
        if (!reservationD.User_Name) {toast.error("أدخل صاحب الحجز !", GConf.TostErrorGonf)}
        else if (!reservationD.Wanted_Date) {toast.error("ادخل موعد الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.Wanted_Time) {toast.error("ادخل زمن الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.Table_Num) {toast.error("ادخل رقم الطاولة  !", GConf.TostErrorGonf)}
        else if (!reservationD.Comment) {toast.error("ادخل تعليق  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/restaurant-reservation`, {
                // UID : props.UID,
                // PID : props.PID ,
                // TAG : props.TAG ,
                reservationData : reservationD,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>مشكل في الإتصال</h5></div></>, GConf.TostInternetGonf)   
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

    </> );
}

export default CollectivTaxiPage;

