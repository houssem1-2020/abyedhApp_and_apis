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
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)


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
                <div   dir='rtl' className='card card-body shadow-sm pt-5 border-div'>
                    <div className="input-group mb-1">
                    <input type="text" className="form-control" id="reserver-name" dir="rtl" required placeholder="إالاسم و اللقب" />
                    </div>
                    <div className="text-right text-danger mb-1 mr-2"><span>بتاريخ </span></div>
                    <div className="input-group mb-3 float-right">
                    <input type="date" className="form-control" id="reserver-jour" value="<?php echo date('Y-m-d'); ?>" min="2019-01-01" max="2020-12-29" />
                     
                    </div>
                        <div className="input-group mb-1">
                    <textarea type="text" className="form-control"  rows="2" id="reserver-comment" dir="rtl" required placeholder="ملاحضات"></textarea>
                    </div>
                    <input type="hidden" value="<?php echo $PID; ?>" id="reserver-pid" />
                    <div className="text-left">
                        <button className="btn btn-success card-1 btn-sm" id="reserver" >تأكيد <span className="fa fa-check-circle"></span></button>
                        <button className="btn btn-danger card-1 btn-sm close-md" data-dismiss="modal">إلغاء <span className="fa fa-times-circle"></span></button>
                    </div>
                </div>
        </div>      
    </> );
}

export default ArtMuseeSpecific;