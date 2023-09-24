import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';

function GymActions(props) {

    /* ############### Const #################*/
    const [souscriptionData, setsouscriptionData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const genres = [
        { key: 1 , value: 'mensuel', text: 'شهري' },
        { key: 2 , value: 'annuel', text: 'سنوي' },
    ]

   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!souscriptionData.User_Name) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!souscriptionData.User_Age) {toast.error("ادخل الاسم  !", GConf.TostErrorGonf)}
        else if (!souscriptionData.Ab_Genre) {toast.error("ادخل نوعه الاشتراك  !", GConf.TostErrorGonf)}
        else if (!souscriptionData.Start_At) {toast.error("ادخل تاريخ الإنطلاق  !", GConf.TostErrorGonf)}
        else if (!souscriptionData.Comment) {toast.error("ادخل تعليق   !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/gym-souscription`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                souscriptionData : souscriptionData,
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
                <div   dir='rtl' className='card card-body shadow-sm pt-3 border-div'>
                    <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  الإسم و اللقب </h5>
                    <Input className='mb-1' fluid icon='user' placeholder=' الإسم و اللقب  ' value={souscriptionData.User_Name} onChange={(e) => setsouscriptionData({...souscriptionData, User_Name: e.target.value })} />

                    <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>   العمر </h5>
                    <Input className='mb-1' fluid icon='user' placeholder=' العمر' value={souscriptionData.User_Age} onChange={(e) => setsouscriptionData({...souscriptionData, User_Age: e.target.value })} />

                    <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>   نوع الإشتراك   </h5>
                    <Select className='mb-1'  fluid options={genres} onChange={(e, { value }) => setsouscriptionData({...souscriptionData, Ab_Genre: value })} />

                    <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span>  تاريخ الإنطلاق  </h5>
                    <small> متي تريد أن تبدأ ؟</small>
                        <Input className='mb-1' type='date' fluid alue={souscriptionData.Start_At}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setsouscriptionData({...souscriptionData, Start_At: e.target.value })}  />
                    
                    <h5 className='mb-0 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  إوقات التمرين </h5>
                    <small>ماهي الإوقات التي تريد أن تتمرن فيها </small> 
                        <Form className='mb-1'>
                            <TextArea   rows={2} value={souscriptionData.Comment} onChange={ (e,value) => setsouscriptionData({...souscriptionData, Comment:e.target.value})} />
                        </Form>

                    <div className='text-end'>
                        <Button className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل إشتراك  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
        </div>      
    </> );
}

export default GymActions;