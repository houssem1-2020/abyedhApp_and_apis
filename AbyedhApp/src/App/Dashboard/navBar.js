import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
import { Button, Icon, Modal, List } from 'semantic-ui-react'
import GConf from '../AssetsM/APPConf';
import { useLocation } from 'react-router-dom';
import dirItem from '../../AssetsM/Item'
import APPConf from '../AssetsM/APPConf';

function NavBar(props) {
    
    const MainLink = (props) => {
        return (<>
            <NavLink exact="true" className={({ isActive  }) => isActive ? "p-2 abyedh-list-a pb-main-tab" : "p-2 abyedh-list"} to={props.link}><i className={`icons-a bi bi-${props.icon}`}></i> {props.name}  <span className="d-none d-lg-inline"></span></NavLink>
        </>)
    }
    const ResponsiveLink = (props) => {
        return (<>
            <NavLink exact="true" className={({ isActive  }) => isActive ? "p-2 abyedh-list-a" : "p-2 abyedh-list"} to={props.link}><i className={`icons-a bi bi-${props.icon}`}></i> {props.name}  <span className="d-none d-lg-inline"></span></NavLink>
        </>)
    }
    const LogOut = () =>{
        //localStorage.clear();
        localStorage.removeItem(`PID`);
        localStorage.removeItem(`APP_TAG`);
        window.location.href = "/";
    }
    const Refresh = () =>{
        window.location.reload();
    }

    function findElementByLink(link) {
        for (const category in dirItem) {
          if (dirItem[category] && dirItem[category].slides) {
            for (const slide of dirItem[category].slides) {
              if (Array.isArray(slide)) {
                for (const subSlide of slide) {
                  if (subSlide.link === link) {
                    return subSlide.name
                  }
                }
              } else if (slide.link === link) {
                return slide.name
              }
            }
          }
        }
        return null;
    }

    return (<>
        <div className="fixed-top">
            <div className="rounded-0 p-3 pb-0 bg-white border-bottom blur-bckg-st">
                <div className="row">
                    <div className="col-3 col-md-2 mb-3 align-self-center text-left">
                        <NavLink exact="true"  to={useLocation().pathname.split('/').pop() == 'S' ? '/' : '/App/S'}>  
                            {useLocation().pathname.split('/').pop() == 'S' ? <img  className="  bg-danger border border-danger"   src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'17px', height:'35px', borderRadius: '10px 20px 10px 50px'}} /> : <div  className="p-0" style={{width:'17px', height:'35px',}} > <span className='bi bi-arrow-left-short bi-md' ></span> </div>} 
                        </NavLink> 
                    </div>
                    <div className="col-6 col-md-8 pb-3 align-self-center text-left navsha">
                        <h3 className='text-center mb-0' style={{color:APPConf.landing[APPConf.systemTag].colorTheme}}>{findElementByLink(APPConf.systemTag)}</h3> 
                        <div className="text-left d-none d-lg-block">
                            
                            
                        </div>
 
                       
                    </div>
                    <div className="col-3 col-md-2 mb-3  align-self-center text-end">
                    <NavLink onClick={Refresh} to='#' exact="true" className='ps-1 pe-3 mt-3'><span className="bi bi-arrow-clockwise fa-lg text-danger"></span></NavLink>
                    <NavLink onClick={LogOut} to='#' exact="true" className='ps-1 pe-1'><span className="bi bi-box-arrow-left fa-lg"></span></NavLink>
                        <div className="dropdown d-none">
                            <NavLink onClick={Refresh} to='#' exact="true" className='ps-1 pe-1'><span className="bi bi-arrow-clockwise fa-lg text-danger"></span></NavLink>
                            <NavLink to='nt' exact="true" className={({ isActive }) => isActive ? "ps-1 pe-1 abyedh-list-a-s" : "ps-1 pe-1 abyedh-list"}><i className="bi bi-bell fa-lg "></i></NavLink>
                            <NavLink to='up' exact="true" className={({ isActive }) => isActive ? "ps-1 pe-1 abyedh-list-a-s" : "ps-1 pe-1 abyedh-list"}><i className="bi bi-cloud-arrow-down fa-lg "></i></NavLink>
                            
                            <NavLink onClick={LogOut} to='#' exact="true" className='ps-1 pe-1'><span className="bi bi-box-arrow-left fa-lg"></span></NavLink>
                        </div>
                        
                        <Modal
                            closeIcon
                            //centered={false}
                            size='small'
                            dimmer='blurring'
                            trigger={<Button icon className="d-none rounded-circle bg-system-btn" size='tiny'> <Icon name='expand arrows alternate' /></Button>}
                            >
                            <Modal.Content className='d-block'>
                                <div className='row'>
                                    
                                    <div className='col-4 col-lg align-self-center text-center'>
                                        <NavLink to='Message' exact="true" className={({ isActive }) => isActive ? "ps-1 pe-1 abyedh-list-a-s" : "ps-1 pe-1 abyedh-list"}><i className="bi bi-envelope bi-md"></i></NavLink>
                                        <h6>Messages</h6>
                                    </div> 
                                    <div className='col-4 col-lg align-self-center text-center '>
                                        <NavLink to='Profile' exact="true" className={({ isActive }) => isActive ? "ps-1 pe-1 abyedh-list-a-s" : "ps-1 pe-1 abyedh-list"}><i className="bi bi-person bi-md"></i></NavLink>
                                        <h6>Profile</h6>
                                    </div> 
                                     
                                    <div className='col-4 col-lg align-self-center text-center'>
                                        <NavLink onClick={LogOut} to='#' exact="true" className='ps-1 pe-1'><span className="bi bi-box-arrow-left bi-md"></span></NavLink>
                                        <h6>Déconnextion</h6>
                                    </div>   
                                </div>
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default NavBar;
