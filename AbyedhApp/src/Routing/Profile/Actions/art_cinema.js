import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{       
    return(<>
        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  إسم الفلم</h5>
        <Input className='mb-1' fluid icon='user' placeholder=' إسم الفلم ' value={commandeData.User_Name} onChange={(e) => setCommandeD({...commandeData, User_Name: e.target.value })} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> المخرج </h5>
        <Input className='mb-1' fluid icon='user' placeholder='المخرج  ' value={commandeData.User_Name} onChange={(e) => setCommandeD({...commandeData, User_Name: e.target.value })} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> تاريخ العرض </h5>
        <div className='row mb-0'>
            <div className='col-6'><Input className='mb-2' type='date' fluid alue={commandeData.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-2' type='time' fluid alue={commandeData.time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, time: e.target.value })}  /></div> 
        </div>

        <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات </h5>
        <Form className='mb-1'>
            <TextArea  placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
        </Form>

        <div className='text-end mt-3'>
            <Button className='rounded-pill' onClick={SaveCMDFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل إشتراك  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
        </div>
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    return(<>
        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  إسم الفلم المقترح</h5>
        <Input className='mb-1' fluid icon='user' placeholder=' إسم الفلم المقترح' value={rendyVousD.User_Name} onChange={(e) => setRdvData({...rendyVousD, User_Name: e.target.value })} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> المخرج </h5>
        <Input className='mb-1' fluid icon='user' placeholder='المخرج  ' value={rendyVousD.User_Name} onChange={(e) => setRdvData({...rendyVousD, User_Name: e.target.value })} />

        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> سنة الخروج للعرض  </h5>
        <Input className='mb-1' fluid icon='user' placeholder='سنة الخروج للعرض   ' value={rendyVousD.User_Name} onChange={(e) => setRdvData({...rendyVousD, User_Name: e.target.value })} />


        <h5 className='mb-1 mt-3 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  التاريخ المقترح للعرض  </h5>
        <div className='row mb-0'>
            <div className='col-6'><Input className='mb-2' type='date' fluid alue={rendyVousD.date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, date: e.target.value })}  /></div> 
            <div className='col-6'><Input className='mb-2' type='time' fluid alue={rendyVousD.time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setRdvData({...rendyVousD, time: e.target.value })}  /></div> 
        </div>

        <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات </h5>
        <Form className='mb-1'>
            <TextArea  placeholder='ملاحضات' className='font-droid'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
        </Form>

        <div className='text-end mt-3'>
            <Button className='rounded-pill' onClick={RendyVousFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل الأقتراح  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
        </div>

    </>)
}

function ArtCinemaSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , articles:[]})
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'checkmark box', content:  <span className='me-2'> حجز تذكرة  </span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'> إقتراح عرض فيلم </span> , dir:'rtl' },
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

export default ArtCinemaSpecific;