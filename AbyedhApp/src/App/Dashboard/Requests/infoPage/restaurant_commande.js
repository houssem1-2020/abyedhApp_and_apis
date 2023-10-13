import React, {useEffect,useState}  from 'react';
import GConf from '../../../AssetsM/generalConf';
import { _ } from "gridjs-react";
import axios from 'axios';
import { Fade } from 'react-reveal';
import SKLT from '../../../AssetsM/Cards/usedSlk';
import TableGrid from '../../../AssetsM/Cards/tableGrid';
import SubNav from '../../../AssetsM/Cards/subNav';
import GoBtn from '../../../AssetsM/Cards/goBtn';
import TableImage from '../../../AssetsM/Cards/tableImg';
import { toast } from 'react-toastify';
import { Button , Icon, Modal, Tab} from 'semantic-ui-react';
import { useNavigate} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MainSubNavCard = (props) =>{
      return(<>
         <NavLink exact='true' to={`/S/${props.link}`} className='card card-body mb-1 rounded-pill shadow-sm d-inline-block ' >
           <h4 style={{color : GConf.themeColor}}> <span className={`bi bi-${props.icon} me-1 `}></span>{props.text}</h4>
         </NavLink> 
      </>) 
   }

const CustomTabs = ({activeIndex, setActiveIndex}) => {
      return(<>
        <div className='row mb-3'>
            <div className='col-12'>
             <div className="mt-0 p-1"   style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}>
               
              <Menu secondary >
                    <Menu.Item active={activeIndex == 0} className='rounded-pill' onClick={ () => setActiveIndex(0)}>
                      <span className='text-warning'>
                        <b>
                          <span className='bi bi-hourglass-split'></span> En Attent
                        </b>
                      </span>
                    </Menu.Item>
                    <Menu.Item active={activeIndex == 1} className='rounded-pill' onClick={ () => setActiveIndex(1)}>
                      <span className='text-primary'>
                        <b>
                          <span className='bi bi-eye-fill'></span> Vu
                        </b>
                      </span>
                    </Menu.Item>
                    <Menu.Item active={activeIndex == 2} className='rounded-pill' onClick={ () => setActiveIndex(2)}>
                      <span className='text-success'>
                        <b>
                          <span className='bi bi-check-square-fill'></span> Accepteé
                        </b>
                      </span>
                    </Menu.Item>
                    <Menu.Item active={activeIndex == 3} className='rounded-pill' onClick={ () => setActiveIndex(3)}>
                      <span className='text-danger'>
                        <b>
                          <span className='bi bi-x-square-fill'></span> Refuseé
                        </b>
                      </span>
                    </Menu.Item>
                    <Menu.Item active={activeIndex == 4} className='rounded-pill' onClick={ () => setActiveIndex(4)}>
                      <span className='text-secondary'>
                        <b>
                          <span className='bi bi-slash-square-fill'></span> Termineé
                        </b>
                      </span>
                    </Menu.Item>
                </Menu>
            </div>
          </div>
          <div className='col-4 text-end d-none'>
              {/* <Button icon='calendar alternate' className='rounded-pill bg-system-btn me-4' onClick={() => openEditModal('justOpen',true)} /> */}
              <MainSubNavCard text='Calendrier' link='rq/calendrier' icon='calendar-week' />
          </div>
        </div>
      </>)
}

