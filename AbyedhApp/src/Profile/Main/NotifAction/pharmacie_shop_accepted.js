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
                <p>تم قبول  طلب شراء الأدوية من صيدلية  {props.pidData.Name} تم تحديد المجموع بـ : {props.requestData.Totale} د.ت </p>
                    
                <div className='row'>
                    <div className='col-12'>
                        <Button className='rounded-pill text-success'  size='tiny' onClick={saveFunction} disabled={disabledSaveBtn}  icon   > <Icon name='check' />    تأكيد </Button>
                        <Button className='rounded-pill text-danger' size='tiny' onClick={saveFunction} disabled={disabledSaveBtn}  icon   > <Icon name='times' />  إلغاء الطلب </Button>
                    </div>
                </div>
                <Dimmer active={loaderState} inverted className='border-div'>
                    <Loader inverted> </Loader>
                </Dimmer>
        </div>      
    </> );
}

export default DocteurActions;