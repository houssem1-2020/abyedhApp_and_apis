import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce } from 'react-reveal';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Form, Icon, Input, List, Menu, Modal, Select, Tab, TextArea } from 'semantic-ui-react';
import GConf from '../../../AssetsM/APPConf';
import BreadCrumb from '../../../AssetsM/Cards/breadCrumb'
import SKLT from '../../../AssetsM/Cards/usedSlk';
import { toast } from 'react-toastify';
import APPItem from '../../../AssetsM/APPITEM';
import APPConf from '../../../AssetsM/APPConf';

const CustomTabs = ({activeIndex, setActiveIndex,TAG}) => {
    return(<>

           <div className="mt-1 p-1 mb-4"   style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                <Menu secondary >
                    
                    <Menu.Item key={0} active={activeIndex == 0} className='rounded-pill' onClick={ () => setActiveIndex(0)}>
                        <span style={{color: "#1070fd"}}>
                            <b>
                            <span className='bi bi-eye-fill' ></span> Non Vu
                            </b>
                        </span>
                    </Menu.Item>
                    {APPConf.landing[APPConf.systemTag].navItemList2[TAG].slice(2).map((data,index) =>
                            <Menu.Item key={index} active={activeIndex == data.navIndex -1} className='rounded-pill' onClick={ () => setActiveIndex(data.navIndex -1)}>
                                <span style={{color: data.color}}>
                                    <b>
                                    <span className={`bi bi-${data.icon}`}></span> {data.navName}
                                    </b>
                                </span>
                            </Menu.Item>
                     )}
                </Menu>
          </div>
    </>)
}

const VuCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return(<>
            <div className='card card-body shadow-sm mb-2 border-div'>
                <h5>Marquer comme non Vu</h5>

                <div className='card-body'>
                        Marquer cette demande comme non Vu, Ceci vous permettra de le traiter ultérieurement 
                </div> 
                <div className=' mb-2'>
                    <Button fluid disabled={FindBtnState(reqState).seenState} className='rounded-pill bg-info text-white'    onClick={ () => UpdateRequestState('W',false,false,false,false)}><Icon name='eye' /> Marquer comme non Vu </Button>
                </div>
            </div>
    </>)
}
const AccepterCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return(<>
            <div className='card card-body shadow-sm mb-2 border-div'>
                <h5>Accepter Le RendyVous</h5>

                <div className='card-body'>
                    Lorsque vous accepter la demande l'utilisateur sera notifié..
                    <br />
                    Veuillez verifier les donnees de demande : 
                    <div className='mb-1'> Date : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div> 
                    <div className='mb-1'> Temps : {requestData.RDV_Time}</div>
                </div>
                 
                <div className=' mb-2'>
                    <Button fluid disabled={FindBtnState(reqState).acceptState} className='rounded-pill bg-success text-white'    onClick={ () => UpdateRequestState('A',false,false,true,'accepted')}><Icon name='check square' /> Accepter </Button>
                </div>
            </div>
    </>)
}
const RefuserCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return<>
        <div className='card card-body shadow-sm mb-2 border-div'>
            <h5>Refuser Le RendyVous</h5>

            <div className='card-body'>
                Veuillez entrer la cause de la rejection : 
            </div> 
            <div className='col-12 mb-3'>       
                <Form>
                    <TextArea  rows="3" onKeyPress={event => OnKeyPressFunc(event)} placeholder='Cause de Rejection' className='w-100 shadow-sm rounded mb-3' value={requestData.Refuser_Cause} onChange={(e) => setRequestData({...requestData, Refuser_Cause: e.target.value })}/>
                </Form> 
            </div>
            <div className=' mb-2'>
                <Button fluid disabled={FindBtnState(reqState).refuseState} className='rounded-pill bg-danger text-white'    onClick={ () => UpdateRequestState('R','Refuser_Cause',requestData.Refuser_Cause,true,'rejected')}><Icon name='trash alternate' /> Refuser </Button>
            </div>
        </div>

    </>
}
const RetarderCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return<>
        <div className='card card-body border-div mb-4 shadow-sm ltr-force' dir='ltr'>
            <div className='card-body'> Retarder Vers  :  
                <h5 className='mb-1 mt-1'>Date   </h5>
                <Input icon='calendar' type='date' defaultValue={new Date().toISOString().split('T')[0]} size="small" iconPosition='left'   fluid className='mb-1'  onChange={(e) => setRequestData({...requestData, Retarder_Vers: { ...requestData.Retarder_Vers, Date : e.target.value  } })}/>

                <h5 className='mb-1 mt-3'>Temps   </h5>
                <Input icon='time' defaultValue={new Date().toLocaleTimeString('fr-FR')} type='time' size="small" iconPosition='left'   fluid className='mb-1'  onChange={(e) => setRequestData({...requestData, Retarder_Vers: { ...requestData.Retarder_Vers, Temps: e.target.value }  })}/>
            </div>
            <div className='text-end mt-3'>
                <Button disabled={FindBtnState(reqState).reterderState} fluid className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => UpdateRequestState('RT','Retarder_Vers',JSON.stringify(requestData.Retarder_Vers),true,'retarted')}><Icon name='time' /> Retarder  </Button>  
            </div>
        </div>
    </>
}
const RedirecterCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return(<>
        <div className='card card-body border-div mb-4 shadow-sm ltr-force' dir='ltr'>
            <div className='card-body'> Entrer les info de docteur :  
                <h5 className='mb-1 mt-1'>Nom de Docteur   </h5>
                <Input icon='user' type='text' size="small" iconPosition='left'   fluid className='mb-1'  onChange={(e) => setRequestData({...requestData, Redirected_To: { ...requestData.Redirected_To, Name : e.target.value  } })}/>

                <h5 className='mb-1 mt-1'>Telephone   </h5>
                <Input icon='phone' type='text' size="small" iconPosition='left'   fluid className='mb-1'  onChange={(e) => setRequestData({...requestData, Redirected_To: { ...requestData.Redirected_To, Phone : e.target.value }  })}/>


                <h5 className='mb-1 mt-3'>Adresse   </h5>
                <Input icon='map marker alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1'  onChange={(e) => setRequestData({...requestData, Redirected_To: { ...requestData.Redirected_To, Adresse: e.target.value }  })}/>
            </div>
            <div className='text-end mt-3'>
                <Button disabled={FindBtnState(reqState).redirectState} fluid className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => UpdateRequestState('RD','Redirected_To',JSON.stringify(requestData.Redirected_To),true,'redirected')}><Icon name='edit outline' /> Redirecter </Button>  
            </div>
        </div> 
    </>)
}
const TerminerCard = ({requestData, setRequestData, reqState, FindBtnState, UpdateRequestState, OnKeyPressFunc}) =>{
    return<>
        <div className='card card-body shadow-sm mb-2 border-div'>
                <h5>Terminer Le RendyVous</h5>

                <div className='card-body'>
                    Marquer cette demande comme Terminier empêche toute opération ultérieure
                    <br />
                    <small>Il est recommandé d'utiliser cette option lorsque toutes les autres opérations sont terminées</small>
                </div>
                 
                <div className=' mb-2'>
                    <Button fluid disabled={FindBtnState(reqState).terminerState} className='rounded-pill bg-secondary text-white'    onClick={ () => UpdateRequestState('T',false,false,true,'terminer')}><Icon name='check square' /> Terminer </Button>
                </div>
            </div> 
    </>
}

