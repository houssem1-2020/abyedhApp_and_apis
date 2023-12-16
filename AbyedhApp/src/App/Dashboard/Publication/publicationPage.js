import React, {useEffect,useState}  from 'react';
import APPConf from '../../AssetsM/APPConf';
import { Form, Icon, Input, Loader, Menu, TextArea } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Button , Tab} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-reveal';
import SKLT from '../../AssetsM/Cards/usedSlk';
import { useNavigate} from 'react-router-dom';
import TableGrid from '../../AssetsM/Cards/tableGrid';
import { _ } from 'gridjs-react';
import TableImage from '../../AssetsM/Cards/tableImg';
import axios from 'axios';
import { toast } from 'react-toastify';
import GConf from '../../../AssetsM/generalConf';


const CustomTabs = ({activeIndex, setActiveIndex}) => {
    return(<>

           <div className="mt-1 p-1 mb-4"   style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                <Menu secondary >
                    <Menu.Item key={0} active={activeIndex == 0} className='rounded-pill' onClick={ () => setActiveIndex(0)}>
                        <span style={{color: 'red'}}>
                            <b>
                            <span className={`bi bi-blockquote-left`}></span> Texte
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={1} active={activeIndex == 1} className='rounded-pill' onClick={ () => setActiveIndex(1)}>
                        <span style={{color: 'blue'}}>
                            <b>
                            <span className={`bi bi-list-columns-reverse`}></span> Article
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={2} active={activeIndex == 2} className='rounded-pill' onClick={ () => setActiveIndex(2)}>
                        <span style={{color: 'green'}}>
                            <b>
                            <span className={`bi bi-images`}></span> Image
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={3} active={activeIndex == 3} className='rounded-pill' onClick={ () => setActiveIndex(3)}>
                        <span style={{color: 'dark'}}>
                            <b>
                            <span className={`bi bi-camera-reels`}></span> Video
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={5} active={activeIndex == 5} className='rounded-pill' onClick={ () => setActiveIndex(5)}>
                        <span style={{color: 'gray'}}>
                            <b>
                            <span className={`bi bi-badge-ad`}></span> Annonces
                            </b>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={4} active={activeIndex == 4} className='rounded-pill' onClick={ () => setActiveIndex(4)}>
                        <span style={{color: 'pink'}}>
                            <b>
                            <span className={`bi bi-trash`}></span> Supprimer
                            </b>
                        </span>
                    </Menu.Item>
                    
                </Menu>
          </div>
    </>)
}

