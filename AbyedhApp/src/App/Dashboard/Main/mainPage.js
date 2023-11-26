import React, {useEffect,useState}  from 'react';
import APPConf from '../../AssetsM/APPConf';
import axios from 'axios';
import SKLT from '../../../AssetsM/Cards/usedSlk';
import { Button , Statistic} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import CountUp from 'react-countup';
//import { io } from "socket.io-client"
import GConf from '../../../AssetsM/generalConf';

function RequestPage() {
    /*#########################[Const]##################################*/
    let [reservationList, setReservationList] = useState([SKLT.TableSlt]); 
    let [requestListe, setRequestListe] = useState([]); 
    
    //SOket-io : it works cool in localhost but the problem with domaine name 
    // let [userView, setUserVew] = useState(0); 
    // const socket = io(GConf.SoketLink, {query: { userId: `${APPConf.systemTag}-${APPConf.PID}`, }, });
    // socket.on(`${APPConf.systemTag}-${APPConf.PID}` , (data) => { receiveNewMessage() ; setUserVew(userView + 1) })
    //fin socket.io

  /*#########################[UseEfeect]##################################*/
   useEffect(() => {
        //requestNotificationPermission()
       axios.post(`${APPConf.ApiLink}/main`, {
          PID : APPConf.PID,
          SystemTag : APPConf.landing[APPConf.systemTag].itemsList[0].link.replace("rq/", "") 
       })
       .then(function (response) {
         setRequestListe(response.data)
       }).catch((error) => {
         if(error.request) {
           toast.error(<><div><h5>Probleme de Connextion</h5> Impossible de Charger La Liste de  Commandes  </div></>, APPConf.TostInternetGonf)   
            
         }
       });
   }, [])
   
  /*#########################[Function]##################################*/

   /* ############### Notofication System #################
        const [unreadMessages, setUnreadMessages] = useState(0);
        // Function to request notification permission
        const requestNotificationPermission = () => {
            if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                // Permission granted, you can now send notifications.
                }
            });
            }
        };
        // Function to create and display a new notification
        const showNotification = () => {
            if (Notification.permission === "granted") {
            const notification = new Notification("New Message", {
                body: "You have a new message.",
                icon: "https://cdn.abyedh.tn/images/logo/mlogo.gif", // Replace with your icon path
            });

            // Play a sound
            const audio = new Audio("https://cdn.abyedh.tn/Sounds/notif.mp3"); // Replace with your audio file
            audio.play();

            // Handle click event on the notification (e.g., open a chat window)
            notification.onclick = function () {
                // Handle the click event (e.g., open a chat window).
                // For now, we'll just close the notification.
                notification.close();
            };
            }
        };
        // Function to simulate receiving a new message
        const receiveNewMessage = () => {
            setUnreadMessages(unreadMessages + 1);
            showNotification();
        };
    */
     const GetRequestValue = (genre) =>{
       const elementToFind = requestListe.find(item => item.State === genre);
       if (elementToFind) {
         return elementToFind.State_Num
       } else {
         return 0
       }
     }

     const RemoveToday = () =>{
        localStorage.setItem('removedCard', new Date().toLocaleDateString('fr-FR'));
        window.location.reload()
    }

   /*#########################[Card]##################################*/
    const StatCard = (props) =>{
        return(<>
            <Statistic color={props.color}>
                <Statistic.Value><CountUp end={props.value} /></Statistic.Value>
                <Statistic.Label>{props.title}</Statistic.Label>
            </Statistic>
        </>)
    }
    const IndefinieCard = (props) =>{
        return(<>
            <div className='text-center p-2 text-secondary'>
                    <span className='bi bi-file-earmark-lock bi-lg '></span>
                    <h5>صفحة غير متوفرة</h5> 
            </div>
        </>)
    }
    const AdsCard = (props) =>{
        return(<>
            <div className='card card-body shadow-sm mb-4 border-div pt-2  font-Expo-book'>
                <div className='row'>
                    <div className='col-1 text-center  '><b onClick={() => RemoveToday()} className='shadow  rounded-circle  pt-1 pb-1 ps-2 pe-2'>x</b></div>
                    <div className='col-11 text-end '><span className='bi bi-badge-ad-fill bi-md text-danger'></span></div>
                </div>
                
                <div className='row'>
                    <div className='col-4 align-self-center'><img className="rounded-circle mb-3" src={`https://cdn.abyedh.tn/images/ads/${APPConf.systemTag}.svg`} width="90px" height="90px"/></div>
                    <div className='col-8 align-self-center text-secondary' dir='rtl'>
                        <span className='text-warning'>   هل تريد أن تجرب  <b className='text-danger '>النسخة الكاملة </b>  لـ {APPConf.landing[APPConf.systemTag].systemTitle}  التي تمكنك من :  </span>
                        <ul>
                            {APPConf.landing[APPConf.systemTag].systemPos.map((data,index) =>  <li key={index}> {data.posName} </li>)} 
                        </ul>
                        <NavLink exact='true' to='/App/S/System'  >
                            <Button fluid className='rounded-pill font-Expo-book' size='mini'> إكتشف   {APPConf.landing[APPConf.systemTag].systemTitle} </Button>
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        </>)
    }
    const AdsCardSmall = (props) =>{
        return(<>
         
        <div className='col-12 col-lg-12  mb-4 mt-4 font-Expo-book'>
            <div className='card  p-4 shadow-sm  border-div '>
                <NavLink exact='true' to='/App/S/System' className="stretched-link"></NavLink>
                <div className='row'>
                    <div className='col-3 align-self-center text-center'><img className="rounded-circle  " src={`https://cdn.abyedh.tn/images/ads/${APPConf.systemTag}.svg`} width="50px" height="50px"/></div>
                    <div className='col-8 align-self-center text-secondary pe-4' dir='rtl'>
                     النسخة الكاملة لـ {APPConf.landing[APPConf.systemTag].systemTitle} 
                    </div>
                    <div className='col-1 align-self-center text-secondary' dir='rtl'>
                      <span className='bi bi-arrow-right-short bi-md'></span> 
                    </div>
                </div>
            </div>
        </div>
        </>)
    }
    const CammingSoonSystem = (props) =>{
        return(<>
         
        <div className='col-12 col-lg-12  mb-4 mt-4 font-Expo-book'>
            <div className='card  p-4 shadow-sm  border-div '>
                {/* <NavLink exact='true' to='/S/System' className="stretched-link"></NavLink> */}
                <div className='row'>
                    <div className='col-2 align-self-center text-center'><img className="rounded-circle  " src={`https://cdn.abyedh.tn/images/ads/${APPConf.systemTag}.svg`} width="50px" height="50px"/></div>
                    <div className='col-10 align-self-center text-secondary pe-4' dir='rtl'>
                        <div>النسخة الكاملة لـ {APPConf.landing[APPConf.systemTag].systemTitle} </div>
                        <small className='text-danger'>ستكون متوفرة قريبا ... </small>
                    </div>
                    {/* <div className='col-1 align-self-center text-secondary' dir='rtl'>
                      <span className='bi bi-arrow-right-short bi-md'></span> 
                    </div> */}
                </div>
            </div>
        </div>
        </>)
    }
    const ItemCard = (props) =>{
        return(<>
            <div className={`col-${props.data.colSm} col-lg-${props.data.colLg} `}>
                <div className='card card-body shadow-sm  border-div text-center mb-3' style={{color: APPConf.themeColor}}>
                    <NavLink exact='true' to={`/App/S/${props.data.link}`} className="stretched-link"></NavLink>
                    <div className='row'>
                        <div className='col-3 align-self-center '> <span className={`bi bi-${props.data.icon} bi-lg ` } style={{color : APPConf.landing[APPConf.systemTag].colorTheme}}></span> </div>
                        <div className='col-9 align-self-center'><h3 className='mt-0 mb-1'>{props.data.itemName}</h3> <small>{props.data.itemDesc}   </small></div>
                    </div>
                </div> 
            </div>
        </>)
    }
    return (<>
            {APPConf.landing[APPConf.systemTag].systemReady && localStorage.getItem('removedCard') != new Date().toLocaleDateString('fr-FR') ? <AdsCard data={APPConf.systemTag} /> : ''}
             
            <div className='row mt-5'>
              <div className='col-12 mb-4'>
                  <div className='rows d-flex' style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}>
                      <span className='col-4 col-lg-3 mb-4 text-center border-end'>
                          <StatCard title='En Attent' value={GetRequestValue('W')} color='yellow' />
                      </span>
                      <span className='col-4 col-lg-3 mb-4 text-center border-end'>
                          <StatCard title='Vu' value={GetRequestValue('S')} color='blue' />
                      </span>
                      <span className='col-4 col-lg-3 mb-4 text-center border-end'>
                          <StatCard title='Accepteé' value={GetRequestValue('A')} color='teal'/>
                      </span>
                      <span className='col-4 col-lg-3 mb-4 text-center border-end'>
                          <StatCard title='Refuseé' value={GetRequestValue('R')} color='red' />
                      </span>
                      <span className='col-4 col-lg-3 mb-4 text-center'>
                          <StatCard title='Termineé' value={GetRequestValue('T')} color='brown' />
                      </span>
                  </div>
              </div>
            </div>

            <div className='row'>
                 {APPConf.landing[APPConf.systemTag].itemsList.map((data,index) => <ItemCard key={index} data={data} /> )}
                <div className='col-12 col-lg-12 mb-4 mt-4' >
                    <div className='card p-3 shadow-sm  border-div text-center  ' style={{color: APPConf.themeColor}}>
                        <NavLink exact='true' to='/App/S/profile' className="stretched-link"></NavLink>
                        <div className='row' style={{color : APPConf.landing[APPConf.systemTag].colorTheme}}>
                            <div className='col-2 align-self-center'><h1 className='bi bi-gear bi-md mt-1' ></h1></div>
                            <div className='col-8 align-self-center'><h3 className='mt-0'>Paramétre de Profile</h3></div>
                            <div className='col-2 align-self-center'><h1 className='bi bi-arrow-right-short bi-md mt-1' ></h1></div>
                        </div>
                         
                        
                    </div>
                </div>
                
            </div>
            {APPConf.landing[APPConf.systemTag].systemReady && localStorage.getItem('removedCard') == new Date().toLocaleDateString('fr-FR') ? <AdsCardSmall data={APPConf.systemTag} /> : ''}
            {!APPConf.landing[APPConf.systemTag].systemReady  ? <CammingSoonSystem data={APPConf.systemTag} /> : ''}
    </>);
}

export default RequestPage;