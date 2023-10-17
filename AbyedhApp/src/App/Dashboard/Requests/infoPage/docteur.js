import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce } from 'react-reveal';
 
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Form, Icon, Input, List, Menu, Modal, Select, Tab, TextArea } from 'semantic-ui-react';
import GConf from '../../../AssetsM/APPConf';
import BreadCrumb from '../../../AssetsM/Cards/breadCrumb'
import SKLT from '../../../AssetsM/Cards/usedSlk';
import { toast } from 'react-toastify';
import usePrintFunction from '../../../AssetsM/Hooks/printFunction';
import FrameForPrint from '../../../AssetsM/Cards/frameForPrint';
import TunMap from '../../../../AssetsM/tunMap';
import APPItem from '../../../AssetsM/APPITEM';

const CustomTabs = ({activeIndex, setActiveIndex}) => {
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
                    <Menu.Item key={1} active={activeIndex == 1} className='rounded-pill' onClick={ () => setActiveIndex(1)}>
                        <span style={{color: "#198754"}}>
                            <b>
                            <span className='bi bi-check-square-fill' ></span> Accepter
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={2} active={activeIndex == 2} className='rounded-pill' onClick={ () => setActiveIndex(2)}>
                        <span style={{color: "#dc3545"}}>
                            <b>
                            <span className='bi bi-x-square-fill' ></span> Refuser
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={3} active={activeIndex == 3} className='rounded-pill' onClick={ () => setActiveIndex(3)}>
                        <span style={{color: "#ad059f"}}>
                            <b>
                                <span className='bi bi-compass-fill' ></span> Retarder
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={4} active={activeIndex == 4} className='rounded-pill' onClick={ () => setActiveIndex(4)}>
                        <span style={{color: "#92ab03"}}>
                            <b>
                            <span className='bi bi-arrow-clockwise' ></span> Redirecter
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={5} active={activeIndex == 5} className='rounded-pill' onClick={ () => setActiveIndex(5)}>
                        <span style={{color: "#6c757d"}}>
                            <b>
                            <span className='bi bi-slash-square-fill' ></span> Terminer
                            </b>
                        </span>
                    </Menu.Item>

                     
                </Menu>
          </div>
    </>)
}

