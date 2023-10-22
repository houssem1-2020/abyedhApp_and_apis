import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GConf from '../../AssetsM/APPConf';
 

import Docteur from './infoPage/docteur'; 
import Clinique from './infoPage/clinique_reserver'; 
import PharmacieRdv from './infoPage/pharmacie_rdv';
import PharmacieShop from './infoPage/pharmacie_shop';
import GarderieInscription from './infoPage/garderie_inscription';
import GarderieSouscrie from './infoPage/garderie_souscrire';
import RestaurantReservation from './infoPage/restaurant';
import RestaurantCommande from './infoPage/restaurantcommande';
import AutoEcole from './infoPage/autoecole_inscrie';
import Avocat from './infoPage/avocat_rdv';
import Boutique from './infoPage/boutique_shop';
import CafeCommande from './infoPage/cafe_commande';
import CafeReservation from './infoPage/cafe_reservation';
import CentreMd from './infoPage/centre_reserver';
import Gym from './infoPage/sport_salle_souscrire';
import EcoleInscrie from './infoPage/ecole_inscrie';
import EcoleSouscrie from './infoPage/ecole_souscrire';
import Comptable from './infoPage/comptable_service';
import Coiffure from './infoPage/coiffure_reserver';
import HotelsReserver from './infoPage/hotels_reserver';
import HotelsService from './infoPage/hotels_service';
import Labo from './infoPage/labo_rdv';
import Librairie from './infoPage/librairie_shop';
import LyceeInscrie from './infoPage/college_lycee_inscrie';
import LyceeSouscrie from './infoPage/college_lycee_souscrire';
import StadeReserver from './infoPage/stade_reserver';
import stade_souscrire from './infoPage/stade_souscrire';
import Socite from './infoPage/socite';
import CourtierRequest from './infoPage/courtier_request';
import CourtierTorent from './infoPage/courtier_torent';
import PyscineReserver from './infoPage/pyscine_reserver';
import PyscineSouscrie from './infoPage/pyscine_souscrire';
import UniversiteInscrie from './infoPage/universite_inscrie';
import UniversiteSouscrie from './infoPage/universite_souscrire';
import Transporteur from './infoPage/transporteur_request';
import Depot from './infoPage/depot_commande';
import VgAgence from './infoPage/agence_service';

import Electromenager from './infoPage/electromenager_shop';
import Meublerie from './infoPage/meubles_shop';

import Magazin from './infoPage/magazin_commande';
import Patesserie from './infoPage/patisserie_shop';
import Fruiterie from './infoPage/fruiterie_shop';
import Boulengerie from './infoPage/boulangerie_shop';
import Epecerie from './infoPage/epicerie_shop';
import Boucherie from './infoPage/boucheries_shop';

import Architecture from './infoPage/architecture_service';
import Contracteur from './infoPage/contracteur_service';
import Quicaillerie from './infoPage/quincaillerie_shop';

import Cristalerie from './infoPage/handmade_cristal';
import Electricien from './infoPage/handmade_electricien';
import Forferon from './infoPage/handmade_forgeron';
import Marbrerie from './infoPage/handmade_marbre';
import Menuisier from './infoPage/handmade_menuisier';
import Peinture from './infoPage/handmade_peinture';
import Plombier from './infoPage/handmade_plombier';

import Qiosqie from './infoPage/qiosque_lavage';
// import Mecanicien from './infoPage/mecanicien';
import Location from './infoPage/location_request';
import ParkingReserver from './infoPage/parking_reserver';
import ParkingSouscrie from './infoPage/parking_souscrire';

import Cinema from './infoPage/cinema_reserver';
import Musee from './infoPage/musee_reserver';
import Theatre from './infoPage/theatre_reserver';

import Orchestre from './infoPage/orchestre_reserver';
import FournitureMarriage from './infoPage/fourniture_marriage_location';
import Photographe from './infoPage/photographe_reserver';
import Bijouterie from './infoPage/bijouterie_shop';
import Chef from './infoPage/chef_reserver';
import SallonMariage from './infoPage/salon_marriage_reserver';

 


