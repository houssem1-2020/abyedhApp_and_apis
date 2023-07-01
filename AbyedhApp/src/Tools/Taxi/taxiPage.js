import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Icon, Input } from 'semantic-ui-react'

function TaxiPage() {
    /* ###########################[const]############################ */
    const Items = [
        {id:1, size:4 , link:'indiv',  icon:'car-front-fill',  iconColor:'#fcba03', text:'تاكسي فردي', smallText:'ابحث عن تاكسي فردي'},
        {id:1, size:4 , link:'collectiv',  icon:'truck',  iconColor:'#fcba03', text:'تاكسي جماعي', smallText:'ابحث عن تاكسي جماعي'},
    ]

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    /* ###########################[Card]############################# */
    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <nav className="p-2 fixed-top navshad" style={{backgroundColor: GConf.Tools.taxi.themeColor}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
                                <img  className="border-div d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                                <div  className="d-lg-none d-inline-block text-white p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                        </div>
                    </div>
                </nav>
            </>)
    }

    const AdsLanding = () =>{
        return(<>
        <div className='card-body rounded-0 pt-5' style={{height:'170px', backgroundColor:'#e9ecef'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
 
                       <h3 className='mt-4'  dir='rtl' style={{color:GConf.Tools.taxi.themeColor}}> {GConf.Tools.taxi.textAds} </h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/taxi.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }
 
    const LinkCard = (props) =>{
        return(<>
            <NavLink exact='true' to={`${props.data.link}`}>
                <div className='card card-body shadow-sm mb-3 border-div'>
                    <div className='row'>
                        <div className='col-4 align-self-center'>
                             <div className="icon-shape text-white rounded-circle elevation" style={{backgroundColor: props.data.iconColor, width: `${props.data.size}rem`, height: `${props.data.size}rem`}} >
                                <i className={`bi bi-${props.data.icon} `} style={{fontSize:`${props.data.size / 2 }rem`}}></i>
                            </div>
                        </div>
                        <div className='col-8 align-self-center text-secondary text-end'>
                            <h2 className='mb-0'>{props.data.text}</h2>
                            <small> {props.data.smallText} </small>
                           <br />
                        </div>
                    </div>
                </div> 
            </NavLink>
        </>)
    }
    const ButtomCard = (props) =>{
        return(<>
            <div className={`card-body rounded-bottom-card fixed-bottom`} style={{backgroundColor:GConf.Tools.taxi.themeColor}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
        </>)
    }
    return ( <>
        <TopNavBar />
        <br />
        <br />
      
        <AdsLanding /> 
        <br />
        <br />
        <br />
        <div className='container' dir='rtl'>
            <div className='row'>
                <div className='col-12 col-md-6'><LinkCard data={Items[0]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[1]} /></div>
                 
            </div>
        </div>
         
        <ButtomCard fixed />
    </> );
}

export default TaxiPage;
