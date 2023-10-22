import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import QRCode from "react-qr-code";
import { toast } from 'react-toastify';
import GConf from '../../AssetsM/APPConf';
import dirItem from '../../../AssetsM/Item'

function ProfilePID() {
    /*###############################[UseEffect]################################# */
    const [profileData, setProfileData] = useState([])
    const [loading, setLoadingPage] = useState(true)

    /*###############################[UseEffect]################################# */
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/profile/print`, {
            PID: GConf.PID,
            SystemTag : GConf.systemTag
        })
        .then(function (response) {
            console.log(response.data)
            setProfileData(response.data)
            setLoadingPage(false)
        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5></div></>, GConf.TostInternetGonf) 
              setProfileData([])
            }
        });
    }, [])

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

    return ( <>
            {loading ? 
            <>Loading Page</>
            :
            
            <div className='card card-body border-div border-0'>
                <div className='row'>
                    <div className='col-2 align-self-center'>
                        <div className='row'>
                            <div className='col-4'><h5 className='bi bi-arrow-left'></h5></div>
                            <div className='col-4'><h5 className='bi bi-arrow-right'></h5></div>
                            <div className='col-4'><h5 className='bi bi-arrow-clockwise'></h5></div>
                        </div>
                    </div>
                    <div className='col-10'>
                            <h1 className='text-danger border rounded-pill text-start p-1 ps-3'> 
                            <div className='row'>
                                <div className='col-11'><span className='bi bi-lock-fill text-success bg-gray rounded-pill me-3 ms-1'></span> https://abyedh.tn/</div>
                                <div className='col-1 align-self-center text-secondary'><h5 className='bi bi-geo-alt'></h5></div>
                            </div>
                                
                            </h1>
                    </div>
                </div>
                 
                <br />
                <div className='row'>
                    <div className='col-7 text-start'>
                        <h1 className='text-dark ms-2 mb-0 '>  {profileData.Name ? profileData.Name : ''} </h1> 
                        <h1 className='text-dark ms-2 mb-0 mt-0'><span className='bi bi-phone-fill bi-md'></span> {profileData.Phone ? profileData.Phone : ''}</h1> 
                        {/* <h1 className='text-dark ms-2  mb-0 mt-0'><span className='bi bi-bookmarks-fill bi-md'></span> {profileData.Genre ? profileData.Genre : ''}</h1>  */}
                    </div>
                    <div className='col-5 text-start align-self-center'>
                        <ul>
                            <li>Naviguer Sur : https://abyedh.tn/</li>
                            <li>Cliquer Sur L'icône : <span className='bi bi-qr-code'></span> </li>
                            <li>Scannez le Code Profile </li>
                        </ul>
                    </div>
                </div>
                
                <br />             
                <h1 className='text-center' style={{color: GConf.landing[GConf.systemTag].colorTheme}}>{findElementByLink(GConf.systemTag)}</h1>
                <br />
                
                <div className='row'>
                    <div className='col-6 text-center d-none'>
                        <QRCode fgColor={GConf.landing[GConf.systemTag].colorTheme} value={GConf.PID} size={300} />
                        <br />
                        <h2>PID</h2>
                    </div>
                    <div className='col-12 text-center'>
                        <QRCode fgColor={GConf.landing[GConf.systemTag].colorTheme} value={`${GConf.systemTag}/${GConf.PID}`} size={500} />
                        <br />
                        <br />
                        
                    </div>
                </div>

                
                <br />
                <br />
                <div className='card card-body shadow border-div mb-4 border-1'>
                    Telecherger L'application sur Play Store Pour avoir le Profile 
                    <div className='row'>
                            <div className='col-2 align-self-center text-end'><img src="https://cdn.abyedh.tn/images/logo/logo-app-store.jpg" className="img-responsive  mb-2" style={{width:'80px'}}  /></div>
                            <div className='col-8 text-start'> 
                                <h5>abyedh.tn</h5>
                                <img src="https://cdn.abyedh.tn/images/required/instal-btn.png" className="img-responsive  mb-2" style={{width:'250px', height:'50px'}}  />
                                {/* <div  className='border-div shadow-sm btn p-1 text-white print-profile-page' style={{backgroundColor: '#01875f !important', width:'250px'}}> Installer</div> */}
                            </div>
                            <div className='col-2 align-srlf-center'> 
                                <QRCode   value={`https://play.google.com/store/apps/details?id=tn.abyedh.twa`} size={80} />
                            </div>
                    </div>
                </div>
            </div>
            }
        </> );
}

export default ProfilePID;