import React, { useEffect} from 'react';
import { Bounce } from 'react-reveal';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, Dropdown, Modal, Popup } from 'semantic-ui-react';
import GConf from '../AssetsM/generalConf';

function ProfileLandingPage() {
    /*#########################[Const]###########################*/
    let userData = JSON.parse(localStorage.getItem("UserData"));

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        const UIDisSet = localStorage.getItem('UID');
        if (!UIDisSet) {window.location.href = "/Profile/logIn";}
        
    })

    /*#########################[Function]###########################*/
    const logOutInput = () =>{    
        //localStorage.clear();
        localStorage.removeItem('UID')
        localStorage.removeItem('UserData')
        window.location.href = "/Profile";
    }

    /*#########################[Card]###########################*/
    /*style={{backgroundColor:'#4287f5'}}*/
    const MainTopCard = () =>{
        const TopAppBar = () =>{
            return(<>
                <div className='rounded-0 border-0 p-2 m-0  ' >
                        <div className='row m-0'>
                            <div className='col-6 text-start align-self-center'>
                                <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
                                    <img  className="border-div-s bg-danger border border-danger" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px', borderRadius: '10px 20px 10px 50px'}} />
                                </NavLink>
                                
                            </div>
                            <div className='col-6 align-self-center text-end' >
                                {localStorage.getItem('PID') && localStorage.getItem('APP_TAG') || localStorage.getItem('AddToDirectory')  ?                              
                                <Dropdown floating className='pt-2 ps-0'  direction='left'  style={{zIndex:99999}}>
                                    <Dropdown.Menu >
                                        {localStorage.getItem('PID') && localStorage.getItem('APP_TAG') ?  <Dropdown.Item className='text-end' ><NavLink exact="true" className='text-secondary'  to={'/App/S'}> الدخول للنظام <span className={`icons-a bi bi-folder-symlink bi-sm`}></span></NavLink></Dropdown.Item> : <></>}                                    
                                        {localStorage.getItem('AddToDirectory') ?  <Dropdown.Item className='text-end'><NavLink exact="true" className='text-secondary'  to={'/S/I/user/docteur'}>  متابعة التسجيل <span className={`icons-a bi bi-at bi-sm`}></span></NavLink></Dropdown.Item> : <></>}                                                                       
                                        {localStorage.getItem('PID') || localStorage.getItem('APP_TAG') || localStorage.getItem('AddToDirectory') ? <Dropdown.Divider /> : <></> }
                                        <Dropdown.Item icon='settings' text='الإعدادات' />
                                        <Dropdown.Item icon='sign-out alternate' text='تسجيل الخروج' />
                                    </Dropdown.Menu>
                                </Dropdown>
                                : 
                                    
                                <></>}

                                <Modal
                                    closeIcon
                                    centered={false}
                                    size='mini'
                                    dimmer='blurring'
                                    trigger={<img  className="rounded-circle p-0 m-0  ms-2" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />}
                                    >
                                    <Modal.Content className='mt-4' >
                                        <h5 className='text-center mb-2'>شكرا لمشاركتنا التجربة </h5> 
                                        <h5 className='text-center  '>لا تنسي العودة قريبا </h5> 
                                        <Button onClick={logOutInput}  size='mini' style={{backgroundColor:GConf.themeColor}} fluid className='rounded-pill text-white'  >تسجيل الخروج </Button>
                                    </Modal.Content>
                                </Modal>
                                
                            

                            {/* {
                                localStorage.getItem('PID') && localStorage.getItem('APP_TAG') ? 
                                <NavLink exact="true" className='text-secondary p-0 m-0 ms-3 mt-1'  to={'/App/S'}>
                                    <Button size='small' className='rounded-circle text-secondary bg-transparent'   icon='share square' />
                                </NavLink>
                                :
                                <></>
                            } */}
                            
                               
                                {/* <Popup
                                    content={<Button onClick={logOutInput}  size='mini' style={{backgroundColor:GConf.themeColor}} className='rounded-circle text-white' icon='log out' />}
                                    on='click'
                                    position='bottom left'
                                    size='mini'
                                    pinned
                                    trigger={<img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />}
                                /> */}
                                
                            </div>
                            
                        </div>
                </div>
            </>)
        }
        const LandingCard = () =>{
            const MainLink = (props) => {
                return (<>
                    <NavLink exact="true" className={({ isActive  }) => isActive ? "p-3 abyedh-list-a" : "p-3 abyedh-list"} to={props.link}><i className={`icons-a bi bi-${props.icon} bi-sm`}></i></NavLink>
                </>)
            }

            return(<>
                <div className='border-0 bg-white rounded-0 text-center p-4 sticky-top shadow-bottom-card' dir='rtl' style={{margingTop:'80px', zIndex: 1000}}>

                        {GConf.ProfileNavsData.map((links) => 
                                <MainLink key={links.id} name={links.name} link={links.link} icon={links.icon} />
                        )}
                        {/* {
                            localStorage.getItem('PID') && localStorage.getItem('APP_TAG') ? 
                            <>
                            | <NavLink exact="true" className='text-secondary p-3'  to={'/App/S'}><i className={`icons-a bi bi-folder-symlink bi-sm`}></i></NavLink>
                            </>
                            :
                            <></>
                        } */}
                        
                </div>
            </>)
        }
        return(<>
                <TopAppBar />
                <LandingCard />
        </>)
    }

    return ( <>
            <MainTopCard />
            <br />                
            <br />  
            <div className='container' dir="rtl">
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-8'>
                    <Outlet />
                    </div>
                </div> 
                
            </div>                          
        </> );
}

export default ProfileLandingPage;