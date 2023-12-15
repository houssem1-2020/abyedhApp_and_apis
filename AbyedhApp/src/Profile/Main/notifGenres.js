import DoctorAcceptRdv from './NotifAction/docteur_accepted'
import DoctorReatartedRdv from './NotifAction/docteur_retarted'
import PharmacieAcceptShop from './NotifAction/pharmacie_shop_accepted'
import PharmacieEditedShop from './NotifAction/docteur_retarted'
import PharmacieReatartedRdv from './NotifAction/docteur_retarted'

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
    //docteur
    docteur_rdv_saved : {
        icon:'bi-calendar2-plus text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    docteur_rdv_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    docteur_rdv_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    docteur_rdv_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    docteur_rdv_redirected : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم توجيه طلب موعد مع الطبيب {pidData.Name}   إلي الطبيب {JSON.parse(requestData.Redirected_To).Name}  ( الهاتف :  {JSON.parse(requestData.Redirected_To).Phone} , العنوان : {JSON.parse(requestData.Redirected_To).Adresse} ) </div>  
                </> )
        }
    },
    //docteur
    infirmier_rdv_saved : {
        icon:'bi-calendar2-plus text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    infirmier_rdv_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    infirmier_rdv_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    infirmier_rdv_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    infirmier_rdv_redirected : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم توجيه طلب موعد مع الطبيب {pidData.Name}   إلي الطبيب {JSON.parse(requestData.Redirected_To).Name}  ( الهاتف :  {JSON.parse(requestData.Redirected_To).Phone} , العنوان : {JSON.parse(requestData.Redirected_To).Adresse} ) </div>  
                </> )
        }
    },

    //pharmacie_shop
    pharmacie_shop_saved: {
        icon:'bi-cart-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    pharmacie_shop_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    pharmacie_shop_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    pharmacie_shop_livred : {
        icon:'bi-truck text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم إرسال الطلب من صيدلية  {pidData.Name} <br /> <small> سيضلك الطلب يوم {JSON.parse(requestData.Livre_At).Date} مع الساعة {JSON.parse(requestData.Livre_At).Temps}</small></div>  
             </> )
        }
    },  
    pharmacie_shop_edited : {
        icon:'bi-pencil-square text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تعديل طلب الشراء من الصيدلة  {pidData.Name}    </div>  
                </> )
        }
    },
    //pharmacie_rdv
    pharmacie_rdv_saved: {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    pharmacie_rdv_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    pharmacie_rdv_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    pharmacie_rdv_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
             </> )
        }
    },  
    //clinique
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
    //laboratoire 
    labo_rdv_saved : {
        icon:'bi-calendar2-plus text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    labo_rdv_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    labo_rdv_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    labo_rdv_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    labo_rdv_pret : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div> نتيجة التحليل في مخبر  {pidData.Name} جاهزة :   </div>  
                </> )
        }
    },
    //garderie_inscription 
    garderie_inscription_saved : {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    garderie_inscription_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    garderie_inscription_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //garderie_souscription 
    garderie_souscription_saved : {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    garderie_souscription_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    garderie_souscription_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },

    //formation_inscription 
    formation_inscription_saved : {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    formation_inscription_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    formation_inscription_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //formation_souscription 
    formation_souscription_saved : {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل صغيرك {requestData.EL_Name} في روضة  {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.R_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    formation_souscription_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <PharmacieAcceptShop requestData={requestData} pidData={pidData} />
        }
    }, 
    formation_souscription_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب   طلب شراء الأدوية من صيدلية      {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },

    //librairie 
    librairie_shop_saved: {
        icon:'bi-basket',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء أدوات مدرسية من مكتبة  {pidData.Name} </div>  
                </> )
        }
    },
    //transporteur 
    transporteur_request_saved: {
        icon:'bi-clipboard-check',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب نقل البضائع مع صاحب الشاحنة    {pidData.Name} </div>  
                </> )
        }
    },
    transporteur_request_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    transporteur_request_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    transporteur_request_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    transporteur_request_livree : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div> نتيجة التحليل في مخبر  {pidData.Name} جاهزة :   </div>  
                </> )
        }
    },
    //autoecole 
    autoecole_inscrie_saved : {
        icon:'bi-card-heading text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم السجيل في مدرسة  :  {pidData.Name} للحصول علي رخصة قيادة من صنف {requestData.Genre}  </div>  
                </> )
        }
    },  
    autoecole_inscrie_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    autoecole_inscrie_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },  
    autoecole_inscrie_redirected : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم توجيه طلب موعد مع الطبيب {pidData.Name}   إلي الطبيب {JSON.parse(requestData.Redirected_To).Name}  ( الهاتف :  {JSON.parse(requestData.Redirected_To).Phone} , العنوان : {JSON.parse(requestData.Redirected_To).Adresse} ) </div>  
                </> )
        }
    },
    //taxi 
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
    //location 
    location_request_saved : {
        icon:'bi-clipboard-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم التسجيل  لكراء سيارة من   :  {pidData.Name}  </div>  
                </> )
        }
    },  
    location_request_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    },
    location_request_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    location_request_edited : {
        icon:'bi-pencil-square text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تعديل طلب الشراء من الصيدلة  {pidData.Name}    </div>  
                </> )
        }
    },
    //parking 
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
    //qiosque 
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
    //electromenager 
    electromenager_shop_saved: {
        icon:'bi-cart4',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء آلات كهرومنزلية   من  متجر   {pidData.Name} </div>  
                </> )
        }
    },
    //meuble 
    meubles_shop_saved: {
        icon:'bi-cart4',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  شراء أثاث   من  متجر   {pidData.Name} </div>  
                </> )
        }
    },
    //coiffure 
    coiffure_reserver_saved : {
        icon:'bi-scissors text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    coiffure_reserver_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    coiffure_reserver_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    coiffure_reserver_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },
    //boutique 
    boutique_shop_saved : {
        icon:'bi-bag-heart text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء ملابس   من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //bijouterie 
    bijouterie_shop_saved : {
        icon:'bi-gem text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مجوهرات  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //sallon_marriage 
    salon_marriage_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    //chef 
    chef_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    //orchestre 
    orchestre_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    //photographe 
    photographe_reserver_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    //fourniture_marriage 
    fourniture_marriage_location_saved : {
        icon:'bi-calendar2-date text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تسجيل    طلب حجز في قاعة الحلاقة   {pidData.Name} يوم {new Date(requestData.Wanted_Day).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.Wanted_Time}</div>  
                </> )
        }
    },
    //magazin 
    magazin_commande_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //boulengerie 
    boulangerie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء خبز  من  مخبزة   {pidData.Name} </div>  
             </> )
        }

    },
    //boucherie 
    boucheries_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء لحوم  من  مجزرة   {pidData.Name} </div>  
             </> )
        }

    },
    //fruiterie 
    fruiterie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //patisserie 
    patisserie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء خبز  من  مخبزة   {pidData.Name} </div>  
             </> )
        }

    },
    //epicerie 
    epicerie_shop_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء لحوم  من  مجزرة   {pidData.Name} </div>  
             </> )
        }

    },
    //quicaillerie 
    quincaillerie_shop_saved : {
        icon:'bi-wrench text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء أدوات  من  محل   {pidData.Name} </div>  
             </> )
        }

    },
    //avocat 
    avocat_souscrire_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    avocat_souscrire_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    avocat_souscrire_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    avocat_souscrire_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    avocat_souscrire_redirected : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم توجيه طلب موعد مع الطبيب {pidData.Name}   إلي الطبيب {JSON.parse(requestData.Redirected_To).Name}  ( الهاتف :  {JSON.parse(requestData.Redirected_To).Phone} , العنوان : {JSON.parse(requestData.Redirected_To).Adresse} ) </div>  
                </> )
        }
    },
    avocat_souscrire_informer : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },

    avocat_rdv_saved : {
        icon:'bi-pencil-square text-info',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        }

    },
    avocat_rdv_saved_2 : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع المحامي {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    //gym 
    gym_souscription_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    gym_souscription_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    gym_souscription_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //pyscine 
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
    //stade 
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
    //cinema 
    cinema_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    //theatre 
    theatre_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    //avis 
    art_avis_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    //musee 
    musee_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الإشتراك  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    //hotels_reserver 
    hotels_reserver_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    hotels_reserver_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    hotels_reserver_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //hotels_service
    hotels_service_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    hotels_service_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    hotels_service_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //agence 
    agence_service_saved : {
        icon:'bi-card-checklist text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب الحجز في نزل  {requestData.Ab_Genre} في قاعة الرياضة   {pidData.Name}  بنجاح  . تم تسجيل الإنطلاق ليوم  {new Date(requestData.Start_At).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}  </div>  
             </> )}

    },
    //depot 
    depot_commande_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //comptable 
    comptable_service_saved : {
        icon:'bi-cart4 text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء مواد غذائية  من  متجر   {pidData.Name} </div>  
             </> )
        }

    },
    //restaurant_commande 
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
    restaurant_commande_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    },
    restaurant_commande_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    //restaurant_reservation
    restaurant_reservation_saved: {
        icon:'bi-check-circle text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب  الطبق   {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    }, 
    restaurant_reservation_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    },
    restaurant_reservation_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    restaurant_reservation_edited : {
        icon:'bi-pencil-square text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم  تعديل طلب الشراء من الصيدلة  {pidData.Name}    </div>  
                </> )
        }
    },
    //cafe 
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
    //courtier 
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
    //contracteur 
    contracteur_service_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل    {requestData.Immob_Genre} {requestData.Req_Genre} مع الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },
    //architecte 
    architecture_service_saved : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل    {requestData.Immob_Genre} {requestData.Req_Genre} مع الوسيط     {pidData.Name}  </div>  
                </> )
        }
    },
    //veterinaire
    veterinaire_rdv_saved : {
        icon:'bi-calendar2-plus text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع الطبيب {pidData.Name}  بنجاح  و ذلك بتاريخ {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</div>  
                </> )
        }
    },
    veterinaire_rdv_accepted : {
        icon:'bi-calendar-check text-success',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorAcceptRdv requestData={requestData} pidData={pidData} />
        }
    }, 
    veterinaire_rdv_rejected : {
        icon:'bi-calendar-x text-danger',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم رفض طلب الموعد مع الطبيب {pidData.Name} <br /> <small>"{requestData.Refuser_Cause}"</small></div>  
                </> )
        }
    },
    veterinaire_rdv_retarted : {
        icon:'bi-arrow-clockwise text-info',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return <DoctorReatartedRdv requestData={requestData} pidData={pidData} />
        }
    },  
    veterinaire_rdv_redirected : {
        icon:'bi-arrow-90deg-right text-secondary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم توجيه طلب موعد مع الطبيب {pidData.Name}   إلي الطبيب {JSON.parse(requestData.Redirected_To).Name}  ( الهاتف :  {JSON.parse(requestData.Redirected_To).Phone} , العنوان : {JSON.parse(requestData.Redirected_To).Adresse} ) </div>  
                </> )
        }
    },
    //fourragerie 
    fourragerie_shop_saved : {
        icon:'bi-wrench text-success',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                <div>تم تسجيل طلب  شراء أدوات  من  محل   {pidData.Name} </div>  
             </> )
        }

    },


}
export default NotifGenres