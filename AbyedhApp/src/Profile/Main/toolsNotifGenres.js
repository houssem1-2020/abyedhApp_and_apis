const  ToolsNotifGenres  = {
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
    //taxi 
    louage_request_saved : {
        icon:'bi-car-front text-primary',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب لواج   </div>  
                </> )
        }
    },
    louage_rdv_saved : {
        icon:'bi-calendar2-check text-warning',
        titleIcon:'bi-receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return (<>
                   <div>تم تسجيل طلب موعد مع تاكسي يوم {new Date(requestData.RDV_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )} علي الساعة {requestData.RDV_Time}    </div>  
                </> )
        }
    },
}
export default ToolsNotifGenres