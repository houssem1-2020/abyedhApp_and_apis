import React from 'react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import GConf from '../../../AssetsM/generalConf';
import { Suspense } from 'react';

const MedicammentCrad = React.lazy(() => import('./ToSelectFrom/medicamment'));

const ForLazyLoading = () =>{
    return (<>
            <br />            
            <br />            
            <br />
            <div className="loader-container-small">
              <div className="loader-small"></div>
            </div>          
            <br />            
            <br />            
            <br />            
            <br />                                   
        </>);
}
const IndefinieCard = (props) =>{
    return(<>
        <div className='text-center p-2 text-secondary'>
                <span className='bi bi-file-earmark-lock bi-lg '></span>
                <h5>صفحة غير متوفرة</h5> 
        </div>
    </>)
}
function BlogProfilePage() {
        /* ###########################[const]############################ */
        let {genre,tag,code} = useParams()

        /*#########################[UseEffect]###########################*/
        useEffect(() => {
            window.scrollTo(0, 0);
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
        const SpecificCard = ({ genre }) => {
            const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
            const statusCard = React.useCallback(() => {
            switch(genre) {
                case 'sante': return  <Suspense fallback={<ForLazyLoading />}><MedicammentCrad TAG={tag} tag={tag} code={code} /></Suspense>;  
                default:  return <IndefinieCard />;    
            }
            }, [genre]);
        
            return (
            <div className="">
                {statusCard()}
            </div>
            );
        }
        return ( <>
            <TopNavBar />
            <br />
            <br />
            <br />
            <br />
            <div className='container' >
                <SpecificCard genre={genre} />
            </div>
            
    </> );
}

export default BlogProfilePage;