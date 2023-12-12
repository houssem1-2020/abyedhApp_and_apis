const dirItem = {
    sante:{
        tag: 'صِحّة',
        icon: 'bandaid-fill',
        themeColor: '#009788',
        slider: false,
        slides: [
            { id: 1, image: 'docteur', name: 'طَبِيبْ', link: 'docteur' },
            { id: 2, image: 'infirmier', name: 'مَمَرٍّضْ', link: 'infirmier' },
            { id: 3, image: 'pharmacie', name: 'صَيْدَلِية', link: 'pharmacie' },
            { id: 4, image: 'labo', name: 'مَخْبَرْ تَحَالِيلْ', link: 'labo' },
            { id: 5, image: 'clinique', name: 'مِصَحَّة', link: 'clinique' },
            { id: 6, image: 'centremedi', name: 'مَرْكَزْ عِلاَجْ', link: 'centreMD' },
            { id: 7, image: 'admin_s_hospital', name: 'مٌسْتَشْفَي', link: 'admin_s_hospital' },
            { id: 8, image: 'admin_s_csb', name: 'مَرْكِزْ صِحَّة', link: 'admin_s_csb' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'docteur', name: 'طَبِيبْ', link: 'docteur' },
                { id: 2, image: 'infirmier', name: 'مَمَرٍّضْ', link: 'infirmier' },
                { id: 3, image: 'pharmacie', name: 'صَيْدَلِية', link: 'pharmacie' },
                { id: 4, image: 'labo', name: 'مَخْبَرْ تَحَالِيلْ', link: 'labo' },
                
            ],
            [   
                { id: 5, image: 'clinique', name: 'مِصَحَّة', link: 'clinique' },
                { id: 6, image: 'centremedi', name: 'مَرْكَزْ عِلاَجْ', link: 'centreMD' },
                { id: 7, image: 'admin_s_hospital', name: 'مٌسْتَشْفَي', link: 'admin_s_hospital' },
                { id: 8, image: 'admin_s_csb', name: 'مَرْكِزْ صِحَّة', link: 'admin_s_csb' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Products/landing/sante', name: '  أدوية ', img: 'medicamment.svg' },
            // { id: 2, link: 'Tools/', name: '  موسوعة الأمراض ', img: 'medicamment.svg' },
        ],
    },
    education: {
        tag: 'تَعْلِيمْ',
        icon: 'mortarboard-fill',
        themeColor: '#00bcd5',
        slider: true,
        slides: [
            [
                { id: 1, image: 'garderie', name: 'رَوْضَة', link: 'garderie' },
                { id: 2, image: 'ecole', name: 'مَدْرَسَة خَاصَّة', link: 'ecole' },
                { id: 3, image: 'lycee', name: 'مَعْهِدْ خَاصْ', link: 'lycee' },
                { id: 4, image: 'universite', name: 'جَامِعَة خَاصَّة', link: 'universite' },
                { id: 5, image: 'formation', name: 'تَكْوِينْ خَاصْ', link: 'formation' },
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
                { id: 5, image: 'formation', name: 'تَكْوِينْ خَاصْ', link: 'formation' },
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
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/LivreScolair', name: 'دروس خصوصية', img: 'livre_scolaire.svg' },
            { id: 1, link: 'Tools/Devoirat', name: 'مطبعة ', img: 'devoire.svg' },
            { id: 1, link: 'Tools/ProgramScolair', name: 'البرنامج السنوي', img: 'prog_annu.svg' },
            // { id: 1, link: 'Tools/', name: 'توجيه مدرسي ', img: 'devoire.svg' },
            // { id: 1, link: 'Tools/', name: 'توجيه جامعي ', img: 'devoire.svg' },
        ],
    },
    trasnportation: {
        tag: 'نَقْلْ, تَنَقٌلْ',
        icon: 'truck',
        themeColor:'#f44236',
        slider: false,
        slides: [
                { id: 1, image: 'transp', name: 'وِكَالَةْ نَقْلْ بَضَائِعْ', link: 'transporteur' },
                { id: 2, image: 'autoecole', name: 'مَدْرَسةْ تَعْلِيمْ سِيَاقَة', link: 'autoecole' },
                { id: 3, image: 'taxi', name: 'تَاكْسِي', link: 'Tools/Taxi', tools:true },
                { id: 4, image: 'louage', name: 'لٌوَّاجْ', link: 'Tools/Louage', tools:true }
        ],
        smallSlider: false,
        smallDisplay:[
            [
                { id: 1, image: 'transp', name: 'وِكَالَةْ نَقْلْ بَضَائِعْ', link: 'transporteur' },
                { id: 2, image: 'autoecole', name: 'مَدْرَسةْ تَعْلِيمْ سِيَاقَة', link: 'autoecole' },
            ],
            [
                { id: 3, image: 'taxi', name: 'تَاكْسِي', link: 'taxi' , tools:true},
                { id: 4, image: 'louage', name: 'لٌوَّاجْ', link: 'louage', tools:true }
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: '/Tools/Public', name: 'موسوعة النقل', img: 'public.svg' },
            { id: 1, link: '/Tools/Taxi', name: 'تاكسي', img: 'taxi.svg' },
            { id: 1, link: '/Tools/Louage', name:  'سيارة اجرة' , img: 'louage.svg' },
        ],
        
    },
    nutrition:{
        tag: ' طَعَامْ , غِذَاءْ',
        icon: 'cup-straw',
        themeColor: '#8bc24a',
        slider: false,
        slides: [
            { id: 1, image: 'cafe', name: 'مَقْهًي', link: 'cafe' },
            { id: 2, image: 'restaurant', name: 'مَطْعًمْ', link: 'restaurant' },
            { id: 3, image: 'magazin', name: 'مَغَازَة', link: 'magazin' },
            { id: 4, image: 'boulengerie', name: 'مِخْبَزَة', link: 'boulengerie' },
            { id: 5, image: 'boucherie', name: 'بَيْعْ اللٌّحٌومْ', link: 'boucherie' },
            { id: 6, image: 'fruiterie', name: 'بَيْعْ الخٌضَرْ', link: 'fruiterie' },
            { id: 7, image: 'patesserie', name: 'بَيْعْ المٌرَطَبَاتْ', link: 'patesserie' },
            { id: 8, image: 'epicerie', name: 'بَقَّالَة', link: 'epicerie' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'cafe', name: 'مَقْهًي', link: 'cafe' },
                { id: 2, image: 'restaurant', name: 'مَطْعًمْ', link: 'restaurant' },
                { id: 3, image: 'magazin', name: 'مَغَازَة', link: 'magazin' },
                { id: 4, image: 'boulengerie', name: 'مِخْبَزَة', link: 'boulengerie' },
            ],
            [
                { id: 5, image: 'boucherie', name: 'بَيْعْ اللٌّحٌومْ', link: 'boucherie' },
                { id: 6, image: 'fruiterie', name: 'بَيْعْ الخٌضَرْ', link: 'fruiterie' },
                { id: 7, image: 'patesserie', name: 'بَيْعْ المٌرَطَبَاتْ', link: 'patesserie' },
                { id: 8, image: 'epicerie', name: 'بَقَّالَة', link: 'epicerie' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Products/landing/alimentaire', name: 'مواد غذائية', img: 'products.svg' },
        ],
    },
    houseCar: {
        tag: 'المنزل , السيارة ',
        icon: 'car-front',
        themeColor: '#fb1e6b',
        slider: true,
        slides: [
            [
                { id: 1, image: 'electromenager', name: 'بَيْعْ الإِلِكْتْرٌونِيَاتْ', link: 'electromenager' },
                { id: 2, image: 'meublerie', name: ' بَيْعْ الأَثَاثْ ', link: 'meublerie' },
                { id: 3, image: 'location', name: ' كِرَاءْ السَيَّارَاتْ ', link: 'location' },
                { id: 4, image: 'parking', name: 'مَوْقِفْ سَيّارَاتْ', link: 'parking' },
            ],
            [
                { id: 9, image: 'qiosque', name: 'مَحَطَةْ وَقُودْ', link: 'qiosque' },
                { id: 10, image: 'mecanicien', name: 'مِيكَانِيكِي', link: 'mecanicien' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 3, image: 'location', name: ' كِرَاءْ السَيَّارَاتْ ', link: 'location' },
                { id: 4, image: 'parking', name: 'مَوْقِفْ سَيّارَاتْ', link: 'parking' },
                { id: 9, image: 'qiosque', name: 'مَحَطَةْ وَقُودْ', link: 'qiosque' },
                { id: 10, image: 'mecanicien', name: 'مِيكَانِيكِي', link: 'mecanicien' },
            ],
            [
                { id: 1, image: 'electromenager', name: 'بَيْعْ الإِلِكْتْرٌونِيَاتْ', link: 'electromenager' },
                { id: 2, image: 'meublerie', name: ' بَيْعْ الأَثَاثْ ', link: 'meublerie' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Products/landing/transport', name: 'كرهبة', img: 'automobile.svg' },
        ],
    },
    construction: {
        tag: 'خَدَمَاتْ عَقّارِية',
        icon: 'bricks',
        themeColor: '#565d61',
        slider: true,
        slides: [
            [
                { id: 1, image: 'courtier', name: 'وَسِيطْ عَقَّارِي', link: 'courtier' },
                { id: 2, image: 'contracteur', name: ' مٌقَاوِلْ', link: 'contracteur' },
                { id: 3, image: 'architecture', name: 'مٌهَنْدِسْ مِعْمَارِي ', link: 'architecture' },
                { id: 4, image: 'quincaillerie', name: 'Quncaillerie ', link: 'quincaillerie' },
                { id: 5, image: 'forgeron', name: 'حَدَّادْ', link: 'forgeron' },
                { id: 6, image: 'menuisier', name: 'نَجَّارْ', link: 'menuisier' },
                { id: 7, image: 'peinture', name: 'دَهَّانْ ', link: 'peinture' },
                { id: 8, image: 'electricien', name: 'كَهْرَبَائِي ', link: 'electricien' },
            ],
            [
                { id: 9, image: 'plombier', name: 'Plombier', link: 'plombier' },
                { id: 10, image: 'cristalerie', name: 'تًرْكِيبْ البِلٌوْرْ', link: 'cristalerie' },
                { id: 11, image: 'marbrerie', name: 'جَلِيزْ وَ رٌخَامْ', link: 'marbrerie' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'courtier', name: 'وَسِيطْ عَقَّارِي', link: 'courtier' },
                { id: 2, image: 'contracteur', name: ' مٌقَاوِلْ', link: 'contracteur' },
                { id: 3, image: 'architecture', name: 'مٌهَنْدِسْ مِعْمَارِي ', link: 'architecture' },
                { id: 4, image: 'quincaillerie', name: 'Quncaillerie ', link: 'quincaillerie' },
            ],
            [
                { id: 5, image: 'forgeron', name: 'حَدَّادْ', link: 'forgeron' },
                { id: 6, image: 'menuisier', name: 'نَجَّارْ', link: 'menuisier' },
                { id: 7, image: 'peinture', name: 'دَهَّانْ ', link: 'peinture' },
                { id: 8, image: 'electricien', name: 'كَهْرَبَائِي ', link: 'electricien' },
            ],
            [
                { id: 9, image: 'plombier', name: 'Plombier', link: 'plombier' },
                { id: 10, image: 'cristalerie', name: 'تًرْكِيبْ البِلٌوْرْ', link: 'cristalerie' },
                { id: 11, image: 'marbrerie', name: 'جَلِيزْ وَ رٌخَامْ', link: 'marbrerie' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: '/Tools/Renting', name: 'للكراء', img: 'rent_house.svg' },
        ],
    },
    life:{
        tag: 'حَيَاةْ , جَمَالْ',
        icon: 'balloon-heart-fill',
        themeColor: '#fb1e6b',
        slider: false,
        slides: [
            { id: 1, image: 'coiffure', name: 'قَاعَةْ حِلاَقَة', link: 'coiffure' },
            { id: 2, image: 'boutique', name: 'مَحلْ مَلابِسْ', link: 'boutique' },
            { id: 3, image: 'salle_marriage', name: 'قَاعَةْ أَفْرَاحْ', link: 'salle_marriage' },
            { id: 8, image: 'bijouterie', name: ' مُجَوْهَرَاتْ ', link: 'bijouterie' },
            { id: 5, image: 'chef', name: 'طَبَّاخْ', link: 'chef' },
            { id: 6, image: 'photographe', name: 'مَصَوِّرْ', link: 'photographe' },
            { id: 7, image: 'fourniture_marriage', name: ' لَوَازِمْ أَفْرَاجْ', link: 'fourniture_marriage' },
            { id: 4, image: 'orchestre', name: 'فِرْقَة مٌوسِيقِيَّة', link: 'orchestre' },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'coiffure', name: 'قَاعَةْ حِلاَقَة', link: 'coiffure' },
                { id: 2, image: 'boutique', name: 'مَحلْ مَلابِسْ', link: 'boutique' },
                { id: 3, image: 'salle_marriage', name: 'قَاعَةْ أَفْرَاحْ', link: 'salle_marriage' },
                { id: 8, image: 'bijouterie', name: ' مُجَوْهَرَاتْ ', link: 'bijouterie' },
            ],
            [
                { id: 5, image: 'chef', name: 'طَبَّاخْ', link: 'chef' },
                { id: 6, image: 'photographe', name: 'مَصَوِّرْ', link: 'photographe' },
                { id: 7, image: 'fourniture_marriage', name: ' لَوَازِمْ أَفْرَاجْ', link: 'fourniture_marriage' },
                { id: 4, image: 'orchestre', name: 'فِرْقَة مٌوسِيقِيَّة', link: 'orchestre' },
            ]
        ],
        haveTools: true,
        toolsList: [
            // { id: 1, link: 'Tools/Story', name: 'حكايات', img: 'stories.svg' },
            { id: 1, link: 'Tools/Invitation', name: 'إستدعاء', img: 'invitation.svg' },
        ],
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
                { id: 4, image: 'cinema', name: 'قَاعَةْ سِنَمَا ', link: 'cinema' },
                { id: 5, image: 'theatre', name: 'قَاعَةْ مَسْرَحْ', link: 'theatre' },
                { id: 6, image: 'musee', name: 'مَتْحَفْ', link: 'musee' },
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
                { id: 4, image: 'cinema', name: 'قَاعَةْ سِنَمَا ', link: 'cinema' },
            ],
            [
                { id: 5, image: 'theatre', name: 'قَاعَةْ مَسْرَحْ', link: 'theatre' },
                { id: 6, image: 'musee', name: 'مَتْحَفْ', link: 'musee' },
                { id: 7, image: 'admin_c_mj', name: 'دَارْ شَبَابْ ', link: 'admin_c_mj' },
                { id: 8, image: 'admin_c_mc', name: 'دَارْ تَقَافَة ', link: 'admin_c_mc' },
            ],
            [
                { id: 9, image: 'admin_c_ce', name: 'نَادِي أَطْفَالْ', link: 'admin_c_me' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Sport', name: ' الدور التونسي', img: 'sport.svg' },
        ],
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
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: '/Tools/News', name: 'الأخبار', img: 'news.svg' },
        ],
    },
    finance: {
        tag: 'مَالِيّة و أَعْمَالْ',
        icon: 'cash-coin',
        themeColor: '#ff9700',
        slider: true,
        slides: [
            [
                { id: 1, image: 'depot', name: 'بَيْعْ بِالجٌمْلَة', link: 'depot' },
                { id: 2, image: 'comptable', name: ' مٌحَاسِبْ', link: 'comptable' },
                { id: 3, image: 'bank', name: ' بَنْكْ', link: 'bank' },
                { id: 4, image: 'admin_f_poste', name: ' مَكْتَبْ بَرِيدْ', link: 'admin_f_poste' },
            ],
            [
                { id: 5, image: 'admin_f_rf', name: 'قَبَاضَة مَالِيَّة', link: 'admin_f_rf' },
            ]
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'depot', name: 'بَيْعْ بِالجٌمْلَة', link: 'depot' },
                { id: 2, image: 'comptable', name: ' مٌحَاسِبْ', link: 'comptable' },
                { id: 3, image: 'bank', name: ' بَنْكْ', link: 'bank' },
                { id: 4, image: 'admin_f_poste', name: ' مَكْتَبْ بَرِيدْ', link: 'admin_f_poste' },
            ],
            [
                { id: 5, image: 'admin_f_rf', name: 'قَبَاضَة مَالِيَّة', link: 'admin_f_rf' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Salaire', name: 'salaires', img: 'salaire.svg' },
            { id: 1, link: 'Tools/Jobs', name: 'خدمني', img: 'jobs.svg' },
        ],
    },
    agricole:{
        tag: 'فِلاَحَة',
        icon: 'tree-fill',
        themeColor: '#795549',
        slider: false,
        slides: [
            { id: 2, image: 'fourragerie', name: 'بَيْعْ العَلَفْ', link: 'fourragerie'},
            { id: 1, image: 'veterinaire', name: 'بَيْطَرِي', link: 'veterinaire' }, 
            { id: 3, image: 'agritools', name: 'أَدَاةْ فِلاَحِيَّة', link: 'agritools'  },
        ],
        smallSlider: true,
        smallDisplay:[
            [
                { id: 1, image: 'veterinaire', name: ' بَيْطَرِي', link: 'veterinaire'  },
                { id: 2, image: 'fourragerie', name: 'بَيْعْ العَلَفْ', link: 'fourragerie'   },
            ],
            [
                { id: 3, image: 'agritools', name: 'أَدَاةْ فِلاَحِيَّة', link: 'agritools'  },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/AgriTools', name: 'أدات فلاحية', img: 'nature.svg' },
        ],
    },
    tourizme:{
        tag: 'سِيَاحَة , سَفَرْ ,تَرْفِيهْ',
        icon: 'airplane-engines-fill',
        themeColor: '#607d8b',
        slider: false,
        slides: [
            { id: 1, image: 'Hotels', name: 'فُنْدُقْ', link: 'hotels' },
            { id: 2, image: 'travel', name: 'وِكَالَةْ أَسْفَارْ', link: 'vg_agence' },
        ],
        smallSlider: false,
        smallDisplay:[
            [
                { id: 1, image: 'Hotels', name: 'فُنْدُقْ', link: 'hotels' },
                { id: 2, image: 'travel', name: 'وِكَالَةْ أَسْفَارْ', link: 'vg_agence' },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: 'Tools/Camping', name: 'كمبي', img: 'camping.svg' },
        ],
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
                { id: 6, image: 'embassy', name: 'سَفَارَة', link: 'Tools/ambassade', tools:true },
            ]
        ],
        haveTools: true,
        toolsList: [
            { id: 1, link: '/Tools/Blog', name: ' الموسوعة الإدارية', img: 'blog.svg' },
        ],
    },
}
export default dirItem