import React, { useEffect, useState } from 'react';
import { Button, Divider, Icon, Input,  Header, Grid, Segment, Loader, Select} from 'semantic-ui-react'
import Bounce from 'react-reveal/Bounce';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate, useParams} from 'react-router-dom';
import APPConf from '../AssetsM/APPConf';
import dirItem from '../../AssetsM/Item'
import GConf from '../../AssetsM/generalConf';
const FackeLogIn = ({tag}) => {
    const [fakePID, setFakePID] = useState(0)
    const AddFakeLogIn = () =>{
        if (fakePID != 0 ) {
            localStorage.setItem('PID', fakePID);
            localStorage.setItem('APP_TAG', tag);
            window.location.href = "/App/S";
        }  
        
    }
    return(<>
        
        <br />
        <br />
        <div className='mb-3'>
            <Input  icon='key' fluid  iconPosition='left' type='number'   className='shadow-sm  '  onChange={(e) => setFakePID(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <Button  fluid onClick={AddFakeLogIn}    className='shadow-sm  '><Icon name='sign in' /> دخول  </Button>
        </div>
    </>)
}
function LogIn() {
    /*#########################[Const]##################################*/
    //const navigate = useNavigate();
    let {tag} = useParams()
    const [loginD, setLoginD] = useState([])
    const [loaderState, setLS] = useState(false)
    const [systemListe, setSystemListe] = useState([])
    const [fakeLoginDisp, setFakeLoginDisp] = useState('none')
  
    const genreOptions = [
        { key: 1 , value: 'Sante', text: 'القطاع الصحي' },
        { key: 2 , value: 'PTVente', text: 'قطاع التجارة' },
        { key: 3 , value: 'Education', text: 'قطاع التعليم' },
        { key: 4 , value: 'Transpo', text: 'قطاع النقل' },
        { key: 5 , value: 'Life', text: 'خدمات حياتية' },
        { key: 6 , value: 'Construct', text: 'قطاع البناء' },
        { key: 7 , value: 'Sport', text: 'قطاع الشباب و الرياضة' },
        { key: 8 , value: 'Other', text: 'قطاعات أخري' },
        
      ]
    
    /*#########################[UseEffect]##################################*/
    useEffect(() => {
        const getPID = APPConf.PID
        if (getPID) {window.location.href = "/S";} 
        else{
            //setLoginD({...loginD, SystemTag: tag })
        }     
         
    });

    /*#########################[Functions]##################################*/
    const logIn = () =>{
        console.log(APPConf.landing[tag].RequestTable)
        if (!loginD.Log) {toast.error("إدخل المعرف !", APPConf.TostErrorGonf)}
        else if (!loginD.Pwd) {toast.error("أدخل كلمة المرور  !", APPConf.TostErrorGonf)}
        else if (!tag) {toast.error("Entrer Le Un Metier  !", APPConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${APPConf.ApiLink}/LogIn`, {
                LoginData : {Log : loginD.Log, Pwd : loginD.Pwd, SystemTag : APPConf.landing[tag].RequestTable }, 
                systemTag : APPConf.systemTag,
            }).then(function (response) {
                if(response.data[0] == 'true') {
                    toast.success("تم التسجيل !", APPConf.TostSuucessGonf)
 
                    localStorage.setItem('PID', response.data[1]);
                    localStorage.setItem('APP_TAG', tag);
                
                    window.location.href = "/App/S";
                }
                else{
                    toast.error('Erreur esseyez de nouveaux', APPConf.TostSuucessGonf)
                    setLS(false)
                }
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, APPConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        }   
    }
    const GetDelegList = (value) =>{
        const adminRecords = Object.keys(APPConf.landing)
            .filter(key => APPConf.landing[key].FavoriteGenre === value)
            .map(key => ({ key: key, value: APPConf.landing[key].RequestTable, text: APPConf.landing[key].directoryTable }));
            setSystemListe(adminRecords);
    }

    const GetSystemKey = (value) =>{
        for (const key in APPConf.landing) {
            if (APPConf.landing[key].RequestTable === value) {
                return key;
            }
        }
    }
    const GetSystemName = (value) =>{
        for (const key in APPConf.landing) {
            if (APPConf.landing[key].RequestTable === value) {
                return key;
            }
        }
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

    /*#########################[Card]##################################*/
    const NavbarCard = () =>{
        return (<>
            <div className="fixed-top">
                <div className="rounded-0 p-3 pb-0 bg-white border-bottom blur-bckg-st">
                    <div className="row">
                        <div className="col-2 col-md-2 mb-3 align-self-center text-left">
                            <NavLink exact="true"  to={'/'}>  
                                <div  className="p-0" style={{width:'17px', height:'35px',}} > <span className='bi bi-arrow-left-short bi-md' ></span> </div>
                            </NavLink> 
                        </div>
                        
                        <div className="col-10 col-md-10  mb-3  align-self-center text-center">
                            <h3 className='text-center' dir='rtl' style={{color: '#7e7f80'}}>  {findElementByLink(tag)} </h3>
                        </div>
            
                    </div>
                </div>
            </div>
        </>);
    }
    return (<> 
        {/* <LeftCard color={APPConf.themeColor}/> */}
        <NavbarCard /> 
        <br /> 
        <br /> 
        <div className='row m-0'>
            <div className='col-12  col-lg-4'></div>
            <div className='col-12  col-lg-4'>
                <div className='card-body mt-4' >
                        <br />
                        <div className='card p-2 shadow-sm border-div mb-4 text-center'><h3 style={{color:APPConf.landing[tag].colorTheme}}><span className='check-all'></span> {GConf.ADIL[tag].systemName} <br /> (<small className='text-secondary'> <small>النسخة المصغرة </small></small>)</h3></div>
                        <h2 className='text-end mt-5' dir='rtl'><Icon name='linkify' onClick={() => setFakeLoginDisp('block')} /> تسجيل الدخول :</h2>
                        <div className='mb-3'>
                            <Input   icon='user'  fluid iconPosition='left' placeholder='المعرف' className='shadow-sm  '  onChange={(e) => setLoginD({...loginD, Log: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <Input  icon='key' fluid  iconPosition='left' placeholder='كلمة المرور' type='password' className='shadow-sm  '  onChange={(e) => setLoginD({...loginD, Pwd: e.target.value })}/>
                        </div>
                        <div className='mb-3'>
                            <Button  fluid onClick={logIn}  style={{backgroundColor: APPConf.landing[tag].colorTheme, color:'white'}} className='shadow-sm  '><Icon name='sign in' /> دخول <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <div className='' dir='rtl'>
                            {localStorage.getItem('AddToDirectory') ? 
                            <h5 className='mb-0 text-warning  '> *  جاري عملية التسجيل , يمكنك المتابعة من <NavLink exact='true' to={`/S/I/user/docteur`}>   هنا </NavLink>  </h5>
                            : 
                            <h5 className='mb-0 text-secondary'> *   إذا لم تكن تملك حساب,  قم بتسجيل  الإشتراك في النظام من <NavLink exact='true' to={`/S/I/add/${tag}`}>   هنا </NavLink>  </h5> 
                            }
                             
                            
                        </div>
                               
                        {/* </Bounce> */}
                        <div style={{display: fakeLoginDisp}}><FackeLogIn tag={tag}/></div>
                </div>
            </div>
        </div> 
    </>);
}

export default LogIn;