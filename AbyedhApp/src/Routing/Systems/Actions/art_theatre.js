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
        <div className="text-right text-danger mb-1 mr-2"> إسم الفلم <span className="fa fa-star"></span></div>
        <div className="input-group mb-1">
            <input type="text" className="form-control" id="reserver-movie" dir="rtl" required placeholder="إسم الفلم " />
        </div>
        <div className="text-right text-danger mb-1 mr-2"> تاريخ العرض <span className="fa fa-calendar"></span></div>
        <div className="input-group mb-1">
            <input type="date" className="form-control" id="reserver-id" dir="rtl" required value="<?php echo date('Y-m-d'); ?>" min="<?php echo date('Y-m-d'); ?>" />
        </div>
        <div className="text-right text-danger mb-1 mr-2"> ملاحضات <span className="fa fa-comments"></span></div>
        <div className="input-group mb-3">
            <textarea type="text" className="form-control"  rows="2" id="reserver-comment" dir="rtl" required placeholder="ملاحضات"></textarea>
        </div>
        <div className="text-left">
            <button className="btn btn-success card-1 btn-md" id="reserver" >تأكيد <span className="fa fa-check-circle"></span></button>
        </div>
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    return(<>
            <div className="text-right text-danger mb-1 mr-2"> إسم الفلم المقترح +  إسم المخرج<span className="fa fa-star"></span></div>
            <div className="input-group mb-1">
                <input type="text" className="form-control" id="avis-name" dir="rtl" required />
            </div>
            <div className="text-right text-danger mb-1 mr-2"> سنة الخروج للعرض <span className="fa fa-calendar"></span></div>
            <div className="input-group mb-1">
                <input type="date" className="form-control" id="avis-annee" dir="rtl" value="<?php echo date('Y-m-d'); ?>" required />
            </div>
            <div className="text-right text-danger mb-1 mr-2"> التاريخ المقترح للعرض <span className="fa fa-calendar"></span></div>
            <div className="input-group mb-1 float-right">
                <input type="date" className="form-control" id="avis-jour" value="<?php echo date('Y-m-d'); ?>" min="<?php echo date('Y-m-d'); ?>" /> 
            </div>
            <div className="text-right text-danger mb-1 mr-2"> ملاحضات <span className="fa fa-comments"></span></div>
            <div className="input-group mb-3">
                <textarea type="text" className="form-control"  rows="2" id="avis-comment" dir="rtl" required placeholder="ملاحضات"></textarea>
            </div>
            <input type="hidden" value="<?php echo $PID; ?>" id="avis-pid" />
            <div className="text-left">
                <button className="btn btn-success card-1 btn-md" id="avis" >تأكيد <span className="fa fa-check-circle"></span></button>
            </div> 
    </>)
}

function ArtTheatreSpecific(props) {
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

export default ArtTheatreSpecific;