import axios from 'axios';
import React, { useEffect, useState , useRef } from 'react';
import { Suspense } from 'react';
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

//SPESIFIC
const DocteurSpecific = React.lazy(() => import('./Specific/docteur'));
const InfirmierSpecific = React.lazy(() => import('./Specific/infirmier'));
const CliniqueSpecific = React.lazy(() => import('./Specific/clinique')); 
const PharmacieSpecific = React.lazy(() => import('./Specific/pharmacie'));
const GarderieSpecific = React.lazy(() => import('./Specific/garderie'));
const RestaurantSpecific = React.lazy(() => import('./Specific/restaurant'));
const AutoEcoleSpecific = React.lazy(() => import('./Specific/autoecole'));
const AvocatSpecific = React.lazy(() => import('./Specific/avocat'));
const BoutiqueSpecific = React.lazy(() => import('./Specific/boutique'));
const CafeSpecific = React.lazy(() => import('./Specific/cafe'));
const CentreMdSpecific = React.lazy(() => import('./Specific/centreMD'));
const GymSpecific = React.lazy(() => import('./Specific/gym'));
const EcoleSpecific = React.lazy(() => import('./Specific/ecole'));
const ComptableSpecific = React.lazy(() => import('./Specific/comptable'));
const CoiffureSpecific = React.lazy(() => import('./Specific/coiffure'));
const HotelsSpecific = React.lazy(() => import('./Specific/hotels'));
const LaboSpecific = React.lazy(() => import('./Specific/labo'));
const LibrairieSpecific = React.lazy(() => import('./Specific/librairie'));
const FormationSpecific = React.lazy(() => import('./Specific/formation'));
const LyceeSpecific = React.lazy(() => import('./Specific/lycee'));
const StadeSpecific = React.lazy(() => import('./Specific/stade'));
const SociteSpecific = React.lazy(() => import('./Specific/socite'));
const SmasarSpecific = React.lazy(() => import('./Specific/samsar'));
const PyscineSpecific = React.lazy(() => import('./Specific/pyscine'));
const UniversiteSpecific = React.lazy(() => import('./Specific/universite'));
const TransporteurSpecific = React.lazy(() => import('./Specific/transporteur'));
const StorageSpecific = React.lazy(() => import('./Specific/storage'));
const VgAgenceSpecific = React.lazy(() => import('./Specific/vg_agence'));
const HauseElectroSpecific = React.lazy(() => import('./Specific/house_electro'));
const HauseMeubleSpecific = React.lazy(() => import('./Specific/house_meuble'));
const PtvMagazinSpecific = React.lazy(() => import('./Specific/ptvente_shop'));
const PtvPatesserieSpecific = React.lazy(() => import('./Specific/ptvente_patesserie'));
const PtvFuiterieSpecific = React.lazy(() => import('./Specific/ptvente_fruit'));
const PtvVBoulengerieSpecific = React.lazy(() => import('./Specific/ptvente_boulengerie'));
const PtvEpecerieSpecific = React.lazy(() => import('./Specific/ptvente_small_shop'));
const PtvViandeSpecific = React.lazy(() => import('./Specific/ptvente_viande'));
const ChantierArchitectureSpecific = React.lazy(() => import('./Specific/chantier_architecture'));
const ChantierContracteurSpecific = React.lazy(() => import('./Specific/chantier_contrateur'));
const ChantierQuicaillerieSpecific = React.lazy(() => import('./Specific/chantier_quincaillerie'));
const HandmadeCristalSpecific = React.lazy(() => import('./Specific/handmade_cristal'));
const HandmadeElectricienSpecific = React.lazy(() => import('./Specific/handmade_electricien'));
const HandmadeForferonSpecific = React.lazy(() => import('./Specific/handmade_forgeron'));
const HandemadeMarbreSpecific = React.lazy(() => import('./Specific/handmade_marbre'));
const HandemadeMenuisierSpecific = React.lazy(() => import('./Specific/handmade_menuisier'));
const HandemadePeintureSpecific = React.lazy(() => import('./Specific/handmade_peinture'));
const HandemadePlombierSpecific = React.lazy(() => import('./Specific/handmade_plombier'));
const CarQiosqieSpecific = React.lazy(() => import('./Specific/car_qiosque'));
const CarMecanicienSpecific = React.lazy(() => import('./Specific/car_mecanicien'));
const CarLocationSpecific = React.lazy(() => import('./Specific/car_location'));
const CarParkingSpecific = React.lazy(() => import('./Specific/car_parking'));
const ArtCinemaSpecific = React.lazy(() => import('./Specific/art_cinema'));
const ArtMuseeSpecific = React.lazy(() => import('./Specific/art_musee'));
const ArtTheatreSpecific = React.lazy(() => import('./Specific/art_theatre'));
const WeddingOrchestreSpecific = React.lazy(() => import('./Specific/wedding_orchestre'));
const WeddingFournitureMarriageSpecific = React.lazy(() => import('./Specific/wedding_fourniture_marriage'));
const WeddingPhotographeSpecific = React.lazy(() => import('./Specific/wedding_photographe'));
const WeddingBijouxSpecific = React.lazy(() => import('./Specific/wedding_bijoux'));
const WeddingChefSpecific = React.lazy(() => import('./Specific/wedding_chef'));
const WeddingSallonMariageSpecific = React.lazy(() => import('./Specific/wedding_salon_marriage'));
const VeterinaireSpecific = React.lazy(() => import('./Specific/veterinaire'));
const FourragerieSpecific = React.lazy(() => import('./Specific/fourragerie'));
const AdminAMosqSpecific = React.lazy(() => import('./Specific/admin_a_mosq'));
const AdminACourtSpecific = React.lazy(() => import('./Specific/admin_a_court'));
const AdminAArSpecific = React.lazy(() => import('./Specific/admin_a_ar'));
const AdminAMuSpecific = React.lazy(() => import('./Specific/admin_a_mu'));
const AdminAPoliceSpecific = React.lazy(() => import('./Specific/admin_a_police'));
const AdminCMcSpecific = React.lazy(() => import('./Specific/admin_c_mc'));
const AdminCmjSpecific = React.lazy(() => import('./Specific/admin_c_mj'));
const AdminEBiblioSpecific = React.lazy(() => import('./Specific/admin_e_biblio'));
const AdminECentreSpecific = React.lazy(() => import('./Specific/admin_e_centre'));
const AdminEEcoleSpecific = React.lazy(() => import('./Specific/admin_e_ecole'));
const AdminELyceeSpecific = React.lazy(() => import('./Specific/admin_e_lycee'));
const AdminESsSpecific = React.lazy(() => import('./Specific/admin_e_ss'));
const AdminEUniversiteSpecific = React.lazy(() => import('./Specific/admin_e_universite'));
const AdminFPosteSpecific = React.lazy(() => import('./Specific/admin_f_poste'));
const AdminFRfSpecific = React.lazy(() => import('./Specific/admin_f_rf'));
const AdminSScbSpecific = React.lazy(() => import('./Specific/admin_s_csb'));
const AdminSHospitalSpecific = React.lazy(() => import('./Specific/admin_s_hospital'));

