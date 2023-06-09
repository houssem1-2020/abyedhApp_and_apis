import React, { useEffect, useRef, useState } from 'react';
import { _ } from "gridjs-react";
import Typed from 'react-typed';
import { NavLink, useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { toast } from 'react-toastify';
import { Button, Icon, Select } from 'semantic-ui-react';
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Ripples from 'react-ripples'
import { useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function SearchLandingPage() {
    /*#########################[Const]##################################*/
    let {tag} = useParams()
    const [isSelected, setisSelected] = useState(0);
    const [loadingTo, setLoadingTo] = useState(0);
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const navigate = useNavigate();
    /* ############### UseEffect #################*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    /* ############### Functions #################*/
      const GetDelegList = (value) =>{
        setGouv(value)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
      }
      
      const RenderAsHtml = (text) => {
        return (
          <span
            dangerouslySetInnerHTML={{__html: text}}
          />
        );
      }

      const GoToResult = () =>{
        if (!gouv) { toast.error("قم بتحديد الولاية", GConf.TostErrorGonf)} 
        else if (!deleg) { toast.error("قم بتحديد المنطقة ", GConf.TostErrorGonf)}
        else {
            //setLoadingTo(95)
            navigate(`/S/R/${tag}/${GConf.ADIL[tag].subCateg[isSelected].value}/${gouv}/${deleg}`)
        }
           
      }
    /* ############### Card #################*/
    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <nav className="p-2 fixed-top navshad" style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
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
        <div className='card-body rounded-0' style={{height:'170px',  marginTop:'40px', paddingTop:'50px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center ' dir='rtl'>
                        {/* <Typed    
                            strings={GConf.ADIL[tag].adsText[0]}
                            typeSpeed={3}
                            backSpeed={4}
                            backDelay={4000}
                            loop
                            showCursor={false} 
                            className="font-droid d-none"  
                        /> */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                              delay: 6000,
                              disableOnInteraction: false,
                            }}
                            
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper pb-5 mb-1"
                        >
                            <SwiperSlide><h5>{RenderAsHtml(GConf.ADIL[tag].adsText[0][0])}</h5></SwiperSlide>
                            <SwiperSlide><h5>{RenderAsHtml(GConf.ADIL[tag].adsText[0][1])}</h5></SwiperSlide>
                        </Swiper>
                        
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} className='img-responsive mt-3' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }
    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card d-lg-none' style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
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
    
    const SelectGouvCard = () =>{
        const FastSearch = (props) =>{
            return(<>
                <h5 className='text-end text-secondary'> بحث سريع  </h5>
                <NavLink exact='true' to={`/S/R/${tag}/${GConf.ADIL[tag].subCateg[isSelected].value}/${props.gouv}/${props.deleg}`} >
                            <div className='card p-3 shadow-sm rounded-pill text-center'>
                               <div className='row' style={{color:GConf.ADIL[tag].themeColor}}>
                                    <div className='col-10 align-text-center' dir='rtl'><b> بحث في {props.deleg} , {props.gouv} </b></div>
                                    <div className='col-2 align-text-center'><b> <span className='bi bi-arrow-right-short'></span> </b></div>
                               </div>
                            </div>
                </NavLink>
            </>)
        }
        return(<>
                <div className="card card-body shadow-sm mb-4 sticky-top border-div" style={{top:'70px'}}>
                     
                    {GConf.UserData.Logged ?  <FastSearch gouv={GConf.UserData.UData.BirthGouv} deleg={GConf.UserData.UData.BirthDeleg} /> : ''}
                    <h5 className='text-end text-secondary'> {GConf.UserData.Logged ?  'أو' : ''} إختر ولاية </h5> 
                    <Select placeholder='إختر ولاية' className='mb-2 shadow-sm' options={GConf.abyedhMap.Gouv} value={gouv} onChange={(e, { value }) => GetDelegList(value)} />
                    <Select placeholder='إختر منطقة' className='shadow-sm' value={deleg} options={delegList} onChange={(e, { value }) => setDeleg(value)} />
                    <br />
                    <h5 className='text-end text-secondary m-1'> بحث </h5>
                    {/* <NavLink exact='true' to={`/S/R/${tag}/${GConf.ADIL[tag].subCateg[isSelected].value}/${gouv}/${deleg}`} > */}
                            <Button fluid size='medium' onClick={() => GoToResult()} className='rounded-pill  text-white' style={{backgroundColor:GConf.ADIL[tag].themeColor}}   >بحث  <Icon name='search' className='ms-2' /> </Button>
                    {/* </NavLink> */}
                </div></>)
    }
    const SystemLinkCard = () =>{
        return(<>
            <div className='card p-2 shadow mb-2 border-div d-md-none'>
                <a href={`${GConf.ADIL[tag].systemLink}`} className='stretched-link text-secondary' >
                <div className='row'>
                    <div className='col-4 align-self-center text-center'>
                        <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} className='img-responsive mb-1 ms-2' width='100%'  height='100px' />
                    </div>
                    <div className='col-8 align-self-center text-center'><h5>{GConf.ADIL[tag].systemName}</h5></div>
                </div>
                </a>
            </div> 
        </>)
    }
    /*const BigScreenItemCard = () =>{
        return(     
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper pb-4 mb-1"
                    >
                        {
                            GConf.ADIL[tag].subCatagLarge.map((slides, index) => (
                                <SwiperSlide key={index}>
                                    <div className='row card-body '>
                                        {slides.map((option,index) => (
                                            <div className='col-3 p-0' key={index}>
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
                        
                    </Swiper>)
    }
    const SmallScreenItemCard = () =>{
        return( 
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-4 mb-1"
                >
                    {
                        GConf.ADIL[tag].subCatagSmall.map((slides, index) => (
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
                )
    }*/
    
    return ( <>
            <TopNavBar /> 
            {/* <LoadingBar color={GConf.themeColor} progress={loadingTo}  
                //onLoaderFinished={() => setProgress(0)} 
            /> */}
            <br />
            <AdsLanding />
            <br />
            <div   className='d-none d-lg-block lol-hhh'>
                <br />
                <br />
                <br />
            </div>
            
            <div className='container '>
                <div className='row'> 
                    <div className='col-12 col-lg-8 align-self-center ' dir='rtl'>
                        <div className='d-none d-lg-flex '>
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper pb-4 mb-1"
                                >
                                    {
                                        GConf.ADIL[tag].subCatagLarge.map((slides, index) => (
                                            <SwiperSlide key={index}>
                                                <div className='row card-body justify-content-center'>
                                                    {slides.map((option,index) => (
                                                        <div className='col-3 p-0' key={index}>
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
                        </div>
                        <div className='d-lg-none '>
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper pb-4 mb-1"
                                >
                                    {
                                        GConf.ADIL[tag].subCatagSmall.map((slides, index) => (
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
                        </div> 
                        <br />
                    </div> 
                    <div className='col-12 col-lg-4 align-self-center'>
                        <SelectGouvCard />
                    </div>
                </div> 
                <br />
                {GConf.ADIL[tag].systemActive ? <SystemLinkCard /> : <></> }
            </div> 
            <br />
            <ButtomCard />
        </> );
}

export default SearchLandingPage;