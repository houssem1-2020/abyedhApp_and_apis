import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, AddArticleToList,tag}) =>{
    return (<>
        <div className='card-body mt-2'>
            <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span> أدخل المشروبات المطلوبة  </h5>
            <Input icon='pin'  placeholder='إختر المشروب' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'   value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: Number(e.target.value) })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
        </div>
    </>)
}
const ConfirmCard = ({setCommandeD,commandeData,tag,SaveCommande,disabledSaveBtn,loaderState}) =>{
    return (<>
    <div className='card-body mt-2'>
        <div className='row mb-2'>
            <div className='col-12'>
            <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span> رقم الطاولة  </h5>
                <Input icon='circle'  size="small" iconPosition='left'   fluid className='mb-3' value={commandeData.Table_Num} onChange={(e) => setCommandeD({...commandeData, Table_Num: e.target.value })}/>
            </div>
            <div className='col-12'>
            <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span> اليوم المطلوب  </h5>
                <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-3' value={commandeData.Wanted_Date} onChange={(e) => setCommandeD({...commandeData, Wanted_Date: e.target.value })}/>
            </div>
            <div className='col-12'>
            <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span> ملاحضات </h5>
                    <Form className='mb-3'>
                        <TextArea  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>
            </div>
            <div className='col-12'>
                <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn} fluid onClick={SaveCommande}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
            </div>
        </div>
    </div>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCommande , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: 1})
    const PannierPannes = [
        {
          menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  me-2 ms-2'></span>  إدخال</span> , dir:'rtl'},
          render: () => <EnterCard tag={tag} articleNow={articleNow} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} />,
        },
        {
            menuItem: { key: 'article',   content:  <span > <span className='bi bi-2-circle  me-2 ms-2'></span> قائمة <span className='badge ' style={{backgroundColor :GConf.ADIL[tag].themeColor}}>{commandeData.articles ? commandeData.articles.length : 0} </span></span> , dir:'rtl' },
            render: () => <ArticleListCard />,
        },
        {
            menuItem: { key: 'check',   content:  <span >  <span className='bi bi-3-circle  me-2 ms-2'></span> تأكيد</span> , dir:'rtl' },
            render: () => <ConfirmCard setCommandeD={setCommandeD} commandeData={commandeData} tag={tag} SaveCommande={SaveCommande} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
    ]

    /* Function  */
    const AddArticleToList = () =>{
        if (articleNow.Name == '') { toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else if (articleNow.Qte == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            commandeData.articles.push(articleNow)
            setArticleNow({PK: commandeData.articles.length + 1 , Name:'', Qte: 1})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.articles.findIndex((article) => article.A_Code == value);
        commandeData.articles.splice(searchObject, 1);
        let resteArticles = commandeData.articles;
        setCommandeD({...commandeData, articles: resteArticles})
    }

    /* Card */
    const ArticleListCard = () =>{
        const ListCard = (props) =>{
            return(<>   
                        <div className='card shadow-sm p-2   rounded-pill ps-4 mb-2'>
                            <div className='row'>
                                <div className='col-2 align-self-center me-3'><b>{props.dataA.Qte}  * </b> </div>
                                <div className='col-7 col-lg-9 text-end pe-4 align-self-center'>
                                    {props.dataA.Name}
                                </div>
                               
                                <div className='col-2 align-self-center text-start'><Button icon="times" className='rounded-circle p-2 text-white bg-danger' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
                            </div>
                        </div>
                    </>)
        }
        return (<>
        <div className='card-body mt-2'>
            {commandeData.articles.length != 0 ? 
             <>{commandeData.articles.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
             :
             <div className='text-center'>
                <span className='bi bi-list-columns-reverse bi-lg'></span>
             </div>
            }
        </div>
        </>)
    }

        
    return(<>
        <Tab menu={{secondary: true, color: 'grey' , widths: PannierPannes.length , pointing: true, selected: { backgroundColor: GConf.ADIL[tag].themeColor },  dir:'rtl', style:{justifyContent: 'right',} }} panes={PannierPannes} /> 
    </>)
}

const ReservationCard = ({reservationD, setReservationD, SaveReservation, disabledSaveBtn, tag, loaderState }) =>{
    return(<>
            <div className='p-2'>
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span>  حجز بإسم  </h5>
                    <Input className='mb-3'   fluid value={reservationD.User_Name}  onChange={(e) => setReservationD({...reservationD, User_Name: e.target.value })}  />
                    
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span>  تاريخ الحجز </h5>
                    <Input className='mb-3' type='date' fluid value={reservationD.Wanted_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setReservationD({...reservationD, Wanted_Date: e.target.value })}  />
                    
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span>  وقت الحجز </h5>
                    <Input className='mb-3' type='time' fluid value={reservationD.Wanted_Time}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setReservationD({...reservationD, Wanted_Time: e.target.value })}  />


                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span>  رقم الطاولة </h5>
                    <Input className='mb-3'   fluid value={reservationD.Table_Num}   onChange={(e) => setReservationD({...reservationD, Table_Num: e.target.value })}  />
                    
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fil'></span>  ملاحضات </h5>
                    <small>    هل تريد أن تطلب شيئا ؟ </small> 
                        <Form className='mb-3'>
                            <TextArea  rows={2} value={reservationD.Comment} onChange={ (e,value) => setReservationD({...reservationD, Comment:e.target.value})} />
                        </Form>
                    
                    <div className='text-end'>
                        <Button className='rounded-pill' onClick={SaveReservation} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل حجز  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
        
        </div> 
    </>)
}

function CafeAction(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Date: new Date().toISOString().split('T')[0] , articles:[]})
    const [reservationD, setReservationD] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

    const panes = [
        {
          menuItem: { key: 'save', icon: 'edit outline', content:  <span className='me-2'>طلب مشروب</span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCommande={SaveCommande} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar', content:  <span className='me-2'>حجز طاولة</span> , dir:'rtl' },
            render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'><ReservationCard reservationD={reservationD} setReservationD={setReservationD} SaveReservation={SaveReservation} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /></Tab.Pane>,
        },
    ]

    /* ############### UseEffect #################*/
         useEffect(() => {
            axios.post(`${GConf.ApiLink}/profile`, {
                tag: props.TAG,
                PID:props.PID,
            })
            .then(function (response) {
                //setProfileData(response.data)
                //setLoading(false)
            })
        }, [])

    /* ############### Functions #################*/
    const SaveCommande = () =>{
        if (commandeData.articles.length == 0) {toast.error("قائمة الأطباق فارغة!", GConf.TostErrorGonf)}
        else if (!commandeData.Table_Num) {toast.error("أدخل رقم الطاولة !", GConf.TostErrorGonf)}
        else if (!commandeData.Wanted_Date) {toast.error("أدخل اليوم المطلوب !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/restaurant-commande`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                commandeD : commandeData,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>مشكل في الإتصال</h5>  </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    const SaveReservation = () =>{
        if (!reservationD.User_Name) {toast.error("أدخل صاحب الحجز !", GConf.TostErrorGonf)}
        else if (!reservationD.Wanted_Date) {toast.error("ادخل موعد الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.Wanted_Time) {toast.error("ادخل زمن الحجز  !", GConf.TostErrorGonf)}
        else if (!reservationD.Table_Num) {toast.error("ادخل رقم الطاولة  !", GConf.TostErrorGonf)}
        else if (!reservationD.Comment) {toast.error("ادخل تعليق  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/restaurant-reservation`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                reservationData : reservationD,
            }).then(function (response) {
                toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>مشكل في الإتصال</h5></div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
    
    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0'>
        <Tab menu={{secondary: true , selected: { backgroundColor: 'purple' },  dir:'rtl', style:{justifyContent: 'right',} }} panes={panes} className='yes-menu-tabs' />
    </div>
        
    </> );
}

export default CafeAction;