///ACTION
const DocteurActions = React.lazy(() => import('./Actions/docteur'));
const InfirmierActions = React.lazy(() => import('./Actions/infirmier'));
const GarderieActions = React.lazy(() => import('./Actions/garderie'));
const PharmacieActions = React.lazy(() => import('./Actions/pharmacie'));
const RestaurantActions = React.lazy(() => import('./Actions/restaurant'));
const CliniqueActions = React.lazy(() => import('./Actions/clinique')); 
const AutoEcoleActions = React.lazy(() => import('./Actions/autoecole'));
const AvocatActions = React.lazy(() => import('./Actions/avocat'));
const BoutiqueActions = React.lazy(() => import('./Actions/boutique'));
const CafeActions = React.lazy(() => import('./Actions/cafe'));
const CentreMdActions = React.lazy(() => import('./Actions/centreMD'));
const GymActions = React.lazy(() => import('./Actions/gym'));
const EcoleActions = React.lazy(() => import('./Actions/ecole'));
const ComptableActions = React.lazy(() => import('./Actions/comptable'));
const CoiffureActions = React.lazy(() => import('./Actions/coiffure'));
const HotelsActions = React.lazy(() => import('./Actions/hotels'));
const LaboActions = React.lazy(() => import('./Actions/labo'));
const LibrairieActions = React.lazy(() => import('./Actions/librairie'));
const FormationActions = React.lazy(() => import('./Actions/formation'));
const LyceeActions = React.lazy(() => import('./Actions/lycee'));
const StadeActions = React.lazy(() => import('./Actions/stade'));
const SociteActions = React.lazy(() => import('./Actions/socite'));
const SmasarActions = React.lazy(() => import('./Actions/samsar'));
const PyscineActions = React.lazy(() => import('./Actions/pyscine'));
const UniversiteActions = React.lazy(() => import('./Actions/universite'));
const TransporteurActions = React.lazy(() => import('./Actions/transporteur'));
const StorageActions = React.lazy(() => import('./Actions/storage'));
const VgAgenceActions = React.lazy(() => import('./Actions/vg_agence'));
const HauseElectroActions = React.lazy(() => import('./Actions/house_electro'));
const HauseMeubleActions = React.lazy(() => import('./Actions/house_meuble'));
const PtvMagazinActions = React.lazy(() => import('./Actions/ptvente_shop'));
const PtvPatesserieActions = React.lazy(() => import('./Actions/ptvente_patesserie'));
const PtvFuiterieActions = React.lazy(() => import('./Actions/ptvente_fruit'));
const PtvVBoulengerieActions = React.lazy(() => import('./Actions/ptvente_boulengerie'));
const PtvEpecerieActions = React.lazy(() => import('./Actions/ptvente_small_shop'));
const PtvViandeActions = React.lazy(() => import('./Actions/ptvente_viande'));
const ChantierArchitectureActions = React.lazy(() => import('./Actions/chantier_architecture'));
const ChantierContracteurActions = React.lazy(() => import('./Actions/chantier_contrateur'));
const ChantierQuicaillerieActions = React.lazy(() => import('./Actions/chantier_quincaillerie'));
const HandmadeCristalActions = React.lazy(() => import('./Actions/handmade_cristal'));
const HandmadeElectricienActions = React.lazy(() => import('./Actions/handmade_electricien'));
const HandmadeForferonActions = React.lazy(() => import('./Actions/handmade_forgeron'));
const HandemadeMarbreActions = React.lazy(() => import('./Actions/handmade_marbre'));
const HandemadeMenuisierActions = React.lazy(() => import('./Actions/handmade_menuisier'));
const HandemadePeintureActions = React.lazy(() => import('./Actions/handmade_peinture'));
const HandemadePlombierActions = React.lazy(() => import('./Actions/handmade_plombier'));
const CarQiosqieActions = React.lazy(() => import('./Actions/car_qiosque'));
const CarMecanicienActions = React.lazy(() => import('./Actions/car_mecanicien'));
const CarLocationActions = React.lazy(() => import('./Actions/car_location'));
const CarParkingActions = React.lazy(() => import('./Actions/car_parking'));
const ArtCinemaActions = React.lazy(() => import('./Actions/art_cinema'));
const ArtMuseeActions = React.lazy(() => import('./Actions/art_musee'));
const ArtTheatreActions = React.lazy(() => import('./Actions/art_theatre'));
const WeddingOrchestreActions = React.lazy(() => import('./Actions/wedding_orchestre'));
const WeddingFournitureMarriageActions = React.lazy(() => import('./Actions/wedding_fourniture_marriage'));
const WeddingPhotographeActions = React.lazy(() => import('./Actions/wedding_photographe'));
const WeddingBijouxActions = React.lazy(() => import('./Actions/wedding_bijoux'));
const WeddingChefActions = React.lazy(() => import('./Actions/wedding_chef'));
const WeddingSallonMariageActions = React.lazy(() => import('./Actions/wedding_salon_marriage'));
const VeterinaireActions = React.lazy(() => import('./Actions/veterinaire'));
const FourragerieActions = React.lazy(() => import('./Actions/fourragerie'));

