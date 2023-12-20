import React, {useEffect,useState}  from 'react';
import GConf from '../../AssetsM/APPConf';
import ADIL from '../../AssetsM/APPITEM';
import { Button, Icon, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { toast } from 'react-toastify';



function RequestPage() {
    /*#########################[Const]##################################*/
    let [requestToSystem, setRequestToSystem] = useState({Req_State : 'W'})
    let [pWD, setPWD] = useState({Identification:'', PasswordSalt:''})
    let [loaderState, setLoading] = useState(false)
    let [savedBtn, setSavedBtn] = useState(false)
    let [loading, setLoad] = useState(true)

    /*#########################[UseEfeect]##############################*/
    useEffect(() => {
        GetPWD()
        axios.post(`${GConf.ApiLink}/system/request`, {
           PID : GConf.PID,
           SystemTag : 'TAG'
        })
        .then(function (response) {
            setRequestToSystem(response.data)
            setLoad(false)
        }).catch((error) => {
          if(error.request) {
            toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, GConf.TostInternetGonf)   
            setRequestToSystem([])
          }
        });
    }, [])
    /*#########################[Function]###############################*/
    const RemoveToday = () =>{
        localStorage.setItem('removedCard', new Date().toLocaleDateString('fr-FR'));
        window.location.reload()
    }
    const RequestSystem = () => {
        setLoading(true)
        axios.post(`${GConf.ApiLink}/system/request/add`, {
            PID : GConf.PID,
            SystemTag : 'TAG'
         })
         .then(function (response) {
            setSavedBtn(true)
            setLoading(false)
            window.location.reload()
         }).catch((error) => {
           if(error.request) {
             toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, GConf.TostInternetGonf)   
              
           }
         });
    }
    const GetPWD = () => {
        axios.post(`${GConf.ApiLink}/system/request/getpwd`, {
            PID : GConf.PID,
            SystemTag : GConf.systemTag
         })
         .then(function (response) {
              setPWD(response.data)
         }).catch((error) => {
           if(error.request) {
             toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, GConf.TostInternetGonf)   
              
           }
         });
    }
    /*#########################[Card]##################################*/
    const RequestSaved = (props) =>{
        return(<>
            <br />
            <br />
            <div className='text-warning text-center mb-4'>
                <h3>جاري عملية التسجيل للحصول علي نظام ... </h3>
            </div>
        </>)
    }
    const RequestAccepted = (props) =>{
        return(<>
            <br />
            <br />
            <div className='card card-body border-div shadow-sm mb-4 '>
                <h3 className='text-success text-center '> مبروك  لقد تحصلت علي النظام </h3>
                <b>إضغط علي الرابط  للتحول للنظام     </b>
                <div>معرف الدخول : {pWD.Identification}</div>
                <div> كلمة المرور: {pWD.PasswordSalt}</div>
                <br />
                <Button fluid size='large' className='border-div' href={GConf.landing[GConf.systemTag].systemUrl}> رابط النظام <Icon name='desktop' /></Button>
                <br />

            </div>
        </>)
    }
    const PleaseSignUp = (props) =>{
        return(<>
             <br />
                <div className='card card-body border-div mt-4 text-center '>
                    <h3 className='text-danger'>إشترك الآن و أحصل علي 15 يوم مجاني لتجرب النظام</h3>  
                </div>
                <br />
                <br />
                <Button style={{backgroundColor: GConf.landing[GConf.systemTag].colorTheme}} fluid size='large' disabled={savedBtn} className='border-div text-white' onClick={() => RequestSystem()}> <Loader active={loaderState}    inline size='tiny' className='ms-2'/> تسجيل طلب الإشتراك </Button>
                <br />
                <br />
                {/* <div className='mb-0'><small>سعر الأشتراك السنوي : 500 د.ت</small></div> */}
        </>)
    }
    
    return (<>
             <div className=' ' dir='rtl'>
                {
                    loading ? 
                    <div className="loader-container">
                        <div className="loader-small"></div>
                    </div>

                    : 
                    <>
                        <h2 className='text-center' style={{color: GConf.landing[GConf.systemTag].colorTheme}}>{GConf.landing[GConf.systemTag].systemTitle}</h2>
                        {/* <h4>{GConf.landing[GConf.systemTag].adsText}</h4>  */}
                        <h4 className='text-secondary'>النسخة الكاملة لــ{GConf.landing[GConf.systemTag].systemTitle} تساعدك علي رقمنة نشاطك المهني , حيث تمكنك من  : </h4> 
                        <br />
                        <div className='text-secondary me-2 '>
                            {GConf.landing[GConf.systemTag].systemPos.map((data,index) => 
                            <div key={index} className='mb-3'><h5 className='mb-0'><span className={`bi bi-asterisk bi-xsm`}></span> {data.posName}</h5></div> 
                            )}
                        </div>
                        <br />
                        <div className='card card-body border-div mb-4 ' style={{backgroundColor :'#e0e0e0'}}> 
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                        </div>
                        {/* <iframe
                            width="100%" height="250"
                            src={`https://www.youtube.com/embed/${GConf.landing[GConf.systemTag].systemVideoId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe> */}
                        
                        {requestToSystem.length == 0 ? <PleaseSignUp /> : '' }
                        {requestToSystem.Req_State  &&  requestToSystem.Req_State  == 'W' ? <RequestSaved /> : '' }
                        {requestToSystem.Req_State  &&  requestToSystem.Req_State  == 'A' ? <RequestAccepted /> : '' }
                        
                    </>
                }
                
             </div>
            
    </>);
}

export default RequestPage;