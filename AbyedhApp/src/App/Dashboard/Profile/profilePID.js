import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import QRCode from "react-qr-code";
import { toast } from 'react-toastify';
import GConf from '../../AssetsM/generalConf';

function ProfilePID() {
    /*###############################[UseEffect]################################# */
    const [profileData, setProfileData] = useState([])

    /*###############################[UseEffect]################################# */
    useEffect(() => {
        axios.post(`${GConf.ApiLink}/profile/print`, {
            PID: GConf.PID,
        })
        .then(function (response) {
            setProfileData(response.data[0])

        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5></div></>, GConf.TostInternetGonf) 
              setProfileData([])
            }
        });
    }, [])

    return ( <>
            <div className='card card-body border-div border-0'>
                <h1 className='text-danger border rounded-pill text-start p-1 ps-3'> <span className='bi bi-lock-fill text-success bg-gray rounded-pill me-3 ms-1'></span> https://abyedh.tn/</h1> 
                <br />
                <div className='row'>
                    <div className='col-7 text-start'>
                        <h1 className='text-dark ms-2 mb-0 display-3'>  {profileData.Name ? profileData.Name : ''}</h1> 
                        <h1 className='text-dark ms-2 mb-0 mt-0'><span className='bi bi-phone-fill bi-md'></span> {profileData.Phone ? profileData.Phone : ''}</h1> 
                        <h1 className='text-dark ms-2  mb-0 mt-0'><span className='bi bi-bookmarks-fill bi-md'></span> {profileData.Genre ? profileData.Genre : ''}</h1> 
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
                <br />
                <div className='row'>
                    <div className='col-6 text-center'>
                        <QRCode fgColor={GConf.themeColor} value={GConf.PID} size={300} />
                        <br />
                        <h2>PID</h2>
                    </div>
                    <div className='col-6 text-center'>
                        <QRCode fgColor={GConf.themeColor} value={`S/P/${GConf.systemTag}/${GConf.PID}`} size={300} />
                        <br />
                        <h2>Profile</h2>
                    </div>
                </div>
                <br />
            </div>
        </> );
}

export default ProfilePID;