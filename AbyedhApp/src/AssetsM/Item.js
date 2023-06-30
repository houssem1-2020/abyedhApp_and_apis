const dirItem = {
    sante:{
        tag: 'صِحّة',
        icon: 'bandaid-fill',
        themeColor: '#009788',
        slider: false,
        slides: [
            { id: 1, image: 'docteur', name: 'طَبِيبْ', link: 'docteur' },
            { id: 2, image: 'pharma', name: 'صَيْدَلِية', link: 'pharmacie' },
            { id: 3, image: 'clinique', name: 'مِصَحَّة', link: 'clinique' },
            { id: 4, image: 'labo', name: 'مَخْبَرْ', link: 'labo' },
            { id: 5, image: 'centremedi', name: 'مَرْكَزْ', link: 'centreMD' },
            { id: 6, image: 'admin_s_hospital', name: 'مٌسْتَشْفَي', link: 'admin_s_hospital' },
            { id: 7, image: 'admin_s_csb', name: 'مَرْكِزْ صِحَّة', link: 'admin_s_csb' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'docteur', name: 'طَبِيبْ', link: 'docteur' },
                { id: 2, image: 'pharma', name: 'صَيْدَلِية', link: 'pharmacie' },
                { id: 3, image: 'clinique', name: 'مِصَحَّة', link: 'clinique' },
                { id: 4, image: 'labo', name: 'مَخْبَرْ', link: 'labo' },
            ],
            [
                { id: 5, image: 'centremedi', name: 'مَرْكَزْ', link: 'centreMD' },
                { id: 6, image: 'admin_s_hospital', name: 'مٌسْتَشْفَي', link: 'admin_s_hospital' },
                { id: 7, image: 'admin_s_csb', name: 'مَرْكِزْ صِحَّة', link: 'admin_s_csb' },
            ]
        ]
    },
    education: {
        tag: 'تَعْلِيمْ',
        icon: 'mortarboard-fill',
        themeColor: '#00bcd5',
        slider: true,
        slides: [
            [
                { id: 1, image: 'nurs', name: 'رَوْضَة', link: 'garderie' },
                { id: 2, image: 'ecole', name: 'مَدْرَسَة خَاصَّة', link: 'ecole' },
                { id: 3, image: 'lycee', name: 'مَعْهِدْ خَاصْ', link: 'lycee' },
                { id: 4, image: 'universite', name: 'جَامِعَة خَاصَّة', link: 'universite' },
                { id: 5, image: 'eduser', name: 'مَطْبَعَة', link: 'impremerie' },
                { id: 6, image: 'librairie', name: 'كٌتٌبٍيَّة', link: 'librairie' },
                { id: 7, image: 'admin_e_centre', name: 'مَرْكِزْ تَكْوِينْ', link: 'admin_e_centre' },
                { id: 8, image: 'admin_e_biblio', name: 'مَكْتَبَة عٌمٌومِيًّة', link: 'admin_e_biblio' },
            ],
            [
                { id: 9, image: 'admin_e_ecole', name: 'مَدْرَسَة', link: 'admin_e_ecole' },
                { id: 10, image: 'admin_e_lycee', name: 'مَعْهِدْ', link: 'admin_e_lycee' },
                { id: 11, image: 'admin_e_universite', name: 'جَامِعَة', link: 'admin_e_universite' },
                { id: 12, image: 'admin_e_ss', name: 'دِيوًانْ خَدَمَاتْ', link: 'admin_e_ss' }
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'garderie', name: 'رَوْضَة', link: 'garderie' },
                { id: 2, image: 'ecole', name: 'مَدْرَسَة خَاصَّة', link: 'ecole' },
                { id: 3, image: 'lycee', name: 'مَعْهِدْ خَاصْ', link: 'lycee' },
                { id: 4, image: 'universite', name: 'جَامِعَة خَاصَّة', link: 'universite' },
            ],
            [
                { id: 5, image: 'eduser', name: 'مَطْبَعَة', link: 'impremerie' },
                { id: 6, image: 'librairie', name: 'كٌتٌبٍيَّة', link: 'librairie' },
                { id: 7, image: 'admin_e_centre', name: 'مَرْكِزْ تَكْوِينْ', link: 'admin_e_centre' },
                { id: 8, image: 'admin_e_biblio', name: 'مَكْتَبَة عٌمٌومِيًّة', link: 'admin_e_biblio' },
            ],
            [
                { id: 9, image: 'admin_e_ecole', name: 'مَدْرَسَة', link: 'admin_e_ecole' },
                { id: 10, image: 'admin_e_lycee', name: 'مَعْهِدْ', link: 'admin_e_lycee' },
                { id: 11, image: 'admin_e_universite', name: 'جَامِعَة', link: 'admin_e_universite' },
                { id: 12, image: 'admin_e_ss', name: 'دِيوًانْ خَدَمَاتْ', link: 'admin_e_ss' }
            ]
        ]
    },
    trasnportation: {
        tag: 'نَقْلْ, تَنَقٌلْ',
        icon: 'truck',
        themeColor:'#f44236',
        slider: false,
        slides: [
                { id: 1, image: 'transp', name: 'نَقْلْ بَضَائِعْ', link: 'transporteur' },
                { id: 2, image: 'autoecole', name: 'تَعْلِيمْ سِيَاقَة', link: 'autoecole' },
                { id: 3, image: 'taxi', name: 'تَاكْسِي', link: 'Tools/Taxi', tools:true },
                { id: 4, image: 'louage', name: 'لٌوَّاجْ', link: 'Tools', tools:true }
        ],
        smallSlider: false,
        smallDisplay:[
            [
                { id: 1, image: 'transp', name: 'نَقْلْ بَضَائِعْ', link: 'transporteur' },
                { id: 2, image: 'autoecole', name: 'تَعْلِيمْ سِيَاقَة', link: 'autoecole' },
            ],
            [
                { id: 3, image: 'taxi', name: 'تَاكْسِي', link: 'taxi' , tools:true},
                { id: 4, image: 'louage', name: 'لٌوَّاجْ', link: 'louage', tools:true }
            ]
        ]
        
    },
    nutrition:{
        tag: ' طَعَامْ , غِذَاءْ',
        icon: 'cup-straw',
        themeColor: '#8bc24a',
        slider: false,
        slides: [
            { id: 1, image: 'cafe', name: 'مَقْهًي', link: 'cafe' },
            { id: 2, image: 'restaurant', name: 'مَطْعًمْ', link: 'restaurant' },
            { id: 3, image: 'shop', name: 'مَغَازَة', link: 'ptvente_shop' },
            { id: 4, image: 'ptvente_bread', name: 'مِخْبَزَة', link: 'ptvente_boulengerie' },
            { id: 5, image: 'ptvente_viande', name: 'بَيْعْ اللٌّحٌومْ', link: 'ptvente_viande' },
            { id: 6, image: 'ptvente_fruit', name: 'بَيْعْ الخٌضَرْ', link: 'ptvente_fruit' },
            { id: 7, image: 'ptvente_patesserie', name: 'بَيْعْ المٌرَطَبَاتْ', link: 'ptvente_patesserie' },
            { id: 8, image: 'ptvente_small_shop', name: 'بَقَّالَة', link: 'ptvente_small_shop' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'cafe', name: 'مَقْهًي', link: 'cafe' },
                { id: 2, image: 'restaurant', name: 'مَطْعًمْ', link: 'restaurant' },
                { id: 3, image: 'shop', name: 'مَغَازَة', link: 'ptvente_shop' },
                { id: 4, image: 'ptvente_bread', name: 'مِخْبَزَة', link: 'ptvente_boulengerie' },
            ],
            [
                { id: 5, image: 'ptvente_viande', name: 'بَيْعْ اللٌّحٌومْ', link: 'ptvente_viande' },
                { id: 6, image: 'ptvente_fruit', name: 'بَيْعْ الخٌضَرْ', link: 'ptvente_fruit' },
                { id: 7, image: 'ptvente_patesserie', name: 'بَيْعْ المٌرَطَبَاتْ', link: 'ptvente_patesserie' },
                { id: 8, image: 'ptvente_small_shop', name: 'بَقَّالَة', link: 'ptvente_small_shop' },
            ]
        ]
    },
    houseCar: {
        tag: 'المنزل , السيارة ',
        icon: 'car-front',
        themeColor: '#fb1e6b',
        slider: true,
        slides: [
            [
                { id: 1, image: 'house_electro', name: 'بَيْعْ الإِلِكْتْرٌونِيَاتْ', link: 'house_electro' },
                { id: 2, image: 'home', name: ' بَيْعْ الأَثَاثْ ', link: 'house_meuble' },
                { id: 3, image: 'car', name: ' كِرَاءْ السَيَّارَاتْ ', link: 'car_location' },
                { id: 4, image: 'car_parking', name: 'Parking ', link: 'car_parking' },
            ],
            [
                { id: 9, image: 'car_qiosque', name: 'Qiosque', link: 'car_qiosque' },
                { id: 10, image: 'car_mecancien', name: 'Mecanicien', link: 'car_mecanicien' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 3, image: 'car', name: ' كِرَاءْ السَيَّارَاتْ ', link: 'car_location' },
                { id: 4, image: 'car_parking', name: 'Parking ', link: 'car_parking' },
                { id: 9, image: 'car_qiosque', name: 'Qiosque', link: 'car_qiosque' },
                { id: 10, image: 'car_mecancien', name: 'Mecanicien', link: 'car_mecanicien' },
            ],
            [
                { id: 1, image: 'house_electro', name: 'بَيْعْ الإِلِكْتْرٌونِيَاتْ', link: 'house_electro' },
                { id: 2, image: 'home', name: ' بَيْعْ الأَثَاثْ ', link: 'house_meuble' },
            ]
        ]
    },
    construction: {
        tag: 'خَدَمَاتْ عَقّارِية',
        icon: 'bricks',
        themeColor: '#565d61',
        slider: true,
        slides: [
            [
                { id: 1, image: 'samsar', name: 'وَسِيطْ عَقَّارِي', link: 'samsar' },
                { id: 2, image: 'chantier_contracteur', name: ' مٌقَاوِلْ', link: 'chantier_contrateur' },
                { id: 3, image: 'chantier_architecture', name: 'مٌهَنْدِسْ مِعْمَارِي ', link: 'chantier_architecture' },
                { id: 4, image: 'handmade', name: 'Quncaillerie ', link: 'chantier_quincaillerie' },
                { id: 5, image: 'handmade_forgeron', name: 'حَدَّادْ', link: 'handmade_forgeron' },
                { id: 6, image: 'handmade_menuisier', name: 'نَجَّارْ', link: 'handmade_menuisier' },
                { id: 7, image: 'handmade_peinture', name: 'دَهَّانْ ', link: 'handmade_peinture' },
                { id: 8, image: 'handmade_electricien', name: 'كَهْرَبَائِي ', link: 'handmade_electricien' },
            ],
            [
                { id: 9, image: 'handmade_plombier', name: 'Plombier', link: 'handmade_plombier' },
                { id: 10, image: 'handmade_cristal', name: 'تًرْكِيبْ البِلٌوْرْ', link: 'handmade_cristal' },
                { id: 11, image: 'handmade_marbre', name: 'جَلِيزْ وَ رٌخَامْ', link: 'handmade_marbre' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'samsar', name: 'وَسِيطْ عَقَّارِي', link: 'samsar' },
                { id: 2, image: 'chantier_contracteur', name: ' مٌقَاوِلْ', link: 'chantier_contrateur' },
                { id: 3, image: 'chantier_architecture', name: 'مٌهَنْدِسْ مِعْمَارِي ', link: 'chantier_architecture' },
                { id: 4, image: 'handmade', name: 'Quncaillerie ', link: 'chantier_quincaillerie' },
            ],
            [
                { id: 5, image: 'handmade_forgeron', name: 'حَدَّادْ', link: 'handmade_forgeron' },
                { id: 6, image: 'handmade_menuisier', name: 'نَجَّارْ', link: 'handmade_menuisier' },
                { id: 7, image: 'handmade_peinture', name: 'دَهَّانْ ', link: 'handmade_peinture' },
                { id: 8, image: 'handmade_electricien', name: 'كَهْرَبَائِي ', link: 'handmade_electricien' },
            ],
            [
                { id: 9, image: 'handmade_plombier', name: 'Plombier', link: 'handmade_plombier' },
                { id: 10, image: 'handmade_cristal', name: 'تًرْكِيبْ البِلٌوْرْ', link: 'handmade_cristal' },
                { id: 11, image: 'handmade_marbre', name: 'جَلِيزْ وَ رٌخَامْ', link: 'handmade_marbre' },
            ]
        ]
    },
    life:{
        tag: 'حَيَاةْ , جَمَالْ',
        icon: 'balloon-heart-fill',
        themeColor: '#fb1e6b',
        slider: false,
        slides: [
            { id: 1, image: 'coiffure', name: 'قَاعَةْ حِلاَقَة', link: 'coiffure' },
            { id: 2, image: 'boutique', name: 'Boutique', link: 'boutique' },
            { id: 3, image: 'wedding_salon_marriage', name: 'قَاعَةْ أَفْرَاحْ', link: 'wedding_salon_marriage' },
            { id: 4, image: 'wedding_orchestre', name: 'فِرْقَة مٌوسِيقِيَّة', link: 'wedding_orchestre' },
            { id: 5, image: 'wedding_chef', name: 'طَبَّاخْ', link: 'wedding_chef' },
            { id: 6, image: 'wedding_photographe', name: 'مَصَوِّرْ', link: 'wedding_photographe' },
            { id: 7, image: 'wedding_fourniture_marriage', name: ' لَوَازِمْ أَفْرَاجْ', link: 'wedding_fourniture_marriage' },
            { id: 8, image: 'wedding', name: ' مُجَوْهَرَاتْ ', link: 'wedding_bijoux' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'coiffure', name: 'قَاعَةْ حِلاَقَة', link: 'coiffure' },
                { id: 2, image: 'boutique', name: 'Boutique', link: 'boutique' },
                { id: 3, image: 'wedding_salon_marriage', name: 'قَاعَةْ أَفْرَاحْ', link: 'wedding_salon_marriage' },
                { id: 4, image: 'wedding_orchestre', name: 'فِرْقَة مٌوسِيقِيَّة', link: 'wedding_orchestre' },
            ],
            [
                { id: 5, image: 'wedding_chef', name: 'طَبَّاخْ', link: 'wedding_chef' },
                { id: 6, image: 'wedding_photographe', name: 'مَصَوِّرْ', link: 'wedding_photographe' },
                { id: 7, image: 'wedding_fourniture_marriage', name: ' لَوَازِمْ أَفْرَاجْ', link: 'wedding_fourniture_marriage' },
                { id: 8, image: 'wedding', name: ' مُجَوْهَرَاتْ ', link: 'wedding_bijoux' },
            ]
        ]
    },
    culture: {
        tag: 'ثَقَافَة , رِيَاضَة , شَبَابْ',
        icon: 'bicycle',
        themeColor: '#47ccd1',
        slider: true,
        slides: [
            [
                { id: 1, image: 'gym', name: 'قَاعَةْ رِيَاضَة', link: 'gym' },
                { id: 2, image: 'piscine', name: ' نَادِي سِبَاحَة', link: 'pyscine' },
                { id: 3, image: 'stade', name: ' مَلْعَبْ', link: 'stade' },
                { id: 4, image: 'art_cinema', name: 'قَاعَةْ سِنَمَا ', link: 'art_cinema' },
                { id: 5, image: 'art_theatre', name: 'قَاعَةْ مَسْرَحْ', link: 'art_theatre' },
                { id: 6, image: 'art_musee', name: 'مَتْحَفْ', link: 'art_musee' },
                { id: 7, image: 'admin_c_mj', name: 'دَارْ شَبَابْ ', link: 'admin_c_mj' },
                { id: 8, image: 'admin_c_mc', name: 'دَارْ تَقَافَة ', link: 'admin_c_mc' },
            ],
            [
                { id: 9, image: 'admin_c_ce', name: 'نَادِي أَطْفَالْ', link: 'admin_c_me' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'gym', name: 'قَاعَةْ رِيَاضَة', link: 'gym' },
                { id: 2, image: 'piscine', name: ' نَادِي سِبَاحَة', link: 'pyscine' },
                { id: 3, image: 'stade', name: ' مَلْعَبْ', link: 'stade' },
                { id: 4, image: 'art_cinema', name: 'قَاعَةْ سِنَمَا ', link: 'art_cinema' },
            ],
            [
                { id: 5, image: 'art_theatre', name: 'قَاعَةْ مَسْرَحْ', link: 'art_theatre' },
                { id: 6, image: 'art_musee', name: 'مَتْحَفْ', link: 'art_musee' },
                { id: 7, image: 'admin_c_mj', name: 'دَارْ شَبَابْ ', link: 'admin_c_mj' },
                { id: 8, image: 'admin_c_mc', name: 'دَارْ تَقَافَة ', link: 'admin_c_mc' },
            ],
            [
                { id: 9, image: 'admin_c_ce', name: 'نَادِي أَطْفَالْ', link: 'admin_c_me' },
            ]
        ]
    },
    politique:{
        tag: 'حٌقٌوقْ , سِيَاسَة , مٌنَظّمَاتْ',
        icon: 'briefcase-fill',
        themeColor: '#673bb7',
        slider: false,
        slides: [
            { id: 1, image: 'avocat', name: 'مُحَامِي', link: 'avocat' },
        ],
        smallSlider: false,
        smallDisplay:[
                { id: 1, image: 'avocat', name: 'مُحَامِي', link: 'avocat' },
        ]
    },
    finance: {
        tag: 'مَالِيّة و أَعْمَالْ',
        icon: 'cash-coin',
        themeColor: '#ff9700',
        slider: true,
        slides: [
            [
                { id: 1, image: 'storage', name: 'بَيْعْ بِالجٌمْلَة', link: 'storage' },
                { id: 2, image: 'comptable', name: ' مٌحَاسِبْ', link: 'comptable' },
                { id: 3, image: 'socite', name: ' شَرِكَة قَابِضَة', link: 'socite' },
                { id: 4, image: 'admin_f_poste', name: ' مَكْتَبْ بَرِيدْ', link: 'admin_f_poste' },
            ],
            [
                { id: 5, image: 'admin_f_rf', name: 'قَبَاضَة مَالِيَّة', link: 'admin_f_rf' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'storage', name: 'بَيْعْ بِالجٌمْلَة', link: 'storage' },
                { id: 2, image: 'comptable', name: ' مٌحَاسِبْ', link: 'comptable' },
                { id: 3, image: 'socite', name: ' شَرِكَة قَابِضَة', link: 'socite' },
                { id: 4, image: 'admin_f_poste', name: ' مَكْتَبْ بَرِيدْ', link: 'admin_f_poste' },
            ],
            [
                { id: 5, image: 'admin_f_rf', name: 'قَبَاضَة مَالِيَّة', link: 'admin_f_rf' },
            ]
        ]
    },
    agricole:{
        tag: 'فِلاَحَة',
        icon: 'tree-fill',
        themeColor: '#795549',
        slider: false,
        slides: [
            { id: 2, image: 'champ', name: 'بَيْعْ العَلَفْ', link: 'champ'},
            { id: 1, image: 'animals', name: 'حَيَوَانَاتْ أَلِيفَة', link: 'Tools', tools:true }, 
            { id: 3, image: 'agtool', name: 'أَدَاةْ فِلاَحِيَّة', link: 'Tools/agritools' , tools:true },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'animals', name: 'حَيَوَانَاتْ أَلِيفَة', link: 'Tools' , tools:true },
                { id: 2, image: 'champ', name: 'بَيْعْ العَلَفْ', link: 'champ'   },
            ],
            [
                { id: 3, image: 'agtool', name: 'أَدَاةْ فِلاَحِيَّة', link: 'Tools/agritools' , tools:true },
            ]
        ]
    },
    tourizme:{
        tag: 'سِيَاحَة , سَفَرْ ,تَرْفِيهْ',
        icon: 'airplane-engines-fill',
        themeColor: '#607d8b',
        slider: false,
        slides: [
            { id: 1, image: 'Hotels', name: 'Hotels', link: 'hotels' },
            { id: 2, image: 'travel', name: 'وِكَالَةْ أَسْفَارْ', link: 'vg_agence' },
        ],
        smallSlider: false,
        smallDisplay:[
            [
                { id: 1, image: 'Hotels', name: 'Hotels', link: 'hotels' },
                { id: 2, image: 'travel', name: 'وِكَالَةْ أَسْفَارْ', link: 'vg_agence' },
            ]
        ]
    },
    generale: {
        tag: 'خَدَمَاتْ عَامّة و مَعْلٌومَاتْ',
        icon: 'arrows-fullscreen',
        themeColor: '#0275c5',
        slider: true,
        slides: [
            [
                { id: 1, image: 'admin_a_mu', name: 'بَلَدِيَّة', link: 'admin_a_mu' },
                { id: 2, image: 'admin_a_police', name: ' مَرْكَزْ أَمْنْ', link: 'admin_a_police' },
                { id: 3, image: 'admin_a_ar', name: ' إِدَارَةْ/مَنْدٌوبِيَّة', link: 'admin_a_ar' },
                { id: 4, image: 'admin_a_court', name: ' مَحَكَمَة', link: 'admin_a_court' },
            ],
            [
                { id: 5, image: 'admin_a_mosq', name: 'جَامَعْ', link: 'admin_a_mosq' },
                { id: 6, image: 'embassy', name: 'سَفَارَة', link: 'Tools/ambassade', tools:true },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'admin_a_mu', name: 'بَلَدِيَّة', link: 'admin_a_mu' },
                { id: 2, image: 'admin_a_police', name: ' مَرْكَزْ أَمْنْ', link: 'admin_a_police' },
                { id: 3, image: 'admin_a_ar', name: ' إِدَارَةْ/مَنْدٌوبِيَّة', link: 'admin_a_ar' },
                { id: 4, image: 'admin_a_court', name: ' مَحَكَمَة', link: 'admin_a_court' },
            ],
            [
                { id: 5, image: 'admin_a_mosq', name: 'جَامَعْ', link: 'admin_a_mosq' },
                { id: 6, image: 'embassy', name: 'سَفَارَة', link: 'ambassade', tools:true },
            ]
        ]
    },
}
export default dirItem