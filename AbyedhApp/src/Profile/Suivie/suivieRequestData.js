const  SuivieRequestData  = {
    docteur_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'docteur_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'docteur_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'docteur_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'docteur_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'docteur_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'docteur_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            docteur_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            docteur_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            docteur_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            docteur_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            docteur_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            docteur_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    infirmier_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'infirmier_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'infirmier_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'infirmier_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'infirmier_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'infirmier_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'infirmier_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            infirmier_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            infirmier_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            infirmier_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            infirmier_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            infirmier_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            infirmier_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    pharmacie_shop: {
        icon:'bi-check-circle-fill text-success',
        title:'شراء دواء',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span>   : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>بتاريخ   : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-chat-square-dots"></span>  الطلبات  : 
                        <ul> 
                            {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'pharmacie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'pharmacie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'pharmacie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'pharmacie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'pharmacie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'pharmacie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            pharmacie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            pharmacie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            pharmacie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            pharmacie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            pharmacie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            pharmacie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    pharmacie_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'طلب موعد مع صيدلية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'pharmacie_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'pharmacie_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'Purple', line:'all', step:1},
            {name :'pharmacie_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'pink', line:'toAccept', step:2},
            {name :'pharmacie_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'blue', line:'toReject', step:2},
            {name :'pharmacie_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'Teal', line:'toRetarder', step:2},
            {name :'pharmacie_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'Brown', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            pharmacie_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            pharmacie_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            pharmacie_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            pharmacie_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            pharmacie_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            pharmacie_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    clinique_reserver : {
        icon:'bi-check-circle-fill text-success',
        title:'طلب موعد مع صيدلية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    {/* <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.comment}</div>   */}
                </> )
        },
        stepsValues : [
            {name: 'clinique_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'clinique_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'clinique_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'clinique_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'clinique_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'clinique_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            clinique_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            clinique_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            clinique_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            clinique_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            clinique_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            clinique_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    centre_reserver : {
        icon:'bi-check-circle-fill text-success',
        title:'طلب موعد مع صيدلية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    {/* <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.comment}</div>   */}
                </> )
        },
        stepsValues : [
            {name: 'centre_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'centre_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'centre_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'centre_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'centre_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'centre_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            centre_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            centre_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            centre_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            centre_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            centre_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            centre_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    labo_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'طلب موعد مع صيدلية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    {/* <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.comment}</div>   */}
                </> )
        },
        stepsValues : [
            {name: 'labo_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'labo_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'labo_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'labo_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'labo_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'labo_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            labo_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            labo_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            labo_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            labo_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            labo_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            labo_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },

    garderie_inscription : {
        icon:'bi-check-circle-fill text-success',
        title:'تسجيل صغير في روضة',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> اسم الطفل  : {requestData.EL_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ الولادة  : {new Date(requestData.EL_Naissance).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-gender-ambiguous"></span>  الجنس : {requestData.EL_Genre}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>  الولاية : {requestData.Gouv}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>  المدينة : {requestData.Deleg}</div>  
                    <div className="mb-1"> <span className="bi bi-map"></span>  العنوان : {requestData.EL_Adress}</div>  
                    <div className="mb-1"> <span className="bi bi-person-fill"></span>  اسم الاب : {requestData.EL_Pere_Nom}</div>  
                    <div className="mb-1"> <span className="bi bi-phone-vibrate-fill"></span>  هاتف الاب : {requestData.EL_Pere_Phone}</div>  
                    <div className="mb-1"> <span className="bi bi-person"></span>  اسم الام  : {requestData.EL_Mere_Nom}</div>  
                    <div className="mb-1"> <span className="bi bi-phone-vibrate"></span>  هاتف الام  : {requestData.EL_Mere_Phone}</div>  
                </> )
        },
        stepsValues : [
            {name: 'garderie_inscription_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'garderie_inscription_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'garderie_inscription_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'garderie_inscription_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'garderie_inscription_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'garderie_inscription_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            garderie_inscription_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            garderie_inscription_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            garderie_inscription_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            garderie_inscription_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            garderie_inscription_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            garderie_inscription_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    formation_inscription : {
        icon:'bi-check-circle-fill text-success',
        title:'تسجيل صغير في روضة',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> اسم الطفل  : {requestData.EL_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ الولادة  : {new Date(requestData.EL_Naissance).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-gender-ambiguous"></span>  الجنس : {requestData.EL_Genre}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>  الولاية : {requestData.Gouv}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>  المدينة : {requestData.Deleg}</div>  
                    <div className="mb-1"> <span className="bi bi-map"></span>  العنوان : {requestData.EL_Adress}</div>  
                    <div className="mb-1"> <span className="bi bi-person-fill"></span>  اسم الاب : {requestData.EL_Pere_Nom}</div>  
                    <div className="mb-1"> <span className="bi bi-phone-vibrate-fill"></span>  هاتف الاب : {requestData.EL_Pere_Phone}</div>  
                    <div className="mb-1"> <span className="bi bi-person"></span>  اسم الام  : {requestData.EL_Mere_Nom}</div>  
                    <div className="mb-1"> <span className="bi bi-phone-vibrate"></span>  هاتف الام  : {requestData.EL_Mere_Phone}</div>  
                </> )
        },
        stepsValues : [
            {name: 'formation_inscription_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'formation_inscription_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'formation_inscription_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'formation_inscription_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'formation_inscription_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'formation_inscription_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            formation_inscription_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            formation_inscription_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            formation_inscription_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            formation_inscription_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            formation_inscription_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            formation_inscription_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    librairie_shop: {
        icon:'bi-check-circle-fill text-success',
        title:'شراء أدوانت مدرسية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> للمنتجات : 
                        <ul> 
                            {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'librairie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'librairie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'librairie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'librairie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'librairie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'librairie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            librairie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            librairie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            librairie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            librairie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            librairie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            librairie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },

    transporteur_request: {
        icon:'bi-check-circle-fill text-success',
        title:' نقل بضائع',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-truck"></span>   نوع التوصيل   : {requestData.Genre}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>  
                    <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   للتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> البظائع  : 
                        <ul> 
                            {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'transporteur_request_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'transporteur_request_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'transporteur_request_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'transporteur_request_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'transporteur_request_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'transporteur_request_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            transporteur_request_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            transporteur_request_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            transporteur_request_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            transporteur_request_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            transporteur_request_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            transporteur_request_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    autoecole_inscrie : {
        icon:'bi-check-circle-fill text-success',
        title:'الحصول علي رخصة سياقة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                    <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                    <div className="mb-1"> 
                        <span className="bi bi-clock-fill"></span> الأوقات المطلوبة  : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Times).map( (data,index) => <li key={index}>{data.Wanted_Time_D} - {data.Wanted_Time_F}</li>)}
                        </ul>
                    </div> 
                </> )
        },
        stepsValues : [
            {name: 'autoecole_inscrie_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'autoecole_inscrie_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'autoecole_inscrie_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'autoecole_inscrie_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'autoecole_inscrie_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'autoecole_inscrie_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            autoecole_inscrie_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            autoecole_inscrie_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            autoecole_inscrie_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            autoecole_inscrie_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            autoecole_inscrie_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            autoecole_inscrie_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },  

    location_request: {
        icon:'bi-check-circle-fill text-success',
        title:' كراء سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-truck"></span>  سبب الكراء : {requestData.Cause}</div>  
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>   */}
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>   */}
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   من  : {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Depart_Time}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   إلي  : {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Finish_Time}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-car-front"></span> السيارات المطلوبة  : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Cars).map( (data,index) => <li key={index}>{data.carName} - {data.motherMonufactrer}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'location_request_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'location_request_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'location_request_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'location_request_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'location_request_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'location_request_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            location_request_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            location_request_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            location_request_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            location_request_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            location_request_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            location_request_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    parking_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' حجز في موقف سيارات',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-car-front"></span> نوع السيارة : {requestData.Car_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-car-front"></span>  الرقم المنجمي : {requestData.Car_Matricule}</div>  
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>   */}
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>   */}
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   من  : {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Depart_Time}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   إلي  : {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Finish_Time}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                       
                    
                </> )
        },
        stepsValues : [
            {name: 'parking_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'parking_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'parking_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'parking_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'parking_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'parking_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            parking_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            parking_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            parking_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            parking_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            parking_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            parking_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    parking_souscrire: {
        icon:'bi-check-circle-fill text-success',
        title:' إشتراك في موقف سيارات',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-car-front"></span> نوع السيارة : {requestData.Car_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-car-front"></span>  الرقم المنجمي : {requestData.Car_Matricule}</div>  
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>   */}
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>   */}
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   من  : {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   إلي  : {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                       
                    
                </> )
        },
        stepsValues : [
            {name: 'parking_souscrire_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'parking_souscrire_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'parking_souscrire_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'parking_souscrire_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'parking_souscrire_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'parking_souscrire_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            parking_souscrire_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            parking_souscrire_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            parking_souscrire_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            parking_souscrire_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            parking_souscrire_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            parking_souscrire_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    qiosque_request: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب شراء وقود',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-car-front"></span> نوع السيارة : {requestData.Car_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-car-front"></span>  الرقم المنجمي : {requestData.Car_Matricule}</div>  
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>   */}
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>   */}
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   من  : {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   إلي  : {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                       
                    
                </> )
        },
        stepsValues : [
            {name: 'qiosque_request_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'qiosque_request_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'qiosque_request_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'qiosque_request_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'qiosque_request_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'qiosque_request_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            qiosque_request_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            qiosque_request_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            qiosque_request_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            qiosque_request_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            qiosque_request_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            qiosque_request_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    qiosque_lavage: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-car-front"></span> نوع السيارة : {requestData.Car_Name}</div>  
                    <div className="mb-1"> <span className="bi bi-car-front"></span>  الرقم المنجمي : {requestData.Car_Matricule}</div>  
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt"></span>  من : {JSON.parse(requestData.De).Gouv}, {JSON.parse(requestData.De).Deleg}</div>   */}
                    {/* <div className="mb-1"> <span className="bi bi-geo-alt-fill"></span>   إلي : {JSON.parse(requestData.Vers).Gouv}, {JSON.parse(requestData.Vers).Deleg}</div>   */}
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   من  : {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   إلي  : {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                       
                    
                </> )
        },
        stepsValues : [
            {name: 'qiosque_lavage_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'qiosque_lavage_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'qiosque_lavage_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'qiosque_lavage_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'qiosque_lavage_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'qiosque_lavage_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            qiosque_lavage_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            qiosque_lavage_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            qiosque_lavage_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            qiosque_lavage_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            qiosque_lavage_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            qiosque_lavage_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    electromenager_shop: {
        icon:'bi-check-circle-fill text-success',
        title:' شراء أدوات كهرومنزلية',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-truck"></span>   طريقة الدفع: {requestData.Paymment_Mode}</div>  
                    <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> للمنتجات : 
                        <ul> 
                            {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'electromenager_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'electromenager_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'electromenager_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'electromenager_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'electromenager_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'electromenager_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            electromenager_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            electromenager_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            electromenager_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            electromenager_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            electromenager_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            electromenager_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    meubles_shop: {
        icon:'bi-check-circle-fill text-success',
        title:'طلب شراء أثاث  ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-truck"></span>   طريقة الدفع: {requestData.Paymment_Mode}</div>  
                    <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> للمنتجات : 
                        <ul> 
                            {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'meubles_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'meubles_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'meubles_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'meubles_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'meubles_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'meubles_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            meubles_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            meubles_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            meubles_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            meubles_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            meubles_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            meubles_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    coiffure_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Services).map( (data,index) => <li key={index}>{data.Name} : {data.Qte} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'coiffure_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'coiffure_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'coiffure_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'coiffure_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'coiffure_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'coiffure_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            coiffure_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            coiffure_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            coiffure_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            coiffure_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            coiffure_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            coiffure_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    boutique_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء ملابس  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'boutique_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'boutique_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'boutique_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'boutique_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'boutique_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'boutique_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            boutique_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            boutique_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            boutique_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            boutique_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            boutique_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            boutique_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    bijouterie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مجوهرات    ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'bijouterie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'bijouterie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'bijouterie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'bijouterie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'bijouterie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'bijouterie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            bijouterie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            bijouterie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            bijouterie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            bijouterie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            bijouterie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            bijouterie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    salon_marriage_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Dates).map( (data,index) => <li key={index}>{data.Wanted_Day} : {data.Wanted_Time_D} - {data.Wanted_Time_F} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'salon_marriage_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'salon_marriage_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'salon_marriage_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'salon_marriage_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'salon_marriage_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'salon_marriage_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            salon_marriage_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            salon_marriage_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            salon_marriage_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            salon_marriage_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            salon_marriage_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            salon_marriage_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    chef_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Dates).map( (data,index) => <li key={index}>{data.Wanted_Day} : {data.Wanted_Time_D} - {data.Wanted_Time_F} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'chef_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'chef_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'chef_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'chef_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'chef_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'chef_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            chef_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            chef_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            chef_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            chef_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            chef_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            chef_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    orchestre_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Dates).map( (data,index) => <li key={index}>{data.Wanted_Day} : {data.Wanted_Time_D} - {data.Wanted_Time_F} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'orchestre_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'orchestre_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'orchestre_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'orchestre_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'orchestre_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'orchestre_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            orchestre_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            orchestre_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            orchestre_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            orchestre_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            orchestre_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            orchestre_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    photographe_reserver: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Dates).map( (data,index) => <li key={index}>{data.Wanted_Day} : {data.Wanted_Time_D} - {data.Wanted_Time_F} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'photographe_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'photographe_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'photographe_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'photographe_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'photographe_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'photographe_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            photographe_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            photographe_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            photographe_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            photographe_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            photographe_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            photographe_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },
    fourniture_marriage_location: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب غسيل سيارة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time} </div>   
                    <div className="mb-1"> <span className="bi bi-chat-dots"></span>   ملاحضات  : {requestData.Comment}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-basket"></span> الخدمات : 
                        <ul> 
                            {JSON.parse(requestData.Wanted_Products).map( (data,index) => <li key={index}>{data.Wanted_Day} : {data.Wanted_Time_D} - {data.Wanted_Time_F} </li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'fourniture_marriage_location_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'fourniture_marriage_location_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'fourniture_marriage_location_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'fourniture_marriage_location_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'fourniture_marriage_location_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'fourniture_marriage_location_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            fourniture_marriage_location_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            fourniture_marriage_location_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            fourniture_marriage_location_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            fourniture_marriage_location_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            fourniture_marriage_location_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            fourniture_marriage_location_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }


    },

    magazin_commande : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'magazin_commande_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'magazin_commande_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'magazin_commande_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'magazin_commande_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'magazin_commande_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'magazin_commande_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            magazin_commande_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            magazin_commande_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            magazin_commande_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            magazin_commande_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            magazin_commande_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            magazin_commande_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    boulangerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'boulangerie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'boulangerie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'boulangerie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'boulangerie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'boulangerie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'boulangerie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            boulangerie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            boulangerie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            boulangerie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            boulangerie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            boulangerie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            boulangerie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    boucheries_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'boucheries_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'boucheries_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'boucheries_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'boucheries_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'boucheries_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'boucheries_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            boucheries_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            boucheries_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            boucheries_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            boucheries_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            boucheries_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            boucheries_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    fruiterie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'fruiterie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'fruiterie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'fruiterie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'fruiterie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'fruiterie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'fruiterie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            fruiterie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            fruiterie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            fruiterie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            fruiterie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            fruiterie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            fruiterie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    patisserie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'patisserie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'patisserie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'patisserie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'patisserie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'patisserie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'patisserie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            patisserie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            patisserie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            patisserie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            patisserie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            patisserie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            patisserie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    epicerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'epicerie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'epicerie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'epicerie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'epicerie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'epicerie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'epicerie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            epicerie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            epicerie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            epicerie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            epicerie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            epicerie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            epicerie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    quincaillerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'quincaillerie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'quincaillerie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'quincaillerie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'quincaillerie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'quincaillerie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'quincaillerie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            quincaillerie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            quincaillerie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            quincaillerie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            quincaillerie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            quincaillerie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            quincaillerie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },


    avocat_souscrire : {
        icon:'bi-pencil-square text-info',
        title:'تسجيل قضية عند محامي',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : [
            {name: 'avocat_souscrie_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'avocat_souscrie_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'avocat_souscrie_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'avocat_souscrie_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'avocat_souscrie_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'avocat_souscrie_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            avocat_souscrie_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            avocat_souscrie_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            avocat_souscrie_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            avocat_souscrie_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            avocat_souscrie_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            avocat_souscrie_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    avocat_rdv : {
        icon:'bi-pencil-square text-info',
        title:'طلب موعد مع محامي',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : [
            {name: 'avocat_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'avocat_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'avocat_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'avocat_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'avocat_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'avocat_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            avocat_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            avocat_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            avocat_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            avocat_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            avocat_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            avocat_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
 
    gym_souscription : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                <div className="mb-1"> 
                    <span className="bi bi-clock-fill"></span> الأوقات المطلوبة  : 
                    <ul> 
                        {JSON.parse(requestData.Wanted_Times).map( (data,index) => <li key={index}>{data.Wanted_Time_D} - {data.Wanted_Time_F}</li>)}
                    </ul>
                </div> 
            </> )
        },
        stepsValues : [
            {name: 'gym_souscription_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'gym_souscription_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'gym_souscription_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'gym_souscription_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'gym_souscription_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'gym_souscription_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            gym_souscription_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            gym_souscription_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            gym_souscription_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            gym_souscription_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            gym_souscription_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            gym_souscription_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    pyscine_souscrire : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                <div className="mb-1"> 
                    <span className="bi bi-clock-fill"></span> الأوقات المطلوبة  : 
                    <ul> 
                        {JSON.parse(requestData.Wanted_Times).map( (data,index) => <li key={index}>{data.Wanted_Time_D} - {data.Wanted_Time_F}</li>)}
                    </ul>
                </div> 
            </> )
        },
        stepsValues : [
            {name: 'pyscine_souscrire_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'pyscine_souscrire_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'pyscine_souscrire_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'pyscine_souscrire_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'pyscine_souscrire_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'pyscine_souscrire_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            pyscine_souscrire_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            pyscine_souscrire_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            pyscine_souscrire_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            pyscine_souscrire_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            pyscine_souscrire_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            pyscine_souscrire_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    pyscine_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'pyscine_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'pyscine_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'pyscine_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'pyscine_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'pyscine_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'pyscine_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            pyscine_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            pyscine_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            pyscine_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            pyscine_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            pyscine_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            pyscine_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    stade_souscrire : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                <div className="mb-1"> 
                    <span className="bi bi-clock-fill"></span> الأوقات المطلوبة  : 
                    <ul> 
                        {JSON.parse(requestData.Wanted_Times).map( (data,index) => <li key={index}>{data.Wanted_Time_D} - {data.Wanted_Time_F}</li>)}
                    </ul>
                </div> 
            </> )
        },
        stepsValues : [
            {name: 'stade_souscrire_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'stade_souscrire_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'stade_souscrire_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'stade_souscrire_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'stade_souscrire_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'stade_souscrire_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            stade_souscrire_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            stade_souscrire_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            stade_souscrire_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            stade_souscrire_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            stade_souscrire_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            stade_souscrire_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    stade_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'stade_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'stade_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'stade_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'stade_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'stade_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'stade_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            stade_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            stade_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            stade_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            stade_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            stade_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            stade_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    cinema_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'cinema_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'cinema_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'cinema_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'cinema_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'cinema_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'cinema_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            cinema_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            cinema_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            cinema_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            cinema_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            cinema_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            cinema_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    theatre_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'theatre_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'theatre_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'theatre_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'theatre_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'theatre_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'theatre_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            theatre_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            theatre_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            theatre_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            theatre_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            theatre_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            theatre_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    art_avis : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'art_avis_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'art_avis_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'art_avis_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'art_avis_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'art_avis_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'art_avis_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            art_avis_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            art_avis_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            art_avis_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            art_avis_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            art_avis_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            art_avis_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    musee_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'musee_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'musee_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'musee_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'musee_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'musee_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'musee_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            musee_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            musee_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            musee_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            musee_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            musee_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            musee_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    hotels_reserver : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'hotels_reserver_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'hotels_reserver_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'hotels_reserver_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'hotels_reserver_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'hotels_reserver_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'hotels_reserver_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            hotels_reserver_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            hotels_reserver_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            hotels_reserver_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            hotels_reserver_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            hotels_reserver_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            hotels_reserver_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    hotels_service : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'hotels_service_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'hotels_service_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'hotels_service_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'hotels_service_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'hotels_service_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'hotels_service_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            hotels_service_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            hotels_service_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            hotels_service_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            hotels_service_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            hotels_service_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            hotels_service_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    agence_service : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Genre}</div>  
                <div className="mb-1"> <span className="bi bi-asterisk"></span>  تجديد أم أول مرة  : {requestData.Renouvellemment}</div>  
                <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div> 
                  
            </> )
        },
        stepsValues : [
            {name: 'agence_service_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'agence_service_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'agence_service_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'agence_service_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'agence_service_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'agence_service_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            agence_service_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            agence_service_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            agence_service_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            agence_service_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            agence_service_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            agence_service_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    depot_commande : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'depot_commande_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'depot_commande_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'depot_commande_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'depot_commande_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'depot_commande_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'depot_commande_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            depot_commande_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            depot_commande_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            depot_commande_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            depot_commande_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            depot_commande_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            depot_commande_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    comptable_service : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                  
                
            </> )
        },
        stepsValues : [
            {name: 'comptable_service_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'comptable_service_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'comptable_service_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'comptable_service_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'comptable_service_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'comptable_service_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            comptable_service_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            comptable_service_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            comptable_service_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            comptable_service_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            comptable_service_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            comptable_service_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },

    restaurant_commande: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب طبق من مطعم',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span>   : {requestData.Table_Num}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> بتاريخ   : {new Date(requestData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-chat-square-dots"></span>  الطلبات  : 
                        <ul> 
                            {JSON.parse(requestData.C_Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'restaurant_commande_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'restaurant_commande_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'restaurant_commande_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'restaurant_commande_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'restaurant_commande_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'restaurant_commande_completed ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            restaurant_commande_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            restaurant_commande_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            restaurant_commande_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            restaurant_commande_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            restaurant_commande_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            restaurant_commande_completed :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    restaurant_reservation : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز طاولة في مطعم',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Wanted_Date}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'restaurant_reservation_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'restaurant_reservation_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'restaurant_reservation_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'restaurant_reservation_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'restaurant_reservation_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'restaurant_reservation_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            restaurant_reservation_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            restaurant_reservation_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            restaurant_reservation_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            restaurant_reservation_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            restaurant_reservation_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            restaurant_reservation_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    cafe_commande: {
        icon:'bi-check-circle-fill text-success',
        title:' طلب طبق من مطعم',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span>   : {requestData.Table_Num}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> بتاريخ   : {new Date(requestData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> 
                        <span className="bi bi-chat-square-dots"></span>  الطلبات  : 
                        <ul> 
                            {JSON.parse(requestData.C_Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                        </ul>
                    </div>  
                    
                </> )
        },
        stepsValues : [
            {name: 'cafe_commande_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'cafe_commande_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'cafe_commande_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'cafe_commande_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'cafe_commande_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'cafe_commande_completed ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            cafe_commande_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            cafe_commande_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            cafe_commande_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            cafe_commande_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            cafe_commande_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            cafe_commande_completed :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    cafe_reservation : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز طاولة في مطعم',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.Wanted_Date}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'cafe_reservation_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'cafe_reservation_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'cafe_reservation_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'cafe_reservation_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'cafe_reservation_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'cafe_reservation_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            cafe_reservation_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            cafe_reservation_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            cafe_reservation_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            cafe_reservation_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            cafe_reservation_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            cafe_reservation_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    avocat_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'avocat_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'avocat_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'avocat_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'avocat_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'avocat_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'avocat_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            avocat_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            avocat_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            avocat_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            avocat_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            avocat_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            avocat_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    courtier_request : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'courtier_request_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'courtier_request_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'courtier_request_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'courtier_request_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'courtier_request_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'courtier_request_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            courtier_request_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            courtier_request_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            courtier_request_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            courtier_request_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            courtier_request_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            courtier_request_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    courtier_torent : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'courtier_torent_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'courtier_torent_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'courtier_torent_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'courtier_torent_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'courtier_torent_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'courtier_torent_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            courtier_torent_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            courtier_torent_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            courtier_torent_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            courtier_torent_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            courtier_torent_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            courtier_torent_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    contracteur_service : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'contracteur_service_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'contracteur_service_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'contracteur_service_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'contracteur_service_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'contracteur_service_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'contracteur_service_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            contracteur_service_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            contracteur_service_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            contracteur_service_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            contracteur_service_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            contracteur_service_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            contracteur_service_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    architecture_service : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'architecture_service_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'architecture_service_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'architecture_service_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'architecture_service_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'architecture_service_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'architecture_service_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            architecture_service_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            architecture_service_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            architecture_service_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            architecture_service_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            architecture_service_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            architecture_service_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    veterinaire_rdv : {
        icon:'bi-check-circle-fill text-success',
        title:'حجز موعد مع طبيب',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span>  يوم الموعد  : {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  التشخيص  : {requestData.Comment}</div>  
                </> )
        },
        stepsValues : [
            {name: 'veterinaire_rdv_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'veterinaire_rdv_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'veterinaire_rdv_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'veterinaire_rdv_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'veterinaire_rdv_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'veterinaire_rdv_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            veterinaire_rdv_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            veterinaire_rdv_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            veterinaire_rdv_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            veterinaire_rdv_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            veterinaire_rdv_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            veterinaire_rdv_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    fourragerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'   طلب شراء مواد غذائية  ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                 
                <div className="mb-1"> <span className="bi bi-truck"></span>  توصيل عبر  : {requestData.Livraison_Par}</div>  
                <div className="mb-1"> <span className="bi bi-calendar"></span>   بتاريخ  : {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} | {requestData.Wanted_Time}</div>  
                <div className="mb-1"> <span className="bi bi-chat"></span>  ملاحضات : {requestData.Comment}</div>  
                <div className="mb-1"> 
                    <span className="bi bi-basket"></span> للمنتجات : 
                    <ul> 
                        {JSON.parse(requestData.Articles).map( (data,index) => <li key={index}>{data.Qte} - {data.Name}</li>)}
                    </ul>
                </div>  
                
            </> )
        },
        stepsValues : [
            {name: 'fourragerie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'fourragerie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'fourragerie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'fourragerie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'fourragerie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'fourragerie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            fourragerie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            fourragerie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            fourragerie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            fourragerie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            fourragerie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            fourragerie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },

}
export default SuivieRequestData