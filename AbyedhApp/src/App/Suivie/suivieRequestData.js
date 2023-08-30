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
        stepsValues : {
            docteur_rdv_saved:{value:'20'},
            docteur_rdv_seen:{value:'50'}
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
        stepsValues : {
            pharmacie_shop_saved:{value:'20'},
            pharmacie_shop_seen:{value:'50'}
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
        stepsValues : {
            pharmacie_rdv_saved:{value:'20'},
            pharmacie_rdv_seen:{value:'50'}
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
        stepsValues : {
            garderie_inscription_saved:{value:'20'},
            garderie_inscription_seen:{value:'50'}
        }

    },
    autoecole_inscrie : {
        icon:'bi-check-circle-fill text-success',
        title:' تسجيل للحصول علي رخصة سياقة ',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                    <div className="mb-1"> <span className="bi bi-tag"></span> نوع الرخصة : {requestData.type}</div>  
                    <div className="mb-1"> <span className="bi bi-calendar"></span> تاريخ البدء : {new Date(requestData.start).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                    <div className="mb-1"> <span className="bi bi-chat-square-dots"></span>  ملاحضات : {requestData.comment}</div>  
                </> )
        },
        stepsValues : {
            autoecole_inscrie_saved:{value:'20'},
            autoecole_inscrie_seen:{value:'50'}
        }

    },  
    avocat_souscrire : {
        icon:'bi-pencil-square text-info',
        title:'تسجيل قضية عند محامي',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            avocat_souscrire_saved:{value:'20'}
        }

    },
    avocat_rdv : {
        icon:'bi-pencil-square text-info',
        title:'طلب موعد مع محامي',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            avocat_rdv_saved:{value:'20'}
        }

    },
    boutique_shop : {
        icon:'bi-pencil-square text-info',
        title:'شراء ملابس جاهزة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            autoecole_inscrie_saved:{value:'20'}
        }

    },
    pv_boulangerie_shop : {
        icon:'bi-pencil-square text-info',
        title:'شراء خبز ',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            autoecole_inscrie_saved:{value:'20'}
        }

    },
    gym_souscription : {
        icon:'bi-pencil-square text-info',
        title:'الإشتراك في قاعة رياضة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            gym_souscription_saved:{value:'20'}
        }

    },
    boutique_shop : {
        icon:'bi-pencil-square text-info',
        title:'التسجيل في مدرسة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            autoecole_inscrie_saved:{value:'20'}
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
        stepsValues : {
            restaurant_commande_saved:{value:'20'},
            restaurant_commande_seen:{value:'50'},
            restaurant_commande_accepted:{value:'80'},
            restaurant_commande_completed:{value:'100'},
            restaurant_commande_rejected:{value:'100'},
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
        stepsValues : {
            pharmacie_rdv_saved:{value:'20'},
            pharmacie_rdv_seen:{value:'50'}
        }

    },


}
export default SuivieRequestData