import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce } from 'react-reveal';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Icon, List } from 'semantic-ui-react';
import GConf from '../../../AssetsM/APPConf';
import BreadCrumb from '../../../AssetsM/Cards/breadCrumb'
import SKLT from '../../../AssetsM/Cards/usedSlk';
import { toast } from 'react-toastify';
import usePrintFunction from '../../../AssetsM/Hooks/printFunction';
import FrameForPrint from '../../../AssetsM/Cards/frameForPrint';


function RequestInfo() {
    /*#########################[Const]##################################*/
    const {TAG,CID} = useParams()
    const [articleL, setArticleL] = useState([])
    const [commandeData, setCommandeD] = useState([])
    const [facturerData, setFacturerD] = useState([])
    const [loading , setLoading] = useState(false)
    const [btnState, setBtnState] = useState(false)
    const [printLink, setPrintLink] = useState(`/Pr/commande/${CID}`)
    const [loaderState, setLS] = useState(false)

    /*#########################[useEffect]##################################*/ 
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/request/info`, {
            PID : GConf.PID,
            CID: CID,
            SystemTag : TAG
          })
          .then(function (response) {
                console.log(response.data)
                if (!response.data[0]) {
                    toast.error('Commande Introuvable !', GConf.TostSuucessGonf)
                    setTimeout(() => {  window.location.href = "/S/rq"; }, 2000)
                } else {
                    setCommandeD(response.data[0])
                    setLoading(true)
                    //setFacturerD({client: response.data[0].Client, de:'Sidi Bourouis', vers: response.data[0].Adress, jour: response.data[0].Date_Volu, totale: response.data[0].Totale , articles:JSON.parse(response.data[0].Articles)})    
                    if(response.data[0].State != 'W' && response.data[0].State != 'S'){setBtnState(true)}
                    if(response.data[0].State == 'W' ){UpdateState('S') }
                    
                }  
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de charger la commande   </div></>, GConf.TostInternetGonf)   
              setLoading(true)
              setBtnState(true)
              setArticleL([])
              setCommandeD([])
            }
          });
    }, [])

    /*#########################[Functions]##################################*/
    const PrintFunction = (frameId) =>{ usePrintFunction(frameId) }
    const UpdateState = (stateBtn) =>{
        axios.post(`${GConf.ApiLink}/reservation/controle`, {
            PID : GConf.PID,
            RID: CID,
            state: stateBtn,
            SystemTag : TAG
          })
          .then(function (response) {
            //setCommandeD({ ...commandeData, State: stateBtn}) 
            toast.success("Etat Changeé !", GConf.TostSuucessGonf)
            if(stateBtn != 'S'){setBtnState(true)}            
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de modifier L'etat du commande  </div></>, GConf.TostInternetGonf)   
              setBtnState(true)
            }
          });
    }
    const FacturerCommande = () =>{
        axios.post(`${GConf.ApiLink}/facture/ajouter`, {
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
        axios.post(`${GConf.ApiLink}/client/ajouter`, {
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
    /*#########################[Card]##################################*/
    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'W': return <StateCard color='warning' text='En Attent' />;  
            case 'S': return <StateCard color='info' text='Vu' />;  
            case 'A': return <StateCard color='success' text='Acepteé' /> ;
            case 'R': return <StateCard color='danger' text='Refuseé' />;
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
                    <h5>Info Client</h5>
                    <div className='row mb-2'>
                        <div className='col-12 col-lg-6'> Nom : {loading ? commandeData.Name : ''} </div> 
                        <div className='col-12 col-lg-6'> Phone : {loading ? commandeData.PhoneNum : ''} </div> 
                        <div className='col-12 col-lg-6'> Gouv : {loading ? commandeData.BirthGouv : ''} </div> 
                        <div className='col-12 col-lg-6'> Deleg : {loading ? commandeData.BirthDeleg : ''} </div> 
                    </div> 
                    <div className='text-end'>
                        <Button  className='rounded-pill text-secondary btn-imprimer' size='mini' disabled={commandeData.Releted_UID}   onClick={(e) => SaveClientFunction()}><Icon name='edit outline' /> Enregistrer Client</Button>
                    </div>  
                </div>
        </>)
    }
    const BtnsCard = () =>{
        return(<>
                <div className='card card-body shadow-sm mb-2 border-div'>
                    <h5>Controle</h5>
                    <div className='row mb-2'>
                        <div className='col-6'>
                            <Button disabled={btnState} className='rounded-pill bg-danger text-white'  fluid onClick={ () => UpdateState('R')}><Icon name='delete calendar' /> Anulée</Button>
                        </div>
                        <div className='col-6'>
                            {/* <Button as='a' href={`/S/rq/facturer/${CID}`} animated disabled={btnState} className='rounded-pill bg-system-btn'  fluid>
                                <Button.Content visible><Icon name='cart plus' /> Facturer </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button> */}
                            <Button disabled={btnState} className='rounded-pill bg-system-btn '  fluid onClick={() => UpdateState('A')}><Icon name='check circle' /> Accepter </Button>
                        </div>
                    </div>
                    <div className='row mb-2 d-none'>
                        <div className='col-12'>
                            <Button  className='rounded-pill btn-imprimer'  fluid onClick={(e) => PrintFunction('framed')}><Icon name='edit outline' /> Imprimer</Button>
                        </div>
                    </div>
                </div>
        </>)
    }
    const CommandeHeader = () =>{
        return(<>
                
                <br />
                <div className='row'>
                    <div className='col-6'>
                        <div className='text-secondary'><b>CODE COMMANDE : </b> {CID}</div>
                        <div className='text-secondary'><b>CLIENT: </b> {loading ? <NavLink  exact='true' to={`/S/cl/info/${commandeData.R_ID}`}> {commandeData.Name } </NavLink> : SKLT.BarreSkl } </div>
                    </div>
                    <div className='col-6'>
                        <div className='text-secondary'><b>Passé Le  : </b> {loading ?  new Date(commandeData.Passed_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : SKLT.BarreSkl } </div>
                        <div className='text-secondary'><b>Voulu Le : </b> {loading ? new Date(commandeData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )  : SKLT.BarreSkl } </div>
                    </div>
                </div>
        </>)
    }
    
    return ( <> 
        <BreadCrumb links={GConf.BreadCrumb.RequestInfo} />
        <br />
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className='row'>
                    <div className='col-8'><h2 className='text-center mb-4'>RESERVATION </h2></div>
                    <div className='col-4'><h2 className='text-end'><StateCard status={commandeData.State} /></h2></div>
                </div>
                
                 
                <br />
                <br />
                <div className='card card-body bg-transparent border-div mb-3'>
                    <h5>Info Reservation</h5>
                    <div class="table-responsive">
                        <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Nom</th>
                                <td>{loading ? commandeData.User_Name : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row">Date</th>
                                <td>{loading ? new Date(commandeData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ) : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row">Temps</th>
                                <td>{loading ? commandeData.Wanted_Time : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row">Table</th>
                                <td>{loading ? commandeData.Table_Num : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row">Commentaire</th>
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
                <div className="sticky-top" style={{top:'70px'}}>
                    <BtnsCard />
                    <CommentaireCard />
                </div>
            </Bounce>
            </div>
        </div>
        <FrameForPrint frameId='framed' src={printLink} />
    </> );
}

export default RequestInfo;