import React from 'react';
import PBSD from '../../publicBaseData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Icon, Select } from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';

function MetroData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '', depart:'' , Arrivee:''})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])

    const [arriverListeHidden, setArriveListeHidden] = useState(false)

    const metroOption = [
        { key: '1', value: '1', text: 'الخط 1'  },
        { key: '2', value: '2', text: 'الخط 2'},
        { key: '3', value: '3', text: 'الخط 3'},
        { key: '4', value: '4', text: 'الخط 4'},
        { key: '5', value: '5', text: 'الخط 5'},
        { key: '6', value: '6', text: 'الخط 6'},
    ]

    const sessonOptoin = [
        { key: '1', value: 'hiver', text: 'شتاء'  },
        { key: '2', value: 'ete', text: 'صيف'},
        { key: '3', value: 'rmd', text: 'رمضان'},
    ]

    /*##################[UseEffect]################### */
    useEffect(() => {
        console.log('test')
     }, [])
    /*#################[Function]#################### */
    const SetSelctedItem = (value) =>{
         setTargetTripData({...targetTrip, Genre: value })
        
        //  let items = PBSD.staionMteroTGM.filter((data) => data.ligne === value)
        //  let StationContainer = []
        //  items.map( (getData) => StationContainer.push({ key: getData.id, value: getData.Num_station , text: getData.station },))
        //  setDepartListe(StationContainer)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDepartListe(found)
    }
    const SearchFunction = () =>{
        console.log('hhh')
    }
    const GetLouage = () =>{
        console.log('hhh')
    }
    /*####################[Crad]###################### */

    return ( <>
        
        <div className="row p-1">
            <div className="col-12 col-lg-3 ">
                <div className='card card-body border-div shadow-sm mb-4'>
                    <h6 className='mb-1 text-end'>    ولاية الإنطلاق <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-2' fluid options={GConf.abyedhMap.Gouv} onChange={(e, { value }) => SetSelctedItem(value)} />
                    
                    <h6 className='mb-1 text-end'>    الأنطلاق   <span className='bi bi-person-x-fill'></span> </h6>
                    <Select className='mb-2' fluid options={departListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Depart: value })} />
                                        
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
                                            <tr>
                                                <td>الانطلاق</td>
                                                <td>الوصول</td>
                                                <td>التسعيرة</td>
                                                <td>عدد الرخص</td>
                                            </tr>
                                        </thead>
                                        <tbody>                                    
                                            <tr onClick={() => GetLouage(10117)} style={{cursor:'pointer'}} >
                                                <td>منطقة 1</td>
                                                <td>منطقة 2</td>
                                                <td>7227</td>
                                                <td>11</td>
                                            </tr>
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
                                            <tr>
                                                <td>رمز السيارة</td>
                                                <td>عدد الركاب</td>
                                                <td>الإنطلاق</td>
                                            </tr>
                                        </thead>
                                            
                                        <tbody>
                                            <tr>
                                                <td><b>90- تونس -4353</b></td>
                                                <td>4</td>
                                                <td>11:27</td>
                                            </tr>
                                            <tr>
                                                <td><b>63- تونس -1431</b></td>
                                                <td>8</td>
                                                <td>1:38</td>
                                            </tr>
                                            <tr>
                                                <td><b>50- تونس -7998</b></td>
                                                <td>2</td>
                                                <td>5:19</td>
                                            </tr>
                                            <tr>
                                                <td><b>74- تونس -3035</b></td>
                                                <td>0</td>
                                                <td>8:27</td>
                                            </tr>
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