function Coiffure() {
    /*#########################[Const]##################################*/
    const {TAG,CID} = useParams()
    const [activeIndex, setActiveIndex] = useState(0)
    const [reqState, setReqState] = useState('')
    const [loading , setLoading] = useState(false)
    const [requestData, setRequestData] = useState([])
    
    const panesRigth = [
        {
            menuItem: { key: 'articles', icon: 'grab', content:  'Controle ' }, 
            render: () => <VuCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} /> ,
        },            
        {
            menuItem: { key: 'start', icon: 'user', content: 'Patient ' }, 
            render: () => <AccepterCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} />,
        },
        {
            menuItem: { key: 'ffff', icon: 'grab', content:  'Controle ' }, 
            render: () => <RefuserCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} />  ,
        },  
        {
            menuItem: { key: 'dddd', icon: 'user', content: 'Patient ' }, 
            render: () => <RetarderCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} />,
        },          
        {
            menuItem: { key: 'stdddart', icon: 'user', content: 'Patient ' }, 
            render: () => <RedirecterCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} />,
        },
        {
            menuItem: { key: 'ffsd', icon: 'user', content: 'Patient ' }, 
            render: () => <TerminerCard requestData={requestData} setRequestData={setRequestData} reqState={reqState} FindBtnState={FindBtnState} UpdateRequestState={UpdateRequestState} OnKeyPressFunc={OnKeyPressFunc} />,
        }
        
    ]
    const panesInfo = [
        {
            menuItem: { key: 'articles', icon: 'file alternate', content: `${ findElementByLink(`rq/${TAG}`) } Info` }, 
            render: () => <ReqInfoCard />,
        },            
        {
            menuItem: { key: 'start', icon: 'user', content: 'Info Client ' }, 
            render: () => <UserCard />,
        }
        
    ]
    /*#########################[useEffect]##################################*/ 
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/request/info`, {
            PID : GConf.PID,
            CID: CID,
            SystemTag : TAG
          })
          .then(function (response) {
                 console.log(response.data)
                if (!response.data.PID) {
                    toast.error('Demmande Introuvable !', GConf.TostSuucessGonf)
                    setTimeout(() => {  window.location.href = "/App/S"; }, 2000)
                } else {
                    setRequestData(response.data)
                    setLoading(true)
                    setReqState(response.data.State)  
                    if (response.data.State == 'W') { UpdateRequestState('S',false,false,false,false)} 
                }  
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de charger la commande   </div></>, GConf.TostInternetGonf)   
              setRequestData([])
              setLoading(true)
            }
          });
    }, [])


    /*#########################[Functions]##################################*/
    const OnKeyPressFunc = (e) => {
        if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122) || (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 42 || e.charCode == 32 || e.charCode == 47 )) {
            e.preventDefault();
        }   
    }
    function findElementByLink(link) {
        for (const category in APPItem) {
          if (APPItem[category] && APPItem[category].itemsList) {
            for (const slide of APPItem[category].itemsList) {
              if (Array.isArray(slide)) {
                for (const subSlide of slide) {
                  if (subSlide.link === link) {
                    return subSlide.itemName
                  }
                }
              } else if (slide.link === link) {
                return slide.itemName
              }
            }
          }
        }
        return null;
    }
    const FindBtnState = (reqState) =>{
        switch(reqState) {
            case 'W': return {seenState: true, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:true};  
            case 'S': return {seenState: false, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:true};    
            case 'A': return {seenState: true, acceptState: true, refuseState: true, reterderState: true, redirectState:true , terminerState:false};  
            case 'R': return {seenState: true, acceptState: true, refuseState: true, reterderState: true, redirectState:true , terminerState:true};  
            case 'RT': return {seenState: true, acceptState: false, refuseState: false, reterderState: false, redirectState:true , terminerState:true};  
            case 'RD': return {seenState: true, acceptState: false, refuseState: false, reterderState: true, redirectState:false , terminerState:false};  
            case 'T': return {seenState: true, acceptState: true, refuseState: true, reterderState: true, redirectState:true , terminerState:true};  
            default:  return {seenState: true, acceptState: true, refuseState: true, reterderState: true, redirectState:true , terminerState:true};      
          }
    }

    const UpdateRequestState = (stateBtn,dataGenre,selectedData,saveNotif,actionName) =>{
        axios.post(`${GConf.ApiLink}/request/controle`, {
            PID : GConf.PID,
            UID : requestData.UID,
            TAG : APPConf.systemTag,
            RID: CID,
            genreTag : TAG,
            state: stateBtn,
            data: selectedData,
            dataGenre: dataGenre,
            saveNotif : saveNotif,
            actionName : `${TAG}_${actionName}`,
          })
          .then(function (response) { 
            setReqState(stateBtn)
            if (stateBtn == 'S') { console.log('Vu') } else { toast.success(<><div> C'est Fait   </div></>, GConf.TostInternetGonf)   }
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de modifier L'etat du commande  </div></>, GConf.TostInternetGonf)   
               
            }
          });
    }


    /*#########################[Card]##################################*/
    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(reqState) {
            case 'W': return <StateCard color='warning' text='En Attent' />;  
            case 'S': return <StateCard color='info' text='Vu' />;  
            case 'A': return <StateCard color='success' text='Acepteé' /> ;
            case 'R': return <StateCard color='danger' text='Refuseé' />;
            case 'RT': return <StateCard color='retarder' text='Retardeé' />;
            case 'RD': return <StateCard color='redirecter' text='Redirecteé' />;
            case 'T': return <StateCard color='secondary' text='Termineé' />;
            default:  return <StateCard color='dark' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };

    const ReqInfoCard = () =>{
        return<>
             <h5>Info du { findElementByLink(`rq/${TAG}`) }</h5>
                    <div className="table-responsive">
                        <table className="table table-striped text-nowrap">
                            <tbody>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-person me-2'></span> Nom  </td>
                                    <td>{loading ? requestData.Name : ''}</td>
                                </tr>
                                <tr>
                                    <td className='text-secondary'><span className='bi bi-calendar me-2'></span> Jour Voulu </td>
                                    <td>{loading ? <>{new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</> : ''}</td>
                                </tr>
                                <tr>
                                    <td className='text-secondary'><span className='bi bi-star me-2'></span> Services</td>
                                    <td>
                                        <ul>
                                            {loading ? 
                                            <>
                                            {JSON.parse(requestData.Services).map((data,index) => <li key={index}>{data.Name} : {data.Qte}</li>)}
                                            </> 
                                            : ''}
                                        </ul>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-chat-dots-fill me-2'></span> Commentaire</td>
                                    <td>{loading ? requestData.Comment : ''}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
        </>
    }
    const UserCard = () =>{
        return(<>
 
                    <h5>Info Client</h5>
                    <div className='row mb-2'>
                        <div className='text-center mb-3'> 
                            <img src={`https://cdn.abyedh.tn/images/p_pic/${requestData.PictureId}.gif`} className='rounded-circle' width='60px'/>
                        </div>
                        <div className='col-12 col-lg-6 mb-2'><span className='bi bi-person-fill'></span> Nom :  {loading ? requestData.Name : ''}</div> 
                        <div className='col-12 mb-2'><span className='bi bi-calendar-fill'></span> Age : {loading ? new Date().getFullYear() -  new Date(requestData.BirthDay).getFullYear()   : ''}</div>
                        <div className='col-12 col-lg-6 mb-2'><span className='bi bi-phone-fill'></span> Phone : {loading ? requestData.PhoneNum : ''}</div> 
                        <div className='col-12 col-lg-6 mb-2'><span className='bi bi-geo-alt-fill'></span> Gouv : {loading ? requestData.BirthGouv : ''} </div> 
                        <div className='col-12 col-lg-6 mb-2'><span className='bi bi-map-fill'></span> Deleg : {loading ? requestData.BirthDeleg : ''}</div> 
                    </div> 
                    <div className='text-end'>
                        <Button  className='rounded-pill text-secondary btn-imprimer' size='mini'     onClick={(e) => alert('Impossible d\'enregister le client, Car vous etes sur la version alfa du system ')}><Icon name='edit outline' /> Enregistrer Client</Button>
                    </div>  
        </>)
    }

    return ( <> 
        <BreadCrumb links={[ {id:1, name:'Communication', linkable:true, link:"/App/S"}, {id:2, name:'Info', linkable:false} ]} />
        <br />
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className='row'>
                    <div className='col-5'><h3 className='text-center mb-4'> { findElementByLink(`rq/${TAG}`) } </h3></div>
                    <div className='col-7'><h3 className='text-end'><StateCard status={requestData.State} /></h3></div>
                </div> 
                <div className='card card-body bg-transparent border-div mb-3 mt-2'>
                    <Tab menu={{widths: panesInfo.length , secondary: true, pointing: true  }} panes={panesInfo} />      
                </div>
                <br />
                <br />
            </div>
            
            <div className="col-12 col-lg-4">
                    <div className="sticky-top" style={{top:'70px', zIndex:'999'}}>
                        <CustomTabs  activeIndex={activeIndex} setActiveIndex={setActiveIndex} TAG={TAG}  />
                        <Tab menu={{ secondary: true }} activeIndex={activeIndex} panes={panesRigth}  className='no-menu-tabs mt-2' /> 
                    </div>
            </div>
        </div> 
    </> );
}

export default Coiffure;