import React from 'react';
import PBSD from '../../publicBaseData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Icon, Select, Tab } from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';
import { toast } from 'react-toastify';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';

function TrainData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '', depart:'' , Arrivee:''})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])
    const [arriverListeHidden, setArriveListeHidden] = useState(false)
    const busOption = [
        { key: '1', value: 'grandTunis', text: 'تونس الكبري'  },
        { key: '2', value: 'interGouv', text: 'بين الولايات'},
        { key: '3', value: 'SociteRegionale', text: 'شركات جهوية'},
    ]
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    L.Icon.Default.mergeOptions(GConf.LeafleftIcon);
    const panes = [
        {
          menuItem: { key: 'save', icon: 'time', content:  <span className='me-2'>  الأوقات  </span> , dir:'rtl'},
          render: () => <TimmingCard  />,
        },
        {
            menuItem: { key: 'edit', icon: 'map', content:  <span className='me-2'>مسار الرحلة</span> , dir:'rtl' },
            render: () => <MapCard />,
        },
    ]
    /*##################[UseEffect]################### */
    useEffect(() => {
        GetPositionNow();
     }, [])
    /*#################[Function]#################### */
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
    const SetSelctedItem = (value) =>{
        setTargetTripData({...targetTrip, Genre: value })
        
        switch (value) {
            case 'grandTunis':
                setDepartListe(PBSD.stationBusAutre)
                setArriveListe([])
                setArriveListeHidden(false)
                break;
            case 'SociteRegionale':
                setDepartListe(PBSD.busCompany)
                setArriveListe([])
                setArriveListeHidden(true)
                break;
            case 'interGouv':
                setDepartListe(GConf.abyedhMap.Gouv)
                setArriveListe(GConf.abyedhMap.Gouv)
                setArriveListeHidden(false)
                break;
            default:
                break;
        }
    }
    const SetDepartSelect = (value) =>{
        if (targetTrip.Genre == 'grandTunis') { 
            let items = PBSD.stationBusGrandTunis.filter((data) => data.station === value)
            let StationContainer = []
            items.map( (getData) => StationContainer.push({ key: getData.id, value: getData.ligne , text: <>{getData.ligne}: {getData.arrivee}: {getData.passage}</> },))
            setArriveListe(StationContainer)
        } 
        else {
            setTargetTripData({...targetTrip, Depart: value })
        }
    }
    const SearchFunction = () =>{
        console.log('hhh')
    }
    const GetLouage = () =>{
        console.log('hhh')
    }
    /*####################[Crad]###################### */
    const MapCard = ()=>{
 
        return(<>
                <div className="sticky-top" style={{top:'70px'}}> 
                        <MapContainer center={myPosition} zoom={7} scrollWheelZoom={false} style={{height:'350px'}} className='border-div' >
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                
                                />
                                <Marker position={myPosition}>
                                    <Popup> مكاني </Popup>
                                </Marker>

                        </MapContainer>
                </div>  
        </>)
    }
    const TimmingCard = () =>{
        return(<>
        Timming
        </>)
    }

    return ( <>
        <div className="row p-1">
            <div className="col-12 col-lg-3 ">
                <div className='card card-body border-div shadow-sm mb-4'>
                    <h6 className='mb-1 text-end'>    نوع الحافلة  <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={busOption} onChange={(e, { value }) => SetSelctedItem(value)} />
                    
                    <h6 className='mb-1 text-end'>    الأنطلاق   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={departListe} onChange={(e, { value }) => SetDepartSelect(value)} />
                    
                    <div className={arriverListeHidden ? 'd-none' : ''}>
                        <h6 className='mb-1 text-end'>    الوصول  <span className='bi bi-person-x-fill'></span> </h6>
                        <Select className='mb-3' fluid options={arriverListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Arrivee : value })} />
                    </div>
                    

                    <div className='text-center mt-4'>
                        <Button fluid onClick={ (e) => SearchFunction()} className='rounded-pill' icon> <Icon name='search' /> بحث </Button>    
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-9   ">
                    <div className='card card-body border-div shadow-sm mb-4' style={{maxHeight :'600px', overflowX: 'auto'}}>
                        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} panes={panes} className='yes-menu-tabs' />
                    </div>
            </div>
        </div>

    </> );
}

export default TrainData;