//Suivie
const DocteurSuivie = React.lazy(() => import('./Suivie/docteur'));
const InfirmierSuivie = React.lazy(() => import('./Suivie/infirmier'));
const GarderieSuivie = React.lazy(() => import('./Suivie/garderie'));
const PharmacieSuivie = React.lazy(() => import('./Suivie/pharmacie'));
const RestaurantSuivie = React.lazy(() => import('./Suivie/restaurant'));
const CliniqueSuivie = React.lazy(() => import('./Suivie/clinique')); 
const AutoEcoleSuivie = React.lazy(() => import('./Suivie/autoecole'));
const AvocatSuivie = React.lazy(() => import('./Suivie/avocat'));
const BoutiqueSuivie = React.lazy(() => import('./Suivie/boutique'));
const CafeSuivie = React.lazy(() => import('./Suivie/cafe'));
const CentreMdSuivie = React.lazy(() => import('./Suivie/centreMD'));
const GymSuivie = React.lazy(() => import('./Suivie/gym'));
const EcoleSuivie = React.lazy(() => import('./Suivie/ecole'));
const ComptableSuivie = React.lazy(() => import('./Suivie/comptable'));
const CoiffureSuivie = React.lazy(() => import('./Suivie/coiffure'));
const HotelsSuivie = React.lazy(() => import('./Suivie/hotels'));
const LaboSuivie = React.lazy(() => import('./Suivie/labo'));
const LibrairieSuivie = React.lazy(() => import('./Suivie/librairie'));
const FormationSuivie = React.lazy(() => import('./Suivie/formation'));
const LyceeSuivie = React.lazy(() => import('./Suivie/lycee'));
const StadeSuivie = React.lazy(() => import('./Suivie/stade'));
const SociteSuivie = React.lazy(() => import('./Suivie/socite'));
const SmasarSuivie = React.lazy(() => import('./Suivie/samsar'));
const PyscineSuivie = React.lazy(() => import('./Suivie/pyscine'));
const UniversiteSuivie = React.lazy(() => import('./Suivie/universite'));
const TransporteurSuivie = React.lazy(() => import('./Suivie/transporteur'));
const StorageSuivie = React.lazy(() => import('./Suivie/storage'));
const VgAgenceSuivie = React.lazy(() => import('./Suivie/vg_agence'));
const HauseElectroSuivie = React.lazy(() => import('./Suivie/house_electro'));
const HauseMeubleSuivie = React.lazy(() => import('./Suivie/house_meuble'));
const PtvMagazinSuivie = React.lazy(() => import('./Suivie/ptvente_shop'));
const PtvPatesserieSuivie = React.lazy(() => import('./Suivie/ptvente_patesserie'));
const PtvFuiterieSuivie = React.lazy(() => import('./Suivie/ptvente_fruit'));
const PtvVBoulengerieSuivie = React.lazy(() => import('./Suivie/ptvente_boulengerie'));
const PtvEpecerieSuivie = React.lazy(() => import('./Suivie/ptvente_small_shop'));
const PtvViandeSuivie = React.lazy(() => import('./Suivie/ptvente_viande'));
const ChantierArchitectureSuivie = React.lazy(() => import('./Suivie/chantier_architecture'));
const ChantierContracteurSuivie = React.lazy(() => import('./Suivie/chantier_contrateur'));
const ChantierQuicaillerieSuivie = React.lazy(() => import('./Suivie/chantier_quincaillerie'));
const HandmadeCristalSuivie = React.lazy(() => import('./Suivie/handmade_cristal'));
const HandmadeElectricienSuivie = React.lazy(() => import('./Suivie/handmade_electricien'));
const HandmadeForferonSuivie = React.lazy(() => import('./Suivie/handmade_forgeron'));
const HandemadeMarbreSuivie = React.lazy(() => import('./Suivie/handmade_marbre'));
const HandemadeMenuisierSuivie = React.lazy(() => import('./Suivie/handmade_menuisier'));
const HandemadePeintureSuivie = React.lazy(() => import('./Suivie/handmade_peinture'));
const HandemadePlombierSuivie = React.lazy(() => import('./Suivie/handmade_plombier'));
const CarQiosqieSuivie = React.lazy(() => import('./Suivie/car_qiosque'));
const CarMecanicienSuivie = React.lazy(() => import('./Suivie/car_mecanicien'));
const CarLocationSuivie = React.lazy(() => import('./Suivie/car_location'));
const CarParkingSuivie = React.lazy(() => import('./Suivie/car_parking'));
const ArtCinemaSuivie = React.lazy(() => import('./Suivie/art_cinema'));
const ArtMuseeSuivie = React.lazy(() => import('./Suivie/art_musee'));
const ArtTheatreSuivie = React.lazy(() => import('./Suivie/art_theatre'));
const WeddingOrchestreSuivie = React.lazy(() => import('./Suivie/wedding_orchestre'));
const WeddingFournitureMarriageSuivie = React.lazy(() => import('./Suivie/wedding_fourniture_marriage'));
const WeddingPhotographeSuivie = React.lazy(() => import('./Suivie/wedding_photographe'));
const WeddingBijouxSuivie = React.lazy(() => import('./Suivie/wedding_bijoux'));
const WeddingChefSuivie = React.lazy(() => import('./Suivie/wedding_chef'));
const WeddingSallonMariageSuivie = React.lazy(() => import('./Suivie/wedding_salon_marriage'));
const VeterinaireSuivie = React.lazy(() => import('./Suivie/veterinaire'));
const FourragerieSuivie = React.lazy(() => import('./Suivie/fourragerie'));




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
                    <div className='text-center'> <img src={`https://cdn.abyedh.tn/images/Search/comments.svg`} className='mb-2' width='150px' height='100px' /> </div>
                    <div className='text-center'>  لا توجد تعليقات  </div>
                </div>
        </>)
    }

    return(<>
            <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                
                <div className='row mb-4'>
                    <div className='col-5'> <small className='  p-1 ps-2 pe-2 border-div' onClick={() => setCommeningIsActive(!commeningIsActive)}> {commeningIsActive ?  <><b>  التعليقات</b> <span className='bi bi-chat-left-dots-fill  '> </span> </> : <><b> أضف تعليق </b> <span className='bi bi-pencil-square  '> </span></> } </small> </div>
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

const ForLazyLoading = () =>{
    return (<>
            <br />            
            <br />            
            <br />
            <div className="loader-container-small">
              <div className="loader-small"></div>
            </div>          
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />            
            <br />                       
        </>);
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
                            <div className='col-12  mb-4'>
                                {/* { GConf.ADIL[tag].systemActive ?  <ActionCardForSmall /> : <></> }                         */}
                                { GConf.ADIL[tag].systemActive ?  <ActionForSmallCard /> : <></> }                        
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
        {
            menuItem: { key: 'pb', content:  <b className='' ><span className='bi bi-eye-fill bi-sm'></span></b> , dir:'rtl',  className:'rounded border border-2 border-div' , style:{color:GConf.ADIL[tag].themeColor,},},
            render: () => <PublicationCard />,
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
        const ConverColorToHsl = (color) =>{
            //"hsl(166, 87%, 24%, 0.4)"
        // Convert hex to RGB first
            let r = 0, g = 0, b = 0;
            if (color.length == 4) {
                r = "0x" + color[1] + color[1];
                g = "0x" + color[2] + color[2];
                b = "0x" + color[3] + color[3];
            } else if (color.length == 7) {
                r = "0x" + color[1] + color[2];
                g = "0x" + color[3] + color[4];
                b = "0x" + color[5] + color[6];
            }
            // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;

            if (delta == 0)
                h = 0;
            else if (cmax == r)
                h = ((g - b) / delta) % 6;
            else if (cmax == g)
                h = (b - r) / delta + 2;
            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0)
                h += 360;

            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            return "hsl(" + h + "," + s + "%," + l + "% " + ", 0.6 )";

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
                <div style={{ position:'relative'}}>
                    <div className="card-header-for-profile  border rounded-0 " style={{marginBottom:'35px', marginTop:'30px',  backgroundImage: `url(https://cdn.abyedh.tn/images/ads/${tag}.svg)` , backgroundSize: 'auto', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)',  border: '0px solid' , color: "black"}}>
                        <div style={{ content: '',  background: 'rgba(255, 255, 255, 0.7)',  position: 'absolute', top: 0, left: 0, width: '100%', height: '120px', }}></div>
                        
                        <div 
                            style={{marginTop:'55px',  zIndex:300}}
                            className='row ps-0 ms-0 pe-0 me-0'
                        >
                            <div className='col-10 col-lg-12 align-self-center text-lg-center text-center'>
                                <div className='row'>
                                    <div className='col-4 col-lg-12'><img src={`https://cdn.abyedh.tn/Images/Search/CIcons/${tag}.gif`} className='img-responsive rounded-circle bg-white border-white p-3 shadow-sm' width='100px'  height='100px' /></div>
                                    <div className='col-8 pt-2 align-self-center d-lg-none'> 
                                    {loading ? 
                                            <div className='row'>
                                                <div className='col-7 text-center'> 0  <br /><HalfStarRating rating={0} icon='star' disabled size='small' /> </div> 
                                                <div className='col-2 text-center'><span className="text-secondary"> 0  <br /> <span className='bi bi-hand-thumbs-up-fill'></span>  </span></div> 
                                                <div className='col-3 text-center'><span className="text-secondary">  0.0  <br /><span className='bi bi-eye-fill'></span>   </span></div> 
                                            </div>
                                            :
                                            <>
                                            <div className='row'>
                                                <div className='col-7 text-center'><span className=" text-dark"> {Math.min(Math.max(parseFloat(`${Math.abs(profileData.genrale[0].PID)}`[0] + '.' + `${Math.abs(profileData.genrale[0].PID)}`.slice(-1)), 1), 5)} </span> <br /> <HalfStarRating rating={Math.min(Math.max(parseFloat(`${Math.abs(profileData.genrale[0].PID)}`[0] + '.' + `${Math.abs(profileData.genrale[0].PID)}`.slice(-1)), 1), 5)} icon='star' disabled size='small' /></div> 
                                                <div className='col-2 text-center'><span className="text-secondary"> {profileData.genrale[0].Likes_Num} <br /> <span className='bi bi-hand-thumbs-up-fill'></span></span></div> 
                                                <div className='col-3 text-center'><span className="text-secondary">{profileData.genrale[0].Views_Num >= 1000 ? (parseInt(profileData.genrale[0].Views_Num.toString().substring(0, 4)) / 1000).toFixed(1) + 'K' :  profileData.genrale[0].Views_Num} <br /> <span className='bi bi-eye-fill'></span> </span></div> 
                                            </div> 
                                    </>
                                    }</div>
                                    {/* <div className='col-7 d-lg-none align-self-center ps-2'><h3 className='text-truncate' style={{maxWidth: '250px'}}  >{profileData.genrale ?   profileData.genrale[0].Name  : '' }</h3></div> */}
                                </div>
                                
                                
                            </div>
                            <div className='col-2 align-self-center text-center d-lg-none'> 
                                    <Button className='rounded-circle border shadow-sm' disabled={!GConf.UserData.Logged} onClick={() => AddToFarite()} icon size='large' style={{backgroundColor: isFavorite ?  GConf.ADIL[tag].themeColor : '#ffffff' }} > <Icon name='heart' style={{color: isFavorite ? '#ffffff' : GConf.ADIL[tag].themeColor}} /> </Button>
                            </div>

                        </div>
                        
                    </div>
                    <div className='floating-card-result-card pt-4 ms-2 '>
                        <h3 className='text-truncate text-center mt-2' style={{maxWidth: '320px'}}  >{profileData.genrale ?   profileData.genrale[0].Name  : '' }</h3>
                    </div>
                </div>
            </>)
        }

        const GenrealDataCard = () =>{
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <h5 className='text-end' style={{color: GConf.ADIL[tag].themeColor}}>معلومات عامة</h5>
                        <div className="table-responsive">
                            <table className="table table-hover  ">
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
            const CheckToday = (date) =>{
                if (new Date().toLocaleDateString('en-US', { weekday: 'short' }) == date) {
                    return true
                } else {
                    return false
                }
            }
            const CalendarSuggested = () =>{
                return(<>
                    <table className="table table-borderless" dir='rtl'>
                        <tbody>
                            <tr style={{color: CheckToday('Sun') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Sun') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row" >الأحد</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Mon') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Mon') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">الأثنين</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Tue') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Tue') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">الثلاثاء</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Wed') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Wed') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">الإربعاء</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Thu') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Thu') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">الخميس</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Fri') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Fri') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">الجمعة</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                            <tr style={{color: CheckToday('Sat') ? 'white' : GConf.ADIL[tag].themeColor , backgroundColor : CheckToday('Sat') ? ConverColorToHsl(GConf.ADIL[tag].themeColor) : ''}}>
                                <th scope="row">السبت</th>
                                <td className='text-center'>08:00 - 12:00 </td>
                                <td className='text-center'>14:00 - 18:00 </td>
                            </tr>
                        </tbody>
                    </table>
                </>)
            }
            return(<>
                    <div className='card card-body shadow-sm mb-2 h-100 border-div'>
                        <div className='row mb-2'>
                            <div className='col-3'> <Button  icon  className='rounded-circle mb-0' style={{backgroundColor:'white'}} onClick={() => setCalendarActive(!calendarActive)}> <Icon color={calendarActive ? 'orange' : 'grey'} name='calendar alternate' /> </Button> </div>
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
                        
                        <MapContainer center={GetPosition()} zoom={15} scrollWheelZoom={false} className="map-height"  style={{zIndex: 50}}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={GetPosition()}>
                                <Popup >
                                    <h4 className='text-start mb-0'>{profileData.genrale ?  profileData.genrale[0].Name  : '...' }</h4>
                                    <Button size='mini' className='rounded ' onClick={() => setActiveIndex(2)}> تسجيل طلب </Button>
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
                {src:'https://cdn.abyedh.tn/images/required/profile-img4.gif'},
                {src:'https://cdn.abyedh.tn/images/required/profile-img5.gif'},
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
                                    <div key={index} className='max-height-image'>
                                        <img src={data.src} className='d-block' width="100%" height="auto"/>
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
                case 'docteur': return  <Suspense fallback={<ForLazyLoading />}><DocteurSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'infirmier': return  <Suspense fallback={<ForLazyLoading />}><InfirmierSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'pharmacie': return <Suspense fallback={<ForLazyLoading />}><PharmacieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'clinique': return <Suspense fallback={<ForLazyLoading />}><CliniqueSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'labo': return <Suspense fallback={<ForLazyLoading />}><LaboSpecific TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'centreMD': return <Suspense fallback={<ForLazyLoading />}><CentreMdSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'garderie': return <Suspense fallback={<ForLazyLoading />}><GarderieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'autoecole': return <Suspense fallback={<ForLazyLoading />}><AutoEcoleSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'ecole': return <Suspense fallback={<ForLazyLoading />}><EcoleSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'lycee': return <Suspense fallback={<ForLazyLoading />}><LyceeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'universite': return <Suspense fallback={<ForLazyLoading />}><UniversiteSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'librairie': return <Suspense fallback={<ForLazyLoading />}><LibrairieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'formation': return <Suspense fallback={<ForLazyLoading />}><FormationSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'transporteur': return <Suspense fallback={<ForLazyLoading />}><TransporteurSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cafe': return <Suspense fallback={<ForLazyLoading />}><CafeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'restaurant': return <Suspense fallback={<ForLazyLoading />}><RestaurantSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'magazin': return <Suspense fallback={<ForLazyLoading />}><PtvMagazinSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boulengerie': return <Suspense fallback={<ForLazyLoading />}><PtvVBoulengerieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boucherie': return <Suspense fallback={<ForLazyLoading />}><PtvViandeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fruiterie': return <Suspense fallback={<ForLazyLoading />}><PtvFuiterieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'patesserie': return <Suspense fallback={<ForLazyLoading />}><PtvPatesserieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'epicerie': return <Suspense fallback={<ForLazyLoading />}><PtvEpecerieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electromenager': return <Suspense fallback={<ForLazyLoading />}><HauseElectroSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'meublerie': return <Suspense fallback={<ForLazyLoading />}><HauseMeubleSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'location': return <Suspense fallback={<ForLazyLoading />}><CarLocationSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'parking': return <Suspense fallback={<ForLazyLoading />}><CarParkingSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'qiosque': return <Suspense fallback={<ForLazyLoading />}><CarQiosqieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'mecanicien': return <Suspense fallback={<ForLazyLoading />}><CarMecanicienSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'courtier': return <Suspense fallback={<ForLazyLoading />}><SmasarSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'contracteur': return <Suspense fallback={<ForLazyLoading />}><ChantierContracteurSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'architecture': return <Suspense fallback={<ForLazyLoading />}><ChantierArchitectureSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'quincaillerie': return <Suspense fallback={<ForLazyLoading />}><ChantierQuicaillerieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'forgeron': return <Suspense fallback={<ForLazyLoading />}><HandmadeForferonSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'menuisier': return <Suspense fallback={<ForLazyLoading />}><HandemadeMenuisierSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'peinture': return <Suspense fallback={<ForLazyLoading />}><HandemadePeintureSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electricien': return <Suspense fallback={<ForLazyLoading />}><HandmadeElectricienSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'plombier': return <Suspense fallback={<ForLazyLoading />}><HandemadePlombierSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cristalerie': return <Suspense fallback={<ForLazyLoading />}><HandmadeCristalSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'marbrerie': return <Suspense fallback={<ForLazyLoading />}><HandemadeMarbreSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'coiffure': return <Suspense fallback={<ForLazyLoading />}><CoiffureSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boutique': return <Suspense fallback={<ForLazyLoading />}><BoutiqueSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'salle_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingSallonMariageSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'orchestre': return <Suspense fallback={<ForLazyLoading />}><WeddingOrchestreSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'chef': return <Suspense fallback={<ForLazyLoading />}><WeddingChefSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'photographe': return <Suspense fallback={<ForLazyLoading />}><WeddingPhotographeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourniture_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingFournitureMarriageSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'bijouterie': return <Suspense fallback={<ForLazyLoading />}><WeddingBijouxSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'gym': return <Suspense fallback={<ForLazyLoading />}><GymSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'pyscine': return <Suspense fallback={<ForLazyLoading />}><PyscineSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'stade': return <Suspense fallback={<ForLazyLoading />}><StadeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cinema': return <Suspense fallback={<ForLazyLoading />}><ArtCinemaSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'theatre': return <Suspense fallback={<ForLazyLoading />}><ArtTheatreSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'musee': return <Suspense fallback={<ForLazyLoading />}><ArtMuseeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'avocat': return <Suspense fallback={<ForLazyLoading />}><AvocatSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'depot': return <Suspense fallback={<ForLazyLoading />}><StorageSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'comptable': return <Suspense fallback={<ForLazyLoading />}><ComptableSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'socite': return <Suspense fallback={<ForLazyLoading />}><SociteSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'hotels': return <Suspense fallback={<ForLazyLoading />}><HotelsSpecific TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'vg_agence': return <Suspense fallback={<ForLazyLoading />}><VgAgenceSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'veterinaire': return <Suspense fallback={<ForLazyLoading />}><VeterinaireSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourragerie': return <Suspense fallback={<ForLazyLoading />}><FourragerieSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_s_hospital': return <Suspense fallback={<ForLazyLoading />}><AdminSHospitalSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_s_csb': return <Suspense fallback={<ForLazyLoading />}><AdminSScbSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_centre': return <Suspense fallback={<ForLazyLoading />}><AdminECentreSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_biblio': return <Suspense fallback={<ForLazyLoading />}><AdminEBiblioSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_ecole': return <Suspense fallback={<ForLazyLoading />}><AdminEEcoleSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_lycee': return <Suspense fallback={<ForLazyLoading />}><AdminELyceeSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_universite': return <Suspense fallback={<ForLazyLoading />}><AdminEUniversiteSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_e_ss': return <Suspense fallback={<ForLazyLoading />}><AdminESsSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_c_mj': return <Suspense fallback={<ForLazyLoading />}><AdminCmjSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_c_mc': return <Suspense fallback={<ForLazyLoading />}><AdminCMcSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_f_poste': return <Suspense fallback={<ForLazyLoading />}><AdminFPosteSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_f_rf': return <Suspense fallback={<ForLazyLoading />}><AdminFRfSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_a_mu': return <Suspense fallback={<ForLazyLoading />}><AdminAMuSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_a_police': return <Suspense fallback={<ForLazyLoading />}><AdminAPoliceSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_a_ar': return <Suspense fallback={<ForLazyLoading />}><AdminAArSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'admin_a_court': return <Suspense fallback={<ForLazyLoading />}><AdminACourtSpecific TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'admin_a_mosq': return <Suspense fallback={<ForLazyLoading />}><AdminAMosqSpecific TAG={tag} PID={PID} UID={UID} /></Suspense> ;
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
                <div className={`card p-2 btn-cursor mb-1  pt-3  text-center   border-div ${ activeIndex == props.activeI ? 'shadow-sm   ': 'border-0' }`} onClick={ () => setActiveIndex(props.activeI)}>
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
                case 'docteur': return  <Suspense fallback={<ForLazyLoading />}><DocteurActions TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'infirmier': return  <Suspense fallback={<ForLazyLoading />}><InfirmierActions TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'pharmacie': return <Suspense fallback={<ForLazyLoading />}><PharmacieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'clinique': return <Suspense fallback={<ForLazyLoading />}><CliniqueActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'labo': return <Suspense fallback={<ForLazyLoading />}><LaboActions TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'centreMD': return <Suspense fallback={<ForLazyLoading />}><CentreMdActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'garderie': return <Suspense fallback={<ForLazyLoading />}><GarderieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'autoecole': return <Suspense fallback={<ForLazyLoading />}><AutoEcoleActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'ecole': return <Suspense fallback={<ForLazyLoading />}><EcoleActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'lycee': return <Suspense fallback={<ForLazyLoading />}><LyceeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'universite': return <Suspense fallback={<ForLazyLoading />}><UniversiteActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'formation': return <Suspense fallback={<ForLazyLoading />}><FormationActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'librairie': return <Suspense fallback={<ForLazyLoading />}><LibrairieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'transporteur': return <Suspense fallback={<ForLazyLoading />}><TransporteurActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cafe': return <Suspense fallback={<ForLazyLoading />}><CafeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'restaurant': return <Suspense fallback={<ForLazyLoading />}><RestaurantActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'magazin': return <Suspense fallback={<ForLazyLoading />}><PtvMagazinActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boulengerie': return <Suspense fallback={<ForLazyLoading />}><PtvVBoulengerieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boucherie': return <Suspense fallback={<ForLazyLoading />}><PtvViandeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fruiterie': return <Suspense fallback={<ForLazyLoading />}><PtvFuiterieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'patesserie': return <Suspense fallback={<ForLazyLoading />}><PtvPatesserieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'epicerie': return <Suspense fallback={<ForLazyLoading />}><PtvEpecerieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electromenager': return <Suspense fallback={<ForLazyLoading />}><HauseElectroActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'meublerie': return <Suspense fallback={<ForLazyLoading />}><HauseMeubleActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'location': return <Suspense fallback={<ForLazyLoading />}><CarLocationActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'parking': return <Suspense fallback={<ForLazyLoading />}><CarParkingActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'qiosque': return <Suspense fallback={<ForLazyLoading />}><CarQiosqieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'mecanicien': return <Suspense fallback={<ForLazyLoading />}><CarMecanicienActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'courtier': return <Suspense fallback={<ForLazyLoading />}><SmasarActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'contracteur': return <Suspense fallback={<ForLazyLoading />}><ChantierContracteurActions TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'architecture': return <Suspense fallback={<ForLazyLoading />}><ChantierArchitectureActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'quincaillerie': return <Suspense fallback={<ForLazyLoading />}><ChantierQuicaillerieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'forgeron': return <Suspense fallback={<ForLazyLoading />}><HandmadeForferonActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'menuisier': return <Suspense fallback={<ForLazyLoading />}><HandemadeMenuisierActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'peinture': return <Suspense fallback={<ForLazyLoading />}><HandemadePeintureActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electricien': return <Suspense fallback={<ForLazyLoading />}><HandmadeElectricienActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'plombier': return <Suspense fallback={<ForLazyLoading />}><HandemadePlombierActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cristalerie': return <Suspense fallback={<ForLazyLoading />}><HandmadeCristalActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'marbrerie': return <Suspense fallback={<ForLazyLoading />}><HandemadeMarbreActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'coiffure': return <Suspense fallback={<ForLazyLoading />}><CoiffureActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boutique': return <Suspense fallback={<ForLazyLoading />}><BoutiqueActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'salle_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingSallonMariageActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'orchestre': return <Suspense fallback={<ForLazyLoading />}><WeddingOrchestreActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'chef': return <Suspense fallback={<ForLazyLoading />}><WeddingChefActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'photographe': return <Suspense fallback={<ForLazyLoading />}><WeddingPhotographeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourniture_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingFournitureMarriageActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'bijouterie': return <Suspense fallback={<ForLazyLoading />}><WeddingBijouxActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'gym': return <Suspense fallback={<ForLazyLoading />}><GymActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'pyscine': return <Suspense fallback={<ForLazyLoading />}><PyscineActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'stade': return <Suspense fallback={<ForLazyLoading />}><StadeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cinema': return <Suspense fallback={<ForLazyLoading />}><ArtCinemaActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'theatre': return <Suspense fallback={<ForLazyLoading />}><ArtTheatreActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'musee': return <Suspense fallback={<ForLazyLoading />}><ArtMuseeActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'avocat': return <Suspense fallback={<ForLazyLoading />}><AvocatActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'depot': return <Suspense fallback={<ForLazyLoading />}><StorageActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'comptable': return <Suspense fallback={<ForLazyLoading />}><ComptableActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'socite': return <Suspense fallback={<ForLazyLoading />}><SociteActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'hotels': return <Suspense fallback={<ForLazyLoading />}><HotelsActions TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'vg_agence': return <Suspense fallback={<ForLazyLoading />}><VgAgenceActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'veterinaire': return <Suspense fallback={<ForLazyLoading />}><VeterinaireActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourragerie': return <Suspense fallback={<ForLazyLoading />}><FourragerieActions TAG={tag} PID={PID} UID={UID} /></Suspense>  ;

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
                case 'docteur': return  <Suspense fallback={<ForLazyLoading />}><DocteurSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'infirmier': return  <Suspense fallback={<ForLazyLoading />}><InfirmierSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>;  
                case 'pharmacie': return <Suspense fallback={<ForLazyLoading />}><PharmacieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'clinique': return <Suspense fallback={<ForLazyLoading />}><CliniqueSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'labo': return <Suspense fallback={<ForLazyLoading />}><LaboSuivie TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'centreMD': return <Suspense fallback={<ForLazyLoading />}><CentreMdSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'garderie': return <Suspense fallback={<ForLazyLoading />}><GarderieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'autoecole': return <Suspense fallback={<ForLazyLoading />}><AutoEcoleSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'ecole': return <Suspense fallback={<ForLazyLoading />}><EcoleSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'lycee': return <Suspense fallback={<ForLazyLoading />}><LyceeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'universite': return <Suspense fallback={<ForLazyLoading />}><UniversiteSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'librairie': return <Suspense fallback={<ForLazyLoading />}><LibrairieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'formation': return <Suspense fallback={<ForLazyLoading />}><FormationSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'transporteur': return <Suspense fallback={<ForLazyLoading />}><TransporteurSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cafe': return <Suspense fallback={<ForLazyLoading />}><CafeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'restaurant': return <Suspense fallback={<ForLazyLoading />}><RestaurantSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'magazin': return <Suspense fallback={<ForLazyLoading />}><PtvMagazinSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boulengerie': return <Suspense fallback={<ForLazyLoading />}><PtvVBoulengerieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boucherie': return <Suspense fallback={<ForLazyLoading />}><PtvViandeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fruiterie': return <Suspense fallback={<ForLazyLoading />}><PtvFuiterieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'patesserie': return <Suspense fallback={<ForLazyLoading />}><PtvPatesserieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'epicerie': return <Suspense fallback={<ForLazyLoading />}><PtvEpecerieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electromenager': return <Suspense fallback={<ForLazyLoading />}><HauseElectroSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'meublerie': return <Suspense fallback={<ForLazyLoading />}><HauseMeubleSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'location': return <Suspense fallback={<ForLazyLoading />}><CarLocationSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'parking': return <Suspense fallback={<ForLazyLoading />}><CarParkingSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'qiosque': return <Suspense fallback={<ForLazyLoading />}><CarQiosqieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'mecanicien': return <Suspense fallback={<ForLazyLoading />}><CarMecanicienSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'courtier': return <Suspense fallback={<ForLazyLoading />}><SmasarSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'contracteur': return <Suspense fallback={<ForLazyLoading />}><ChantierContracteurSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>   ;
                case 'architecture': return <Suspense fallback={<ForLazyLoading />}><ChantierArchitectureSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'quincaillerie': return <Suspense fallback={<ForLazyLoading />}><ChantierQuicaillerieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'forgeron': return <Suspense fallback={<ForLazyLoading />}><HandmadeForferonSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'menuisier': return <Suspense fallback={<ForLazyLoading />}><HandemadeMenuisierSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'peinture': return <Suspense fallback={<ForLazyLoading />}><HandemadePeintureSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'electricien': return <Suspense fallback={<ForLazyLoading />}><HandmadeElectricienSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'plombier': return <Suspense fallback={<ForLazyLoading />}><HandemadePlombierSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cristalerie': return <Suspense fallback={<ForLazyLoading />}><HandmadeCristalSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'marbrerie': return <Suspense fallback={<ForLazyLoading />}><HandemadeMarbreSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'coiffure': return <Suspense fallback={<ForLazyLoading />}><CoiffureSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'boutique': return <Suspense fallback={<ForLazyLoading />}><BoutiqueSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'salle_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingSallonMariageSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'orchestre': return <Suspense fallback={<ForLazyLoading />}><WeddingOrchestreSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'chef': return <Suspense fallback={<ForLazyLoading />}><WeddingChefSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'photographe': return <Suspense fallback={<ForLazyLoading />}><WeddingPhotographeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourniture_marriage': return <Suspense fallback={<ForLazyLoading />}><WeddingFournitureMarriageSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'bijouterie': return <Suspense fallback={<ForLazyLoading />}><WeddingBijouxSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'gym': return <Suspense fallback={<ForLazyLoading />}><GymSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'pyscine': return <Suspense fallback={<ForLazyLoading />}><PyscineSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'stade': return <Suspense fallback={<ForLazyLoading />}><StadeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'cinema': return <Suspense fallback={<ForLazyLoading />}><ArtCinemaSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'theatre': return <Suspense fallback={<ForLazyLoading />}><ArtTheatreSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'musee': return <Suspense fallback={<ForLazyLoading />}><ArtMuseeSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'avocat': return <Suspense fallback={<ForLazyLoading />}><AvocatSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'depot': return <Suspense fallback={<ForLazyLoading />}><StorageSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'comptable': return <Suspense fallback={<ForLazyLoading />}><ComptableSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'socite': return <Suspense fallback={<ForLazyLoading />}><SociteSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'hotels': return <Suspense fallback={<ForLazyLoading />}><HotelsSuivie TAG={tag} PID={PID} UID={UID} /></Suspense> ;
                case 'vg_agence': return <Suspense fallback={<ForLazyLoading />}><VgAgenceSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'veterinaire': return <Suspense fallback={<ForLazyLoading />}><VeterinaireSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
                case 'fourragerie': return <Suspense fallback={<ForLazyLoading />}><FourragerieSuivie TAG={tag} PID={PID} UID={UID} /></Suspense>  ;
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
        const ActionForSmallCard = () =>{
            const SettingItemCard = (props) =>{
                return(<>
                        <div className="list-group-item list-group-item-action" onClick={() => setActiveIndex(2)}>
                             
                            <div className="row p-2">
                                <div className="col-1 align-self-center"><span className="bi bi-arrow-left-short bi-md"></span></div>
                                <div className="col-9 align-self-center text-end">
                                    <b style={{color : GConf.ADIL[tag].themeColor}}>{props.data.name}</b>
                                </div>
                                <div className="col-2 align-self-center text-end">
                                    <b style={{color : GConf.ADIL[tag].themeColor}}><span className={`bi bi-${props.data.icon}`}></span></b>
                                </div>
                            </div>
                        </div>
                </>)
            }

            return(<>
                <div className="list-group shadow-sm  border-div">
                    {GConf.ADIL[tag].profileBtns.map((data,index) => <SettingItemCard key={index} data={data} />).slice(0, GConf.ADIL[tag].profileBtns.length - 1)}
                </div>
            </>)
        }
        const PublicationCard = () =>{
            return(<>
                <div className='card-body'>
                    <div className='text-center'> <img src={`https://cdn.abyedh.tn/images/Search/blog-post.svg`} className='mb-2' width='100px' height='100px' /> </div>
                    <div className='text-center'>   هذا العميل ليس لديه منشورات  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </>)
        }
    return ( <>
            <TopNavBar /> 
            <HeaderCard randomRate={((Math.random() * (5 - 2)) + 2).toFixed(1)}/>
            <br />
            
            <div className='container'>                
                <div className='row bg-white pt-3 pb-2'  style={{zIndex: 100, top:'50px', position: 'sticky'}}>
                    <div className='col-4 text-start d-none d-lg-block'>
                        <Button className='rounded-circle border shadow-sm' disabled={!GConf.UserData.Logged} onClick={() => AddToFarite()} icon size='large' style={{backgroundColor: isFavorite ?  GConf.ADIL[tag].themeColor : '#ffffff' }} > <Icon name='heart' style={{color: isFavorite ? '#ffffff' : GConf.ADIL[tag].themeColor}} /> </Button>
                    </div>
                   
                    <div className='col-12 col-lg-8   ' style={{zIndex: 100, top:'55px', position: 'sticky'}}>
                        <div className='row justify-content-center  ' dir='rtl'  >
                                <div className='col col-lg-2'><ActivePaneCard icon='grid-3x3-gap-fill' activeI={0} /> </div>
                                <div className='col col-lg-2'><ActivePaneCard icon='view-list' activeI={1} /> </div>
                                <div className='col col-lg-2'><ActivePaneCard icon='pencil-square' activeI={2} /> </div>
                                <div className='col col-lg-2'><ActivePaneCard icon='eye-fill' activeI={3} /> </div>
                                <div className='col col-lg-2'><ActivePaneCard icon='list-columns-reverse' activeI={4} /> </div>
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
                
                
                 
                <ButtomCard />
            </div>
        </> );
}

export default ProfilePage;