const TextPubCard = ({publicationData, setPublicationData, SavePublicationFunc, disabledSaveBtn , loaderState}) => {
    return(<>
            <div className='  card-body  mb-4 border-div'>
                <Form className='mb-3'>
                    <TextArea placeholder='500 caretctére max'  rows={4} value={publicationData.text} onChange={ (e,value) => setPublicationData({...publicationData, text:e.target.value})} />
                </Form>
                <div className='p-1'>
                    <Button className='rounded-pill' fluid onClick={() => SavePublicationFunc('text','text','text')} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:'red', color:'white'}} >   تسجيل   <Icon name='save' />   <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                </div>
            </div>
    </>)
}
const ArticlePubCard = ({publicationData, setPublicationData, SavePublicationFunc, disabledSaveBtn , loaderState}) => {
    return(<>
            <div className='  card-body  mb-4 border-div'>
                <Form className='mb-3'>
                    <TextArea placeholder='3500 caretctére max'  rows={8} value={publicationData.article} onChange={ (e,value) => setPublicationData({...publicationData, article:e.target.value})} />
                </Form>
                <div className='p-1'>
                    <Button className='rounded-pill' fluid onClick={() => SavePublicationFunc('article','article','article')} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:'blue', color:'white'}} >   تسجيل   <Icon name='save' />   <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                </div>
            </div>
    </>)
}
const ImagePubCard = ({publicationData, setPublicationData, SavePublicationFunc, disabledSaveBtn , loaderState}) => {
    const [imageLink, setImageLink] = useState('')

    const GetImageFunction = (link) => {
        console.log(link);
        setPublicationData({...publicationData, imageUrl: link })
        checkImageURL(link, isValid => {
           if (isValid) {
             console.log(true);
             setImageLink(link)
             // setPublicationData({...publicationData, imageUrl: link })

           } else {
            console.log(false);
            toast.error(<><div><h5> URL Invalide </h5>  esseyer une autre image !  </div></>, GConf.TostInternetGonf)
            //setPublicationData({...publicationData, image: link })
           }
          });
        
    }

    function checkImageURL(url, callback) {
        const img = new Image();
        
        img.onload = function() {
          callback(true); // Image loaded successfully
        };
      
        img.onerror = function() {
          callback(false); // Image failed to load
        };
      
        img.src = url;
      }

    return(<>
            <div className='  card-body  mb-4 border-div'>
                <Form className='mb-3'>
                    <TextArea placeholder='150 caretctére max'  rows={2} value={publicationData.imageText} onChange={ (e,value) => setPublicationData({...publicationData, imageText:e.target.value})} />
                </Form>
                <Input className='text-start'  fluid   placeholder='Lien'   onBlur={(e) => GetImageFunction(e.target.value)} />
                <br />
                {imageLink == '' ? <></> : <img src={imageLink} width={'100%'} height='auto' />}
                <br /> 
                <br /> 
                <div className='p-1'>
                    <Button className='rounded-pill' fluid onClick={() => SavePublicationFunc('image','image','image')} disabled={disabledSaveBtn} size='small' icon style={{backgroundColor:'green', color:'white'}} >   تسجيل   <Icon name='save' />   <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                </div>
            </div>
    </>)
}
const VideoPubCard = ({publicationData, setPublicationData, SavePublicationFunc, disabledSaveBtn , loaderState}) => {
    const [videoLink, setVideoLink] = useState('')

    const GetImageFunction = (link) => {
        //checkVideoURL(link, isValid => {
           //if (isValid) {
             //console.log(true);
             setVideoLink(link)
             setPublicationData({...publicationData, videoUrl: link })

           //} else {
            //console.log(false);
            //setPublicationData({...publicationData, image: link })
           //}
          //});
        
    }

    function checkVideoURL(url, callback) {
        const video = document.createElement('video');
  
        video.onloadedmetadata = video.oncanplay = function() {
            callback(true); // Video loaded successfully
        };

        video.onerror = function() {
            callback(false); // Video failed to load
        };

        video.src = url;
    }

    return(<>
            <div className='  card-body  mb-4 border-div'>
                <Form className='mb-3'>
                    <TextArea placeholder='150 caretctére max'  rows={2} value={publicationData.videoText} onChange={ (e,value) => setPublicationData({...publicationData, videoText:e.target.value})} />
                </Form>
                <Input className='text-start'  fluid   placeholder='Lien'  onBlur={(e) => GetImageFunction(e.target.value)} />
                <br />
                {videoLink == '' ? 
                    <></> 
                    : 
                    <iframe
                        width="100%" height="250"
                        src={`https://www.youtube.com/embed/${videoLink}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    }
                <br /> 
                <br /> 
                <div className='p-1'>
                    <Button className='rounded-pill' fluid onClick={() => SavePublicationFunc('video','video','video')} disabled={false} size='small' icon style={{backgroundColor: '#111112' , color:'white'}} >   تسجيل   <Icon name='save' />   <Loader inverted active={loaderState} inline size='tiny' className='ms-2 text-danger'/></Button>
                </div>
            </div>
    </>)
}
const ReseauxPubCard = () =>{
    return(<>
    Resaeux Sociale 
    </>)
}
const AnnocesPubCard = () =>{
    return(<>
    Annonces 
    </>)
}

function PublicationPage() {
     /*#########################[Const]##################################*/
     const [publicationData, setPublicationData] = useState({text : '', article:'', imageText:'', imageUrl:'', videoText:'', videoUrl:''})
     const [activeIndex, setActiveIndex] = useState(0)
     const [loaderState, setLS] = useState(false)
     const [disabledSaveBtn, setDisabledBtn] = useState(false)

     const panesRes = [
        {
          menuItem: { key: 'attent',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
          render: () => <TextPubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
        {
          menuItem: { key: 'vu',  content: <span className='text-warning'><b><span className='bi bi-hourglass-split'></span> En Attent</b></span> , className:'rounded-pill'},
          render: () => <ArticlePubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
        {
          menuItem: { key: 'accept',  content: <span className='text-success'><b><span className='bi bi-check-square-fill'></span> Accepteé</b></span> , className:'rounded-pill' },
          render: () => <ImagePubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
        {
          menuItem: { key: 'refuse',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Refuseé</b></span>, className:'rounded-pill' },
          render: () => <VideoPubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
        {
          menuItem: { key: 'retarder',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Retardeé</b></span>, className:'rounded-pill' },
          render: () => <ReseauxPubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
        {
          menuItem: { key: 'redireter',  content: <span className='text-danger'><b><span className='bi bi-x-square-fill'></span> Redirecte</b></span>, className:'rounded-pill' },
          render: () => <AnnocesPubCard publicationData={publicationData} setPublicationData={setPublicationData} SavePublicationFunc={SavePublicationFunc} disabledSaveBtn={disabledSaveBtn} loaderState={loaderState} />,
        },
    ]

     /*#########################[UseEffect]##################################*/

     /*#########################[Functions]##################################*/
    const SavePublicationFunc= (genre, columnName, data) =>{
        if (!data) {toast.error("أدخل المعلومات المطلوبة !", GConf.TostErrorGonf)}
        else{
            setLS(true)
            axios.post(`${APPConf.ApiLink}/publications/ajouter`, {
                PID : APPConf.PID,
                TAG : APPConf.systemTag ,
                genre : genre,
                publicationData: publicationData ,
            }).then(function (response) {
                console.log(response.data)
                toast.success(<><div><h5>تم تسجيل  المنشور  بنجاح </h5>  </div></>, GConf.TostInternetGonf)
                setLS(false)
                setDisabledBtn(true)
            }).catch((error) => {
                if(error.request) {
                  toast.error(<><div><h5> لم يتم تسجيل المنشور</h5> حاول مرة أخري  </div></>, GConf.TostInternetGonf)   
                  setLS(false)
                }
            });
        } 
    }
     /*#########################[Card]##################################*/

    return ( <> 
                <CustomTabs  activeIndex={activeIndex} setActiveIndex={setActiveIndex}   />
                <Tab menu={{ secondary: true }} activeIndex={activeIndex} panes={panesRes}  className='no-menu-tabs mt-2' />
        </> );
}

export default PublicationPage;