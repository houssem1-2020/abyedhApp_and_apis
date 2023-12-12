import React from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import GConf from '../../../AssetsM/generalConf';
import { Placeholder } from 'semantic-ui-react';
import SubCat from '../subCategListe';

function BlogLandingPage() {
    /* ###########################[const]############################ */
    let {genre} = useParams()
    let [loading, SetLoading] = useState(true)


    /*#########################[UseEffect]###########################*/

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
    const BlogCard = (props)=>{
        return(<>
        <div className='col-12 col-lg-2 mb-3 '>
                <NavLink exact='true' to={`/tools/Products/Liste/${genre}/${props.data.tag}`} className="   ">
                    <div className='card card-body shadow-sm  border-div text-center h-100'>
                        <div className='text-center'><img src={`https://cdn.abyedh.tn/images/Tools/${props.data.image}`} className='text-center' width={'50px'} height={'50px'} /></div> 
                        <h2 className='d-inline mt-0'>{props.data.name}</h2>
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
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
                <div className='col-12 col-lg-2 mb-4'><PlaceHolderCard /></div>
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
                <div className='row'>
                    {
                        SubCat[genre].subCategories.map((data,index) => <BlogCard key={index} data={data} /> )
                    }
                </div> 
            </div>  
            
    </> );
}

export default BlogLandingPage;