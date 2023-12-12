import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Icon, Input, Select } from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';
import axios from 'axios';
import { toast } from 'react-toastify';

function MetroData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : 'dansGouv', depart:'' , Arrivee:''})
    const [tripsListe, setTripsListe] = useState([])
    const [louageListe, setLouageListe] = useState([])
    const [delegationListe, setDelegationListe] = useState([])


    /*##################[UseEffect]################### */
   
    /*#################[Function]#################### */
    const SetSelctedGouv = (value) =>{
        setTargetTripData({...targetTrip, Genre: value })
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegationListe(found)
    }
     
    const SearchFunction = () =>{
        const found = GConf.abyedhMap.DelegData.filter(element => element.Name === targetTrip.Arrivee)
        const foundLocalite = GConf.abyedhMap.Localite.filter(element => element.Code === found[0].PostalCode)
        let rendredTable = []
        foundLocalite.map((data,index) => {
            let arrayToAdd = {id: index + 1 , text: data.Localite, value: data.Deleg}
            rendredTable.push(arrayToAdd)
        })
        setTripsListe(rendredTable)
    }
    const GetLouage = () =>{
        axios.post(`${GConf.ApiToolsLink}/Louage/select`, {
            depart : targetTrip.depart,
            Arrivee : targetTrip.depart,
            Genre : 'dansGouv'
        })
        .then(function (response) {
            setLouageListe(response.data)

        }).catch((error) => {
            if(error.request) {
            toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
            }
        });
    }
    const ReserverPlace = () =>{
        alert('Place !')
    }
    
    /*####################[Crad]###################### */

    return ( <>
        
        <div className="row p-1">
            <div className="col-12 col-lg-3 ">
                <div className='card card-body border-div shadow-sm mb-4'>
                    <h6 className='mb-1 text-end'>    ولاية الإنطلاق <span className='bi bi-person-x-fill'></span> </h6>
                    <Input list='languages' className='mb-2' fluid options={GConf.abyedhMap.Gouv} onChange={(e, { value }) => SetSelctedGouv(value)} />
                    <datalist id='languages'>
                        {GConf.abyedhMap.Gouv.map((data,index) => <option key={index} value={data.text}>{data.text}</option>)}
                    </datalist>
                    <h6 className='mb-1 text-end'>    الأنطلاق   <span className='bi bi-person-x-fill'></span> </h6>
                    <Input list='delegation' className='mb-2' fluid options={delegationListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Arrivee: value })} />
                    <datalist id='delegation'>
                        {delegationListe.map((data,index) => <option key={index} value={data.text}>{data.text}</option>)}
                    </datalist>                  
                    <div className='text-center mt-4'>
                        <Button fluid onClick={ (e) => SearchFunction()} className='rounded-pill' icon> <Icon name='search' /> حجز مكان  </Button>    
                    </div>
                </div>
            </div> 
            <div className="col-12 col-lg-9   ">
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className='card card-body border-div shadow-sm mb-4' style={{maxHeight :'390px', overflowX: 'auto'}}>
                            <h5 className='text-end text-secondary'>جميع الخطوط</h5>
                            <div className="table-responsive" dir="rtl">
                                <table className="table table-hover" >
                                    <thead>
                                        <tr className='text-nowrap'>
                                            <td>الانطلاق</td>
                                            <td>الوصول</td>
                                            <td>التسعيرة</td>
                                            <td>عبر</td>
                                            <td>عدد الرخص</td>
                                            <td> إختيار</td>
                                        </tr>
                                    </thead>
                                    <tbody>                                    
                                        {tripsListe.length == 0 ? <tr><td></td></tr> : 
                                        <>
                                            {tripsListe.map((data,index) => 
                                                <tr className='text-nowrap' key={index} onClick={() => GetLouage(data.trip_ID)} style={{cursor:'pointer'}} >
                                                    <td>{data.value}</td>
                                                    <td>{data.text}</td>
                                                    <td>0.000</td>
                                                    {/* <td>{parseFloat(data.Price.replace(',', '.')).toFixed(3)}</td> */}
                                                    <td>{data.Description}</td>
                                                    <td>0</td>
                                                    <td><Button icon size='tiny' className='rounded-circle'><Icon name='eye' /></Button></td>
                                                </tr>
                                            )}
                                        </>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='card card-body border-div shadow-sm mb-4'>
                            <h5 className='text-end text-secondary'>الرحلات</h5>
                            <div className="table-responsive" dir="rtl">
                                <table className="table table-striped" >
                                    <thead>
                                        <tr className='text-nowrap'>
                                            <td>رمز السيارة</td>
                                            <td>عدد الركاب</td>
                                            <td>الإنطلاق</td>
                                            <td>حجز</td>
                                        </tr>
                                    </thead>
                                        
                                    <tbody>
                                        {louageListe.length == 0 ? <tr><td></td></tr> : 
                                        <>
                                            {louageListe.map((data,index) => 
                                            <tr className='text-nowrap' key={index}>
                                                <td><b>63- تونس -1431</b></td>
                                                <td>8</td>
                                                <td>1:38</td>
                                                <td><Button icon size='tiny' onClick={() => ReserverPlace()} className='rounded-circle'><Icon name='arrows alternate' /></Button></td>
                                            </tr>
                                            )}
                                        </>}
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
    </> );
}

export default MetroData;