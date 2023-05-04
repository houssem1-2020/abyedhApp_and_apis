import React from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';

function TaxiPage() {
    /* ###########################[const]############################ */
    /* ###########################[UseEffect]######################## */
    /* ###########################[Functions]######################## */
    /* ###########################[Card]############################# */
    const TopNavBar = () =>{
        let UID = localStorage.getItem('UID')
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src="https://cdn.abyedh.tn/images/p_pic/15.gif"   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <div className="rounded-0 border-0 p-2 m-0  navshad fixed-top" style={{backgroundColor: GConf.Tools.taxi.themeColor}} >
                    <div className='row m-0'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
                                <img  className="border-div" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {UID ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 ms-3 text-white"> تسجيل الدخول</NavLink>}
                        </div>
                    </div>
                </div>
            </>)
    }
    const AdsLanding = () =>{
        return(<>
        <div className='card-body rounded-0' style={{height:'170px', backgroundColor:'#e9ecef', marginTop:'55px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
                       <h3 className='text-danger' dir='rtl'>إكتشف مجموعة أدوات أبيض الإبداعية التي تغنيك عن عديد الأدوات الأخري .</h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/ads.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }
    return ( <>
        <TopNavBar />
        <AdsLanding /> 
        <br />
        <br />
        <br />
        <div className='container'>
            Taxi Page
        </div>
    </> );
}

export default TaxiPage;