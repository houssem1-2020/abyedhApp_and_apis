import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import TableGrid from '../../../AssetsM/tableGrid';


const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData, AddArticleToList}) =>{
    
    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5>عدد الخيارات المدخلة  : {commandeData.articles ? commandeData.articles.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input icon='pin'   placeholder='إسم المنتج' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'   value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: e.target.value })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
            
            <div className='row'>
                <div className='col-6'><small className='ms-4'>من : </small><Input icon='calendar alternate' type='date' defaultValue={new Date().toISOString().split('T')[0]}  iconPosition='left'   fluid className='mb-1' value={articleNow.Wanted_Day} onChange={(e) => setArticleNow({...articleNow, Wanted_Day: e.target.value })}/></div>
                <div className='col-6'><small className='ms-2'>من : </small><Input icon='calendar alternate' type='date' defaultValue={new Date().toISOString().split('T')[0]}  iconPosition='left'   fluid className='mb-1' value={articleNow.Wanted_Day} onChange={(e) => setArticleNow({...articleNow, Wanted_Day: e.target.value })}/></div>
            </div>
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
                
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
        if (articleNow.Wanted_Day == '') { toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        else if (articleNow.Wanted_Time_D == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else if (articleNow.Wanted_Time_F == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else {
 
            commandeData.articles.push(articleNow)
            //setArticleNow({PK: commandeData.articles.length + 1 , Name:new Date().toLocaleTimeString('fr-FR'), Qte: new Date().toLocaleTimeString('fr-FR')})
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
                                <div className='col-10 col-lg-9 text-end  align-self-center'>
                                     <div><b>{props.dataA.Wanted_Day}</b></div>
                                     <div><small>{props.dataA.Wanted_Time_D} --  {props.dataA.Wanted_Time_F} </small></div> 
                                </div>
                                <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
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

function WeddingFournitureMarriageSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , articles:[]})
    const [rendyVousD, setRdvData] = useState([])
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'حفلة خطوبة', text:'حفلة خطوبة'},
        {key:2, value:'حفلة زواج', text:'حفلة زواج'},
        {key:3, value:'عيد ميلاد', text:'عيد ميلاد'},
        {key:4, value:'حفل ختان ', text:'حفل ختان '},
        {key:5, value:'مؤتمر ', text:'مؤتمر'},
    ]
    const dejaGuide = [
        {key:1, value:'نعم', text:'نعم'},
        {key:2, value:'لا', text:'لا'},
    ]
    const renouvellementOption = [
        {key:1, value:'أول مرة ', text:'أول مرة '},
        {key:2, value:'تجديد', text:'تجديد'},
    ]
   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (!rendyVousD.comment) {toast.error("أدخل التشخيص !", GConf.TostErrorGonf)}
        else if (!rendyVousD.date) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/docteur-rdv`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                rendyVousData : rendyVousD,
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

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-4 border-div'>
                    <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  سبب الحجز  </h5>
                    <small>  ماهي مناسبة الحجز  </small> 
                    <Select fluid placeholder='نوع الحجز' options={serviceOptions} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                    
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> المنتجات التي تود كرائها </h5>
                    <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                    <h5 className='mb-0 mt-1' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea   rows={2} value={rendyVousD.comment} onChange={ (e,value) => setRdvData({...rendyVousD, comment:e.target.value})} />
                    </Form>

                    <div className='col-12 mt-4'>
                        <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                    </div>

                </div>
        </div>      
    </> );
}

export default WeddingFournitureMarriageSpecific;
