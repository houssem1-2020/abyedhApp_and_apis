import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dimmer, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';

function DocteurActions(props) {

    /* ############### Const #################*/
    const [rendyVousD, setRdvData] = useState({date:new Date().toISOString().split('T')[0] , time: new Date().toLocaleTimeString('fr-FR')})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)


   /* ############### Functions #################*/
    const saveFunction = () =>{
        
        setLS(true)
        setTimeout(() => {
            setLS(false)
        }, 2000);
        // if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        // else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        // else if (!rendyVousD.time) {toast.error("ادخل الوقت  !", GConf.TostErrorGonf)}
        // else{
        //     setLS(true)
        //     axios.post(`${GConf.ApiLink}/Action/docteur-rdv`, {
        //         UID : props.UID,
        //         PID : props.PID ,
        //         TAG : 'docteur' ,
        //         rendyVousData : rendyVousD,
        //     }).then(function (response) {
        //         toast.success(<><div><h5>تم تسجيل الموعد بنجاح </h5>  </div></>, GConf.TostInternetGonf)
        //         setLS(false)
        //         setDisabledBtn(true)
        //     }).catch((error) => {
        //         if(error.request) {
        //           toast.error(<><div><h5> لم يتم تسجيل الموعد</h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
        //           setLS(false)
        //         }
        //     });
        // } 
        
    }
    

    return ( <>
        <div className='m-0'>
                <h5>تم تأجيل الموعد ليوم {props.requestData.Retarder_Vers} </h5>
                    
                <div className='row'>
                    <div className='col-12'>
                        <Button className='rounded-pill'  size='tiny' onClick={saveFunction} disabled={disabledSaveBtn}  icon  color='green' > <Icon name='save' />    موافق </Button>
                        <Button className='rounded-pill' size='tiny' onClick={saveFunction} disabled={disabledSaveBtn}  icon  color='red' > <Icon name='save' />  غير موافق  </Button>
                    </div>
                    <div className='col-6 d-none'>
                        <Button className='rounded-pill' fluid onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon  color='red' > <Icon name='save' />  غير موافق <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
                <Dimmer active={loaderState} inverted className='border-div'>
                    <Loader inverted> </Loader>
                </Dimmer>
        </div>      
    </> );
}

export default DocteurActions;