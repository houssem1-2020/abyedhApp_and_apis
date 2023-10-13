import axios from 'axios';
import React, { useEffect, useState , useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Rating, Table, Comment, Menu,Form, TabPane, Placeholder, TextArea, Modal } from 'semantic-ui-react';
import GConf from '../../AssetsM/generalConf';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Tab } from 'semantic-ui-react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useLocation } from 'react-router-dom';

import DocteurSpecific from './Specific/docteur'; 
import CliniqueSpecific from './Specific/clinique'; 
import PharmacieSpecific from './Specific/pharmacie';
import GarderieSpecific from './Specific/garderie';
import RestaurantSpecific from './Specific/restaurant';
import AutoEcoleSpecific from './Specific/autoecole';
import AvocatSpecific from './Specific/avocat';
import BoutiqueSpecific from './Specific/boutique';
import CafeSpecific from './Specific/cafe';
import CentreMdSpecific from './Specific/centreMD';
import GymSpecific from './Specific/gym';
import EcoleSpecific from './Specific/ecole';
import ComptableSpecific from './Specific/comptable';
import CoiffureSpecific from './Specific/coiffure';
import HotelsSpecific from './Specific/hotels';
import LaboSpecific from './Specific/labo';
import LibrairieSpecific from './Specific/librairie';
import LyceeSpecific from './Specific/lycee';
import StadeSpecific from './Specific/stade';
import SociteSpecific from './Specific/socite';
import SmasarSpecific from './Specific/samsar';
import PyscineSpecific from './Specific/pyscine';
import UniversiteSpecific from './Specific/universite';
import TransporteurSpecific from './Specific/transporteur';
import StorageSpecific from './Specific/storage';
import VgAgenceSpecific from './Specific/vg_agence';

import HauseElectroSpecific from './Specific/house_electro';
import HauseMeubleSpecific from './Specific/house_meuble';

import PtvMagazinSpecific from './Specific/ptvente_shop';
import PtvPatesserieSpecific from './Specific/ptvente_patesserie';
import PtvFuiterieSpecific from './Specific/ptvente_fruit';
import PtvVBoulengerieSpecific from './Specific/ptvente_boulengerie';
import PtvEpecerieSpecific from './Specific/ptvente_small_shop';
import PtvViandeSpecific from './Specific/ptvente_viande';

import ChantierArchitectureSpecific from './Specific/chantier_architecture';
import ChantierContracteurSpecific from './Specific/chantier_contrateur';
import ChantierQuicaillerieSpecific from './Specific/chantier_quincaillerie';

import HandmadeCristalSpecific from './Specific/handmade_cristal';
import HandmadeElectricienSpecific from './Specific/handmade_electricien';
import HandmadeForferonSpecific from './Specific/handmade_forgeron';
import HandemadeMarbreSpecific from './Specific/handmade_marbre';
import HandemadeMenuisierSpecific from './Specific/handmade_menuisier';
import HandemadePeintureSpecific from './Specific/handmade_peinture';
import HandemadePlombierSpecific from './Specific/handmade_plombier';

import CarQiosqieSpecific from './Specific/car_qiosque';
import CarMecanicienSpecific from './Specific/car_mecanicien';
import CarLocationSpecific from './Specific/car_location';
import CarParkingSpecific from './Specific/car_parking';

import ArtCinemaSpecific from './Specific/art_cinema';
import ArtMuseeSpecific from './Specific/art_musee';
import ArtTheatreSpecific from './Specific/art_theatre';

import WeddingOrchestreSpecific from './Specific/wedding_orchestre';
import WeddingFournitureMarriageSpecific from './Specific/wedding_fourniture_marriage';
import WeddingPhotographeSpecific from './Specific/wedding_photographe';
import WeddingBijouxSpecific from './Specific/wedding_bijoux';
import WeddingChefSpecific from './Specific/wedding_chef';
import WeddingSallonMariageSpecific from './Specific/wedding_salon_marriage';

import AdminAMosqSpecific from './Specific/admin_a_mosq';
import AdminACourtSpecific from './Specific/admin_a_court';
import AdminAArSpecific from './Specific/admin_a_ar';
import AdminAMuSpecific from './Specific/admin_a_mu';
import AdminAPoliceSpecific from './Specific/admin_a_police';
import AdminCMcSpecific from './Specific/admin_c_mc';
import AdminCmjSpecific from './Specific/admin_c_mj';
import AdminEBiblioSpecific from './Specific/admin_e_biblio';
import AdminECentreSpecific from './Specific/admin_e_centre';
import AdminEEcoleSpecific from './Specific/admin_e_ecole';
import AdminELyceeSpecific from './Specific/admin_e_lycee';
import AdminESsSpecific from './Specific/admin_e_ss';
import AdminEUniversiteSpecific from './Specific/admin_e_universite';
import AdminFPosteSpecific from './Specific/admin_f_poste';
import AdminFRfSpecific from './Specific/admin_f_rf';
import AdminSScbSpecific from './Specific/admin_s_csb';
import AdminSHospitalSpecific from './Specific/admin_s_hospital';


///ACTION
import DocteurActions from './Actions/docteur'; 
import GarderieActions from './Actions/garderie';
import PharmacieActions from './Actions/pharmacie';
import RestaurantActions from './Actions/restaurant';
import CliniqueActions from './Actions/clinique'; 
import AutoEcoleActions from './Actions/autoecole';
import AvocatActions from './Actions/avocat';
import BoutiqueActions from './Actions/boutique';
import CafeActions from './Actions/cafe';
import CentreMdActions from './Actions/centreMD';
import GymActions from './Actions/gym';
import EcoleActions from './Actions/ecole';
import ComptableActions from './Actions/comptable';
import CoiffureActions from './Actions/coiffure';
import HotelsActions from './Actions/hotels';
import LaboActions from './Actions/labo';
import LibrairieActions from './Actions/librairie';
import LyceeActions from './Actions/lycee';
import StadeActions from './Actions/stade';
import SociteActions from './Actions/socite';
import SmasarActions from './Actions/samsar';
import PyscineActions from './Actions/pyscine';
import UniversiteActions from './Actions/universite';
import TransporteurActions from './Actions/transporteur';
import StorageActions from './Actions/storage';
import VgAgenceActions from './Actions/vg_agence';

import HauseElectroActions from './Actions/house_electro';
import HauseMeubleActions from './Actions/house_meuble';

import PtvMagazinActions from './Actions/ptvente_shop';
import PtvPatesserieActions from './Actions/ptvente_patesserie';
import PtvFuiterieActions from './Actions/ptvente_fruit';
import PtvVBoulengerieActions from './Actions/ptvente_boulengerie';
import PtvEpecerieActions from './Actions/ptvente_small_shop';
import PtvViandeActions from './Actions/ptvente_viande';

