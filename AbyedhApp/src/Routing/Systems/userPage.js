import React, { useEffect } from 'react';
import { NavLink, useParams} from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import axios from 'axios';
import { useState } from 'react';
import { Button, Placeholder } from 'semantic-ui-react';
import { toast } from 'react-toastify';

 
 


function ProfileFollow() {
    /* ############### Const #################*/
    let {tag} = useParams() 
    let [savedList, setSavedList] = useState([])
    let [loading, setLoading] = useState(true)
 
    /* ############### UseEffect #################*/
    useEffect(() => {
         
        //if (localStorage.getItem('AddToDirectory')) {window.location.href = "/S/I";}
        window.scrollTo(0, 0);
        axios.post(`${GConf.ApiLink}/systems/check`, {
            reqID: localStorage.getItem('AddToDirectory'),
             
        })
        .then(function (response) {
            console.log(response.data)
           if (response.data.length != 0) {  
            setSavedList(response.data)
            setLoading(false)
           }
        })
        }, [])

    
    /* ############### Function #################*/
    const logInSystem = (UID) =>{
            //setLS(true)
            axios.post(`${GConf.ApiLink}/systems/user/LogIn`, {
                LoginUID : UID,
            }).then(function (response) {
                if(response.data.Exist == true) {
                        toast.success("تم التسجيل بنجاح !", GConf.TostSuucessGonf)
                        //setLS(false)
                        localStorage.setItem('UserData', JSON.stringify(response.data.UserD));
                        localStorage.setItem('UID', response.data.UserD.UID);
                        window.location.reload()
                }
                else{
                    toast.error('هذا الحساب غير موجود ', GConf.TostSuucessGonf)
                    //setLS(false)
                }
            })
    }
    
    /* ############### Card #################*/

    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='#' className="navbar-brand border-div m-0 p-0 ms-3">
                    {/* <span className='bi bi-person-circle bi-md text-white'></span> */}
                    <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <nav className="p-2 fixed-top navshad bg-white "  >
                    <div className='row'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to={`/S/I/add/${tag}`} className="m-0 p-0 ms-3">
                                <div  className=" d-inline-block    p-1"  > <span className='bi bi-arrow-left-short bi-md ' ></span> </div>
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {GConf.UserData.Logged ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 me-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                        </div>
                    </div>
                </nav>
            </>)
    }
    const SavedListeCard = (props) => {
        const UserCard = () =>{
            return(<>
                    <div className='card card-body border-div shadow-sm mb-3'>
                        <div className='row' dir='rtl'>
                            <div className='col-2'><img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} /></div>
                            <div className='col-10 align-self-center text-secondary'><b>تم التسجيل بإسم : {GConf.UserData.UData.Name}</b></div>
                        </div>
                    </div>
            </>)
        }
        const DirectoryCard = (props) =>{
            return(<>
                    <div className='card card-body border-div shadow-sm mb-3'>
                        <h5 className='mb-3 mt-1'>تمت إضافتك لمحرك البحث أبيض بنجاج يمكنك أن تقوم بزيارة ملفك  من <a href={`https://abyedh.tn/S/P/${props.Tag}/${props.PID}`} target='c_blank'>هنا</a>  </h5>
                        <small className='mb-1 mt-1 text-secondary'>كما يمكنك أيضا أن تستقبل طلبات عملائك  من خلال واجهة إستقبال الطلبيات المجاني . كلمة المرور هي رقم هاتف العمل </small>
                        <Button className='rounded-pill ' as='a' target='_blank'  fluid href={`https://app.abyedh.tn/?tag=${tag}`} > واجهة إستقبال الطلبيات  <span className='bi bi-google-play'></span></Button>
                    </div>
            </>)
        }

        return(<>
            <div className='card card-body border-div shadow-sm mb-2 text-end'>
                <div className='text-start'><StateCard status={props.data.Req_State} /></div>
                
                {props.data.Req_State != 'A' ?  <h4>  تم تسجيلك بنجاح </h4>  : <h4>  تم قبول عمليةالتسجيل <span className='bi bi-check-circle-fill text-success'></span> </h4>}
                
                <div className='mb-1'>{props.data.Assigned_UID != 0  ?  GConf.UserData.Logged ? <UserCard />  : <Button className='rounded-pill mb-3'  size='tiny' onClick={() => logInSystem(props.data.Assigned_UID)}>   إضغط هنا لتسجيل الدخول لمنصة أبيض    </Button>     : <h4> ... جاري تسجيل معلومات الدخول   </h4> }</div>
 
                <div className='mb-1'>{props.data.Assigned_PID ?  <DirectoryCard PID={props.data.Assigned_PID} Tag={props.data.Genre} /> : <h4>  ... جاري التسجيل في محرك البحث     </h4>}</div>
            </div>
        </>)
    }
    const StateCard = ({ status }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'W': return <StateCard color='warning' text='En Attent' />;  
            case 'S': return <StateCard color='info' text='Vu' />;  
            case 'A': return <StateCard color='success' text='Acepteé' /> ;
            case 'R': return <StateCard color='danger' text='Refuseé' />;
            case 'RT': return <StateCard color='retarder' text='Retardeé' />;
            case 'RD': return <StateCard color='rederecter' text='Redirecteé' />;
            case 'F': return <StateCard color='secondary' text='Termineé' />;
            default:  return <StateCard color='dark' text='Indefinie' />;    
          }
        }, [status]);
      
        return (
          <div className="container">
            {statusCard()}
          </div>
        );
    };

    const PlacHolderCard = () =>{
        const ProfilePlacholder = () => {
                return(<>
                    <div className='card p-3 shadow-sm border-div'>
                        <Placeholder style={{ width: '100%' }}>
                            <Placeholder.Line  />
                            <Placeholder.Line  />
                            <Placeholder.Line  />
                            <Placeholder.Line  />
                            <Placeholder.Line  />
                        </Placeholder>
                    </div>
                </>)
            }
        return(<>
                <div className='row '>
                    <div className='col-12 col-lg-4 mb-3'> <ProfilePlacholder /></div>
                    <div className='col-12 col-lg-4 mb-3'> <ProfilePlacholder /></div>
                </div>
        </>)
    }

    return ( <>
        <TopNavBar />
        <br />
        <br />
        <br />
        <br />
        <div className='container'>
            <h1>#{localStorage.getItem('AddToDirectory')}</h1>
            {loading ? 
            <PlacHolderCard /> 
            : 
            <>{savedList.map((data,index) => <SavedListeCard key={index} data={data} />)}</>}
            
        </div>
         

    </> );
}

export default ProfileFollow;