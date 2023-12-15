import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
//import { io } from "socket.io-client"


function VeterinaireActions(props) {

    /* ############### Const #################*/
     
    const [rendyVousD, setRdvData] = useState({date:new Date().toISOString().split('T')[0] , time: new Date().toLocaleTimeString('fr-FR')})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    //SOket-io : it works cool in localhost but the problem with domaine name 
    // const [notification, setNotification] = useState({message : 'this message', toId: `${props.TAG}-${props.PID}`});
    // const [userId, setUserId] = useState(`USER-${props.UID}`);
    // const socket = io(GConf.SoketLink, { query: { userId: `USER-${props.UID}`, }, });
    // socket.emit('saveRequest', { userId, message: notification });
    //fin socket.io



   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.time) {toast.error("ادخل الوقت  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/veterinaire-rdv`, {
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
    

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-5 border-div'>
                    <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> تشخيص سريع </h5>
                    <small>التشخيص الدقيق لوضك الصحي قد سياعد طبيبك في تقديم العلاج المناسب و الأكثر فاعلية</small> 
                        <Form className='mb-3'>
                            <TextArea   rows={2} value={rendyVousD.comment} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                        </Form>
                    <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span>  تاريخ الموعد </h5>
                    <small> متي تريد أن تحجز الموعد ؟</small>
                        <Input className='mb-3' type='date' fluid alue={rendyVousD.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, date: e.target.value })}  />
                        <Input className='mb-3' type='time' fluid alue={rendyVousD.time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setRdvData({...rendyVousD, time: e.target.value })}  />
                    <div className='text-end'>
                        <Button className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل موعد  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
        </div>      
    </> );
}

export default VeterinaireActions;