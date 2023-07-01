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

function TrainData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '', depart:'' , Arrivee:''})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])
    const [arriverListeHidden, setArriveListeHidden] = useState(false)

    const [stationMapListe, setStationMapListe] = useState([])
    const [horaireListe, setHoraireListe] = useState([])
    const [headerTable, setHeadrTable] = useState(['TM','PB','MALI','BA'])

    const metroOption = [
        { key: '1', value: '1', text: 'ضواحي الساحل'  },
        { key: '2', value: '2', text: 'ضواحي تونس'},
        { key: '3', value: '3', text: 'الخطوط البعيدة'},
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
        console.log('test')
     }, [])
    /*#################[Function]#################### */
    const SetSelctedItem = (value) =>{
        setTargetTripData({...targetTrip, Genre: value })
        
         let items = PBSD.LigneTrain.filter((data) => data.agency_id === parseInt(value))
         let StationContainer = []
         items.map( (getData) => StationContainer.push({ key: getData.route_id, value: getData.route_id , text: getData.route_long_name },))
         setDepartListe(StationContainer)
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
                                {
                                    PBSD.trainStations.map( (data,index) =>  <Marker key={index} position={[JSON.parse(data.stop_lat), JSON.parse(data.stop_lon)]} icon={L.icon(GConf.LeafleftIconP)}> <Popup> {data.stop_name} <br /> {data.stop_name} </Popup> </Marker> )
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
                    <h6 className='mb-1 text-end'>   الإقليم <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={metroOption} onChange={(e, { value }) => SetSelctedItem(value)} />
                    
                    <h6 className='mb-1 text-end'>    الخط   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-3' fluid options={departListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Depart: value })} />
                    
                    <div className={arriverListeHidden ? 'd-none' : ''}>
                        <h6 className='mb-1 text-end'>    نوع الرحلة  <span className='bi bi-person-x-fill'></span> </h6>
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

export default TrainData;