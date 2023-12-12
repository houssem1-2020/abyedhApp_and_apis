import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';
import { Button, Placeholder } from 'semantic-ui-react';
import SubCat from '../subCategListe';

function BlogProfilePage() {
        /* ###########################[const]############################ */
        let {genre,tag} = useParams()
        let [loading, SetLoading] = useState(true)
        let [rendredListe, setRendredListe] = useState([])
        let [postData, setPostData] = useState([])
    
        /*#########################[UseEffect]###########################*/
        useEffect(() => {
            window.scrollTo(0, 0);
            
            axios.post(`${GConf.ApiToolsLink}/products/liste`, {
                tableName: SubCat[genre].tableName,
                searchGenre: SubCat[genre].searchGenre,
                genreName: tag,
              })
              .then(function (response) {
                    setRendredListe(response.data)
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
        const ContenetCatd = (props)=>{
            return(<>
                <div className='col-6 col-lg-2 mb-3 '>
                    <NavLink exact='true' to={`/tools/Products/profile/${genre}/${tag}/${props.data.PK}`} className="   ">
                        <div className='card card-body shadow-sm  border-div text-center h-100'>
                            <div className='text-center'><img src={`https://cdn.abyedh.tn/images/Tools/${SubCat[genre].subCategories.find(item => item.name === tag).image}`} className='text-center' width={'50px'} height={'50px'} /></div> 
                            <h5 className='d-inline'>{props.data.Nom}</h5>
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
                    <div className='col-6 col-lg-3 mb-4'><PlaceHolderCard /></div>
                    <div className='col-6 col-lg-3 mb-4'><PlaceHolderCard /></div>
                    <div className='col-6 col-lg-3 mb-4'><PlaceHolderCard /></div>
                    <div className='col-6 col-lg-3 mb-4'><PlaceHolderCard /></div>
                </div>
                
            </>)
        }

        return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <br />
            <div className='container' >
                {
                    loading ? 
                    <SekeltonCard />
                    :
                    <div className='row'>
                        {
                            rendredListe.map((data,index) => <ContenetCatd key={index} data={data} /> )
                        }
                    </div>
                }
            </div>
            
    </> );
}

export default BlogProfilePage;