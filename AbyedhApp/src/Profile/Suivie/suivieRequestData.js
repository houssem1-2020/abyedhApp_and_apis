const  SuivieRequestData  = {
    docteur_rdv : {
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
            docteur_rdv_saved:{value:'20'},
            docteur_rdv_seen:{value:'50'}
        }

    },
    pharmacie_shop: {
        icon:'bi-check-circle-fill text-success',
        title:' تسجيل للحصول علي رخصة سياقة ',
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
            pharmacie_rdv_saved:{value:'20'},
            pharmacie_rdv_seen:{value:'50'}
        }

    },
    garderie_inscrie : {
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
            garderie_inscrie_saved:{value:'20'},
            garderie_inscrie_seen:{value:'50'}
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
        title:'التسجيل في مدرسة',
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
        title:'التسجيل في مدرسة',
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
        title:'التسجيل في مدرسة',
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
        title:'التسجيل في مدرسة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            autoecole_inscrie_saved:{value:'20'}
        }

    },
    gym_souscrire : {
        icon:'bi-pencil-square text-info',
        title:'التسجيل في مدرسة',
        titleIcon:'receipt-cutoff',
        GenTextFunction : function(requestData,pidData){
            return ('La Commande  pour : ' + requestData.R_ID + ' en totale ' + requestData.State + 'a ete modifier ')
        },
        stepsValues : {
            gym_souscrire_saved:{value:'20'}
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



}
export default SuivieRequestData