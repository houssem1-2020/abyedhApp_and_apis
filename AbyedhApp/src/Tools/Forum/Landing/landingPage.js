import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';
import { Button, Placeholder } from 'semantic-ui-react';

function BlogLandingPage() {
    /* ###########################[const]############################ */
    let {tag} = useParams()
    let [loading, SetLoading] = useState(true)
    let [blogListe, setBlogListe] = useState([])
    let [subCategListe, setSubCategListe] = useState([])

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${GConf.ApiToolsLink}/blog`, {
            categ: tag,
          })
          .then(function (response) {
                setBlogListe(response.data.posts)
                setSubCategListe(response.data.subCtaeg)
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
                            <NavLink exact='true' to='../' className="m-0 p-0 ms-3">
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
    const SubCategCard = (props) =>{
        return(<>
            <div className={`border border-div card-body shadow-sm mb-4 ${props.small ? 'ms-2' : ''} `} onClick={() => alert(`Loading Data ${props.data.Name} `)}>
                {props.data.Name}
            </div>
        </>)
    }

    const LefSubCateg = ()=>{
        return(<>
                <div className="sticky-top" style={{top:'70px'}}> 
                    {
                        loading ? 
                        <>...</>
                        :
                        <>
                            {
                                subCategListe.map((data,index) => <SubCategCard key={index} data={data} /> )
                            }
                        </> 
                    }
                </div>  
        </>)
    }
    const BlogCard = (props)=>{
        return(<>
        <div className='col-12 col-lg-4'>
                    <NavLink exact='true' to={`/tools/Blog/page/${props.data.Blog_ID}`} className="navbar-brand border-div m-0 p-0 ms-3">
                    <div className='card card-body shadow-sm mb-2 border-div text-start '>
                        <div className='small text-end'> منذ : 2023-12-04 </div>
                        <div className='text-center'><img src={`https://cdn.abyedh.tn/images/Tools/Blog/${props.data.Img_Url}`} className='text-center' width={'70%'} height={'120'} /> </div>
                        <h3 className='text-secondary text-truncate text-end ' style={{maxWidth: '100%'}} dir='rtl'>{props.data.Title} </h3>
                        <div className='row text-decoration-none' >
                            <div className='col-4 align-self-center text-center small text-secondary'><span className='bi bi-eye'></span> 1250 </div>
                            <div className='col-4 align-self-center text-center small text-secondary'><span className='bi bi-hand-thumbs-up'></span> 20 </div>
                            <div className='col-4 align-self-center text-center small text-secondary'><span className='bi bi-chat-dots'></span> 1250 </div>
                        </div>
                    </div>   
                    </NavLink>
            </div>     
        </>)
    }
    const SekeltonCard = () =>{
        const PlaceHolderCard = () =>{
            return(<>
            <Placeholder className='mb-0 border-div' style={{ height: 180, width: '100%' }}>
                <Placeholder.Image />
            </Placeholder>
            </>)
        }
        return(<>
            <div className='row'>
                <div className='col-12 col-lg-4 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-4 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-4 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-4 mb-4'><PlaceHolderCard /></div>
            </div>
            
        </>)
    }

    return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row  ">
                    <div className="col-12 col-lg-2 d-none d-lg-block">
                        <LefSubCateg  /> 
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="mt-0 p-1  d-lg-none" dir='rtl' style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}>
                            <div className="d-flex"  >
                                {
                                    loading ? 
                                    <>...</>
                                    :
                                    <>
                                        {
                                            subCategListe.map((data,index) => <SubCategCard key={index} data={data} small={true} /> )
                                        }
                                    </> 
                                }

                            </div>
                        </div>
                        {
                            loading ? 
                            <SekeltonCard />
                            :
                            <div className='row'>
                                {
                                    blogListe.map((data,index) => <BlogCard key={index} data={data} /> )
                                }
                            </div> 
                        }
                    </div>  
                </div>
            </div>
            
    </> );
}

export default BlogLandingPage;