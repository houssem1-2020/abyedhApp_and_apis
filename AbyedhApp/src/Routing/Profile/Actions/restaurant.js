import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentAction, Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData,tag, AddArticleToList}) =>{
    const [modalOpen, setModalOpen] = useState(false)
    const [searchForArticle, setSearchForArticle] = useState('')
    const [rendredMedicammentListe, setRendredMedicammentListe] = useState([])
    const SearchForArticleFunc = () => {
        if (!searchForArticle || searchForArticle == '') {  toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else {
            // axios.post(`${GConf.ApiLink}/Action/pharmacie-shop/medicamment`, {
            //     searchForArticle : searchForArticle,
            // }).then(function (response) {
            //     console.log(response.data)
            //     setRendredMedicammentListe(response.data)
            // }).catch((error) => {
            //     if(error.request) {
            //       toast.error(<><div><h5>   </h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
                  
            //     }
            // });
        }
    }

    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5>عدد الطلبات في السلة : {commandeData.articles ? commandeData.articles.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'><Button onClick={() => setModalOpen(true)} size='small' icon className='rounded-circle'> <Icon name='plus' /> </Button></div>
            </div>
            <Input icon='pin'  placeholder='إختر الطبق' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox'  value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: e.target.value })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
        </div>
        <Modal
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
            open={modalOpen}
                
        >
        <Modal.Header className='text-end'>
                <span className='font-droid'> إختر منتج </span>
                
        </Modal.Header>
        <Modal.Content >
            <div className='row' dir='ltr'>
                <div className='col-2'><Button   icon className='rounded-pill' size='small'  onClick={() => SearchForArticleFunc()}>  <Icon name='edit outline' className='ms-2' /> </Button></div>
                <div className='col-10'><Input icon='pin' size='small'  placeholder='إسم المنتج' value={searchForArticle}  onChange={ (e) => setSearchForArticle(e.target.value )}  iconPosition='left'   fluid className='mb-1' /></div>
            </div> 
            {rendredMedicammentListe.length == 0 ?
            <h1 className='text-center'><span className='bi bi-card-checklist bi-lg  '></span></h1>
            :
            <>
                {rendredMedicammentListe.map((data,index) => <div key={index} className='card p-2 mb-2 ' onClick={() => setArticleNow({...articleNow, Name: data.Nom })}><div className='row'><span className='col-1 bi bi-capsule-pill d-inline'></span> <span className='col-11'>{data.Nom} : {data.Dosage} - {data.Presentation} </span></div></div>)}
            </>
            }
            
        </Modal.Content>
        </Modal>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCommande , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: ''})
    const PannierPannes = [
        {
        menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  bi-sm me-2 ms-2 ' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl'},
        render: () => <EnterCard articleNow={articleNow} tag={tag} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} commandeData={commandeData} />,
        },
        {
            menuItem: { key: 'article',   content:  <span > <span className='bi bi-2-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl' },
            render: () => <ArticleListCard />,
        },
        // {
        //     menuItem: { key: 'check',   content:  <span >  <span className='bi bi-3-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>  </span> , dir:'rtl' },
        //     render: () => <ConfirmCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCommande={SaveCommande} disabledSaveBtn={disabledSaveBtn} tag={tag} loaderState={loaderState}/>,
        // },
    ]

    /* Function  */
    const AddArticleToList = () =>{
        if (articleNow.Name == '') { toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else if (articleNow.Qte == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            commandeData.articles.push(articleNow)
            setArticleNow({PK: commandeData.articles.length + 1 , Name:'', Qte: ''})
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
                        <div className='card shadow-sm p-2   border-div ps-4 mb-2'>
                            <div className='row'>
                            <div className='col-3 align-self-center pe-3'><b>{props.dataA.Qte} </b>  </div>
                                <div className='col-7 col-lg-9 text-end  align-self-center'>
                                     {props.dataA.Name} 
                                </div>
                                
                                <div className='col-1 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
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
                    {/* <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  حجز بإسم  </h5>
                    <Input className='mb-3' placeholder=''  fluid value={reservationD.User_Name}  onChange={(e) => setReservationD({...reservationD, User_Name: e.target.value })}  />
                     */}
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  تاريخ الحجز </h5>
                    <Input className='mb-1' type='date' fluid value={reservationD.Wanted_Date}  onChange={(e) => setReservationD({...reservationD, Wanted_Date: e.target.value })}  />
                    <Input className='mb-3' type='time' fluid value={reservationD.Wanted_Time}  onChange={(e) => setReservationD({...reservationD, Wanted_Time: e.target.value })}  />


                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  رقم الطاولة </h5>
                    <small> في صورة حجز طاولة أدخل رقم الطاولة </small>
                    <Input className='mb-3' placeholder='رقم الطاولة'  fluid value={reservationD.Table_Num}   onChange={(e) => setReservationD({...reservationD, Table_Num: e.target.value })}  />
                    
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات </h5>
                    <small>    هل تريد أن تطلب شيئا ؟ </small> 
                        <Form className='mb-3'>
                            <TextArea placeholder=' هل تريد أن تطلب شيئا ؟ ' className='font-droid' rows={2} value={reservationD.Comment} onChange={ (e,value) => setReservationD({...reservationD, Comment:e.target.value})} />
                        </Form>
                    
                    <div className='text-end'>
                        <Button fluid className='rounded-pill' onClick={SaveReservation} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[tag].themeColor, color:'white'}} > <Icon name='save' />  تسجيل حجز  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
        
        </div> 
    </>)
}

