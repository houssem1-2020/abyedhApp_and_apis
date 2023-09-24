import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader, Select} from 'semantic-ui-react'
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData, AddArticleToList}) =>{
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
                <div className='col-8 align-self-center text-secondary'><h5>عدد المنتجات في السلة : {commandeData.articles ? commandeData.articles.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'><Button onClick={() => setModalOpen(true)} size='small' icon className='rounded-circle'> <Icon name='plus' /> </Button></div>
            </div>
            <Input icon='pin'   placeholder='إسم المنتج' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'   value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: e.target.value })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
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
        {
            menuItem: { key: 'check',   content:  <span >  <span className='bi bi-3-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>  </span> , dir:'rtl' },
            render: () => <ConfirmCard />,
        },
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
                            <div className='col-2 align-self-center pe-3'><b>{props.dataA.Qte} </b>  </div>
                                <div className='col-8 col-lg-9 text-end  align-self-center'>
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
                <span className='bi bi-basket2-fill  ' style={{fontSize:100, color: GConf.ADIL[tag].themeColor}}></span>
            </div>
             
            }
        </div>
        </>)
    }
    
    const ConfirmCard = () =>{
        return (<>
        <div className='card-body mt-2'>
            <div className='row mb-2'>
            <small className='text-danger text-end'  dir='rtl'>لا نعلم هل خدمة التوصيل متوفرة أم لا </small>
                <div className='col-12'  dir='ltr'>
                    
                    <Select options={Livraisonoptions} fluid placeholder='شركة التوصيل ' className='mb-3' onChange={(e, data) => setCommandeD({...commandeData, Livraison_Par: data.value })}  />
                </div>
                <div className='col-12'>
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-person-x-fill'></span> وقت التوصيل المطلوب</h5>
                    <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-1' value={commandeData.Wanted_Day} onChange={(e) => setCommandeD({...commandeData, Wanted_Day: e.target.value })}/>
                    <Input className='mb-3' type='time' fluid value={commandeData.Wanted_Time}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setCommandeD({...commandeData, Wanted_Time: e.target.value })}  />
                </div>
                <h5 className='mb-0 mt-3' style={{color: GConf.ADIL[tag].themeColor}}> <span className='bi bi-chat-dots-fill'></span>  ملاحضات   </h5>        
                <Form className='mb-3'>
                    <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.comment} onChange={ (e,value) => setCommandeD({...commandeData, comment:e.target.value})} />
                </Form>

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

 
function PtvViandeSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , articles:[]})
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)

 
    

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
        if (commandeData.articles.length == 0 ) {toast.error("أدخل  منتجات   !", GConf.TostErrorGonf)}
        else if (!commandeData.Wanted_Day  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{
            console.log(commandeData)
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/pharmacie-shop`, {
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
 
    
    /* ############### Card #################*/
     
    return ( <>
    <div className='m-0' dir='rtl'>
        <div className='card p-2 border-div shadow-sm'>
            <h5 className='text-secondary mb-1'>قم بإدخال المنتجات  
            </h5> <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 
        </div>
    </div>
        
    </> );
}

export default PtvViandeSpecific;
