import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData, AddArticleToList}) =>{
    const [modalOpen, setModalOpen] = useState(false)
    const [searchForArticle, setSearchForArticle] = useState('')
    const [rendredMedicammentListe, setRendredMedicammentListe] = useState([])
    const SearchForArticleFunc = () => {
        if (!searchForArticle || searchForArticle == '') {  toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else if (!searchForArticle || searchForArticle == '') {  toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else {
            axios.post(`${GConf.ApiLink}/Action/pharmacie-shop/medicamment`, {
                searchForArticle : searchForArticle,
            }).then(function (response) {
                console.log(response.data)
                setRendredMedicammentListe(response.data)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5>   </h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
                  
                }
            });
        }
    }
    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5> عدد الخيارات  : {commandeData.Wanted_Cars ? commandeData.Wanted_Cars.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'><Button onClick={() => setModalOpen(true)} size='small' icon className='rounded-circle'> <Icon name='plus' /> </Button></div>
            </div>
            <Input icon='pin'   placeholder='نوع السيارة' value={articleNow.carName}  onChange={ (e) => setArticleNow({...articleNow, carName: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox'   value={articleNow.motherMonufactrer}   onChange={ (e) => setArticleNow({...articleNow, motherMonufactrer: e.target.value })} size="small" iconPosition='left' placeholder='شركة التصنيع'  fluid className='mb-1' />
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
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
        </div>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: ''})
    const PannierPannes = [
        {
          menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  bi-sm me-2 ms-2 ' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl'},
          render: () => <EnterCard articleNow={articleNow} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} commandeData={commandeData} />,
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
        if (articleNow.carName == '') { toast.error("أدخل موديل السيارة!", GConf.TostErrorGonf) } 
        else if (articleNow.motherMonufactrer == '') { toast.error("أدخل الشركة المصنعة      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            commandeData.Wanted_Cars.push(articleNow)
            setArticleNow({PK: commandeData.Wanted_Cars.length + 1 , carName:'', motherMonufactrer: ''})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.Wanted_Cars.findIndex((article) => article.A_Code == value);
        commandeData.Wanted_Cars.splice(searchObject, 1);
        let resteWanted_Cars = commandeData.Wanted_Cars;
        setCommandeD({...commandeData, Wanted_Cars: resteWanted_Cars})
    }

    /* Card */
    const ArticleListCard = () =>{
        const ListCard = (props) =>{
            return(<>   
                        <div className='card shadow-sm p-2   border-div ps-4 mb-2'>
                            <div className='row'>
                             
                                <div className='col-10 col-lg-9 text-end  align-self-center'>
                                     <h5 className='mb-0 mt-0'>{props.dataA.carName}</h5>
                                     <small>{props.dataA.motherMonufactrer}</small> 
                                </div>
                                
                                <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
                            </div>
                        </div>
                    </>)
        }
        return (<>
        <div className='card-body mt-2'>
            {commandeData.Wanted_Cars.length != 0 ? 
             <>{commandeData.Wanted_Cars.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
             :
             <div className='text-center'>
                <span className='bi bi-list-columns-reverse bi-lg'></span>
            </div>
             
            }
        </div>
        </>)
    }
    
    const ConfirmCard = () =>{
        return (<>
        <div className='card-body mt-2'>
            <div className='row mb-2'>
                <div className='col-12'  dir='ltr'>
                    <small className='text-danger'>لا نعلم هل خدمة التوصيل متوفرة أم لا </small>
                    <Select options={Livraisonoptions} fluid placeholder='شركة التوصيل ' className='mb-3' onChange={(e, data) => setCommandeD({...commandeData, Livraison_Par: data.value })}  />
                </div>
                <div className='col-12'>
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> وقت التوصيل المطلوب</h5>
                    <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-1' value={commandeData.Wanted_Day} onChange={(e) => setCommandeD({...commandeData, Wanted_Day: e.target.value })}/>
                    <Input className='mb-3' type='time' fluid value={commandeData.Wanted_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Wanted_Time: e.target.value })}  />
                </div>
                <div className='col-12'>
                    <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[tag].themeColor}} disabled={disabledSaveBtn} fluid onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                </div>
            </div>
        </div>
        </>)
    }
        
    return(<>
        <Tab menu={{secondary: true, color: 'grey' , widths: PannierPannes.length , pointing: true, selected: { backgroundColor: GConf.ADIL[tag].themeColor },  dir:'rtl', style:{justifyContent: 'right',} }} className='yes-menu-tabs' panes={PannierPannes} /> 
    </>)
}

function CarLocationSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , Wanted_Cars:[]})
 
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'Demenagemment', text:'Démenagemment'},
        {key:2, value:'إرسال بظائع', text:'إرسال بظائع'},
        {key:3, value:'شركة توصيل', text:'شركة توصيل'},
    ]

   /* ############### Functions #################*/
    
    const SaveCMDFunc = () =>{
        if (commandeData.Wanted_Cars.length == 0 ) {toast.error("أدخل  السيارات المطلوبة   !", GConf.TostErrorGonf)}
        else if (!commandeData.Cause  ) {toast.error("أدخل  سبب الكراء   !", GConf.TostErrorGonf)}
        else if (!commandeData.Depart_Date  ) {toast.error("أدخل  يوم الإستلام   !", GConf.TostErrorGonf)}
        else if (!commandeData.Depart_Time  ) {toast.error("أدخل  وقت الإستلام   !", GConf.TostErrorGonf)}
        else if (!commandeData.Finish_Date  ) {toast.error("أدخل  يوم التسليم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Finish_Time  ) {toast.error("أدخل  وقت التسليم   !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/location-request`, {
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
                  toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-4 border-div'>
                        <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> السيارات التي تود كراءها   </h5>
                        <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                        <h5 className='mb-0 mt-0' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-calendar2'></span>  مدة الحجز </h5>
                        <small>تاريخ التسلم</small>
                        <div className='row mb-0'>
                            <div className='col-6'><Input className='mb-2' type='date' fluid alue={commandeData.Depart_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, Depart_Date: e.target.value })}  /></div> 
                            <div className='col-6'><Input className='mb-2' type='time' fluid alue={commandeData.Depart_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Depart_Time: e.target.value })}  /></div> 
                        </div>
                        <small className='mt-0'>تاريخ التسليم</small>
                        <div className='row'>
                            <div className='col-6'><Input className='mb-2' type='date' fluid alue={commandeData.Finish_Date}  defaultValue={new Date().toISOString().split('T')[0]} onChange={(e) => setCommandeD({...commandeData, Finish_Date: e.target.value })}  /></div> 
                            <div className='col-6'><Input className='mb-2' type='time' fluid alue={commandeData.Finish_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Finish_Time: e.target.value })}  /></div> 
                        </div>
                        
                        <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>سبب كراء السيارة </h5>
                        <small> ماهو سبب كراء السيارة ؟  </small> 
                        <Select fluid placeholder=' إختر السبب' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Cause:data.value})} />

                        <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                        <Form className='mb-3'>
                            <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                        </Form>

                        <div className='col-12'>
                            <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                        </div>

                </div>
        </div>      
    </> );
}

export default CarLocationSpecific;