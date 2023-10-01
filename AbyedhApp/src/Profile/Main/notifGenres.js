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
    taxi_rdv_saved : {
        icon:'bi-calendar2-check text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع تاكسي يوم {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.RDV_Time}    </div>  
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
    qiosque_request_saved : {
        icon:'bi-cart-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل طلب شراء وقود من    :  {pidData.Name}  </div>  
                </> )
        }
    },
    qiosque_lavage_saved : {
        icon:'bi-calendar-event text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل طلب موعد {requestData.Wash_Genre} من  {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    electromenager_shop_saved: {
        icon:'bi-cart4',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء آلات كهرومنزلية   من  متجر   {pidData.Name} </div>  
                </> )
        }
    },
    meubles_shop_saved: {
        icon:'bi-cart4',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء أثاث   من  متجر   {pidData.Name} </div>  
                </> )
        }
    },

    coiffure_reserver_saved : {
        icon:'bi-scissors text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    boutique_shop_saved : {
        icon:'bi-bag-heart text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء ملابس   من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    bijouterie_shop_saved : {
        icon:'bi-gem text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مجوهرات  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    salon_marriage_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    chef_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    orchestre_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    photographe_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    fourniture_marriage_location_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },

    magazin_commande_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    boulangerie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء خبز  من  مخبزة   {pidData.Name} </div>  
             </> )
        }

    },
    boucheries_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء لحوم  من  مجزرة   {pidData.Name} </div>  
             </> )
        }

    },
    fruiterie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    patisserie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء خبز  من  مخبزة   {pidData.Name} </div>  
             </> )
        }

    },
    epicerie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء لحوم  من  مجزرة   {pidData.Name} </div>  
             </> )
        }

    },
    quincaillerie_shop_saved : {
        icon:'bi-wrench text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء أدوات  من  محل   {pidData.Name} </div>  
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
 
 
    gym_souscription_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    
    pyscine_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    pyscine_souscrire_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    stade_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    stade_souscrire_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    cinema_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    theatre_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    art_avis_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    musee_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    hotels_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    hotels_service_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    agence_service_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    depot_commande_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    comptable_service_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
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
    cafe_commande_saved: {
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
    cafe_reservation_saved: {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  الطبق   {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    avocat_rdv_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع المحامي {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    courtier_request_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب {requestData.Req_Genre} {requestData.Immob_Genre} من الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },
    courtier_torent_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل    {requestData.Immob_Genre} {requestData.Req_Genre} مع الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },
    contracteur_service_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل    {requestData.Immob_Genre} {requestData.Req_Genre} مع الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },
    architecture_service_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل    {requestData.Immob_Genre} {requestData.Req_Genre} مع الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },

}
export default NotifGenres