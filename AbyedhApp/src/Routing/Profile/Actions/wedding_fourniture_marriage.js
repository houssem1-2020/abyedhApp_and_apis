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
                <div className='col-8 align-self-center text-secondary'><h5>عدد الخيارات المدخلة  : {commandeData.Wanted_Products ? commandeData.Wanted_Products.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input icon='pin'   placeholder='إسم المنتج' value={articleNow.Name}  onChange={ (e) => setArticleNow({...articleNow, Name: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'   value={articleNow.Qte}   onChange={ (e) => setArticleNow({...articleNow, Qte: e.target.value })} size="small" iconPosition='left' placeholder='الكمية'  fluid className='mb-1' />
            
            <div className='row'>
                <div className='col-6'><small className='ms-4'>من : </small><Input icon='calendar alternate' type='date'   iconPosition='left'   fluid className='mb-1' value={articleNow.Depart_Date} onChange={(e) => setArticleNow({...articleNow, Wanted_Day: e.target.value })}/></div>
                <div className='col-6'><small className='ms-2'>من : </small><Input icon='calendar alternate' type='date'   iconPosition='left'   fluid className='mb-1' value={articleNow.Finish_Date} onChange={(e) => setArticleNow({...articleNow, Wanted_Day: e.target.value })}/></div>
            </div>
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
                
        </div>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Name:'', Qte: '', Depart_Date: new Date().toISOString().split('T')[0], Finish_Date : new Date().toISOString().split('T')[0]})
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
        if (articleNow.Name == '') { toast.error("أدخل إسم المنتج    !", GConf.TostErrorGonf) } 
        if (articleNow.Qte == '') { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else if (!articleNow.Depart_Date) { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else if (!articleNow.Finish_Date) { toast.error("أدخل الكمية      !", GConf.TostErrorGonf) } 
        else {
 
            commandeData.Wanted_Products.push(articleNow)
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.Wanted_Products.findIndex((article) => article.A_Code == value);
        commandeData.Wanted_Products.splice(searchObject, 1);
        let resteWanted_Products = commandeData.Wanted_Products;
        setCommandeD({...commandeData, Wanted_Products: resteWanted_Products})
    }

    /* Card */
    const ArticleListCard = () =>{
        const ListCard = (props) =>{
            return(<>   
                        <div className='card shadow-sm p-2   border-div ps-4 mb-2'>
                            <div className='row'>
                                <div className='col-10 col-lg-9 text-end  align-self-center'>
                                     <div><b>{props.dataA.Qte} * {props.dataA.Name}</b></div>
                                     <div><small>{props.dataA.Depart_Date} --  {props.dataA.Finish_Date} </small></div> 
                                </div>
                                <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' disabled={disabledSaveBtn} onClick={() => DeleteFromUpdateList(props.dataA.A_Code)}></Button></div>
                            </div>
                        </div>
                    </>)
        }
        return (<>
        <div className='card-body mt-2'>
            {commandeData.Wanted_Products.length != 0 ? 
             <>{commandeData.Wanted_Products.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
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

function WeddingFournitureMarriageSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , Wanted_Products:[]})
 
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

   const SaveCMDFunc = () =>{
        if (commandeData.Wanted_Products.length == 0 ) {toast.error("أدخل  أيام مقترحة    !", GConf.TostErrorGonf)}
        else if (!commandeData.Res_Genre  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{

            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/fourniture-marriage-location`, {
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
                    <Select fluid placeholder='نوع الحجز' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Res_Genre:data.value})} />
                    
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> المنتجات التي تود كرائها </h5>
                    <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                    <h5 className='mb-2 mt-1' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea placeholder='أدخل مزيد التفاصيل' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>

                    <div className='col-12 mt-4'>
                        <Button fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                    </div>

                </div>
        </div>      
    </> );
}

export default WeddingFournitureMarriageSpecific;
