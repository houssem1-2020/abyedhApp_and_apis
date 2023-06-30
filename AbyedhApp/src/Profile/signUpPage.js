import React ,{useEffect, useState} from 'react';
import { Button, Dimmer, Icon, Input, Loader, Select } from 'semantic-ui-react';
import GConf from '../AssetsM/generalConf';
import { toast } from 'react-toastify';
import axios from 'axios';
import StepWizard from "react-step-wizard";
import { NavLink } from 'react-router-dom';
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet';

const Percentage = (props) =>{
    return(<>
        <div className="progress" style={{height: "2px"}}>
            <div className="progress-bar bg-danger" role="progressbar" style={{width: `${props.percentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </>)
}
const ItmesList = ({ option, selected, onChange }) => {
    return (
            <div className={`card card-body shadow-sm text-center m-1 border-div ${selected ? 'border-selected' : ''}`}  selected={selected} onClick={onChange}>
                <div className=' text-center'><img src={`https://cdn.abyedh.tn/images/p_pic/${option.imgSrc}.gif`} className='img-responsive rounded-circle' width='60px' height='60px' /></div>
                <div>{option.name}</div>
            </div>
    );
}
const BottomNav = (props) =>{
    return(<>
            <div className='row mt-4'>
                    <div className='col-6 align-self-center text-start'> <Button onClick={props.previousStep}  className={`rounded-pill btn-danger ${props.firstStepIsNow  ?  'd-none' : ''}`} size='tiny' icon ><Icon name='arrow left' /> </Button> </div>
                    <div className='col-6 align-self-center text-end'> <Button onClick={props.lastStep ? props.SaveFunction : props.nextStep }  className='rounded-pill bg-success text-white' size='tiny' > {props.lastStep ? 'إنهاء' : 'التالي' }  <Icon name='arrow right' /></Button> </div>
            </div>
        </>)
}


const GeneralData = (props) =>{
    const percentage = ((props.totalSteps - ( props.totalSteps - props.currentStep)) / props.totalSteps ) * 100 
    const Next = props.nextStep 
    const Previous = props.previousStep 
    return (<>
            <Percentage percentage={percentage} />
            <br />
            <div className='card card-body shadow-sm mb-4 border-div '>
                <h3 className='text-end text-secondary'>معلومات عام <span className='bi bi-person-lines-fill bi-sm'></span> </h3>
                <div dir='rtl'>
                        <h5 className='text-end text-danger mb-1'>الاسم و اللقب </h5>
                        <div className='mb-2'>
                            <Input type='text'  icon='user' placeholder='الاسم و اللقب '  className='shadow-sm w-100' value={props.signUpD.Name} onChange={(e) => props.setSignUp({...props.signUpD, Name: e.target.value })}/>
                        </div>

                        <h5 className='text-end text-danger mb-1 mt-3'> تاريخ الميلاد </h5>
                        <div className='mb-2'>
                            <Input type='date'  className='shadow-sm w-100' value={props.signUpD.BirthDay}  onChange={(e) => props.setSignUp({...props.signUpD, BirthDay: e.target.value })}/>
                        </div>

                        <h5 className='text-end text-danger mb-1 mt-3'> الجنس  </h5>
                        <div className='mb-2'>
                            <Select   className='shadow-sm w-100' fluid options={[{ key: '1', value: 'male', text: 'ذكر' },{ key: '2', value: 'female', text: 'انثي' }]}  value={props.signUpD.Gender} onChange={(e, { value }) => props.setSignUp({...props.signUpD, Gender: value })}/>
                        </div> 

                        <h5 className='text-end text-danger mb-1 mt-3'> رقم الهاتف </h5>
                        <div className='mb-2'>
                            <Input  icon='phone' placeholder='رقم الهاتف مهم '  onBlur={props.checkPhoneExistance} type='text' className='shadow-sm w-100' value={props.signUpD.Phone} onChange={(e) => props.setSignUp({...props.signUpD, Phone: e.target.value })}/>
                        </div> 
                </div>
                <BottomNav nextStep={Next} previousStep={Previous} firstStepIsNow={true} />
            </div>     
   </>)
}
const Geolocalization = (props) =>{
    const percentage = ((props.totalSteps - ( props.totalSteps - props.currentStep)) / props.totalSteps ) * 100 
    const Next = props.nextStep 
    const Previous = props.previousStep 
    const position = [51.505, -0.09];
    return (<>
            <Percentage percentage={percentage} />
            <br />
            <div className='card card-body shadow-sm mb-4 border-div'>
                   <h3 className='text-end text-secondary'>الموقع الجغرافي  <span className='bi bi-pin-map-fill bi-sm'></span> </h3>
                   <div dir='rtl'>
                    <h5 className='text-end text-secondary'>إختر ولاية </h5>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <Select placeholder='إختر ولاية' fluid className='mb-2' options={GConf.abyedhMap.Gouv} value={props.gouv} onChange={(e, { value }) => props.GetDelegList(value)} />
                        </div>
                        <div className='col-12 col-md-6'>
                            <Select placeholder='إختر منطقة' fluid value={props.deleg} options={props.delegList} onChange={(e, { value }) => props.setDeleg(value)} />
                        </div>
                    </div> 
                    
                    <h5 className='text-end text-secondary'> تحديد المكان الجغرافي </h5> 

                            <div className='row mb-2'>
                                    {/* <div className='col-1 text-center'> <Button icon className='rounded-pill'> <Icon name='world' /> </Button></div> */}
                                    <div className='col-12 col-md-6 mb-2'> 
                                        <Input icon='map marker alternate' fluid iconPosition='left' placeholder={props.myPosition[0]} value={props.myPosition[0]}/> 
                                    </div>
                                    <div className='col-12 col-md-6'> 
                                        <Input icon='map marker' fluid iconPosition='left' placeholder={props.myPosition[1]} value={props.myPosition[1]} /> 
                                    </div>
                            </div>
                            <div className='card p-2 mt-2' style={{ zIndex:'0'}}>
                                <MapContainer center={props.myPosition} zoom={7} scrollWheelZoom={false} style={{height:'230px'}} onClick={(e) => console.log(e.latlng)} >
 
                                    <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    
                                    />
                                    <Marker position={props.myPosition}>
                                        <Popup> مكاني </Popup>
                                    </Marker>

                                </MapContainer>
                            </div>

                   </div> 
                   <BottomNav nextStep={Next} previousStep={Previous}  />
            </div>
   </>)
}
const SelectPhoto = (props) =>{
    
    const percentage = ((props.totalSteps - ( props.totalSteps - props.currentStep)) / props.totalSteps ) * 100 
    const Next = props.nextStep 
    const Previous = props.previousStep 
    return (<>
            <Percentage percentage={percentage} />
            <br />
            <div className='card card-body shadow-sm mb-4 border-div'>
                <h3 className='text-end text-secondary'> تحديد صورة الحساب <span className='bi bi-person-video2 bi-sm'></span> </h3>
                <div dir='rtl'>
                        <div className='d-none d-lg-flex '>
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper pb-4 mb-1"
                                >
                                    {
                                        props.Photoes.large.map((slides, index) => (
                                            <SwiperSlide key={index}>
                                                <div className='row card-body '>
                                                    {slides.map((option,index) => (
                                                        <div className='col-3 p-0' key={index}>
                                                            <ItmesList
                                                                key={option.id -1}
                                                                option={option}
                                                                selected={props.isSelected === option.value }
                                                                onChange={() => props.setisSelected(option.value)}
                                                            />
                                                        </div>
                                                    ))}     
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                    
                                </Swiper>
                        </div>
                        
                        <div className='d-lg-none '>
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper pb-4 mb-1"
                                >
                                    
                                        
                                    {
                                        props.Photoes.small.map((slides, index) => (
                                            <SwiperSlide key={index}>
                                                <div className='row card-body '>
                                                     {slides.map((option,index) => (
                                                        <div className='col-6 p-0' key={index}>
                                                            <ItmesList
                                                                key={option.id -1}
                                                                option={option}
                                                                selected={props.isSelected === option.value }
                                                                onChange={() => props.setisSelected(option.value )}
                                                            />
                                                        </div>
                                                    ))}     
                                                </div>
                                            </SwiperSlide>
                                        )) 
                                    }
                                    
                                    
                                </Swiper>
                        </div>
                </div>
                <BottomNav nextStep={Next} previousStep={Previous} />
            </div>
   </>)
}
const Password = (props) =>{
    const percentage = ((props.totalSteps - ( props.totalSteps - props.currentStep)) / props.totalSteps ) * 100 
    const Next = props.nextStep 
    const Previous = props.previousStep 
    return (<>
            <Percentage percentage={percentage} />
            <br />
            <div className='card card-body shadow-sm mb-4 border-div'>
                <h3 className='text-end text-secondary'> كلمة المرور <span className='bi bi-key-fill bi-sm'></span> </h3>
                    <div className='row'>
                        <div className='col-12 col-lg-8 order-2'>
                            <h5 className='text-end text-danger mb-1'> كلمة المرور </h5>
                            <div className='mb-1'>
                                <Input type='password'  icon='key' placeholder='كلمة المرور'  className='shadow-sm w-100' value={props.password.Pvalue} onChange={(e) => props.setPassword({...props.password, Pvalue: e.target.value })}/>
                            </div>
                            <h5 className='text-end text-danger mb-1 mt-3'> أعد كلمة المرور </h5>
                            <div className='mb-2'>
                                <Input type='password'  icon='eye' placeholder='إعادة كلمة المرور'  className='shadow-sm w-100' value={props.password.repeated} onChange={(e) => props.setPassword({...props.password, repeated: e.target.value })}/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 mb-4 align-self-center text-center'>
                            <img src='https://cdn.abyedh.tn/Images/Profile/checking.svg' width='70%' height='auto' className='img-responsive' />
                        </div>
                    </div>
                <BottomNav nextStep={Next} previousStep={Previous} lastStep SaveFunction={props.SaveFunction} />
            </div>
   </>)
}


function SignUpPage() {
    /*#########################[Const]##################################*/
    const [signUpD, setSignUp] = useState({Name:'', BirthDay: new Date().toISOString().split('T')[0], Phone:'', Gender:'' })
    const [isSelected, setisSelected] = useState('0');
    const [password ,setPassword] = useState([{Pvalue:'', repeated:''}])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const [delegList ,setDelegList] = useState([])
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])
    const [loaderState, setLS] = useState(false)
    L.Icon.Default.mergeOptions(GConf.LeafleftIcon);
    const Photoes = {
        small: [
                [
                    {id: 1, name: '00', value: '00', imgSrc: '00'},
                    {id: 2, name: '01', value: '01', imgSrc: '01'},
                    {id: 3, name: '02', value: '02', imgSrc: '02'}, 
                    {id: 4, name: '03', value: '03', imgSrc: '03'},
                ],[
                    {id: 5, name: '04', value: '04', imgSrc: '04'},
                    {id: 6, name: '05', value: '05', imgSrc: '05'},
                    {id: 7, name: '06', value: '06', imgSrc: '06'},
                    {id: 8, name: '07', value: '07', imgSrc: '07'}, 
                ],[
                    {id: 9, name: '08', value: '08', imgSrc: '08'},
                    {id: 10, name: '09', value: '09', imgSrc: '09'}, 
                    {id: 11, name: '10', value: '10', imgSrc: '10'},
                    {id: 12, name: '11', value: '11', imgSrc: '11'},
                ],[
                    {id: 13, name: '12', value: '12', imgSrc: '12'},
                    {id: 14, name: '13', value: '13', imgSrc: '13'}, 
                    {id: 15, name: '14', value: '14', imgSrc: '14'},
                    {id: 16, name: '15', value: '15', imgSrc: '15'},
                ],[
                    {id: 17, name: '16', value: '16', imgSrc: '16'},
                    {id: 18, name: '17', value: '17', imgSrc: '17'}, 
                    {id: 19, name: '18', value: '18', imgSrc: '18'},
                    {id: 20, name: '19', value: '19', imgSrc: '19'},
                ],[
                    {id: 21, name: '20', value: '20', imgSrc: '20'},
                    {id: 22, name: '21', value: '21', imgSrc: '21'}, 
                    {id: 23, name: '22', value: '22', imgSrc: '22'},
                    {id: 24, name: '23', value: '23', imgSrc: '23'},
                ],[
                    {id: 25, name: '24', value: '24', imgSrc: '24'},
                    {id: 26, name: '25', value: '25', imgSrc: '25'}, 
                    {id: 27, name: '26', value: '26', imgSrc: '26'},
                    {id: 28, name: '27', value: '27', imgSrc: '27'},
                ],[
                    {id: 29, name: '28', value: '28', imgSrc: '28'},
                    {id: 30, name: '29', value: '29', imgSrc: '29'}, 
                    {id: 31, name: '30', value: '30', imgSrc: '30'},
                    {id: 32, name: '31', value: '31', imgSrc: '31'},
                ]
            ],
        large: [
                [
                    {id: 1, name: '00', value: '00', imgSrc: '00'},
                    {id: 2, name: '01', value: '01', imgSrc: '01'},
                    {id: 3, name: '02', value: '02', imgSrc: '02'}, 
                    {id: 4, name: '03', value: '03', imgSrc: '03'},
                    {id: 5, name: '04', value: '04', imgSrc: '04'},
                    {id: 6, name: '05', value: '05', imgSrc: '05'},
                    {id: 7, name: '06', value: '06', imgSrc: '06'},
                    {id: 8, name: '07', value: '07', imgSrc: '07'}, 
                ],[
                    {id: 9, name: '08', value: '08', imgSrc: '08'},
                    {id: 10, name: '09', value: '09', imgSrc: '09'}, 
                    {id: 11, name: '10', value: '10', imgSrc: '10'},
                    {id: 12, name: '11', value: '11', imgSrc: '11'},
                    {id: 13, name: '12', value: '12', imgSrc: '12'},
                    {id: 14, name: '13', value: '13', imgSrc: '13'}, 
                    {id: 15, name: '14', value: '14', imgSrc: '14'},
                    {id: 16, name: '15', value: '15', imgSrc: '15'},
                ],[
                    {id: 17, name: '16', value: '16', imgSrc: '16'},
                    {id: 18, name: '17', value: '17', imgSrc: '17'}, 
                    {id: 19, name: '18', value: '18', imgSrc: '18'},
                    {id: 20, name: '19', value: '19', imgSrc: '19'},
                    {id: 21, name: '20', value: '20', imgSrc: '20'},
                    {id: 22, name: '21', value: '21', imgSrc: '21'}, 
                    {id: 23, name: '22', value: '22', imgSrc: '22'},
                    {id: 24, name: '23', value: '23', imgSrc: '23'},
                ],[
                    {id: 25, name: '24', value: '24', imgSrc: '24'},
                    {id: 26, name: '25', value: '25', imgSrc: '25'}, 
                    {id: 27, name: '26', value: '26', imgSrc: '26'},
                    {id: 28, name: '27', value: '27', imgSrc: '27'},
                    {id: 29, name: '28', value: '28', imgSrc: '28'},
                    {id: 30, name: '29', value: '29', imgSrc: '29'}, 
                    {id: 31, name: '30', value: '30', imgSrc: '30'},
                    {id: 32, name: '31', value: '31', imgSrc: '31'},
                ]
            ]
    }
                
    /*#########################[UseEffect]##################################*/
    useEffect(() => {
        GetPositionNow();
        const UIDisSet = localStorage.getItem('UID');
        if (UIDisSet) {window.location.href = "/Profile/L";}
        
    });

    /*#########################[Functions]##################################*/
    const GetDelegList = (value) =>{
        setGouv(value)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
    }
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

    const checkPhoneExistance = () =>{
        axios.post(`${GConf.ApiProfileLink}/SignUp/checkExistance`, {
            phone : signUpD.Phone,
        }).then(function (response) {
            if(response.data.length  != 0) {
                toast.error(" هذا الرقم موجود !", GConf.TostSuucessGonf)
                setSignUp({...signUpD, Phone: '' })
            }
        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5> مشكل في الاتصال بالانترنت</h5> </div></>, GConf.TostInternetGonf)   
            
            }
          });
    }

    const CheckPasswordFunc = () =>{
        return true
    }

    const SaveFunction = () =>{
        
        if (!signUpD.Name) {toast.error("أدخل  الاسم و اللقب   !", GConf.TostErrorGonf)}
        else if (!signUpD.BirthDay) {toast.error("أدخل تاريخ الميلاد   !", GConf.TostErrorGonf)}
        else if (!signUpD.Phone) {toast.error("أدخل  رقم الهاتف   !", GConf.TostErrorGonf)}
        else if (!signUpD.Gender) {toast.error("أدخل  الجنس   !", GConf.TostErrorGonf)}
        else if (!gouv) {toast.error("أدخل  الولاية   !", GConf.TostErrorGonf)}
        else if (!deleg) {toast.error("أدخل  المنطقة   !", GConf.TostErrorGonf)}
        else if (!isSelected) {toast.error("إختر صورة     !", GConf.TostErrorGonf)}
        else if (!password.Pvalue || !CheckPasswordFunc()) {toast.error("إختر كلمة مرور مقبولة      !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiProfileLink}/SignUp/Save`, {
                signUpD : signUpD,
                gouv:gouv,
                deleg:deleg,
                isSelected:isSelected,
                password: password.Pvalue

            }).then(function (response) {
                if(response.data.Saved == true) {
                        toast.success("تم التسجيل بنجاح !", GConf.TostSuucessGonf)
                        setLS(false)
                        localStorage.setItem('UserData', JSON.stringify(response.data.UserD));
                        localStorage.setItem('UID', response.data.UID);
                        //window.location.href = "/Profile";
                }
                else{
                    toast.error(' لم نتمكن من التسجيل حاول مرة اخري ', GConf.TostSuucessGonf)
                    setLS(false)
                }
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>مشل في الإتصال </h5> </div></>, GConf.TostInternetGonf) 
                  setLS(false)
                  }
              });

        }
    }
    /*#########################[Card]##################################*/
    const TopNavBar = () =>{
        return(<>
                <div className="rounded-0 border-0 p-2 m-0 bg-danger navshad fixed-top" >
                    <div className='row m-0'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
                                <img  className="border-div" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </>)
    }
    

    return ( <>
            <TopNavBar  />
            <Dimmer active={loaderState} page inverted style={{minHeight:'100% !important'}}>
                <Loader inverted> تسجيل حساب جديد </Loader>
            </Dimmer>
             <div className='container d-flex align-items-center justify-content-center' style={{paddingTop:'100px'}}>
                <div className='col-12 col-lg-7' style={{whiteSpace: 'nowrap'}}>
                    <StepWizard >
                            <GeneralData props signUpD={signUpD} setSignUp={setSignUp} checkPhoneExistance={checkPhoneExistance} />
                            <Geolocalization props  delegList={delegList} gouv={gouv} deleg={deleg} setDeleg={setDeleg} setGouv={setGouv} GetDelegList={GetDelegList} myPosition={myPosition} />
                            <SelectPhoto props  Photoes={Photoes} isSelected={isSelected} setisSelected={setisSelected} />
                            <Password props password={password} setPassword={setPassword} SaveFunction={SaveFunction} /> 
                    </StepWizard>
                    
                </div>
            </div>
            
    </> );
}

export default SignUpPage;