import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { QrReader } from 'react-qr-reader';
import GConf from '../AssetsM/generalConf';
import { Button, Icon, Input, Modal } from 'semantic-ui-react';
import { useNavigate} from 'react-router-dom';

const SearchBar = ({open, setOpen, searchKey, setSearchKey,SearchFunction,GoToQrCodeFunction, data, setData}) =>{
    return(<>
        <div className='rounded-0 border-0 bg-white p-3 sticky-top shadow-bottom-card'>
           {/* <div className='row'>
                <div className='col-3  col-lg -1'>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        dimmer= 'blurring'
                        trigger={<Button className='border-0' icon ><Icon name='qrcode' /></Button>}
                        >
                        <Modal.Content image>
                            <QrReader
                                    constraints={{
                                        facingMode: 'environment'
                                    }}
                                    scanDelay={3000}
                                    onResult={(result, error) => {
                                    if (!!result) {
                                        //setData(result?.text);
                                        console.log(result.text)
                                        GoToQrCodeFunction(result.text)
                                    }

                                    if (!!error) {
                                        console.info(error);
                                    }
                                    }}
                                    style={{ width: '100%',height: "100%" }}
                            />
                            <p>{data}</p>
                        </Modal.Content>
                    </Modal>
                 <Button onClick={SearchFunction} icon ><Icon name='arrow right' /></Button></div>
                <div className='col-9 col-lg-11'><Input fluid  onChange={(e) => setSearchKey(e.target.value)} icon='search' placeholder='Search...' /></div>
           </div> */}
            
            <Input
                placeholder=' ... بَحْثْ'
                fluid
                action
                actionPosition='left'
                onChange={(e) => setSearchKey(e.target.value)}
            >
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    dimmer= 'blurring'
                    trigger={<Button className='border-0 bg-white border-top border-bottom border-start ' icon ><Icon name='qrcode' /></Button>}
                    >
                    <Modal.Content image>
                        <QrReader
                                constraints={{
                                    facingMode: 'environment'
                                }}
                                scanDelay={3000}
                                onResult={(result, error) => {
                                if (!!result) {
                                    GoToQrCodeFunction(result.text)
                                }

                                if (!!error) {
                                    console.info(error);
                                }
                                }}
                                style={{ width: '100%',height: "100%" }}
                        />
                        <p>{data}</p>
                    </Modal.Content>
                </Modal>
                
                <Button className='bg-white border-top border-bottom' onClick={() => SearchFunction()} icon ><Icon name='arrow right' /></Button>
                <input  value={searchKey} className='text-end' icon='user' />
            </Input>
            
        </div>
    </>)
    }

