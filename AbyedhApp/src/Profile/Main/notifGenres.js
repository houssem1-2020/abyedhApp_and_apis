const  NotifGenres  = {
    docteur_rdv_saved : {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },  
    pharmacie_shop_saved: {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    pharmacie_rdv_saved: {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    garderie_inscrie_saved : {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    autoecole_inscrie_saved : {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم السجيل في مدرسة  :  {pidData.Name} للحصول علي رخصة قيادة من صنف {requestData.type} بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },  
    avocat_souscrire_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    avocat_rdv_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    boutique_shop_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    pv_boulangerie_shop_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    sport_salle_souscrire_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    boutique_shop_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },



}
export default NotifGenres