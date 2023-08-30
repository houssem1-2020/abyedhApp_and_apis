import React ,{useEffect, useState} from 'react';
import { Button, Icon, Input, Loader, Segment } from 'semantic-ui-react';
import GConf from '../AssetsM/generalConf';
import { toast } from 'react-toastify';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function LogInPage() {
    /*#########################[Const]##################################*/
    const [loginD, setLoginD] = useState([])
    const [loaderState, setLS] = useState(false)
    
    /*#########################[UseEffect]##################################*/
    useEffect(() => {
        const UIDisSet = localStorage.getItem('PID');
        if (UIDisSet) {window.location.href = "/App/L";}
        
    });

    /*#########################[Functions]##################################*/
    const logInSystem = () =>{
        if (!loginD.Log) {toast.error("أدخل رقم الهاتف  !", GConf.TostErrorGonf)}
        else if (!loginD.Pwd) {toast.error("أدخل كلمة المرور  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiProfileLink}/LogIn`, {
                tag : GConf.SystemTag,
                LoginData : loginD,
            }).then(function (response) {
                if(response.data.Exist == true) {
                        toast.success("تم التسجيل بنجاح !", GConf.TostSuucessGonf)
                        setLS(false)
                        localStorage.setItem('UserData', JSON.stringify(response.data.UserD));
                        localStorage.setItem('UID', response.data.UserD.UID);
                        window.location.href = "/Profile";
                }
                else{
                    toast.error('هذا الحساب غير موجود ', GConf.TostSuucessGonf)
                    setLS(false)
                }
            })
        } 
    }

    const TopNavBar = () =>{
        return(<>
                <div className="rounded-0 border-0 p-2 m-0 bg-danger navshad" >
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
             <div className='container d-flex align-items-center justify-content-center' style={{paddingTop:'70px'}}>
                <div className='col-12 col-lg-4'>
                <Segment padded className='sub-sys-round text-end' style={{borderTop:`3px solid ${GConf.themeColor}`}}>
                            
                            <br />
                            <div className='mb-3'>
                                <Input   icon='user'  placeholder='رقم الهاتف' className='shadow-sm w-100' onChange={(e) => setLoginD({...loginD, Log: e.target.value })}/>
                            </div>
                            <div className='mb-3'>
                                <Input  icon='key'  placeholder='كلمة المرور' type='password' className='shadow-sm w-100' onChange={(e) => setLoginD({...loginD, Pwd: e.target.value })}/>
                            </div>
                            <div className='mb-3'>
                                <Button onClick={logInSystem}  style={{backgroundColor:GConf.themeColor, color:'white'}} className='shadow-sm w-100 rounded-pill'> دٌخٌولْ <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                            </div>
                            <br />
                            <h5>التَسْجِيلْ مَجَّانِي</h5>
                            <div className='mb-3'>
                                <NavLink exact='true' to='/Profile/signUp'>
                                    <Button  style={{backgroundColor:'white', color:GConf.themeColor}} className='shadow-sm border w-100 rounded-pill'> تَسْجِيلْ حِسَابْ جَدِيدْ</Button>
                                </NavLink>
                            </div>
                            <br />
                            <small>ابيض منصة تونسية نشأت سنة 2018 , تسعي لخلق محيط رقمي شامل</small>
                            <br />
                            <small>التسجيل في أبيض مجاني و سيكون دائما . الحساب قد يساعدك في أيجاد ما تبحث عنه لأداء أنشطتك اليومية</small>

                </Segment>
                </div>
            </div>
            
    </> );
}

export default LogInPage;