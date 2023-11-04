import React, { useEffect, useRef, useState } from 'react';
import { _ } from "gridjs-react";
import Typed from 'react-typed';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { toast } from 'react-toastify';
import { Button, Icon, Select , Modal} from 'semantic-ui-react';
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
    const [open, setOpen] = useState(false)
    const [openD, setOpenD] = useState(false)
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
        setOpen(false)
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
                                <img  className="border-div-s d-none d-lg-inline" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
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
    const AdsLanding = (props) =>{
        return(<>
            <div className={`${props.displylg ? 'd-none d-lg-block' : 'd-lg-none'}`}>
                <br />
                <div className='card-body rounded-0 ' style={{height:'170px',  marginTop:'40px', paddingTop:'50px'}}>
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
                                    <SwiperSlide><h4 className='text-secondary'>{RenderAsHtml(GConf.ADIL[tag].adsText[0][0])}</h4></SwiperSlide>
                                    <SwiperSlide><h4 className='text-secondary'>{RenderAsHtml(GConf.ADIL[tag].adsText[0][1])}</h4></SwiperSlide>
                                </Swiper>
                                
                        </div> 
                        <div className='col-4 col-lg-4   text-center d-none d-lg-block '>
                            {GConf.ADIL[tag].systemActive ? <SystemLinkCardLG /> : <></> }
                        </div>
                    </div> 
                </div>
                <br />
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
    
    const GouvListeToSelet = () =>{
        return(<>
        <div className='row'>
            {GConf.abyedhMap.Gouv.map((data, index) => <div key={index} className='col-6'>
                <div  className={`card p-2  mb-2  ${data.value == gouv ? 'bg-dark text-white' : 'text-secondary'}`} onClick={() => GetDelegList(data.value)}>
                    <div className='row'>
                        <div className='col-3'><span className='bi bi-pin-map-fill'></span></div> 
                        <div className='col-9 align-self-center'> <b>{data.text}</b></div> 
                    </div>
                   
                </div>
            </div> )}
        </div>
            
        </>)
    }
    const DelegListeToSelet = () =>{
        return(<>
            {delegList.map((data, index) => <div key={index} className={`card p-2  mb-2  ${data.value == deleg ? 'bg-dark text-white' : 'text-secondary'}`} onClick={() => { setDeleg(data.value); setOpenD(false) }}><b>{data.text}</b></div> )}
        </>)
    }
    const SelectGouvCard = () =>{
        const SelectGouv = () =>{
           return(<>
                <div className='card p-3 shadow-sm mb-2 rounded-pill' onClick={() => setOpen(true)}>
                    <h4 className='text-end me-2' style={{color:GConf.ADIL[tag].themeColor}}>{gouv ? gouv : 'إختر ولاية'} <span className='ms-3 bi bi-map'></span> </h4> 
                </div>
           </>) 
        }
        const SelectDeleg = () =>{
            return(<>
                 <div className='card p-3 shadow-sm mb-2 rounded-pill' onClick={() => setOpenD(true)}>
                     <h4 className='text-end me-2' style={{color:GConf.ADIL[tag].themeColor}}>  {deleg ? deleg : ' إختر منطقة'} <span className='ms-3 bi bi-geo-alt-fill'></span> </h4> 
                 </div>
            </>) 
         }
        const FastSearch = (props) =>{
            return(<>
                 
                <NavLink exact='true' to={`/S/R/${tag}/${GConf.ADIL[tag].subCateg[isSelected].value}/${props.gouv}/${props.deleg}`} >
                            <div className='card p-3 mb-2 shadow-sm rounded-pill text-center'>
                               <div className='row' style={{color:GConf.ADIL[tag].themeColor}}>
                                    <div className='col-2 align-text-center align-self-center'><img  className="rounded-circle " src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'20px', height:'20px'}} /></div>
                                    <div className='col-9 align-text-center' dir='rtl'> <b> بحث في  {props.gouv} , {props.deleg}</b>    </div>
                                    <div className='col-1 align-text-center align-self-center'><b> <span className='bi bi-arrow-right-short'></span> </b></div>
                               </div>
                            </div>
                </NavLink>
                
            </>)
        }
        return(<>
                <div className="card card-body shadow-sm mb-4   border-div" >
                     
                    
                    {/* <h5 className='text-end text-secondary'> {GConf.UserData.Logged ?  'أو' : ''}  حدد الموقع  </h5>  */}
                    <br />
                    <div className='row'>
                        <div className='col-12 col-lg-4 align-self-center '>
                            {GConf.UserData.Logged ?  <FastSearch gouv={GConf.UserData.UData.BirthGouv} deleg={GConf.UserData.UData.BirthDeleg} /> : ''}
                        </div>
                        <div className='col-12 col-lg-3 align-self-center order-4 order-lg-2'>
                            <h5 className='text-end text-secondary m-1 mb-3 d-lg-none'> </h5>
                            <Button fluid size='large' onClick={() => GoToResult()} className='rounded-pill  mb-2 p-3 text-white' style={{backgroundColor:GConf.ADIL[tag].themeColor}}   >بحث  <Icon name='search' className='ms-2' /> </Button>
                        </div>
                        <div className='col-12 col-lg-2 align-self-center order-lg-4'>
                            <h5 className='text-end text-secondary m-1 mb-3 d-lg-none'>  {GConf.UserData.Logged ?  'أو إبحث في ' : 'حدد موقع البحث'}  </h5>
                            <SelectGouv />
                        </div>
                        <div className={`col-12 col-lg-3 align-self-center order-lg-3 ${gouv ? '' : 'd-none'}`}>
                            <h5 className='text-end text-secondary m-1'>   </h5>
                            <SelectDeleg />
                        </div>
                    </div>
                    
                    
                    {/* <Select placeholder='إختر ولاية' className='mb-2 shadow-sm' options={GConf.abyedhMap.Gouv} value={gouv} onChange={(e, { value }) => GetDelegList(value)} /> */}
                    {/* <Select placeholder='إختر منطقة' className='shadow-sm' value={deleg} options={delegList} onChange={(e, { value }) => setDeleg(value)} /> */}
                     
                    
                    {/* <NavLink exact='true' to={`/S/R/${tag}/${GConf.ADIL[tag].subCateg[isSelected].value}/${gouv}/${deleg}`} > */}
                            
                    {/* </NavLink> */}
                </div></>)
    }
    const SystemLinkCard = () =>{
        return(<>
            <div className='card p-2 shadow mb-2 border-div d-md-none'>
                <h5 className='text-end text-secondary mb-1 mt-2' dir='rtl'> هَلْ أَنْتَ {GConf.ADIL[tag].businesOwner} ؟ </h5>
                <a href={`/S/I/add/${tag}`} className=' text-secondary ' ></a>
                <div className='row mt-0 pt-0 '>
                    <div className='col-3 align-self-center text-center'>
                        <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} className=' mt-3 img-responsive mb-1 ms-2' width='100%'  height='auto' />
                    </div>
                    <div className='col-9 align-self-center text-center'>
                        <p> إِكْتَشِفْ {GConf.ADIL[tag].systemName} اللّي  يعُاوْنِكْ  بَاشْ تَعَرِّفْ بنَفْسِكْ و تَعَرِّفْ بخَدِمْتِكْ   </p>
                        {/* <p >   <b style={{color:GConf.ADIL[tag].themeColor}}>{GConf.ADIL[tag].systemName}</b> يعُاوْنِكْ  بَاشْ تَعَرِّفْ بنَفْسِكْ و تَعَرِّفْ بخَدِمْتِكْ  </p> */}
                        {/* {localStorage.getItem('AddToDirectory') ? <Button className='rounded-pill text-secondary' style={{backgroundColor:'white'}} size='tiny' onClick={() => navigate(`/S/I/user/${tag}`)}> متابعة عملية التسجيل </Button>  : <></>}  */}
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-6 align-self-center text-start'><Button className='rounded-pill mb-2' style={{backgroundColor:'#f0f0f0', color : GConf.ADIL[tag].themeColor}} size='tiny' onClick={() => navigate(`/S/I/add/${tag}`)}>إضغط هنا للتسجيل </Button></div>
                        <div className='col-6 align-self-center text-end'><Button className='rounded-pill text-white mb-2' style={{backgroundColor:GConf.ADIL[tag].themeColor}} size='tiny' onClick={() => navigate(`/App/L/${tag}`)}>  الدخول للنظام </Button></div>
                    </div>
                </div>
                 
                
            </div> 
        </>)
    }
    const AdminSoon = () =>{
        return(<>
            <div className='card p-2 shadow mb-2 border-div d-md-none'>
                <h5 className='text-end text-secondary mb-1 mt-2' dir='rtl'> منصة الإدارة الرقمية </h5>
                <a href={`/S/I/add/${tag}`} className=' text-secondary ' ></a>
                <div className='row mt-0 pt-0 '>
                    <div className='col-3 align-self-center text-center'>
                        <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} className=' mt-3 img-responsive mb-1 ms-2' width='100%'  height='auto' />
                    </div>
                    <div className='col-9 align-self-center text-end'>
                        <p className='mb-0' > منصة الإدارة الرقمية ستكون متوفرة قريبا   </p>
                        <p className='mt-0'>  نحن نعمل علي ذلك   </p>
                        
                    </div>
                </div>

                 
                
            </div> 
        </>)
    }
    const SystemLinkCardLG = () =>{
        return(<>
            <div className='card p-3 shadow-sm  border-div btn-cursor' onClick={() => navigate(`/S/I/add/${tag}`)}>
                <p className='text-end'>   <b style={{color:GConf.ADIL[tag].themeColor}}>{GConf.ADIL[tag].systemName}</b>  يعُاوْنِكْ  بَاشْ تَعَرِّفْ بنَفْسِكْ و تَعَرِّفْ بخَدِمْتِكْ </p> 
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
            {/* <AdsLanding  /> */}
            <div className='d-lg-none'>
                <br />
                <br />
                <br />
                <br />
            </div>
            
            <div className='container '>
                <AdsLanding displylg />
                <div className='row'> 
                    <div className='col-12 col-lg-12 align-self-center  ' dir='rtl'>
                        <div className='row mb-2'>
                            <div className='col-4 col-lg-4 align-self-center text-center d-none d-lg-block '>
                                <img src={`https://cdn.abyedh.tn/images/ads/${tag}.svg`} className='img-responsive  ' width='60%' height='auto'  />
                            </div>
                            <div className='col-12 col-lg-8 align-self-center text-center'>
                                <h5 className='text-end mb-2 me-3 text-secondary'>{GConf.ADIL[tag].selectText}</h5>
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
                            </div> 
                        </div>
                    </div> 
                    <div className='col-12 col-lg-12 align-self-center'>
                        <div className='d-none d-lg-block lol-hhh'>
                            <br />
                            <br />
                            <br />
                        </div>
                        <SelectGouvCard />
                    </div>
                </div> 
                <br />
                {GConf.ADIL[tag].systemActive ? <SystemLinkCard /> : <AdminSoon /> }
            </div> 
            <br />
            <ButtomCard />
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                dimmer= 'blurring' 
                >
                <Modal.Content  >
                        <GouvListeToSelet />
                </Modal.Content>
            </Modal>
            <Modal
                onClose={() => setOpenD(false)}
                onOpen={() => setOpenD(true)}
                open={openD}
                dimmer= 'blurring'
                    
                >
                <Modal.Content  >
                        <DelegListeToSelet />
                </Modal.Content>
            </Modal>
        </> );
}

export default SearchLandingPage;