import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Icon, Input } from 'semantic-ui-react'
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Ripples from 'react-ripples'
import { useState } from 'react';

function BlogPage() {
    /* ###########################[const]############################ */
    const [isSelected, setisSelected] = useState(0);

    const subCatagSmall =  [
        [
            { id: 1, name: 'القطاع الصحي', value: 'dentiste', imgSrc: 'univ_economy' },
            { id: 2, name: 'القطاع التعليمي', value: 'dentiste', imgSrc: 'univ_sn' }, 
            { id: 3, name: ' قطاع النقل', value: 'dentiste', imgSrc: 'univ_sn' },
            { id: 4, name: ' القطاع السياحي', value: 'dentiste', imgSrc: 'univ_engeneering' },
        ],
        [   
            { id: 5, name: 'القطاع الثقافي', value: 'dentiste', imgSrc: 'univ_engeneering' },
            { id: 6, name: 'القطاع القانوني', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 7, name: 'القطاع الفني', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 8, name: 'القطاع الصناعي', value: 'dentiste', imgSrc: 'univ_language' },
        ]   
    ]
    const subCatagLarge =[
        [
            { id: 1, name: 'القطاع الصحي', value: 'dentiste', imgSrc: 'univ_economy' },
            { id: 2, name: 'القطاع التعليمي', value: 'dentiste', imgSrc: 'univ_sn' }, 
            { id: 3, name: ' قطاع النقل', value: 'dentiste', imgSrc: 'univ_sn' },
            { id: 4, name: ' القطاع السياحي', value: 'dentiste', imgSrc: 'univ_engeneering' },  
            { id: 5, name: 'القطاع الثقافي', value: 'dentiste', imgSrc: 'univ_engeneering' },
            { id: 6, name: 'القطاع القانوني', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 7, name: 'القطاع الفني', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 8, name: 'القطاع الصناعي', value: 'dentiste', imgSrc: 'univ_language' },
        ]
    ]
    const subCateg =[
        { id: 1, name: 'القطاع الصحي', value: 'dentiste', imgSrc: 'univ_economy' },
        { id: 2, name: 'القطاع التعليمي', value: 'dentiste', imgSrc: 'univ_sn' }, 
        { id: 3, name: ' قطاع النقل', value: 'dentiste', imgSrc: 'univ_sn' },
        { id: 4, name: ' القطاع السياحي', value: 'dentiste', imgSrc: 'univ_engeneering' },  
        { id: 5, name: 'القطاع الثقافي', value: 'dentiste', imgSrc: 'univ_engeneering' },
        { id: 6, name: 'القطاع القانوني', value: 'dentiste', imgSrc: 'univ_language' },
        { id: 7, name: 'القطاع الفني', value: 'dentiste', imgSrc: 'univ_language' },
        { id: 8, name: 'القطاع الصناعي', value: 'dentiste', imgSrc: 'univ_language' },
    ]

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    /* ###########################[Card]############################# */
    const  capitalizeFirstLetter = (string) =>{
        return (string.charAt(0).toUpperCase() + string.slice(1)).charAt(0);
    }
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
    const ItmesList = ({ option, selected, onChange }) => {
        return (
                <Ripples className='shadow-sm  m-1 border-div d-block'>
                <div className={`card p-2 ps-3 border-div ${selected ? 'border-selected' : ''}`}  selected={selected} onClick={onChange} style={{cursor:'pointer'}}>
                    <div className='row'>
                        <div className='col-4 text-center m-0 p-0'><img src={`https://cdn.abyedh.tn/images/Search/Land_icons/${option.imgSrc}.gif`} className='img-responsive' width='40px' height='40px' /></div>
                        <div className='col-8 text-center m-0 p-0  align-self-center'><b>{option.name}</b></div>
                    </div>
                </div>
                </Ripples>
        );
    }
    const AdsLanding = () =>{
        return(<>
        <div className='card-body rounded-0' style={{height:'170px', backgroundColor:'white', marginTop:'55px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
                       <h3  dir='rtl' style={{color: GConf.Tools.Jobs.themeColor}}> {GConf.Tools.Jobs.textAds} </h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/jobs.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }
    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card' style={{backgroundColor: '#dc3545'}}>
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
                        <div className='col-5 align-self-center'>
                             <div className="icon-shape text-white rounded-circle elevation" style={{backgroundColor:  GConf.Tools.Jobs.themeColor, width: `${props.data.size}rem`, height: `${props.data.size}rem`}} >
                                <span className={`bi  i-${props.data.icon} `} style={{fontSize:`${props.data.size / 2 }rem`}}>{capitalizeFirstLetter(props.data.link)}</span>
                            </div>
                        </div>
                        <div className='col-7 align-self-center text-secondary text-end'>
                            <h3 className='mb-0'>{props.text}</h3>
                            
                        </div>
                    </div>
                </div> 
            </NavLink>
        </>)
    }
 
    return ( <>
        <TopNavBar />
        <br />
        <AdsLanding /> 
        <br />
        <div className='container' dir='rtl'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper pb-4 mb-1"
            >
                {
                    subCatagSmall.map((slides, index) => (
                        <SwiperSlide key={index}>
                            <div className='row card-body '>
                                {slides.map((option,index) => (
                                    <div className='col-6 p-0' key={index}>
                                        <ItmesList
                                            key={option.id -1}
                                            option={option}
                                            selected={isSelected === option.id -1 }
                                            onChange={() => setisSelected(option.id -1 )}
                                        />
                                    </div>
                                ))}     
                            </div>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
            <br />
            <div className='card card-body mb-4 shadow-sm border-div'>
                <NavLink exact='true' to={`landing/searching`}>
                    <div className='row'>
                        <div className='col-5 align-self-center'><img src='https://cdn.abyedh.tn/Images/Tools/Jobs/jobs_cv.svg' width='100%' height='100px' /></div>
                        <div className='col-7 align-self-center text-secondary'><h3> هل أنت باحث عن عمل؟  </h3> <small> قم بإدخال المعلومات الكافية في ملفك و ستجد  الفرصة المناسبة  <span className='bi bi-arrow-left-short pt-3'></span></small></div>
                    </div>
                </NavLink>
            </div>
            <div className='card card-body mb-4 shadow-sm border-div'>
                <NavLink exact='true' to={`landing/searching`}>
                    <div className='row'>
                        <div className='col-8 align-self-center text-secondary'> <h3>هل تبحث عن خبرات بشرية؟  </h3><small> قم بالبحث عن الأشخاص المناسبيين للعمل معك  <span className='bi bi-arrow-left-short'></span></small></div>
                        <div className='col-4 align-self-center'><img src='https://cdn.abyedh.tn/Images/Tools/Jobs/jobs_boss.svg' width='100%' height='100px' /></div>
                    </div>
                </NavLink>
            </div>
 
        </div>
        <ButtomCard /> 
    </> );
}

export default BlogPage;