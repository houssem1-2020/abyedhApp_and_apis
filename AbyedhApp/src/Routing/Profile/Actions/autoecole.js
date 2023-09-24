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
                <div className='col-8 align-self-center text-secondary'><h5>عدد الخيارات المدخلة  : {commandeData.Wanted_Times ? commandeData.Wanted_Times.length : 0}  </h5></div>
                <div className='col-4 align-self-center text-start'></div>
            </div>
            <Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_D}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setArticleNow({...articleNow, Wanted_Time_D: e.target.value })}  />
            <Input className='mb-3' type='time' fluid value={articleNow.Wanted_Time_F}  defaultValue={new Date().toLocaleTimeString('fr-FR')} onChange={(e) => setArticleNow({...articleNow, Wanted_Time_F: e.target.value })}  />
           
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
        if (!articleNow.Wanted_Time_D ) { toast.error("أدخل وقت البداية !", GConf.TostErrorGonf) } 
        else if (!articleNow.Wanted_Time_F) { toast.error("أدخل وقت الأنتهاء      !", GConf.TostErrorGonf) } 
        else {
            console.log(articleNow)
            commandeData.Wanted_Times.push(articleNow)
            setArticleNow({PK: commandeData.Wanted_Times.length + 1 , Name:new Date().toLocaleTimeString('fr-FR'), Qte: new Date().toLocaleTimeString('fr-FR')})
        }
        
    }
    const DeleteFromUpdateList = (value) =>{
        const searchObject= commandeData.Wanted_Times.findIndex((article) => article.A_Code == value);
        commandeData.Wanted_Times.splice(searchObject, 1);
        let resteWanted_Times = commandeData.Wanted_Times;
        setCommandeD({...commandeData, Wanted_Times: resteWanted_Times})
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
            {commandeData.Wanted_Times.length != 0 ? 
             <>{commandeData.Wanted_Times.map( (val, index) => <ListCard key={index} dataA={val}/>)}</>
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

function AutoEcoleSpecific(props) {
    /* ############### Const #################*/
    const [commandeData, setCommandeD] = useState({Wanted_Day: new Date().toISOString().split('T')[0], BirthDay_Check: new Date().toISOString().split('T')[0] , Wanted_Times:[]})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const serviceOptions = [
        {key:1, value:'A1', text:'صنف أ1'},
        {key:2, value:'A', text:' صنف أ'},
        {key:3, value:'BH', text:' صنف ب + هـ'},
        {key:4, value:'G', text:' صنف ب'},
        {key:5, value:'GH', text:' صنف ج + هـ'},
        {key:6, value:'D', text:'صنف د'},
        {key:7, value:'DH', text:' صنف د + هـ'},
        {key:8, value:'D1', text:' صنف د1'},
        {key:9, value:'K', text:' صنف ح '},
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
        if (!commandeData.Renouvellemment) {toast.error("تأكيد التجديد !", GConf.TostErrorGonf)}
        else if (!commandeData.BirthDay_Check) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!commandeData.Genre) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!commandeData.Drive_Befor) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (!commandeData.Comment) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else if (commandeData.Wanted_Times.length == 0) {toast.error("ادخل الموعد  !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/autoecole-inscrie`, {
                UID : props.UID,
                PID : props.PID ,
                TAG : props.TAG ,
                commandeD : commandeData,
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
                <div   dir='rtl' className='card card-body shadow-sm pt-4 border-div'>
                    <h5 className='mb-2' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  تجديد أم أولا مرة  ؟   </h5>
                    <Select fluid placeholder='تجديد أم أولا مرة ' options={renouvellementOption} onChange={ (e,data) => setCommandeD({...commandeData, Renouvellemment: data.value})} />

                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> كم هو عمرك ؟  </h5>
                    <small> أدخل تاريخ الولادة </small>
                    <Input icon='calendar alternate' type='date'  iconPosition='left'   fluid className='mb-1' value={commandeData.BirthDay_Check} onChange={(e) => setCommandeD({...commandeData, BirthDay_Check: e.target.value })}/>

                    <h5 className='mb-0 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> صنف الرخضة </h5>
                    <small> صنف الرخضة    </small> 
                    <Select fluid placeholder='نوع الرحلة' options={serviceOptions} onChange={ (e,data) => setCommandeD({...commandeData, Genre: data.value})} />

                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الأوقات التي تود التدرب فيها  </h5>
                    <CommandeCard commandeData={commandeData} setCommandeD={setCommandeD} SaveCMDFunc={SaveCMDFunc} disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                    <h5 className='mb-2' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> هل أنت متعود علي القيادة من قبل ؟ </h5>
                    <Select fluid placeholder='هل قمت بالقيادة من قبل ' options={dejaGuide} onChange={ (e,data) => setCommandeD({...commandeData, Drive_Befor: data.value})} />

                    <h5 className='mb-0 mt-1' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  ملاحضات   </h5>        
                    <Form className='mb-3'>
                        <TextArea placeholder='ملاحضات' className='font-droid'  rows={2} value={commandeData.Comment} onChange={ (e,value) => setCommandeD({...commandeData, Comment:e.target.value})} />
                    </Form>

                    <div className='col-12 mt-4'>
                        <Button  className='rounded-pill text-white' style={{backgroundColor: GConf.ADIL[props.TAG].themeColor}} disabled={disabledSaveBtn}   onClick={SaveCMDFunc}><Icon name='save' className='ms-2' /> تسجيل <Loader inverted active={loaderState} inline size='tiny' className='ms-2'/></Button>
                    </div>

                </div>
        </div>      
    </> );
}

export default AutoEcoleSpecific;