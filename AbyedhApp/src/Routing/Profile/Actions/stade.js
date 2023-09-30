import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, souscriptionData, AddArticleToList}) =>{
    
    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5>عدد الخيارات المدخلة  : {souscriptionData.Wanted_Times ? souscriptionData.Wanted_Times.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_D}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setArticleNow({...articleNow, Wanted_Time_D: e.target.value })}  />
            <Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_F}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setArticleNow({...articleNow, Wanted_Time_F: e.target.value })}  />
           
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
                
        </div>
    </>)
}
const TimmingCard = ({souscriptionData, setsouscriptionData, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: ''})
    const PannierPannes = [
        {
          menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  bi-sm me-2 ms-2 ' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl'},
          render: () => <EnterCard articleNow={articleNow} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} souscriptionData={souscriptionData} />,
        },
        {
            menuItem: { key: 'article',   content:  <span > <span className='bi bi-2-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl' },
            render: () => <ArticleListCard />,
        },
        // {
        //     menuItem: { key: 'check',   content:  <span >  <span className='bi bi-3-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>  </span> , dir:'rtl' },
        //     render: () => <ConfirmCard />,
        // },
    ]
    const Livraisonoptions = [
        { key: '1', value: 'INTIGO', text: 'INTIGO ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/intigo-1-300x145-1.png', avatar: true } },
        { key: '2', value: 'Yassir', text: 'Yassir ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/yassir.png', avatar: true } },
        { key: '3', value: 'Farm Trust', text: 'Farm Trust ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/farmtrust.png', avatar: true } },
        { key: '4', value: 'Founashop', text: 'Founashop', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/founa-shop.png', avatar: true } },
        { key: '5', value: 'Joy s', text: 'Joy’s', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/28070452_400909117034010_1865031699315847664_o-300x300-1.jpg', avatar: true } },
      ]
    /* Function  */
    const AddArticleToList = () =>{
        if (!articleNow.Wanted_Time_D ) { toast.error("أدخل وقت البداية !", GConf.TostErrorGonf) } 
        else if (!articleNow.Wanted_Time_F) { toast.error("أدخل وقت الأنتهاء      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            souscriptionData.Wanted_Times.push(articleNow)
            setArticleNow({PK: souscriptionData.Wanted_Times.length + 1 , Name:new Date().toLocaleTimeString('fr-FR'), Qte: new Date().toLocaleTimeString('fr-FR')})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= souscriptionData.Wanted_Times.findIndex((article) => article.A_Code == value);
        souscriptionData.Wanted_Times.splice(searchObject, 1);
        let resteWanted_Times = souscriptionData.Wanted_Times;
        setsouscriptionData({...souscriptionData, Wanted_Times: resteWanted_Times})
    }

    /* Card */
    const ArticleListCard = () =>{
        const ListCard = (props) =>{
            return(<>   
                        <div className='card shadow-sm p-2   border-div ps-4 mb-2'>
                            <div className='row'>
                                {/* <div className='col-2 align-self-center pe-3'><b>{props.dataA.Qte} </b>  </div> */}
                                <div className='col-5 col-lg-9 text-end  align-self-center'>
                                     {props.dataA.Wanted_Time_D} 
                                </div>
                                <div className='col-5 col-lg-9 text-end  align-self-center'>
                                     {props.dataA.Wanted_Time_F} 
                                </div>
                                <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
                            </div>
                        </div>
                    </>)
        }
        return (<>
        <div className='card-body mt-2'>
            {souscriptionData.Wanted_Times.length != 0 ? 
             <>{souscriptionData.Wanted_Times.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
             :
             <div className='text-center'>
                <span className='bi bi-list-columns-reverse bi-lg'></span>
            </div>
             
            }
        </div>
        </>)
    }
    
 
        
    return(<>
        <Tab menu={{secondary: true, color: 'grey' , widths: PannierPannes.length , pointing: true, selected: { backgroundColor: GConf.ADIL[tag].themeColor },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={PannierPannes} /> 
    </>)
}
const RendyVousCard = ({souscriptionData, setsouscriptionData, saveFunction, disabledSaveBtn, tag, loaderState }) =>{
    const genres = [
        { key: 1 , value: 'mensuel', text: 'شهري' },
        { key: 2 , value: 'annuel', text: 'سنوي' },
    ]
    return(<>
            <div className='p-2'>
 
                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>   العمر </h5>
                    <Input className='mb-1' fluid icon='user' placeholder=' العمر' value={souscriptionData.User_Age} onChange={(e) => setsouscriptionData({...souscriptionData, User_Age: e.target.value })} />

                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>   نوع الإشتراك   </h5>
                    <Select className='mb-1' placeholder='نوع الإشتراك' fluid options={genres} onChange={(e, { value }) => setsouscriptionData({...souscriptionData, Ab_Genre: value })} />

                     
                     
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> الأوقات التي تود التدرب فيها  </h5>
                    <small>ماهي الإوقات التي تريد أن تتمرن فيها </small>
                    <TimmingCard souscriptionData={souscriptionData} setsouscriptionData={setsouscriptionData}  disabledSaveBtn={disabledSaveBtn} tag={tag} loaderState={loaderState} /> 

                    
                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  إوقات التمرين </h5>
                    <Form className='mb-4'>
                        <TextArea  placeholder='إذكر الإختصاصات التي تود المشاركة فيها ' className='font-droid' rows={2} value={souscriptionData.Comment} onChange={ (e,value) => setsouscriptionData({...souscriptionData, Comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button fluid className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل إشتراك  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>

        
        </div> 
    </>)
}

const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
   
    

    return(<>
            <div className='p-2'>
   
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> الوقت المطلوب </h5>
                    <small> متي تريد الحضور ؟</small>
                    <div className='row mb-0'>
                        <div className='col-12'><Input className='mb-2' type='date' fluid value={commandeData.RES_Date}    onChange={(e) => setCommandeD({...commandeData, RES_Date: e.target.value })}  /></div> 
                        <div className='col-6'><small className='ms-2'>من</small><Input className='mb-2' type='time' fluid value={commandeData.RES_From_Time}    onChange={(e) => setCommandeD({...commandeData, RES_From_Time: e.target.value })}  /></div> 
                        <div className='col-6'><small className='ms-2'>إلي</small><Input className='mb-2' type='time' fluid value={commandeData.RES_To_Time}    onChange={(e) => setCommandeD({...commandeData, RES_To_Time: e.target.value })}  /></div> 
                    </div>

  
                    <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea className='font-droid' placeholder='ملاحضات'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button fluid className='rounded-pill' onClick={SaveCMDFunc} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل موعد  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
        
            </div>  
    </>)
}

function StadeSpecific(props) {
    /* ############### Const #################*/
    const [souscriptionData, setsouscriptionData] = useState({Wanted_Times:[]})
    const [commandeData, setCommandeD] = useState({RES_Date: new Date().toISOString().split('T')[0] , RES_From_Time: new Date().toLocaleTimeString('fr-FR'), RES_To_Time: new Date().toLocaleTimeString('fr-FR'),  articles:[]})
     
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'checkmark box', content:  <span className='me-2'> حجز </span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar alternate', content:  <span className='me-2'> إشتراك </span> , dir:'rtl' },
            render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'><RendyVousCard souscriptionData={souscriptionData} setsouscriptionData={setsouscriptionData} saveFunction={saveFunction} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
    ]

    

    /* ############### UseEffect #################*/
    useEffect(() => {
            // axios.post(`${GConf.ApiLink}/camions`, {PID :props.PID})
            // .then(function (response) {
            //     //let ClientLN = []
            //     //response.data.map( (dta) => {ClientLN.push({value : dta.Cam_ID, text : <>{dta.Cam_Name} : {dta.Matricule} - {dta.Chauffeur}</>, key: dta.PK})})
            //     //setCamionList(ClientLN)
            // })
    }, [])

    /* ############### Functions #################*/
    const SaveCMDFunc = () =>{
        if (!commandeData.RES_Date  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.RES_From_Time  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.RES_To_Time  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{
             
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/stade-reserver`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                reservationD : commandeData,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const saveFunction = () =>{
        if (souscriptionData.Wanted_Times.length == 0) {toast.error("أدخل أوقات التمرين !", GConf.TostErrorGonf)}
        else if (!souscriptionData.User_Age) {toast.error("ادخل الاسم  !", GConf.TostErrorGonf)}
        else if (!souscriptionData.Ab_Genre) {toast.error("ادخل نوعه الاشتراك  !", GConf.TostErrorGonf)}
        
        else if (!souscriptionData.Comment) {toast.error("ادخل تعليق   !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/stade-souscrire`, {
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
 
    
    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0'>
        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={panes} />
    </div>
        
    </> );
}

export default StadeSpecific;