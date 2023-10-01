import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
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

const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{       
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    
    const Livraisonoptions = [
        { key: '1', value: 'كراء', text: 'كراء  '  },
        { key: '2', value: 'شراء', text: 'شراء '  },
 
    ]
    const homeptions = [
        { key: '1', value: 'إستديو', text: 'إستديو  '  },
        { key: '2', value: 'فيلا', text: 'فيلا '  },
        { key: '3', value: 'شقة', text: 'شقة '  },
        { key: '4', value: 'دار', text: 'دار '  },
        { key: '5', value: 'مكتب', text: 'مكتب '  },
        { key: '6', value: 'سكن طلبي', text: 'سكن طلبي '  },
        { key: '7', value: 'غير محدد', text: 'غير محدد '  },
 
    ]
    const GetDelegList = (value) =>{
        setGouv(value)
        setCommandeD({...commandeData, Immob_Position : {Gouv: value, Deleg: deleg} })
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
         
    }
    const GetPositionData = (value) =>{
        setDeleg(value) 
        setCommandeD({...commandeData, Immob_Position : {Gouv: gouv, Deleg: value} })
         
    }

    return(<>

            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  كراء أو شراء   </h5>
            <Select options={Livraisonoptions} fluid placeholder=' كراء أو شراء ' className='mb-3' onChange={(e, data) => setCommandeD({...commandeData, Req_Genre: data.value })}  />

            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  نوع العقار  </h5>
            <Select options={homeptions} fluid placeholder=' نوع العقار' className='mb-3' onChange={(e, data) => setCommandeD({...commandeData, Immob_Genre: data.value })}  />


            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  الموقع الجغرافي     </h5>
            <Select fluid placeholder='إختر ولاية' className='mb-2 shadow-sm' options={GConf.abyedhMap.Gouv} value={gouv} onChange={(e, { value }) => GetDelegList(value)} />
            <Select fluid placeholder='إختر منطقة' className='shadow-sm' value={deleg} options={delegList} onChange={(e, { value }) => GetPositionData(value)} />

            <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  عدد الغرف المطلوب</h5>
            <Input icon='pin'   placeholder='  عدد الغرف ' value={commandeData.Room_Num}  onChange={ (e) => setCommandeD({...commandeData, Room_Num: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mt-3 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> السعر الأقصي </h5>
            <Input icon='pin'   placeholder=' السعر الأقصي' value={commandeData.Max_Prix}  onChange={ (e) => setCommandeD({...commandeData, Max_Prix: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            
            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
            <Form className='mb-3'>
                <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
            </Form>

            <div className='col-12'>
                <Button fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
            </div>
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [targetPosition, setTragetPosition] = useState([36.17720,9.12337])
    const [searchForArticle, setSearchForArticle] = useState('')

    const Livraisonoptions = [
        { key: '1', value: 'للكراء', text: 'للكراء '  },
        { key: '2', value: 'للبيع', text: 'للبيع '  },
 
    ]
    const homeptions = [
        { key: '1', value: 'إستديو', text: 'إستديو  '  },
        { key: '2', value: 'فيلا', text: 'فيلا '  },
        { key: '3', value: 'شقة', text: 'شقة '  },
        { key: '4', value: 'دار', text: 'دار '  },
        { key: '5', value: 'مكتب', text: 'مكتب '  },
        { key: '6', value: 'سكن طلبي', text: 'سكن طلبي '  },
        { key: '7', value: 'غير محدد', text: 'غير محدد '  },
 
    ]
    const GetDelegList = (value) =>{
        setGouv(value)
        setRdvData({...rendyVousD, Immob_Position : {Gouv: value, Deleg: deleg, Lat:'', Lng:''} })
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
         
    }
    const GetPositionData = (value) =>{
        setDeleg(value) 
        setRdvData({...rendyVousD, Immob_Position : {Gouv: gouv, Deleg: value, Lat:'', Lng:''} })
         
    }
    const SelectPosition = () => {
        //setModalOpen(false)
        if (!targetPosition) {  toast.error("أدخل   الموقع الجغرافي    !", GConf.TostErrorGonf) } 
        else {
            setRdvData({...rendyVousD, Immob_Position : {Gouv: gouv, Deleg: deleg, Lat: targetPosition[0], Lng:targetPosition[1]} })
            setModalOpen(false)
        }
    }
    const handleLocationSelected = (location) => {
        setTragetPosition([location.lat , location.lng])
        rendyVousD.targetPosition = {Lat: location.lat , Lng : location.lng}
    };

    return(<>

            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  كراء أو شراء   </h5>
            <Select options={Livraisonoptions} fluid placeholder=' كراء أو شراء ' className='mb-3' onChange={(e, data) => setRdvData({...rendyVousD, Req_Genre: data.value })}  />

            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  نوع العقار  </h5>
            <Select options={homeptions} fluid placeholder=' نوع العقار' className='mb-3' onChange={(e, data) => setRdvData({...rendyVousD, Immob_Genre: data.value })}  />


            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  الموقع الجغرافي     </h5>
            <Select fluid placeholder='إختر ولاية' className='mb-2 shadow-sm' options={GConf.abyedhMap.Gouv} value={gouv} onChange={(e, { value }) => GetDelegList(value)} />
            <Select fluid placeholder='إختر منطقة' className='shadow-sm' value={deleg} options={delegList} onChange={(e, { value }) => GetPositionData(value)} />
            <div className='card p-2 shadow-sm rounded mt-2'  onClick={() => setModalOpen(true)}>
                {rendyVousD.Immob_Position.Lat != '' ? <div className='text-center'><div></div><small>{rendyVousD.Immob_Position.Lat}, {rendyVousD.Immob_Position.Lng}</small></div> : <div className='text-center'><Icon name='map marker alternate' /></div>}
            </div>


            <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  عدد الغرف المطلوب</h5>
            <Input icon='pin'   placeholder='  عدد الغرف ' value={rendyVousD.Room_Num}  onChange={ (e) => setRdvData({...rendyVousD, Room_Num: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mt-3 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> السعر   </h5>
            <Input icon='pin'   placeholder=' السعر  ' value={rendyVousD.Max_Prix}  onChange={ (e) => setRdvData({...rendyVousD, Max_Prix: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            
            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
            <Form className='mb-3'>
                <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
            </Form>

            <div className='col-12'>
                <Button fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn}   onClick={RendyVousFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
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
                    <Button  fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn}   onClick={() => SelectPosition()}><Icon name='save' className='ms-2' /> تأكيد  </Button>
                    </div>
            </Modal.Content>
            </Modal>

    </>)
}

function SmasarSpecific(props) {
    /* ############### Const #################*/
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const [commandeData, setCommandeD] = useState({Immob_Position:{Gouv: gouv, Deleg: deleg}})
    const [rendyVousD, setRdvData] = useState({Immob_Position:{Gouv: gouv, Deleg: deleg, Lat:'', Lng:''}})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const [delegList ,setDelegList] = useState([])
    
    const [modalOpen, setModalOpen] = useState(false)
    const panes = [
        {
          menuItem: { key: 'save', icon: 'checkmark box', content:  <span className='me-2'> باحث عن عقار </span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState}  /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'> مالك لعقار</span> , dir:'rtl' },
            render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'><RendyVousCard rendyVousD={rendyVousD} setRdvData={setRdvData} RendyVousFunc={RendyVousFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
    ]

    

    /* ############### UseEffect #################*/
    useEffect(() => {
            // axios.post(`${GConf.ApiLink}/camions`, {PID :props.PID})
            // .then(function (response) {
            //     //let ClientLN = []
            //     //response.data.map( (dta) => {ClientLN.push({value : dta.Cam_ID, text : <>{dta.Cam_Name} : {dta.Matricule} - {dta.Chauffeur}</>, key: dta.PK})})
            //     //setCamionList(ClientLN)
            // })
    }, [])

    /* ############### Functions #################*/
    const SaveCMDFunc = () =>{
        if (!commandeData.Req_Genre ) {toast.error("أدخل  نوع الطلب   !", GConf.TostErrorGonf)}
        else if (!commandeData.Immob_Genre  ) {toast.error("أدخل  نوع العقار المطلوب   !", GConf.TostErrorGonf)}
        else if (!commandeData.Immob_Position.Gouv  ) {toast.error("أدخل  ولاية العقار   !", GConf.TostErrorGonf)}
        else if (!commandeData.Immob_Position.Deleg  ) {toast.error("أدخل  عمادة العقار   !", GConf.TostErrorGonf)}
        else if (!commandeData.Room_Num  ) {toast.error("أدخل  عدد الغرف   !", GConf.TostErrorGonf)}
        else if (!commandeData.Max_Prix  ) {toast.error("أدخل  السعر الأقصي   !", GConf.TostErrorGonf)}
        else{
 
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/courtier-request`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                commandeD : commandeData,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const RendyVousFunc = () =>{
        if (!rendyVousD.Req_Genre ) {toast.error("أدخل  نوع الطلب   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Immob_Genre  ) {toast.error("أدخل  نوع العقار المطلوب   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Immob_Position.Gouv  ) {toast.error("أدخل  ولاية العقار   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Immob_Position.Deleg  ) {toast.error("أدخل  عمادة العقار   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Immob_Position.Lat  ) {toast.error("أدخل  الموقع الجغرافي للعقار   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Immob_Position.Lng  ) {toast.error("أدخل  الموقع الجغرافي للعقار   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Room_Num  ) {toast.error("أدخل  عدد الغرف   !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Max_Prix  ) {toast.error("أدخل  السعر الأقصي   !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            
            axios.post(`${GConf.ApiLink}/Action/courtier-torent`, {
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
    
 

    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0'>
        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={panes} />
        
    </div>
        
    </> );
}

export default SmasarSpecific;