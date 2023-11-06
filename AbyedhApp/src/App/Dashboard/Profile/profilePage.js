import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-reveal';
import { Tab, Divider, Icon, Statistic, Comment, Input, Button, Form, TextArea, Select, Loader, Dropdown, Checkbox, Label, Menu} from 'semantic-ui-react';
import QRCode from "react-qr-code";
import { Rating } from 'semantic-ui-react'
import GConf from '../../AssetsM/APPConf';
import axios from 'axios';
import { toast } from 'react-toastify';
import SKLT from '../../../AssetsM/Cards/usedSlk';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AvatarGroup from '@atlaskit/avatar-group';
import FrameForPrint from '../../../AssetsM/Cards/frameForPrint';
import usePrintFunction from '../../../AssetsM/Hooks/printFunction';
import TunMap from '../../../AssetsM/tunMap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import ADIL from '../../AssetsM/APPITEM';
import { NavLink } from 'react-router-dom';

const EditProfile = ({generalData, setGeneralData, UpdateGeneralDataFunc, delegList,GetDelegList,loaderState}) =>{
    const genreOptions = [
        { key: 1 , value: '5 ETOILE', text: '5 ETOILE' },
        { key: 2 , value: 'MLAWOUI', text: 'MLAWOUI' },
        { key: 3 , value: 'PIZZA', text: 'PIZZA' },
        { key: 4 , value: 'FAST FOOD', text: 'FAST FOOD' },
        
      ]
      const Livraisonoptions = [
        { key: '1', value: 'INTIGO', text: 'INTIGO ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/intigo-1-300x145-1.png', avatar: true } },
        { key: '2', value: 'Yassir', text: 'Yassir ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/yassir.png', avatar: true } },
        { key: '3', value: 'Farm Trust', text: 'Farm Trust ', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/farmtrust.png', avatar: true } },
        { key: '4', value: 'Founashop', text: 'Founashop', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/founa-shop.png', avatar: true } },
        { key: '5', value: 'Joy s', text: 'Joy’s', image: { src: 'https://foodealz.com/wp-content/uploads/2020/04/28070452_400909117034010_1865031699315847664_o-300x300-1.jpg', avatar: true } },
      ]

      function GenerateGenreListe() {
        return GConf.landing[GConf.systemTag].genreListe.map(item => ({
            key: item.id.toString(),
            value: item.name,
            text: item.name,
            image: { src: `https://cdn.abyedh.tn/images/Search/Land_icons/${item.imgSrc}.gif`, avatar: true }
        }));
    }

    return ( <>
        <h3>Information Génerale</h3> 
        {/* <h5 className='mb-1'>Matricule Fiscale</h5> */}
        {/* <Input icon='key' iconPosition='left' placeholder='Mtricule Fiscale' value={generalData.Matricule_F} onChange={(e) => setGeneralData({...generalData, Matricule_F: e.target.value })} fluid /> */}
        
        <h5 className='mb-1'>Nom  </h5>
        <Input icon='user' dir='ltr' className="left aligned" iconPosition='left' placeholder='Nom' value={generalData.Name} onChange={(e) => setGeneralData({...generalData, Name: e.target.value })} fluid />
        
        <h5 className='mb-1'>Telephone</h5>
        <Input icon='phone'  iconPosition='left' placeholder='telephone' value={generalData.Phone} onChange={(e) => setGeneralData({...generalData, Phone: e.target.value })} fluid />
        <h5 className='mb-1'>Geolocation</h5>
        <div className='mb-2'>
            <Select placeholder='Selectionnez Gouvernorat' fluid className='mb-2' options={TunMap.Gouv} value={generalData.Gouv} onChange={(e, { value }) => GetDelegList(value)} />
            <Select placeholder='Selectionnez Delegation ' fluid value={generalData.Deleg} options={delegList} onChange={(e, { value }) => setGeneralData({...generalData, Deleg: value })} />
        </div>
        <h5 className='mb-1'>Adresse</h5>
        <Form>
             <TextArea  rows="3" placeholder='Adresse' className='w-100'  value={generalData.Adress} onChange={(e) => setGeneralData({...generalData, Adress: e.target.value })} />
        </Form>
        <h5 className='mb-1'>Genre</h5>
        <Dropdown
            search
            selection
            fluid
            wrapSelection={false}
            options={GenerateGenreListe()}
            placeholder='Selectionnez Client'
            className='mb-1'
            onChange={(e, { value }) => setGeneralData({...generalData, Genre: value })}
            value={generalData.Genre}
        />
        <br />
        <div className='text-end'>
            <Button  className='rounded-pill bg-system-btn' onClick={() => UpdateGeneralDataFunc()} ><Icon name='save' /> Modifier <Loader active={loaderState} inverted  inline size='tiny' className='ms-2'/></Button>
        </div>

    </> );
}
const EditPassword = ({passwordData, setPasswordData, UpdatePasswordFunc,loaderState}) =>{
    return(<>
        <h3>Modification de la mot de passe</h3>
        <h5 className='mb-1'>Idenbtifiant</h5>
        <Input icon='user' iconPosition='left' placeholder='Nom' value={passwordData.Identification} onChange={(e) => setPasswordData({...passwordData, Identification: e.target.value })}   fluid />
        <h5 className='mb-1'>Mot de passe</h5>
        <Input icon='eye' iconPosition='left' placeholder='telephone' value={passwordData.PasswordSalt} onChange={(e) => setPasswordData({...passwordData, PasswordSalt: e.target.value })}   fluid />
        <br />
        <div className='text-end'>
            <Button  className='rounded-pill bg-system-btn' onClick={() => UpdatePasswordFunc()} ><Icon name='save' /> Modifier <Loader active={loaderState} inverted  inline size='tiny' className='ms-2'/></Button>
        </div>
    </>)
}


