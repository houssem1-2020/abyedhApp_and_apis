import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GConf from '../../AssetsM/APPConf';
 

import DocteurSpecific from './infoPage/docteur'; 
// import CliniqueSpecific from './infoPage/clinique'; 
// import PharmacieSpecific from './infoPage/pharmacie';
// import GarderieSpecific from './infoPage/garderie';
import RestaurantReservation from './infoPage/restaurant';
import RestaurantCommande from './infoPage/restaurantcommande';
// import AutoEcoleSpecific from './infoPage/autoecole';
// import AvocatSpecific from './infoPage/avocat';
// import BoutiqueSpecific from './infoPage/boutique';
// import CafeSpecific from './infoPage/cafe';
// import CentreMdSpecific from './infoPage/centreMD';
// import GymSpecific from './infoPage/gym';
// import EcoleSpecific from './infoPage/ecole';
// import ComptableSpecific from './infoPage/comptable';
// import CoiffureSpecific from './infoPage/coiffure';
// import HotelsSpecific from './infoPage/hotels';
// import LaboSpecific from './infoPage/labo';
// import LibrairieSpecific from './infoPage/librairie';
// import LyceeSpecific from './infoPage/lycee';
// import StadeSpecific from './infoPage/stade';
// import SociteSpecific from './infoPage/socite';
// import SmasarSpecific from './infoPage/samsar';
// import PyscineSpecific from './infoPage/pyscine';
// import UniversiteSpecific from './infoPage/universite';
// import TransporteurSpecific from './infoPage/transporteur';
// import StorageSpecific from './infoPage/storage';
// import VgAgenceSpecific from './infoPage/vg_agence';

// import HauseElectroSpecific from './infoPage/house_electro';
// import HauseMeubleSpecific from './infoPage/house_meuble';

// import PtvMagazinSpecific from './infoPage/ptvente_shop';
// import PtvPatesserieSpecific from './infoPage/ptvente_patesserie';
// import PtvFuiterieSpecific from './infoPage/ptvente_fruit';
// import PtvVBoulengerieSpecific from './infoPage/ptvente_boulengerie';
// import PtvEpecerieSpecific from './infoPage/ptvente_small_shop';
// import PtvViandeSpecific from './infoPage/ptvente_viande';

// import ChantierArchitectureSpecific from './infoPage/chantier_architecture';
// import ChantierContracteurSpecific from './infoPage/chantier_contrateur';
// import ChantierQuicaillerieSpecific from './infoPage/chantier_quincaillerie';

// import HandmadeCristalSpecific from './infoPage/handmade_cristal';
// import HandmadeElectricienSpecific from './infoPage/handmade_electricien';
// import HandmadeForferonSpecific from './infoPage/handmade_forgeron';
// import HandemadeMarbreSpecific from './infoPage/handmade_menuisier';
// import HandemadeMenuisierSpecific from './infoPage/handmade_menuisier';
// import HandemadePeintureSpecific from './infoPage/handmade_peinture';
// import HandemadePlombierSpecific from './infoPage/handmade_plombier';

// import CarQiosqieSpecific from './infoPage/car_qiosque';
// import CarMecanicienSpecific from './infoPage/car_mecanicien';
// import CarLocationSpecific from './infoPage/car_location';
// import CarParkingSpecific from './infoPage/car_parking';

// import ArtCinemaSpecific from './infoPage/art_cinema';
// import ArtMuseeSpecific from './infoPage/art_musee';
// import ArtTheatreSpecific from './infoPage/art_theatre';

// import WeddingOrchestreSpecific from './infoPage/wedding_orchestre';
// import WeddingFournitureMarriageSpecific from './infoPage/wedding_fourniture_marriage';
// import WeddingPhotographeSpecific from './infoPage/wedding_photographe';
// import WeddingBijouxSpecific from './infoPage/wedding_bijoux';
// import WeddingChefSpecific from './infoPage/wedding_chef';
// import WeddingSallonMariageSpecific from './infoPage/wedding_salon_marriage';

