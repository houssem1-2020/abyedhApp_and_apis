import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
function ArtMuseeSpecific(props) {
    /* ############### Const #################*/
    const [rendyVousD, setRdvData] = useState({Wanted_Date: new Date().toISOString().split('T')[0], Wanted_Time_From: new Date().toLocaleTimeString('fr-FR'), Wanted_Time_To: new Date().toLocaleTimeString('fr-FR')})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)


   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.Wanted_Date) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Wanted_Time_From) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Wanted_Time_To) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/musee-reserver`, {
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
                <div   dir='rtl' className='card card-body shadow-sm pt-3 border-div'>
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الوقت المطلوب </h5>
                    <small> متي تريد الحضور ؟</small>
                    <div className='row mb-0'>
                        <div className='col-12'><Input className='mb-2' type='date' fluid value={rendyVousD.Wanted_Date}    onChange={(e) => setRdvData({...rendyVousD, Wanted_Date: e.target.value })}  /></div> 
                        <div className='col-6'><small className='ms-2'>من</small><Input className='mb-2' type='time' fluid value={rendyVousD.Wanted_Time_From}    onChange={(e) => setRdvData({...rendyVousD, Wanted_Time_From: e.target.value })}  /></div> 
                        <div className='col-6'><small className='ms-2'>إلي</small><Input className='mb-2' type='time' fluid value={rendyVousD.Wanted_Time_To}   onChange={(e) => setRdvData({...rendyVousD, Wanted_Time_To: e.target.value })}  /></div> 
                    </div>

  
                    <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea className='font-droid' placeholder='ملاحضات'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button fluid className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل موعد  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
        </div>      
    </> );
}

export default ArtMuseeSpecific;