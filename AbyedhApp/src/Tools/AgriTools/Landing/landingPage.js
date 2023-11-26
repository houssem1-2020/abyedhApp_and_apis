import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../../Routing/Result/resultCard.css'
import { Dropdown, Input , Icon ,Divider, Header, Placeholder, Modal, Button} from 'semantic-ui-react';

function BlogLandingPage() {
    /* ###########################[const]############################ */
    let tag= 'agriTools'
    let {genre,gouv,deleg} = useParams()
    let [openMapModal,setOpenMM] = useState(false)
    let [loading,setLoading] = useState(true)
    let [resultList,setResultList] = useState([])
    let [localiteList,setLocaliteL] = useState([])
    L.Icon.Default.mergeOptions(GConf.LeafleftIcon);

    // let {tag} = useParams()
    let [loadings, SetLoading] = useState(true)
    let [blogListe, setBlogListe] = useState([])
    let [subCategListe, setSubCategListe] = useState([])

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        window.scrollTo(0, 0);
        // axios.post(`${GConf.ApiToolsLink}/blog`, {
        //     categ: tag,
        //   })
        //   .then(function (response) {
        //         setBlogListe(response.data.posts)
        //         setSubCategListe(response.data.subCtaeg)
        //         console.log(response.data)
        //         SetLoading(false)
        //   }).catch((error) => {
        //     if(error.request) {
        //       toast.error(<><div><h5>مشكل في الإتصال</h5> لم نتمكن من الوصول لقاعدة البيانات </div></>, GConf.TostInternetGonf)   
        //       SetLoading(false)
        //     }
        //   });

        GetLocaliteList()
        axios.post(`${GConf.ApiLink}/search`, {
            tag: 'pharmacie',
            genre:genre,
            gouv:gouv,
            deleg :deleg
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

    /* ###########################[Function]############################# */
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
    const GetLocaliteList = () =>{
        const found = GConf.abyedhMap.DelegData.filter(element => element.Name === deleg)
        const foundLocalite = GConf.abyedhMap.Localite.filter(element => element.Code === found[0].PostalCode)
        let rendredTable = []
        foundLocalite.map((data,index) => {
            let arrayToAdd = {id: index + 1 , text: data.Localite, value: data.Localite}
            rendredTable.push(arrayToAdd)
        })
        setLocaliteL(rendredTable)        
    }

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
                            <NavLink exact='true' to='/Tools' className="m-0 p-0 ms-3">
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
    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card footer-abyedh' style={{backgroundColor:GConf.ADIL[tag].themeColor}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
        </>)
    }
    const ResultMap = ()=> {
        let selectedGouv = GConf.abyedhMap.GouvData.filter(gouvr => gouvr.value == gouv)
        let position = [selectedGouv[0].lan, selectedGouv[0].lng]
        return (<>
        <div className='card p-2 border-0 '>
            <MapContainer className='border-div' center={position} zoom={13} scrollWheelZoom={true} style={{height:'530px'}} >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup> {selectedGouv[0].lan} </Popup>
                </Marker>
            </MapContainer>  
            </div>
        </>);

    }
    const ResultCard = (props) => {
        return (<>
                <div className='col-12 col-lg-4 mb-3'>
                    <div className='card shadow-sm h-100 border-div'>
                        <NavLink exact='true' to={`/Tools/AgriTools/profile/${props.data.PID}`} className='stretched-link'></NavLink>
                        <div className="card-header  " style={{marginBottom:'50px', height:'90px',  borderRadius:'0', background: `linear-gradient(to bottom, ${ConverColorToHsl(GConf.ADIL[tag].themeColor)},  #ffffff` , border: '0px solid' ,}}> 
                            <span
                                style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                }}
                                className="card-img bg-white"
                            >
                                <img src={`https://cdn.abyedh.tn/Images/Search/Icons/${tag}.gif`} className='img-responsive rounded-circle bg-white' width='100px'  height='100px' />
                            </span>
                            
                        </div>
                        <div className='text-center '> <h5 style={{ color: GConf.ADIL[tag].themeColor}}>{props.data.Name} { props.data.Activated == 'YES' ?  <span className='bi bi-shield-fill-check text-dark'></span> : ''}</h5></div>
                        <div className='card-body text-secondary ' >
                            <div className='text-end  pb-2' dir='ltr'>
                            <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt-fill' style={{color: GConf.ADIL[tag].themeColor}}></span> : {props.data.Gouv}</div> 
                            <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-geo-alt' style={{color: GConf.ADIL[tag].themeColor}}></span> : {props.data.Deleg}</div> 
                            <div className='text-end' style={{marginRight:'20px'}} dir='rtl'> <span className='bi bi-pin-map-fill' style={{color: GConf.ADIL[tag].themeColor}}></span> : {props.data.Adress}</div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                </>);
    }
    const FilterCard = () =>{
        return(<>
        <div className='card-body rounded-0 ' style={{height:'80px', marginBottom:'35px',   paddingTop:'30px' }}>
            <div className='row'>
                <div className='col-lg-3 align-self-center d-none d-lg-block '>
                    <Dropdown
                        search
                        selection
                        fluid
                        wrapSelection={false}
                        options={localiteList}
                        placeholder='عمادة '
                        className='mb-2  shadow-sm'
                    />
                </div>
                <div className='col-lg-3 align-self-center d-none d-lg-block'>
                    <Dropdown
                        search
                        selection
                        fluid
                        wrapSelection={false}
                        options={[{id:1, text:'الأحسن تقييم', value:'1'},{id:1, text:'الأقرب جغرافيا', value:'2'},{id:1, text:'السعر الأفضل', value:'3'}]}
                        placeholder='بحث حسب  '
                        className='mb-2  shadow-sm'
                    />
                </div>
                <div className='col-2 align-self-center d-md-none' >
                    
                    <Modal
                        onClose={() => setOpenMM(false)}
                        onOpen={() => setOpenMM(true)}
                        open={openMapModal}
                        dimmer= 'blurring'
                        trigger={<Button className='mb-2 me-1'  ><Icon name='map' /></Button>}
                        >
                        <Modal.Content >
                            <ResultMap />
                        </Modal.Content>
                         
                    </Modal>
                </div>
                <div className='col-lg-6 col-10 align-self-center ' >
                    <Input icon='search' placeholder='بحث' fluid className='mb-2 text-end rounded-pill-input ' style={{borderRadius: '100px', textAlign:'right'}}/>
                    {/* <Input  placeholder='بحث' fluid className='mb-2'><input style={{borderRadius: '100px', textAlign:'right'}} /> <Icon disabled name='search' /></Input> */}
                </div>
            </div>
        </div>
        </>)
    }
    const PlacHolderCard = () =>{
        const ProfilePlacholder = () => {
                return(<>
                    <div className='card p-3 shadow-sm border-div'>
                        <div className='text-center'>
                            <Placeholder className='rounded-circle mb-4' style={{ height: 80, width: 80 }}>
                                <Placeholder.Image />
                            </Placeholder>
                        </div> 
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
                    <div className='col-12 col-lg-4 mb-3'> <ProfilePlacholder /></div>
                    <div className='col-12 col-lg-4 mb-3'> <ProfilePlacholder /></div>
                </div>
        </>)
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
                <h5>يمكنك العودة و البحث في اماكن أخري قريبة منك , تأكد أنك ستجد ما تبحث عنه= </h5>
            </div>
        </>)
    }
    return ( <>
            <TopNavBar />
            <br />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-4 d-none d-lg-block'>
                        <div className="sticky-top" style={{top:'70px', zIndex:'-10'}}>
                             <ResultMap />
                        </div>
                    </div>
                    <div className='col-12 col-lg-8'>
                            <div className="sticky-top bg-white mb-4 " style={{top:'50px', zIndex:'+50'}}>
                                <FilterCard />
                            </div>
                            

                            {loading ?  <PlacHolderCard />
                            :
                            <>
                                {
                                    resultList.length == 0 ? <ResultEmpty /> 
                                    :
                                    <div className='row'>
                                        {
                                            resultList.map( (data,index) =>  <ResultCard key={index} data={data} />  )
                                        }
                                    </div>
                                }
                                
                            </>
                            
                            } 
                        
                    </div>
                </div>
            </div>

            <br />
            <br />
            <ButtomCard />
            
    </> );
}

export default BlogLandingPage;