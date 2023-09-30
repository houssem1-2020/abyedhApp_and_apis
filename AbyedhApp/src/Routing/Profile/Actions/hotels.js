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
        {key:1, value:'كامل الوجبات', text:'كامل الوجبات'},
        {key:2, value:'فطور الصباح فقط', text:'فطور الصباح فقط'},
        {key:3, value:'وجبة الغداء فقط', text:'وجبة الغداء فقط'},
        {key:4, value:'وجبة العشاء فقط', text:'وجبة العشاء فقط'},
        {key:5, value:'وجبتين في اليوم', text:'وجبتين في اليوم'},
    ]
    const LitOptions = [
        {key:1, value:'سرير لشخص', text:'سرير لشخص'},
        {key:2, value:'سرير لشخصين ', text:'سرير لشخصين '},
        {key:3, value:'سرير لطفل ', text:'سرير لطفل '},
         
    ]
    const reservationOptions = [
        {key:1, value:'عائلي', text:'عائلي'},
        {key:2, value:'عمل', text:'عمل'},
        {key:3, value:'أصدقاء', text:'أصدقاء'},
        {key:4, value:'غير محدد', text:'غير محدد'},
         
    ]
    return(<>
        <h5 className='mb-0 mt-0' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  مدة الحجز </h5>
        <small>من </small>
        <div className='row'>
            <div className='col-6'><Input className='mb-3' type='date' fluid value={commandeData.From_Date}   onChange={(e) => setCommandeD({...commandeData, From_Date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-3' type='time' fluid value={commandeData.From_Time}   onChange={(e) => setCommandeD({...commandeData, From_Time: e.target.value })}  /></div> 
        </div>
        <small> إلي </small>
        <div className='row'>
            <div className='col-6'><Input className='mb-3' type='date' fluid value={commandeData.To_Date}   onChange={(e) => setCommandeD({...commandeData, To_Date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-3' type='time' fluid value={commandeData.To_Time}   onChange={(e) => setCommandeD({...commandeData, To_Time: e.target.value })}  /></div> 
        </div>

        <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الغرفة </h5>
        <small>  إختر نوع الغرفة التي تريد جحزها  </small> 
        <Select fluid placeholder='نوع الغرفة' options={LitOptions} onChange={ (e,data) => setCommandeD({...commandeData, Room_Genre:data.value})} />

        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> الوجبات </h5>
        <Select  fluid placeholder=' الوجبات ' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Repas_Choise:data.value})} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> عدد الأفراد معك </h5>
        <Input className='mb-1' fluid icon='user' type='number' placeholder='عدد الأفراد معك ' value={commandeData.Total_Number} onChange={(e) => setCommandeD({...commandeData, Total_Number: e.target.value })} />

        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الحجز </h5>
        <Select fluid placeholder=' نوع الحجز ' options={reservationOptions} onChange={ (e,data) => setCommandeD({...commandeData, Res_Genre:data.value})} />


        <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>
        <Form className='mb-3'>
            <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
        </Form>

        <div className='text-end'>
            <Button fluid className='rounded-pill' onClick={SaveCMDFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل الحجز  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
        </div>
 
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    const reservationOptions = [
        {key:1, value:'طلب وجبة', text:'طلب وجبة'},
        {key:2, value:'طلب عامل', text:'طلب عامل'},
        {key:3, value:'صيانة سريعة', text:'صيانة سريعة'},
        {key:4, value:'غير محدد', text:'غير محدد'},
         
    ]
    
    return(<>
            <h5 className='mb-0 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> رمز الحجز </h5>
            <small>سيتم آليا رفض رقم الحجز الخاطئ</small>
            <Input className='mb-1' fluid icon='user' type='number'  placeholder='رمز الحجز' value={rendyVousD.Res_Code} onChange={(e) => setRdvData({...rendyVousD, Res_Code: e.target.value })} />

            <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  رقم الغرفة </h5>
            <Input className='mb-1' fluid icon='user'   placeholder=' رقم الغرفة ' value={rendyVousD.Room_Num} onChange={(e) => setRdvData({...rendyVousD, Room_Num: e.target.value })} />

            <h5 className='mb-1 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الطلب </h5>
            <Select fluid placeholder=' نوع الطلب ' options={reservationOptions} onChange={ (e,data) => setRdvData({...rendyVousD, Req_Genre: data.value})} />

            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات و تفاصيل   </h5>
            <Form className='mb-3'>
                <TextArea placeholder=' ملاحضات و تفاصيل' className='font-droid'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
            </Form>

            <div className='text-end'>
                <Button fluid className='rounded-pill' onClick={RendyVousFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل الطلب  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
            </div>

  
    </>)
}

function HotelsSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({From_Date: new Date().toISOString().split('T')[0] , From_Time: new Date().toLocaleTimeString('fr-FR') , To_Date: new Date().toISOString().split('T')[0] , To_Time: new Date().toLocaleTimeString('fr-FR')})
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
        if (!commandeData.From_Date ) {toast.error("أدخل  يوم بدلية الحجز   !", GConf.TostErrorGonf)}
        else if (!commandeData.From_Time  ) {toast.error("أدخل  وقت بداية الحجز   !", GConf.TostErrorGonf)}
        else if (!commandeData.To_Date  ) {toast.error("أدخل  يوم إنتهاء الحجز   !", GConf.TostErrorGonf)}
        else if (!commandeData.To_Time  ) {toast.error("أدخل  وقت إنتهاء الحجز   !", GConf.TostErrorGonf)}
        else if (!commandeData.Room_Genre  ) {toast.error("أدخل  نوع الغرفة   !", GConf.TostErrorGonf)}
        else if (!commandeData.Repas_Choise  ) {toast.error("أدخل  إختيار الوجبات   !", GConf.TostErrorGonf)}
        else if (!commandeData.Total_Number  ) {toast.error("أدخل  عدد الأفراد الجملي   !", GConf.TostErrorGonf)}
        else if (!commandeData.Res_Genre  ) {toast.error("أدخل  نوع الحجز   !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/hotels-reserver`, {
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
        if (!rendyVousD.Res_Code) {toast.error("أدخل رمز الحجز !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Room_Num) {toast.error("ادخل رقم الغرفة  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Req_Genre) {toast.error("ادخل نوع الطلب  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Comment) {toast.error("ادخل التفاصيل  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            console.log(rendyVousD)
            axios.post(`${GConf.ApiLink}/Action/hotels-service`, {
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