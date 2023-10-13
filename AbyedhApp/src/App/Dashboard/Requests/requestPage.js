import React, {useEffect,useState}  from 'react';
import APPConf from '../../AssetsM/APPConf';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Button , Tab} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-reveal';
import SKLT from '../../AssetsM/Cards/usedSlk';
import { useNavigate} from 'react-router-dom';
import TableGrid from '../../AssetsM/Cards/tableGrid';
import { _ } from 'gridjs-react';
import TableImage from '../../AssetsM/Cards/tableImg';
import axios from 'axios';
import { toast } from 'react-toastify';


 

const CustomTabs = ({activeIndex, setActiveIndex, TAG}) => {
    return(<>

           <div className="mt-1 p-1 mb-4"   style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                <Menu secondary >
                    {APPConf.landing[APPConf.systemTag].navItemList.map((data,index) =>
                            <Menu.Item key={index} active={activeIndex == data.navIndex} className='rounded-pill' onClick={ () => setActiveIndex(data.navIndex)}>
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

function RequestPage() {
    /*#########################[Const]##################################*/
    const {TAG} = useParams()
    const [activeIndex, setActiveIndex] = useState(0)
    let [reservationList, setReservationList] = useState([SKLT.TableSlt]); 
    const navigate = useNavigate();

    const panesRes = [
        {
          menuItem: { key: 'attent',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[0].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'vu',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[1].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'accept',  content: <span className='text-success'><b><span className='bi bi-check-square-fill'></span> Accepteé</b></span> , className:'rounded-pill' },
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[2].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'refuse',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[3].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'terminer',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Retardeé</b></span>, className:'rounded-pill' },
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[4].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'retarde',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Redirecte</b></span>, className:'rounded-pill' },
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[5].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
        {
          menuItem: { key: 'redirecte',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
          render: () => <TableGrid tableData={FetchByGenreReserv(APPConf.landing[APPConf.systemTag].navItemList[6].navIndexName)} columns={APPConf.landing[APPConf.systemTag].tableHeader[TAG]} />,
        },
    ]
 
 
    /*#########################[UseEfeect]##################################*/
    useEffect(() => {
        axios.post(`${APPConf.ApiLink}/request`, {
           PID : APPConf.PID,
           SystemTag : TAG
        })
        .then(function (response) {
            if (!response.data) {
                toast.error('Probleme de Connextion', APPConf.TostSuucessGonf)
            } else {
                setReservationList(response.data)
                
            }
        }).catch((error) => {
          if(error.request) {
            toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, APPConf.TostInternetGonf)   
            setReservationList([])
          }
        });
    }, [])

    /*#########################[Function]##################################*/
    const NavigateFunction = (link) => {  navigate(link) }
    
    const RenderDateFun = (value) => { return(new Date(value).toLocaleDateString('fr-FR').split('/').reverse().join('-')) }
    const LengthFunction = (value) => {  return JSON.parse(value).length }
    const PropFunction = (value, wantedProp) => {  return JSON.parse(value)[wantedProp] }

    const FetchByGenreReserv = (genre) => {      
        let found = reservationList.filter(element => element.State === genre);
        let commandeContainer = [];
        found.forEach(commandeDate => {
            let elements = [
                _(<TableImage forUser image={commandeDate.PictureId} />),
                commandeDate.Name,
                new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split('/').reverse().join('-'),
                commandeDate.R_Time,
            ];
            
            APPConf.landing[APPConf.systemTag].tableItemList[TAG].map((data,index) => {
                switch (data.genre) {
                    case 'text':
                        elements.push(commandeDate[data.value])
                        break;
                    case 'date':
                        elements.push(RenderDateFun(commandeDate[data.value]))
                        break;
                    case 'lengthFunc':
                        elements.push(LengthFunction(commandeDate[data.value]))
                        break;
                    case 'PropFunction':
                      elements.push(PropFunction(commandeDate[data.value[0]], data.value[1]))
                      break;
                    default:
                        break;
            }
                
            })

            elements.push(
                _(<StateCard status={commandeDate.State} />),
                _( <Button className='rounded-pill bg-system-btn' size='mini' onClick={e => NavigateFunction(`/App/S/rq/info/${TAG}/${commandeDate.R_ID}`)}  > <span className='d-none d-lg-inline'> Info </span> <Icon name='angle right' /> </Button>)
            );
    
            commandeContainer.push(elements);
        });
    
        return commandeContainer;
    };
    
    const FetchByGenreReserv2 = (genre) =>{  
        let found = reservationList.filter(element => element.State === genre)
        let commandeContainer = []
            found.map( (commandeDate) => commandeContainer.push([          
                _(<TableImage forStock image='docteur/rendyvous.png' />),
                commandeDate.Name,
                new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                
                new Date(commandeDate.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                commandeDate.RDV_Time,
                
                _(CheckIsPatientCard(commandeDate.Releted_UID)),
                
                _(<StateCard status={commandeDate.State} />),
                _(<Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/info/docteur/${commandeDate.R_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>)
            ],))
            return(commandeContainer)
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
                default:  return <StateCard color='dark' text='Indefinie' />;    
              }
            }, [status]);
          
            return (
              <div className="container">
                {statusCard()}
              </div>
            );
    };
    const CheckIsPatientCard = (relatedId) => {
        if (relatedId == null) {  return <span className='bi bi-x-circle-fill bi-xlsm text-danger'></span> } else {  return <span className='bi bi-check-circle-fill bi-xlsm text-success'></span>  }  
    };
 
 
    return (<>
 
            <Fade>
                  <CustomTabs  activeIndex={activeIndex} setActiveIndex={setActiveIndex} TAG={TAG} />
                  <Tab menu={{ secondary: true }} activeIndex={activeIndex} panes={panesRes}  className='no-menu-tabs mt-2' />
            </Fade>

    </>);
}

export default RequestPage;