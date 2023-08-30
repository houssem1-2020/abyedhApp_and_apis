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
        <div class="input-group mb-1">
          <input type="text" class="form-control" id="demande-name" dir="rtl" required placeholder="الاسم و اللقب" />
        </div>
        <div class="input-group mb-1">
            <input type="text" class="form-control" id="demande-objectif" dir="rtl" required placeholder="موضوع الطلب" />
        </div>
        <div class="input-group mb-1">
            <textarea type="text" class="form-control"  rows="3" id="demande-description" dir="rtl" required placeholder="التفصيل و الملاحضات"></textarea>
        </div>
        <input type="hidden" value="<?php echo $PID; ?>" id="demande-pid" />
        <div class="text-left">
            <button class="btn btn-success card-1 btn-sm" id="demande" >تأكيد <span class="fa fa-check-circle"></span></button>
            <button class="btn btn-danger card-1 btn-sm" data-dismiss="modal">إلغاء <span class="fa fa-times-circle"></span></button>
        </div>
    </>)
}

const RendyVousCard = ({rendyVousD, setRdvData, RendyVousFunc, disabledSaveBtn, tag, loaderState }) =>{
    return(<>
            <div class="input-group mb-1">
                <input type="text" class="form-control" id="emploi-name" dir="rtl" required placeholder="الاسم و اللقب" />
            </div>
            <div class="input-group mb-1">
            <input type="text" class="form-control" id="emploi-age" dir="rtl" required placeholder="العمر" />
            </div>
            <div class="input-group mb-1">
            <input type="text" class="form-control" id="emploi-degree" dir="rtl" required placeholder="لشهادة و الاختصتص" />
            </div>
            <div class="input-group mb-1">
            <input type="text" class="form-control" id="emploi-skills" dir="rtl" required placeholder="الكفاءات" />
            </div>
            <div class="input-group mb-1">
            <textarea type="text" class="form-control"  rows="3" id="emploi-description" dir="rtl" required placeholder="ملاحضات"></textarea>
            </div>
            <input type="hidden" value="<?php echo $PID; ?>" id="emploi-pid" />
            <div class="text-left">
                <button class="btn btn-success card-1 btn-sm" id="emploi" >تأكيد <span class="fa fa-check-circle"></span></button>
                <button class="btn btn-danger card-1 btn-sm" data-dismiss="modal">إلغاء <span class="fa fa-times-circle"></span></button>
            </div> 
    </>)
}

function SociteSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , articles:[]})
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'checkmark box', content:  <span className='me-2'> تسجيل طلب  </span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'>  مطلب شغل  </span> , dir:'rtl' },
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

export default SociteSpecific;