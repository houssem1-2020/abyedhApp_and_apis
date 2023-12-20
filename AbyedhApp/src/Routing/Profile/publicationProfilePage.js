import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GConf from '../../AssetsM/generalConf';
import { Button, Icon } from 'semantic-ui-react';


function PublicationProfilePage(props) {
    /* ############### Const #################*/
        let {tag,PID} = useParams()
        let [loading,setLoading] = useState(true)
        let [postsListe,setPostsListe] = useState([])

    /* ############### UseEffect #################*/
     useEffect(() => {
        axios.post(`${GConf.ApiLink}/publications`, {
            PID:PID,
          })
          .then(function (response) {
            setPostsListe(response.data)
            setLoading(false)
        })
        
        }, [])
    /* ############### Functions #################*/
    const isRTL = (text) => {
        const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
        return rtlChars.test(text);
      };

    /* ############### Card #################*/
    const PublicationEmtyCard = () =>{
        return(<>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='card-body'>
                <div className='text-center'> <img src={`https://cdn.abyedh.tn/images/Search/blog-post.svg`} className='mb-2' width='100px' height='100px' /> </div>
                <div className='text-center'>   هذا العميل ليس لديه منشورات  </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>)
    }
    const PublicationGenreCard = ({ status, postData }) => {
        const StateCard = (props) =>{ return <span className={`badge bg-${props.color}`}> {props.text} </span>}
        const statusCard = React.useCallback(() => {
          switch(status) {
            case 'text': return  <TextPostCard data={postData} Name={props.pidData.genrale[0].Name} />;  
            case 'article': return  <ArticlePostCard data={postData} Name={props.pidData.genrale[0].Name} />;  
            case 'image': return  <ImagePostCard data={postData} Name={props.pidData.genrale[0].Name} />;  
            case 'video': return  <VideoPostCard data={postData} Name={props.pidData.genrale[0].Name} />;  

            default:  return <>Indefinie Poste</>;    
          }
        }, [status]);
      
        return (
          <div className="container-stoppet">
            {statusCard()}
          </div>
        );
    }
    const TextPostCard = (props) =>{
        return(<>
        <div className='card  border-div mb-4 '>
            <div className='card-body'>
                <div className=' row' dir='rtl'>
                    <div className='col-10'>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${tag}.gif`}   width='50px' height='50px'/>     
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {/* {props.data.PidData.Name}  */}
                                <b>{props.Name}</b>
                                <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>
                <p className='mt-3 mb-1' dir={isRTL(props.data.TextData) ? 'rtl' : 'ltr'}>
                    {props.data.TextData}
                </p>
            </div>
            <div className='p-1'>
                <Button.Group fluid>
                    <Button className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='like' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='comments' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='share' /></Button>
                </Button.Group>
            </div>
        </div> 
        </>)
    }
    const ArticlePostCard = (props) =>{
        return(<>
        <div className='card  border-div mb-4 '>
            <div className='card-body'>
                <div className=' row' dir='rtl'>
                    <div className='col-10'>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${tag}.gif`}   width='50px' height='50px'/>     
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {/* {props.data.PidData.Name}  */}
                                <b>{props.Name}</b>
                                <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>
                <p className='mt-3 mb-1' dir={isRTL(props.data.ArticleData) ? 'rtl' : 'ltr'}>
                    {props.data.ArticleData}
                </p>
            </div>
            <div className='p-1'>
                <Button.Group fluid>
                    <Button className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='like' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='comments' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='share' /></Button>
                </Button.Group>
            </div>
        </div> 
        </>)
    }
    const ImagePostCard = (props) =>{
        return(<>
        <div className='card border-div mb-4 '> 
            <div className='card-body'>
                <div className=' row' dir='rtl'>
                    <div className='col-10'>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${tag}.gif`}   width='50px' height='50px'/>     
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {/* {props.data.PidData.Name}  */}
                                <b>{props.Name}</b>
                                <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>
                <p className='mt-3 mb-1' dir={isRTL(JSON.parse(props.data.ImageData).text) ? 'rtl' : 'ltr'}> {JSON.parse(props.data.ImageData).text} </p>
            </div>
            
            <img src={JSON.parse(props.data.ImageData).url}  />
            <div className='p-1'>
                <Button.Group fluid>
                    <Button className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='like' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='comments' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='share' /></Button>
                </Button.Group>
            </div>
        </div> 
        </>)
    }
    const VideoPostCard = (props) =>{
        return(<>
        <div className='card border-div mb-4 '>
            <div className='card-body'>
                <div className=' row' dir='rtl'>
                    <div className='col-10'>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={`https://cdn.abyedh.tn/images/Search/CIcons/${tag}.gif`}   width='50px' height='50px'/>     
                            </div>
                            <div className="flex-grow-1 ms-3">
                                {/* {props.data.PidData.Name}  */}
                                <b>{props.Name}</b>
                                <div><small>{props.data.Pub_Time.slice(0,-3)} | {new Date(props.data.Pub_Date).toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2  align-self-center  '>
                        {/* <span className={`bi ${NotifGenres[props.data.Notif_Name].icon} bi-md text-success`}></span> */}
                    </div>
                </div>

                {/* <div>{new Date(props.data.Pub_Date).toISOString().split('T')[0] } | {props.data.Pub_Time}</div>  */}
                <p className='mt-3 mb-1' dir={isRTL(JSON.parse(props.data.VideoData).text) ? 'rtl' : 'ltr'}> {JSON.parse(props.data.VideoData).text} </p>
            </div>
            
            <iframe
                width="100%" height="250"
                src={`https://www.youtube.com/embed/${JSON.parse(props.data.VideoData).url}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className='p-1'>
                <Button.Group fluid>
                    <Button className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='like' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='comments' /> </Button>
                    <Button  className='bg-white' style={{color: GConf.ADIL[tag].themeColor}} icon> <Icon name='share' /></Button>
                </Button.Group>
            </div>
        </div> 
        </>)
    }


    return ( <>
    {
        loading ? <></>
        :
        <>
        {postsListe.length == 0 ?  <PublicationEmtyCard /> :
        <>
            {
                postsListe.map((data,index) => <PublicationGenreCard key={index} status={data.Pub_Genre} postData={data} />)
            }
        </>}
        </>
    }
            
    </> );
}

export default PublicationProfilePage;