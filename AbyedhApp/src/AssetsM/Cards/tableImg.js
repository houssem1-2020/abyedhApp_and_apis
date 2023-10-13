import React from 'react';
function TableImage(props) {
     
    return (<> <img className='rounded-circle' 
                    width="40px" 
                    height="40px" 
                    src={props.forUser ? `https://cdn.abyedh.tn/images/p_pic/${props.image}.gif` : `https://cdn.abyedh.tn/images/ads/shared/${props.image}`} alt="user-img" 
                /> </>);
}

export default TableImage