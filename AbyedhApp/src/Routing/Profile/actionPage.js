import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';

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
import HandemadeMarbreActions from './Actions/handmade_menuisier';
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

function ProfileAction() {

    /* ############### Const #################*/
    let {tag,PID} = useParams()
    let UID = localStorage.getItem('UID')

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
                                <img  className="border-div d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
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
    const AlertCard = () =>{
        return(<>
            <div className='card-body bg-danger text-white mb-4 border-div text-center ' dir='rtl'>
                <span className='bi bi-exclamation-circle-fill ms-2'></span>       <small className='text-white mb-1'>هذا العميل غير مشترك في المنصة .  سيتولي فريق أبيض محاولة الاتصال به لإعلامه بطلبكم</small> 
            </div>
        </>)
    }
    const StateCard = ({ status }) => {
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
            case 'ptvente_shop': return <PtvMagazinActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_boulengerie': return <PtvVBoulengerieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_viande': return <PtvViandeActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_fruit': return <PtvFuiterieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_patesserie': return <PtvPatesserieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_small_shop': return <PtvEpecerieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'house_electro': return <HauseElectroActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'house_meuble': return <HauseMeubleActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_location': return <CarLocationActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_parking': return <CarParkingActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_qiosque': return <CarQiosqieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_mecanicien': return <CarMecanicienActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'samsar': return <SmasarActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_contrateur': return <ChantierContracteurActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_architecture': return <ChantierArchitectureActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_quincaillerie': return <ChantierQuicaillerieActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_forgeron': return <HandmadeForferonActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_menuisier': return <HandemadeMenuisierActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_peinture': return <HandemadePeintureActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_electricien': return <HandmadeElectricienActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_plombier': return <HandemadePlombierActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_cristal': return <HandmadeCristalActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_marbre': return <HandemadeMarbreActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'coiffure': return <CoiffureActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'boutique': return <BoutiqueActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_salon_marriage': return <WeddingSallonMariageActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_orchestre': return <WeddingOrchestreActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_chef': return <WeddingChefActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_photographe': return <WeddingPhotographeActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_fourniture_marriage': return <WeddingFournitureMarriageActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_bijoux': return <WeddingBijouxActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'gym': return <GymActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'pyscine': return <PyscineActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'stade': return <StadeActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_cinema': return <ArtCinemaActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_theatre': return <ArtTheatreActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_musee': return <ArtMuseeActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'avocat': return <AvocatActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'storage': return <StorageActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'comptable': return <ComptableActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'socite': return <SociteActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'hotels': return <HotelsActions TAG={tag} PID={PID} UID={UID} /> ;
            case 'vg_agence': return <VgAgenceActions TAG={tag} PID={PID} UID={UID} /> ;
            default:  return <StateCard color='secondary' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };

    return ( <>
        <TopNavBar />
        <br />
        <br />
        <br />
        <br />
        <div className='container'>
            <div className='  mb-4 border-div'>
                <br />
                <div className='row'>
                    <div className='col-12 '>
                      <AlertCard /> 
                    </div>
                    <div className='col-12 col-lg-8 mb-4 order-2 order-lg-1 mt-4'>
                        <StateCard status={tag} />
                    </div>
                    <div className='col-12 col-md-4 mb-4 order-1 order-lg-2 text-center align-self-center'>
                        <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} width='60%' heigth='60%' className='img-responsive' />
                    </div>
                </div>
            </div>
        </div>
        

    </> );
}

export default ProfileAction;