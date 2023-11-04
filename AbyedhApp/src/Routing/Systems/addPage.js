import React, { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import dirItem from '../../AssetsM/Item'
import axios from 'axios';
import { useEffect } from 'react';
import { Input, Select , Checkbox,  Button, Icon, Divider, Form, TextArea, Loader, Modal, Dropdown} from 'semantic-ui-react';
import { toast } from 'react-toastify';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents  } from 'react-leaflet';
import { useNavigate} from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('G-JHPD6D9RGH');

const MapEventsHandler = ({ onLocationSelected }) => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        onLocationSelected({ lat, lng });
      },
    });
  
    return null;
};

const GeneralUserData = ({userData, setUserData, UDL, GouvChanged, targetSystem}) =>{
    return(<>
    <div className='  card-body    border-div mb-3'>
        <h5 className='text-end text-secondary ' dir='rtl'> <span className='bi bi-person-rolodex'></span>  معلومات عن صاحب {targetSystem.businesName} </h5>    
            <div className='row'>
                <div className='col-12 col-lg-6 d-none d-lg-flex align-self-center'><img src='https://cdn.abyedh.tn/images/Errors/error-log-in.png' className='img-responsive ' width='100%' height='auto'/></div>
                <div className='col-12 col-lg-6 '>
                    <div className='mb-2'>
                        <small>الاسم و اللقب</small>
                        <Input fluid icon='users' className='w-100 text-end' placeholder='الإسم و اللقب'  value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value })}   />
                    </div>
                    <div className='mb-2'>
                        <small> الهاتف</small>
                        <Input fluid icon='phone volume' className='w-100 ' placeholder='الهاتف' value={userData.phone} onChange={(e) => setUserData({...userData, phone: e.target.value })}  />
                    </div>
                    <div className='mb-2'>
                        <small>  تاريخ الولادة</small>
                        <Input type="date" fluid className='w-100 '  value={userData.birthday} onChange={(e) => setUserData({...userData, birthday: e.target.value })}  />
                    </div>
                    <div className='mb-2'>
                        <small> الجنس </small>
                        <Select placeholder='إختر جنس' fluid className='mb-2' options={[{id:"1", text:"ذكر", value:"Male"},{id:"2", text:"أنثي", value:"Femele"}]} value={userData.Sex} onChange={(e) => setUserData({...userData, Sex: e.target.value })} />
                    </div>
                    {/* <div className='mb-2'>
                        <small>  مكان الولادة </small>
                        <Select placeholder='إختر ولاية' fluid className='mb-2' options={GConf.TunMap} value={userData.gouv} onChange={(e, { value }) => GouvChanged('user', value)} />
                        <Select placeholder='إختر منطقة' fluid options={UDL} value={userData.deleg} onChange={(e, data) => setUserData({...userData, deleg: data.value })} />
                    </div> */}
                </div>
                
            </div>
    </div>
    </>)
}
const GeneralProfileData = ({inscData, setInscData, PDL, tag, GConf, GouvChanged, targetSystem}) =>{
    const GenerateGenreListe = () =>  {
       return GConf.ADIL[tag].subCateg.map(item => ({
            key: item.id.toString(),
            value: item.name,
            text: item.name,
            image: { src: `https://cdn.abyedh.tn/images/Search/Land_icons/${item.imgSrc}.gif`, avatar: true }
        }));
    }
    return(<>
        {/* <div className='card card-body shadow-sm border-div mb-3'> */}
                <h5 className='text-end text-secondary ' dir='rtl'> <span className='bi bi-house-heart-fill'></span>  معلومات عامة عن {targetSystem.businesName}  </h5>
                <div className='row'>
                    <div className='col-12 col-lg-6 '> 
                        <div className='mb-2'>
                            <small> إسم {targetSystem.businesName} </small>
                            <Input fluid icon='users' className='w-100 text-end font-droid' placeholder={`${targetSystem.businesName}`} value={inscData.name} onChange={(e) => setInscData({...inscData, name: e.target.value })}   />
                        </div>
                        <small>نوع {targetSystem.businesName} </small>
                        <Dropdown
                            search
                            selection
                            fluid
                            wrapSelection={false}
                            options={GenerateGenreListe()}
                            placeholder={` تحديد نوع ${targetSystem.businesName}   `}
                            className='mb-1'
                            onChange={(e, { value }) => setInscData({...setInscData, Genre: value })}
                            value={setInscData.Genre}
                        />
                        <div className='mb-2'>
                            <small> رقم الهاتف  </small>
                            <Input fluid icon='phone' className='w-100 '  placeholder={` رقم هاتف ${targetSystem.businesName}`}   value={inscData.phone} onChange={(e) => setInscData({...inscData, phone: e.target.value })}  />
                        </div>
                        <div className='mb-2'>
                            <small>  الموقع الجغرافي</small>
                            <Select placeholder='إختر ولاية' fluid className='mb-2' options={GConf.abyedhMap.Gouv} value={inscData.gouv} onChange={(e, { value }) => GouvChanged('profile', value)} />
                            <Select placeholder='إختر منطقة' fluid options={PDL} value={inscData.deleg} onChange={(e, data) => setInscData({...inscData, deleg: data.value })} />
                        </div>
                        <div className='mb-2'>
                            <small>  عنوان {targetSystem.businesName} </small>
                            <Form>
                                <TextArea className='font-droid' placeholder='العنوان'  value={inscData.adresse} onChange={(e) => setInscData({...inscData, adresse: e.target.value })} />
                            </Form>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 d-none d-lg-flex align-self-center'><img src={`https://cdn.abyedh.tn/Images/ads/${tag}.svg`} className='img-responsive ' width='100%' height='200px'/></div>
                </div>
                
        {/* </div> */}
    </>)
}
const Horaire = ({alwaysState, setAlwaysState, timming, setTimming, setPauseDay , SetTimmingData,UpdateTimmingData, setSelectedUpdateDay, selectedUpdateDay}) =>{
    let [addInput, setAddInput] = useState(false)
    let [dateDataToChange, setDateDataToChange] = useState({pauseDay: false, matinStart:'08:00', matinFinsh:'12:00', soirStart:'14:00', soirFinsh:'18:00'})
    const weekDays = [
        { key: 'af', value: 'Lun', text: 'الانثنين' },
        { key: 'ax', value: 'Mar', text: 'الثلاثاء' },
        { key: 'al', value: 'Mer', text: 'الاربعاء' },
        { key: 'dz', value: 'Jeu', text: 'الخميس' },
        { key: 'as', value: 'Vend', text: 'الجمعة' },
        { key: 'ad', value: 'Sam', text: 'السبت' },
        { key: 'ao', value: 'Dim', text: 'الاحد' },
    ]
    const ArabificationDate = (dateName) =>{
        switch (dateName) {
            case 'Lun' : return 'الإثــنين' 
            break;
            case 'Mar' : return 'الثلاثــاء'
            break;
            case 'Mer' : return 'الإربــعاء'
            break;
            case 'Jeu' : return 'الخميس'
            break;
            case 'Vend' : return 'الجـمعة'
            break;
            case 'Sam' : return 'الســبت'
            break;
            case 'Dim' : return 'الأحـــد'
            break;

            default:
                break;
        }
    }
    const DayHoraire = (props) =>{
        return(<>
                <div className={`row  mb-1 ${props.data.dayOff ? 'text-danger':''}`}>
                    <div  className='col-3 col-lg-3 m-0 p-1'>
                        <b>{ArabificationDate(props.data.day)}</b>
                    </div>
                    <div  className='col-4 col-lg-4  m-0 p-1'>
                        <small>{props.data.matin.start} - {props.data.matin.end}</small>
                    </div>
                    <div  className='col-4 col-lg-4  m-0 p-1'>
                        <small>{props.data.soir.start} - {props.data.soir.end}</small>
                    </div>
                    <div className='col-1 m-0 p-1'>
                        <span className='bi bi-pencil-square bi-xsm text-secondary' onClick={() => OpenEditTime(props.data.day)}></span>
                    </div>
                </div>
        </>)
    }
    const OpenEditTime = (value) =>{
        setSelectedUpdateDay(value)
        setAddInput(true)
    }
    const UpdateTimingFunc = () =>{
        const targetIndex = timming.findIndex(element => element.day === selectedUpdateDay)
        let copyOfHoraire = timming
        copyOfHoraire[targetIndex] = {day: selectedUpdateDay , dayOff: dateDataToChange.pauseDay , matin:{start: dateDataToChange.matinStart ,end: dateDataToChange.matinFinsh},soir:{start: dateDataToChange.soirStart,end: dateDataToChange.soirFinsh}}
        setTimming(copyOfHoraire)
        //SetTimmingData()
        setAddInput(!addInput)
    }
    return(<>
        <br />
        <div className=' '>
            <h5 className='text-end text-secondary ' dir='rtl'> <span className='bi bi-calendar-week-fill'></span>   أوقات العمل  </h5>
            <div className='row'>
                <div className='col-12 col-lg-7'>
                    <div className=' '>
                        <div className='row'>
                            <div className='col-10 col-lg-9 align-self-center'> 
                                <h5 className='mb-0 text-success'>مفتوح دائما</h5>  
                                <small>عند تفعيل هذه الخاصية ستضهر في حالة مفتوح دائما </small>
                            </div>
                            <div className='col-2 col-lg-3  align-self-center '> 
                                <div className="form-check form-switch">
                                    <input className="form-check-input form-check-input-lg" type="checkbox"  onChange={() => setAlwaysState(!alwaysState)}  checked={alwaysState} />
                                </div>
                            </div>
                        </div>
                        <Divider />
                        {addInput ? 
                                <div className=' card card-body border-div  '>
                                    <div className='text-start'><span className='bi bi-x-circle-fill  text-danger text-secondary mb-2' onClick={() => setAddInput(!addInput)}></span></div>
                                    <h5 className='mt-0'> هل يوم {ArabificationDate(selectedUpdateDay)} يوم راحة ؟  </h5>
                                    <Select options={[ { key: 'af', value: false, text: 'لا' }, { key: 'ax', value: true, text: 'نعم' }]} onChange={(e, {value}) => setDateDataToChange({... dateDataToChange, pauseDay : value})} className='mb-3'/>
                                    <div className='row mb-3 '>
                                        <div className='col-6'><Input  type='time' size='mini'  value={dateDataToChange.matinStart}  fluid className='mb-1 w-100'  onChange={(e) => setDateDataToChange({... dateDataToChange, matinStart : e.target.value})} /></div>
                                        <div className='col-6'><Input  type='time' size="mini"  value={dateDataToChange.matinFinsh} fluid className='mb-1 w-100'  onChange={(e) => setDateDataToChange({... dateDataToChange, matinFinsh : e.target.value})}/></div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'><Input  type='time' size='mini'  value={dateDataToChange.soirStart}   fluid className='mb-1 w-100'  onChange={(e) => setDateDataToChange({... dateDataToChange, soirStart : e.target.value})} /></div>
                                        <div className='col-6'><Input  type='time' size="mini"  value={dateDataToChange.soirFinsh}  fluid className='mb-1 w-100'  onChange={(e) => setDateDataToChange({... dateDataToChange, soirFinsh : e.target.value})}/></div>
                                    </div>
                                    <Button size='mini'     className='rounded-pill    font-droid' onClick={() => UpdateTimingFunc()} fluid  >   <Icon name='time' /> تعديل وقت يوم  {ArabificationDate(selectedUpdateDay)}  </Button>
                                </div>

                        :
                                <>
                                    <div className='row text-secondary mb-2'>
                                        <div  className='col-4 col-lg-4'> <b>اليوم</b> </div>
                                        <div  className='col-4 col-lg-4'> <small>صباح</small> </div>
                                        <div  className='col-4 col-lg-4'> <small>مساء</small> </div>
                                    </div>
                                    
                                    {
                                        timming.map( (data,index) => <DayHoraire key={index} data={data} />)
                                    }
                                </>
                        }
                        
                    </div>
                </div>
                <div className='col-12 col-lg-5 d-none'>
                    <div className='card card-body border-div'>
                        <h5>قم باختيار يوم لتعديل الوقت </h5>
                        <Select options={weekDays} onChange={(e, { value }) => setSelectedUpdateDay(value)} className='mb-3'/>
                        <div className='row mb-3 '>
                            <div className='col-6'><Input  type='time' size='mini'  value={timming.find(obj => obj.day === selectedUpdateDay).matin.start}  fluid className='mb-1 w-100'  onChange={(e) => SetTimmingData(selectedUpdateDay,'matin','start',e.target.value)} /></div>
                            <div className='col-6'><Input  type='time' size="mini"  value={timming.find(obj => obj.day === selectedUpdateDay).matin.end} fluid className='mb-1 w-100'  onChange={(e) => SetTimmingData(selectedUpdateDay,'matin','end',e.target.value)}/></div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6'><Input  type='time' size='mini'  value={timming.find(obj => obj.day === selectedUpdateDay).soir.start}   fluid className='mb-1 w-100'  onChange={(e) => SetTimmingData(selectedUpdateDay,'soir','start',e.target.value)} /></div>
                            <div className='col-6'><Input  type='time' size="mini"  value={timming.find(obj => obj.day === selectedUpdateDay).soir.end}  fluid className='mb-1 w-100'  onChange={(e) => SetTimmingData(selectedUpdateDay,'soir','end',e.target.value)}/></div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-2 text-end'>
                                <div className="form-check form-switch">
                                    <input className="form-check-input form-check-input-lg" type="checkbox" checked={timming.find(obj => obj.day === selectedUpdateDay).dayOff}   onChange={() => setPauseDay(selectedUpdateDay,selectedUpdateDay.dayOff)}   />
                                </div>
                            </div>
                            <div className='col-10'>يوم راحة ؟ </div>
                        </div>
                        
                        <Button size='mini'     className='rounded-pill    font-droid' onClick={() => UpdateTimmingData()} fluid  >   <Icon name='time' /> تعديل  </Button>
                    </div>
                </div>
            </div>
            
        </div>
    </>)
}
const Location = ({position,handleLocationSelected,GetMyLocation}) =>{
    return(<>
        <br />
        <div className='  mb-3'>
                <div className='row'>
                        <div className='col-6 align-self-center text-end'><h5 className='text-end text-secondary ' dir='rtl'> <span className='bi bi-geo-alt-fill'></span>   الموقع الجغرافي </h5></div>
                        <div className='col-6 align-self-center text-start'><Button icon='map pin' className='rounded-circle' onClick={() => GetMyLocation()}></Button></div>
                </div> 
                
                <small className='mb-3'> قم بالنقر علي الزر لتحديد مكانك الحاليا إفتراضيا  </small>
                <MapContainer center={[position.Lat,position.Lng]} zoom={6} scrollWheelZoom={false} className="map-height  border-div">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapEventsHandler onLocationSelected={handleLocationSelected} />
                    <Marker position={[position.Lat,position.Lng]}>
                        <Popup> </Popup>
                    </Marker>
                </MapContainer> 
                {/* <LocationPicker    />*/}
        </div>
    </>)
}

