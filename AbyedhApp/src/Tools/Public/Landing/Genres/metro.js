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

function MetroData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '1', depart:'' , Arrivee:'ete', Saison:'ete'})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])

    const [stationMapListe, setStationMapListe] = useState([])
    const [horaireListe, setHoraireListe] = useState([])
    const [headerTable, setHeadrTable] = useState(['TM','PB','MALI','BA'])
    const [sorterItem, setSorterItem] = useState('PB')
    const [arriverListeHidden, setArriveListeHidden] = useState(false)

    const [loading, SetLoading] = useState(true)
    const metroOption = [
        { key: '1', value: '1', text: 'الخط 1'  },
        { key: '2', value: '2', text: 'الخط 2'},
        { key: '3', value: '3', text: 'الخط 3'},
        { key: '4', value: '4', text: 'الخط 4'},
        { key: '5', value: '5', text: 'الخط 5'},
        { key: '6', value: '6', text: 'الخط 6'},
    ]
    const metroTableOption = [
        { key: '1', value: '1', table: ['TM','PB','MALI','BA'] , sortBy : 'PB'  },
        { key: '2', value: '2', table: ['TM','PB','10dec','ARN'] , sortBy : 'ARN'},
        { key: '3', value: '3', table: ['TM','PB','PR','BS','IK'] , sortBy : 'PR'},
        { key: '4', value: '4', table: ['TM','PB','RP','BS','DD'] , sortBy : 'PR'},
        { key: '5', value: '5', table: ['TM','PB','RP','BS','JAS'] , sortBy : 'PR'},
        { key: '6', value: '6', table: ['TM','PB','MALI','MJ2','MJ4'] , sortBy : 'PB'},
    ]
    const sessonOptoin = [
        { key: '1', value: 'hiver', text: 'شتاء'  },
        { key: '2', value: 'ete', text: 'صيف'},
        { key: '3', value: 'rmd', text: 'رمضان'},
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
        GetStationMapListe(targetTrip.Genre)
        axios.post(`${GConf.ApiToolsLink}/metro`, {
            ligne: targetTrip.Genre ,
            saison: targetTrip.Arrivee ,
          })
          .then(function (response) {
                // console.log(response.data)
                console.log(JSON.parse(response.data[0].Horaire))
 
                const combinedArray = JSON.parse(response.data[0].Horaire).map(obj => ({ ...obj, direction: response.data[0].Direction }))
                .concat(JSON.parse(response.data[1].Horaire).map(obj => ({ ...obj, direction: response.data[1].Direction })));
                combinedArray.sort((a, b) => a[sorterItem].localeCompare(b[sorterItem]));
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
    const SetSelctedItem = (value) =>{
         setTargetTripData({...targetTrip, Genre: value })
         let items = PBSD.staionMteroTGM.filter((data) => data.ligne === value)
         let StationContainer = []
         items.map( (getData) => StationContainer.push({ key: getData.id, value: getData.Num_station , text: getData.station },))
         setDepartListe(StationContainer)
         GetStationMapListe(value)
         let tableHeader = metroTableOption.find((data) => data.value === value)
         setHeadrTable(tableHeader.table)
         setSorterItem(tableHeader.sortBy)
    }
    const SearchFunction = () =>{
        console.log('hhh')
    }
    const GetStationMapListe = (targetLigne) =>{
        let filtredListe = PBSD.stationMteroMap.filter((data) => data.ligne === targetLigne)
        setStationMapListe(filtredListe)
         
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
                        <thead  className='sticky-header-table p-1 mt-0'>
                            <tr>
                                {
                                    headerTable.map((data,index) => <td key={index}> {data}</td>)
                                }
                                <td>DIR</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                horaireListe.map((data,index) => 
                                <tr key={index}>
                                    {
                                        headerTable.map((tableNam,index) => <td key={index}> {data[tableNam]}</td>)
                                    }

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
                    <h6 className='mb-1 text-end'>  الخط   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={metroOption} onChange={(e, { value }) => SetSelctedItem(value)} />
                    
                    <h6 className='mb-1 text-end'>    المحطة   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={departListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Depart: value })} />
                    
                    <div className={arriverListeHidden ? 'd-none' : ''}>
                        <h6 className='mb-1 text-end'>    الموسم  <span className='bi bi-person-x-fill'></span> </h6>
                        <Select className='mb-3' fluid options={sessonOptoin} onChange={(e, { value }) => setTargetTripData({...targetTrip, Arrivee : value })} />
                    </div>
                    

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

export default MetroData;