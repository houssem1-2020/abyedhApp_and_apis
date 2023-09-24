import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
function ComptableSpecific(props) {
    /* ############### Const #################*/
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const stayOptions = [
        {key:1, value:'مراجعة الحسابات', text:'مراجعة الحسابات'},
        {key:2, value:'إعداد البيانات المالية', text:'إعداد البيانات المالية'},
        {key:3, value:'تحليل الأداء المالي', text:'تحليل الأداء المالي'},
        {key:4, value:'إعداد الإقرارات الضريبية', text:'إعداد الإقرارات الضريبية'},
        {key:5, value:'تخطيط وإعداد الميزانيات', text:'تخطيط وإعداد الميزانيات'},
        {key:6, value:'إعداد التقارير المالية للجهات الخارجية', text:'إعداد التقارير المالية للجهات الخارجية'},
        {key:7, value:'غير محدد', text:'غير محدد'},
    ]

   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/docteur-rdv`, {
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
                    <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> سبب الطلب</h5>
                    <Select fluid placeholder=' ' options={stayOptions} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />

                    <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span> للفترة الزمنية  </h5>
                    <div className='row'>
                        <div className='col-6'><small>من </small><Input className='mb-3' type='date' fluid alue={rendyVousD.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, date: e.target.value })}  /></div> 
                        <div className='col-6'><small>إلي </small><Input className='mb-3' type='date' fluid alue={rendyVousD.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, date: e.target.value })}  /></div>  
                    </div>

                    <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>
                    <Form className='mb-3'>
                        <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={rendyVousD.comment} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل طلب  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
           
                </div>      
        </div>      
    </> );
}

export default ComptableSpecific;