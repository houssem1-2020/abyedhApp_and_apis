import React from 'react';
import PBSD from '../../publicBaseData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Icon, Select , Tab} from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';
import { toast } from 'react-toastify';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';
import axios from 'axios';

function TGMData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '', depart:'' , Arrivee:'hiver'})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])
    const [stationMapListe, setStationMapListe] = useState([])
    const [arriverListeHidden, setArriveListeHidden] = useState(false)
    const [loading, SetLoading] = useState(true)
    const [horaireListe, setHoraireListe] = useState([])
    const metroOption = [
        { key: '1', value: 'hiver', text: 'شتاء'  },
        { key: '2', value: 'ete', text: 'صيف'},
        { key: '3', value: 'rmd', text: 'رمضان'},
    ]
    const sessonOptoin = [
        { key: '1', value: 'allee', text: 'ذهاب'  },
        { key: '2', value: 'retour', text: 'إياب'},
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
        {
            menuItem: { key: 'station', icon: 'map pin', content:  <span className='me-2'> محطات </span> , dir:'rtl' },
            render: () => <StationCard />,
        },
    ]

    /*##################[UseEffect]################### */
    useEffect(() => {
        GetStationMapListe('tgm')
        axios.post(`${GConf.ApiToolsLink}/tgm`, {
            saison: targetTrip.Arrivee ,
          })
          .then(function (response) {
                console.log(response.data)
                console.log(JSON.parse(response.data[0].Horaire))
 
                const combinedArray = JSON.parse(response.data[0].Horaire).map(obj => ({ ...obj, direction: response.data[0].Direction }))
                .concat(JSON.parse(response.data[1].Horaire).map(obj => ({ ...obj, direction: response.data[1].Direction })));
                combinedArray.sort((a, b) => a.TM.localeCompare(b.TM));
                setHoraireListe(combinedArray)
                  
                SetLoading(false)
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
              SetLoading(false)
            }
          });
     }, [targetTrip])

    /*#################[Function]#################### */
    const GetStationMapListe = (targetLigne) =>{
        let filtredListe = PBSD.stationMteroMap.filter((data) => data.ligne === targetLigne)
        setStationMapListe(filtredListe)
    }
    const SetSelctedItem = (value) =>{
        setTargetTripData({...targetTrip, Genre: value })
        
         let items = PBSD.staionMteroTGM.filter((data) => data.ligne === value)
         let StationContainer = []
         items.map( (getData) => StationContainer.push({ key: getData.id, value: getData.Num_station , text: getData.station },))
         setDepartListe(StationContainer)
    }
    const SearchFunction = () =>{
        console.log('hhh')
    }
    const FilterDirectionFunc = (value) =>{
       let filteredHoraire = horaireListe.filter((data) => data.direction === value)
       setHoraireListe(filteredHoraire)
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
                                {
                                    stationMapListe.map( (data,index) =>  <Marker key={index} position={[data.Latitude, data.Longitude]} icon={L.icon(GConf.LeafleftIconP)}> <Popup> {data.station} <br /> {data.Num_station} </Popup> </Marker> )
                                }
                        </MapContainer>
                </div>  
        </>)
    }
    const TimmingCard = () =>{
        return(<>
        <div className='card card-body border-div shadow-sm mb-4' style={{maxHeight :'600px', overflowX: 'auto'}}>
            <div className="table-responsive" >
                <table className="table table-striped" dir="rtl">
                    <thead className='sticky-header-table p-1 mt-0'>
                        <tr>
                            <td> TM</td>
                            <td> GOU</td>
                            <td> KRA</td>
                            <td> CP</td>
                            <td> MAR</td>
                            <td> Dir </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            horaireListe.map((data,index) => 
                            <tr key={index}>
                                <td> {data.TM}</td>
                                <td> {data.GOU}</td>
                                <td> {data.KRA}</td>
                                <td> {data.CP}</td>
                                <td> {data.MAR}</td>
                                <td><b>{data.direction == 'allee' ? <span className='bi bi-arrow-left-short text-success'></span> : <span className='bi bi-arrow-right-short text-danger'></span>}</b></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        </>)
    }
    const StationCard = () =>{
        const StationItemCard = (props) =>{
            return(<>
                <div className='card rounded-pill p-1 mb-1 text-end pe-4'>
                    <b>{props.data.station}</b>  
                </div>
            </>)
        }
        return(<>
            {
                stationMapListe.map( (data,index) =>  <StationItemCard key={index} data={data} /> )
            }
        </>)
    }
    return ( <>
        <div className="row p-1">
            <div className="col-12 col-lg-3 ">
                <div className='card card-body border-div shadow-sm mb-4'>
                    <h6 className='mb-1 text-end'>   الموسم <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={metroOption} onChange={(e, { value }) => setTargetTripData({...targetTrip, Genre: value })} />
 
                    <h6 className='mb-1 text-end'>    نوع الرحلة   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={sessonOptoin} onChange={(e, { value }) => FilterDirectionFunc(value)} />

                    

                    <div className='text-center mt-4'>
                        <Button fluid onClick={ (e) => SearchFunction()} className='rounded-pill' icon> <Icon name='search' /> بحث </Button>    
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-9   ">
                    
                        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} panes={panes} className='yes-menu-tabs' />
            </div>
        </div>
    </> );
}

export default TGMData;