import ChantierArchitectureActions from './Actions/chantier_architecture';
import ChantierContracteurActions from './Actions/chantier_contrateur';
import ChantierQuicaillerieActions from './Actions/chantier_quincaillerie';

import HandmadeCristalActions from './Actions/handmade_cristal';
import HandmadeElectricienActions from './Actions/handmade_electricien';
import HandmadeForferonActions from './Actions/handmade_forgeron';
import HandemadeMarbreActions from './Actions/handmade_marbre';
import HandemadeMenuisierActions from './Actions/handmade_menuisier';
import HandemadePeintureActions from './Actions/handmade_peinture';
import HandemadePlombierActions from './Actions/handmade_plombier';

import CarQiosqieActions from './Actions/car_qiosque';
import CarMecanicienActions from './Actions/car_mecanicien';
import CarLocationActions from './Actions/car_location';
import CarParkingActions from './Actions/car_parking';

import ArtCinemaActions from './Actions/art_cinema';
import ArtMuseeActions from './Actions/art_musee';
import ArtTheatreActions from './Actions/art_theatre';

import WeddingOrchestreActions from './Actions/wedding_orchestre';
import WeddingFournitureMarriageActions from './Actions/wedding_fourniture_marriage';
import WeddingPhotographeActions from './Actions/wedding_photographe';
import WeddingBijouxActions from './Actions/wedding_bijoux';
import WeddingChefActions from './Actions/wedding_chef';
import WeddingSallonMariageActions from './Actions/wedding_salon_marriage';

///
import DocteurSuivie from './Suivie/docteur'; 
import GarderieSuivie from './Suivie/garderie';
import PharmacieSuivie from './Suivie/pharmacie';
import RestaurantSuivie from './Suivie/restaurant';
import CliniqueSuivie from './Suivie/clinique'; 
import AutoEcoleSuivie from './Suivie/autoecole';
import AvocatSuivie from './Suivie/avocat';
import BoutiqueSuivie from './Suivie/boutique';
import CafeSuivie from './Suivie/cafe';
import CentreMdSuivie from './Suivie/centreMD';
import GymSuivie from './Suivie/gym';
import EcoleSuivie from './Suivie/ecole';
import ComptableSuivie from './Suivie/comptable';
import CoiffureSuivie from './Suivie/coiffure';
import HotelsSuivie from './Suivie/hotels';
import LaboSuivie from './Suivie/labo';
import LibrairieSuivie from './Suivie/librairie';
import LyceeSuivie from './Suivie/lycee';
import StadeSuivie from './Suivie/stade';
import SociteSuivie from './Suivie/socite';
import SmasarSuivie from './Suivie/samsar';
import PyscineSuivie from './Suivie/pyscine';
import UniversiteSuivie from './Suivie/universite';
import TransporteurSuivie from './Suivie/transporteur';
import StorageSuivie from './Suivie/storage';
import VgAgenceSuivie from './Suivie/vg_agence';

import HauseElectroSuivie from './Suivie/house_electro';
import HauseMeubleSuivie from './Suivie/house_meuble';

import PtvMagazinSuivie from './Suivie/ptvente_shop';
import PtvPatesserieSuivie from './Suivie/ptvente_patesserie';
import PtvFuiterieSuivie from './Suivie/ptvente_fruit';
import PtvVBoulengerieSuivie from './Suivie/ptvente_boulengerie';
import PtvEpecerieSuivie from './Suivie/ptvente_small_shop';
import PtvViandeSuivie from './Suivie/ptvente_viande';

import ChantierArchitectureSuivie from './Suivie/chantier_architecture';
import ChantierContracteurSuivie from './Suivie/chantier_contrateur';
import ChantierQuicaillerieSuivie from './Suivie/chantier_quincaillerie';

import HandmadeCristalSuivie from './Suivie/handmade_cristal';
import HandmadeElectricienSuivie from './Suivie/handmade_electricien';
import HandmadeForferonSuivie from './Suivie/handmade_forgeron';
import HandemadeMarbreSuivie from './Suivie/handmade_marbre';
import HandemadeMenuisierSuivie from './Suivie/handmade_menuisier';
import HandemadePeintureSuivie from './Suivie/handmade_peinture';
import HandemadePlombierSuivie from './Suivie/handmade_plombier';

import CarQiosqieSuivie from './Suivie/car_qiosque';
import CarMecanicienSuivie from './Suivie/car_mecanicien';
import CarLocationSuivie from './Suivie/car_location';
import CarParkingSuivie from './Suivie/car_parking';

import ArtCinemaSuivie from './Suivie/art_cinema';
import ArtMuseeSuivie from './Suivie/art_musee';
import ArtTheatreSuivie from './Suivie/art_theatre';

import WeddingOrchestreSuivie from './Suivie/wedding_orchestre';
import WeddingFournitureMarriageSuivie from './Suivie/wedding_fourniture_marriage';
import WeddingPhotographeSuivie from './Suivie/wedding_photographe';
import WeddingBijouxSuivie from './Suivie/wedding_bijoux';
import WeddingChefSuivie from './Suivie/wedding_chef';
import WeddingSallonMariageSuivie from './Suivie/wedding_salon_marriage';


const AddComment = ({rateValue,setRateValue,SaveRating}) =>{
    return(<>
            <div className='text-center mb-4'>
                <Rating icon='star' onRate={(e,{ rating}) => setRateValue({ ...rateValue, rating: rating})} defaultRating={0} maxRating={5} size='huge' />
                <br />
                <br />
                <Form>
                    <TextArea placeholder='الملاحضات هنا ' className='font-droid' style={{ minHeight: 60, width:'85%' }} value={rateValue.comment} onChange={(e) => setRateValue({ ...rateValue, comment: e.target.value})} />
                </Form>
                <br />
                <Button style={{width:'85%' }} className='rounded-pill ' size='mini' content='تسجيل تعليق ' onClick={() => SaveRating()} />
            </div>
    </>)
}

