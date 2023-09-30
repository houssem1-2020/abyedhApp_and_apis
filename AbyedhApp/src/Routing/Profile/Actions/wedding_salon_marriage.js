import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
 


const EnterCard = ({articleNow, setArticleNow, disabledSaveBtn, commandeData, AddArticleToList}) =>{
    
    return (<>
        <div className='card-body mt-2'>
            <div className='row mb-3'>
                <div className='col-8 align-self-center text-secondary'><h5>عدد الخيارات المدخلة  : {commandeData.Wanted_Dates ? commandeData.Wanted_Dates.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input icon='calendar alternate' type='date'   iconPosition='left'   fluid className='mb-1' value={articleNow.Wanted_Day} onChange={(e) => setArticleNow({...articleNow, Wanted_Day: e.target.value })}/>
            <div className='row'>
                <div className='col-6'><small className='ms-4'>من : </small><Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_D}    onChange={(e) => setArticleNow({...articleNow, Wanted_Time_D: e.target.value })}  /></div>
                <div className='col-6'><small className='ms-2'>من : </small><Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_F}   onChange={(e) => setArticleNow({...articleNow, Wanted_Time_F: e.target.value })}  /></div>
            </div>
            <br />
            <Button disabled={disabledSaveBtn}  fluid className='rounded-pill' size='small' color='blue' onClick={AddArticleToList}>  <Icon name='edit outline' className='ms-2' /> أضف </Button>
                
        </div>
    </>)
}
const CommandeCard = ({commandeData, setCommandeD, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
    /* Const */
    const [articleNow, setArticleNow] = useState({PK: 1 , Wanted_Day: new Date().toISOString().split('T')[0], Wanted_Time_D : new Date().toLocaleTimeString('fr-FR'), Wanted_Time_F: new Date().toLocaleTimeString('fr-FR') })
    const PannierPannes = [
        {
          menuItem: { key: 'enter',   content:  <span> <span className='bi bi-1-circle  bi-sm me-2 ms-2 ' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl'},
          render: () => <EnterCard articleNow={articleNow} setArticleNow={setArticleNow} disabledSaveBtn={disabledSaveBtn} AddArticleToList={AddArticleToList} commandeData={commandeData} />,
        },
        {
            menuItem: { key: 'article',   content:  <span > <span className='bi bi-2-circle bi-sm  me-2 ms-2' style={{color :GConf.ADIL[tag].themeColor}}></span>   </span> , dir:'rtl' },
            render: () => <ArticleListCard />,
        },
 
    ]
 

    /* Function  */
    const AddArticleToList = () =>{
        if (!articleNow.Wanted_Day ) { toast.error("أدخل   اليوم    !", GConf.TostErrorGonf) } 
        else if (!articleNow.Wanted_Time_D  ) { toast.error("أدخل من      !", GConf.TostErrorGonf) } 
        else if (!articleNow.Wanted_Time_F  ) { toast.error("أدخل إلي      !", GConf.TostErrorGonf) } 
        else {
 
            commandeData.Wanted_Dates.push(articleNow)
            //setArticleNow({PK: commandeData.Wanted_Dates.length + 1 , Name:new Date().toLocaleTimeString('fr-FR'), Qte: new Date().toLocaleTimeString('fr-FR')})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.Wanted_Dates.findIndex((article) => article.A_Code == value);
        commandeData.Wanted_Dates.splice(searchObject, 1);
        let resteWanted_Dates = commandeData.Wanted_Dates;
        setCommandeD({...commandeData, Wanted_Dates: resteWanted_Dates})
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
            {commandeData.Wanted_Dates.length != 0 ? 
             <>{commandeData.Wanted_Dates.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
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

function WeddingSallonMariageSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0] , Wanted_Dates:[]})
 
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'حفلة خطوبة', text:'حفلة خطوبة'},
        {key:2, value:'حفلة زواج', text:'حفلة زواج'},
        {key:3, value:'عيد ميلاد', text:'عيد ميلاد'},
        {key:4, value:'حفل ختان ', text:'حفل ختان '},
        {key:5, value:'مؤتمر ', text:'مؤتمر'},
    ]
 
   /* ############### Functions #################*/
 
    const SaveCMDFunc = () =>{
        if (commandeData.Wanted_Dates.length == 0 ) {toast.error("أدخل  أيام مقترحة    !", GConf.TostErrorGonf)}
        else if (!commandeData.Res_Genre  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Estimate_Presence  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
        else{
 
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/salon-marriage-reserver`, {
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
                    <small>  لماذا تريد حجز القاعة   </small> 
                    <Select fluid placeholder='نوع الحجز' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Res_Genre	: data.value})} />
                    
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الأوقات التي تود الحجز فيها  </h5>
                    <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                    <h5 className='mb-2' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> عدد الحضور المحتمل ؟ </h5>
                    <small>  كم عدد الإستدعاءات </small> 
                    <Input icon='pin'   placeholder=' عدد الحضور' value={commandeData.Estimate_Presence}  onChange={ (e) => setCommandeD({...commandeData, Estimate_Presence: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />

                    <h5 className='mb-0 mt-1' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea  placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>

                    <div className='col-12 mt-4'>
                        <Button fluid className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                    </div>

                </div>
        </div>      
    </> );
}

export default WeddingSallonMariageSpecific;