import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Button, Icon, Input } from 'semantic-ui-react'
import { useNavigate} from 'react-router-dom';

function TaxiPage() {
    /* ###########################[const]############################ */
    const Items = [
        {id:1, size:4 , link:'indiv',  icon:'car-front-fill',  iconColor:'#fcba03', text:'تاكسي فردي', smallText:'ابحث عن تاكسي فردي'},
        {id:1, size:4 , link:'collectiv',  icon:'truck',  iconColor:'#fcba03', text:'تاكسي جماعي', smallText:'ابحث عن تاكسي جماعي'},
    ]
    const navigate = useNavigate();
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
                <nav className="p-2 fixed-top navshad" style={{backgroundColor: 'white'}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
                                <img  className="border-div-s d-none d-lg-inline border bg-danger " src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                <div  className="d-lg-none d-inline-block text-secondary p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
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
        <div className='card-body rounded-0 pt-5' style={{height:'170px', backgroundColor:'white'}}>
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
            <div className={`card-body rounded-bottom-card `} style={{backgroundColor: '#dc3545'}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
        </>)
    }
    const SystemLinkCard = () =>{
        return(<>
            <div className='card p-2 shadow-sm mb-2 border-div' dir='ltr'>
                <h5 className='text-end text-secondary mb-1 mt-2' dir='rtl'> هَلْ أَنْتَ   صاحب تاكسي و تريد إضافة نفسك للمنصة   ؟ </h5>
                {/* <a href={`/S/I/add/${tag}`} className=' text-secondary ' ></a> */}
                <div className='row mt-0 pt-0 '>
                    <div className='col-3 align-self-center text-center'>
                        <img src={`https://cdn.abyedh.tn/images/ads/taxi.svg`} className=' mt-3 img-responsive mb-1 ms-2' width='100%'  height='auto' alt='abyedh.tn' />
                    </div>
                    <div className='col-9 align-self-center text-center'>
                        <p> إِكْتَشِفْ النسخة  المصغرة لـنظام إدارة التاكسي اللّي تعُاوْنِكْ  إِنّكْ تَعَرِّفْ بنَفْسِكْ و تستقبل طلبات عملائك    </p>
                        {/* <p >   <b style={{color:GConf.Tools.taxi.themeColor}}>{GConf.ADIL[tag].systemName}</b> يعُاوْنِكْ  بَاشْ تَعَرِّفْ بنَفْسِكْ و تَعَرِّفْ بخَدِمْتِكْ  </p> */}
                        {/* {localStorage.getItem('AddToDirectory') ? <Button className='rounded-pill text-secondary' style={{backgroundColor:'white'}} size='tiny' onClick={() => navigate(`/S/I/user/${tag}`)}> متابعة عملية التسجيل </Button>  : <></>}  */}
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-6 align-self-center text-start'><Button className='rounded-pill mb-2' style={{backgroundColor:'#f0f0f0', color : GConf.Tools.taxi.themeColor}} size='tiny' onClick={() => navigate(`/Tools/Taxi/add`)}> التسجيل في النظام </Button></div>
                        <div className='col-6 align-self-center text-end'><Button className='rounded-pill text-white mb-2' style={{backgroundColor:GConf.Tools.taxi.themeColor}} size='tiny' onClick={() => navigate(`/Tools/Taxi/app`)}>  الدخول للنظام </Button></div>
                    </div>
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
            <br />
            <br />
            <SystemLinkCard />
        </div>
        <br />
        <ButtomCard />
    </> );
}

export default TaxiPage;
