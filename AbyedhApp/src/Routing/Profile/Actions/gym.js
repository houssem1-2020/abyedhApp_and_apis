import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, Tab } from 'semantic-ui-react'
import GConf from '../../../AssetsM/generalConf';
import { Form, TextArea, Input , Button, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';

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
const CommandeCard = ({souscriptionData, setsouscriptionData, SaveCMDFunc , disabledSaveBtn, tag, loaderState}) =>{
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

function GymActions(props) {

    /* ############### Const #################*/
    const [souscriptionData, setsouscriptionData] = useState({Wanted_Times:[]})
    const [loaderState, setLS] = useState(false)
    const [disabledSaveBtn, setDisabledBtn] = useState(false)
    const genres = [
        { key: 1 , value: 'mensuel', text: 'شهري' },
        { key: 2 , value: 'annuel', text: 'سنوي' },
    ]

   /* ############### Functions #################*/
    const saveFunction = () =>{
        if (souscriptionData.Wanted_Times.length == 0) {toast.error("أدخل أوقات التمرين !", GConf.TostErrorGonf)}
        else if (!souscriptionData.User_Age) {toast.error("ادخل الاسم  !", GConf.TostErrorGonf)}
        else if (!souscriptionData.Ab_Genre) {toast.error("ادخل نوعه الاشتراك  !", GConf.TostErrorGonf)}
        
        else if (!souscriptionData.Comment) {toast.error("ادخل تعليق   !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/Action/gym-souscription`, {
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
    

    return ( <>
        <div className='m-0'>
                <div   dir='rtl' className='card card-body shadow-sm pt-3 border-div'>
                     
                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>   العمر </h5>
                    <Input className='mb-1' fluid icon='user' placeholder=' العمر' value={souscriptionData.User_Age} onChange={(e) => setsouscriptionData({...souscriptionData, User_Age: e.target.value })} />

                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>   نوع الإشتراك   </h5>
                    <Select className='mb-1' placeholder='نوع الإشتراك' fluid options={genres} onChange={(e, { value }) => setsouscriptionData({...souscriptionData, Ab_Genre: value })} />

                     
                     
                    <h5 className='mb-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span> الأوقات التي تود التدرب فيها  </h5>
                    <small>ماهي الإوقات التي تريد أن تتمرن فيها </small>
                    <CommandeCard souscriptionData={souscriptionData} setsouscriptionData={setsouscriptionData}  disabledSaveBtn={disabledSaveBtn} tag={props.TAG} loaderState={loaderState} /> 

                    
                    <h5 className='mb-2 mt-2 ' style={{color: GConf.ADIL[props.TAG].themeColor}}> <span className='bi bi-person-x-fill'></span>  إوقات التمرين </h5>
                    <Form className='mb-4'>
                        <TextArea  placeholder='إذكر الإختصاصات التي تود المشاركة فيها ' className='font-droid' rows={2} value={souscriptionData.Comment} onChange={ (e,value) => setsouscriptionData({...souscriptionData, Comment:e.target.value})} />
                    </Form>

                    <div className='text-end'>
                        <Button fluid className='rounded-pill' onClick={saveFunction} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:GConf.ADIL[props.TAG].themeColor, color:'white'}} > <Icon name='save' />  تسجيل إشتراك  <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                    </div>
                </div>
        </div>      
    </> );
}

export default GymActions;