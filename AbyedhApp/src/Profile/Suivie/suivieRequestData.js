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
    boutique_shop : {
        icon:'bi-pencil-square text-info',
        title:'شراء ملابس جاهزة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
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
    pv_boulangerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'شراء خبز ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : [
            {name: 'boulengerie_shop_saved' , value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            {name :'boulengerie_shop_seen', value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:1},
            {name :'boulengerie_shop_accepted ', value:'100', text:'قبول الموعد', icon:'calendar outline', color:'gray', line:'toAccept', step:2},
            {name :'boulengerie_shop_rejected ', value:'100', text:' رفض الموعد', icon:'calendar times outline', color:'gray', line:'toReject', step:2},
            {name :'boulengerie_shop_retarder ', value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'toRetarder', step:2},
            {name :'boulengerie_shop_redirected ', value:'80', text:' توجيه الموعد', icon:'doctor', color:'gray', line:'toRedirect', step:0},
        ],
        stepsValues2 : {
            boulengerie_shop_saved:{value:'20', text:'تسجيل الطلب', icon:'check', color:'green', line:'all', step:0},
            boulengerie_shop_seen:{value:'50', text:'إستلام الطلب', icon:'eye', color:'gray', line:'all', step:0},
            boulengerie_shop_accepted :{value:'100', text:'قبول الموعد', icon:'calendar-plus', color:'gray', line:'all', step:0},
            boulengerie_shop_rejected :{value:'100', text:' رفض الموعد', icon:'shield-x', color:'gray', line:'all', step:0},
            boulengerie_shop_retarder :{value:'80', text:' تأجيل الموعد', icon:'calendar times outline', color:'gray', line:'all', step:0},
            boulengerie_shop_redirected :{value:'80', text:' توجيه الموعد', icon:'person', color:'gray', line:'all', step:0},
        }

    },
    gym_souscription : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
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
    boutique_shop : {
        icon:'bi-pencil-square text-info',
        title:'التسجيل في مدرسة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
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


}
export default SuivieRequestData