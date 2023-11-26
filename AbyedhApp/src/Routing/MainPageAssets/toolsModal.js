import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ToolsModal({selectedToolsModal}) {
    // const [selectedToolsModal, setSelectedToolsModal] = useState([])

    return ( <>
        {selectedToolsModal.map((data,index) => 
            <div className='col-4 col-lg-2 mb-3' key={index}>
                <NavLink exact='true' to={`${data.link}`} >
                    <div className='card p-0 shadow-sm mb-3 text-center border-div  '>
                    <div className='mb-2'><img src={`https://cdn.abyedh.tn/images/Tools/${data.img}`} className='img-responsive ' width='60px' height='60px' /></div>    
                    </div>
                    <div className='mb-2 text-center text-secondary'><h6><b>{data.name}</b></h6></div> 
                </NavLink>
            </div>
        )}

    </> );
}

export default ToolsModal;