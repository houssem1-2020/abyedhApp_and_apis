import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce } from 'react-reveal';
 
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Form, Icon, Input, List, Modal, Select, Tab, TextArea } from 'semantic-ui-react';
import GConf from '../../../AssetsM/generalConf';
import BreadCrumb from '../../../AssetsM/Cards/breadCrumb'
import SKLT from '../../../AssetsM/Cards/usedSlk';
import { toast } from 'react-toastify';
import usePrintFunction from '../../../AssetsM/Hooks/printFunction';
import FrameForPrint from '../../../AssetsM/Cards/frameForPrint';
import TunMap from '../../../AssetsM/tunMap';


function DocteurSpecific() {
    /*#########################[Const]##################################*/
    const {TAG,CID} = useParams()
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
            render: () => <><BtnsCard /> <CommentaireCard /></>,
        },            
        {
            menuItem: { key: 'start', icon: 'user', content: 'Patient ' }, 
            render: () => <UserCard />,
        }
        
    ]
    /*#########################[useEffect]##################################*/ 
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/request/info`, {
            PID : GConf.PID,
            CID: CID,
            SystemTag : 'docteur_rdv'
          })
          .then(function (response) {
                 
                if (!response.data[0]) {
                    toast.error('Commande Introuvable !', GConf.TostSuucessGonf)
                    setTimeout(() => {  window.location.href = "/S/rq"; }, 2000)
                } else {
                    setCommandeD(response.data[0])
                    setLoading(true)
                    if(response.data[0].State == 'A'  || response.data[0].State == 'R' || response.data[0].State == 'RD'){setBtnState(true)}
                    if(response.data[0].State == 'W'){ UpdateState('S') }
                    
                    
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
    const NavigateFunction = (link) => { navigate(link) }
    const PrintFunction = (frameId) =>{ usePrintFunction(frameId) }
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
    const OnKeyPressFunc = (e) => {
        if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122) || (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 42 || e.charCode == 32 || e.charCode == 47 )) {
            e.preventDefault();
        }   
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
    const CommentaireCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 mt-3 border-div'>
                    <div className='row mb-3'>
                        <div className='col-6 text-start'><h5>Info Patient</h5></div>
                        <div className='col-6 text-end'>{commandeData.Releted_UID ? <span className='badge bg-success p-2'>Déja Enregistreé</span> : <span className='badge bg-danger badge-lg'>Nouveaux Membre</span>}</div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-12 col-lg-6'> Nom : {loading ? commandeData.Name : ''} </div> 
                        <div className='col-12 col-lg-6'> Phone : {loading ? commandeData.PhoneNum : ''} </div> 
                        <div className='col-12 col-lg-6'> Gouv : {loading ? commandeData.BirthGouv : ''} </div> 
                        <div className='col-12 col-lg-6'> Deleg : {loading ? commandeData.BirthDeleg : ''} </div> 
                    </div> 
                    {commandeData.Releted_UID ? 
                    <div className='row mb-2 mt-4'>
                        <div className='col-4 border-end text-center'> <h2 className='mb-1'>0</h2><small>Rendy-Vous</small> </div> 
                        <div className='col-4 border-end text-center'> <h2 className='mb-1'>0</h2><small>Seances</small> </div> 
                        <div className='col-4 text-center'> <h2 className='mb-1'>0</h2><small>Ordonance</small> </div> 
                    </div> 
                    : <></> }
                </div>
        </>)
    }
    const BtnsCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 border-div'>
                    <h5>Controle</h5>
                    <div className='row '>
                        <div className='col-6 mb-2'>
                            <Button disabled={btnState} className='rounded-pill bg-danger text-white'  fluid onClick={ () => UpdateState('R')}><Icon name='delete calendar' /> Annulée</Button>
                        </div>
                        <div className='col-6 mb-2'>
                            <Button disabled={btnState} className='rounded-pill bg-success text-white'  fluid onClick={ () => UpdateState('A')}><Icon name='calendar check' /> Accepteé</Button>
                        </div>
                        <div className='col-6 mb-2'>
                            <Button disabled={btnState} className='rounded-pill bg-primary  text-white'  fluid onClick={ () => openEditModal('RT')}><Icon name='delete calendar' /> Retardeé</Button>
                        </div>
                        <div className='col-6 mb-2'>
                            <Button disabled={btnState} className='rounded-pill  bg-warning text-white'  fluid onClick={ () => openEditModal('RD')}><Icon name='delete calendar' /> Redirecteé</Button>
                        </div>


                        <div className='col-12 mb-2'>
                            <Button as='a' onClick={ (e) => NavigateFunction(`/S/sa/ajouter?CID=${CID}`)} animated disabled={btnState && commandeData.State != 'A'} className='rounded-pill bg-system-btn'  fluid>
                                <Button.Content visible><Icon name='calendar check' /> Accepteé </Button.Content>
                                <Button.Content hidden >
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                            {/* <Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/rs/info/${CID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button> 
                            <Button   onClick={ (e) => NavigateFunction(`/S/sa/ajouter?CID=${CID}`)} className='rounded-pill bg-system-btn '  fluid  ><Icon name='check circle' /> Accepter </Button>*/}
                        </div>
                    </div>
                     
                </div>
        </>)
    }
    const UserCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 mt-3 border-div'>
                    <h5>Info Client</h5>
                    <div className='row mb-2'>
                        <div className='text-center mb-3'> 
                            <img src={`https://cdn.abyedh.tn/images/p_pic/${commandeData.PictureId}.gif`} className='rounded-circle' width='60px'/>
                        </div>
                        <div className='col-12 col-lg-6 mb-3'> Nom :  {loading ? commandeData.Name : ''}
                            <Input icon='add user' onKeyPress={event => OnKeyPressFunc(event)} list="clientList" placeholder={loading ? commandeData.Name : ''} value={abonnemmentData.Name}  onBlur={ (e) => setAbonnemmentData({...abonnemmentData, Name: e.target.value })}  iconPosition='left'   fluid className='mb-1' />
                        </div> 
                        <div className='col-12 col-lg-6 mb-3'> Phone : {loading ? commandeData.PhoneNum : ''}
                            <Input icon='add user' onKeyPress={event => OnKeyPressFunc(event)} list="clientList" placeholder={loading ? commandeData.PhoneNum : ''} value={abonnemmentData.PhoneNum}   onBlur={ (e) => setAbonnemmentData({...abonnemmentData, PhoneNum: e.target.value })}  iconPosition='left'   fluid className='mb-1' />
                        </div> 
                        <div className='col-12 col-lg-6 mb-3'> Gouv : {loading ? commandeData.BirthGouv : ''} 
                            <Select placeholder=' Gouvernorat' fluid className='mb-2' options={TunMap.Gouv} value={abonnemmentData.Gouv} onChange={(e, { value }) => GetDelegList(value)} />
                        </div> 
                        <div className='col-12 col-lg-6 mb-3'> Deleg : {loading ? commandeData.BirthGouv : ''}
                            <Select placeholder=' Delegation ' fluid value={abonnemmentData.Deleg} options={delegList} onChange={(e, { value }) => setAbonnemmentData({...abonnemmentData, Deleg: value })} />
                        </div> 
                        <div className='col-12 mb-3'>
                            Deleg : {loading ? commandeData.BirthGouv : ''}
                            <Form>
                                <TextArea  rows="3" onKeyPress={event => OnKeyPressFunc(event)} placeholder='designer votre article' className='w-100 shadow-sm rounded mb-3' value={abonnemmentData.Adress} onChange={(e) => setAbonnemmentData({...abonnemmentData, Adress: e.target.value })}/>
                            </Form> 
                        </div>
                    </div> 
                    <div className='text-end'>
                        <Button  className='rounded-pill text-secondary btn-imprimer' size='mini' disabled={commandeData.Releted_UID}   onClick={(e) => SaveClientFunction()}><Icon name='edit outline' /> Enregistrer Client</Button>
                    </div>  
                </div>
        </>)
    }
    const StateModalCard = ({ status }) => {
         
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'RT': return <RetarderCard />;  
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
    const RetarderCard = () =>{
        return<>
                <h5 className='mb-1 mt-1'>Retarder Vers   </h5>
                <Input icon='calendar alternate' type='date' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <h5 className='mb-1 mt-3'>Retarder Vers   </h5>
                <Input icon='calendar alternate' type='time' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <div className='text-end mt-3'>
                    <Button  className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => RetarderFunction()}><Icon name='edit outline' /> Retarder</Button>
                </div>

        </>
    }
    const RedirecterCard = () =>{
        return<>
                <h5 className='mb-1 mt-1'>Nom de Docteur   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <h5 className='mb-1 mt-3'>Position   </h5>
                <Input icon='calendar alternate' type='text' size="small" iconPosition='left'   fluid className='mb-1' value={retarderData.RT_Date} onChange={(e) => setRetarderData({...retarderData, RT_Date: e.target.value })}/>

                <div className='text-end mt-3'>
                    <Button  className='rounded-pill text-secondary btn-imprimer'  onClick={(e) => RetarderFunction()}><Icon name='edit outline' /> Redirecter </Button>
                </div>

        </>
    }

    return ( <> 
        <BreadCrumb links={GConf.BreadCrumb.RequestInfo} />
        <br />
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className='row'>
                    <div className='col-5'><h3 className='text-center mb-4'>Rendy Vous </h3></div>
                    <div className='col-7'><h3 className='text-end'><StateCard status={commandeData.State} /></h3></div>
                </div> 

                <div className='card card-body bg-transparent border-div mb-3 mt-2'>
                    <h5>Info du rendy Vous</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row"><span className='bi bi-person'></span> Nom Et Prenon </th>
                                <td>{loading ? commandeData.Name : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row"><span className='bi bi-calendar'></span> Date Volu</th>
                                <td>{loading ? new Date(commandeData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row"><span className='bi bi-clock'></span> Temps Volu</th>
                                <td>{loading ? commandeData.RDV_Time : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row"><span className='bi bi-calendar-check'></span> Passe Le</th>
                                <td>{loading ? new Date(commandeData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row"><span className='bi bi-chat-dots-fill'></span> Commentaire</th>
                                <td>{loading ? commandeData.Comment : ''}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                     
                </div>
                <br />
                <br />
            </div>
            
            <div className="col-12 col-lg-4">
                <Bounce bottom>
                    <div className="sticky-top" style={{top:'70px', zIndex:'999'}}>
                        <Tab menu={{widths: panesRigth.length , secondary: true, pointing: true  }} panes={panesRigth} /> 
                    </div>
                </Bounce>
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