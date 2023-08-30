import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';

function AutoEcoleSpecific(props) {
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
                        <div class="text-right text-danger mb-1 mr-2">  الصنف المطلوب <span class="fa fa-star"></span></div>
                        <div class="input-group mb-1">
                        <select class="form-control" id="inscrie-type" dir="rtl" required >
                            <option value="A1">صنف أ1</option>
                            <option value="A">صنف أ</option>
                            <option value="BH">صنف ب + هـ</option>
                            <option value="G">صنف ب</option>
                            <option value="GH">صنف ج + هـ</option>
                            <option value="D">صنف د</option>
                            <option value="DH">صنف د + هـ</option>
                            <option value="D1">صنف د1</option>
                            <option value="K">صنف ح</option>
                        </select>
                        </div>
                        <div class="text-right text-danger mb-1">تاريخ البدأ <span class="fa fa-calendar"></span></div>
                        <div class="input-group mb-3 float-right">
                        <input type="date" class="form-control" id="inscrie-start" value="<?php echo date('Y-m-d'); ?>" min="<?php echo date('Y-m-d'); ?>" /> 
                        </div>
                        <div class="text-right"><span class=" text-danger"> ملاحضات <span class="fa fa-comments"></span></span><br />
                        <small class="small text-right text-secondary">هل أنت متعود علي السياقة من قبل ؟</small>
                        </div>
                        <div class="input-group mb-4">
                        <textarea type="text" class="form-control"  rows="2" id="inscrie-comment" dir="rtl" required placeholder="ملاحضات"></textarea>
                        </div>
                        <div class="text-left">
                            <button class="btn btn-success card-1 btn-md" id="inscrie" >تأكيد <span class="fa fa-check-circle"></span></button>
                        </div>
                </div>
        </div>      
    </> );
}

export default AutoEcoleSpecific;