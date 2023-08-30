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
    garderie_inscription_saved : {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
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
    gym_souscription_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    boutique_shop_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    restaurant_commande_saved: {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div> تم تسجيل طلب الطبق  
                    <ul className="mb-0">
                        {JSON.parse(requestData.C_Articles).map((data,index) => <li key={index}>{data.Qte} * {data.Name}</li>)}
                    </ul>
                    في الطاولة عدد <b className="text-danger">{requestData.Table_Num}</b>   بنجاح  و ذلك بتاريخ {new Date(requestData.Wanted_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    restaurant_reservation_saved: {
        icon:'bi-check-circle-fill text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  الطبق   {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 


}
export default NotifGenres