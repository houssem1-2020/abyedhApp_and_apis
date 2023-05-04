import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
function HandmadeElectricienSpecific() {
    /* ############### Const #################*/
    let {tag} = useParams()
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)


    /* ############### UseEffect #################*/
    
    /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/LogIn`, {
                rendyVousData : rendyVousD,
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
    const SalleAttentCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> قاعة الانتضار</h5> 
                <h1 className='display-5 text-info'>0</h1>
            </div>
        </>)
    }
    const RoleTimeEstimateCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end ' style={{color: GConf.ADIL[tag].themeColor}}>  توقع الوقت المتبقي </h5> 
                <h1 className='display-5 text-warning' dir='rtl'>20 دقيقة</h1>
            </div>
        </>)
    }
    const TarifCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> التعريفة </h5> 
                <h1 className='display-1 text-info'></h1>
            </div>
        </>)
    }
    const CertificatCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> الشهائد العلمية </h5> 
                <h1 className='display-1 text-info'></h1>
            </div>
        </>)
    }
    const SimpleCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> إعلانات </h5> 
                <h1 className='display-1 text-info'></h1>
            </div>
        </>)
    }
    return ( <>
        <div className='row mt-4' >
            <div className='col-12 col-lg-4'> <SalleAttentCard  /> <RoleTimeEstimateCard /></div>
            <div className='col-12 col-lg-8'> <TarifCard /> <CertificatCard /></div>
            
        </div>
        
    </> );
}

export default HandmadeElectricienSpecific;