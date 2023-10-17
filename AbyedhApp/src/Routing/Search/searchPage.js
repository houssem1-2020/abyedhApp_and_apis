import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../AssetsM/generalConf';
import '../Result/resultCard.css'

function SearchPage() {
    /* ########################### */
    let {key} = useParams()
    let [loading,setLoading] = useState(true)
    let [resultList,setResultList] = useState([])

    /* ############### UseEffect #################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${GConf.ApiLink}/search/key`, {
            key: key,
          })
          .then(function (response) {
            setResultList(response.data)
            setLoading(false)
          }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>مشل في الإتصال </h5> </div></>, GConf.TostInternetGonf) 
              setResultList([])
              setLoading(false)
              }
          });
      }, [])

      /* ############### Functions #################*/
      const ConverColorToHsl = (color) =>{
        //"hsl(166, 87%, 24%, 0.4)"
    // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (color.length == 4) {
            r = "0x" + color[1] + color[1];
            g = "0x" + color[2] + color[2];
            b = "0x" + color[3] + color[3];
        } else if (color.length == 7) {
            r = "0x" + color[1] + color[2];
            g = "0x" + color[3] + color[4];
            b = "0x" + color[5] + color[6];
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0)
            h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return "hsl(" + h + "," + s + "%," + l + "% " + ", 0.6 )";

    }
    /* ########################### */

    const TopNavBar = () =>{
        const UserCard = () =>{
            return(<>
                <NavLink exact='true' to='/Profile' className="navbar-brand border-div m-0 p-0 ms-3">
                    <img  className="rounded-circle p-0 m-0 me-1" src={`https://cdn.abyedh.tn/images/p_pic/${GConf.UserData.UData.PictureId}.gif`}   alt="Logo" style={{width:'30px', height:'30px'}} />
                </NavLink>
            </>)
        }
        return(<>
                <div className="rounded-0 border-0 p-2 m-0 bg-danger fixed-top navshad" >
                    <div className='row m-0'>
                        <div className='col-6 text-start align-self-center'>
                            <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
                                <img  className="border-div" src="https://cdn.abyedh.tn/images/logo/mlogo.gif"   alt="Logo" style={{width:'20px', height:'40px'}} />
                            </NavLink>
                        </div>
                        <div className='col-6 text-end align-self-center'>
                            {GConf.UserData.Logged  ? <UserCard />  : <NavLink exact='true' to='/Profile' className="m-0 p-0 ms-3 text-white"> تَسْجِيلْ الدٌخٌولْ</NavLink>}
                        </div>
                    </div>
                </div>
            </>)
    }

    // const ResultCard = () =>{
    //     return(<>
    //         <div className='col-12 col-lg-6'>
    //             <div className='card card-body border-div mb-2 shadow-sm'>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //             </div>
    //         </div>
    //     </>)
    // }
    const ResultCard = (props) => {
        return (<>
                <div className='col-12 col-lg-4 mb-3'>
                    <div className='card shadow-sm h-100 border-div'>
                        <NavLink exact='true' to={`/S/P/${props.data.Tag}/${props.data.PID}`} className='stretched-link'></NavLink>
                        <div className="card-header  " style={{marginBottom:'50px', height:'90px',  borderRadius:'0', background: `linear-gradient(to bottom, ${ConverColorToHsl(GConf.ADIL[props.data.Tag].themeColor)},  #ffffff` , border: '0px solid' ,}}> 
                            <span
                                style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                }}
                                className="card-img bg-white"
                            >
                                <img src={`https://cdn.abyedh.tn/Images/Search/Icons/${props.data.Tag}.gif`} className='img-responsive rounded-circle bg-white' width='100px'  height='100px' />
                            </span>
                            
                        </div>
                        <div className='text-center '> <h5 style={{ color: GConf.ADIL[props.data.Tag].themeColor}}>{props.data.Name} { props.data.Activated == 'YES' ?  <span className='bi bi-shield-fill-check text-dark'></span> : ''}</h5></div>
                        <div className='card-body text-secondary ' >
                            <div className='text-end  pb-2' dir='ltr'>
                            {props.data.Genre != '' ?  <><div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-bookmark-heart-fill' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Genre}</div> </> : <></> }
                            {props.data.Gouv != '' ?  <><div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt-fill' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Gouv}</div> </> : <></> }
                            {props.data.Deleg != '' ?  <><div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Deleg}</div> </> : <></> }
                            {props.data.Adress != '' ?  <><div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-pin-map-fill' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Adress}</div> </> : <></> }

                            {/* <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt-fill' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Gouv}</div> 
                            <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Deleg}</div> 
                            <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-pin-map-fill' style={{color: GConf.ADIL[props.data.Tag].themeColor}}></span> : {props.data.Adress}</div>  */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                </>);
    }

    const ResultEmpty = () =>{
        return(<>
            <div className='card-body mb-4 ' dir='rtl'>
                <div className='text-center'>
                    <img src='https://cdn.abyedh.tn/Images/Errors/error-page.png' className='img-gray d-lg-none' width='100%'  height='300px' />
                    <img src='https://cdn.abyedh.tn/Images/Errors/error-page.png' className='img-gray d-none d-lg-inline' width='60%'  height='300px' />
                </div>
                <h3>عذرا , لا توجد نتائج حاليا لأحد الأسباب التالية :</h3> 
                <ul >
                    <li>لا توجد نتائج فعليا</li>
                    <li> لم نتمكن من إيجاد نتائج </li>
                </ul> 
                <h5>يمكنك العودة و البحث في اماكن أخري قريبة منك , تأكد أنك ستجد ما تبحث عنه </h5>
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
           <div  className='row'>
                <div className='col-12 col-lg-9'>
                    <div className='card p-3 rounded-pill shadow-sm mb-3 sticky-top  ' style={{top:'70px'}}>
                       <b> {key} </b>
                    </div>
                    <br />
                    <div  className='row'>
                        {
                            !loading ? 
                            <>
                            {
                                resultList.map( (data,index) => <ResultCard key={index} data={data} />)
                            }
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div className='col-12 col-lg-3 d-none d-lg-block'>
                        <div className='sticky-top ps-4 border-start' style={{top:'170px'}}>
                                gb
                                <br />
                    <br />
                    <br />
                    <br />
                    <br />
                        </div>
                </div>
           </div>   
        </div>
        
    </> );
}

export default SearchPage;