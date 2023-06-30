import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';

function PharmacieActions() {
    /* ############### Const #################*/
    let {tag} = useParams()
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const panes = [
        {
          menuItem: { key: 'save', icon: 'calendar alternate', content:  <span className='me-2'>مواعيد</span> , dir:'rtl' },
          render: () => <RendyVousCard />,
        },
        {
            menuItem: { key: 'edit', icon: 'pin', content:  <span className='me-2'>جلسات</span> , dir:'rtl' },
            render: () => <SeancesCard />,
        },
        {
            menuItem: { key: 'oug', icon: 'list alternate outline', content:  <span className='me-2'>Ordonance</span> , dir:'rtl' },
            render: () => <Ordonance />,
        },
      ]

    /* ############### UseEffect #################*/
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
    /* ############### Functions #################*/


    /* ############### Card #################*/
    const SalleAttentCard = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end text-secondary'> قاعة الانتضار</h5> 
                <h1 className='display-1 text-info'>0</h1>
            </div>
        </>)
    }
    const Statistics = () =>{
        return(<>
            <div className='card card-body shadow-sm border-div mb-4 text-center '>
                <h5 className='text-end text-secondary'>  ملخض</h5> 
                <div className='row'>
                    <div className='col-4'>6 <br /> وصفة </div>
                    <div className='col-4 border-start'>5 <br /> موعد</div>
                    <div className='col-4 border-start'>6 <br /> جلسة</div>
                </div>
            </div>
        </>)
    }
    const RendyVousCard = () =>{
        return(<> 
                <TableGrid tableData={[]} columns={['فتح','عدد','يوم']} />
        </>)
    }
    const SeancesCard = () =>{
        return(<>
            <TableGrid tableData={[]} columns={['فتح','عدد','يوم']} />
        </>)
    }
    
    const Ordonance = () =>{
        return(<>
            <TableGrid tableData={[]} columns={['فتح','عدد','يوم']} />
        </>)
    }
    return ( <>
        <div className='row mt-4' >
            <div className='col-12 col-lg-4'> 
                <SalleAttentCard  /> 
                <Statistics />
            </div>
            <div className='col-12 col-lg-8'>  
                <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={panes} />
            </div>
        </div>
        
    </> );
}

export default PharmacieActions;