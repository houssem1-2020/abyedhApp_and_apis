import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{       
    const serviceOptions = [
        {key:1, value:'A1', text:'كامل الوجبات'},
        {key:2, value:'A', text:'فطور الصباح فقط'},
        {key:3, value:'BH', text:'وجبة الغداء فقط'},
        {key:4, value:'G', text:'وجبة العشاء فقط'},
        {key:5, value:'GH', text:'وجبتين في اليوم'},
    ]
    const LitOptions = [
        {key:1, value:'A1', text:'سرير لشخص'},
        {key:2, value:'A', text:'سرير لشخصين '},
        {key:3, value:'A2', text:'سرير لطفل '},
         
    ]
    const reservationOptions = [
        {key:1, value:'A1', text:'عائلي'},
        {key:2, value:'A', text:'عمل'},
        {key:3, value:'BH', text:'أصدقاء'},
        {key:4, value:'G', text:'غير محدد'},
         
    ]
    return(<>
        <h5 className='mb-0 mt-0' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  مدة الحجز </h5>
        <small>من </small>
        <div className='row'>
            <div className='col-6'><Input className='mb-3' type='date' fluid alue={commandeData.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-3' type='time' fluid alue={commandeData.time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, time: e.target.value })}  /></div> 
        </div>
        <small> إلي </small>
        <div className='row'>
            <div className='col-6'><Input className='mb-3' type='date' fluid alue={commandeData.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-3' type='time' fluid alue={commandeData.time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, time: e.target.value })}  /></div> 
        </div>

        <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الغرفة </h5>
        <small>  إختر نوع الغرفة التي تريد جحزها  </small> 
        <Select fluid placeholder='نوع الغرفة' options={LitOptions} onChange={ (e,value) => setCommandeD({...commandeData, comment:e.target.value})} />

        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> الوجبات </h5>
        <Select  fluid placeholder=' الوجبات ' options={serviceOptions} onChange={ (e,value) => setCommandeD({...commandeData, comment:e.target.value})} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> عدد الأفراد معك </h5>
        <Input className='mb-1' fluid icon='user' type='number' placeholder='عدد الأفراد معك ' value={commandeData.User_Name} onChange={(e) => setCommandeD({...commandeData, User_Name: e.target.value })} />

        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الحجز </h5>
        <Select fluid placeholder=' نوع الحجز ' options={reservationOptions} onChange={ (e,value) => setCommandeD({...commandeData, comment:e.target.value})} />


        <h5 className='mb-0 mt-1' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>
        <Form className='mb-3'>
            <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.comment} onChange={ (e,value) => setCommandeD({...commandeData, comment:e.target.value})} />
        </Form>

        <div className='text-end'>
            <Button className='rounded-pill' onClick={SaveCMDFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل الحجز  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
        </div>
 
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    const reservationOptions = [
        {key:1, value:'A1', text:'طلب وجبة'},
        {key:2, value:'A', text:'طلب عامل'},
        {key:3, value:'BH', text:'صيانة سريعة'},
        {key:4, value:'G', text:'غير محدد'},
         
    ]
    
    return(<>
            <h5 className='mb-0 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> رمز الحجز </h5>
            <small>سيتم آليا رفض رقم الحجز الخاطئ</small>
            <Input className='mb-1' fluid icon='user' type='number'  placeholder='رمز الحجز' value={rendyVousD.User_Name} onChange={(e) => setRdvData({...rendyVousD, User_Name: e.target.value })} />

            <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  رقم الغرفة </h5>
            <Input className='mb-1' fluid icon='user'   placeholder=' رقم الغرفة ' value={rendyVousD.User_Name} onChange={(e) => setRdvData({...rendyVousD, User_Name: e.target.value })} />

            <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الطلب </h5>
            <Select fluid placeholder=' نوع الطلب ' options={reservationOptions} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />

            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات و تفاصيل   </h5>
            <Form className='mb-3'>
                <TextArea placeholder=' ملاحضات و تفاصيل' className='font-droid'  rows={2} value={rendyVousD.comment} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
            </Form>

            <div className='text-end'>
                <Button className='rounded-pill' onClick={RendyVousFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل الطلب  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
            </div>

  
    </>)
}

function HotelsSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , articles:[]})
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'checkmark box', content:  <span className='me-2'> حجز </span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'> طلب خدمة</span> , dir:'rtl' },
            render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'><RendyVousCard rendyVousD={rendyVousD} setRdvData={setRdvData} RendyVousFunc={RendyVousFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
    ]

    

    /* ############### UseEffect #################*/
    useEffect(() => {
            // axios.post(`${GConf.ApiLink}/camions`, {PID :props.PID})
            // .then(function (response) {
            //     //let ClientLN = []
            //     //response.data.map( (dta) => {ClientLN.push({value : dta.Cam_ID, text : <>{dta.Cam_Name} : {dta.Matricule} - {dta.Chauffeur}</>, key: dta.PK})})
            //     //setCamionList(ClientLN)
            // })
    }, [])

    /* ############### Functions #################*/
    const SaveCMDFunc = () =>{
        if (commandeData.articles.length == 0 ) {toast.error("أدخل  منتجات   !", GConf.TostErrorGonf)}
        else if (!commandeData.Wanted_Day  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/pharmacie-shop`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                commandeD : commandeData,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const RendyVousFunc = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            console.log(rendyVousD)
            axios.post(`${GConf.ApiLink}/Action/pharmacie-rdv`, {
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
    
    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0'>
        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={panes} />
    </div>
        
    </> );
}

export default HotelsSpecific;