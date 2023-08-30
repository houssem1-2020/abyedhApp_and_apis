import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';
function AdminSScbSpecific() {
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
                    <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>  أوقات الزيارة</h5> 
                    <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-clock-history bi-lg'></span></h1>
                </div>
            </>)
        }
        const RoleTimeEstimateCard = () =>{
            return(<>
                <div className='card card-body shadow-sm border-div mb-4 text-center '>
                    <h5 className='text-end ' style={{color: GConf.ADIL[tag].themeColor}}>  قسم الإستعجالي </h5> 
                    <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-lightning-fill bi-lg'></span></h1>
                </div>
            </>)
        }
        const TarifCard = () =>{
            return(<>
                <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                    <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> الأقسام  </h5> 
                    <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-grid-1x2 bi-lg'></span></h1>
                </div>
            </>)
        }
        const CertificatCard = () =>{
            return(<>
                <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                    <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>  الأدارة </h5> 
                    <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-hospital bi-lg'></span></h1>
                </div>
            </>)
        }
        const SimpleCard = () =>{
            return(<>
                <div className='card card-body shadow-sm border-div mb-4 text-center  '>
                    <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>  التلقيح  </h5> 
                    <h1 className='display-1' style={{color: GConf.ADIL[tag].themeColor}}><span className='bi bi-capsule-pill bi-lg'></span></h1>
                </div>
            </>)
        }
    return ( <>
        <div className='row mt-4' >
            <div className='col-12 col-lg-5'> <SalleAttentCard  /> <RoleTimeEstimateCard /></div>
            <div className='col-12 col-lg-7'> <TarifCard /> <CertificatCard /> <SimpleCard /> </div>
            
        </div>
        
    </> );
}

export default AdminSScbSpecific;