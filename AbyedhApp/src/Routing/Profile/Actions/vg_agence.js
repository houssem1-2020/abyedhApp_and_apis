import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
import WorldMap from '../../../AssetsM/worldMap';
function VgAgenceSpecific(props) {
    /* ############### Const #################*/
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const stayOptions = [
        {key:1, value:'نزل', text:'نزل'},
        {key:2, value:'عند العائلة أول صديق', text:'عند العائلة أول صديق'},
        {key:3, value:'غير محدد', text:'غير محدد'},
    ]
    const transWayptions = [
        {key:1, value:'الجو', text:'الجو'},
        {key:2, value:'البحر', text:'البحر'},
        {key:3, value:'البر', text:'البر'},
    ]
    const transCauseOption = [
        {key:1, value:'سياحة', text:'سياحة'},
        {key:2, value:'عمل', text:'عمل'},
        {key:3, value:'لم شمل عائلة', text:'لم شمل عائلة'},
        {key:4, value:'غير محدد', text:'غير محدد'},
    ]

   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.Coutry) {toast.error("أدخل البلد !", GConf.TostErrorGonf)}
        else if (!rendyVousD.From_Date) {toast.error("ادخل موعد الخروج  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.To_Date) {toast.error("ادخل موعد الرجوع  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Residence) {toast.error("ادخل نوع الأقامة  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Travel_Cause) {toast.error("ادخل سبب السفر  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Travel_Genre) {toast.error("ادخل نوع السفر  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Comment) {toast.error("ادخل التفاصيل  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/agence-service`, {
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
                        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> البلد</h5>
                        <Input list='languages' placeholder='البلد'   onChange={ (e,value) => setRdvData({...rendyVousD, Coutry:e.target.value})} />
                        <datalist id='languages'>
                            {WorldMap.map((data,index) => <option key={index} value={data.text}>{data.text}</option>)}
                        </datalist>
                 
                        <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span>  مدة السفر </h5>
                        <div className='row'>
                            <div className='col-6'><small>من </small><Input className='mb-3' type='date' fluid value={rendyVousD.From_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, From_Date: e.target.value })}  /></div> 
                            <div className='col-6'><small>إلي </small><Input className='mb-3' type='date' fluid value={rendyVousD.To_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, To_Date: e.target.value })}  /></div> 
                            
                        </div>
                        
                        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الإقامة</h5>
                        <Select fluid placeholder=' ' options={stayOptions} onChange={ (e,data) => setRdvData({...rendyVousD, Residence:data.value})} />

                        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> سبب السفر</h5>
                        <Select fluid placeholder=' ' options={transCauseOption} onChange={ (e,data) => setRdvData({...rendyVousD, Travel_Cause:data.value})} />

                        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> السفر عبر </h5>
                        <Select fluid placeholder=' ' options={transWayptions} onChange={ (e,data) => setRdvData({...rendyVousD, Travel_Genre:data.value})} />
                        
                        <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>
                        <Form className='mb-3'>
                            <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
                        </Form>

                        <div className='text-end'>
                            <Button fluid className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل موعد  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                        </div>

                         
                </div>
        </div>      
    </> );
}

export default VgAgenceSpecific;