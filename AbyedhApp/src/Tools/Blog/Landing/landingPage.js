import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';

function BlogLandingPage() {
    /* ###########################[const]############################ */
    let {tag} = useParams()
    let [loading, SetLoading] = useState(true)
    let [test, SetTest] = useState([])

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${GConf.ApiToolsLink}/search`, {
            tag: 'tag',
          })
          .then(function (response) {
                SetTest(response.data)
                console.log(response.data)
                SetLoading(false)
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
              SetLoading(false)
            }
          });

    }, [])

    /* ###########################[Function]############################# */

    /* ###########################[Card]############################# */
    const TopNavBar = () =>{
        let UID = localStorage.getItem('UID')
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src="https://cdn.abyedh.tn/images/p_pic/15.gif"   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <div className="rounded-0 border-0 p-2 m-0  navshad fixed-top" style={{backgroundColor: GConf.Tools.blog.themeColor}} >
                    <div className='row m-0'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/Tools/Blog' className="m-0 p-0 ms-3">
                                <img  className="border-div" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {UID ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 ms-3 text-white"> تسجيل الدخول</NavLink>}
                        </div>
                    </div>
                </div>
            </>)
    }
    const Card = ()=>{
        return(<>
            <div className='card card-body shadow-sm mb-4'>
                Card
            </div>
        </>)
    }
    return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <div className='container'>
                Landing Blog
            </div>
            
    </> );
}

export default BlogLandingPage;