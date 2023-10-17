const APPItem = {
    docteur:{
        colorTheme:'#085947',
        adsImageUrl:'docteur.svg',
        systemTitle:' نظام إدارة العيادات الطبية ',
        businesName:'العيادة ',
        directoryTable:'طبيب', 
        RequestTable:'Docteur', 
        systemReady: true ,
        systemUrl:'https://docteur.system.abyedh.tn',
        adsText:' نظام إداراة العيادات يقدم لك مجموعة من الأدوات و الحلول الرقمية التي تساعدك علي أداء عملك بالشكل الممتاز , كما أنه يبقيك دائما متصلا مع مرضاك  للإطمئنان علي صحتهم و متابعة تطور حالتهم الصحية , بالإضافة إلي مجموعة من لوحات لاتحكم الموجهة لفريق العمل لتتابع أداء مهامهم بسهولة , فضلا  عن مجموعة متميزة من الأدوات التي تعينك علي تطوير عملك ',
        systemPos : [
            {id: 1 , posName:'إدارة الحصص' , description:'متابعة مرضاك ', icon:'window-dock'},
            {id: 2 , posName:'إدارة الوصفات الطبية' , description:'إنشاء جلسات', icon:'window-dock'},
            {id: 3 , posName:'إدارة المرضي' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Rendy-Vous' , icon:'calendar-week', link:'rq/docteur_rdv'},
            {id: 2 , colLg:6, colSm:6, itemName:'Tarifs' , icon:'cash-coin', link:'Spesific'},
            
        ],
       navItemList : [
        {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
        {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
        {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
        {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
        {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
        {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
        {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            docteur_rdv : [{id:1, value: 'RDV_Date', genre: 'date'}, {id:2, value: 'RDV_Time', genre: 'text'}], 
        },
        tableHeader : {
            docteur_rdv : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
             
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    pharmacie:{
        colorTheme:'#6edb8d',
        adsImageUrl:'pharmacie.svg',
        systemTitle:'نظام إداراة الصيدليات ',
        businesName:'الصيدلية ', 
        directoryTable:'طاحب صيدلية', 
        RequestTable:'Pharmacie', 
        systemReady: false ,
        systemUrl:'https://pharmacie.system.abyedh.tn',
        adsText:'نظام إداراة نقاط الصيدليات يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/pharmacie_shop'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/pharmacie_rdv'},
            {id: 3 , colLg:6, colSm:6, itemName:'Traif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            {id:1, name:'ليل', value:'nuit', imgSrc:'nuit'},
            {id:2, name:'نهار', value:'jour', imgSrc:'jour'}   
        ],
        tableItemList : {
            pharmacie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
            pharmacie_rdv :  [{id:1, value: 'RDV_Cause', genre: 'text'}, {id:2, value: 'RDV_Date', genre: 'text'}]
        },
        tableHeader : {
            pharmacie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
            pharmacie_rdv :  ['*', 'Client', 'Passé le','Passé à','Cause','Date','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    clinique:{
        colorTheme:'#04c6ce',
        adsImageUrl:'clinique.svg',
        systemTitle:' نظام إدارة المصحات ',
        systemUrl:'#',
        directoryTable:'صاحب مصحة', 
        RequestTable:'Clinique', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-range', link:'rq/clinique_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Traif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'نسائية', value: 'femme', imgSrc: 'female' },
            { id: 2, name: 'عقلية', value: 'mentale', imgSrc: 'mentale' },
            { id: 3, name: ' علاجية', value: 'soint', imgSrc: 'logo' },
            { id: 4, name: ' عامة', value: 'generale', imgSrc: 'generale' },    
        ],
        tableItemList : {
            clinique_reserver : [{id:1, value: 'RES_Cause', genre: 'text'}, {id:2, value: 'RES_From_Date', genre: 'date'}, {id:2, value: 'RES_To_Date', genre: 'date'}], 
        },
        tableHeader : {
            clinique_reserver : ['*', 'Client', 'Passé le','Passé à','Cause ','De','Vers','Etat','Voir'], 
        },
        
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    labo:{
        colorTheme:'#1dd3b0',
        adsImageUrl:'labo.svg',
        systemTitle:' نظام إدارة المخابر ',
        systemUrl:'#',
        directoryTable:'صاحب مخبر طبي', 
        RequestTable:'Labo', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Rendy Vous' , icon:'check-all', link:'rq/labo_rdv'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تحليل وراثي خلوي', value: 'ANATOMIE_PATHOLOGIE', imgSrc: 'dna' },
            { id: 2, name: 'تحليل بيولوجي طبي', value: 'ANALYSES DE BIOLOGIE', imgSrc: 'blod' },
            { id: 3, name: ' تشريح وعلم الخلايا', value: 'CYTOGENETIQUE', imgSrc: 'cellule' },    
        ],
        tableItemList : {
            labo_rdv :[{id:1, value: 'RDV_Cause', genre: 'text'}, {id:2, value: 'RDV_Date', genre: 'date'}, {id:2, value: 'RDV_Time', genre: 'text'}], 
        },
        tableHeader : {
            labo_rdv : ['*', 'Client', 'Passé le','Passé à','Cause ','De','Vers','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    centreMD:{
        colorTheme:'#52a3c9',
        adsImageUrl:'centre.svg',
        systemTitle:'  نظام إدارة المراكز الطبية ',
        systemUrl:'#',
        directoryTable:'صاحب مركز طبي', 
        RequestTable:'CentreMD', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-range', link:'rq/centre_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Traif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أشعة', value: 'radio', imgSrc: 'radio' },
            { id: 2, name: 'غسيل الكلي', value: 'dialyse', imgSrc: 'dialyse' },
            { id: 3, name: ' إستشفائي', value: 'sea', imgSrc: 'sea' },    
        ],
        tableItemList : {
            centre_reserver : [{id:1, value: 'RES_Cause', genre: 'text'}, {id:2, value: 'RES_From_Date', genre: 'date'}, {id:2, value: 'RES_To_Date', genre: 'date'}],  
        },
        tableHeader : {
            centre_reserver : ['*', 'Client', 'Passé le','Passé à','Cause ','De','Vers','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },


    garderie:{
        colorTheme:'#cf208f',
        adsImageUrl:'garderie.svg',
        systemTitle:'نظام  إدارة رياض الأطفال',
        businesName:'الروضة ',
        directoryTable:'صاحب روضة أطفال', 
        RequestTable:'Garderie', 
        systemReady: false ,
        systemUrl:'https://garderie.system.abyedh.tn/',
        adsText:'نظام إدارة  رياض الأطفال يمكنك من  متابعة مختلف الانشطة اللي تصير داخل المؤسسة متاعك , و بالتالي مزيد من التحكم و الإدارة الذكية لجعل عملية التعلم أكثر جودة و تطور . كما يوفر مجموعة من الأدوات الرقمية اللي تساعدك في تحسين جودة المادة التعليمة مثل البرنامج البيداغوجي و غيرها  ',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Inscription' , icon:'check-all', link:'rq/garderie_inscription'},
            {id: 3 , colLg:6, colSm:12, itemName:'Souscription' , icon:'calendar-week', link:'rq/garderie_souscription'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَحْضِيرِي', value: 'dentiste', imgSrc: 'nursery' },
            { id: 2, name: 'مِحْضَنَة', value: 'dentiste', imgSrc: 'nurserya' },    
        ],
        tableItemList : {
            garderie_inscription : [{id:1, value: 'EL_Name', genre: 'text'}, {id:2, value: 'EL_Naissance', genre: 'date'}, {id:2, value: 'EL_Genre', genre: 'text'}], 
            garderie_souscription :  [{id:1, value: 'Identifiant', genre: 'text'}, {id:2, value: 'Annee_Scolaire', genre: 'text'}]
        },
        tableHeader : {
            garderie_inscription : ['*', 'Client', 'Passé le','Passé à','Nom','Naissance','Genre','Etat','Voir'], 
            garderie_souscription :  ['*', 'Client', 'Passé le','Passé à','Identifiant','Anneé','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'garderie/garderie1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'garderie/garderie2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'garderie/garderie3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'garderie/garderie4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'garderie/garderie5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },
    ecole:{
        colorTheme:'#4a9998',
        adsImageUrl:'ecole.svg',
        systemTitle:'نظام إداراة المدارس الخاصة ',
        businesName:'المدرسة ',
        directoryTable:'صاحب مدرسة خاصة', 
        RequestTable:'Ecole', 
        systemReady: false ,
        systemUrl:'#',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Inscription' , icon:'check-all', link:'rq/garderie_inscription'},
            {id: 3 , colLg:6, colSm:12, itemName:'Souscription' , icon:'calendar-week', link:'rq/garderie_souscription'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَحْضِيرِي', value: 'dentiste', imgSrc: 'nursery' },
            { id: 2, name: 'مِحْضَنَة', value: 'dentiste', imgSrc: 'nurserya' },    
        ],
        tableItemList : {
            garderie_inscription : [{id:1, value: 'EL_Name', genre: 'text'}, {id:2, value: 'EL_Naissance', genre: 'date'}, {id:2, value: 'EL_Genre', genre: 'text'}], 
            garderie_souscription :  [{id:1, value: 'Identifiant', genre: 'text'}, {id:2, value: 'Annee_Scolaire', genre: 'text'}]
        },
        tableHeader : {
            garderie_inscription : ['*', 'Client', 'Passé le','Passé à','Nom','Naissance','Genre','Etat','Voir'], 
            garderie_souscription :  ['*', 'Client', 'Passé le','Passé à','Identifiant','Anneé','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    lycee:{
        colorTheme:'#4a9998',
        adsImageUrl:'lycee.svg',
        systemTitle:'نظام إدارة المعاهد الخاصة',
        directoryTable:'صاحب معهد خاص', 
        RequestTable:'Lycee', 
        systemReady: false ,
        systemUrl:'https://lycee.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Inscription' , icon:'check-all', link:'rq/garderie_inscription'},
            {id: 3 , colLg:6, colSm:12, itemName:'Souscription' , icon:'calendar-week', link:'rq/garderie_souscription'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَحْضِيرِي', value: 'dentiste', imgSrc: 'nursery' },
            { id: 2, name: 'مِحْضَنَة', value: 'dentiste', imgSrc: 'nurserya' },    
        ],
        tableItemList : {
            garderie_inscription : [{id:1, value: 'EL_Name', genre: 'text'}, {id:2, value: 'EL_Naissance', genre: 'date'}, {id:2, value: 'EL_Genre', genre: 'text'}], 
            garderie_souscription :  [{id:1, value: 'Identifiant', genre: 'text'}, {id:2, value: 'Annee_Scolaire', genre: 'text'}]
        },
        tableHeader : {
            garderie_inscription : ['*', 'Client', 'Passé le','Passé à','Nom','Naissance','Genre','Etat','Voir'], 
            garderie_souscription :  ['*', 'Client', 'Passé le','Passé à','Identifiant','Anneé','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    universite:{
        colorTheme:'#4a9998',
        adsImageUrl:'universite.svg',
        systemTitle:'نظام إداراة الجامعات الخاصة ',
        systemUrl:'#',
        directoryTable:'صاحب جامعة خاصة', 
        RequestTable:'Universite', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Inscription' , icon:'check-all', link:'rq/garderie_inscription'},
            {id: 3 , colLg:6, colSm:12, itemName:'Souscription' , icon:'calendar-week', link:'rq/garderie_souscription'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَحْضِيرِي', value: 'dentiste', imgSrc: 'nursery' },
            { id: 2, name: 'مِحْضَنَة', value: 'dentiste', imgSrc: 'nurserya' },    
        ],
        tableItemList : {
            garderie_inscription : [{id:1, value: 'EL_Name', genre: 'text'}, {id:2, value: 'EL_Naissance', genre: 'date'}, {id:2, value: 'EL_Genre', genre: 'text'}], 
            garderie_souscription :  [{id:1, value: 'Identifiant', genre: 'text'}, {id:2, value: 'Annee_Scolaire', genre: 'text'}]
        },
        tableHeader : {
            garderie_inscription : ['*', 'Client', 'Passé le','Passé à','Nom','Naissance','Genre','Etat','Voir'], 
            garderie_souscription :  ['*', 'Client', 'Passé le','Passé à','Identifiant','Anneé','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    librairie:{
        colorTheme:'#4c4a48',
        adsImageUrl:'librairie.svg',
        systemTitle:'نظام إداراة الكتبيات ',
        systemUrl:'#',
        directoryTable:'صاحب كتبية', 
        RequestTable:'Librairie', 
        systemReady: false ,
        adsText:'نظام إداراة الكتبيات  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/librairie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'كتبية', value: 'dentiste', imgSrc: 'biblio' },
            { id: 2, name: 'أدوات مذرسية', value: 'dentiste', imgSrc: 'biblio' },    
        ],
        tableItemList : {
            librairie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            librairie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    impremerie:{
        colorTheme:'#4c4a48',
        adsImageUrl:'impremerie.svg',
        systemTitle:'نظام إداراة المطابع',
        systemUrl:'#',
        directoryTable:'صاحب مطبعة', 
        RequestTable:'Impremerie', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    transporteur:{
        colorTheme:'#be6e70',
        adsImageUrl:'transporteur.svg',
        systemTitle:'نظام إداراة شركات نقل البظائع',
        directoryTable:'نقل بظائع', 
        RequestTable:'Transporteur', 
        systemReady: false ,
        systemUrl:'https://transporteur.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/transporteur_request'},
            {id: 3 , colLg:6, colSm:6, itemName:'Traif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'agence', value: 'dentiste', imgSrc: 'tr-agence' },
            { id: 2, name: 'Transporteur', value: 'dentiste', imgSrc: 'transporteur' },    
        ],
        tableItemList : {
            transporteur_request : [{id:1, value:['De', 'Deleg'], genre: 'PropFunction'},{id:2, value:['Vers', 'Deleg'], genre: 'PropFunction'}, {id:3, value: 'Articles', genre: 'lengthFunc'}],       
        },
        tableHeader : {
            transporteur_request : ['*', 'Client', 'Passé le','Passé à','De','Vers','Colis','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    autoecole:{
        colorTheme:'#1caaa8',
        adsImageUrl:'autoecole.svg',
        systemTitle:'نظام إدارة  مدرسة تعليم سياقة ',
        businesName:'المدرسة ',
        directoryTable:'صاحب مدرسة تعليم سياقة ', 
        RequestTable:'AutoEcole', 
        systemReady: false ,
        systemUrl:'https://autoecole.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Inscription' , icon:'check-all', link:'rq/autoecole_inscrie'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'صنف ب', value: 'صنف ب', imgSrc: 'tourism' },
            { id: 2, name: 'كار', value: 'شاحنة', imgSrc: 'car' },
            { id: 3, name: 'تاكسي و  لواج', value: 'ناكسي', imgSrc: 'taxi' },
            { id: 4, name: 'وزن ثقيل', value: 'وزن ثقيل', imgSrc: 'poid' },   
        ],
        tableItemList : {
            autoecole_inscrie : [{id:1, value: 'Renouvellemment', genre: 'text'}, {id:2, value: 'Genre', genre: 'text'}, {id:3, value: 'BirthDay_Check', genre: 'date'}], 
             
        },
        tableHeader : {
            autoecole_inscrie : ['*', 'Client', 'Passé le','Passé à','Renouv','Genre','Verif','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },


    restaurant:{
        colorTheme:'#35ac67',
        adsImageUrl:'restaurant.svg',
        systemTitle:'نظام إداراة المطاعم ',
        businesName:'المطعم',
        directoryTable:'صاحب مطعم ', 
        RequestTable:'Restaurant', 
        systemReady: true ,
        systemUrl:'https://restaurant.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'إدارة القوائم Menu' , description:'تمكنك من إدارة القوائم الخاصة بالمطعم متاعك و تخليك متابع لعملية البيع الخاصة بكل قائمة ', icon:'window-dock'},
            {id: 2 , posName:'إدارة المخزون' , description:'متابعة حينسة للمخزون مع إمكانية إضافة من إلي المخزون , عند بيع قائمة يطرح من المخزون أليا', icon:'window-dock'},
            {id: 3 , posName:'إدارة الفواتير' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Menu' , icon:'list-columns-reverse', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            // {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            // {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 4 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 4, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: '5 نجوم', value: 'dentiste', imgSrc: 'kaftaji' },
            { id: 2, name: 'أكلة خفيفة', value: 'dentiste', imgSrc: 'resto1' },
            { id: 3, name: 'ملاوي', value: 'dentiste', imgSrc: 'mlawi' },
            { id: 4, name: ' بتزا', value: 'dentiste', imgSrc: 'pizza' },   
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Wanted_Date', genre: 'date'}, {id:2, value: 'Wanted_Time', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Genre','Totale','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Jour','Temps','Table','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    cafe:{
        colorTheme:'#363636',
        adsImageUrl:'cafe.svg',
        systemTitle:'نظام إداراة المقاهي و قاعات الشاي',
        systemUrl:'https://cafe.system.abyedh.tn/Login',
        businesName:'المقهي ',
        directoryTable:' صاحب مقهي ', 
        RequestTable:'Cafe', 
        systemReady: false ,
        adsText:'نكانك صاحب مطعم أبيض يوفرلك نظام إدارة و مراقبة و متابعة للمطعم وإلا العمل متاعك , من خلال بيئة إفتراضية تخليك ديما متصل بالزبائن متاعك لمعرفة ردود أفعالهم علي الخدمات اللي تقدمها ' ,
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/cafe_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/cafe_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مقهي', value: 'dentiste', imgSrc: 'populaire' },
            { id: 2, name: 'فطاء عائلي', value: 'dentiste', imgSrc: 'mixte' },
            { id: 3, name: 'قاعة شاي', value: 'dentiste', imgSrc: 'tea' },    
        ],
        tableItemList : {
            cafe_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            cafe_reservation :  [{id:1, value: 'Wanted_Date', genre: 'date'}, {id:2, value: 'Wanted_Time', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            cafe_commande : ['*', 'Client', 'Passé le','Passé à','Genre','Totale','Etat','Voir'], 
            cafe_reservation :  ['*', 'Client', 'Passé le','Passé à','Jour','Temps','Table','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'cafe/cafe1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'cafe/cafe2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'cafe/cafe3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'cafe/cafe4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'cafe/cafe5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },
    magazin:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إداراة نقاط  بيع التجزئة ',
        businesName:'المغازة ',
        directoryTable:'صاحب مغازة ', 
        RequestTable:'Magazin', 
        systemReady: false ,
        systemUrl:'https://magazin.system.abyedh.tn',
        adsText:'نظام إداراة المغازاة و نقاط البيع يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/magazin_commande'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'magazin', value: 'dentiste', imgSrc: 'bread' },
            { id: 2, name: 'superette', value: 'dentiste', imgSrc: 'bread' },
            { id: 3, name: 'عطار ', value: 'dentiste', imgSrc: 'bread' },    
        ],
        tableItemList : {
            magazin_commande : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            magazin_commande : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'magazin/magazin1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'magazin/magazin2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'magazin/magazin3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'magazin/magazin4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'magazin/magazin5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },
    fruiterie:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إداراة نقاط  بيع الخضر ',
        systemUrl:'#',
        directoryTable:'خضّار', 
        RequestTable:'Fruiterie', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط  بيع الخضر  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/fruiterie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'خُضَرْ', value: 'dentiste', imgSrc: 'fruit' },
            { id: 2, name: 'غِلَالْ', value: 'dentiste', imgSrc: 'fruit' },   
        ],
        tableItemList : {
            fruiterie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            fruiterie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    boucherie:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إدارة المخابز  ',
        systemUrl:'#',
        directoryTable:'حزّار', 
        RequestTable:'Boucherie', 
        systemReady: false ,
        adsText:'نظام إداراة المخابز  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/boucheries_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'لُحُومْ حَمْرَاءْ', value: 'dentiste', imgSrc: 'viande' },
            { id: 2, name: 'سَكَالُوبْ', value: 'dentiste', imgSrc: 'viande' },
            { id: 3, name: 'مَزْرَعَة', value: 'dentiste', imgSrc: 'viande' },
            { id: 4, name: 'سَمَـكْ', value: 'dentiste', imgSrc: 'viande' },    
        ],
        tableItemList : {
            boucheries_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            boucheries_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    boulengerie:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إداراة نقاط  بيع اللحوم ',
        systemUrl:'#',
        directoryTable:'صاحب مخبزة', 
        RequestTable:'Boulengerie', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط بيع اللحوم  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/boulangerie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'طَابُونَة', value: 'dentiste', imgSrc: 'pain' },
            { id: 2, name: 'Baguette', value: 'dentiste', imgSrc: 'pain' },    
        ],
        tableItemList : {
            boulangerie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            boulangerie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    patesserie:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إداراة نقاط  بيع الحلويات ',
        systemUrl:'#',
        directoryTable:'صاحب نقطة بيع المرطبات', 
        RequestTable:'Patesserie',
        systemReady: false ,
        adsText:'نظام إداراة نقاط بيع الحلويات  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/patisserie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'Croissant', value: 'dentiste', imgSrc: 'patt' },
            { id: 2, name: 'Gateaux', value: 'dentiste', imgSrc: 'patt' },    
        ],
        tableItemList : {
            patisserie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            patisserie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    epicerie:{
        colorTheme:'#5e7968',
        adsImageUrl:'ptvente_shop.svg',
        systemTitle:'نظام إدارة البقالات ',
        systemUrl:'#',
        directoryTable:'صاحب مغازة ', 
        RequestTable:'Magazin', 
        systemReady: false ,
        adsText:'نظام إداراة البقالات  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/epicerie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'سَجَائِرْ', value: 'dentiste', imgSrc: 'hmas' },
            { id: 2, name: 'بُقُولْ', value: 'dentiste', imgSrc: 'hmas' },    
        ],
        tableItemList : {
            epicerie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            epicerie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    
    electromenager:{
        colorTheme:'#0078d7',
        adsImageUrl:'house_electro.svg',
        systemTitle:'نظام إداراة نقاط  بيع الالكترونيات ',
        systemUrl:'#',
        directoryTable:'صاحب نقطة بيع الألكترونيات', 
        RequestTable:'ElectroMenager',
        systemReady: false ,
        adsText:'نظام إداراة نقاط بيع الالكترونيات  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/electromenager_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أجهزة كهرومنزلية', value: 'electro', imgSrc: 'electro' },
            { id: 2, name: 'هواتف و حواسيب', value: 'electro', imgSrc: 'electro' },    
        ],
        tableItemList : {
            electromenager_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            electromenager_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    meublerie:{
        colorTheme:'#0078d7',
        adsImageUrl:'house_meuble.svg',
        systemTitle:'نظام إداراة نقاط  بيع الاثاث ',
        systemUrl:'#',
        directoryTable:'صاحب نقكة بيع الأثاث', 
        RequestTable:'Meuble', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط ابيع الاثاث  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/meubles_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أَثَاثْ مَنْزِلِي', value: 'fourniture', imgSrc: 'furniture' },
            { id: 2, name: 'أَثَاثْ مَكْتَبِي', value: 'fourniture', imgSrc: 'furniture' },    
        ],
        tableItemList : {
            meubles_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            meubles_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    parking:{
        colorTheme:'#2d4664',
        adsImageUrl:'car_parking.svg',
        systemTitle:'Parking نظام إداراة ',
        systemUrl:'#',
        directoryTable:'صاحب موقف سيارات', 
        RequestTable:'Parking', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-range', link:'rq/parking_reserver'},
            {id: 3 , colLg:6, colSm:12, itemName:'Souscription' , icon:'check2-circle', link:'rq/parking_souscrire'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مَأْوَي عُمُومِي' , value: 'dentiste', imgSrc: 'parking' },
            { id: 2, name: 'مَأْوَي خَاصْ' , value: 'dentiste', imgSrc: 'parking' },    
        ],
        tableItemList : {
            parking_reserver : [{id:1, value: 'Car_Name', genre: 'text'},{id:1, value: 'Car_Matricule', genre: 'text'}, {id:2, value: 'Depart_Date', genre: 'date'}, {id:2, value: 'Finish_Date', genre: 'date'}], 
            parking_souscrire :  [{id:1, value: 'Car_Name', genre: 'text'},{id:1, value: 'Car_Matricule', genre: 'text'}, {id:2, value: 'Depart_Date', genre: 'date'}, {id:2, value: 'Finish_Date', genre: 'date'}]
        },
        tableHeader : {
            parking_reserver : ['*', 'Client', 'Passé le','Passé à','Voiture','Mtricule','Depart','Termine','Etat','Voir'], 
            parking_souscrire :  ['*', 'Client', 'Passé le','Passé à','Voiture','Mtricule','Depart','Termine','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    qiosque:{
        colorTheme:'#2d4664',
        adsImageUrl:'car_qiosque.svg',
        systemTitle:' Qiosque نظام إداراة',
        systemUrl:'#',
        directoryTable:'صاحب محطة بيع الوقود', 
        RequestTable:'Qiosque', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/qiosque_request'},
            {id: 3 , colLg:6, colSm:12, itemName:'Lavage' , icon:'calendar-week', link:'rq/qiosque_lavage'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'Qiosque', value: 'dentiste', imgSrc: 'qiosque' },
            { id: 2, name: 'غَسِيلْ السَيَّارَاتْ', value: 'dentiste', imgSrc: 'qiosque' },    
        ],
        tableItemList : {
            qiosque_request : [{id:1, value: 'Car_Genre', genre: 'text'}, {id:2, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Wanted_Time', genre: 'text'}], 
            qiosque_lavage :  [{id:1, value: 'Car_Genre', genre: 'text'}, {id:2, value: 'Wash_Genre', genre: 'text'},{id:1, value: 'Wanted_Day', genre: 'date'}, {id:2, value: 'Wanted_Time', genre: 'text'}]
        },
        tableHeader : {
            qiosque_request : ['*', 'Client', 'Passé le','Passé à','Voiture','Totale','Temps','Etat','Voir'], 
            qiosque_lavage :  ['*', 'Client', 'Passé le','Passé à','Voiture','Lavage','Data','Temps','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    location:{
        colorTheme:'#2d4664',
        adsImageUrl:'car_location.svg',
        systemTitle:'نظام إداراة شركات كراء السيارات',
        systemUrl:'#',
        directoryTable:'صاحب شركة كراء السيارات', 
        RequestTable:'LocationVoiture', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Demandes de Location' , icon:'check2-circle', link:'rq/location_request'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'كِرَاءْ السَيَّارَاتْ', value: 'dentiste', imgSrc: 'car_selling' },
            { id: 2, name: 'كِرَاءْ الشَاحِنَاتْ', value: 'dentiste', imgSrc: 'car_selling' },    
        ],
        tableItemList : {
            location_request : [{id:1, value: 'Cause', genre: 'text'}, {id:2, value: 'Depart_Date', genre: 'date'}, {id:2, value: 'Finish_Date', genre: 'date'}], 
        },
        tableHeader : {
            location_request : ['*', 'Client', 'Passé le','Passé à','Cause','Depart','Finish','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },


    courtier:{
        colorTheme:'#455b7a',
        adsImageUrl:'samsar.svg',
        systemTitle:'نظام إداراة مكتب وسيط عقاري',
        systemUrl:'#',
        directoryTable:'سمسار  ', 
        RequestTable:'Courtier', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Achat/Louer' , icon:'box-arrow-up-right', link:'rq/courtier_request'},
            {id: 3 , colLg:6, colSm:12, itemName:'Vente/à Louer' , icon:'box-arrow-in-down-left', link:'rq/courtier_torent'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'للكِرَاءْ', value: 'dentiste', imgSrc: 'studio' },
            { id: 2, name: 'شِرَاءْ', value: 'dentiste', imgSrc: 'garage' },    
        ],
        tableItemList : {
            courtier_request : [{id:1, value: 'Req_Genre', genre: 'text'}, {id:2, value: 'Immob_Genre', genre: 'text'}, {id:2, value: 'Max_Prix', genre: 'text'}], 
            courtier_torent :  [{id:1, value: 'Req_Genre', genre: 'text'}, {id:2, value: 'Immob_Genre', genre: 'text'}, {id:2, value: 'Max_Prix', genre: 'text'}]
        },
        tableHeader : {
            courtier_request : ['*', 'Client', 'Passé le','Passé à','Genre','Immbob','Prix','Etat','Voir'], 
            courtier_torent :  ['*', 'Client', 'Passé le','Passé à','Genre','Immbob','Prix','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    contracteur:{
        colorTheme:'#406163',
        adsImageUrl:'chantier_contracteur.svg',
        systemTitle:'نظام إداراة شركات المقاولة',
        systemUrl:'#',
        directoryTable:'مقاول', 
        RequestTable:'Contracteur', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Demmande' , icon:'check-all', link:'rq/contracteur_service'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'شركة مقاولات', value: 'dentiste', imgSrc: 'moukawel' },
            { id: 2, name: 'مقاول', value: 'dentiste', imgSrc: 'moukawel' },  
        ],
        tableItemList : {
            contracteur_service : [{id:1, value: 'Immob_Genre', genre: 'text'}, {id:1, value:['Immob_Position', 'Gouv'], genre: 'PropFunction'},{id:1, value:['Immob_Position', 'Deleg'], genre: 'PropFunction'},], 
        },
        tableHeader : {
            contracteur_service : ['*', 'Client', 'Passé le','Passé à','Genre','Gouv','Deleg','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    architecture:{
        colorTheme:'#406163',
        adsImageUrl:'chantier_architecture.svg',
        systemTitle:'نظام إداراة مكتب مهندس معماري',
        systemUrl:'#',
        directoryTable:'مهندس معماري ', 
        RequestTable:'Architecte', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Demmandes' , icon:'check-all', link:'rq/architecture_service'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'شركة', value: 'dentiste', imgSrc: 'architect' },
            { id: 2, name: 'مكتب مهندس', value: 'dentiste', imgSrc: 'architect' },    
        ],
        tableItemList : {
            architecture_service : [{id:1, value: 'Immob_Genre', genre: 'text'}, {id:1, value:['Immob_Position', 'Gouv'], genre: 'PropFunction'},{id:1, value:['Immob_Position', 'Deleg'], genre: 'PropFunction'}], 
        },
        tableHeader : {
            architecture_service : ['*', 'Client', 'Passé le','Passé à','Genre','Gouv','Deleg','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    quincaillerie:{
        colorTheme:'#406163',
        adsImageUrl:'chantier_quincaillerie.svg',
        systemTitle:' Quancaillerie نظام إدارة  ',
        businesName:'المتجر ',
        directoryTable:'صاحب محل معدات', 
        RequestTable:'Quicaillerie', 
        systemReady: false ,
        systemUrl:'https://quincaillerie.system.abyedh.tn',
        adsText:'نظام إداراة Quancaillerie  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/librairie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'كتبية', value: 'dentiste', imgSrc: 'biblio' },
            { id: 2, name: 'أدوات مذرسية', value: 'dentiste', imgSrc: 'biblio' },    
        ],
        tableItemList : {
            librairie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            librairie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    menuisier:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_menuisier.svg',
        systemTitle:'نظام إداراة ورشة نجارة',
        systemUrl:'#',
        directoryTable:'نجار', 
        RequestTable:'Menuisier', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    forgeron:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_forgeron.svg',
        systemTitle:'نظام إداراة ورشة حدادة',
        systemUrl:'#',
        directoryTable:'حداد', 
        RequestTable:'Forgeron', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    cristal:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_cristal.svg',
        systemTitle:'نظام إداراة ورشة تركيب بلور',
        systemUrl:'#',
        directoryTable:'تركيب البلور', 
        RequestTable:'Cristallerie', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    marbre:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_marbre.svg',
        systemTitle:'نظام إداراة ورشات الرخام',
        systemUrl:'#',
        directoryTable:'بيع الرخام ', 
        RequestTable:'Marberie', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    electricien:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_electricien.svg',
        systemTitle:'نظام إداراة شركات الكهرباء',
        systemUrl:'#',
        directoryTable:'كهربائي', 
        RequestTable:'Electricien', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    peinture:{
        colorTheme:'#cdb556',
        adsImageUrl:'handmade_peinture.svg',
        systemTitle:'نظام إداراة شركات  الدهان',
        systemUrl:'#',
        directoryTable:'دهان', 
        RequestTable:'Peintre', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    
    coiffure:{
        colorTheme:'#0b97bf',
        adsImageUrl:'coiffure.svg',
        systemTitle:'نظام إداراة قاعات الحلاقة',
        businesName:'قاعة الحلاقة',
        systemUrl:'',
        directoryTable:'صاحب قاعة حلاقة', 
        RequestTable:'Coiffure', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Reservation' , icon:'check2-circle', link:'rq/coiffure_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'رجال', value: 'dentiste', imgSrc: 'coiffure-man' },
            { id: 2, name: 'نساء', value: 'dentiste', imgSrc: 'woumen' },    
        ],
        tableItemList : {
            coiffure_reserver : [{id:1, value: 'Services', genre: 'lengthFunc'}, {id:2, value: 'Wanted_Day', genre: 'date'}, {id:2, value: 'Wanted_Time', genre: 'text'}], 
        },
        tableHeader : {
            coiffure_reserver : ['*', 'Client', 'Passé le','Passé à','Services','Jour','Temps','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    boutique:{
        colorTheme:'#b146c2',
        adsImageUrl:'boutique.svg',
        systemTitle:'نظام إداراة نقاط  بيع الملابس ',
        businesName:'المتجر ',
        directoryTable:'صاحب نقطة بيع الملابس', 
        RequestTable:'Boutique', 
        systemReady: false ,
        systemUrl:'https://boutique.system.abyedh.tn',
        adsText:'نظام إداراة نقاط بيع الملابس  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/boutique_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'رِجَالْ', value: '1', imgSrc: 'man' },
            { id: 2, name: 'نِسَاءْ', value: 'dentiste', imgSrc: 'woumen' },
            { id: 3, name: 'صِغَارْ', value: 'dentiste', imgSrc: 'child' },
            { id: 4, name: 'أَحْذِيَة', value: 'dentiste', imgSrc: 'shoes' },    
        ],
        tableItemList : {
            boutique_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            boutique_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'boutique/boutique1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'boutique/boutique2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'boutique/boutique3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'boutique/boutique4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'boutique/boutique5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },
    photographe:{
        colorTheme:'#c30052',
        adsImageUrl:'wedding_photographe.svg',
        systemTitle:'نظام إداراة إستديو تصوير',
        systemUrl:'#',
        directoryTable:'مصور', 
        RequestTable:'Photographe', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/photographe_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَصْوِيرْ أَعْرَاسْ', value: 'dentiste', imgSrc: 'photographe' },
            { id: 2, name: 'مًصَوِرْ فُوتُوغْرَافِي', value: 'dentiste', imgSrc: 'photographe' },    
        ],
        tableItemList : {
            photographe_reserver :  [{id:1, value: 'Res_Genre', genre: 'text'}, {id:3, value:['Res_Position', 'Deleg'], genre: 'PropFunction'}, {id:2, value: 'Shooting_Genre', genre: 'text'}]
        },
        tableHeader : {
            photographe_reserver :  ['*', 'Client', 'Passé le','Passé à','Genre','Position','Service','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    chef:{
        colorTheme:'#c30052',
        adsImageUrl:'wedding_photographe.svg',
        systemTitle:'نظام إداراة  مواعيد طباخ',
        systemUrl:'#',
        directoryTable:'طباخ', 
        RequestTable:'ChefCuisinier', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/chef_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مَطْبَخْ أَجْنَبِي', value: 'dentiste', imgSrc: 'chef' },
            { id: 2, name: 'المَطْبَخْ التًونِسِي', value: 'dentiste', imgSrc: 'chef' },    
        ],
        tableItemList : {
            chef_reserver :  [{id:1, value: 'Res_Genre', genre: 'text'}, {id:3, value:['Res_Position', 'Deleg'], genre: 'PropFunction'}, {id:2, value: 'Estimate_Presence', genre: 'text'}]
        },
        tableHeader : {
            chef_reserver :  ['*', 'Client', 'Passé le','Passé à','Genre','Position','Presence','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    orchestre:{
        colorTheme:'#c30052',
        adsImageUrl:'wedding_photographe.svg',
        systemTitle:'نظام إداراة إستديو تصوير',
        systemUrl:'#',
        directoryTable:'صاحب فرقة موسيقية', 
        RequestTable:'Orchestre', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/orchestre_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'فِرْقَة شَعْبِيَّة', value: 'dentiste', imgSrc: 'orqustre' },
            { id: 2, name: 'فَنَّانْ', value: 'dentiste', imgSrc: 'orqustre' },    
        ],
        tableItemList : {
            orchestre_reserver :  [{id:1, value: 'Res_Genre', genre: 'text'}, {id:3, value:['Res_Position', 'Deleg'], genre: 'PropFunction'},]
        },
        tableHeader : {
            orchestre_reserver :  ['*', 'Client', 'Passé le','Passé à','Data 1','Genre','Position','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    salle_marriage:{
        colorTheme:'#c30052',
        adsImageUrl:'wedding_salon_marriage.svg',
        systemTitle:'نظام إداراة قاعة أفراح و مؤتمرات',
        systemUrl:'https://sallon.system.abyedh.tn/',
        directoryTable:'صاحب قاعة أفراح', 
        RequestTable:'SllonMariage', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Reservations' , icon:'calendar-week', link:'rq/salon_marriage_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'قَاعَة  مُغَطَّاةْ', value: 'dentiste', imgSrc: 'sallon' },
            { id: 2, name: 'قَاعَة  مَفْتُوحَة', value: 'dentiste', imgSrc: 'sallon' },    
        ],
        tableItemList : {
            salon_marriage_reserver : [{id:1, value: 'Res_Genre', genre: 'text'}, {id:2, value: 'Estimate_Presence', genre: 'text'}], 
        },
        tableHeader : {
            salon_marriage_reserver : ['*', 'Client', 'Passé le','Passé à','Cause','Presence','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    fourniture_marriage:{
        colorTheme:'#c30052',
        adsImageUrl:'wedding_fourniture_marriage.svg',
        systemTitle:'نظام إداراة نقاط  بيع لوازم الأفراح ',
        systemUrl:'#',
        directoryTable:'صاحب نقطة بيع لوازم الأفراح', 
        RequestTable:'FournitureMariage', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/fourniture_marriage_location'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'لَوَازِمْ أُخْرَي', value: 'dentiste', imgSrc: 'lawazem' },
            { id: 2, name: 'فَسَاتِينْ', value: 'dentiste', imgSrc: 'lawazem' },    
        ],
        tableItemList : {
            fourniture_marriage_location :  [{id:1, value: 'Res_Genre', genre: 'text'}, {id:2, value: 'Wanted_Products', genre: 'lengthFunc'}]
        },
        tableHeader : {
            fourniture_marriage_location :  ['*', 'Client', 'Passé le','Passé à','Evennemment','Totale','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    bijouterie:{
        colorTheme:'#b146c2',
        adsImageUrl:'boutique.svg',
        systemTitle:'نظام إداراة  محلات  بيع المجوهرات ',
        businesName:'المتجر ',
        directoryTable:'صاحب نقطة بيع المجوهرات', 
        RequestTable:'Bijouterie', 
        systemReady: false ,
        systemUrl:'https://boutique.system.abyedh.tn',
        adsText:'نظام إداراة نقاط بيع الملابس  يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/bijouterie_shop'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مُجَوْهَرَاتْ جَاهِزَةَ', value: 'dentiste', imgSrc: 'bijoux' },
            { id: 2, name: 'صَايْغِي', value: 'dentiste', imgSrc: 'bijoux' },    
        ],
        tableItemList : {
            bijouterie_shop : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Livraison_Par', genre: 'text'}], 
        },
        tableHeader : {
            bijouterie_shop : ['*', 'Client', 'Passé le','Passé à','Totale','Livraison','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'boutique/boutique1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'boutique/boutique2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'boutique/boutique3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'boutique/boutique4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'boutique/boutique5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },

    gym:{
        colorTheme:'#7aadab',
        adsImageUrl:'gym.svg',
        systemTitle:'نظام إداراة قاعات الرياضة',
        businesName:'قاعة الرياضة',
        directoryTable:'صاحب قاعة رياضة', 
        RequestTable:'Gym', 
        systemReady: true ,
        systemUrl:'https://gym.system.abyedh.tn/',
        adsText:'   نظام إدارة  قاعات الرياضة هو نظام إدارة و  محاسبة و تواصل مع مشتركيك و مراقبة أداءهم و تطور نشاطهم الرياضي من خلال خلق فضاء للتفاعل إفتراضيا مع القاعة لتقييم خدماتها ...',
        systemPos : [
            {id: 1 , posName:'إدارة الإشتراكات' , description:'', icon:'window-dock'},
            {id: 2 , posName:'إدارة المعدات' , description:'', icon:'window-dock'},
            {id: 3 , posName:'إدارة الحصص ' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/gym_souscription'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'GYM', value: 'dentiste', imgSrc: 'gym' },
            { id: 2, name: 'رياضات فردية', value: 'dentiste', imgSrc: 'karate' },
            { id: 3, name: ' متعدد الإختصاصات', value: 'dentiste', imgSrc: 'kickboking' },    
        ],
        tableItemList : {
            gym_souscription : [{id:1, value: 'User_Age', genre: 'text'}, {id:2, value: 'Ab_Genre', genre: 'text'}], 
        },
        tableHeader : {
            gym_souscription : ['*', 'Client', 'Passé le','Passé à','Age','Genre','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        imageCarousel:[
           {id:1, title:'إدارة العامة', color:'#4287f5', icon:'link-45deg', link:'gym/gym1.PNG'},
           {id:2, title:'سهل', color:'#5dd492', icon:'emoji-smile', link:'gym/gym2.PNG'},
           {id:3, title:'معين', color:'#8923e8', icon:'arrows-move', link:'gym/gym3.PNG'},
           {id:4, title:'متطور', color:'#5d6360', icon:'arrow-repeat', link:'gym/gym4.PNG'},
           {id:5, title:' مدعوم', color:'#e6327a', icon:'info-circle-fill', link:'gym/gym5.PNG'},
   
       ],
        yyyyyyyyyy : []
    },
    pyscine:{
        colorTheme:'#009fe3',
        adsImageUrl:'pyscine.svg',
        systemTitle:'نظام إداراة المسابح',
        systemUrl:'#',
        directoryTable:'صاحب مسبح ', 
        RequestTable:'Pyscine', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Reservation' , icon:'check-all', link:'rq/pyscine_reserver'},
            {id: 3 , colLg:6, colSm:12, itemName:'Abonnemment' , icon:'calendar-week', link:'rq/pyscine_souscrire'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مُغَطَي', value: 'dentiste', imgSrc: 'closed' },
            { id: 2, name: 'مَفْتُوحْ', value: 'dentiste', imgSrc: 'open' },
            { id: 3, name: 'للأَطْفَالْ', value: 'dentiste', imgSrc: 'childpool' },    
        ],
        tableItemList : {
            pyscine_reserver : [{id:1, value: 'RES_Date', genre: 'date'}, {id:2, value: 'RES_From_Time', genre: 'text'}, {id:2, value: 'RES_To_Time', genre: 'text'}], 
            pyscine_souscrire :  [{id:1, value: 'User_Age', genre: 'text'}, {id:2, value: 'Ab_Genre', genre: 'text'}]
        },
        tableHeader : {
            pyscine_reserver : ['*', 'Client', 'Passé le','Passé à','Date','De','Vers','Etat','Voir'], 
            pyscine_souscrire :  ['*', 'Client', 'Passé le','Passé à','Age','Genre','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    stade:{
        colorTheme:'#587e6d',
        adsImageUrl:'stade.svg',
        systemTitle:'نظام إداراة الملاعب الرياضية',
        systemUrl:'#',
        directoryTable:'صاحب ملعب رياضي', 
        RequestTable:'Stade', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Reservation' , icon:'check-all', link:'rq/stade_reserver'},
            {id: 3 , colLg:6, colSm:12, itemName:'Abonnemment' , icon:'calendar-week', link:'rq/stade_souscrire'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'كُرَةْ قَدَمْ', value: 'dentiste', imgSrc: 'foot' },
            { id: 2, name: 'كُرَةْ سَلَّة', value: 'dentiste', imgSrc: 'basquette' },
            { id: 3, name: 'كُرَةْ الطَائِرَة ', value: 'dentiste', imgSrc: 'voley' },
            { id: 4, name: ' كُرَةْ تِنْسْ', value: 'dentiste', imgSrc: 'tenis' },
            { id: 5, name: ' رِقْبِي', value: 'dentiste', imgSrc: 'regby' },
            { id: 6, name: ' جُولْفْ', value: 'dentiste', imgSrc: 'golf' },    
        ],
        tableItemList : {
            stade_reserver : [{id:1, value: 'RES_Date', genre: 'date'}, {id:2, value: 'RES_From_Time', genre: 'text'}, {id:2, value: 'RES_To_Time', genre: 'text'}], 
            stade_souscrire :  [{id:1, value: 'User_Age', genre: 'text'}, {id:2, value: 'Ab_Genre', genre: 'text'}]
        },
        tableHeader : {
            stade_reserver : ['*', 'Client', 'Passé le','Passé à','Date','De','Vers','Etat','Voir'], 
            stade_souscrire :  ['*', 'Client', 'Passé le','Passé à','Age','Genre','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    cinema:{
        colorTheme:'#2c7177',
        adsImageUrl:'art_cinema.svg',
        systemTitle:'نظام إداراة قاعات السنما',
        systemUrl:'#',
        directoryTable:'صاحب قاعة سنما', 
        RequestTable:'Cinma', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/cinema_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'قاعة عرض', value: 'dentiste', imgSrc: 'cima' },
            { id: 2, name: 'قاعة سنما', value: 'dentiste', imgSrc: 'cima' },    
        ],
        tableItemList : {
            cinema_reserver :  [{id:1, value: 'Movie_Name', genre: 'text'}, {id:2, value: 'Director_Name', genre: 'text'}, {id:2, value: 'Show_Day', genre: 'date'}]
        },
        tableHeader : {
            cinema_reserver :  ['*', 'Client', 'Passé le','Passé à','Nom','Directeur','Date','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    theatre:{
        colorTheme:'#2c7177',
        adsImageUrl:'art_theatre.svg',
        systemTitle:'نظام إداراة قاعات المسرح',
        systemUrl:'#',
        directoryTable:'صاحب مسرح', 
        RequestTable:'Theatre', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/theatre_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مسرح مفتوح', value: 'dentiste', imgSrc: 'theatre' },
            { id: 2, name: 'مسرح مغلق', value: 'dentiste', imgSrc: 'theatre' },    
        ],
        tableItemList : {
            theatre_reserver :  [{id:1, value: 'Movie_Name', genre: 'text'}, {id:2, value: 'Director_Name', genre: 'text'}, {id:2, value: 'Show_Day', genre: 'date'}]
        },
        tableHeader : {
            theatre_reserver :  ['*', 'Client', 'Passé le','Passé à','Nom','Directeur','Date','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    musee:{
        colorTheme:'#2c7177',
        adsImageUrl:'art_theatre.svg',
        systemTitle:'نظام إداراة  المتاحف  ',
        systemUrl:'#',
        directoryTable:'صاحب متحف', 
        RequestTable:'Musee', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/musee_reserver'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مَكَانْ أَثَرِي', value: 'dentiste', imgSrc: 'Musee' },
            { id: 2, name: 'مَتْحَفْ', value: 'dentiste', imgSrc: 'Musee' },   
        ],
        tableItemList : {
            musee_reserver :  [{id:1, value: 'Wanted_Date', genre: 'date'}, {id:2, value: 'Wanted_Time_From', genre: 'text'}, {id:2, value: 'Wanted_Time_To', genre: 'text'}]
        },
        tableHeader : {
            musee_reserver :  ['*', 'Client', 'Passé le','Passé à','Jour','De','Vers','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    avocat:{
        colorTheme:'#7a8890',
        adsImageUrl:'avocat.svg',
        systemTitle:'نظام إداراة مكتب محامي',
        businesName:'المكتب',
        directoryTable:'محامي', 
        RequestTable:'Avocat', 
        systemReady: false ,
        systemUrl:'https://avocat.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:6, colSm:12, itemName:'Resndy Vous' , icon:'calendar-week', link:'rq/avocat_rdv'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تَمْرِينْ', value: 'dentiste', imgSrc: 'avo1' },
            { id: 2, name: 'تَعْقِيبْ', value: 'dentiste', imgSrc: 'avo2' },
            { id: 3, name: 'إِسْتِئْنَافْ', value: 'dentiste', imgSrc: 'avo3' },    
        ],
        tableItemList : {
            avocat_rdv :  [{id:1, value: 'RDV_Date', genre: 'date'}, {id:2, value: 'RDV_Time', genre: 'text'}]
        },
        tableHeader : {
            avocat_rdv :  ['*', 'Client', 'Passé le','Passé à','Date','Temps','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    hotels:{
        colorTheme:'#247cc7',
        adsImageUrl:'hotel.svg',
        systemTitle:'نظام إداراة الفنادق و النزل',
        directoryTable:'صاحب نزل ', 
        RequestTable:'Hotels', 
        systemReady: false ,
        systemUrl:'https://hotel.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/hotels_reserver'},
            {id: 1 , colLg:6, colSm:12, itemName:'Service' , icon:'check-all', link:'rq/hotels_service'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'Hotel', value: 'dentiste', imgSrc: 'hotel' },
            { id: 2, name: 'Maison de Hote', value: 'dentiste', imgSrc: 'maison' },    
        ],
        tableItemList : {
            hotels_service : [{id:1, value: 'Room_Num', genre: 'text'}, {id:2, value: 'Req_Genre', genre: 'text'}], 
            hotels_reserver :  [{id:1, value: 'From_Date', genre: 'date'}, {id:2, value: 'To_Date', genre: 'date'},{id:1, value: 'Room_Genre', genre: 'text'}, {id:2, value: 'Total_Number', genre: 'text'}]
        },
        tableHeader : {
            hotels_service : ['*', 'Client', 'Passé le','Passé à','Chambre','Genre','Etat','Voir'], 
            hotels_reserver :  ['*', 'Client', 'Passé le','Passé à','De','Vers','Chambre','Nombre','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    vg_agence:{
        colorTheme:'#ce8c64',
        adsImageUrl:'vg-agence.svg',
        systemTitle:'نظام إداراة وكالات الأسفار',
        systemUrl:'#',
        directoryTable:'صاحب وكالة أسفار', 
        RequestTable:'AgenceVoiyage', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 3 , colLg:12, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/agence_service'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مَكْتَبْ سِيَاحَة', value: 'dentiste', imgSrc: 'bureaux' },
            { id: 2, name: 'وِكَالَة أَسْفَارْ', value: 'dentiste', imgSrc: 'agence' },    
        ],
        tableItemList : {
            agence_service :  [{id:1, value: 'Coutry', genre: 'text'}, {id:2, value: 'From_Date', genre: 'date'}, {id:2, value: 'To_Date', genre: 'date'}, {id:2, value: 'Travel_Genre', genre: 'text'}]
        },
        tableHeader : {
            agence_service :  ['*', 'Client', 'Passé le','Passé à','Pyaeé','De','Jusq\'a','Par','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },

    depot:{
        colorTheme:'#6f858f',
        adsImageUrl:'storage.svg',
        systemTitle:'نظام إداراة نقاط البيع بالجملة ',
        businesName:'الشركة ',
        directoryTable:'صاحب نقطة بيه بالجملة ', 
        RequestTable:'PTVGros', 
        systemReady: false ,
        systemUrl:'https://ptvgros.system.abyedh.tn/',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم .  كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير.  بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار)  التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Commandes' , icon:'cart4', link:'rq/depot_commande'},
            {id: 3 , colLg:6, colSm:6, itemName:'Articles' , icon:'stars', link:'Spesific'},
        ],
        navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'مَوَادْ غِذَائِيَّة', value: 'dentiste', imgSrc: 'storage-nutrition' },
            { id: 2, name: 'مَوَادْ بِنَاءْ', value: 'dentiste', imgSrc: 'constraction' },
            { id: 3, name: 'مَوَادْ طِبِيَّة', value: 'dentiste', imgSrc: 'medical' },
            { id: 4, name: 'مَلَابِسْ', value: 'dentiste', imgSrc: 'clothes' },
            { id: 5, name: 'مَشْرُوبَاتْ', value: 'dentiste', imgSrc: 'drink' },
            { id: 6, name: 'خًضَرْ و َغِلَالْ', value: 'dentiste', imgSrc: 'fruit' },    
        ],
        tableItemList : {
            depot_commande : [{id:1, value: 'Articles', genre: 'lengthFunc'}, {id:2, value: 'Wanted_Day', genre: 'date'}], 
        },
        tableHeader : {
            depot_commande : ['*', 'Client', 'Passé le','Passé à','Totale','Date','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    comptable:{
        colorTheme:'#a77a51',
        adsImageUrl:'comptable.svg',
        systemTitle:'نظام إداراة مكتب محاسب',
        systemUrl:'#',
        directoryTable:'محاسب', 
        RequestTable:'Comptable', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:12, colSm:12, itemName:'Demmandes' , icon:'check-all', link:'rq/comptable_service'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'تدْقِيقَ مُحَاسِبْ', value: 'dentiste', imgSrc: 'compt-bureaux' },
            { id: 2, name: 'مًحَاسِبْ', value: 'dentiste', imgSrc: 'compt-logo' },    
        ],
        tableItemList : {
            comptable_service : [{id:1, value: 'Request_Cause', genre: 'text'}, {id:2, value: 'From_Date', genre: 'text'}, {id:2, value: 'To_Date', genre: 'text'}], 
        },
        tableHeader : {
            comptable_service : ['*', 'Client', 'Passé le','Passé à','Demande','De','Vers','Etat','Voir'], 
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    socite:{
        colorTheme:'#32a6c9',
        adsImageUrl:'socite.svg',
        systemTitle:'نظام إداراة الشركات القابضة',
        systemUrl:'#',
        directoryTable:'صاحب شركة قابضة', 
        RequestTable:'Socite', 
        systemReady: false ,
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },



    farm:{
        colorTheme:'#72bcc7',
        adsImageUrl:'champ.svg',
        systemTitle:'نظام إداراة الضيعات الفلاحية',
        systemUrl:'#',
        adsText:'نظام إداراة نقاط البيع بالجملة يساعدك علي مراقبة و التحكم في مخزون المنتجات (stock) و متابعة فواتيرك و الإتصال بعملاءك و متابعة طلباتهم . كما يقدم لك واجهة رسومية (caisse) لتسجيل المبيعات و طباعة الفواتير. بالإضافة إلي مجموعة من الأدوات الإبداعية (مثل واجهة إستخراج الأسعار) التي تساعدك علي أداء عملك بجودة أفضل',
        systemPos : [
            {id: 1 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 2 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
            {id: 3 , posName:'1xxxxxxxxx1إدارة ال' , description:'', icon:'window-dock'},
        ],
        itemsList : [
            {id: 1 , colLg:6, colSm:12, itemName:'Commandes' , icon:'check-all', link:'rq/restaurant_commande'},
            {id: 3 , colLg:6, colSm:12, itemName:'Reservation' , icon:'calendar-week', link:'rq/restaurant_reservation'},
            {id: 3 , colLg:6, colSm:6, itemName:'Tarif' , icon:'cash-coin', link:'Spesific'},
        ],
       navItemList : [
            {id: 1 , navName:'En Attent' , color:'#ffc20b',  icon:'hourglass-split', navIndex: 0, navIndexName:'W'},
            {id: 2 , navName:'Vu' , color:'#1070fd',  icon:'eye-fill', navIndex: 1, navIndexName:'S'},
            {id: 3 , navName:'Accepteé' , color:'#198754',  icon:'check-square-fill', navIndex: 2, navIndexName:'A'},
            {id: 4 , navName:'Refuseé' , color:'#dc3545',  icon:'x-square-fill', navIndex: 3, navIndexName:'R'},
            {id: 5 , navName:'Retardeé' , color:'#ad059f',  icon:'arrow-clockwise', navIndex: 4, navIndexName:'RD'},
            {id: 6 , navName:'Redirecteé' , color:'#92ab03',  icon:'compass-fill', navIndex: 5, navIndexName:'RT'},
            {id: 7 , navName:'Termineé' , color:'#6c757d',  icon:'slash-square-fill', navIndex: 6, navIndexName:'T'},
        ],
        genreListe : [
            { id: 1, name: 'أسنان', value: 'STOMATOLOGIE', imgSrc: 'STOMATOLOGIE' },
            { id: 2, name: 'أطفال', value: 'PEDIATRIE', imgSrc: 'PEDIATRIE' },
            { id: 3, name: 'المجاري البولية', value: 'UROLOGIE', imgSrc: 'UROLOGIE' },
            { id: 4, name: 'امراض الرئة', value: 'PNEUMOLOGIE', imgSrc: 'PNEUMOLOGIE' },
            { id: 5, name: 'العيون', value: 'OPHTALMOLOGIE', imgSrc: 'OPHTALMOLOGIE' },
            { id: 6, name: 'أذن أنف حنجرة', value: 'ORL', imgSrc: 'ORL' },
            { id: 7, name: 'الأعصاب', value: 'NEUROLOGIE', imgSrc: 'NEUROLOGIE' },
            { id: 8, name: 'الكلي', value: 'NEPHROLOGIE', imgSrc: 'NEPHROLOGIE' },
            { id: 9, name: 'نساء و توليد', value: 'GYNECOLOGIE_OBSTETRIQUE', imgSrc: 'GYNECOLOGIE_OBSTETRIQUE' },
            { id: 10, name: 'الجهاز الهضمي', value: 'GASTROLOGIE', imgSrc: 'GASTROLOGIE' },
            { id: 11, name: 'الغدد', value: 'ENDOCRINOLOGIE', imgSrc: 'ENDOCRINOLOGIE' },
            { id: 12, name: 'البشرة', value: 'DERMATOLOGIE', imgSrc: 'DERMATOLOGIE' },
            { id: 13, name: 'القلب', value: 'CARDIOLOGIE', imgSrc: 'CARDIOLOGIE' },
            { id: 14, name: 'النفس', value: 'PSYCHIATRIE', imgSrc: 'PSYCHIATRIE' },
            { id: 15, name: 'التغذية', value: 'NUTRITION', imgSrc: 'NUTRITION' },    
        ],
        tableItemList : {
            restaurant_commande : [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}], 
            restaurant_reservation :  [{id:1, value: 'Comm_Genre', genre: 'text'}, {id:2, value: 'Table_Num', genre: 'text'}]
        },
        tableHeader : {
            restaurant_commande : ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Voir'], 
            restaurant_reservation :  ['*', 'Client', 'Passé le','Passé à','Data 1','Data 2','Etat','Etat','Voir'],
        },
        xxxxxxxxxx: [],
        yyyyyyyyyy : []
    },
    
}
export default APPItem