function RequestPage() {
    /*#########################[Const]##################################*/
    let [commandeList, setCommandeList] = useState([SKLT.TableSlt]); 
    let [reservationList, setReservationList] = useState([SKLT.TableSlt]); 
    const [modalS, setModalS] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    let  [acceptedResForCalendar, setAcceptedResForCalendar] = useState([]); 
    const navigate = useNavigate();
    const Mainpanes = [
      {
        menuItem: { key: 'attent',  content: <span className='text-secondary border-secondary'><b><span className='bi bi-calendar2-week'></span> Reservation</b></span>  },
        render: () => <><CustomTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex}  /> 
                        <Tab menu={{ secondary: true }} activeIndex={activeIndex} panes={panesRes}  className='no-menu-tabs mt-2' />
                        </>,
      },
      {
        menuItem: { key: 'accept',  content: <span className='text-secondary border-secondary'><b><span className='bi bi-cart-dash'></span> Commande</b></span> ,  },
        render: () => <><CustomTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex}  /> 
                        <Tab menu={{ secondary: true }}  activeIndex={activeIndex} panes={panes} className='no-menu-tabs mt-2' />
                        </>,
      },
    ]
    const panes = [
      {
        menuItem: { key: 'attent',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
        render: () => <TableGrid tableData={FetchByGenre('W')} columns={GConf.TableHead.request} />,
      },
      {
        menuItem: { key: 'attent',  content: <span className='text-primary'><b><span className='bi bi-eye-fill'></span> Vu</b></span> , className:'rounded-pill'},
        render: () => <TableGrid tableData={FetchByGenre('S')} columns={GConf.TableHead.request} />,
      },
      {
        menuItem: { key: 'accept',  content: <span className='text-success'><b><span className='bi bi-check-square-fill'></span> Accepteé</b></span> , className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenre('A')} columns={GConf.TableHead.request} />,
      },
      {
        menuItem: { key: 'refuse',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenre('R')} columns={GConf.TableHead.request} />,
      },
      {
        menuItem: { key: 'refuse',  content: <span className='text-secondary'><b><span className='bi bi-slash-square-fill'></span> Termineé</b></span>, className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenre('F')} columns={GConf.TableHead.request} />,
      },
    ]
    const panesRes = [
      {
        menuItem: { key: 'attent',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
        render: () => <TableGrid tableData={FetchByGenreReserv('W')} columns={GConf.TableHead.reservation} />,
      },
      {
        menuItem: { key: 'attent',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
        render: () => <TableGrid tableData={FetchByGenreReserv('S')} columns={GConf.TableHead.reservation} />,
      },
      {
        menuItem: { key: 'accept',  content: <span className='text-success'><b><span className='bi bi-check-square-fill'></span> Accepteé</b></span> , className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenreReserv('A')} columns={GConf.TableHead.reservation} />,
      },
      {
        menuItem: { key: 'refuse',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenreReserv('R')} columns={GConf.TableHead.reservation} />,
      },
      {
        menuItem: { key: 'refuse',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
        render: () => <TableGrid tableData={FetchByGenreReserv('F')} columns={GConf.TableHead.reservation} />,
      },
    ]

   /*#########################[UseEfeect]##################################*/
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/request`, {
           PID : GConf.PID,
           SystemTag : 'restaurant_commande'
        })
        .then(function (response) {
          if (!response.data) {
                toast.error('Probleme de Connextion', GConf.TostSuucessGonf)
          } else {
            console.log(response.data)
            setCommandeList(response.data)
            
          }
        }).catch((error) => {
          if(error.request) {
            toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste   </div></>, GConf.TostInternetGonf)   
            setCommandeList([])
          }
        });

        axios.post(`${GConf.ApiLink}/request`, {
          PID : GConf.PID,
          SystemTag : 'restaurant_reservation'
       })
       .then(function (response) {
         if (!response.data) {
               toast.error('Probleme de Connextion', GConf.TostSuucessGonf)
         } else {
           console.log(response.data)
           setReservationList(response.data)
           
         }
       }).catch((error) => {
         if(error.request) {
           toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste    </div></>, GConf.TostInternetGonf)   
           setReservationList([])
         }
       });
    }, [])
    
   /*#########################[Function]##################################*/
    const NavigateFunction = (link) => {  navigate(link) }

    const FetchByGenre = (genre) =>{  
          let found = commandeList.filter(element => element.State === genre)
          let commandeContainer = []
              found.map( (commandeDate) => commandeContainer.push([          
                _(<TableImage forStock image='Resto/order.png' />),
                commandeDate.R_ID,
                commandeDate.Name,
                new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
                commandeDate.Table_Num,
                _(<StateCard status={commandeDate.State} />),
                _( <a  className='data-link-modal'  onClick={() => openEditModal(commandeDate,true)} ><b> <span className='bi bi-arrows-fullscreen'></span> </b></a>),
                _(<Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/info/restaurant_commande/${commandeDate.R_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>)
            ],))
        return(commandeContainer)
    }
    const RemplirCalendarEvent = () => {
        let found = reservationList.filter(element => element.State === 'A')
        let calendarData = []
        found.map( (getData) => calendarData.push( { title: getData.Name , date: new Date(getData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}))
        setAcceptedResForCalendar(calendarData)
    }
    const FetchByGenreReserv = (genre) =>{  
      let found = reservationList.filter(element => element.State === genre)
      let commandeContainer = []
          found.map( (commandeDate) => commandeContainer.push([          
            _(<TableImage forStock image='Resto/reserver.png' />),
            commandeDate.R_ID,
            commandeDate.Name,
            new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
            new Date(commandeDate.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
            // commandeDate.Totale,
            _(<StateCard status={commandeDate.State} />),
            _( <a  className='data-link-modal'  onClick={() => openEditModal(commandeDate,true)} ><b> <span className='bi bi-arrows-fullscreen'></span> </b></a>),
            _(<Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/info/restaurant_reservation/${commandeDate.R_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>)
        ],))
      return(commandeContainer)
    }
    // const FetchByGenreReserv = (genre) =>{  
    //   if (genre == 'W') {
    //     let found1 = reservationList.filter(element => element.State === 'W')
    //     let found2 = reservationList.filter(element => element.State === 'S')
    //     let found = found1.concat(found2);
    //     let commandeContainer = []
    //         found.map( (commandeDate) => commandeContainer.push([          
    //           _(<TableImage forStock image='reserver.png' />),
    //           commandeDate.R_ID,
    //           commandeDate.Name,
    //           new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
    //           new Date(commandeDate.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
    //           _(<StateCard status={commandeDate.State} />),
    //           _( <a  className='data-link-modal'  onClick={() => openEditModal(commandeDate,true)} ><b> <span className='bi bi-arrows-fullscreen'></span> </b></a>),
    //           _(<Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/rs/info/${commandeDate.R_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>)
    //       ],))
    //   return(commandeContainer)

    //   } else {
    //     let found = reservationList.filter(element => element.State === genre)
    //     let commandeContainer = []
    //         found.map( (commandeDate) => commandeContainer.push([          
    //           _(<TableImage forStock image='reserver.png' />),
    //           commandeDate.R_ID,
    //           commandeDate.Name,
    //           new Date(commandeDate.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
    //           new Date(commandeDate.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' ),
    //           // commandeDate.Totale,
    //           _(<StateCard status={commandeDate.State} />),
    //           _( <a  className='data-link-modal'  onClick={() => openEditModal(commandeDate,true)} ><b> <span className='bi bi-arrows-fullscreen'></span> </b></a>),
    //           _(<Button className='rounded-pill bg-system-btn' size='mini' onClick={ (e) => NavigateFunction(`/S/rq/rs/info/${commandeDate.R_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>)
    //       ],))
    //   return(commandeContainer)
    //   }
    // }
    const openEditModal = (event,selected) =>{
        RemplirCalendarEvent()
        setSelectedArticle(event)
        setModalS(true)
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
            default:  return <StateCard color='dark' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };
    
    
    return (<>
            
        <Fade>
          <Tab  menu={{ secondary: true, className: 'tab-right' }} panes={Mainpanes} />
        </Fade>
        <Modal
              size='small'
              open={modalS}
              closeIcon
              onClose={() => setModalS(false)}
              onOpen={() => setModalS(true)}
          >
              <Modal.Header><h4> Calendrier des reservation </h4></Modal.Header>
              <Modal.Content scrolling>
                          <FullCalendar 
                              plugins={[ dayGridPlugin ]}
                              initialView="dayGridMonth"
                              locale='fr' 
                              events={acceptedResForCalendar}
                              height='450px'
                              navLinks ={true}
                          />

              </Modal.Content>
              <Modal.Actions>
                          <Button className='rounded-pill' negative onClick={ () => setModalS(false)}> <span className='bi bi-x' ></span> Fermer</Button>
              </Modal.Actions>
        </Modal>
        <Modal
              size='small'
              open={false}
              closeIcon
              onClose={() => setModalS(false)}
              onOpen={() => setModalS(true)}
          >
              <Modal.Header><h4> Calendrier des reservation </h4></Modal.Header>
              <Modal.Content scrolling>

                      <table className='table table-striped'>
                          <thead>
                              <tr>
                              <th scope="col">No</th>
                              <th scope="col">Designiation</th>
                              <th scope="col">Qté</th>
                              <th scope="col">PUHT</th>
                              <th scope="col">PUTTC</th>
                              <th scope="col">Prix Net</th>
                              </tr>
                          </thead>
                          <tbody>
                          {
                              selectedArticle.Articles ? 
                              <>
                              {
                                  JSON.parse(selectedArticle.Articles).map( (data,index) => 
                                      <tr key={index +1 }>
                                          <th scope="row">{index +1 }</th>
                                          <td>{data.Name}</td>
                                          <td>{data.Qte}</td>
                                          <td>{GConf.DefaultTva} %</td>
                                          <td>{data.Prix ? data.Prix.toFixed(3) : ''}</td>
                                          <td>{data.PU}</td>
                                      </tr>
                                  )
                              }
                              </>
                              :
                              <>
                              </>
                          }
                          </tbody>
                      </table> 
              </Modal.Content>
              <Modal.Actions>
                          <Button className='rounded-pill' negative onClick={ () => setModalS(false)}> <span className='bi bi-x' ></span> Fermer</Button>
                          <Button className='rounded-pill bg-system-btn'   onClick={ (e) => NavigateFunction(`/S/rq/info/${selectedArticle.C_ID}`)}><span className='d-none d-lg-inline'> Info </span><Icon  name='angle right' /></Button>
              </Modal.Actions>
        </Modal>
    </>);
}

export default RequestPage;