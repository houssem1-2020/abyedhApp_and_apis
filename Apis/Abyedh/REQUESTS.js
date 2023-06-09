const REQUESTS ={
    docteur_rdv : {communicTable:'01_docteur_rdv', RequestTable:{}},
    pharmacie_shop : {communicTable:'01_pharmacie_shop', RequestTable:{}},
    pharmacie_rdv : {communicTable:'01_pharmacie_rdv', RequestTable:{}},
    garderie_inscription : {communicTable:'02_garderie_inscription', RequestTable:{}},
    autoecole_inscrie : {communicTable:'03_autoecole_inscrie', RequestTable:{}},
    avocat_souscrire : {communicTable:'10_avocat_souscrire', RequestTable:{}},
    avocat_rdv : {communicTable:'10_avocat_rdv', RequestTable:{}},
    boutique_shop : {communicTable:'04_boutique_shop', RequestTable:{}},
    pv_boulangerie_shop : {communicTable:'05_pv_boulangerie_shop', RequestTable:{}},
    gym_souscription : {communicTable:'06_gym_souscription', RequestTable:{}},
    centre_inscrie : {communicTable:'01_centre_inscrie', RequestTable:{}},
    centre_reserver : {communicTable:'01_centre_reserver', RequestTable:{}},
    clinique_inscrie : {communicTable:'01_clinique_inscrie', RequestTable:{}},
    clinique_reserver : {communicTable:'01_clinique_reserver', RequestTable:{}},
    docteur_rdv : {communicTable:'01_docteur_rdv', RequestTable:{}},
    labo_inscrie : {communicTable:'01_labo_inscrie', RequestTable:{}},
    labo_rdv : {communicTable:'01_labo_rdv', RequestTable:{}},
    pharmacie_rdv : {communicTable:'01_pharmacie_rdv', RequestTable:{}},
    pharmacie_shop : {communicTable:'01_pharmacie_shop', RequestTable:{}},
    college_lycee_inscrie : {communicTable:'02_college_lycee_inscrie', RequestTable:{}},
    college_lycee_souscrire : {communicTable:'02_college_lycee_souscrire', RequestTable:{}},
    ecole_inscrie : {communicTable:'02_ecole_inscrie', RequestTable:{}},
    ecole_souscrire : {communicTable:'02_ecole_souscrire', RequestTable:{}},
    garderie_inscription : {communicTable:'02_garderie_inscription', RequestTable:{}},
    garderie_souscrire : {communicTable:'02_garderie_souscrire', RequestTable:{}},
    impremante_imprimer : {communicTable:'02_impremante_imprimer', RequestTable:{}},
    impremante_service : {communicTable:'02_impremante_service', RequestTable:{}},
    librairie_shop : {communicTable:'02_librairie_shop', RequestTable:{}},
    universite_inscrie : {communicTable:'02_universite_inscrie', RequestTable:{}},
    universite_souscrire : {communicTable:'02_universite_souscrire', RequestTable:{}},
    autoecole_inscrie : {communicTable:'03_autoecole_inscrie', RequestTable:{}},
    louage_rdv : {communicTable:'03_louage_rdv', RequestTable:{}},
    taxi_rdv : {communicTable:'03_taxi_rdv', RequestTable:{}},
    taxi_request : {communicTable:'03_taxi_request', RequestTable:{}},
    transporteur_request : {communicTable:'03_transporteur_request', RequestTable:{}},
    boutique_shop : {communicTable:'04_boutique_shop', RequestTable:{}},
    coiffure_rdv : {communicTable:'04_coiffure_rdv', RequestTable:{}},
    coiffure_reserver : {communicTable:'04_coiffure_reserver', RequestTable:{}},
    h_electromenager_shop : {communicTable:'04_h_electromenager_shop', RequestTable:{}},
    h_lavage_demande : {communicTable:'04_h_lavage_demande', RequestTable:{}},
    h_meubles_shop : {communicTable:'04_h_meubles_shop', RequestTable:{}},
    location_request : {communicTable:'04_location_request', RequestTable:{}},
    m_bijoux_shop : {communicTable:'04_m_bijoux_shop', RequestTable:{}},
    m_chef_reserver : {communicTable:'04_m_chef_reserver', RequestTable:{}},
    m_fourniture_shop : {communicTable:'04_m_fourniture_shop', RequestTable:{}},
    m_orchestre_reserver : {communicTable:'04_m_orchestre_reserver', RequestTable:{}},
    m_photographe_reserver : {communicTable:'04_m_photographe_reserver', RequestTable:{}},
    m_salon_marriage_reserver : {communicTable:'04_m_salon_marriage_reserver', RequestTable:{}},
    parking_reserver : {communicTable:'04_parking_reserver', RequestTable:{}},
    parking_souscrire : {communicTable:'04_parking_souscrire', RequestTable:{}},
    qiosque_lavage : {communicTable:'04_qiosque_lavage', RequestTable:{}},
    qiosque_request : {communicTable:'04_qiosque_request', RequestTable:{}},
    cafe_request : {communicTable:'05_cafe_request', RequestTable:{}},
    cafe_rserver : {communicTable:'05_cafe_rserver', RequestTable:{}},
    pv_alimentaire_shop : {communicTable:'05_pv_alimentaire_shop', RequestTable:{}},
    pv_boucheries_shop : {communicTable:'05_pv_boucheries_shop', RequestTable:{}},
    pv_boulangerie_shop : {communicTable:'05_pv_boulangerie_shop', RequestTable:{}},
    pv_fruiterie_shop : {communicTable:'05_pv_fruiterie_shop', RequestTable:{}},
    pv_patisserie_shop : {communicTable:'05_pv_patisserie_shop', RequestTable:{}},
    restaurant_commande : {communicTable:'05_restaurant_commande', RequestTable:{}},
    restaurant_reservation : {communicTable:'05_restaurant_reservation', RequestTable:{}},
    art_avis : {communicTable:'06_art_avis', RequestTable:{}},
    cinema_reserver : {communicTable:'06_cinema_reserver', RequestTable:{}},
    musee_reserver : {communicTable:'06_musee_reserver', RequestTable:{}},
    pyscine_souscrire : {communicTable:'06_pyscine_souscrire', RequestTable:{}},
    sport_salle_souscrire : {communicTable:'06_gym_souscription', RequestTable:{}},
    stade_reserver : {communicTable:'06_stade_reserver', RequestTable:{}},
    stade_souscrire : {communicTable:'06_stade_souscrire', RequestTable:{}},
    theatre_reserver : {communicTable:'06_theatre_reserver', RequestTable:{}},
    agence_service : {communicTable:'07_agence_service', RequestTable:{}},
    hotels_reserver : {communicTable:'07_hotels_reserver', RequestTable:{}},
    hotels_service : {communicTable:'07_hotels_service', RequestTable:{}},
    comptable_service : {communicTable:'08_comptable_service', RequestTable:{}},
    socite_demande : {communicTable:'08_socite_demande', RequestTable:{}},
    socite_emploi : {communicTable:'08_socite_emploi', RequestTable:{}},
    vente_en_gros_demande : {communicTable:'08_vente_en_gros_demande', RequestTable:{}},
    c_architecture_service : {communicTable:'09_c_architecture_service', RequestTable:{}},
    c_contracteur_service : {communicTable:'09_c_contracteur_service', RequestTable:{}},
    c_courtier_service : {communicTable:'09_c_courtier_service', RequestTable:{}},
    handmade_service : {communicTable:'09_handmade_service', RequestTable:{}},
    materiaux_vc_shop : {communicTable:'09_materiaux_vc_shop', RequestTable:{}},
    quincaillerie_shop : {communicTable:'09_quincaillerie_shop', RequestTable:{}},
    samsar_rent : {communicTable:'09_samsar_rent', RequestTable:{}},
    avocat_rdv : {communicTable:'10_avocat_rdv', RequestTable:{}},
    avocat_souscrire : {communicTable:'10_avocat_souscrire', RequestTable:{}},
    agri_animals_shop : {communicTable:'11_agri_animals_shop', RequestTable:{}},
    agri_champ_demande : {communicTable:'11_agri_champ_demande', RequestTable:{}},
    agri_tools_service : {communicTable:'11_agri_tools_service', RequestTable:{}},
    message_contents : {communicTable:'message_contents', RequestTable:{}},
    message_conversations : {communicTable:'message_conversations', RequestTable:{}}
}
module.exports = REQUESTS 