function MainLandingPage() {
    /* ############### Const #################*/
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const [data, setData] = useState('');

    /* ############### UseEffect #################*/
    /* ############### Functions #################*/
    const SearchFunction = (key) =>{
        if (!searchKey) { } 
        else {
            navigate(`/S/S/${searchKey}`)
        }
    }

    const GoToQrCodeFunction = (value) =>{
        navigate(`/S/P/${value}`)
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
                <div className="rounded-0 border-0 p-2 m-0  bg-white" >
                    <div className='row m-0'>
                        <div className='col-4 col-lg-6 text-start align-self-center'>
                            <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
                                <img  className="  bg-danger border border-danger"   src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                            </NavLink>
                        </div>
                        <div className='col-4 col-lg-6  d-lg-none align-self-center'>
                            <h3 className='text-danger mt-5'>مِنَصَّـة أَبْيَـضْ </h3>
                        </div>
                        <div className='col-4 col-lg-6 text-end align-self-center'>
                            {GConf.UserData.Logged  ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 ms-3 text-danger">    <img  className="rounded-circle9 p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/logIn.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />   </NavLink>}
                        </div>
                    </div>
                </div>
            </>)
    }
    const AddsCard = () =>{
        return(<>
                <div className='rounded-0 border-0 bg-white text-secondary text-center pt-2 d-none d-lg-block' style={{heigth:'200px'}}>
                    <h1 className='display-3'>مِنَصَّـة أَبْيَـضْ </h1> 
                    <h3 className='text-danger'>برشا تطبيقات في تطبيق واحد</h3>
                    <h5 className='display-6 d-none'>
                            <Typed    
                                strings={[
                                    'مَنْظٌومَة إِلِكْترٌونِيَّة شَامِلَة',
                                    'أَكْبَرْ دَلِيلْ تَفَاعٌلِي فِي تٌونِسْ',
                                    'نِظَامْ إِدَارَة وَ مٌحَاسَبَة لأَصْحَابْ الأَعْمَالْ',
                                    'لَوحَةْ تَحَكٌّمْ لِأَنْشِطَتِكَ اليٌوْمِيَّة',
                                    'مَوْسٌوعَة إِرْشَادِيَة وَ تَعْلِيمِّيَة تٌونِسِيًّة',
                                    'بِبَسَاطَة, كٌلْ شَيْ تَعْملٌو بِالأَنْتِرْنَاتْ ...']}
                                typeSpeed={5}
                                backSpeed={8}
                                backDelay={4000}
                                loop
                                showCursor={false} 
                                className="font-droid"  
                            >
                                
                            </Typed>
                    </h5>
                    <br  />
                </div>
            </>)
    }
    const IntroducingCard = () =>{
        return(<>
                <div className='card p-4 mb-3   border-div border-0' style={{backgroundColor: '#dedede', fontSize:'14px', color:'#14524f'}} >
                     <b>مِنَصّةْ أَبْيَضْ تعَاوْنِكْ فِي عِدّةْ مَجَالَاتْ بَاشْ تَلْقَي :   </b>
                </div>
            </>)
    }

    const DisplayedCard = (props)  =>{

        const ItemCard = (props) => {
           
            return(
                <>
                    <div  className="text-center hvr-float mb-4">
                        <NavLink exact='true' to={props.cardData.tools ?  `${props.cardData.link}` : `S/L/${props.cardData.link}`} >
                            <img className='mb-0' src={`https://cdn.abyedh.tn/Images/Search/CIcons/${props.cardData.image}.gif`}  width='50px' height='50px' />
                            <h5 className="font-droid text-secondary mt-0"> {props.cardData.name} </h5>
                        </NavLink>
                    </div>
                </>
            )
        }
    
        const WithSwiper = () => {
            return (
                <>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper pb-4 mb-1"
                    >
                       {
                            props.data.slides.map((slides, index) => (
                                <SwiperSlide key={index}>
                                    <div className='row' >
                                        {slides.map((slideItem, index) => (
                                            <div className='col-3 p-0' key={index}>
                                                <ItemCard cardData={slideItem} />
                                            </div>
                                        ))}     
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </>
            )
        }
        const WithoutSwiper = () => {
            return (
                <>
                    <div className='row'>
                        {props.data.slides.map((slides,index) => (
                            <div className='col-3' key={index}>
                               <ItemCard cardData={slides} /> 
                            </div>      
                            ))            
                        }       
                    </div>
                </>
            )
        }
        
        const WithSwiperSmall = () => {
            return (
                <>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-4 mb-0"
                >
                    {
                        props.data.smallDisplay.map((smallDisplay,index) => (
                            <SwiperSlide key={index}>
                                <div className='row'>
                                
                                    {smallDisplay.map((slideItem,index) => (
                                        <div className='col-6 p-0' key={index}>
                                            <ItemCard cardData={slideItem} floating={-50}/>
                                        </div>
                                    ))}     
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
                </>
            )
        }
        const WithoutSwiperSmall = () => {
            return (
                <>
                    <div className='row'>
                        {props.data.slides.map((slides,index) => (
                            <div className='col-6' key={index}>
                               <ItemCard cardData={slides} floating={-50}/> 
                            </div>      
                            ))            
                        }       
                    </div>
                </>
            )
        }
    
    
        return (<>
            <div className='card mb-3 border-div shadow-sm'>
               <div className='border-bottom pe-2 text-end'>
                   <h4 className='p-4' style={{color:props.data.themeColor}}><span className={`bi bi-${props.data.icon}`}></span> {props.data.tag}</h4> 
                </div> 
               <div className='card-body pb-0'>
                    {props.smallDisplay ?  
                            <> { props.data.smallSlider ? <WithSwiperSmall /> : <WithoutSwiperSmall />} </>
                            : 
                            <> {props.data.slider ? <WithSwiper /> : <WithoutSwiper />}</>
                    }
               </div> 
            </div>
        </>);
    }
    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card bg-danger'>
                <div className='row'>
                    <div className='col-12 col-lg-4 align-self-center d-none d-lg-block text-end'>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'> +216 96787676  - <span className='bi bi-telephone-outbound-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'>  abyedh@abyedh.tn -  <span className='bi bi-mailbox2' ></span></NavLink></div>
                        <div className='d-inline mt-2'>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-facebook bi-md' ></span></NavLink></div>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-youtube bi-md' ></span></NavLink></div>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-app-indicator bi-md' ></span></NavLink></div>
                        </div>
                    </div>
                    <div className='col-7 col-lg-4 align-self-center text-end'>
                        <div className='mb-1'><NavLink exact='true' to='/About' className='text-white'>  ماهي  رؤية منصة أبيض  - <span className='bi bi-patch-question-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'>  كيف استعمل المنصة  -  <span className='bi bi-brush-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'> من نحن ؟  -  <span className='bi bi-people-fill' ></span> </NavLink></div>
                    </div>
                    <div className='col-5 col-lg-4 align-self-center text-center'>
                        <img  className="rounded-pill-abyedh-s" src="https://cdn.abyedh.tn/images/logo/mlogo.gif" alt="Logo" style={{width:'40px', height:'90px', borderRadius: '10px 20px 10px 50px'}} />
                    </div>
                </div>
            </div>
        </>)
    }
    const Tools = () =>{
        return(<>
            <div className="container text-end">
                <NavLink exact='true' to='Tools'>  
                    <div className="card p-4 border-div shadow-sm" >
                        <div className="text-end text-secondary"><h4>أَدَوَاتْ أَبْيَضْ</h4></div>
                        <div className="row">
                            <div className="col-8 align-self-center">
                                <div className="text-end d-none d-lg-block text-secondary">تُوَفِّرْ أَبْيَضْ مَجْمُوعَة مِنَ الأَدَوَاتْ التِي تَسْعَي لِخَلْقْ بِيئَة إِرْشَادِيَة تُسَاعِدْ جَمِيعْ المُسْتَخِدِمِينْ عَلَي أَدَاءْ مُخْتَلَفْ أَنْشِطَتِهِمْ اليَوْمِيَّة <br /> إِكْتَشِفْ أَدَوَاتْ أَبْيَضَ مِنْ هُنَا </div>
                                <div className="text-end d-lg-none text-secondary">إِكْتَشِفًْ مَجْمُوعَة أَدَوَاتْ أَبْيَضْ التِي تُسَاعِدُكَ فِي حَيَاتِكَ اليَوْمِيًّة</div>
                            </div>
                            <div className="col-4 text-center align-self-center"> 
                                <img src="https://cdn.abyedh.tn/images/Search/tools.svg" className="img-responsive  mb-2" style={{width:'100px'}}  />
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>)
    }

    return ( <>
            <TopNavBar />
            <AddsCard />
            <SearchBar open={open} setOpen={setOpen} searchKey={searchKey} setSearchKey={setSearchKey} SearchFunction={SearchFunction} GoToQrCodeFunction={GoToQrCodeFunction} data={data} setData={setData} />
            <br />
            <br />

            <div className='container' dir='rtl'>
                <IntroducingCard />
                <br />
                <div className='row'>
                    <div className='col-12 col-lg-6 d-none d-lg-inline'>
                        <DisplayedCard smallDisplay={false} data={GConf.Items.sante} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.nutrition} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.construction} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.culture} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.finance} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.tourizme} />
                    </div>
                    <div className='col-12 col-lg-6 d-none d-lg-inline'>
                        <DisplayedCard smallDisplay={false} data={GConf.Items.education} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.trasnportation} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.houseCar} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.life} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.politique} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.agricole} />
                        <DisplayedCard smallDisplay={false} data={GConf.Items.generale} />
                    </div>
                </div>

                <div className='row d-lg-none'>
                    <div className='col-12'>
                        <DisplayedCard smallDisplay={true} data={GConf.Items.sante} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.education} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.trasnportation} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.houseCar} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.life} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.nutrition} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.culture} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.tourizme} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.finance} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.construction} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.politique} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.agricole} />
                        <DisplayedCard smallDisplay={true} data={GConf.Items.generale} />
                    </div>
                </div>
            </div>
            <br />
            <Tools />
            <br />
            <br />
            <ButtomCard />
        </> );
}

export default MainLandingPage;