function RestaurantActions(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Date: new Date().toISOString().split('T')[0] , articles:[]})
    const [reservationD, setReservationD] = useState({Wanted_Date : new Date().toISOString().split('T')[0], Wanted_Time: new Date().toLocaleTimeString('fr-FR')})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'Importee', text:'Importee'},
        {key:2, value:'حجز طاولة', text:' حجز طاولة '},
        
    ]
    const panes = [
        {
          menuItem: { key: 'save', icon: 'edit outline', content:  <span className='me-2'>طلب</span> , dir:'rtl'},
          render: () => <Tab.Pane className='border-div shadow-sm' attached={false} dir='rtl'> 
          
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> أدخل الأطباق المطلوبة  </h5>
                    <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCommande={SaveCommande} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} />
                    
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> نوع الخدمة </h5>
                    <Select fluid placeholder='نوع الخدمة' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Comm_Genre: data.value})} />
                    
                    <div className={`mt-3 ${commandeData.Comm_Genre == 'حجز طاولة' ? '' : 'd-none'}`}>
                        <h5 className='mb-1 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fil'></span> رقم الطاولة  </h5>
                        <small> في صورة حجز طاولة أدخل رقم الطاولة </small>
                        <Input icon='circle'  placeholder='رقم الطاولة' size="small" iconPosition='left'   fluid className='mb-3' value={commandeData.Table_Num} onChange={(e) => setCommandeD({...commandeData, Table_Num: e.target.value })}/>
                    </div>
                    
                    <h5 className='mb-1 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> ملاحضات </h5>
                    <Form className='mb-3'>
                        <TextArea placeholder='ملاحضات' className='font-droid' rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>
                    <div className='col-12'>
                        <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn} fluid onClick={SaveCommande}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                    </div>

            </Tab.Pane>,
        },
        {
            menuItem: { key: 'edit', icon: 'calendar', content:  <span className='me-2'>حجز</span> , dir:'rtl' },
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
        else if (commandeData.Comm_Genre == 'حجز طاولة'    && !commandeData.Table_Num) {toast.error("أدخل رقم الطاولة !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment) {toast.error("أدخل اليوم المطلوب !", GConf.TostErrorGonf)}
        else if (!commandeData.Comm_Genre) {toast.error("أدخل نوع الطلب  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            console.log(commandeData)
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
          if (!reservationD.Wanted_Date) {toast.error("ادخل موعد الحجز  !", GConf.TostErrorGonf)}
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
                setDisabledBtn(true)
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

export default RestaurantActions;