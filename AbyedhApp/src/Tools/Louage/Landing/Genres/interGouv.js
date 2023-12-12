import React from 'react';
import { useState } from 'react';
import { Button, Icon, Input, Select } from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';
import axios from 'axios';
import { toast } from 'react-toastify';

function MetroData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : 'InterGouv', depart:'' , Arrivee:''})
    const [tripsListe, setTripsListe] = useState([])
    const [louageListe, setLouageListe] = useState([])

    /*##################[UseEffect]################### */
     
    /*#################[Function]#################### */
    const SearchFunction = () =>{
        axios.post(`${GConf.ApiToolsLink}/Louage`, {
            depart : targetTrip.depart,
            Arrivee : targetTrip.Arrivee,
            Genre : targetTrip.Genre
        })
        .then(function (response) {
            setTripsListe(response.data)

        }).catch((error) => {
            if(error.request) {
            toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
            }
        });
    }
    const GetLouage = () =>{
        axios.post(`${GConf.ApiToolsLink}/Louage/select`, {
            depart : targetTrip.depart,
            Arrivee : targetTrip.Arrivee,
            Genre : 'InterGouv'
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
        
        <div className="row">
            <div className="col-12 col-12 ">
                <div className='card card-body border-div shadow-sm mb-4'>
                    <h6 className='mb-1 text-end'>    ولاية الإنطلاق <span className='bi bi-person-x-fill'></span> </h6>
                    <Input list='languages' className='mb-2' fluid options={GConf.abyedhMap.Gouv} onChange={(e, { value }) => setTargetTripData({...targetTrip, depart: value })} />
                    
                    <h6 className='mb-1 text-end'>    ولاية الوصول   <span className='bi bi-person-x-fill'></span> </h6>
                    <Input list='languages' className='mb-2' fluid options={GConf.abyedhMap.Gouv} onChange={(e, { value }) => setTargetTripData({...targetTrip, Arrivee : value })} />
                                        
                    <div className='text-center mt-4'>
                        <Button fluid onClick={ (e) => SearchFunction()} className='rounded-pill' icon> بحث  <Icon name='search' />  </Button>    
                    </div>
                    <datalist id='languages'>
                        {GConf.abyedhMap.Gouv.map((data,index) => <option key={index} value={data.text}>{data.text}</option>)}
                    </datalist>

                </div>
            </div> 
            <div className="col-12 col-12   ">
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
                                            <td> عبر </td>
                                            <td>عدد الرخص</td>
                                            <td> إختيار</td>
                                        </tr>
                                    </thead>
                                    <tbody>                                    
                                        {tripsListe.length == 0 ? <tr><td></td></tr> : 
                                        <>
                                            {tripsListe.map((data,index) => 
                                                <tr className='text-nowrap' key={index} onClick={() => GetLouage(data.trip_ID)} style={{cursor:'pointer'}} >
                                                <td>{data.De}</td>
                                                <td>{data.Vers}</td>
                                                <td>{parseFloat(data.Price.replace(',', '.')).toFixed(3)}</td>
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