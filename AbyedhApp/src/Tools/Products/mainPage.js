import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Icon, Input } from 'semantic-ui-react'

function ProductsPage() {
    /* ###########################[const]############################ */
    const Items = [
        {id:1, size:4 , link:'sante',  icon:'capsule-pill',  iconColor:'#d91a33', text:'طبية و شبه طبية', smallText:'أدوية , منتجات شبه طبية, ...'},
        {id:2, size:4 , link:'education',  icon:'mortarboard',  iconColor:'#d91a33', text:'تعليم', smallText:'كتب , كراسات , أدوات...'},
        {id:3, size:4 , link:'transport',  icon:'car-front-fill',  iconColor:'#d91a33', text:'نقل و تنقل', smallText:' سيارات , دراجات , شاحنات ... '},
        {id:4, size:4 , link:'vetements',  icon:'gift-fill',  iconColor:'#d91a33', text:' ملابس ', smallText:'ملابس رجال , ملابس نساء , أحذية ...'},
        {id:5, size:4 , link:'alimentaire',  icon:'cart4',  iconColor:'#d91a33', text:' مواد غذائية', smallText:' مصبرات , بسكويت , معجنات...'},
        {id:6, size:4 , link:'cosmetique',  icon:'virus',  iconColor:'#d91a33', text:' نظافة و تجميل', smallText:' مواد نظافة , مواد تجميل , مواد منزلية ...'},
        {id:7, size:4 , link:'technologie',  icon:'motherboard-fill',  iconColor:'#d91a33', text:'تكنولوجيا ', smallText:' هواتف , ثلاجات , آلة غسيل ...'},
        {id:8, size:4 , link:'construction',  icon:'building',  iconColor:'#d91a33', text:' بناء ', smallText:'مواد بناء , مواد طلاء ...'},
        {id:9, size:4 , link:'outils',  icon:'dice-3-fill',  iconColor:'#d91a33', text:' أدوات ', smallText:'مواد كهربائية , بلاستيك ...'},
        {id:10, size:4 , link:'mecanique',  icon:'truck',  iconColor:'#d91a33', text:' ميكانيك ', smallText:'آلات فلاحية , آلات بناء ...'},
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
                <nav className="p-2 fixed-top navshad" style={{backgroundColor: 'white'}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
                                <img  className="border-div-s d-none d-lg-inline border bg-danger" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
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
        <div className='card-body rounded-0' style={{height:'170px', backgroundColor:'white', marginTop:'55px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
                       <h3  dir='rtl' style={{color:GConf.Tools.products.themeColor}}> {GConf.Tools.products.textAds} </h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='http://www.localhost/Abyedh/Tools/images/products.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }
    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card' style={{backgroundColor:'#dc3545'}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
        </>)
    }
    const LinkCard = (props) =>{
        return(<>
            <NavLink exact='true' to={`landing/${props.data.link}`}>
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
    const SearchBarCard = () =>{
        return(<>
            <div className='mb-4'>
                <Input
                    fluid 
                    size='big'
                    icon={ <Icon name='search' inverted circular link onClick/>}
                    placeholder='بحث'
                    
                />
            </div>
        </>)
    }
    return ( <>
        <TopNavBar />
        <AdsLanding /> 
        <br />
        <br />
        <br />
        <div className='container' dir='rtl'>
            <SearchBarCard />
            <div className='row'>
                <div className='col-12 col-md-6'><LinkCard data={Items[0]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[1]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[2]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[3]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[4]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[5]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[6]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[7]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[8]} /></div>
                <div className='col-12 col-md-6'><LinkCard data={Items[9]} /></div>
            </div>
        </div>
        <ButtomCard /> 
    </> );
}

export default ProductsPage;