import React, {useEffect,useState}  from 'react';
import GConf from '../../../AssetsM/APPConf';
import { _ } from "gridjs-react";
import axios from 'axios';
import { Fade } from 'react-reveal';
import SKLT from '../../../AssetsM/Cards/usedSlk';
import TableGrid from '../../../AssetsM/Cards/tableGrid';
import SubNav from '../../../AssetsM/Cards/subNav';
import GoBtn from '../../../AssetsM/Cards/goBtn';
import TableImage from '../../../AssetsM/Cards/tableImg';
import { toast } from 'react-toastify';
import { Button , Icon, Modal, Tab, Statistic, Input} from 'semantic-ui-react';
import { useNavigate} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import ADIL from '../../../AssetsM/APPITEM';
import CountUp from 'react-countup';


function DocteurSpecific() {
     /*#########################[Const]##################################*/
     const [addTarifActive, setAddTarifActive] = useState(false)
     const [addAssurance, setAddAssurance] = useState(false)
     const [addDiplome, setAddDiplome] = useState(false)
     const [addStructure, setAddStructure] = useState(false)
     const [returnedProfileData, setReturnedProfileData] = useState({SP_Tarif:[], SP_Payee:[], SP_Voyages:[], SP_Documment:[]})
     const [loaderState, setLS] = useState(false)
   

   /*#########################[UseEfeect]##################################*/
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/spesific`, {
           PID : GConf.PID,
           SystemTag : GConf.systemTag
        })
        .then(function (response) {
 
          setReturnedProfileData(response.data) 
        }).catch((error) => {
          if(error.request) {
            toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, GConf.TostInternetGonf)   
            setReturnedProfileData([])
          }
        });
    }, [])
    
   /*#########################[Function]##################################*/
    const DeleteFromTarifList = (targetIndex, targetGenre) =>{
      let emptyArray = JSON.parse(returnedProfileData[targetGenre])
      emptyArray.splice(targetIndex, 1);
      setReturnedProfileData({...returnedProfileData, [targetGenre] :JSON.stringify(emptyArray) })

    }
    const UpdateFunction = (targetGenre) =>{
      // if (commandeData.articles.length == 0 ) {toast.error("أدخل  منتجات   !", GConf.TostErrorGonf)}
      // else if (!commandeData.Wanted_Day  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
      // else if (!commandeData.Wanted_Time  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
      // else if (!commandeData.Livraison_Par  ) {toast.error("أدخل  اليوم   !", GConf.TostErrorGonf)}
      // else{
           
          setLS(true)
          axios.post(`${GConf.ApiLink}/spesific/update`, {
            PID : GConf.PID,
            SystemTag : GConf.systemTag,
            toUpdateData : {Genre : targetGenre, Value: returnedProfileData[targetGenre]}
          }).then(function (response) {
              toast.success(<><div><h5>تم التسجيل بنجاح </h5>  </div></>, GConf.TostInternetGonf)
              setLS(false)
               
          }).catch((error) => {
              if(error.request) {
                toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de connecter aux systeme </div></>, GConf.TostInternetGonf)   
                setLS(false)
              }
          });
      // } 
  }

    /*#########################[Card]##################################*/
    
    const ListeVide = (props) =>{
      return(<>
        <div className='text-center pt-4 text-secondary'>
          <span className={`bi bi-${props.icon} bi-lg`}></span>
          <h5 className='mt-2'>Cliquer Sur + pour ajouter </h5>
        </div>

      </>)
    }

    const AddTarifCard = (props) =>{
        const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

        const AddArticleToList = () =>{
          if (dataNow.Forfait == '') { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
          else if (dataNow.Prix == '') { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
          else if (dataNow.Description == '') { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
          else {
              if (returnedProfileData.SP_Tarif == '') {
                  let emptyArray = []
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Tarif:JSON.stringify(emptyArray) })
              } else {    
                  let emptyArray = JSON.parse(returnedProfileData.SP_Tarif)
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Tarif: JSON.stringify(emptyArray) })
              }
          }
          
        }


        return(<>
        <div className='card-body  mb-4'>
            <Input icon='pin'   placeholder='Nom du Forfait' value={dataNow.Forfait}  onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'  placeholder='Prix'  value={dataNow.Prix}   onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} size="small" iconPosition='left'    fluid className='mb-1' />
            <Input icon='comment alternate' placeholder='Description' value={dataNow.Description}   onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} size="small" iconPosition='left'  fluid className='mb-1' />
            
            <br />
            <Button    fluid className='rounded-pill' size='small' color='blue' onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
            
        </div>
        </>)
    }
    const TarifListeCard = (props) =>{
        return(<>
            {returnedProfileData.SP_Tarif == '' ? 
            <ListeVide icon='cash-coin' /> 
            :
            <>
              <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
              {JSON.parse(returnedProfileData.SP_Tarif).map((data,index) => 
                <div className='card p-2 border-div mb-2' key={index}>
                    <div className='row'>
                        <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'>{data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                        <div className='col-3 align-self-center'>{data.Prix}</div> 
                        <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Tarif')}></Button></div> 
                    </div>
                </div>
              )}
              </div>
              <br />
              <Button    fluid className='rounded-pill' size='tiny' color='blue' onClick={() => UpdateFunction('SP_Tarif')}>  <Icon name='plus' className='ms-2' /> Modifier </Button>
            </> 
            } 
        </>)
    }

    const AddAssurance = (props) =>{
        const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

        const AddArticleToList = () =>{
          if (dataNow.Forfait == '') { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
          else if (dataNow.Prix == '') { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
          else if (dataNow.Description == '') { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
          else {
              if (returnedProfileData.SP_Payee == '') {
                  let emptyArray = []
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Payee:JSON.stringify(emptyArray) })
              } else {    
                  let emptyArray = JSON.parse(returnedProfileData.SP_Payee)
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Payee: JSON.stringify(emptyArray) })
              }
          }
          
        }


        return(<>
        <div className='card-body  mb-4'>
            <Input icon='pin'   placeholder='Nom du Forfait' value={dataNow.Forfait}  onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
            <Input icon='dropbox' type='number'  placeholder='Prix'  value={dataNow.Prix}   onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} size="small" iconPosition='left'    fluid className='mb-1' />
            <Input icon='comment alternate' placeholder='Description' value={dataNow.Description}   onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} size="small" iconPosition='left'  fluid className='mb-1' />
            
            <br />
            <Button    fluid className='rounded-pill' size='small' color='blue' onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
            
        </div>
        </>)
    }
    const AssuranceListeCard = (props) =>{
          return(<>
            {returnedProfileData.SP_Payee == '' ? 
            <ListeVide icon='globe' /> 
            :
            <>
              <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
                {JSON.parse(returnedProfileData.SP_Payee).map((data,index) => 
                  <div className='card p-2 border-div mb-2' key={index}>
                      <div className='row'>
                          <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'>{data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                          <div className='col-3 align-self-center'>{data.Prix}</div> 
                          <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Payee')}></Button></div> 
                      </div>
                  </div>
                )}
              </div>
              <br />
              <Button    fluid className='rounded-pill' size='tiny' color='blue' onClick={() => UpdateFunction('SP_Payee')}>  <Icon name='plus' className='ms-2' /> Modifier </Button>
            </> 
            } 
        </>)
    }

    const AddDiplome = (props) =>{
        const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

        const AddArticleToList = () =>{
          if (dataNow.Forfait == '') { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
          else if (dataNow.Prix == '') { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
          else if (dataNow.Description == '') { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
          else {
              if (returnedProfileData.SP_Voyages == '') {
                  let emptyArray = []
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Voyages:JSON.stringify(emptyArray) })
              } else {    
                  let emptyArray = JSON.parse(returnedProfileData.SP_Voyages)
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Voyages: JSON.stringify(emptyArray) })
              }
          }
          
        }


        return(<>
            <div className='card-body  mb-4'>
                <Input icon='pin'   placeholder='Nom du Forfait' value={dataNow.Forfait}  onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
                <Input icon='dropbox' type='number'  placeholder='Prix'  value={dataNow.Prix}   onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} size="small" iconPosition='left'    fluid className='mb-1' />
                <Input icon='comment alternate' placeholder='Description' value={dataNow.Description}   onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} size="small" iconPosition='left'  fluid className='mb-1' />
                
                <br />
                <Button    fluid className='rounded-pill' size='small' color='blue' onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
                
            </div>
        </>)
    }
    const DiplomeListeCard = (props) =>{
        return(<>
          {returnedProfileData.SP_Voyages == '' ? 
          <ListeVide icon='airplane' /> 
          :
          <>
            <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
            {JSON.parse(returnedProfileData.SP_Voyages).map((data,index) => 
              <div className='card p-2 border-div mb-2' key={index}>
                  <div className='row'>
                      <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'>{data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                      <div className='col-3 align-self-center'>{data.Prix}</div> 
                      <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Voyages')}></Button></div> 
                  </div>
              </div>
            )}
            </div>
            <br />
            <Button    fluid className='rounded-pill' size='tiny' color='blue' onClick={() => UpdateFunction('SP_Voyages')}>  <Icon name='plus' className='ms-2' /> Modifier </Button>
          </> 
          } 
      </>)
    }

    const AddStructure = (props) =>{
      const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

      const AddArticleToList = () =>{
        if (dataNow.Forfait == '') { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
        else if (dataNow.Prix == '') { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
        else if (dataNow.Description == '') { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
        else {
            if (returnedProfileData.SP_Documment == '') {
                let emptyArray = []
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Documment:JSON.stringify(emptyArray) })
            } else {    
                let emptyArray = JSON.parse(returnedProfileData.SP_Documment)
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Documment: JSON.stringify(emptyArray) })
            }
        }
        
      }


      return(<>
          <div className='card-body  mb-4'>
              <Input icon='pin'   placeholder='Nom du Forfait' value={dataNow.Forfait}  onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} size="small" iconPosition='left'   fluid className='mb-1' />
              <Input icon='dropbox' type='number'  placeholder='Prix'  value={dataNow.Prix}   onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} size="small" iconPosition='left'    fluid className='mb-1' />
              <Input icon='comment alternate' placeholder='Description' value={dataNow.Description}   onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} size="small" iconPosition='left'  fluid className='mb-1' />
              
              <br />
              <Button    fluid className='rounded-pill' size='small' color='blue' onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
              
          </div>
      </>)
    }
    const StructureCard = (props) =>{
        return(<>
          {returnedProfileData.SP_Voyages == '' ? 
          <ListeVide icon='folder-symlink' /> 
          :
          <>
            <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
            {JSON.parse(returnedProfileData.SP_Voyages).map((data,index) => 
              <div className='card p-2 border-div mb-2' key={index}>
                  <div className='row'>
                      <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'>{data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                      <div className='col-3 align-self-center'>{data.Prix}</div> 
                      <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Voyages')}></Button></div> 
                  </div>
              </div>
            )}
            </div>
            <br />
            <Button    fluid className='rounded-pill' size='tiny' color='blue' onClick={() => UpdateFunction('SP_Voyages')}>  <Icon name='plus' className='ms-2' /> Modifier </Button>
          </> 
          } 
      </>)
    }

    return (<>
            
          
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4>Liste des chambres: </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() =>setAddTarifActive(!addTarifActive)}> <Icon name={addTarifActive ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addTarifActive ? 
          <AddTarifCard />
          :
          <TarifListeCard />
           
          }

          <br />
          <br />
          <br />
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4> Payee  : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setAddAssurance(!addAssurance)}> <Icon name={addAssurance ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addAssurance ? 
          <AddAssurance />
          :
          <AssuranceListeCard />
          }

          <br />
          <br />
          <br />
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4>  Voyages  : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setAddDiplome(!addDiplome)}> <Icon name={addDiplome ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addDiplome ? 
          <AddDiplome />
          :
          <DiplomeListeCard />
          }

          <br />
          <br />
          <br />
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4> Documment  : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setAddStructure(!addStructure)}> <Icon name={addStructure ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addStructure ? 
          <AddStructure />
          :
          <StructureCard />
          }

    </>);
}

export default DocteurSpecific;