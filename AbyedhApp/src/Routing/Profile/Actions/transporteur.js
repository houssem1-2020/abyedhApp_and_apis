import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Select,  Button, Icon, Loader} from 'semantic-ui-react'
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

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData, AddArticleToList}) =>{
    
    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5>عدد المنتجات في السلة : {commandeData.articles ? commandeData.articles.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input icon='pin'   placeholder='إسم المنتج' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'   value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: e.target.value })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
                
        </div>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: ''})
    const PannierPannes = [
        {
          menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  bi-sm me-2 ms-2 ' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl'},
          render: () => <EnterCard articleNow={articleNow} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} commandeData={commandeData} />,
        },
        {
            menuItem: { key: 'article',   content:  <span > <span className='bi bi-2-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl' },
            render: () => <ArticleListCard />,
        },
        // {
        //     menuItem: { key: 'check',   content:  <span >  <span className='bi bi-3-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>  </span> , dir:'rtl' },
        //     render: () => <ConfirmCard />,
        // },
    ]
    const Livraisonoptions = [
        { key: '1', value: 'INTIGO', text: 'INTIGO ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/intigo-1-300x145-1.png', avatar: true } },
        { key: '2', value: 'Yassir', text: 'Yassir ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/yassir.png', avatar: true } },
        { key: '3', value: 'Farm Trust', text: 'Farm Trust ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/farmtrust.png', avatar: true } },
        { key: '4', value: 'Founashop', text: 'Founashop', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/founa-shop.png', avatar: true } },
        { key: '5', value: 'Joy s', text: 'Joy’s', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/28070452_400909117034010_1865031699315847664_o-300x300-1.jpg', avatar: true } },
      ]
    /* Function  */
    const AddArticleToList = () =>{
        if (articleNow.Name == '') { toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else if (articleNow.Qte == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            commandeData.articles.push(articleNow)
            setArticleNow({PK: commandeData.articles.length + 1 , Name:'', Qte: ''})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.articles.findIndex((article) => article.A_Code == value);
        commandeData.articles.splice(searchObject, 1);
        let resteArticles = commandeData.articles;
        setCommandeD({...commandeData, articles: resteArticles})
    }

    /* Card */
    const ArticleListCard = () =>{
        const ListCard = (props) =>{
            return(<>   
                        <div className='card shadow-sm p-2   border-div ps-4 mb-2'>
                            <div className='row'>
                            <div className='col-2 align-self-center pe-3'><b>{props.dataA.Qte} </b>  </div>
                                <div className='col-8 col-lg-9 text-end  align-self-center'>
                                     {props.dataA.Name} 
                                </div>
                                
                                <div className='col-1 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
                            </div>
                        </div>
                    </>)
        }
        return (<>
        <div className='card-body mt-2'>
            {commandeData.articles.length != 0 ? 
             <>{commandeData.articles.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
             :
             <div className='text-center'>
                <span className='bi bi-list-columns-reverse bi-lg'></span>
            </div>
             
            }
        </div>
        </>)
    }
    
    const ConfirmCard = () =>{
        return (<>
        <div className='card-body mt-2'>
            <div className='row mb-2'>
            <small className='text-danger text-end'  dir='rtl'>لا نعلم هل خدمة التوصيل متوفرة أم لا </small>
                <div className='col-12'  dir='ltr'>
                    
                    <Select options={Livraisonoptions} fluid placeholder='شركة التوصيل ' className='mb-3' onChange={(e, data) => setCommandeD({...commandeData, Livraison_Par: data.value })}  />
                </div>
                <div className='col-12'>
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> وقت التوصيل المطلوب</h5>
                    <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-1' value={commandeData.Wanted_Day} onChange={(e) => setCommandeD({...commandeData, Wanted_Day: e.target.value })}/>
                    <Input className='mb-3' type='time' fluid value={commandeData.Wanted_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Wanted_Time: e.target.value })}  />
                </div>
                <div className='col-12'>
                    <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn} fluid onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                </div>
            </div>
        </div>
        </>)
    }
        
    return(<>
        <Tab menu={{secondary: true, color: 'grey' , widths: PannierPannes.length , pointing: true, selected: { backgroundColor: GConf.ADIL[tag].themeColor },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={PannierPannes} /> 
    </>)
}


function TransporteurSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , De:{Gouv:'', Deleg:'', Lat:'', Lng:''}, Vers:{Gouv:'', Deleg:'', Lat:'', Lng:''}, articles:[]})
 
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'Demenagemment', text:'Démenagemment'},
        {key:2, value:'إرسال بظائع', text:'إرسال بظائع'},
        {key:3, value:'شركة توصيل', text:'شركة توصيل'},
    ]
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [targetPosition, setTragetPosition] = useState([36.17720,9.12337])
    const [modalOpen, setModalOpen] = useState(false)
    const [searchForArticle, setSearchForArticle] = useState('')
    const [rendredMedicammentListe, setRendredMedicammentListe] = useState([])
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const [targetDeVers ,setTragetDeVers] = useState('De')

   /* ############### Functions #################*/
 
    const SaveCMDFunc = () =>{
        if (commandeData.articles.length == 0 ) {toast.error("أدخل  البظائع   !", GConf.TostErrorGonf)}
        else if (commandeData.De.Gouv == ''  ) {toast.error("أدخل  منطقة الإنطلاق   !", GConf.TostErrorGonf)}
        else if (commandeData.Vers.Gouv == ''  ) {toast.error("أدخل  منطقة الوصول   !", GConf.TostErrorGonf)}
        else if (!commandeData.Genre  ) {toast.error("أدخل  نوع الرحلة   !", GConf.TostErrorGonf)}
        else if (!commandeData.Wanted_Day  ) {toast.error("أدخل  اليوم المطلوب   !", GConf.TostErrorGonf)}
        else if (!commandeData.Wanted_Time  ) {toast.error("أدخل  الوقت المطلوب   !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/transporteur-request`, {
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
    const SelectPosition = () => {
        //setModalOpen(false)
        if (!gouv || gouv == '') {  toast.error("أدخل إسم الولاية    !", GConf.TostErrorGonf) } 
        else if (!gouv || gouv == '') {  toast.error("أدخل إسم المعتمدية    !", GConf.TostErrorGonf) } 
        else if (!targetPosition) {  toast.error("أدخل   الموقع الجغرافي    !", GConf.TostErrorGonf) } 
        else {
            if (targetDeVers == 'De') {
                setCommandeD({...commandeData, De: {Gouv: gouv, Deleg: deleg, Lat: targetPosition[0], Lng:targetPosition[1]} })
                setModalOpen(false)
            } else {
                setCommandeD({...commandeData, Vers: {Gouv: gouv, Deleg: deleg, Lat: targetPosition[0], Lng:targetPosition[1]} })
                setModalOpen(false)
            }
        }
    }
    const handleLocationSelected = (location) => {
        setTragetPosition([location.lat , location.lng])
        commandeData.targetPosition = {Lat: location.lat , Lng : location.lng}
    };
    const GetDelegList = (value) =>{
        setGouv(value)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
         
    }
    const OpenModalWithTarget = (positionTraget)  =>{
        setTragetDeVers(positionTraget)
        setModalOpen(true)
    }

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-3 border-div'>
                <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الرحلة </h5>
                <small> نوع الرحلة   </small> 
                <Select fluid placeholder='نوع الرحلة' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Genre: data.value})} />

                <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span> مسار الرحلة </h5>
                <small>من </small>
                    <div className='card p-2 shadow-sm border-div'  onClick={() => OpenModalWithTarget('De')}>
                        {commandeData.De.Gouv != '' ? <div className='text-center'><div><b>{commandeData.De.Gouv}, {commandeData.De.Deleg} </b></div><small>{commandeData.De.Lat}, {commandeData.De.Lng}</small></div> : <div className='text-center'><Icon name='map marker alternate' /></div>}
                    </div>
                     
                <small> إلي </small>
                <div className='card p-2 shadow-sm border-div'  onClick={() => OpenModalWithTarget('Vers')}>
                        {commandeData.Vers.Gouv != '' ? <div className='text-center'><div><b>{commandeData.Vers.Gouv}, {commandeData.Vers.Deleg} </b></div><small>{commandeData.Vers.Lat}, {commandeData.Vers.Lng}</small></div> : <div className='text-center'><Icon name='map marker alternate' /></div>}
                    </div>

                <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> وقت التوصيل المطلوب</h5>
                <div className='row'>
                    <div className='col-6'><Input icon='calendar alternate' type='date'  iconPosition='left'   fluid className='mb-1' value={commandeData.Wanted_Day} onChange={(e) => setCommandeD({...commandeData, Wanted_Day: e.target.value })}/></div> 
                    <div className='col-6'><Input className='mb-3' type='time' fluid value={commandeData.Wanted_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Wanted_Time: e.target.value })}  /></div> 
                </div>
 
                <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> البضائع المطلوب توصيلها </h5>
                <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 
                
                <div className='col-12'>
                    <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                </div>
                
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
                            <Select fluid placeholder='إختر ولاية' className='mb-2 shadow-sm' options={GConf.abyedhMap.Gouv} value={gouv} onChange={(e, { value }) => GetDelegList(value)} />
                            <Select fluid placeholder='إختر منطقة' className='shadow-sm' value={deleg} options={delegList} onChange={(e, { value }) => setDeleg(value)} />
                        </div>
                        <div className='mb-3 mt-3' >
                        <Button  fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={() => SelectPosition()}><Icon name='save' className='ms-2' /> تأكيد  </Button>
                        </div>
                </Modal.Content>
                </Modal>

        </div>      
    </> );
}

export default TransporteurSpecific;