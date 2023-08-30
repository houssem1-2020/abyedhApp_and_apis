import React, { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import SanteDocumments from './DocummentsCards/sante'; 
import EducationDocumments from './DocummentsCards/education';
import TransportDocumments from './DocummentsCards/transport';
import FinanceDocumments from './DocummentsCards/finance';
import CivileDocumments from './DocummentsCards/civile'; 
import SportDocumments from './DocummentsCards/sport'; 
import SocialeDocumments from './DocummentsCards/sociale'; 
import DocummentDocumments from './DocummentsCards/document'; 
import SouscriptionsDocumments from './DocummentsCards/souscription'; 
import FacturesDocumments from './DocummentsCards/factures'; 
import TicketsDocumments from './DocummentsCards/ticket'; 


function DocummentLanding() {
    /* ############### Const #################*/
    let {g} = useParams()
    let UID = localStorage.getItem('UID')
 

    /* ############### Card  #################*/
    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'sante': return <SanteDocumments TAG={g} PID={45858588555} UID={UID} />;  
            case 'education': return <EducationDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'transport': return <TransportDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'finance': return <FinanceDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'civile': return <CivileDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'sport': return <SportDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'sociale': return <SocialeDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'document': return <DocummentDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'souscription': return <SouscriptionsDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'factures': return <FacturesDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            case 'ticket': return <TicketsDocumments TAG={g} PID={45858588555} UID={UID} /> ;
            default:  return <StateCard color='secondary' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };

    return (  <>
            <StateCard status={g} />
            </>);
}

export default DocummentLanding;