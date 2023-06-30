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
        
         let items = PBSD.staionMteroTGM.filter((data) => data.ligne === value)
         let StationContainer = []
         items.map( (getData) => StationContainer.push({ key: getData.id, value: getData.Num_station , text: getData.station },))
         setDepartListe(StationContainer)
    }
    const SearchFunction = () =>{
        console.log('hhh')
    }
    /*####################[Crad]###################### */

    return ( <>
        <div className='card card-body border-div shadow-sm mb-4'>
            <h6 className='mb-1 text-end'>    نوع الحافلة  <span className='bi bi-person-x-fill'></span> </h6>
            <Select className='mb-3' fluid options={metroOption} onChange={(e, { value }) => SetSelctedItem(value)} />
            
            <h6 className='mb-1 text-end'>    الأنطلاق   <span className='bi bi-person-x-fill'></span> </h6>
            <Select className='mb-3' fluid options={departListe} onChange={(e, { value }) => setTargetTripData({...targetTrip, Depart: value })} />
            
            <div className={arriverListeHidden ? 'd-none' : ''}>
                <h6 className='mb-1 text-end'>    الوصول  <span className='bi bi-person-x-fill'></span> </h6>
                <Select className='mb-3' fluid options={sessonOptoin} onChange={(e, { value }) => setTargetTripData({...targetTrip, Arrivee : value })} />
            </div>
            

            <div className='text-center mt-4'>
                <Button fluid onClick={ (e) => SearchFunction()} className='rounded-pill' icon> <Icon name='search' /> بحث </Button>    
            </div>
        </div>
    </> );
}

export default MetroData;