const CommentsCard = ({tag, profileData,rateValue,setRateValue,SaveRating }) =>{
        let [commeningIsActive, setCommeningIsActive] = useState(false)
    const CommentPlacholer = () =>{
        const ProfilePlacholder = () => {
                return(<>
                    <div className='card p-3 shadow-sm border-div' style={{ width: '85%' }}>
                        <div className='row p-0 '>
                            <div className='col-9 align-self-center  m-0 p-0'>
                                <Placeholder style={{ width: '100%' }}>
                                    <Placeholder.Line  />
                                    <Placeholder.Line  />
                                </Placeholder>
                            </div>
                            <div className='col-3 align-self-center text-center m-0 p-0'>
                                        <Placeholder className='rounded-circle' style={{ height: 40, width: 40 }}>
                                            <Placeholder.Image />
                                        </Placeholder>
                            </div>
                        </div>
                    </div>
                </>)
        }
        return(<>
                <div className='row card-body'>
                    <div className='col-12 mb-2'> <ProfilePlacholder /></div>
                    <div className='col-12 mb-2'> <ProfilePlacholder /></div>

                </div>
        </>)
    }
    const CommentsCardI = (props) => {
        return (<>
                <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                        <img src={`https://cdn.abyedh.tn/images/p_pic/${props.data.PictureId}.gif`} className='rounded-circle' width='40px' alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-3 w-100">
                        <div className='text-left mb-0'><span> {props.data.Name} </span>  <span> <small className='text-secondary'> {new Date (props.data.R_Date).toLocaleDateString()}</small> </span> </div>
                        {/* <div className='text-left mb-0'><small className='text-secondary'> {new Date (props.data.R_Date).toLocaleDateString()}</small></div> */}
                        <div><small>{props.data.Comment} </small></div>
                    </div>
                </div>
        </>)
    }
    const NotLogedIn = () =>{
        return(<>                    
                <div className='card-body  p-2'>
                    <h5>قم بالتسجيل لتتمكن من تقييم العميل  </h5>
                </div> 
        </>)
    }
    const NoDataCard = (props) =>{
        return(<>
                <div className='card-body'>
                    <div className='text-center'> <img src={`https://cdn.abyedh.tn/images/Search/data_not_found_${props.genre}.svg`} className='mb-2' width='100px' height='100px' /> </div>
                    <div className='text-center'>آسف , هذه المعلومات غير متوفرة بعد</div>
                </div>
        </>)
    }

    return(<>
            <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                
                <div className='row mb-4'>
                    <div className='col-5'> <small className='  p-1 ps-2 pe-2 border-div' onClick={() => setCommeningIsActive(!commeningIsActive)}> <b>  أضف تعليق </b> <span className='bi bi-chat-left-dots-fill d-none'> </span></small> </div>
                    <div className='col-7'><h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> تعليقات </h5></div>
                </div>

                <div style={{height:'230px', overflowX:'auto', overflowX:'hidden'}} dir='rtl'>
 
                        {commeningIsActive ? 
                        <>
                        {GConf.UserData.Logged ? 
                                         <AddComment rateValue={rateValue} setRateValue={setRateValue} SaveRating={SaveRating} />  
                                        : 
                                        <NotLogedIn />
                                    }
                        </>
                        :
                        <>
                            {profileData.rating ?
                                    <>
                                            {
                                            profileData.rating.length != 0 ?

                                                <Comment.Group >
                                                    { profileData.rating.map( (data,index) =>  <CommentsCardI key={index} data={data} /> )}
                                                
                                                </Comment.Group>
                                                
                                                : <NoDataCard genre={2} /> 
                                            }

                                        </>
                                        :
                                        <CommentPlacholer />
                            }
                        </>
                        
                        }    
                           
                        
                </div>
               
            </div>
    </>)
}

