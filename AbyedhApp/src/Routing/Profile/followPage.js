import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';

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
import HandemadeMarbreSuivie from './Suivie/handmade_menuisier';
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


function ProfileFollow() {
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

    const StateCard = ({ status }) => {
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
            case 'ptvente_shop': return <PtvMagazinSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_boulengerie': return <PtvVBoulengerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_viande': return <PtvViandeSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_fruit': return <PtvFuiterieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_patesserie': return <PtvPatesserieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'ptvente_small_shop': return <PtvEpecerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'house_electro': return <HauseElectroSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'house_meuble': return <HauseMeubleSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_location': return <CarLocationSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_parking': return <CarParkingSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_qiosque': return <CarQiosqieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'car_mecanicien': return <CarMecanicienSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'samsar': return <SmasarSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_contrateur': return <ChantierContracteurSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_architecture': return <ChantierArchitectureSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'chantier_quincaillerie': return <ChantierQuicaillerieSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_forgeron': return <HandmadeForferonSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_menuisier': return <HandemadeMenuisierSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_peinture': return <HandemadePeintureSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_electricien': return <HandmadeElectricienSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_plombier': return <HandemadePlombierSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_cristal': return <HandmadeCristalSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'handmade_marbre': return <HandemadeMarbreSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'coiffure': return <CoiffureSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'boutique': return <BoutiqueSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_salon_marriage': return <WeddingSallonMariageSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_orchestre': return <WeddingOrchestreSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_chef': return <WeddingChefSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_photographe': return <WeddingPhotographeSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_fourniture_marriage': return <WeddingFournitureMarriageSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'wedding_bijoux': return <WeddingBijouxSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'gym': return <GymSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'pyscine': return <PyscineSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'stade': return <StadeSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_cinema': return <ArtCinemaSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_theatre': return <ArtTheatreSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'art_musee': return <ArtMuseeSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'avocat': return <AvocatSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'storage': return <StorageSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'comptable': return <ComptableSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'socite': return <SociteSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'hotels': return <HotelsSuivie TAG={tag} PID={PID} UID={UID} /> ;
            case 'vg_agence': return <VgAgenceSuivie TAG={tag} PID={PID} UID={UID} /> ;
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
        <StateCard status={tag} />

    </> );
}

export default ProfileFollow;