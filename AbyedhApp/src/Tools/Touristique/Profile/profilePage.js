import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';
import { Button, Placeholder } from 'semantic-ui-react';

function BlogProfilePage() {
        /* ###########################[const]############################ */
        let {PAID} = useParams()
        let [loading, SetLoading] = useState(true)
        let [postData, setPostData] = useState([])
    
        /*#########################[UseEffect]###########################*/
        useEffect(() => {
            window.scrollTo(0, 0);
            axios.post(`${GConf.ApiToolsLink}/blog/select`, {
                PAID: PAID,
              })
              .then(function (response) {
                    setPostData(response.data)
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
            const UserCard = () =>{
                return(<>
                    <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                        <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                    </NavLink>
                </>)
            }
            return(<>
                    <nav className="p-2 fixed-top navshad" style={{backgroundColor: GConf.Tools.sport.themeColor}}>
                        <div className='row'>
                            <div className='col-6 text-start align-self-center'>
                                <NavLink exact='true' to='/Tools/Sport' className="m-0 p-0 ms-3">
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
        const ContenetCatd = ()=>{
            return(<>
                <div className='card card-body shadow-sm mb-4 border-div' dir='rtl'>
                      <h2 className='text-center'>{postData.Title}</h2>
                      <div className='card-footer border-0 border-div'>
                            <div dangerouslySetInnerHTML={{ __html: postData.Sub_Navs }}></div>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: postData.Content }}></div>
                </div>
            </>)
        }
        const SekeltonCard = () =>{
            const PlaceHolderCard = () =>{
                return(<>
                <Placeholder className='mb-0 border-div' style={{ height: 120, width: '100%' }}>
                    <Placeholder.Image />
                </Placeholder>
                </>)
            }
            return(<>
                <PlaceHolderCard />
                <PlaceHolderCard />
                <PlaceHolderCard />
            </>)
        }

        return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='container' >
                <Link exaxt='true' to='/tools/Sport'><Button className='rounded-circle' icon='arrow left' /></Link>
                <br />
                <br />
                {
                    loading ? 
                    <SekeltonCard />
                    :
                    <div>
                       <ContenetCatd />
                    </div>
                }
            </div>
            
    </> );
}

export default BlogProfilePage;