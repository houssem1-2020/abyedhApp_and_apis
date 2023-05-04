import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Accordion, Icon, List, Input, Header,  Modal } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';

function SettingPage() {
     /* ########################[Const]########################## */
    let UID = JSON.parse(localStorage.getItem("UID"));
    const [genModal, setGenModal] = React.useState(false)
    const [favModal, setFavModal] = React.useState(false)
    const [docModal, setDocModal] = React.useState(false)
    const [SearchModal, setSearchModal] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    let [settingData, setSettingData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const setting =[
        {id:0, name:'عام', imgSrc:'01', iconTitle:'arrows-move'},
        {id:1, name:'المفضلة', imgSrc:'02', iconTitle:'balloon-heart-fill'},
        {id:2, name:'الارشيف و الوثائق', imgSrc:'04', iconTitle:'file-zip-fill'},
        {id:3, name:'محرك البحث', imgSrc:'03', iconTitle:'search-heart'},
    ]

    /* ########################[UseEffect]###################### */
    useEffect(() => {
        axios.post(`${GConf.ApiProfileLink}/setting`, {
            UID:UID
          })
          .then(function (response) {
            setSettingData(response.data)
            console.log(response.data)
            console.log(JSON.parse(response.data.Setting.Favorite)[0].f_max)
          })
      }, [])

    /* ########################[Functions]###################### */
    /* ########################[Card]########################### */
    const SettingItem = (props) =>{
        return(<>
            <Accordion.Title
                active={activeIndex === props.data.id}
                index={props.data.id}
                onClick={(e) => setActiveIndex(props.data.id)}
                className='card shadow-sm border-div mb-1'
            >
                    <div className='row p-2'>
                        <div className='col-6 align-self-center pe-3 text-end' style={{color:'#4287f5'}}><h4 dir='ltr'>{props.data.name} <span className={`bi bi-${props.data.iconTitle}`}></span></h4></div>
                        <div className='col-6 align-self-center ps-3 text-start'><img src={`https://cdn.abyedh.tn/Images/Profile/setting/${props.data.imgSrc}.gif`} width='30px' height='30px' /></div>
                    </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === props.data.id} className='card mt-2 mb-2 shadow-sm border-div ' >
                <div className='card-body '>
                        <SelectSetting selected={props.data.id} />
                </div>
            </Accordion.Content>
        </>)
    }
    const SelectSetting = ({ selected }) => {
        const statusCard = React.useCallback(() => {
          switch(selected) {
            case 0 : return <GenralSettingCard />;  
            case 1 : return <FavoriteSettingCard /> ;
            case 2 : return <CalendarSettingCard />;
            case 3 : return <DataSettinfCard />;
            default:  return <GenralSettingCard />;    
          }
        }, [selected]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        )
    }

    const GenralSettingCard = () =>{
        return(<>
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span>  المعرف الوحيد</b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ? <a href={`https://abyedh.tn/Profile/View/?UID=${settingData.General.UID}`}>{settingData.General.UID}</a>  : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span> الاسم و اللقب</b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  settingData.General.Name : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-calendar-heart-fill bi-sm text-secondary ms-2'></span>  تاريخ الميلاد </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  new Date(settingData.General.BirthDay).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-telephone-x-fill bi-sm text-secondary ms-2'></span>  رقم الهاتف </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  settingData.General.PhoneNum : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-gender-ambiguous bi-sm text-secondary ms-2'></span>   الجنس </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  settingData.General.Sex : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-geo-alt-fill bi-sm text-secondary ms-2'></span>  الولاية  </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  settingData.General.BirthGouv : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-pin-map-fill bi-sm text-secondary ms-2'></span>  المدينة  </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  settingData.General.BirthDeleg : ''} </div>
            </div>
            <hr /> 
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-circle bi-sm text-secondary ms-2'></span>  صورة الحساب  </b>  </div>
                <div className='col-6  align-self-center text-end'> {settingData.General ?  <img src={`https://cdn.abyedh.tn/images/p_pic/${settingData.General.PictureId}.gif`} className='rounded-circle' width='30px' height='30px'  /> : ''} </div>
            </div>
            <br />
            <div className='text-start'>
                        <Modal
                            closeIcon
                            open={genModal}
                            dimmer = 'blurring'
                            size='tiny'
                            trigger={<Button  size='small' className='rounded-pill bg-danger text-white'    >   <Icon name='edit' className='ms-2' /> تعديل </Button>}
                            onClose={() => setGenModal(false)}
                            onOpen={() => setGenModal(true)}
                            >
                            <Modal.Header><h4 className='text-end'>معلومات عامة </h4></Modal.Header>
                            <Modal.Content dir='rtl'>
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span> الاسم و اللقب</b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.Name : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-calendar-heart-fill bi-sm text-secondary ms-2'></span>  تاريخ الميلاد </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  new Date(settingData.General.BirthDay).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-telephone-x-fill bi-sm text-secondary ms-2'></span>  رقم الهاتف </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.PhoneNum : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-gender-ambiguous bi-sm text-secondary ms-2'></span>   الجنس </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.Sex : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-geo-alt-fill bi-sm text-secondary ms-2'></span>  الولاية  </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.BirthGouv : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-pin-map-fill bi-sm text-secondary ms-2'></span>  المدينة  </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.BirthDeleg : ''} </div>
                                    </div>
                                    <hr /> 
                                    <div className='row mb-2'> 
                                        <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-circle bi-sm text-secondary ms-2'></span>  صورة الحساب  </b>  </div>
                                        <div className='col-6  align-self-center text-start'> {settingData.General ?  <img src={`https://cdn.abyedh.tn/images/p_pic/${settingData.General.PictureId}.gif`} className='rounded-circle' width='30px' height='30px'  /> : ''} </div>
                                    </div>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setGenModal(false)} className='rounded-pill' size='small'>  إلغاء <Icon name='remove' className='ms-2' /></Button>
                                <Button color='green' onClick={() => setGenModal(false)} className='rounded-pill' size='small'>  تعديل <Icon name='checkmark' className='ms-2' /></Button>
                            </Modal.Actions>
                        </Modal>
                
            </div>
        </>)
    }
    const FavoriteSettingCard = () =>{
        return(<>
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-hourglass-top bi-sm text-secondary ms-2'></span> العدد الأقصي </b>  </div>
                <div className='col-6  align-self-center text-start'> {settingData.Setting ?  JSON.parse(settingData.Setting.Favorite)[0].f_max : ''} </div>
            </div>
            <hr />
            <div className='row mb-2'> 
                <div className='col-7 align-self-center text-end'> <b><span className='bi bi-map-fill bi-sm text-secondary ms-2'></span> الموقع الجغرافي</b>  </div>
                <div className='col-5  align-self-center text-start'> {settingData.Setting ?  JSON.parse(settingData.Setting.Favorite)[0].f_autoPlace : ''} </div>
            </div>
            <hr />
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-robot bi-sm text-secondary ms-2'></span>  إضافة آلية</b>  </div>
                <div className='col-6  align-self-center text-start'> {settingData.Setting ?  JSON.parse(settingData.Setting.Favorite)[0].f_autoSave : ''} </div>
            </div>
            <hr />
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-card-checklist bi-sm text-secondary ms-2'></span>   الإفتراضية</b>  </div>
                <div className='col-6  align-self-center text-start'> {settingData.Setting ?  JSON.parse(settingData.Setting.Favorite)[0].f_auto : ''} </div>
            </div>
            <br />
            <div className='text-end'>
                <Modal
                    closeIcon
                    open={favModal}
                    dimmer = 'blurring'
                    size='tiny'
                    trigger={<Button  size='small' className='rounded-pill bg-danger text-white'    >   <Icon name='edit' className='ms-2' /> تعديل </Button>}
                    onClose={() => setFavModal(false)}
                    onOpen={() => setFavModal(true)}
                    >
                    <Modal.Header><h4 className='text-end'>معلومات عامة </h4></Modal.Header>
                    <Modal.Content dir='rtl'>
                            <div className='row mb-2'> 
                                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span> الاسم و اللقب</b>  </div>
                                <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.Name : ''} </div>
                            </div>
                            <hr /> 
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => setFavModal(false)} className='rounded-pill' size='small'>  إلغاء <Icon name='remove' className='ms-2' /></Button>
                        <Button color='green' onClick={() => setFavModal(false)} className='rounded-pill' size='small'>  تعديل <Icon name='checkmark' className='ms-2' /></Button>
                    </Modal.Actions>
                </Modal>
                
            </div>
        </>)
    }
    const CalendarSettingCard = () =>{
        return(<>
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-calendar-heart-fill bi-sm text-secondary ms-2'></span>  تاريخ الميلاد </b>  </div>
                <div className='col-6  align-self-center text-start'> {settingData.General ?  new Date(settingData.General.BirthDay).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''} </div>
            </div>
            <hr />
            <div className='text-end'>
                <Modal
                    closeIcon
                    open={docModal}
                    dimmer = 'blurring'
                    size='tiny'
                    trigger={<Button  size='small' className='rounded-pill bg-danger text-white'    >   <Icon name='edit' className='ms-2' /> تعديل </Button>}
                    onClose={() => setDocModal(false)}
                    onOpen={() => setDocModal(true)}
                    >
                    <Modal.Header><h4 className='text-end'>معلومات عامة </h4></Modal.Header>
                    <Modal.Content dir='rtl'>
                            <div className='row mb-2'> 
                                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span> الاسم و اللقب</b>  </div>
                                <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.Name : ''} </div>
                            </div>
                            <hr /> 
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => setDocModal(false)} className='rounded-pill' size='small'>  إلغاء <Icon name='remove' className='ms-2' /></Button>
                        <Button color='green' onClick={() => setDocModal(false)} className='rounded-pill' size='small'>  تعديل <Icon name='checkmark' className='ms-2' /></Button>
                    </Modal.Actions>
                </Modal>
                
            </div>
        </>)
    }
    const DataSettinfCard = () =>{
        return(<>
            <div className='row mb-2'> 
                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-calendar-heart-fill bi-sm text-secondary ms-2'></span>  تاريخ الميلاد </b>  </div>
                <div className='col-6  align-self-center text-start'> {settingData.General ?  new Date(settingData.General.BirthDay).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''} </div>
            </div>
            <hr />
            <div className='text-end'>
                <Modal
                    closeIcon
                    open={SearchModal}
                    dimmer = 'blurring'
                    size='tiny'
                    trigger={<Button  size='small' className='rounded-pill bg-danger text-white'    >   <Icon name='edit' className='ms-2' /> تعديل </Button>}
                    onClose={() => setSearchModal(false)}
                    onOpen={() => setSearchModal(true)}
                    >
                    <Modal.Header><h4 className='text-end'>معلومات عامة </h4></Modal.Header>
                    <Modal.Content dir='rtl'>
                            <div className='row mb-2'> 
                                <div className='col-6 align-self-center text-end'> <b><span className='bi bi-person-fill bi-sm text-secondary ms-2'></span> الاسم و اللقب</b>  </div>
                                <div className='col-6  align-self-center text-start'> {settingData.General ?  settingData.General.Name : ''} </div>
                            </div>
                            <hr /> 
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => setSearchModal(false)} className='rounded-pill' size='small'>  إلغاء <Icon name='remove' className='ms-2' /></Button>
                        <Button color='green' onClick={() => setSearchModal(false)} className='rounded-pill' size='small'>  تعديل <Icon name='checkmark' className='ms-2' /></Button>
                    </Modal.Actions>
                </Modal>
                
            </div>
        </>)
    }

    return (  <>
        <Bounce bottom>
        <Accordion >
            {
                setting.map( (data,index) => <SettingItem key={index} data={data} /> )
            }   
        </Accordion>
        </Bounce>
        <br />
        <br />
 
    </>);
}


export default SettingPage;