function RequestInfo() {
    /*#########################[Const]##################################*/
    const {TAG} = useParams()
    
    /*#########################[useEffect]#############################*/ 
    /*#########################[Functions]#############################*/
    /*#########################[Card]##################################*/
    const IndefinieCard = (props) =>{
        return(<>
            <div className='text-center p-2 text-secondary'>
                    <span className='bi bi-file-earmark-lock bi-lg '></span>
                    <h5>صفحة غير متوفرة</h5> 
            </div>
        </>)
    }

    const SpecificCard = ({ status }) => {
      const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
      const statusCard = React.useCallback(() => {
      switch(status) {
          case 'docteur_rdv': return <Docteur TAG={GConf.systemTag} PID={GConf.systemTag} />;  
          case 'pharmacie_shop': return <PharmacieShop TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'pharmacie_rdv': return <PharmacieRdv TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'clinique': return <Clinique TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'labo': return <Labo TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'centreMD': return <CentreMd TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'garderie_inscription': return <GarderieInscription TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'garderie_souscription': return <GarderieSouscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'autoecole': return <AutoEcole TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'ecole_inscription': return <EcoleInscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'ecole_souscription': return <EcoleSouscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'lycee_inscription': return <LyceeInscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'lycee_souscription': return <LyceeSouscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'universite_inscription': return <UniversiteInscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'universite_souscription': return <UniversiteSouscrie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'librairie': return <Librairie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'transporteur': return <Transporteur TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'cafe_commande': return <CafeCommande TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'cafe_reservation': return <CafeReservation TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'restaurant_reservation': return <RestaurantReservation TAG={GConf.systemTag} PID={GConf.systemTag}  /> ;
          case 'restaurant_commande': return <RestaurantCommande TAG={GConf.systemTag} PID={GConf.systemTag}  /> ;
          
          case 'magazin_commande': return <Magazin TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boulengerie': return <Boulengerie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boucherie': return <Boucherie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'fruiterie': return <Fruiterie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'patesserie': return <Patesserie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'epecireie_commande': return <Epecerie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'electromenager_commande': return <Electromenager TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'meublerie_commande': return <Meublerie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_location': return <CarLocation TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_parking': return <CarParking TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_qiosque': return <CarQiosqie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_mecanicien': return <CarMecanicien TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'courtier': return <Courtier TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'contracteur': return <Contracteur TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'architecture': return <Architecture TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'quincaillerie_commande': return <Quicaillerie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_forgeron': return <HandmadeForferon TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_menuisier': return <HandemadeMenuisier TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_peinture': return <HandemadePeinture TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_electricien': return <HandmadeElectricien TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_plombier': return <HandemadePlombier TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_cristal': return <HandmadeCristal TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_marbre': return <HandemadeMarbre TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'coiffure': return <Coiffure TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boutique': return <Boutique TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_salon_marriage': return <WeddingSallonMariage TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_orchestre': return <WeddingOrchestre TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_chef': return <WeddingChef TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_photographe': return <WeddingPhotographe TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_fourniture_marriage': return <WeddingFournitureMarriage TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'bijouterie_commande': return <Bijouterie TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'gym': return <Gym TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'pyscine': return <Pyscine TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'stade': return <Stade TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_cinema': return <ArtCinema TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_theatre': return <ArtTheatre TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_musee': return <ArtMusee TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'avocat': return <Avocat TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'depot_commande': return <Depot TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'comptable': return <Comptable TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'socite': return <Socite TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'hotels': return <Hotels TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'vg_agence': return <VgAgence TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          default:  return <IndefinieCard />;    
      }
      }, [status]);
  
      return (
      <div className="">
          {statusCard()}
      </div>
      );
    }
    
    return ( <> 
        <SpecificCard status={TAG} />
    </> );
}

export default RequestInfo;