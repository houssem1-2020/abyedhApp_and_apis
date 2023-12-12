import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Icon, Input } from 'semantic-ui-react'
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function BlogPage() {
    /* ###########################[const]############################ */
    const Items = [
        {id:1, size:3.2 , link:'Football',  icon:'people-fill',  iconColor:'#d91a33', text:'Alfa Romeo', smallText:'بطاقة علاج , جواز صحي, وصفة طبية , ...'},
        {id:1, size:3.2 , link:'Handball',  icon:'people-fill',  iconColor:'#d91a33', text:'Audi', smallText:'رخصة سياقة , البطاقة الرمادية ...'},
        {id:1, size:3.2 , link:'Basketball',  icon:'people-fill',  iconColor:'#d91a33', text:' Bestune', smallText:'البريد , البنوك التونسية ...'},
        {id:1, size:3.2 , link:'Volleyball',  icon:'people-fill',  iconColor:'#d91a33', text:'BMW', smallText:'أنواع المحاكم , مجلات قانونية ...'},
        {id:1, size:3.2 , link:'Tennis',  icon:'person-fill',  iconColor:'#d91a33', text:'BYD', smallText:'التسجيل للحج , رخصة بناء جامع ...'},
        {id:1, size:3.2 , link:'Judo',  icon:'person-fill',  iconColor:'#d91a33', text:' Changan', smallText:'كراس الشروط , أنشاء شركة تونسية ...'},
        {id:1, size:3.2 , link:'Natation',  icon:'person-fill',  iconColor:'#d91a33', text:'Chery ', smallText:'النقلة المدرسية , الباكالوريا, المنحة الجامعية ...'},
        {id:1, size:3.2 , link:'Athlétisme',  icon:'person-fill',  iconColor:'#d91a33', text:' Chevrolet', smallText:'جواز السفر ,الحصول علي فيزا ...'},
        {id:1, size:3.2 , link:'Boxe',  icon:'person-fill',  iconColor:'#d91a33', text:'Cupra', smallText:'بطاقة التعريف , مضمو ولادة ...'},
        {id:1, size:3.2 , link:'Karaté',  icon:'person-fill',  iconColor:'#d91a33', text:'Dacia', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Taekwondo',  icon:'person-fill',  iconColor:'#d91a33', text:'DFSK', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Escrime',  icon:'person-fill',  iconColor:'#d91a33', text:'Dongfeng', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Gymnastique',  icon:'person-fill',  iconColor:'#d91a33', text:'Faw', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Cyclisme',  icon:'person-fill',  iconColor:'#d91a33', text:'Fiat', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Équitation',  icon:'person-fill',  iconColor:'#d91a33', text:'Foday', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Golf',  icon:'person-fill',  iconColor:'#d91a33', text:'Ford', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Sports_nautiques',  icon:'person-fill',  iconColor:'#d91a33', text:'GAC', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Geely', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Great', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Haval', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Huanghai', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Hyundai', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Jaguar', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Jeep', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'KIA', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Land Rover', smallText:'المنح الإجتماعية , التأمين ...'},
        {id:1, size:3.2 , link:'Pétanque',  icon:'person-fill',  iconColor:'#d91a33', text:'Mahindra', smallText:'المنح الإجتماعية , التأمين ...'},
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
                       <h3  dir='rtl' style={{color:GConf.Tools.Automobile.themeColor}}> {GConf.Tools.Automobile.textAds} </h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/sport.svg' className='img-responsive' width='40%' height='40%'  />
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
                        <div className='col-12 align-self-center text-secondary text-center'>
                            {/* <i className={`bi bi-${props.data.icon} `}></i> */}
                            <h3 className='mb-0 text-truncate' style={{color:GConf.Tools.Automobile.themeColor}}> {props.data.text}</h3>
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
        <br />
        <AdsLanding /> 
        <br />
        
        <div className='container' dir='rtl'>
            <SearchBarCard />
            <Swiper
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper pb-4 mb-1"
            >
                    
                <SwiperSlide  key={0}>
                    <div className='row p-0  justify-content-center'>
                        <div className='col-5 m-0'><LinkCard data={Items[0]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[1]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[2]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[3]} /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={1}>
                    <div className='row p-0  justify-content-center'>
                        <div className='col-5 m-0'><LinkCard data={Items[4]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[5]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[6]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[7]} /></div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            <br />
            <Swiper
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper pb-4 mb-1"
            >
                    
                <SwiperSlide key={0}>
                    <div className='row p-0  justify-content-center'>
                        <div className='col-5 m-0'><LinkCard data={Items[8]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[9]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[10]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[11]} /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={1}>
                    <div className='row p-0  justify-content-center'>
                        <div className='col-5 m-0'><LinkCard data={Items[12]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[13]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[14]} /></div>
                        <div className='col-5 m-0'><LinkCard data={Items[15]} /></div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <div className='row p-2'>
                <div className='col-6 col-md-6'><LinkCard data={Items[16]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[17]} /></div>
            </div>
            {/* <div className='row'>
                <div className='col-6 col-md-6'><LinkCard data={Items[0]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[1]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[2]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[3]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[4]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[5]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[6]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[7]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[8]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[9]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[10]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[11]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[12]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[13]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[14]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[15]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[16]} /></div>
                <div className='col-6 col-md-6'><LinkCard data={Items[17]} /></div>
            </div> */}
        </div>
        <ButtomCard /> 
    </> );
}

export default BlogPage;