import React from 'react';
import PBSD from '../../publicBaseData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Icon, Select } from 'semantic-ui-react';
import GConf from '../../../../AssetsM/generalConf';

function TrainData() {

    /*####################[CONST]##################### */
    const [targetTrip, setTargetTripData] = useState({Genre : '', depart:'' , Arrivee:''})
    const [departListe, setDepartListe] = useState([])
    const [arriverListe, setArriveListe] = useState([])

    const [arriverListeHidden, setArriveListeHidden] = useState(false)

    const metroOption = [
        { key: '1', value: '1', text: 'ضواحي الساحل'  },
        { key: '2', value: '2', text: 'ضواحي تونس'},
        { key: '3', value: '3', text: 'الخطوط البعيدة'},
    ]

    const sessonOptoin = [
        { key: '1', value: 'allee', text: 'ذهاب'  },
        { key: '2', value: 'retour', text: 'إياب'},
    ]

    /*##################[UseEffect]################### */
    useEffect(() => {
        console.log('test')
     }, [])
    /*#################[Function]#################### */
    const SetSelctedItem = (value) =>{
        setTargetTripData({...targetTrip, Genre: value })
        
         let items = PBSD.LigneTrain.filter((data) => data.agency_id === parseInt(value))
         let StationContainer = []
         items.map( (getData) => StationContainer.push({ key: getData.route_id, value: getData.route_id , text: getData.route_long_name },))
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

export default TrainData;