function DocteurSpecific() {
    /*#########################[Const]##################################*/
    const {TAG,CID} = useParams()
    const [activeIndex, setActiveIndex] = useState(0)
    const [reqState, setReqState] = useState('')

    const navigate = useNavigate();
    const [articleL, setArticleL] = useState([])
    const [commandeData, setCommandeD] = useState([])
    const [facturerData, setFacturerD] = useState([])
    const [loading , setLoading] = useState(false)
    const [btnState, setBtnState] = useState(false)
    const [printLink, setPrintLink] = useState(`/Pr/commande/${CID}`)
    const [loaderState, setLS] = useState(false)
    const [abonnemmentData, setAbonnemmentData] = useState({ CommandeID : CID, totale: 0 , articles:[]})
    const [retarderData, setRetarderData] = useState({RT_Date:'2022-02-08'})
    const [redirecterData, setRedirecterData] = useState()
    const [modalS, setModalS] = useState(false)
    const [modalStateValue, setModalStateValue] = useState()
    const [delegList ,setDelegList] = useState([])
    const panesRigth = [
        {
            menuItem: { key: 'articles', icon: 'grab', content:  'Controle ' }, 
            render: () => <VuCard /> ,
        },            
        {
            menuItem: { key: 'start', icon: 'user', content: 'Patient ' }, 
            render: () => <AccepterCard />,
        },
        {
            menuItem: { key: 'ffff', icon: 'grab', content:  'Controle ' }, 
            render: () => <RefuserCard />  ,
        },            
        {
            menuItem: { key: 'stdddart', icon: 'user', content: 'Patient ' }, 
            render: () => <RedirecterCard />,
        },
        {
            menuItem: { key: 'dddd', icon: 'user', content: 'Patient ' }, 
            render: () => <RetarderCard />,
        },
        {
            menuItem: { key: 'ffsd', icon: 'user', content: 'Patient ' }, 
            render: () => <TerminerCard />,
        }
        
    ]
    const panesInfo = [
        {
            menuItem: { key: 'articles', icon: 'file alternate', content:  'Demmande Info ' }, 
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
                 
                if (!response.data[0]) {
                    toast.error('Commande Introuvable !', GConf.TostSuucessGonf)
                    setTimeout(() => {  window.location.href = "/App/S"; }, 2000)
                } else {
                    setCommandeD(response.data[0])
                    setLoading(true)
                    setReqState(response.data[0].State)
                    //if(response.data[0].State == 'A'  || response.data[0].State == 'R' || response.data[0].State == 'RD'){setBtnState(true)}
                    //if(response.data[0].State == 'W'){ UpdateState('S') }
                    
                    
                }  
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de charger la commande   </div></>, GConf.TostInternetGonf)   
              setBtnState(true)
              setArticleL([])
              setCommandeD([])
              setLoading(true)
            }
          });
    }, [])


    /*#########################[Functions]##################################*/
 
    const PrintFunction = (frameId) =>{ usePrintFunction(frameId) }
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

    const UpdateState = (stateBtn) =>{
        axios.post(`${GConf.ApiLink}/request/controle`, {
            PID : GConf.PID,
            RID: CID,
            state: stateBtn,
            SystemTag : 'docteur_rdv'
          })
          .then(function (response) {
            //setCommandeD({ ...commandeData, State: stateBtn}) 
           // console.log(commandeData) 
           if (stateBtn != 'S') {
            toast.success(<><div> Etat Modifier  </div></>, GConf.TostInternetGonf)   
           } 
           if (stateBtn == 'A' || stateBtn == 'R' ||  stateBtn == 'RD') {
            setBtnState(true)   
           }           
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de modifier L'etat du commande  </div></>, GConf.TostInternetGonf)   
              setBtnState(true)
            }
          });
    }

    const FindBtnState = (reqState) =>{
        switch(reqState) {
            case 'W': return {seenState: false, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            case 'S': return {seenState: true, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:false};    
            case 'A': return {seenState: true, acceptState: true, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            case 'R': return {seenState: true, acceptState: true, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            case 'RT': return {seenState: true, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            case 'RD': return {seenState: true, acceptState: false, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            case 'F': return {seenState: true, acceptState: true, refuseState: false, reterderState: false, redirectState:false , terminerState:false};  
            default:  return {seenState: true, acceptState: true, refuseState: true, reterderState: true, redirectState:true , terminerState:true};      
          }
    }
    const FacturerCommande = () =>{
        axios.post(`${GConf.ApiLink}/seances/ajouter`, {
            PID : GConf.PID,
            factD: facturerData,
        })
        .then(function (response) { 
            if(response.status = 200) {
                UpdateState('A')
                toast.success("Factureé !", GConf.TostSuucessGonf)
                setBtnState(true)
            }
            else{
                toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
            }           
        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Facturer la commande  </div></>, GConf.TostInternetGonf)   
              setBtnState(true)
            }
          });
        
    }
    const SaveClientFunction = () =>{
        console.log(commandeData)
        setLS(true)
        axios.post(`${GConf.ApiLink}/patient/ajouter`, {
            PID : GConf.PID,
            clientD : {CIN: '', Name:commandeData.Name, Phone:commandeData.PhoneNum , Gouv:commandeData.BirthGouv, Deleg:commandeData.BirthDeleg, Adress:'', Releted_UID:commandeData.UID},
        }).then(function (response) {
            if(response.data.affectedRows) {
                //setSaveBtnState(true)
                toast.success("Client Ajouter !", GConf.TostSuucessGonf)
                //SaveNotification('clientAjouter',GConf.PID, clientD)
                setLS(false)
            }
            else{
                toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
                setLS(false)
                }
        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Le client sera enregistrer sur votre ordinateur   </div></>, GConf.TostInternetGonf)   
            }
          });
          
    }
    const openEditModal = (selected) =>{
        setModalStateValue(selected) 
        setModalS(true)
    }
    const GetDelegList = (value) =>{
        setAbonnemmentData({...abonnemmentData, Gouv: value })
        let found = TunMap.Deleg.filter(element => element.tag === value)
        setDelegList([])
        setDelegList(found)
    }
    const RetarderFunction = () =>{

    }
    const RedirecterFunction = () =>{
        
    }

    /*#########################[Card]##################################*/
    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'W': return <StateCard color='warning' text='En Attent' />;  
            case 'S': return <StateCard color='info' text='Vu' />;  
            case 'A': return <StateCard color='success' text='Acepteé' /> ;
            case 'R': return <StateCard color='danger' text='Refuseé' />;
            case 'RT': return <StateCard color='retarder' text='Retardeé' />;
            case 'RD': return <StateCard color='rederecter' text='Redirecteé' />;
            case 'F': return <StateCard color='secondary' text='Termineé' />;
            default:  return <StateCard color='secondary' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };
    const StateModalCard = ({ status }) => {
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'RT': return <RefuserCard />;  
            case 'RD': return <RedirecterCard />;  
            default:  return <>Introuvable</>;    
          }
        }, [status]);
      
        return (
          <div >
            {statusCard()}
          </div>
        );
    };

    const VuCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 border-div'>
                    <h5>Marquer comme non Vu</h5>

                    <div className='card-body'>
                        Marquer cette demmande comme non Vu 
                    </div> 
                    <div className=' mb-2'>
                        <Button fluid disabled={FindBtnState(reqState).seenState} className='rounded-pill bg-info text-white'    onClick={ () => UpdateState('R')}><Icon name='eye' /> Marquer comme non Vu </Button>
                    </div>
                </div>
        </>)
    }
    const AccepterCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 border-div'>
                    <h5>Accepter Le RendyVous</h5>

                    <div className='card-body'>
                        Marquer cette demmande comme non Vu 
                        <div className='mb-1'> Date : </div> 
                        <div className='mb-1'> Temps : </div>
                    </div>
                     
                    <div className=' mb-2'>
                        <Button fluid disabled={FindBtnState(reqState).acceptState} className='rounded-pill bg-success text-white'    onClick={ () => UpdateState('A')}><Icon name='check square' /> Accepter </Button>
                    </div>
                </div>
        </>)
    }
    const RefuserCard = () =>{
        return<>
            <div className='card card-body shadow-sm mb-2 border-div'>
                <h5>Refuser Le RendyVous</h5>

                <div className='card-body'>
                    Marquer cette demmande comme non Vu 
                </div> 
                <div className='col-12 mb-3'>       
                    <Form>
                        <TextArea  rows="3" onKeyPress={event => OnKeyPressFunc(event)} placeholder='designer votre article' className='w-100 shadow-sm rounded mb-3' value={abonnemmentData.Adress} onChange={(e) => setAbonnemmentData({...abonnemmentData, Adress: e.target.value })}/>
                    </Form> 
                </div>
                <div className=' mb-2'>
                    <Button fluid disabled={FindBtnState(reqState).refuseState} className='rounded-pill bg-success text-white'    onClick={ () => UpdateState('A')}><Icon name='check square' /> Accepter </Button>
                </div>
            </div>

        </>
    }
    const RetarderCard = () =>{
        return<>
            <div className='card card-body border-div mb-4 shadow-sm'>
                <h5 className='mb-1 mt-1'>Jour   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <h5 className='mb-1 mt-3'>Heur   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <div className='text-end mt-3'>
                    <Button disabled={FindBtnState(reqState).reterderState}  className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => RetarderFunction()}><Icon name='edit outline' /> Redirecter </Button>
                </div>
            </div> 
        </>
    }
    const RedirecterCard = () =>{
        return(<>
                <div className='card card-body border-div mb-4 shadow-sm'>
                <h5 className='mb-1 mt-1'>Nom de Docteur   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <h5 className='mb-1 mt-3'>Position   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <div className='text-end mt-3'>
                    <Button disabled={FindBtnState(reqState).redirectState}  className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => RetarderFunction()}><Icon name='edit outline' /> Redirecter </Button>
                </div>
            </div> 
        </>)
    }
    const TerminerCard = () =>{
        return<>
            <div className='card card-body shadow-sm mb-2 border-div'>
                    <h5>Terminer Le RendyVous</h5>

                    <div className='card-body'>
                        Marquer cette demmande comme non Vu 
                        <div className='mb-1'> Date : </div> 
                        <div className='mb-1'> Temps : </div>
                    </div>
                     
                    <div className=' mb-2'>
                        <Button fluid disabled={FindBtnState(reqState).terminerState} className='rounded-pill bg-secondary text-white'    onClick={ () => UpdateState('A')}><Icon name='check square' /> Terminer </Button>
                    </div>
                </div> 
        </>
    }

    const ReqInfoCard = () =>{
        return<>
             <h5>Info du rendy Vous</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-person me-2'></span> Nom  </td>
                                    <td>{loading ? commandeData.Name : ''}</td>
                                </tr>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-calendar me-2'></span> Date </td>
                                    <td>{loading ? new Date(commandeData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''}</td>
                                </tr>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-clock me-2'></span> Temps </td>
                                    <td>{loading ? commandeData.RDV_Time : ''}</td>
                                </tr>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-calendar-check me-2'></span> Passe Le</td>
                                    <td>{loading ? new Date(commandeData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''}</td>
                                </tr>
                                <tr>
                                    <td className='col-5 text-secondary'><span className='bi bi-chat-dots-fill me-2'></span> Commentaire</td>
                                    <td>{loading ? commandeData.Comment : ''}</td>
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
                            <img src={`https://cdn.abyedh.tn/images/p_pic/${commandeData.PictureId}.gif`} className='rounded-circle' width='60px'/>
                        </div>
                        <div className='col-12 col-lg-6 mb-3'> Nom :  {loading ? commandeData.Name : ''}</div> 
                        <div className='col-12 mb-3'> Age : {loading ? new Date().getFullYear() -  new Date(commandeData.BirthDay).getFullYear()   : ''}</div>
                        <div className='col-12 col-lg-6 mb-3'> Phone : {loading ? commandeData.PhoneNum : ''}</div> 
                        <div className='col-12 col-lg-6 mb-3'> Gouv : {loading ? commandeData.BirthGouv : ''} </div> 
                        <div className='col-12 col-lg-6 mb-3'> Deleg : {loading ? commandeData.BirthDeleg : ''}</div> 
                    </div> 
                    <div className='text-end'>
                        <Button  className='rounded-pill text-secondary btn-imprimer' size='mini'     onClick={(e) => alert('Impossible d\'enregister le client, Car vous etes sur la version alfa du system ')}><Icon name='edit outline' /> Enregistrer Client</Button>
                    </div>  
        </>)
    }
    return ( <> 
        <BreadCrumb links={[ {id:1, name:'Comminication', linkable:true, link:"/App/S"}, {id:2, name:'Info', linkable:false} ]} />
        <br />
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className='row'>
                    <div className='col-5'><h3 className='text-center mb-4'> { findElementByLink(`rq/${TAG}`) } </h3></div>
                    <div className='col-7'><h3 className='text-end'><StateCard status={commandeData.State} /></h3></div>
                </div> 
                <div className='card card-body bg-transparent border-div mb-3 mt-2'>
                    <Tab menu={{widths: panesInfo.length , secondary: true, pointing: true  }} panes={panesInfo} />      
                </div>
                <br />
                <br />
            </div>
            
            <div className="col-12 col-lg-4">
                    <div className="sticky-top" style={{top:'70px', zIndex:'999'}}>
                        <CustomTabs  activeIndex={activeIndex} setActiveIndex={setActiveIndex}   />
                        <Tab menu={{ secondary: true }} activeIndex={activeIndex} panes={panesRigth}  className='no-menu-tabs mt-2' /> 
                    </div>
            </div>
        </div>
        <Modal
              size='small'
              open={modalS}
              closeIcon
              onClose={() => setModalS(false)}
              onOpen={() => setModalS(true)}
          >
              <Modal.Header><h4> Retarder & Redirecter </h4></Modal.Header>
              <Modal.Content scrolling>
                    <StateModalCard status={modalStateValue} />
              </Modal.Content>
              <Modal.Actions>
                          <Button className='rounded-pill' negative onClick={ () => setModalS(false)}> <span className='bi bi-x' ></span> Fermer</Button>
              </Modal.Actions>
        </Modal>
 
        {/* <FrameForPrint frameId='framed' src={printLink} /> */}
    </> );
}

export default DocteurSpecific;