function ProfilePage() {
    /*###############################[Const]################################# */
    const [profileData, setProfileData] = useState([])
    const [generalData, setGeneralData] = useState({Name:'', Matricule_F:'', Phone:'', Adress:'',Genre:'', Lat: '0.0', Lng:'0.2'})
    const [passwordData, setPasswordData] = useState({Identification:'',PasswordSalt:''})
    
    /*Horiare */
    const [horaireData, setHoraireData] = useState([])
    const [alwaysState , setAlwaysState] = useState(false)
    const [delegList ,setDelegList] = useState([])

    /*Images */
    const [imagesListe, setImagesListe] = useState([])
    const [uploadImageName, setUploadImageName] = useState('')
    const [uploadImage, setUploadImages] = useState()
    const [formaDataArr, setFormDataArr] = useState()
    const [displayedImage, setDisplayedImage] = useState()
    const [todisplayedImage, setToDisplayedImage] = useState([])
    
    /*Position */
    const [myPosition, setMyPosition] = useState([36.17720,9.12337])

    /* Others */
    const [loading , setLoading] = useState(false)
    const [saveBtnState, setSaveBtnState] = useState(false)
    const [loaderState, setLS] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    

    L.Icon.Default.mergeOptions(GConf.LeafleftIcon );
    const panes = [
        {
            menuItem: { key: 'edit', icon: 'edit outline', content: 'Modifier' }, 
            render: () =><><Tab.Pane className='border-div' attached={false}><EditProfile generalData={generalData} setGeneralData={setGeneralData} UpdateGeneralDataFunc={UpdateGeneralDataFunc} delegList={delegList} GetDelegList={GetDelegList} loaderState={loaderState} /></Tab.Pane> <br/></>,
        },
        {
            menuItem: { key: 'mpd', icon: 'eye slash', content: 'MDP' }, 
            render: () =><><Tab.Pane className='border-div' attached={false}><EditPassword passwordData={passwordData} setPasswordData={setPasswordData} UpdatePasswordFunc={UpdatePasswordFunc} loaderState={loaderState} /> </Tab.Pane> <br/></>,
        },
        {
            menuItem: { key: 'comment', icon: 'time', content: 'Horaire' }, 
            render: () => <><Tab.Pane className='border-div' attached={false}><Horaire /></Tab.Pane><br /></>,
        },
        {
            menuItem: { key: 'position', icon: 'map', content: 'Position' },
            render: () => <><Tab.Pane className='border-div' attached={false}><PositionMap  /></Tab.Pane><br /></>,
        },
        {
            menuItem: { key: 'images', icon: 'images', content: 'Images' },
            render: () => <><Tab.Pane className='border-div' attached={false}><ImageCard /></Tab.Pane><br /></>,
        },
        {
            menuItem: { key: 'rate', icon: 'star', content: 'Evaluation' }, 
            render: () => <><Tab.Pane className='border-div p-4' attached={false}><Tab menu={{ secondary: true, className: 'tab-right'}}  panes={RatingPanes} /></Tab.Pane><br /></>,
        }, 
        {
            menuItem: { key: 'print', icon: 'print', content: 'Imprimer' }, 
            render: () => <><Tab.Pane className='border-div' attached={false}><PrintProfile /></Tab.Pane><br /></>,
        },
    ]
    const horairePanes = [
        {
          menuItem: { key: 'users', icon: 'edit', content: 'Entrer' }, 
          render: () => <InputHoraireCard />,
        },
        {
          menuItem: { key: 'calendar', icon: 'calendar', content:  'Calendrier', },  
          render: () => <AcutelCalendarCard />,
        },
      ]
    const RatingPanes = [
        {
          menuItem: { key: 'calendar', icon: 'star', content:  'Avis ', },  
          render: () => <RatingProfile />,
        },
        {
            menuItem: { key: 'users', icon: 'comment', content: 'Commentaire ' }, 
            render: () => <CommentsProfile />,
          },
      ] 
    /*###############################[UseEffect]################################# */
    useEffect(() => {
        
        GetPositionNow();
        axios.post(`${GConf.ApiLink}/profile`, {
            PID: GConf.PID,
            SystemTag : GConf.systemTag
        })
        .then(function (response) {
            console.log(response.data)
            setGeneralData(response.data.general[0])
            setProfileData(response.data)
            setPasswordData(response.data.password[0]) 
            setImagesListe(response.data.images)

            if (response.data.horaire[0]) { setAlwaysState(response.data.horaire[0].ALL_Time) } else { }
            if (response.data.horaire[0]) { setHoraireData(JSON.parse(response.data.horaire[0].WorkingTime)) } else { } 
            setLoading(true)

        }).catch((error) => {
            if(error.request) {
              toast.error(<><div><h5>Probleme de Connextion</h5> Esseyeé de connecter plus tard</div></>, GConf.TostInternetGonf) 
              setProfileData([])
              //setLoading(true)
            }
        });
    }, [])

    /*###############################[Function]################################# */
    const PrintFunction = (frameId) =>{usePrintFunction(frameId)}
    
    /*Genrale */
    const GetDelegList = (value) =>{
        setGeneralData({...generalData, Gouv: value })
        const found = TunMap.Deleg.filter(element => element.tag === value)
        setDelegList(found)
    }
    const UpdateGeneralDataFunc = () =>{
        if (!generalData.Name) {toast.error("Matricule est Invalide !", GConf.TostErrorGonf)}
        // else if (!generalData.Name ) {toast.error("Nom de la ste est  Invalide !", GConf.TostErrorGonf)}
        else if (!generalData.Gouv ) {toast.error("Gouv est  Invalide !", GConf.TostErrorGonf)}
        else if (!generalData.Deleg ) {toast.error("Delegation est  Invalide !", GConf.TostErrorGonf)}
        else if (!generalData.Phone ) {toast.error("Phone est  Invalide !", GConf.TostErrorGonf)}
        else if (!generalData.Adress ) {toast.error("Adress est  Invalide !", GConf.TostErrorGonf)}
        else if (!generalData.Genre ) {toast.error("Genre est  Invalide !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/profile/update/general`, {
                PID : GConf.PID,
                profileDataSent : generalData,
                SystemTag : GConf.systemTag
            }).then(function (response) {
                console.log(response.data)
                if(response.data.affectedRows) {
                    toast.success("Profile Modifieé !", GConf.TostSuucessGonf)
                    setLS(false)
                }
                else{
                    toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
                    setLS(false)
                }
            })                
        }
    }
    const UpdatePasswordFunc = () =>{
        if (!passwordData.Identification) {toast.error("Identifiant est Invalide !", GConf.TostErrorGonf)}
        else if (!passwordData.PasswordSalt ) {toast.error("Mot de passe est  Invalide !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/profile/update/password`, {
                PID : GConf.PID,
                passwordDataSent : passwordData,
                SystemTag : ADIL[GConf.systemTag].RequestTable
            }).then(function (response) {
                if(response.data.affectedRows) {
                    toast.success("Mot de Passe Modifieé !", GConf.TostSuucessGonf)
                    setLS(false)
                }
                else{
                    toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
                    setLS(false)
                }
            })                
        }
    }



    /* Rating */
    const CalculateRating = (table) =>{
        let tot = 0;
        table.map( data => {
            tot = tot + data.Rating
        })
        if (tot == 0) {
            return tot
        } else {
            return parseFloat(tot / table.length).toFixed(1)
        }
        
        //
    }
    const CalculateLikes = (table) =>{
        const WantedValue =  table.length ;
        if ( (WantedValue / 1000) > 1 && (WantedValue / 1000000) < 1) { return parseFloat(WantedValue / 1000 ).toFixed(1) + 'K' }
        else  if ( (WantedValue / 1000000) > 1) { return parseFloat(WantedValue / 1000000 ).toFixed(1) +'M' }
        else{ return parseInt(WantedValue)  }
    }
    const CalculateReview = (table, value ) =>{
        let filteredArray = table.filter(obj => parseInt(obj.Rating) == value );
        if (filteredArray != 0) {
            return(parseInt((filteredArray.length / table.length) * 100 ) )
        } else {
            return 0
        }
        
    }
    const ReturnAvatarGroupList = (list) =>{
        let FinalList = []

        list.map( (data,index) => FinalList.push({ key: index, name: data.Name , src: `https://cdn.abyedh.tn/images/p_pic/${data.PictureId}.gif`},))
        return FinalList
    }

    /*Images */
    const UploadImageFunc = (e) => {
        setDisplayedImage(URL.createObjectURL(e.target.files[0]))
        setUploadImages(e.target.files[0])
    }
    const UpdateImageFunc = (genre) =>{
        if (!uploadImage) {toast.error("Image est Invalide !", GConf.TostErrorGonf) } 
        else {
            const formData = new FormData();
            formData.append("Images", uploadImage);
            formData.append("PID", GConf.PID);
            formData.append("Genre", genre);
            setLS(true)
            axios({
                method: 'post',
                url: `${GConf.ApiInputLink}/nouveaux/image`,
                data: formData ,
            }).then(function (response) {
                toast.success("Image Enregistreé !", GConf.TostSuucessGonf)
                setLS(false)
            }).catch((error) => {
                toast.error(<><div><h5>Probleme de Connextion</h5> La commande sera enregisstrer sur votre appareil  </div></>, GConf.TostInternetGonf)
            });  
        } 
    }
    const handleFileSelect = (event)  =>{
        const files = event.target.files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            const filename = `restaurant_${GConf.PID}_${i}-`;
            formData.append('Images', files[i], filename);
        }
        formData.append("PID", GConf.PID);
        //setDisplayedImage(URL.createObjectURL(event.target.files[0]))
        const uploadedImages = Array.from(event.target.files);
        setToDisplayedImage(uploadedImages);
        //files.map(() => console.log(files.length))
        
        setFormDataArr(formData);
        //UpdateImageFuncMultiple(formData);
    }
    const UpdateImageFuncMultiple = (formData) =>{
        axios.post(`${GConf.ApiLink}/profile/images/ajouter`, formData)
        .then(response => console.log(`Done ` + response.data))
        .catch(error => console.log(error));
    }
    // const UpdateImageFunc = () =>{
    //     if (!uploadImage) { } 
    //     else if (!uploadImageName) { }
    //     else {
    //         const formData = new FormData();
    //         formData.append("ProfileImage", uploadImage);
    //         formData.append("Tag", uploadImageName);
    //         formData.append("PID", GConf.PID);
    //         axios({
    //             method: 'post',
    //             url: `${GConf.ApiLink}/profile/images/ajouter`,
    //             data: formData ,
    //         }).then(function (response) {
    //             console.log(response.data)
    //         }).catch((error) => {
    //             console.log(error)
    //         });  
    //     } 
    // }
    // const UploadImageFunc = (e) => {
    //     setDisplayedImage(URL.createObjectURL(e.target.files[0]))
    //     setUploadImages(e.target.files[0])
    // }
    const RemoveImageFunc = (imgName) => {
        console.log(imgName.slice(0, -4))
        axios.post(`${GConf.ApiLink}/profile/images/deletefile`, {
            fileName : imgName,
        }).then(function (response) {
            console.log(response.data)
            if(response.data.affectedRows) {
                toast.success("Image Supprimeé !", GConf.TostSuucessGonf)
                setLS(false)
            }
            else{
                toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
                setLS(false)
            }
        })
    }
    
    /*Position */
    const GetPositionNow = () =>{
        //get position 
        navigator.geolocation.getCurrentPosition(
            function(position) {
                if (!position.coords.latitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lat</h5></div></>, GConf.TostInternetGonf)}
                else if (!position.coords.longitude) {toast.error(<><div><h5>ENTRE VOTRE POSITION Lng</h5></div></>, GConf.TostInternetGonf)}
                else{
                    setMyPosition([position.coords.latitude, position.coords.longitude])
                }
            },
            function(error) {
                toast.error(<><div><h5>ENTRE VOTRE POSITION</h5></div></>, GConf.TostInternetGonf)
            }
        );
    }
    const CheckPositions = () =>{
        let LAT = myPosition[0] === parseFloat(generalData.Lat)
        let LNG = myPosition[1] === parseFloat(generalData.Lng)
        return (LAT && LNG)
    }
    const UpdatePositionFunc = () =>{
        if (!passwordData.Identification) {toast.error("Identifiant est Invalide !", GConf.TostErrorGonf)}
        else if (!passwordData.PasswordSalt ) {toast.error("Mot de passe est  Invalide !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${GConf.ApiLink}/profile/update/position`, {
                PID : GConf.PID,
                positionDataSent : myPosition,
                SystemTag : GConf.systemTag
            }).then(function (response) {
                if(response.data.affectedRows) {
                    toast.success("Position Modifieé !", GConf.TostSuucessGonf)
                    setLS(false)
                }
                else{
                    toast.error('Erreur esseyez de nouveaux', GConf.TostSuucessGonf)
                    setLS(false)
                }
            })                
        }
    }

    /*Horiare */

    /*###############################[Card]################################# */
    const PrintProfile = () =>{ 
        return(<>
            <div className="d-flex">
                <div className="flex-shrink-0">
                <QRCode value={GConf.PID} size={130} />
                </div>
                <div className="flex-grow-1 ms-3">
                        <h1> {GConf.PID} </h1>
                        Cet identifiant vous distinguera des autres inscrits sur la plateforme. Cela peut aussi être un court moyen de faire de la publicité pour vous
                        <div>
                        <Button size='mini' className='rounded-pill' onClick={() => navigator.clipboard.writeText(localStorage.getItem('PID'))}><Icon name='copy'  /> Copier PID</Button>
                        </div>
                        
                </div>
            </div>
            <Divider />
            <div className="d-flex">
                <div className="flex-shrink-0">
                <QRCode value={`${GConf.systemTag}/${GConf.PID}`} size={130} />
                </div>
                <div className="flex-grow-1 ms-3">
                    Imprimez ce lien qui peut être accroché à la porte de votre magasin afin que vos clients puissent vous joindre facilement, et il peut également être partagé directement sur les réseaux sociaux
                    <div className='mt-2'>
                        <Button size='mini' positive onClick={(e) => PrintFunction('printPID')}> <Icon name='print'  />Imprimer</Button>
                        <Button size='mini' primary target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://abyedh.tn/S/P/${GConf.systemTag}/${GConf.PID}`} >  <Icon name='facebook f' /> Partager </Button>
                    </div>
                </div>
            </div>
        </>)
    }
    const ProfileCard = () =>{
        return(<>
            <div className="card card-body shadow-sm mb-4 sticky-top border-div" style={{top:'70px'}}>
	            <div className="text-center ">
	            	<img className="rounded-circle mb-3" src={`https://cdn.abyedh.tn/images/ads/${GConf.systemTag}.svg`} width="90px" height="90px"/>
	            
	            	 <h6 className='mb-0'>{loading ? profileData.general[0].Name : SKLT.BarreSkl } </h6>
	            	 <div><small className="text-secondary">  ({loading ? profileData.general[0].Genre : SKLT.BarreSkl })</small></div>
	            	<div><small className="text-secondary"><span className="bi bi-geo-alt"></span> {loading ? <> {profileData.general[0].Adress} , {profileData.general[0].Gouv} </> : SKLT.BarreSkl } </small></div>
	            	<div><small className="text-secondary"><span className="bi bi-telephone"></span> +216 {loading ? profileData.general[0].Phone : SKLT.BarreSkl } </small></div> 
                    <h5 className='mt-1 mb-2'>PID : {localStorage.getItem('PID')} <Button size='mini' icon='copy' className='rounded-circle' onClick={() => navigator.clipboard.writeText(localStorage.getItem('PID'))}></Button> </h5>
					<span className='d-none d-md-block'>
                        <Divider /> 
                        <div className='row mt-2'>
                            <div className='col-6'>
                                <Statistic color='red' size='small'>
                                    <Statistic.Value>
                                    {loading ? CalculateRating(profileData.review) : SKLT.BarreSkl }
                                    </Statistic.Value>
                                    <Statistic.Label>Avis</Statistic.Label>
                                </Statistic>
                            </div>
                            <div className='col-6'>
                                <Statistic color='red' size='small'>
                                    <Statistic.Value>
                                    {loading ? CalculateLikes(profileData.likes) : SKLT.BarreSkl }
                                    </Statistic.Value>
                                    <Statistic.Label>J'aimes</Statistic.Label>
                                </Statistic>
                            </div>
                        </div>
                        <Divider />
    
                        <br />
                        <br />
                    </span>
					<div className='d-grid gap-2'>
						<NavLink className='btn btn-danger btn btn-lg bnt-block rounded-pill text-white '   to={`/S/P/${GConf.systemTag}/${GConf.PID}`}>
							<span className='bi bi-person-circle me-2'></span>    
							 Voir Profile 
						</NavLink>
					</div>
	            </div>
            </div>
        </>)
    }
    const LikesProfile = () =>{    
        return(<>
        <div className='card card-body shaows-sm mb-2'>
            <h5>J'aimes</h5>
            { loading ?
            
                profileData.likes.map( (data,index) => <span key={index}>{data.Name}</span>)

             : 'fa'
            }
        </div>
       
        </>)
    }
    const PositionMap = () =>{    
        return(<>
            <div className='p-1'>
                    <h5>Location</h5>
                    <div className='row mb-3'>
                        <div className='col-8'> 
                        Lorsque vous cliquer ici la position enregistré sera 'Mon position' 
                        </div>
                        <div className='col-4 text-end'> 
                                <Button  className='rounded-pill bg-system-btn' disabled={CheckPositions()} size='mini' onClick={ () => UpdatePositionFunc()} ><Icon name='save' /> Modifier Position <Loader inverted active={loaderState}  inline size='tiny' className='ms-2'/></Button>
                        </div>
                    </div>
                    <MapContainer center={[36.071,9.333]} zoom={7} scrollWheelZoom={false} className="map-height">
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[generalData.Lat,generalData.Lng]}>
                            <Popup>Position Enregistrée</Popup>
                        </Marker>
                        <Marker position={[myPosition[0],myPosition[1]]}>
                            <Popup>Mon Position</Popup>
                        </Marker>
                    </MapContainer> 
            </div>
       
        </>)
    }
    const Images = () =>{   
        const imagesGenres = [
            { key: 1 , value: 'Photo de profile', text: 'Photo de profile' },
            { key: 2 , value: 'Image 1', text: 'Image 1' },
            { key: 3 , value: 'Image 2', text: 'Image 2' },
            { key: 4 , value: 'Image 3', text: 'Image 3' },
            { key: 5 , value: 'Image 4', text: 'Image 4' },
            { key: 6 , value: 'Image 5', text: 'Image 5' },
            
        ]

        const ImageCard = (props) =>{
            return(<>
                <div className='card p-1 mb-2 rounded'>
                    <div className='row'>
                        <div className='col-3'>
                            <img className='rounded' src={window.location.origin +  `${GConf.AssetsLink}/${props.data.ImageLink}`}  alt={props.data.Descreption} width='100%' height='80px' />
                        </div>
                        <div className='col-4'>
                            {props.data.ImageTag}
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </>)
        }
        const UploadImage = () =>{
            return(<>
                <div className='card p-2 mb-2 rounded'>
                {/* <form encType="multipart/form-data"> */}
                    <div className='row'>
                        <div className='col-1 align-self-center text-end'>
                            <label onChange={UploadImageFunc} htmlFor="formId"  className='text-info ' role="button">
                                <Input type='file' hidden name="imagez" id="formId"   />
                                <span className='bi bi-cloud-upload-fill bi-md'></span>
                            </label>
                        </div>
                        <div className='col-3'>
                            {displayedImage ? <img src={displayedImage} width='100%' height='50px'  /> : ''}
                        </div>
                        <div className='col-5 align-self-center text-end'>
                        <Dropdown
                            search
                            selection
                            fluid
                            size='mini'
                            wrapSelection={false}
                            options={imagesGenres}
                            placeholder='Selectionnez'
                            className='mb-1 rounded-pill'
                            onChange={(e, { value }) => setUploadImageName(value)}
                            value={uploadImageName}
                        />
                        </div>
                        <div className='col-3 align-self-center text-end'>
                            <Button  className='rounded-pill bg-system-btn' size='tiny' onClick={UpdateImageFunc} ><Icon name='save' /> Modifier <Loader inverted  inline size='tiny' className='ms-2'/></Button>
                        </div>
                    </div>
                {/* </form> */}
                </div>
            </>)
        }
        return(<>
            <div className='p-2 mb-2'>   
                {profileData.images.map( (data,index) => <ImageCard key={index} data={data} />)}
                <br />
                <UploadImage />
            </div>
       
        </>)
    }
    const ImageCard = () =>{
        const UploadImageCard = () =>{
            return(<>
                <div className='card p-2 shadow-sm mb-2 border-div'>
                    <div className='row'>
                        <div className='col-6 align-self-center text-center'>
                                <label onChange={handleFileSelect} htmlFor="formId"   className='text-info' role="button">
                                    <Input type='file' hidden name="Images" id="formId" multiple />
                                    <span className='bi bi-cloud-upload-fill bi-md'> </span> 
                                </label>
                                
                        </div>
                        <div className='col-6'>
                            <Button   className='rounded-pill bg-system-btn' size='tiny' onClick={() => UpdateImageFuncMultiple(formaDataArr)} ><Icon name='save' /> Enregistreé <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                        </div>
                        
                    </div>
                </div>
            </>)
        }
        const DisplayImageCard = (props) => {
            return(<>
                <div className='card card-body shadow-m mb-2 border-div'>
                    <div className='row'>
                       <div className='col-4'><img src={`https://cdn.abyedh.tn/images/Directory/${props.imageLink}`} className='border border-2 rounded shadow-sm' width='200px' height='90px'  /></div> 
                       <div className='col-4'></div> 
                       <div className='col-4'><Button onClick={() => RemoveImageFunc(props.imageLink)}>Delete Btn</Button></div> 
                    </div>
                </div>
            </>)
        }
        const PasDeResultat = () =>{
            return(<>
                <div className='text-center'>
                        <h3>
                            <span className='bi bi-exclamation-triangle-fill text-info bi-md'></span> 
                            Vous n'avait pas d'images
                        </h3>
                        <label onChange={handleFileSelect} htmlFor="formId"   className='text-info' role="button">
                                <Input type='file' hidden name="Images" id="formId" multiple />
                                <img src='https://assets.ansl.tn/Images/usful/uploadImage.jpg' width='100%'  height='150px' />
                        </label>
                        <h3>
                            Cliquer Pour Charger des Imgaes 
                        </h3>
                </div>
            </>)
        }
        return(<>
            {imagesListe.length == 0 ?
                <>
                    {/* <UploadImageCard title='Image de Profile' tag='profile' />  */}
                    <br />
                    <div className='row'>
                            {todisplayedImage.length != '0' ? 
                            <>
                                {todisplayedImage.map((data,index) => 
                                        <div className='col-4 mb-3' key={index}>
                                            <img src={URL.createObjectURL(todisplayedImage[index])} className='border border-2 rounded shadow-sm' width='200px' height='90px'  />
                                        </div>
                                )}
                                
                                <br />
                                <div className='text-end'>
                                    <Button   className='rounded-pill bg-system-btn' size='tiny' onClick={() => UpdateImageFuncMultiple(formaDataArr)} ><Icon name='save' /> Enregistreé <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                                </div>

                            </>   
                            : 
                            <PasDeResultat />}
                    </div>
                </>
                :
                <>
                    <Carousel>
                        {imagesListe.map((data,index) => 
                                <div key={index}>
                                    <img src={`https://cdn.abyedh.tn/images/Directory/${data.ImageLink}`} />
                                    <p className="legend"><Button onClick={() => RemoveImageFunc(data.ImageLink)}>Supprimer</Button></p>
                                </div>
                        )}
                    </Carousel>
                    {/* {imagesListe.map((data,index) => <DisplayImageCard key={index} imageLink={data.ImageLink} />)} */}
                </>  
            }
                
        </>)
    }
    const RatingProfile = () =>{
        const RatingBar = (props) => {
            return (<>
                <div className="row">
                    <div className="col-2"><h3>{props.name}</h3></div>
                    <div className="col-8 align-self-center">
                        <div className="progress" style={{height: "5px"}}>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: `${props.value}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                    </div>
                    <div className="col-2"><h6>{props.value} %</h6></div>
                </div>
            </>)
        }
        return (<>
            {/* <div className='card card-body shadow-sm border-div mb-2 text-center'> */}
                <h5 className='text-start'>Avis</h5>
                <div className='row text-center'>
                    <div className='col-12 col-lg-4 align-self-center'>
                        <h1 className='text-warning'>{loading ? <> {CalculateRating(profileData.review)}</>: 0 }</h1>
                        <Rating className='d-inline' maxRating={5} defaultRating={loading ? CalculateRating(profileData.review) : 0 } icon='star' disabled size='massive' />
                        <h6 className="pt-2">{loading ? profileData.review.length : 0 } </h6>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <RatingBar name={1} value={loading ? CalculateReview(profileData.review, 1) : 0 } />
                        <RatingBar name={2} value={loading ? CalculateReview(profileData.review, 2) : 0 } />
                        <RatingBar name={3} value={loading ? CalculateReview(profileData.review, 3) : 0 } />
                        <RatingBar name={4} value={loading ? CalculateReview(profileData.review, 4) : 0 } />
                        <RatingBar name={5} value={loading ? CalculateReview(profileData.review, 5) : 0 } />
                    </div>
                </div> 
                <hr />
                <h5>J'aimes</h5>
                {/* <div style={{height:'200px', overflowX:'auto', overflowX:'hidden'}}> */}
                        {/* <h2 className='text-center'>{profileData.likes ? profileData.likes.length : '...'}</h2>  */}
                        <AvatarGroup className='text-center' size="large" maxCount={12} data={ReturnAvatarGroupList(profileData.likes)}   borderColor="#cfcecc" />
                        {/* { loading ?
                        
                            profileData.likes.map( (data,index) => <a href='https://www.abyedh.tn' key={index}>{data.Name}</a>)

                        : 'fa'
                        } */}
                        
                {/* </div>                */}
            {/* </div> */}
        </>)
    }
    const CommentsProfile = () =>{

        const CommentsCard = (props) => {
            return (<>
                    <div className="d-flex mb-2 border-bottom">
                        <div className="flex-shrink-0">
                            <img src={`https://cdn.abyedh.tn/images/p_pic/${props.data.PictureId}.gif`} className='rounded-circle' width='30px' alt="..." />
                        </div>
                        <div className="flex-grow-1 ms-3 w-100">
                            <div className='row  mb-0'>
                               <div className='col-6 text-start'>{props.data.Name}</div>
                               <div className='col-6 text-end'><small className='text-secondary'> {new Date (props.data.R_Date).toLocaleDateString()}</small></div>
                            </div>
                            <div><b>{props.data.Comment} </b></div>
                        </div>
                    </div>
            </>)
        }

        return(<>
        
                <div className='row '>
                    <div className='col-12 pe-1'>
                            <h5>Commentaires</h5> 
                            <div style={{height:'200px', overflowX:'auto', overflowX:'hidden'}}>
                                { loading ?
                                    <Comment.Group>
                                    { profileData.review.map( (data,index) =>  <CommentsCard key={index} data={data} /> )}
                                    </Comment.Group>
                                    : '...'
                                }    
                            </div>  
                    </div>
                </div>
        </>)
    }
    const DayHoraire = (props) =>{
        return(<>
                <div className='row'>
                    <div  className='col-1 align-self-center'>
                        <b>{props.data.day}</b>
                    </div>
                    <div  className='col-5'>
                        <div className='row'>
                            <div className='col-6'><Input icon='calendar alternate' type='time' size="mini" iconPosition='left' disabled={JSON.parse(props.data.dayOff)}  fluid className='mb-1' value={props.data.matin.start}/></div>
                            <div className='col-6'><Input icon='calendar alternate' type='time' size="mini" iconPosition='left' disabled={JSON.parse(props.data.dayOff)}  fluid className='mb-1' value={props.data.matin.end}/></div>
                        </div>
                    </div>
                    <div  className='col-5'>
                        <div className='row'>
                            <div className='col-6'><Input icon='calendar alternate' type='time' size="mini" iconPosition='left' disabled={JSON.parse(props.data.dayOff)}  fluid className='mb-1' value={props.data.soir.start}/></div>
                            <div className='col-6'><Input icon='calendar alternate' type='time' size="mini" iconPosition='left' disabled={JSON.parse(props.data.dayOff)}  fluid className='mb-1' value={props.data.soir.end}/></div>
                        </div>
                    </div>
                    <div  className='col-1 align-self-center'>
                        <div className="form-check form-switch">
                            <input className="form-check-input form-check-input-lg" type="checkbox"  onChange={() => setAlwaysState(!props.data.dayOff)}  checked={JSON.parse(props.data.dayOff)} />
                        </div>
                    </div>
                </div>
        </>)
    }
    const InputHoraireCard = () =>{
        return(<>
            <div className='card-body '>
                <div className='row'>
                    <div className='col-12 col-lg-11 align-self-center'> 
                        <h5 className='mb-0'>Toujour Overt</h5>  
                        <small>Coucher pour apraitre que vous étes toujour ouvert </small>
                    </div>
                    <div className='col-12 col-lg-1 align-self-center'> 
                        <div className="form-check form-switch">
                            <input className="form-check-input form-check-input-lg" type="checkbox"  onChange={() => setAlwaysState(!alwaysState)}  checked={alwaysState} />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className='row text-danger mb-2'>
                    <div  className='col-1'> <b>Jour</b> </div>
                    <div  className='col-5'> <small>Matin</small> </div>
                    <div  className='col-5'> <small>Soir</small> </div>
                    <div  className='col-1'> <small>Repos</small> </div>
                </div>
                
                {
                    horaireData.map( (data,index) => <DayHoraire key={index} data={data}/>)
                }
                {/* <DayHoraire />
                <DayHoraire />
                <DayHoraire />
                <DayHoraire />
                <DayHoraire />
                <DayHoraire /> */}

                <div className='row mb-2 mt-4'>
                        <div className='col-8'> </div>
                        <div className='col-4 text-end'> 
                                <Button  className='rounded-pill bg-system-btn' size='mini' ><Icon name='save' /> Modifier Horaire <Loader inverted  inline size='tiny' className='ms-2'/></Button>
                        </div>
                    </div>
            </div>
            </>)
    }
    const AcutelCalendarCard = () =>{
        return(<>
        <FullCalendar 
            plugins={[ timeGridPlugin ]}
            initialView="timeGridWeek"
            locale='fr' 
            dayHeaderFormat = {{weekday: 'short'}}
            events={[
                { title: 'S1',  start: '2022-08-18T08:00:00' , end: "2022-08-18T12:00:00", display: 'background', backgroundColor:'red'},
                { title: 'S2', start: '2022-08-18T14:00:00', end: "2022-08-18T18:00:00", display: 'background' },
                { title: 'S1',  start: '2022-08-18T08:00:00' , end: "2022-08-18T12:00:00", display: 'background'},
                { title: 'S2',  start: '2022-08-18T14:00:00' , end: "2022-08-18T18:00:00", display: 'background'},
            ]}
            headerToolbar='false'
            height='350px'
            allDaySlot= {false}
        />
        </>)
    }
    const Horaire = () =>{
        return(<>
            <Tab menu={{ secondary: true, className: 'tab-right'}} defaultActiveIndex={1} panes={horairePanes} />
        </>)
    }
    return (<>
        {/* <Bounce bottom>
            <h5><span className="bi bi-person-circle"></span> Profile</h5>
            <br /><br /> */}
            <div className="row">
                    <div className="col-12 col-lg-4">
                        <ProfileCard /> 
                        <p>{uploadImageName}</p>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="mt-0 p-1"   style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}>
                            <Menu secondary >
                                <Menu.Item active={activeIndex == 0} className='rounded-pill p-2 m-1' size='tiny' onClick={ () => setActiveIndex(0)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-person-circle'></span> Modifier
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 1} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(1)}>
                                <span className='text-secondary '>
                                    <span className='bi bi-eye-fill'></span> MDP
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 2} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(2)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-clock-fill'></span> Horaire
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 3} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(3)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-geo-alt-fill'></span> Position
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 4} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(4)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-images'></span> Images
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 5} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(5)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-star-half'></span> Evaluation
                                </span>
                                </Menu.Item>
                                <Menu.Item active={activeIndex == 6} className='rounded-pill p-2 m-1' onClick={ () => setActiveIndex(6)}>
                                <span className='text-secondary'>
                                    <span className='bi bi-printer-fill'></span> Imprimer
                                </span>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <Tab activeIndex={activeIndex} menu={{ secondary: true, pointing: true , }} panes={panes} className="no-menu-tabs" />
                    </div>
        </div>
        {/* </Bounce> */}
        <FrameForPrint frameId='printPID' src={`/App/Profile/ProfilePrint`} />
    </>);
}

export default ProfilePage;