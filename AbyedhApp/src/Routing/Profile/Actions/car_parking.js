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
            
            <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع السيارة </h5>
            <Input icon='car'   placeholder=' نوع السيارة' value={commandeData.Car_Name}  onChange={ (e) => setCommandeD({...commandeData, Car_Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mt-3 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  الرقم المنجمي </h5>
            <Input icon='car'   placeholder='الرقم المنجمي' value={commandeData.Car_Matricule}  onChange={ (e) => setCommandeD({...commandeData, Car_Matricule: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  مدة الحجز </h5>
            <small>تاريخ التسلم</small>
            <div className='row mb-0'>
                <div className='col-6'><Input className='mb-2' type='date' fluid alue={commandeData.Depart_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, Depart_Date: e.target.value })}  /></div> 
                <div className='col-6'><Input className='mb-2' type='time' fluid alue={commandeData.Depart_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Depart_Time: e.target.value })}  /></div> 
            </div>
            <small className='mt-0'>تاريخ التسليم</small>
            <div className='row'>
                <div className='col-6'><Input className='mb-2' type='date' fluid alue={commandeData.Finish_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, Finish_Date: e.target.value })}  /></div> 
                <div className='col-6'><Input className='mb-2' type='time' fluid alue={commandeData.Finish_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Finish_Time: e.target.value })}  /></div> 
            </div>
            
            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
            <Form className='mb-3'>
                <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
            </Form>

            <div className='col-12'>
                <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
            </div>
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    const Livraisonoptions = [
        { key: '1', value: 'يومي', text: 'يومي  '  },
        { key: '2', value: 'أسبوعي', text: 'أسبوعي '  },
        { key: '3', value: 'شهري' , text: 'شهري '  }, 
    ]
      return(<>
            <h5 className='mb-0 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع السيارة </h5>
            <Input icon='car'   placeholder=' نوع السيارة' value={rendyVousD.Car_Name}  onChange={ (e) => setRdvData({...rendyVousD, Car_Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mt-3 mb-2' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  الرقم المنجمي </h5>
            <Input icon='car'   placeholder='الرقم المنجمي' value={rendyVousD.Car_Matricule}  onChange={ (e) => setRdvData({...rendyVousD, Car_Matricule: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  وقت الحجز </h5>
            <div className='row mb-0'>
                <div className='col-6'><small> من  </small><Input className='mb-2' type='date' fluid alue={rendyVousD.Depart_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, Depart_Date: e.target.value })}  /></div> 
                <div className='col-6'><small> إلي   </small><Input className='mb-2' type='date' fluid alue={rendyVousD.Finish_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setRdvData({...rendyVousD, Finish_Date: e.target.value })}  /></div> 
            </div>
            
            <h5 className='mb-2 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  نوع الإشتراك   </h5>
            <Select options={Livraisonoptions} fluid placeholder='نوع الإشتراك' className='mb-3' onChange={(e, data) => setRdvData({...rendyVousD, Sous_Genre: data.value })}  />

            <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
            <Form className='mb-3'>
                <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={rendyVousD.Comment} onChange={ (e,value) => setRdvData({...rendyVousD, Comment:e.target.value})} />
            </Form>

            <div className='col-12'>
                <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn}   onClick={RendyVousFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
            </div>
    </>)
}

function CarParkingSpecific(props) {
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
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'> إشتراك</span> , dir:'rtl' },
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
        if (!commandeData.Car_Name  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Car_Matricule  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Depart_Date  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Depart_Time  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Finish_Date  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Finish_Time  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/parking-reserver`, {
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
        if (!rendyVousD.Car_Name) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Car_Matricule) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Depart_Date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Finish_Date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!rendyVousD.Sous_Genre) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            console.log(rendyVousD)
            axios.post(`${GConf.ApiLink}/Action/parking-souscrire`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                commandeD : rendyVousD,
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

export default CarParkingSpecific;