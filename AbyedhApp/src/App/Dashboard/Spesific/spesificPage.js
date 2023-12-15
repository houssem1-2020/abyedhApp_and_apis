import React, {useEffect,useState}  from 'react';
import GConf from '../../AssetsM/APPConf';


import DocteurSpecific from './spesificPage/docteur'; 
import InfirmierSpecific from './spesificPage/infirmier'; 
import PharmacieSpecific from './spesificPage/pharmacie';
import CliniqueSpecific from './spesificPage/clinique'; 

 import GarderieSpecific from './spesificPage/garderie';
 import FormationSpecific from './spesificPage/formation';
 import RestaurantSpecific from './spesificPage/restaurant';

 import AutoEcoleSpecific from './spesificPage/autoecole';
 import AvocatSpecific from './spesificPage/avocat';
 import BoutiqueSpecific from './spesificPage/boutique';
import CafeSpecific from './spesificPage/cafe';
import CentreMdSpecific from './spesificPage/centreMD';

 import GymSpecific from './spesificPage/gym';
import EcoleSpecific from './spesificPage/ecole';
import ComptableSpecific from './spesificPage/comptable';
import CoiffureSpecific from './spesificPage/coiffure';
import HotelsSpecific from './spesificPage/hotels';
import LaboSpecific from './spesificPage/labo';
import LibrairieSpecific from './spesificPage/librairie';
import LyceeSpecific from './spesificPage/lycee';

import StadeSpecific from './spesificPage/stade';
import SmasarSpecific from './spesificPage/samsar';
import PyscineSpecific from './spesificPage/pyscine';
import UniversiteSpecific from './spesificPage/universite';
import TransporteurSpecific from './spesificPage/transporteur';
import StorageSpecific from './spesificPage/storage';
import VgAgenceSpecific from './spesificPage/vg_agence';

import HauseElectroSpecific from './spesificPage/house_electro';
import HauseMeubleSpecific from './spesificPage/house_meuble';
import PtvMagazinSpecific from './spesificPage/ptvente_shop';
import PtvPatesserieSpecific from './spesificPage/ptvente_patesserie';
import PtvFuiterieSpecific from './spesificPage/ptvente_fruit';
import PtvVBoulengerieSpecific from './spesificPage/ptvente_boulengerie';
import PtvEpecerieSpecific from './spesificPage/ptvente_small_shop';
import PtvViandeSpecific from './spesificPage/ptvente_viande';

import ChantierArchitectureSpecific from './spesificPage/chantier_architecture';
import ChantierContracteurSpecific from './spesificPage/chantier_contrateur';
import ChantierQuicaillerieSpecific from './spesificPage/chantier_quincaillerie';
import HandmadeCristalSpecific from './spesificPage/handmade_cristal';
import HandmadeElectricienSpecific from './spesificPage/handmade_electricien';
import HandmadeForferonSpecific from './spesificPage/handmade_forgeron';
import HandemadeMarbreSpecific from './spesificPage/handmade_menuisier';
import HandemadeMenuisierSpecific from './spesificPage/handmade_menuisier';
import HandemadePeintureSpecific from './spesificPage/handmade_peinture';
import HandemadePlombierSpecific from './spesificPage/handmade_plombier';

import CarQiosqieSpecific from './spesificPage/car_qiosque';
import CarMecanicienSpecific from './spesificPage/car_mecanicien';
import CarLocationSpecific from './spesificPage/car_location';
import CarParkingSpecific from './spesificPage/car_parking';

import ArtCinemaSpecific from './spesificPage/art_cinema';
import ArtMuseeSpecific from './spesificPage/art_musee';
import ArtTheatreSpecific from './spesificPage/art_theatre';

import WeddingOrchestreSpecific from './spesificPage/wedding_orchestre';
import WeddingFournitureMarriageSpecific from './spesificPage/wedding_fourniture_marriage';
import WeddingPhotographeSpecific from './spesificPage/wedding_photographe';
import WeddingBijouxSpecific from './spesificPage/wedding_bijoux';
import WeddingChefSpecific from './spesificPage/wedding_chef';
import WeddingSallonMariageSpecific from './spesificPage/wedding_salon_marriage';
import VeterinaireSpecific from './spesificPage/veterinaire'; 
 


function RequestPage() {
 
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
          case 'docteur': return <DocteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} />;  
          case 'infirmier': return <InfirmierSpecific TAG={GConf.systemTag} PID={GConf.systemTag} />;  
          case 'pharmacie': return <PharmacieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'clinique': return <CliniqueSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
        
          case 'labo': return <LaboSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'centreMD': return <CentreMdSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'garderie': return <GarderieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'formation': return <FormationSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'autoecole': return <AutoEcoleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'ecole': return <EcoleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'lycee': return <LyceeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'universite': return <UniversiteSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'librairie': return <LibrairieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'transporteur': return <TransporteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'cafe': return <CafeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'restaurant': return <RestaurantSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'magazin': return <PtvMagazinSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boulengerie': return <PtvVBoulengerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boucherie': return <PtvViandeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'fruiterie': return <PtvFuiterieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'patesserie': return <PtvPatesserieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'epicerie': return <PtvEpecerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'electromenager': return <HauseElectroSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'meublerie': return <HauseMeubleSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'location': return <CarLocationSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'parking': return <CarParkingSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'qiosque': return <CarQiosqieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'mecanicien': return <CarMecanicienSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'courtier': return <SmasarSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'contracteur': return <ChantierContracteurSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'architecture': return <ChantierArchitectureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'quincaillerie': return <ChantierQuicaillerieSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'forgeron': return <HandmadeForferonSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'menuisier': return <HandemadeMenuisierSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'peinture': return <HandemadePeintureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'electricien': return <HandmadeElectricienSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'plombier': return <HandemadePlombierSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'cristalerie': return <HandmadeCristalSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'marbrerie': return <HandemadeMarbreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'coiffure': return <CoiffureSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'boutique': return <BoutiqueSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'salle_marriage': return <WeddingSallonMariageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'orchestre': return <WeddingOrchestreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'chef': return <WeddingChefSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'photographe': return <WeddingPhotographeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'fourniture_marriage': return <WeddingFournitureMarriageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'bijouterie': return <WeddingBijouxSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'gym': return <GymSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'pyscine': return <PyscineSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'stade': return <StadeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'cinema': return <ArtCinemaSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'theatre': return <ArtTheatreSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'musee': return <ArtMuseeSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'avocat': return <AvocatSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'depot': return <StorageSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'comptable': return <ComptableSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'hotels': return <HotelsSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'vg_agence': return <VgAgenceSpecific TAG={GConf.systemTag} PID={GConf.systemTag} /> ;
          case 'veterinaire': return <VeterinaireSpecific TAG={GConf.systemTag} PID={GConf.systemTag} />;
           
          default:  return <IndefinieCard />;    
      }
      }, [status]);
  
      return (
      <div className="">
          {statusCard()}
      </div>
      );
    }
 
    return (<>
            <SpecificCard status={GConf.systemTag} />

    </>);
}

export default RequestPage;