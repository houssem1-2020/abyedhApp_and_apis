import React, {useEffect,useState}  from 'react';
import GConf from '../../../AssetsM/APPConf';
import { _ } from "gridjs-react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button , Icon, Modal, Tab, Statistic, Input, Placeholder} from 'semantic-ui-react';
import APPConf from '../../../AssetsM/APPConf';


function DocteurSpecific() {
     /*#########################[Const]##################################*/
     const [loading, setLoading] = useState(true)
     
     const [addOneData, setOneData] = useState(false)
     const [addTwoData, setTwoData] = useState(false)
     const [addThreeData, setThreeData] = useState(false)
     const [addFourData, setFourData] = useState(false)

     const [addOneDataWas, setOneDataWas] = useState(false)
     const [addTwoDataWas, setTwoDataWas] = useState(false)
     const [addThreeDataWas, setThreeDataWas] = useState(false)
     const [addFourDataWas, setFourDataWas] = useState(false)

     const [returnedProfileData, setReturnedProfileData] = useState({SP_Tarif:[], SP_Assurance:[], SP_Diplomes:[]})
     const [loaderState, setLS] = useState(false)
   

   /*#########################[UseEfeect]##################################*/
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/spesific`, {
           PID : GConf.PID,
           SystemTag : GConf.systemTag
        })
        .then(function (response) {
 
          setReturnedProfileData(response.data) 
          setLoading(false)

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
      switch (targetGenre) {
        case 'SP_Tarif':
          setOneDataWas(true)
          break;
        case 'SP_Assurance':
          setTwoDataWas(true)
          break;
        case 'SP_Diplomes':
          setThreeDataWas(true)
            break;
        case 'SP_Examain':
          setFourDataWas(true)
            break;
        default:
          break;
      }


    }
    const UpdateFunction = (targetGenre) =>{           
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
    
    const SekeltonCard = () =>{
      const PlaceHolderCard = () =>{
          return(<>
          <Placeholder className='mb-0 border-div' style={{ height: 30, width: '100%' }}>
              <Placeholder.Image />
          </Placeholder>
          </>)
      }
      return(<>
          <PlaceHolderCard />
          <PlaceHolderCard />
          <PlaceHolderCard />
      </>)
    }
    const ListeVide = (props) =>{
      return(<>
        <div className='text-center pt-4 text-secondary'>
          <span className={`bi bi-${props.icon} bi-lg`}></span>
          <h5 className='mt-2'>Cliquer Sur + pour ajouter </h5>
        </div>

      </>)
    }

    const AddOneDataCard = (props) =>{
      const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

      const AddArticleToList = () =>{
        if (!dataNow.Forfait) { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
        else if (!dataNow.Prix) { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
        else if (!dataNow.Description) { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
        else {
            if (returnedProfileData.SP_Tarif == '') {
                let emptyArray = []
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Tarif:JSON.stringify(emptyArray) })
                setOneDataWas(true)
            } else {    
                let emptyArray = JSON.parse(returnedProfileData.SP_Tarif)
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Tarif: JSON.stringify(emptyArray) })
                setOneDataWas(true)
            }
        }
        
      }


      return(<>
      
       <div className='card-body  mb-4 text-end' >
          <input placeholder='Nom du Forfait'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} />
          <input type='number' placeholder='Prix en D.T'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} />
          <input placeholder='Description'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} />
          <br />
          <Button  className='rounded-pill  '   size='small' basic={addOneDataWas ? false : true}  color={addOneDataWas ? 'blue' : undefined}  onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
          
      </div>
      </>)
    }
    const OneDataListeCard = (props) =>{
        return(<>
        {loading ? <SekeltonCard /> : 
          <>
            {returnedProfileData.SP_Tarif == '' || (JSON.parse(returnedProfileData.SP_Tarif).length == 0 && !addOneDataWas) ? <ListeVide icon='cash-coin' />
            :
            <>
              <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
              {JSON.parse(returnedProfileData.SP_Tarif).map((data,index) => 
                <div className='  p-2 border-div mb-2' key={index}>
                    <div className='row'>
                        <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'> {index + 1 } - {data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                        <div className='col-3 align-self-center'>{data.Prix} D.T</div> 
                        <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Tarif')}></Button></div> 
                    </div>
                </div>
              )}
              </div>
              <br />
              <div className='text-end '>
                  <Button   className='rounded-pill ' size='tiny' disabled={addOneDataWas ? false : true} color={addOneDataWas ? 'blue' : undefined}  onClick={() => UpdateFunction('SP_Tarif')}>  <Icon name='check' className='ms-2' /> Modifier </Button>
              </div>
            </>
            } 
          </>}
        </>)
    }

    const AddTwoDataCard = (props) =>{
      const [dataNow, setDataNow] = useState({PK: 1 , Name:'', Qte: ''}) 

      const AddArticleToList = () =>{
        if (!dataNow.Forfait) { toast.error("أدخل  إسم العرض   !", GConf.TostErrorGonf) } 
        else if (!dataNow.Prix) { toast.error("أدخل السعر  !", GConf.TostErrorGonf) } 
        else if (!dataNow.Description) { toast.error("أدخل الوصف  !", GConf.TostErrorGonf) } 
        else {
            if (returnedProfileData.SP_Assurance == '') {
                let emptyArray = []
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Assurance:JSON.stringify(emptyArray) })
                setTwoDataWas(true)
            } else {    
                let emptyArray = JSON.parse(returnedProfileData.SP_Assurance)
                emptyArray.push(dataNow)
                setReturnedProfileData({...returnedProfileData, SP_Assurance: JSON.stringify(emptyArray) })
                setTwoDataWas(true)
            }
        }
        
      }


      return(<>
      
       <div className='card-body  mb-4 text-end' >
          <input placeholder='Nom du Forfait'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Forfait: e.target.value })} />
          <input type='number' placeholder='Prix en D.T'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Prix: e.target.value })} />
          <input placeholder='Description'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, Description: e.target.value })} />
          <br />
          <Button  className='rounded-pill  '   size='small' basic={addTwoDataWas ? false : true}  color={addTwoDataWas ? 'blue' : undefined}  onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
          
      </div>
      </>)
    }
    const TwoDataListeCard = (props) =>{
        return(<>
        {loading ? <SekeltonCard /> : 
          <>
            {returnedProfileData.SP_Assurance == '' || (JSON.parse(returnedProfileData.SP_Assurance).length == 0 && !addTwoDataWas) ? <ListeVide icon='heart-pulse' />
            :
            <>
              <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
              {JSON.parse(returnedProfileData.SP_Assurance).map((data,index) => 
                <div className='  p-2 border-div mb-2' key={index}>
                    <div className='row'>
                        <div className='col-7 align-self-center'><h5 className='mt-0 mb-1'> {index + 1 } - {data.Forfait}</h5> <small className='mb-0'>{data.Description}</small></div> 
                        <div className='col-3 align-self-center'>{data.Prix} D.T</div> 
                        <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Assurance')}></Button></div> 
                    </div>
                </div>
              )}
              </div>
              <br />
              <div className='text-end '>
                  <Button   className='rounded-pill ' size='tiny' disabled={addTwoDataWas ? false : true} color={addTwoDataWas ? 'blue' : undefined}  onClick={() => UpdateFunction('SP_Assurance')}>  <Icon name='check' className='ms-2' /> Modifier </Button>
              </div>
            </>
            } 
          </>}
        </>)
    }

    const AddThreeDataCard = (props) =>{
        const [dataNow, setDataNow] = useState({PK: 1 , diplome:'', annee: '', faculte: ''}) 

        const AddArticleToList = () =>{
          if (dataNow.diplome == '') { toast.error("أدخل  إسم الشهادة   !", GConf.TostErrorGonf) } 
          else if (dataNow.annee == '') { toast.error("أدخل سنة التخرج  !", GConf.TostErrorGonf) } 
          else if (dataNow.faculte == '') { toast.error("أدخل اسم المؤسسة المانحة  !", GConf.TostErrorGonf) } 
          else {
              if (returnedProfileData.SP_Diplomes == '') {
                  let emptyArray = []
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Diplomes:JSON.stringify(emptyArray) })
                  setThreeDataWas(true)
              } else {    
                  let emptyArray = JSON.parse(returnedProfileData.SP_Diplomes)
                  emptyArray.push(dataNow)
                  setReturnedProfileData({...returnedProfileData, SP_Diplomes: JSON.stringify(emptyArray) })
                  setThreeDataWas(true)
              }
          }
          
        }


        return(<>
            <div className='card-body  mb-4 text-end'>
                <input placeholder='Diplome'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, diplome: e.target.value })} />
                <input type='date' placeholder='Anneé' defaultValue={new Date().toISOString().split('T')[0]}  className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, annee: e.target.value })} />
                <input placeholder='Etablissment'   className='text-start form-control mb-1 rounded' onChange={ (e) => setDataNow({...dataNow, faculte: e.target.value })} />
                
                <br />
                <Button   className='rounded-pill' size='small' basic={addThreeDataWas ? false : true}  color={addThreeDataWas ? 'blue' : undefined} onClick={() => AddArticleToList()}>  <Icon name='plus' className='ms-2' /> Ajouter </Button>
                
            </div>
        </>)
    }
    const ThreeDataListeCard = (props) =>{
        return(<>
        {loading ? <SekeltonCard /> : 
          <>
          {returnedProfileData.SP_Diplomes == '' || (JSON.parse(returnedProfileData.SP_Diplomes).length == 0 && !addThreeDataWas) ?  <ListeVide icon='credit-card-2-front' /> 
          :
          <>
            <div style={{maxHeight:'300px', overflowX:'auto', overflowX:'hidden'}}  >
            {JSON.parse(returnedProfileData.SP_Diplomes).map((data,index) => 
              <div className='  p-2 border-div mb-2' key={index}>
                  <div className='row'>
                      <div className='col-10 align-self-center'><h5 className='mt-0 mb-1'>{data.annee} : {data.diplome}</h5> <small className='mb-0'>{data.faculte}</small></div> 
                      <div className='col-2 align-self-center'><Button icon="trash alternate" className='rounded-circle p-2 text-danger bg-white ' onClick={() => DeleteFromTarifList(index, 'SP_Diplomes')}></Button></div> 
                  </div>
              </div>
            )}
            </div>
            <br />
            <div className='text-end '>
                <Button   className='rounded-pill' size='tiny'   disabled ={addThreeDataWas ? false : true}  color={addThreeDataWas ? 'blue' : undefined} onClick={() => UpdateFunction('SP_Diplomes')}>  <Icon name='plus' className='ms-2' /> Modifier </Button>
            </div>
            
          </> 
          } 
        </>}
      </>)
    }

     
    return (<>
            
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4 style={{color : APPConf.landing[APPConf.systemTag].colorTheme}}> <span className='bi bi-cash-coin'></span> Liste des Tarif : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setOneData(!addOneData)}> <Icon name={addOneData ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addOneData ?  <AddOneDataCard /> : <OneDataListeCard /> }

          <br />
          <br />
          <br />
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4 style={{color : APPConf.landing[APPConf.systemTag].colorTheme}}> <span className='bi bi-heart-pulse'></span>  Departemment d'assurance  : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setTwoData(!addTwoData)}> <Icon name={addTwoData ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addTwoData ?  <AddTwoDataCard /> : <TwoDataListeCard /> }

          <br />
          <br />
          <br />
          <div className='row mb-3'>
              <div className='col-10 align-self-center'><h4 style={{color : APPConf.landing[APPConf.systemTag].colorTheme}}> <span className='bi bi-credit-card-2-front'></span>  Diplomes  : </h4></div>
              <div className='col-2 align-self-center'><Button   className='rounded-circle' icon onClick={() => setThreeData(!addThreeData)}> <Icon name={addThreeData ? 'list ol' : 'plus'} /> </Button></div>
          </div>
          { addThreeData ?  <AddThreeDataCard /> : <ThreeDataListeCard /> }

          <br />
          <br />

           

    </>);
}

export default DocteurSpecific;