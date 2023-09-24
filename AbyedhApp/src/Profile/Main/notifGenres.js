import DoctorRefuseRdv from './NotifAction/docteur'

const  NotifGenres  = {
    promting_pub : {
        icon:'bi-megaphone text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب    بنجاح  و ذلك بتاريخ  </div>  
                </> )
        }
    }, 
    docteur_rdv_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    docteur_rdv_retarder : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorRefuseRdv requestData={requestData} pidData={pidData} />
        }
    },  
    pharmacie_shop_saved: {
        icon:'bi-cart-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    pharmacie_rdv_saved: {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    clinique_reserver_saved: {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    centre_reserver_saved: {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    labo_rdv_saved: {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 


    garderie_inscription_saved : {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    librairie_shop_saved: {
        icon:'bi-basket',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء أدوات مدرسية من مكتبة  {pidData.Name} </div>  
                </> )
        }
    },

    transporteur_request_saved: {
        icon:'bi-clipboard-check',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب نقل البضائع مع صاحب الشاحنة    {pidData.Name} </div>  
                </> )
        }
    },
    autoecole_inscrie_saved : {
        icon:'bi-card-heading text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم السجيل في مدرسة  :  {pidData.Name} للحصول علي رخصة قيادة من صنف {requestData.Genre}  </div>  
                </> )
        }
    },  
    taxi_request_saved : {
        icon:'bi-car-front text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب تاكسي   </div>  
                </> )
        }
    },

    location_request_saved : {
        icon:'bi-clipboard-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم التسجيل  لكراء سيارة من   :  {pidData.Name}  </div>  
                </> )
        }
    }, 
    parking_reserver_saved : {
        icon:'bi-stopwatch text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل  حجز في موقف :  {pidData.Name} من {requestData.Depart_Time} إلي {requestData.Finish_Time} </div>  
                </> )
        }
    },
    parking_souscrire_saved : {
        icon:'bi-card-heading text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل  الأشتراك في موقف :  {pidData.Name} من {new Date(requestData.Depart_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} إلي {new Date(requestData.Finish_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} </div>  
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
        icon:'bi-check-circle text-success',
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
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  الطبق   {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 


}
export default NotifGenres