function ProfileAction() {

    /* ############### Const #################*/
    let {tag,PID} = useParams()
    let UID = localStorage.getItem('UID')
    let [clientActivated, setClientActivated] = useState(false)
    
    let {system} = tag
    const Today = new Date()
    const targetSystem = GConf.ADIL[tag]
    let [okayForCondition , setOkayForCondition] = useState(false)
    let [test , setTest] = useState(10)

    let [userData, setUserData] = useState({name :'', phone:'', birthday:Today.toISOString().split('T')[0] , gouv:'',deleg:''})
    let [inscData, setInscData] = useState({name :'', phone:'', adresse:'' , gouv:'', deleg:''})

    
    let [UDL ,setUDL] = useState([])
    let [PDL ,setPDL] = useState([])

    let [selectedUpdateDay , setSelectedUpdateDay] = useState('Lun')
    let [alwaysState , setAlwaysState] = useState(false)
    let [timming, setTimming] = useState([{day:"Lun",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Mar",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Mer",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Jeu",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Vend",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Sam",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}},{day:"Dim",dayOff:false,matin:{start:"08:00",end:"12:00"},soir:{start:"14:00",end:"18:00"}}])
    
    let [loaderState, setLS] = useState(false)
    let [saveBtnState, setSaveBtnState] = useState(false)

    let [position, setPosition] = useState({Lat: 36.83040, Lng: 10.13280})
    let [openModal,setOpenMoadal] = useState(false)

    const navigate = useNavigate();
    
    /* ############### UseEffect #################*/
        useEffect(() => {
            window.scrollTo(0, 0);
            if (GConf.UserData.Logged) {
                setUserData({name :GConf.UserData.UData.Name , phone:GConf.UserData.UData.PhoneNum , Sex :GConf.UserData.UData.Sex , birthday: GConf.UserData.UData.BirthDay , gouv: GConf.UserData.UData.BirthGouv ,deleg: GConf.UserData.UData.BirthDeleg}) 
            }
            // axios.post(`${GConf.ApiLink}/systems/fromfcb`,{
            //     PID :GConf.PID,
            //     isFromFcb: localStorage.getItem('userEnter') ? localStorage.getItem('userEnter')  : Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111,
            //     Genre: tag
            // })
            // .then(function (response) {
            //     //if (!localStorage.getItem('userEnter')) { localStorage.setItem('userEnter', response.data.Req_ID); }
            // }).catch((error) => {
            // if(error.request) {
            //      console.log('error-52478')
            // }
            // });

            //ReactGA.pageview(window.location.pathname);
            //if (localStorage.getItem('AddToDirectory')) {window.location.href = "/S/I";}
            //window.scrollTo(0, 0);
            // axios.post(`${GConf.ApiLink}/systems/check`, {
            //     tag: tag,
            //     PID:PID,
            // })
            // .then(function (response) {
            //    if (response.data.Activated == 'true') {
            //     setClientActivated(true)
            //    }
            // })
            }, [])

    /* ############### Functions #################*/
    L.Icon.Default.mergeOptions(GConf.LeafleftIcon );

    const GouvChanged = (genre,value) =>{
        if (genre == 'user') {
            setUserData({...userData, gouv: value })
            const found = GConf.abyedhMap.Deleg.filter(element => element.key === value)
            setUDL(found)
        } else {
            setInscData({...inscData, gouv: value })
            const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
            setPDL(found)
            const gouvCord = GConf.abyedhMap.GouvData.filter(element => element.name === value)
            setPosition({Lat: gouvCord[0].lan, Lng: gouvCord[0].lng})
        }
    }
    const SetTimmingData = (day,time,genre,value) => {
        const targetIndex = timming.findIndex(element => element.day === day)
        let copyOfHoraire = timming

        if (time == 'matin') {
            if (genre == 'start') {
                copyOfHoraire[targetIndex].matin.start = value
                setTimming(copyOfHoraire)
            } else {
                copyOfHoraire[targetIndex].matin.end = value
                setTimming(copyOfHoraire)
            }
        } else {
            if (genre == 'start') {
                copyOfHoraire[targetIndex].soir.start = value
                setTimming(copyOfHoraire)
            } else {
                copyOfHoraire[targetIndex].soir.end = value
                setTimming(copyOfHoraire)
            }
        }

    }
    const UpdateTimmingData = (day,time,genre,value) => {
        //setTimming(...timming)
        setTest(Math.random())
        toast.success("", GConf.TostAddedToTimming)

    }  
    const setPauseDay = (day,state) =>{
        const targetIndex = timming.findIndex(element => element.day === day)
        let copyOfHoraire = timming
        copyOfHoraire[targetIndex].dayOff = !state
        setTimming(copyOfHoraire)
        setTest(Math.random())
    }
    const  handleClick = (targetSystem) => {
        ReactGA.event({
          category: targetSystem,
          action: 'SystemGenre',
          label: targetSystem
        });
    }

    const Inscription = () =>{
            handleClick(tag)
            if (!userData.name || userData.name == '') {toast.error("أدخل إسم و لقب المستخدم !", GConf.TostErrorGonf)}
            else if (!userData.phone || userData.phone == '' ) {toast.error("أدخل هاتف المستخدم !", GConf.TostErrorGonf)}
            else if (!userData.birthday || userData.birthday == '' ) {toast.error("أدخل تاريخ ميلاد المستخدم !", GConf.TostErrorGonf)}
            //else if (!userData.Sex || userData.Sex == '' ) {toast.error("أدخل جنس المستخدم !", GConf.TostErrorGonf)}
            //else if (!userData.gouv || userData.gouv == '' ) {toast.error("أدخل  ولاية المستخدم !", GConf.TostErrorGonf)}
            //else if (!userData.deleg || userData.deleg == '' ) {toast.error("أدخل  مدينة المستخدم !", GConf.TostErrorGonf)}
            else if (!inscData.name || inscData.name == '' ) {toast.error("أدخل  إسم العمل ", GConf.TostErrorGonf)}
            else if (!inscData.phone || inscData.phone == '' ) {toast.error("أدخل  هاتف العمل ", GConf.TostErrorGonf)}
            else if (!inscData.adresse || inscData.adresse == '' ) {toast.error("أدخل  عنوان العمل ", GConf.TostErrorGonf)}
            else if (!inscData.gouv || inscData.gouv == '' ) {toast.error("أدخل  ولاية العمل ", GConf.TostErrorGonf)}
            else if (!inscData.deleg || inscData.deleg == '' ) {toast.error("أدخل  مدينة العمل ", GConf.TostErrorGonf)}
            else if (!timming) {toast.error("أدخل أوقات العمل  !", GConf.TostErrorGonf)}
            else if (!okayForCondition ) {toast.error("يحب أن توافق علي شروط الأستخدام ", GConf.TostErrorGonf)}
            else{
                setLS(true)
                axios.post(`${GConf.ApiLink}/systems/save`, {
                    system : tag,
                    userData : userData,
                    inscData : inscData,
                    horaireData : timming,
                    alwaysOpen : alwaysState,
                    position : position,
                    addTodirectory : localStorage.getItem('AddToDirectory') ? localStorage.getItem('AddToDirectory')  : false
                }).then(function (response) {
                    if(response.data.Req_ID) {
                        if (!localStorage.getItem('AddToDirectory')) { localStorage.setItem('AddToDirectory', response.data.Req_ID); }
                        setSaveBtnState(true)
                        setLS(false)
                        setOpenMoadal(true)
                    }
                    else{
                        toast.error('حاول مرة أخري', GConf.TostSuucessGonf)
                        setLS(false)
                    }
                }).catch((error) => {
                    if(error.request) {
                      toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
                      setLS(false)
                    }
                  });
                
            }
    }
    const MapEventsHandler = ({ onLocationSelected }) => {
        useMapEvents({
          click: (e) => {
            const { lat, lng } = e.latlng;
            onLocationSelected({ lat, lng });
          },
        });
      
        return null;
    };

    const handleLocationSelected = (location) => {
        setPosition({Lat: location.lat , Lng:location.lng})
    };

    const GetMyLocation = () =>{
        navigator.geolocation.getCurrentPosition(
            function(position) {
                if (!position.coords.latitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lat</h5></div></>, GConf.TostInternetGonf)}
                else if (!position.coords.longitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lng</h5></div></>, GConf.TostInternetGonf)}
                else{
                    setPosition({Lat:position.coords.latitude, Lng:position.coords.longitude})
                }
            },
            function(error) {
                toast.error(<><div><h5>ENTRE VOTRE POSITION</h5></div></>, GConf.TostInternetGonf)
            }
        );
    }
    function findElementByLink(link) {
        for (const category in dirItem) {
          if (dirItem[category] && dirItem[category].slides) {
            for (const slide of dirItem[category].slides) {
              if (Array.isArray(slide)) {
                for (const subSlide of slide) {
                  if (subSlide.link === link) {
                    return subSlide.name
                  }
                }
              } else if (slide.link === link) {
                return slide.name
              }
            }
          }
        }
        return null;
    }

    /* ############### Card #################*/
    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to={`/S/I/user/${tag}`} className="navbar-brand border-div m-0 p-0 ms-3">
                    {/* <div  className="d-lg-none d-inline-block text-white p-1"  > <span className='bi bi-arrow-right-short bi-md ' ></span> </div> */}
                    {/* <span className='bi bi-person-circle bi-md text-white'></span> */}
                    {/* <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} /> */}
                </NavLink>
            </>)
        }
        return(<>
                <nav className="p-2 fixed-top navshad" style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to={`/S/L/${tag}`} className="m-0 p-0 ms-3">
                                <img  className="border-div-s d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px',borderRadius: '10px 20px 10px 50px'}} />
                                <div  className="d-lg-none d-inline-block text-white p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {localStorage.getItem('AddToDirectory') ? <UserCard />  : <></>}
                        </div>
                    </div>
                </nav>
            </>)
    }


    const BtnCard = () =>{
        return(<>
            
            <div className='  card-body   mb-3 border-div'>
            <h5 className='text-end text-secondary ' dir='rtl'> <span className='bi bi-save'></span>  تسجيل  </h5>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className='text-secondary'>
                            <ul>
                                <li> بعد إستكمال التسجيل سنحاول الإتصال بكم في أقرب وقت ممكن من أجل مساعدتكم في عملية التفعيل </li>
                                <li>   يتمتع كل مشترك بنسخة مصغرة و مجانية من  النظام  لإستقبال الطلبات و التواصل مع العملاء  </li>
                                <li> <span className='bi bi-exclamation-triangle-fill text-danger'></span> أي طلب تسجيل يحتوي علي معلومات خاطئة أو مضللة سيلغي آليا </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 align-self-center'>
                            <div className='row mb-3'>
                                <div className='col-2 text-end'>
                                    <Checkbox
                                        onChange={(e, data) => setOkayForCondition(data.checked)}
                                        checked={okayForCondition}
                                    />
                                </div>
                                <div className='col-8 text-end'>موافق </div>
                            </div>   
                            
                            <Button   disabled={saveBtnState} icon className='rounded-pill  text-white font-droid' onClick={Inscription} fluid style={{backgroundColor:GConf.ADIL[tag].themeColor}}>   <Icon name='world' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
            </div>
        </>)
    }
    const BottomCard = () =>{
        return(<>
            <NavLink exact='true' to={`/S/I/user/${tag}`}  >
                <div className='card card-body border-div shadow-sm bg-white'  >
                    <div className='row ' style={{color:GConf.ADIL[tag].themeColor}}>
                        <div className='col-2  align-self-center text-end'>
                            <span className='bi bi-arrow-right-short bi-md'></span>
                        </div>
                        <div className='col-8 align-self-center  text-center'>
                            <h5>  متابعة عملية التسجيل </h5> 
                        </div>
                        <div className='col-2 align-self-center  text-end'>
                            <span className='bi bi-person-circle bi-md'></span>
                        </div>
                    </div>
                </div>
            </NavLink>
            <br />
            
        </>)
    }

    const UserCard = () =>{
        return(<>
            <NavLink exact='true' to={`/S/I/user/${tag}`}  >
                <div className='card card-body border-div shadow-sm'>
                    <div className='row'>
                        <div className='col-2 align-self-center text-secondary'><span className='bi bi-arrow-right'></span></div>
                        <div className='col-8 align-self-center text-secondary'><b>  تسجيل بإسم : {GConf.UserData.UData.Name}</b></div>
                        <div className='col-2'><img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} /></div>
                    </div>
                </div>
            </NavLink>
        </>)
    }
    return ( <>
        <TopNavBar />
        <br />
        <br />
        <br />
        <br />
        <div className='container container-lg font-droid' dir='rtl'>
            {GConf.UserData.Logged ? 
                <>
                 {/* {localStorage.getItem('AddToDirectory') ? <BottomCard />  : <></>} */}
                 <h3 className='text-center ' style={{color:targetSystem.themeColor}}>  تَسْجِيلْ     {findElementByLink(tag)}   فِي مِنَصّةْ أَبْيَضْ </h3>
                 <br /><UserCard /> <br />
                 {/* <h4 className='text-secondary'>1- منصة أبيض هي محرك بحث شامل تنجم تلقي فيه العديد من أصحاب الخدمات و نقاط البيع  و تنجم تتواصل معاهم باش تتمتع بخدماتهم و منتجاتهم  </h4>
                 <h4 className='text-secondary'>2- في المقابل توفر المنصة لأصحاب الخدمات و نقاط البيع هاذم أنظمة لإدارة الأعمال متاعهم و تساعدهم كذلك في التعريف بأنفسهم و بأعمالهم من أجل الوصل أكثر لعملائهم  ...</h4>
                 <h4 className='text-secondary'>3-  كانك من أصحاب الخدمات و نقاط البيع تنجم تسجل معانا و تتحصل علي منصة مجانية تعاونك  تستقبل الطلبات متاعك و تقوم بتنظيمها   ...</h4>
                   */}

                 {/* {GConf.UserData.Logged ? <UserCard />  : <GeneralUserData userData={userData}  setUserData={setUserData} GouvChanged={GouvChanged} UDL={UDL} targetSystem={targetSystem} />} */}
                 
                  
                 <div className='  card-body   border-div mb-3'>
                    <GeneralProfileData tag={tag} GConf={GConf} inscData={inscData} setInscData={setInscData} PDL={PDL}  targetSystem={targetSystem}  GouvChanged={GouvChanged}   />
                    <Location position={position} handleLocationSelected={handleLocationSelected} GetMyLocation={GetMyLocation} />
                    <Horaire alwaysState={alwaysState} setAlwaysState={setAlwaysState} timming={timming} setTimming={setTimming} setPauseDay={setPauseDay} SetTimmingData={SetTimmingData} setSelectedUpdateDay={setSelectedUpdateDay} selectedUpdateDay={selectedUpdateDay} UpdateTimmingData={UpdateTimmingData} />
                 </div>
                 <BtnCard /> 
                </>
                :    
                <div className='text-center p-2 text-secondary'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 align-self-center text-center'><img src='https://cdn.abyedh.tn/Images/required/log-in.png' className='img-responsive mb-4'  width='100%' height='auto' /></div> 
                        <div className='col-12 col-lg-8 align-self-center text-center'>
                            <h3> عليك أن تمتلك حساب في منصة أبيض أولا </h3> 
                            <h5> قم بالتسجيل في المنصة أولا ثم عد لتقوم يتسجيل الإشتراك في النظام </h5> 
                            <h5  className="btn  me-3  p-3 border-div border shadow-sm "><NavLink exact='true' to='/Profile/signUp'> <span className='bi bi-arrow-right-square'></span> تسجيل حساب في منصة أبيض  </NavLink></h5>
                        </div> 
                    </div>      
                </div>
            }
        </div>  
        <Modal
                onClose={() => setOpenMoadal(false)}
                onOpen={() => setOpenMoadal(true)}
                open={openModal}
                dimmer= 'blurring'
                    
                >
                <Modal.Content  >
                        <h1 className='text-center bi bi-clipboard-check-fill bi-lg text-success'></h1>
                        <h4 className='text-center text-success'> لقد تمت عملية التسجيل بنجاح </h4>
                        <h4 className='text-center text-سثؤخىيضقغ'> إضغط ليتم تمريرك لصفحة متابعة عملية القبول</h4>
                        <Button fluid className='rounded-pill' onClick={() => navigate(`/S/I/user/${tag}`)}> صفحة المتابعة  </Button>
                </Modal.Content>
        </Modal>
        <br />
        <br />

    </> );
}

export default ProfileAction;