// import AdminAMosqSpecific from './infoPage/admin_a_mosq';
// import AdminACourtSpecific from './infoPage/admin_a_court';
// import AdminAArSpecific from './infoPage/admin_a_ar';
// import AdminAMuSpecific from './infoPage/admin_a_mu';
// import AdminAPoliceSpecific from './infoPage/admin_a_police';
// import AdminCMcSpecific from './infoPage/admin_c_mc';
// import AdminCmjSpecific from './infoPage/admin_c_mj';
// import AdminEBiblioSpecific from './infoPage/admin_e_biblio';
// import AdminECentreSpecific from './infoPage/admin_e_centre';
// import AdminEEcoleSpecific from './infoPage/admin_e_ecole';
// import AdminELyceeSpecific from './infoPage/admin_e_lycee';
// import AdminESsSpecific from './infoPage/admin_e_ss';
// import AdminEUniversiteSpecific from './infoPage/admin_e_universite';
// import AdminFPosteSpecific from './infoPage/admin_f_poste';
// import AdminFRfSpecific from './infoPage/admin_f_rf';
// import AdminSScbSpecific from './infoPage/admin_s_csb';
// import AdminSHospitalSpecific from './infoPage/admin_s_hospital';


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
          case 'docteur_rdv': return <DocteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} />;  
          // case 'pharmacie': return <PharmacieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'clinique': return <CliniqueSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'labo': return <LaboSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'centreMD': return <CentreMdSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'garderie': return <GarderieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'autoecole': return <AutoEcoleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ecole': return <EcoleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'lycee': return <LyceeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'universite': return <UniversiteSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'librairie': return <LibrairieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'transporteur': return <TransporteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'cafe': return <CafeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'restaurant_reservation': return <RestaurantReservation TAG={GConf.systemTag} PID={GConf.systemTag}  /> ;
          case 'restaurant_commande': return <RestaurantCommande TAG={GConf.systemTag} PID={GConf.systemTag}  /> ;
          // case 'ptvente_shop': return <PtvMagazinSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ptvente_boulengerie': return <PtvVBoulengerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ptvente_viande': return <PtvViandeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ptvente_fruit': return <PtvFuiterieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ptvente_patesserie': return <PtvPatesserieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'ptvente_small_shop': return <PtvEpecerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'house_electro': return <HauseElectroSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'house_meuble': return <HauseMeubleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_location': return <CarLocationSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_parking': return <CarParkingSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_qiosque': return <CarQiosqieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'car_mecanicien': return <CarMecanicienSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'samsar': return <SmasarSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'chantier_contrateur': return <ChantierContracteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'chantier_architecture': return <ChantierArchitectureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'chantier_quincaillerie': return <ChantierQuicaillerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_forgeron': return <HandmadeForferonSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_menuisier': return <HandemadeMenuisierSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_peinture': return <HandemadePeintureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_electricien': return <HandmadeElectricienSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_plombier': return <HandemadePlombierSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_cristal': return <HandmadeCristalSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'handmade_marbre': return <HandemadeMarbreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'coiffure': return <CoiffureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'boutique': return <BoutiqueSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_salon_marriage': return <WeddingSallonMariageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_orchestre': return <WeddingOrchestreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_chef': return <WeddingChefSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_photographe': return <WeddingPhotographeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_fourniture_marriage': return <WeddingFournitureMarriageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'wedding_bijoux': return <WeddingBijouxSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'gym': return <GymSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'pyscine': return <PyscineSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'stade': return <StadeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_cinema': return <ArtCinemaSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_theatre': return <ArtTheatreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'art_musee': return <ArtMuseeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'avocat': return <AvocatSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'storage': return <StorageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'comptable': return <ComptableSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'socite': return <SociteSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'hotels': return <HotelsSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'vg_agence': return <VgAgenceSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_s_hospital': return <AdminSHospitalSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_s_csb': return <AdminSScbSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_centre': return <AdminECentreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_biblio': return <AdminEBiblioSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_ecole': return <AdminEEcoleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_lycee': return <AdminELyceeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_universite': return <AdminEUniversiteSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_e_ss': return <AdminESsSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_c_mj': return <AdminCmjSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_c_mc': return <AdminCMcSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_f_poste': return <AdminFPosteSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_f_rf': return <AdminFRfSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_a_mu': return <AdminAMuSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_a_police': return <AdminAPoliceSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_a_ar': return <AdminAArSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_a_court': return <AdminACourtSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          // case 'admin_a_mosq': return <AdminAMosqSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
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