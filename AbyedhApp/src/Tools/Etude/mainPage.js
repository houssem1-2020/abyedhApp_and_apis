import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Button, Icon, Select , Input } from 'semantic-ui-react'
import { Pagination,Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Ripples from 'react-ripples'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';

function BlogPage() {
    /* ###########################[const]############################ */
    let tag = 'rentingHouse'
    const [isSelected, setisSelected] = useState(0);
    const [delegList ,setDelegList] = useState([])
    const [gouv ,setGouv] = useState('')
    const [deleg ,setDeleg] = useState('')
    const navigate = useNavigate();
    const subCatagSmall =  [
        [
            { id: 1, name: 'رياضيات', value: 'dentiste', imgSrc: 'univ_economy' },
            { id: 2, name: 'فيزياء', value: 'dentiste', imgSrc: 'univ_sn' }, 
            { id: 3, name: ' الحياة والأرض', value: 'dentiste', imgSrc: 'univ_sn' },
            { id: 4, name: ' علوم إعلامية', value: 'dentiste', imgSrc: 'univ_engeneering' },
        ],
        [   
            { id: 5, name: 'علوم تقنية', value: 'dentiste', imgSrc: 'univ_engeneering' },
            { id: 6, name: 'عربية', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 7, name: 'فرنسية', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 8, name: 'إنقليزية', value: 'dentiste', imgSrc: 'univ_language' },
        ]   
    ]
    const subCatagLarge =[
        [
            { id: 1, name: 'رياضيات', value: 'dentiste', imgSrc: 'univ_economy' },
            { id: 2, name: 'فيزياء', value: 'dentiste', imgSrc: 'univ_sn' }, 
            { id: 3, name: ' الحياة والأرض', value: 'dentiste', imgSrc: 'univ_sn' },
            { id: 4, name: ' علوم إعلامية', value: 'dentiste', imgSrc: 'univ_engeneering' },  
            { id: 5, name: 'علوم تقنية', value: 'dentiste', imgSrc: 'univ_engeneering' },
            { id: 6, name: 'عربية', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 7, name: 'فرنسية', value: 'dentiste', imgSrc: 'univ_language' },
            { id: 8, name: 'إنقليزية', value: 'dentiste', imgSrc: 'univ_language' },
        ]
    ]
    const subCateg =[
        { id: 1, name: 'رياضيات', value: 'dentiste', imgSrc: 'univ_economy' },
        { id: 2, name: 'فيزياء', value: 'dentiste', imgSrc: 'univ_sn' }, 
        { id: 3, name: ' الحياة والأرض', value: 'dentiste', imgSrc: 'univ_sn' },
        { id: 4, name: ' علوم إعلامية', value: 'dentiste', imgSrc: 'univ_engeneering' },  
        { id: 5, name: 'علوم تقنية', value: 'dentiste', imgSrc: 'univ_engeneering' },
        { id: 6, name: 'عربية', value: 'dentiste', imgSrc: 'univ_language' },
        { id: 7, name: 'فرنسية', value: 'dentiste', imgSrc: 'univ_language' },
        { id: 8, name: 'إنقليزية', value: 'dentiste', imgSrc: 'univ_language' },
    ]
    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    /* ############### Functions #################*/
    const GetDelegList = (value) =>{
        setGouv(value)
        const found = GConf.abyedhMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
      }
      const GoToResult = () =>{
        if (!gouv) { toast.error("قم بتحديد الولاية", GConf.TostErrorGonf)} 
        else if (!deleg) { toast.error("قم بتحديد المنطقة ", GConf.TostErrorGonf)}
        else {
            //setLoadingTo(95)
            navigate(`/Tools/Renting/result/${GConf.ADIL[tag].subCateg[isSelected].value}/${gouv}/${deleg}`)
        }
           
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

    const AdsLanding = () =>{
        return(<>
        <div className='card-body rounded-0' style={{height:'170px', backgroundColor:'white', marginTop:'55px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
                       <h3  dir='rtl' style={{color:GConf.Tools.Etude.themeColor}}> {GConf.Tools.Etude.textAds} </h3>
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/etude.svg' className='img-responsive' width='40%' height='40%'  />
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
                <NavLink exact='true' to={`/Tools/Etude/result/${subCateg[isSelected].value}/${props.gouv}/${props.deleg}`} >
                            <div className='card p-3 shadow-sm rounded-pill text-center'>
                               <div className='row' style={{color:GConf.Tools.Etude.themeColor}}>
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
                    <Button fluid size='medium' onClick={() => GoToResult()} className='rounded-pill  text-white' style={{backgroundColor:GConf.Tools.Etude.themeColor}}   >بحث  <Icon name='search' className='ms-2' /> </Button>
                </div></>)
    }
    const SystemLinkCard = () =>{
        return(<>
            <div className='card p-2 shadow-sm mb-2 border-div' dir='ltr'>
                <h5 className='text-end text-secondary mb-1 mt-2' dir='rtl'> هَلْ أَنْتَ  أستاذ دروس خصوصية  ؟ </h5>
                <div className='row mt-0 pt-0 '>
                    <div className='col-3 align-self-center text-center'>
                        <img src={`https://cdn.abyedh.tn/images/Tools/etude.svg`} className=' mt-3 img-responsive mb-1 ms-2' width='100%'  height='auto' alt='abyedh.tn' />
                    </div>
                    <div className='col-9 align-self-center text-center'>
                        <p> إِكْتَشِفْ النسخة  المصغرة لتطبيق إدارة الحصص التعليمية اللّي تعُاوْنِكْ  إِنّكْ تَعَرِّفْ بنَفْسِكْ و تستقبل طلبات تلامذتك    </p>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-6 align-self-center text-start'><Button className='rounded-pill mb-2' style={{backgroundColor:'#f0f0f0', color : GConf.Tools.Louage.themeColor}} size='tiny' onClick={() => navigate(`/Tools/Louage/add`)}> التسجيل في النظام </Button></div>
                        <div className='col-6 align-self-center text-end'><Button className='rounded-pill text-white mb-2' style={{backgroundColor:GConf.Tools.Louage.themeColor}} size='tiny' onClick={() => navigate(`/Tools/Louage/app`)}>  الدخول للنظام </Button></div>
                    </div>
                </div>
                 
                
            </div> 
        </>)
    }

    return ( <>
        <TopNavBar />
        <AdsLanding /> 
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
                                    subCatagLarge.map((slides, index) => (
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
                    </div> 
                    <br />
                </div> 
                <div className='col-12 col-lg-4 align-self-center'>
                    <SelectGouvCard />
                </div>
            </div> 
            <br />
            <SystemLinkCard />
        </div>
        <ButtomCard /> 
    </> );
}

export default BlogPage;