function ProfilePage() {
    /*#########################[Const]##################################*/
        let {tag,PID} = useParams()
        const isAction = new URLSearchParams(useLocation().search).get('action')
        let [loading,setLoading] =useState(true)
        let [rateValue,setRateValue] =useState({comment:'', rating:0})
        let [isFavorite,setIsFavorite] =useState(false)
        let [profileData, setProfileData] = useState({photoes:[]})
        let [clientActivated, setClientActivated] = useState(false)
        let [calendarActive, setCalendarActive] = useState(false)
        L.Icon.Default.mergeOptions(GConf.LeafleftIcon);
        let UID = localStorage.getItem('UID')
        const panes = [
        {
            menuItem: { key: 'edit', content:  <b className=''><span className='bi bi-grid-3x3-gap-fill bi-sm'></span></b> , dir:'rtl',  className:'rounded border border-2 border-div', style:{color:GConf.ADIL[tag].themeColor,}, },
            render: () =><> 
                        <div className='row'>
                            <div className='col-12 col-lg-5 order-2 order-lg-1 mb-4'><CalendarCard /> </div> 
                            <div className='col-12 col-lg-7 order-1 order-lg-2 mb-4'><GenrealDataCard /> </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-4'><MapCard /> </div> 
                            <div className='col-12 col-lg-6 mb-4'><ImagesCard /> </div> 
                            <div className='col-12 col-lg-7 mb-4'><CommentsCard tag={tag} profileData={profileData}  rateValue={rateValue} setRateValue={setRateValue} SaveRating={SaveRating} /> </div> 
                            <div className='col-12 col-lg-5 mb-4'><RatingCard /> </div> 
                            <div className='col-12 d-none mb-4'>
                                { GConf.ADIL[tag].systemActive ?  <ActionCardForSmall /> : <></> }                        
                            </div> 
                        </div> 
                        {/* <div className='d-lg-none'>
                            { GConf.ADIL[tag].systemActive && GConf.UserData.Logged ?  <ActionCardForSmall /> : <></> }                        
                        </div> */}
                    </>,
        },
        {
            menuItem: { key: 'sp', content:  <b className='' ><span className='bi bi-view-list bi-sm'></span></b> , dir:'rtl',  className:'rounded border border-2 border-div' , style:{color:GConf.ADIL[tag].themeColor,},},
            render: () => <SpecificCard status={tag} />,
        },
        {
            menuItem: { key: 'ac', content:  <b className='' ><span className='bi bi-pencil-square bi-sm'></span></b> , dir:'rtl',  className:'rounded border border-2 border-div' , style:{color:GConf.ADIL[tag].themeColor,},},
          render: () => <>
                        {!GConf.UserData.Logged ? <LogginCard /> : 
                            <>
                                <div className='row'>
                                    <div className='col-12 '>
                                        {clientActivated ? '': <AlertCard /> } 
                                    </div>
                                    <div className='col-12 col-lg-8 mb-4 order-2 order-lg-1 mt-4  p-0'>
                                    <ActionStateCard status={tag} />
                                    </div>
                                    <div className='col-12 col-md-4 mb-4 order-1 order-lg-2 text-center align-self-center'>
                                        <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} width='60%' heigth='60%' className='img-responsive' />
                                    </div>
                                </div>
                            </>
                         }
                        
                        </>,
        },
        {
            menuItem: { key: 'sv', content:  <b className='' ><span className='bi bi-eye-fill bi-sm'></span></b> , dir:'rtl',  className:'rounded border border-2 border-div' , style:{color:GConf.ADIL[tag].themeColor,},},
            render: () => <>{!GConf.UserData.Logged ?  <LogginCard />: <FollowStateCard status={tag} /> }</>,
        },
        ]
        const [activeIndex, setActiveIndex] = useState(0)
    /* ############### UseEffect #################*/
        useEffect(() => {
        if (isAction) { setActiveIndex(2) }
        window.scrollTo(0, 0);
        axios.post(`${GConf.ApiLink}/profile`, {
            tag: tag,
            PID:PID,
          })
          .then(function (response) {
            window.scrollTo(0, 0);
            setProfileData(response.data)
            setLoading(false)
            if (response.data.Activated == 'true') {
                setClientActivated(true)
            }
        })
        
        if (GConf.UserData.Logged) {
            axios.post(`${GConf.ApiProfileLink}/favorite/check-favorite`, {
                tag: tag,
                PID:PID,
                UID: GConf.UserData.UData.UID,
              })
              .then(function (response) {
                if (response.data != 0 ) {setIsFavorite(true)}
            })
        }
        }, [])

    /* ############### Functions #################*/
        const CalculateReview = (table, value ) =>{
            let filteredArray = table.filter(obj => parseInt(obj.Rating) == value );
            if (parseInt((filteredArray.length / table.length) * 100 )) {
                return( parseInt((filteredArray.length / table.length) * 100 ))
            } else {
                return 0
            }
            
        }
 
        const CalculateRating = (table) =>{
            let tot = 0;
            let tabLength = table.length;
            table.map( data => {
                tot = tot + data.Rating
            })

            if (tabLength == 0) {
                return 0.0
            } else {
                return (parseFloat(tot / table.length).toFixed(1))
            }
            
        }
        const AddToFarite = () =>{
            if (GConf.UserData.Logged && !isFavorite ) {      
                axios.post(`${GConf.ApiProfileLink}/favorite/ajouter`, {
                    PID: PID,
                    UID: GConf.UserData.UData.UID,
                    tag: tag,
                    Name: profileData.genrale[0].Name,
                })
                .then(function (response) {
                    setIsFavorite(!isFavorite)
                }).catch((error) => {
                    if(error.request) {
                    toast.error(<><div><h5>مشل في الإتصال </h5> </div></>, GConf.TostInternetGonf) 
                    }
                });

            } 
            else if (GConf.UserData.Logged && isFavorite ) {
                axios.post(`${GConf.ApiProfileLink}/favorite/remove`, {
                    PID: PID,
                    UID: GConf.UserData.UData.UID,
                    tag: tag,
                })
                .then(function (response) {
                    setIsFavorite(!isFavorite)
                }).catch((error) => {
                    if(error.request) {
                    toast.error(<><div><h5>مشل في الإتصال </h5> </div></>, GConf.TostInternetGonf) 
                    }
                });
            }
            else{
                toast.error(<><div><h5> قم بتسجيل الدخول  </h5> </div></>, GConf.TostInternetGonf)
            }
        }
        const SaveRating = () =>{
            if (!rateValue.rating || rateValue.rating == 0 ) { toast.error("قم بتحديد التقييم", GConf.TostErrorGonf)} 
            else if (!rateValue.comment) { toast.error("أدخل التعليق  ", GConf.TostErrorGonf)}
            else {
                console.log(rateValue)
                axios.post(`${GConf.ApiLink}/Search/add-comment`, {
                    PID:PID,
                    UID: GConf.UserData.UData.UID,
                    rateValue: rateValue,
                })
                .then(function (response) {
                    toast.success(<><div><h5>  تم   </h5> </div></>, GConf.TostInternetGonf)
                }).catch((error) => {
                    if(error.request) {
                    toast.error(<><div><h5>مشل في الإتصال </h5> </div></>, GConf.TostInternetGonf) 
                    }
                });
            }
        }
    /* ############### Card #################*/
        const TopNavBar = () =>{
            
            const UserCard = () =>{
                return(<>
                    <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                        <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                    </NavLink>
                </>)
            }
            return(<>
                    <nav className="p-2 fixed-top navshad" style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                        <div className='row'>
                            <div className='col-6 text-start align-self-center'>
                                <NavLink exact='true' to={`/S/L/${tag}`} className="m-0 p-0 ms-3">
                                    <img  className="border-div-s d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px',borderRadius: '10px 20px 10px 50px'}} />
                                    <div  className="d-lg-none d-inline-block text-white p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                                </NavLink>
                            </div>
                            <div className='col-6 text-end align-self-center'>
                                {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                            </div>
                        </div>
                    </nav>
                </>)
        }
        const ButtomCard = () =>{
            return(<>
                <div className='card-body rounded-bottom-card' style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                    <div className='text-end text-white me-5'>
                        <b>منصة أبيض التونسية </b>
                    </div>
                </div>
            </>)
        }

        const HeaderCard = (props) =>{
            const HalfStarRating = ({ rating }) => {
                const wholeStars = Math.floor(rating);
                const hasHalfStar = rating - wholeStars !== 0;

                return (
                    <span className="five-star-rating">
                    {[...Array(wholeStars)].map((_, index) => (
                        <Icon key={index} size='small' name="star" color="yellow" />
                    ))}
                    {hasHalfStar && (
                        <Icon name="star half" size='small' color="yellow" />
                    )}
                    {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                        <Icon key={index} size='small' name="star outline" color="grey" />
                    ))}
                    </span>
                );
            };

            return(<>

                {/* <div className="card-header  border-div" style={{marginBottom:'50px', marginTop:'30px', backgroundColor: ConverColorToHsl(GConf.ADIL[tag].themeColor) , color: "black"}}> */}
                {/* <div className="card-header   rounded-0" style={{marginBottom:'35px', marginTop:'30px', background: `linear-gradient(to top, ${ConverColorToHsl(GConf.ADIL[tag].themeColor)},  #ffffff` , border: '0px solid' , color: "black"}}> */}
                <div  style={{ position:'relative'}}>
                    <div className="card-header  border rounded-0" style={{marginBottom:'35px', marginTop:'30px',  backgroundImage: `url(https://cdn.abyedh.tn/images/ads/${tag}.svg)` , backgroundSize: 'auto', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)',  border: '0px solid' , color: "black"}}>
                        <div style={{ content: '',  background: 'rgba(255, 255, 255, 0.7)',  position: 'absolute', top: 0, left: 0, width: '100%', height: '150px', }}></div>
                        <span
                            style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            }}
                            className="card-img shadow"
                        >   
                            <img src={`https://cdn.abyedh.tn/Images/Search/CIcons/${tag}.gif`} className='img-responsive rounded-circle bg-white border-white' width='100px'  height='100px' />
                            
                        </span>
                        <span
                            style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            }}
                            className="card-img-icon d-lg-none"
                        >   
                            <Button className='rounded-circle border shadow-sm' disabled={!GConf.UserData.Logged} onClick={() => AddToFarite()} icon size='large' style={{backgroundColor: isFavorite ?  GConf.ADIL[tag].themeColor : '#ffffff' }} > <Icon name='heart' style={{color: isFavorite ? '#ffffff' : GConf.ADIL[tag].themeColor}} /> </Button>
                            
                        </span>
                        
                    </div>
                    <div className='floating-card-result-card pt-4 ms-2 '>
                        {loading ? 
                        <></>
                        :
                        <>
                            <span className=" m-2 text-dark"> {Math.min(Math.max(parseFloat(`${Math.abs(profileData.genrale[0].PID)}`[0] + '.' + `${Math.abs(profileData.genrale[0].PID)}`.slice(-1)), 1), 5)} <HalfStarRating rating={Math.min(Math.max(parseFloat(`${Math.abs(profileData.genrale[0].PID)}`[0] + '.' + `${Math.abs(profileData.genrale[0].PID)}`.slice(-1)), 1), 5)} icon='star' disabled size='small' /> ({Math.floor(Math.random() * (40 - 1 + 1)) + 1})</span>
                               
                            <span className=" m-2 text-dark">| <span className='bi bi-hand-thumbs-up-fill'></span> {profileData.genrale[0].Likes_Num} </span>
                            <span className=" m-2 text-dark">| <span className='bi bi-eye-fill'></span> {profileData.genrale[0].Views_Num >= 1000 ? (parseInt(profileData.genrale[0].Views_Num.toString().substring(0, 4)) / 1000).toFixed(1) + 'K' :  profileData.genrale[0].Views_Num}</span>
                        </>
                        }
                        
                        
                    </div>
                </div>
            </>)
        }

        const GenrealDataCard = () =>{
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>معلومات عامة</h5>
                        <div className="table-responsive">
                            <table className="table table-hover table-striped">
                                <tbody dir='rtl'>
                                    {
                                        GConf.ADIL[tag].cardProfile.map( (data,index) => 
                                        <tr key={index}> 
                                            <td className='col-10 text-end'><b className='text-secondary'>{profileData.genrale ? <> { profileData.genrale[0][data.resultTag]  ? profileData.genrale[0][data.resultTag] : <small className='text-secondary-inportant small'> معلومة غير متوفرة حاليا  </small> }</> : ''}</b></td> 
                                            <td className='col-2 text-center' scope="row" > <b style={{color:GConf.ADIL[tag].themeColor}}><span className={`bi bi-${data.icon}`}></span>  </b></td>
                                        </tr> )
                                    }
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
            </>)
        }
        const CalendarCard = () =>{   
            const defaultEvents = [ ]
            const GeneratedTime = () => {
                let curr = new Date()
                let first = curr.getDate() - curr.getDay()
                const TargertDateIs = (dayIndex) => { return new Date(curr.setDate(first + dayIndex)).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}
                let reternedListe = []
                JSON.parse(profileData.horaire[0].WorkingTime).map( (getData,index) => reternedListe.push(
                    { title: 'S1',  start: `${TargertDateIs(index)}T${getData.matin.start}` , end: `${TargertDateIs(index)}T${getData.matin.end}`, display: 'background', backgroundColor:'#f5a442'},
                    { title: 'S2',  start: `${TargertDateIs(index)}T${getData.soir.start}` , end: `${TargertDateIs(index)}T${getData.soir.end}`, display: 'background', backgroundColor:'#001942'},
                    ))
                return reternedListe
            }
            const CalendarSuggested = () =>{
                return(<>
                    <table className="table table-borderless" dir='rtl'>
                        <tbody>
                            <tr>
                                <th scope="row">الأحد</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">الأثنين</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">الثلاثاء</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">الإربعاء</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">الخميس</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">الجمعة</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                            <tr>
                                <th scope="row">السبت</th>
                                <td className='text-center'>08:00 -- 12:00 </td>
                                <td className='text-center'>14:00 -- 16:00 </td>
                            </tr>
                        </tbody>
                    </table>
                </>)
            }
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <div className='row mb-2'>
                            <div className='col-3'> <Button size='small' icon color={calendarActive ? 'orange' : 'grey'} className='rounded-circle mb-0' onClick={() => setCalendarActive(!calendarActive)}> <Icon name='calendar alternate' /> </Button> </div>
                            <div className='col-9'><h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>أوقات العمل  </h5></div>
                        </div>
                        {calendarActive ? 
                            <FullCalendar 
                                plugins={[ timeGridPlugin ]}
                                initialView="timeGridWeek"
                                locale='fr' 
                                dayHeaderFormat = {{weekday: 'short'}}
                                events={loading || !profileData.horaire[0]  ?  defaultEvents : GeneratedTime()}
                                headerToolbar='false'
                                height='250px'
                                allDaySlot= {false}
                            />
                            :
                            <CalendarSuggested />
                        }
                    </div>
            </>)
        }
        const MapCard = () =>{
            const position = [36.726 , 9.965];
            const GetPosition = () =>{
                if (loading) { return [36.726 , 9.965] } 
                else if (profileData.position && profileData.position[0] != 0) { return [profileData.position[0] , profileData.position[1]] }
                else if (profileData.genrale) { 
                    let selectedGouv = GConf.abyedhMap.GouvData.filter(gouvr => gouvr.value == profileData.genrale[0].Gouv)
                    if (selectedGouv[0]) {
                        return [selectedGouv[0].lan, selectedGouv[0].lng]
                    } else {
                        return [36.80027 , 10.18602]
                    }
                    
                }
                else { return [36.80027 , 10.18602]}
            }
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <div className='row mb-4'>
                            <div className='col-3'> <a href='https://maps.google.com/' target='c_blank'><span className='bi bi-geo-alt-fill bi-sm'></span></a></div>
                            <div className='col-9'><h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>الموقع الجعرافي  </h5></div>
                        </div>
                        
                        <MapContainer center={GetPosition()} zoom={15} scrollWheelZoom={false} className="map-height">
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={GetPosition()}>
                                <Popup>
                                    {profileData.genrale ?  profileData.genrale[0].Name  : '...' }
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
            </>)
        }
        const ImagesCard = () =>{
            const [openImageModal, setOIM] = useState(false)
            const [selectedImage, setSelectedImage] = useState('')
            const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            //nextArrow: <span className='bi bi-arrow-right-circle-fill bg-danger'></span>,
            //prevArrow: <span className='bi bi-arrow-left-circle-fill ' />
            };
            const DefaultImages = [
                {src:'https://cdn.abyedh.tn/images/required/profile-img1.gif'},
                {src:'https://cdn.abyedh.tn/images/required/profile-img2.gif'},
                {src:'https://cdn.abyedh.tn/images/required/profile-img3.gif'},
                {src:'https://cdn.abyedh.tn/images/required/not-f-4.svg'},
            ]
            const OpenModalToShowImage = (image) =>{
                setSelectedImage(image)
                setOIM(true)

            }
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> الصور</h5>
                        
                            {profileData.photoes.length == 0 ?
                            <Slider {...settings} >
                                {DefaultImages.map((data,index) => 
                                    <div key={index}>
                                        <img src={data.src} width="100%" height="210"/>
                                    </div>
                                )}
                            </Slider>
                            :
                            <Slider {...settings} >
                                {profileData.photoes.map((data,index) => 
                                    <div key={index} className='max-height-image' onClick={() => OpenModalToShowImage(data.ImageLink)}>
                                        <img src={`https://cdn.abyedh.tn/images/Directory/${data.ImageLink}`} className='d-block' width="100%" height="auto"/>
                                    </div>
                                )}
                            </Slider>
                            }
                            
                    
                    </div>
                    <Modal
                        size='fullscreen'
                        open={openImageModal}
                        onClose={() => setOIM(false)}
                        onOpen={() => setOIM(true)}
                        className='fullscreen-profile-modal-5'
                    >
                        <Modal.Content  >
                            <img src={`https://cdn.abyedh.tn/images/Directory/${selectedImage}`} className='d-block border-div' width="100%" height="auto"/>                  
                        </Modal.Content>
                        <Modal.Actions>
                                    <Button className='rounded-pill' negative onClick={ () => setOIM(false)}>   غلق</Button>
                        </Modal.Actions>
                </Modal>
            </>)
        }
        
        const RatingCard = () =>{
            const RatingBar = (props) => {
                return (<>
                    <div className="row">
                        <div className="col-2"><h3>{props.name}</h3></div>
                        <div className="col-8 align-self-center">
                            <div className="progress" style={{height: "5px"}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: `${props.value}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> 
                        </div>
                        <div className="col-2"><small>{props.value} %</small></div>
                    </div>
                </>)
            }

            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> تقييم </h5>
                        <div className='row'>
                            <div className='col-12 align-self-center text-center'>
                                <h1 className='text-warning'>{profileData.rating ? <> {CalculateRating(profileData.rating)} </> : 0 }</h1>
                                <Rating className='d-inline' maxRating={5} defaultRating={profileData.rating ? CalculateRating(profileData.rating) : 0 } icon='star' disabled size='huge' />
                                <h6 className="pt-2">{profileData.rating ? profileData.rating.length : 0 } </h6>
                            </div>
                            <div className='col-12'>
                                <RatingBar name={1} value={profileData.rating ? CalculateReview(profileData.rating, 1) : 0 } />
                                <RatingBar name={2} value={profileData.rating ? CalculateReview(profileData.rating, 2) : 0 } />
                                <RatingBar name={3} value={profileData.rating ? CalculateReview(profileData.rating, 3) : 0 } />
                                <RatingBar name={4} value={profileData.rating ? CalculateReview(profileData.rating, 4) : 0 } />
                                <RatingBar name={5} value={profileData.rating ? CalculateReview(profileData.rating, 5) : 0 } />
                            </div>
                        </div>
                    </div>
            </>)
        }
        const ActionsBtnCard = (props) =>{
            return(<>
                {/* <NavLink exact='true' to={`/S/P/${props.data.link}/${tag}/${PID}`}> */}
                    <Button  animated size={props.fluid ? 'large' : 'small'} className='bg-white shadow-sm border mb-2 '  fluid={props.fluid} onClick={ () => setActiveIndex( 2 + props.indexKey)}  icon style={{borderRadius:'18px'}}>
                        <Button.Content visible style={{color: GConf.ADIL[tag].themeColor}}>
                            <div className='row'>
                                <div className='col-9 align-self-center'>{props.data.name}  </div>
                                <div className='col-3 align-self-center'><Icon name={props.data.icon} /> </div>
                            </div>
                            
                        </Button.Content>
                        <Button.Content hidden style={{color: GConf.ADIL[tag].themeColor}}>
                            <Icon name={props.data.icon} />
                        </Button.Content> 
            
                    </Button>
                {/* </NavLink> */}
                
                </>)
        }
        const TopBtnsCard = () =>{
            return(<>
                        <div className='row mb-2'>
                                {/* <div className='col-8 text-start d-none d-lg-block'>
                                    {
                                        GConf.ADIL[tag].systemActive && GConf.UserData.Logged ? 
                                        <>
                                            {
                                                GConf.ADIL[tag].profileBtns.map( (data,index) => <ActionsBtnCard key={index} data={data} indexKey={index} /> )
                                            }
                                        </> 
                                        : 
                                        <></>
                                    }
                                    
                                </div> */}
                                <div className='col-12 col-lg-4  text-end  d-none d-lg-block'>
                                    {/* <Button className='rounded-circle bg-white border shadow-sm' icon size='large'> <Icon name='thumbs up' style={{color: GConf.ADIL[tag].themeColor}} /> </Button> */}
                                    <Button className='rounded-circle border shadow-sm' disabled={!GConf.UserData.Logged} onClick={() => AddToFarite()} icon size='large' style={{backgroundColor: isFavorite ?  GConf.ADIL[tag].themeColor : '#ffffff' }} > <Icon name='heart' style={{color: isFavorite ? '#ffffff' : GConf.ADIL[tag].themeColor}} /> </Button>
                                    {/* <Button className='rounded-circle bg-white border shadow-sm' icon size='large'> <Icon name='envelope outline' style={{color: GConf.ADIL[tag].themeColor}} /> </Button> */}
                                    <br />
                                    
                                </div>
                        </div>
                    </>)
        }
        const ActionCardForSmall = () =>{
            return(<>
                <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}> تواصل </h5>
                        {
                            GConf.ADIL[tag].profileBtns.map( (data,index) => <ActionsBtnCard key={index} data={data} fluid indexKey={index}  /> )
                        }
                </div> 
            </>)
        }
        
        const GeneralCard = () =>{
            return(<>
                    <div className='row'>
                        <div className='col-12 col-lg-5 order-2 order-lg-1 mb-4'><CalendarCard /> </div> 
                        <div className='col-12 col-lg-7 order-1 order-lg-2 mb-4'><GenrealDataCard /> </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6 mb-4'><MapCard /> </div> 
                        <div className='col-12 col-lg-6 mb-4'><ImagesCard /> </div> 
                        {/* <div className='col-12 col-lg-7 mb-4'><CommentsCard /> </div>  */}
                        <div className='col-12 col-lg-5 mb-4'><RatingCard /> </div> 
                        <div className='col-12 d-none mb-4'>
                            { GConf.ADIL[tag].systemActive ?  <ActionCardForSmall /> : <></> }                        
                        </div> 
                    </div>
            </>)
        }
        const SpecificCard = ({ status }) => {
            const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
            const statusCard = React.useCallback(() => {
            switch(status) {
                case 'docteur': return <DocteurSpecific TAG={tag} PID={PID} UID={UID} />;  
                case 'pharmacie': return <PharmacieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'clinique': return <CliniqueSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'labo': return <LaboSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'centreMD': return <CentreMdSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'garderie': return <GarderieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'autoecole': return <AutoEcoleSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'ecole': return <EcoleSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'lycee': return <LyceeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'universite': return <UniversiteSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'librairie': return <LibrairieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'transporteur': return <TransporteurSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'cafe': return <CafeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'restaurant': return <RestaurantSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'magazin': return <PtvMagazinSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'boulengerie': return <PtvVBoulengerieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'boucherie': return <PtvViandeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'fruiterie': return <PtvFuiterieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'patesserie': return <PtvPatesserieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'epicerie': return <PtvEpecerieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'electromenager': return <HauseElectroSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'meublerie': return <HauseMeubleSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'location': return <CarLocationSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'parking': return <CarParkingSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'qiosque': return <CarQiosqieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'mecanicien': return <CarMecanicienSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'courtier': return <SmasarSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'contrateur': return <ChantierContracteurSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'architecture': return <ChantierArchitectureSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'quincaillerie': return <ChantierQuicaillerieSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'forgeron': return <HandmadeForferonSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'menuisier': return <HandemadeMenuisierSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'peinture': return <HandemadePeintureSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'electricien': return <HandmadeElectricienSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'plombier': return <HandemadePlombierSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'cristalerie': return <HandmadeCristalSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'marbrerie': return <HandemadeMarbreSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'coiffure': return <CoiffureSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'boutique': return <BoutiqueSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'salon_marriage': return <WeddingSallonMariageSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'orchestre': return <WeddingOrchestreSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'chef': return <WeddingChefSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'photographe': return <WeddingPhotographeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'fourniture_marriage': return <WeddingFournitureMarriageSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'bijouterie': return <WeddingBijouxSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'gym': return <GymSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'pyscine': return <PyscineSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'stade': return <StadeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'cinema': return <ArtCinemaSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'theatre': return <ArtTheatreSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'musee': return <ArtMuseeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'avocat': return <AvocatSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'depot': return <StorageSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'comptable': return <ComptableSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'socite': return <SociteSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'hotels': return <HotelsSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'vg_agence': return <VgAgenceSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_s_hospital': return <AdminSHospitalSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_s_csb': return <AdminSScbSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_centre': return <AdminECentreSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_biblio': return <AdminEBiblioSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_ecole': return <AdminEEcoleSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_lycee': return <AdminELyceeSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_universite': return <AdminEUniversiteSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_e_ss': return <AdminESsSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_c_mj': return <AdminCmjSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_c_mc': return <AdminCMcSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_f_poste': return <AdminFPosteSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_f_rf': return <AdminFRfSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_a_mu': return <AdminAMuSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_a_police': return <AdminAPoliceSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_a_ar': return <AdminAArSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_a_court': return <AdminACourtSpecific TAG={tag} PID={PID} UID={UID} /> ;
                case 'admin_a_mosq': return <AdminAMosqSpecific TAG={tag} PID={PID} UID={UID} /> ;
                default:  return <IndefinieCard />;    
            }
            }, [status]);
        
            return (
            <div className="">
                {statusCard()}
            </div>
            );
        }
        const PlacHolderCard = () =>{
            const ProfilePlacholder = () => {
                    return(<>
                        <div className='card p-3 shadow-sm border-div'>
                            <Placeholder  fluid style={{ width: '100%' }} className='text-end'>
                                <Placeholder.Line  />
                                <Placeholder.Line  />
                                <Placeholder.Line  />
                                <Placeholder.Line  />
                                <Placeholder.Line  />
                            </Placeholder>
                        </div>
                    </>)
                }
            return(<>
                    <div className='row ' >
                        <div className='col-12 col-lg-4 mb-3'> <ProfilePlacholder /></div>
                        <div className='col-12 col-lg-8 mb-3'> <ProfilePlacholder  /></div>
                        <div className='col-12 col-lg-6 mb-3'> <ProfilePlacholder /></div>
                        <div className='col-12 col-lg-6 mb-3'> <ProfilePlacholder /></div>
                    </div>
            </>)
        }
        const ActivePaneCard = (props) =>{
            return(<>
                <div className={`card p-2 btn-cursor mb-1  text-center border-0  border-div ${ activeIndex == props.activeI ? 'shadow ': '' }`} onClick={ () => setActiveIndex(props.activeI)}>
                        <h2 className='text-center' style={{color: GConf.ADIL[tag].themeColor}}><span className={`bi bi-${props.icon} bi-xsm`}></span></h2> 
                </div>
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
        const LogginCard = (props) =>{
            return(<>
                <div className='text-center p-2 text-secondary'>
                        <span className='bi bi-person-circle bi-lg '></span>
                        <h5><NavLink exact='true' to='/Profile' className="m-0 p-0 me-3">  قُمْ بٍتَسْجِيلْ الدٌخٌولْ أًوُلاً</NavLink></h5> 
                </div>
            </>)
        }
        const AlertCard = () =>{
            return(<>
                <div className='card-body bg-danger text-white mb-4 border-div text-center ' dir='rtl'>
                    <span className='bi bi-exclamation-circle-fill ms-2'></span>       <small className='text-white mb-1'>هذا العميل غير مشترك في المنصة .  سيتولي فريق أبيض محاولة الاتصال به لإعلامه بطلبكم</small> 
                </div>
            </>)
        }
        const ActionStateCard = ({ status }) => {
            const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
            const statusCard = React.useCallback(() => {
              switch(status) {
                case 'docteur': return <DocteurActions TAG={tag} PID={PID} UID={UID} />;  
                case 'pharmacie': return <PharmacieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'clinique': return <CliniqueActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'labo': return <LaboActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'centreMD': return <CentreMdActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'garderie': return <GarderieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'autoecole': return <AutoEcoleActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'ecole': return <EcoleActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'lycee': return <LyceeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'universite': return <UniversiteActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'librairie': return <LibrairieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'transporteur': return <TransporteurActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'cafe': return <CafeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'restaurant': return <RestaurantActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'magazin': return <PtvMagazinActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'boulengerie': return <PtvVBoulengerieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'boucherie': return <PtvViandeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'fruiterie': return <PtvFuiterieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'patesserie': return <PtvPatesserieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'epicerie': return <PtvEpecerieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'electromenager': return <HauseElectroActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'meublerie': return <HauseMeubleActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'location': return <CarLocationActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'parking': return <CarParkingActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'qiosque': return <CarQiosqieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'mecanicien': return <CarMecanicienActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'courtier': return <SmasarActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'contrateur': return <ChantierContracteurActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'architecture': return <ChantierArchitectureActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'quincaillerie': return <ChantierQuicaillerieActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'forgeron': return <HandmadeForferonActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'menuisier': return <HandemadeMenuisierActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'peinture': return <HandemadePeintureActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'electricien': return <HandmadeElectricienActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'plombier': return <HandemadePlombierActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'cristalerie': return <HandmadeCristalActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'marbrerie': return <HandemadeMarbreActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'coiffure': return <CoiffureActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'boutique': return <BoutiqueActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'salon_marriage': return <WeddingSallonMariageActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'orchestre': return <WeddingOrchestreActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'chef': return <WeddingChefActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'photographe': return <WeddingPhotographeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'fourniture_marriage': return <WeddingFournitureMarriageActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'bijouterie': return <WeddingBijouxActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'gym': return <GymActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'pyscine': return <PyscineActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'stade': return <StadeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'cinema': return <ArtCinemaActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'theatre': return <ArtTheatreActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'musee': return <ArtMuseeActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'avocat': return <AvocatActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'depot': return <StorageActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'comptable': return <ComptableActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'socite': return <SociteActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'hotels': return <HotelsActions TAG={tag} PID={PID} UID={UID} /> ;
                case 'vg_agence': return <VgAgenceActions TAG={tag} PID={PID} UID={UID} /> ;
                default:  return <IndefinieCard />;    
              }
            }, [status]);
          
            return (
              <div className="container">
                {statusCard()}
              </div>
            );
        };
        const FollowStateCard = ({ status }) => {
            const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
            const statusCard = React.useCallback(() => {
              switch(status) {
                case 'docteur': return <DocteurSuivie TAG={tag} PID={PID} UID={UID} />;  
                case 'pharmacie': return <PharmacieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'clinique': return <CliniqueSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'labo': return <LaboSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'centreMD': return <CentreMdSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'garderie': return <GarderieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'autoecole': return <AutoEcoleSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'ecole': return <EcoleSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'lycee': return <LyceeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'universite': return <UniversiteSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'librairie': return <LibrairieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'transporteur': return <TransporteurSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'cafe': return <CafeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'restaurant': return <RestaurantSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'magazin': return <PtvMagazinSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'boulengerie': return <PtvVBoulengerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'boucherie': return <PtvViandeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'fruiterie': return <PtvFuiterieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'patesserie': return <PtvPatesserieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'epicerie': return <PtvEpecerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'electromenager': return <HauseElectroSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'meublerie': return <HauseMeubleSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'location': return <CarLocationSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'parking': return <CarParkingSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'qiosque': return <CarQiosqieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'mecanicien': return <CarMecanicienSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'courtier': return <SmasarSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'contrateur': return <ChantierContracteurSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'architecture': return <ChantierArchitectureSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'quincaillerie': return <ChantierQuicaillerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'forgeron': return <HandmadeForferonSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'menuisier': return <HandemadeMenuisierSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'peinture': return <HandemadePeintureSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'electricien': return <HandmadeElectricienSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'plombier': return <HandemadePlombierSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'cristalerie': return <HandmadeCristalSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'marbrerie': return <HandemadeMarbreSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'coiffure': return <CoiffureSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'boutique': return <BoutiqueSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'salon_marriage': return <WeddingSallonMariageSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'orchestre': return <WeddingOrchestreSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'chef': return <WeddingChefSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'photographe': return <WeddingPhotographeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'fourniture_marriage': return <WeddingFournitureMarriageSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'bijouterie': return <WeddingBijouxSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'gym': return <GymSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'pyscine': return <PyscineSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'stade': return <StadeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'cinema': return <ArtCinemaSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'theatre': return <ArtTheatreSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'musee': return <ArtMuseeSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'avocat': return <AvocatSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'depot': return <StorageSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'comptable': return <ComptableSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'socite': return <SociteSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'hotels': return <HotelsSuivie TAG={tag} PID={PID} UID={UID} /> ;
                case 'vg_agence': return <VgAgenceSuivie TAG={tag} PID={PID} UID={UID} /> ;
                default:  return <><div className='col-12 col-md-4 mb-4 order-1 order-lg-2 text-center align-self-center'>
                            <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} width='60%' heigth='60%' className='img-responsive' />
                            </div><IndefinieCard /></>;    
              }
            }, [status]);
          
            return (
              <div className="c">
                {statusCard()}
              </div>
            );
        };
    return ( <>
            <TopNavBar /> 
            <HeaderCard randomRate={((Math.random() * (5 - 2)) + 2).toFixed(1)}/>
            <br />
            <div className='container'>
            
                {/* <TopBtnsCard />  */}
                
                <div className='row'>
                    <div className='col-4 text-start d-none d-lg-block'>
                        <Button className='rounded-circle border shadow-sm' disabled={!GConf.UserData.Logged} onClick={() => AddToFarite()} icon size='large' style={{backgroundColor: isFavorite ?  GConf.ADIL[tag].themeColor : '#ffffff' }} > <Icon name='heart' style={{color: isFavorite ? '#ffffff' : GConf.ADIL[tag].themeColor}} /> </Button>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className='row justify-content-center' dir='rtl'>
                                <div className='col-3 col-lg-2'><ActivePaneCard icon='grid-3x3-gap-fill' activeI={0} /> </div>
                                <div className='col-3 col-lg-2'><ActivePaneCard icon='view-list' activeI={1} /> </div>
                                <div className='col-3 col-lg-2'><ActivePaneCard icon='pencil-square' activeI={2} /> </div>
                                <div className='col-3 col-lg-2'><ActivePaneCard icon='eye-fill' activeI={3} /> </div>
                        </div>
                    </div>
                </div>
                <br />
                {
                    loading ? <PlacHolderCard />
                    :
                    <Tab  
                            menu={{ secondary: true , style: {overflowX : 'auto', justifyContent: 'center', border:'none'} }} 
                            menuPosition='right' 
                            panes={panes}
                            activeIndex={activeIndex}
                            className='no-menu-tabs mt-2' 
                    />
                }
                
                {/* <GeneralCard />
                <SpecificCard status={tag} />  */}
                <br /> 
                
                
                <br />
                <ButtomCard />
            </div>
        </> );
}

export default ProfilePage;