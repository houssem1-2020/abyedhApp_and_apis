import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';

const MapEventsHandler = ({ onLocationSelected }) => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        onLocationSelected({ lat, lng });
      },
    });
  
    return null;
};

function HandemadeMenuisierSpecific(props) {
    /* ############### Const #################*/
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [targetPosition, setTragetPosition] = useState([36.17720,9.12337])
    const [searchForArticle, setSearchForArticle] = useState('')

    const stayOptions = [
        { key: '1', value: 'باب', text: 'باب  '  },
        { key: '2', value: 'نافذة', text: 'نافذة '  },
        { key: '7', value: 'غير محدد', text: 'غير محدد - ضعه في الملاحضات'  },
    ]
    const planOptions = [
        { key: '1', value: 'نعم', text: 'نعم  '  },
        { key: '2', value: 'لا', text: 'لا '  },
         
    ]

   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/docteur-rdv`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                rendyVousData : rendyVousD,
            }).then(function (response) {
                toast.success(<><div><h5>تم تسجيل الموعد بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5> لم يتم تسجيل الموعد</h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const GetDelegList = (value) =>{
        setGouv(value)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
         
    }
    const SelectPosition = () => {
        setModalOpen(false)
        if (!searchForArticle || searchForArticle == '') {  toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else {
            // axios.post(`${GConf.ApiLink}/Action/pharmacie-shop/medicamment`, {
            //     searchForArticle : searchForArticle,
            // }).then(function (response) {
            //     console.log(response.data)
            //     setRendredMedicammentListe(response.data)
            // }).catch((error) => {
            //     if(error.request) {
            //       toast.error(<><div><h5>   </h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
                  
            //     }
            // });
        }
    }
    const handleLocationSelected = (location) => {
        setTragetPosition([location.lat , location.lng])
        rendyVousD.targetPosition = {Lat: location.lat , Lng : location.lng}
    };

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-3 border-div'>
                    <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> ماذا تريد أن صنعه </h5>
                    <smal>  ماذا تريد أن تصنع بالخشب و مشتقاته </smal>
                    <Select fluid placeholder=' ' options={stayOptions} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                    
                    <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الكمية المطلوبة </h5>
                    <Input icon='pin'   placeholder='الكمية' value={rendyVousD.NameS}  onChange={ (e) => setRdvData({...rendyVousD, NameS: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
                   

                    <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  حدد الأبعاد المطلوبة </h5>
                    <smal> الأبعاد المطلوبة بالصم  </smal>
                    <div className='row'>
                        <div className='col-4'><Input icon='pin'   placeholder='الطول' value={rendyVousD.NameS}  onChange={ (e) => setRdvData({...rendyVousD, NameS: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' /></div>
                        <div className='col-4'><Input icon='pin'   placeholder='العرض' value={rendyVousD.NameS}  onChange={ (e) => setRdvData({...rendyVousD, NameS: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' /></div>
                        <div className='col-4'><Input icon='pin'   placeholder='القطر' value={rendyVousD.NameS}  onChange={ (e) => setRdvData({...rendyVousD, NameS: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' /></div>
                    </div>
                    
                    
                    

                    <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span>  الإنتهاء قبل</h5>
                    <small>حدد أقصي أجل مطلوب</small>  
                    <Input className='mb-3' type='date' fluid alue={rendyVousD.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, date: e.target.value })}  />                     
 

                    <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>
                    <Form className='mb-3'>
                        <TextArea placeholder='إذكر نوعية الخشب المطلوب' className='font-droid'  rows={3} value={rendyVousD.comment} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل طلب  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>

                    <Modal
                        onClose={() => setModalOpen(false)}
                        onOpen={() => setModalOpen(true)}
                        open={modalOpen}
                            
                    >
                        <Modal.Header className='text-end'>
                            <span className='font-droid'> قم بتحديد المكان </span>
                            
                    </Modal.Header>
                    <Modal.Content >
                            <MapContainer  center={myPosition} zoom={15} scrollWheelZoom={false} className="map-height cursor-map-crosshair border-div"  >
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
                            <div className='mb-3 mt-3' >
                            <Button  fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={() => SelectPosition()}><Icon name='save' className='ms-2' /> تأكيد  </Button>
                            </div>
                    </Modal.Content>
                    </Modal>

                </div>      
        </div>      
    </> );
}

export default HandemadeMenuisierSpecific;