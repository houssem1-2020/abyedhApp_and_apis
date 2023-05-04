import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';

const InscrieCard = ({inscrieD, setInscrieD, SaveInscrie , disabledSaveBtn, tag, loaderState}) =>{
    const genres = [
        { key: 1 , value: 'garde', text: 'محضنة' },
        { key: 2 , value: 'preparation', text: 'تحضيري' },
    ]
    return(<>
            <h5 className='mb-0 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  الإسم و اللقب </h5>
            <small>اسم و لقب صغيرك</small>
            <Input className='mb-3' fluid icon='user' placeholder=' اسم و لقب صغيرك' value={inscrieD.Name} onChange={(e) => setInscrieD({...inscrieD, Name: e.target.value })} />

            <h5 className='mb-1' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  تاريخ الولادة </h5>
            <Input className='mb-3' type='date' fluid  defaultValue={new Date().toISOString().split('T')[0]} value={inscrieD.birthday} onChange={(e) => setInscrieD({...inscrieD, birthday: e.target.value })} />
            
            <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>   نوع التسجيل </h5>

            <Select className='mb-3'  fluid options={genres} onChange={(e, { value }) => setInscrieD({...inscrieD, level: value })} />

            <div className='text-end'>
                <Button className='rounded-pill' disabled={disabledSaveBtn} onClick={SaveInscrie} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل   <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
            </div> 
    </>)
 }
 const SouscrieCard = ({souscrieD, setSouscrieD, SaveSouscrie, disabledSaveBtn, tag, loaderState }) =>{
    return(<>
            <div><small>
                تأكيد الترسيم خاص فقط بالتلاميذ 
                المسجلين من قبل , عند تأكيد الترسيم بإدخال المعرف الذي يمكن 
                أن تطلبة من مدير الروضة سيتم تنبيهه بذلك علي الفور  
            </small></div>
            <h5 className='mb-0 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  الإسم و اللقب </h5>
            <small>اسم و لقب صغيرك</small>
            <Input className='mb-3' fluid icon='user' placeholder='' />

            <h5 className='mb-0 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-calendar2'></span>  تاريخ الموعد </h5>
            <small> متي تريد أن تحجز الموعد ؟</small>
            <Input className='mb-3' type='date' fluid  defaultValue={new Date().toISOString().split('T')[0]} />
            <div className='text-end'>
                <Button className='rounded-pill' disabled={disabledSaveBtn} onClick={SaveSouscrie} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل موعد  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
            </div> 
    </>)
 }

function GarderieActions(props) {
    /* ############### Const #################*/
    const [inscrieD, setInscrieD] = useState([])
    const [souscrieD, setSouscrieD] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'edit outline', content:  <span className='me-2'>تسجيل</span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <InscrieCard inscrieD={inscrieD} setInscrieD={setInscrieD} SaveInscrie={SaveInscrie} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'edit outline', content:  <span className='me-2'>ترسيم</span> , dir:'rtl' },
            render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'><SouscrieCard souscrieD={souscrieD} setSouscrieD={setSouscrieD} SaveSouscrie={SaveSouscrie} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
    ]

    /* ############### UseEffect #################*/

    /* ############### Functions #################*/
    const SaveInscrie = () =>{
        if (!inscrieD.Name) {toast.error("أدخل الاسم و اللقب  !", GConf.TostErrorGonf)}
        else if (!inscrieD.birthday) {toast.error("ادخل تاريخ الميلاد  !", GConf.TostErrorGonf)}
        else if (!inscrieD.level) {toast.error("ادخل المستوي  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/garderie-inscrie`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                inscrieData : inscrieD,
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
    const SaveSouscrie = () =>{
        if (!souscrieD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!souscrieD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/garderie-souscrie`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                souscrieData : souscrieD,
            }).then(function (response) {
                
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    
    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0'>
        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} panes={panes} />
    </div>
        
    </> );
}

export default GarderieActions;