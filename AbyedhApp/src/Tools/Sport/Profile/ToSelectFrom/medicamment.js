import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GConf from '../../../../AssetsM/generalConf';
import { Button, Placeholder } from 'semantic-ui-react';
import SubCat from '../../subCategListe';

function BlogProfilePage() {
        /* ###########################[const]############################ */
        let {genre,tag,code} = useParams()
        let [loading, SetLoading] = useState(true)
        let [articleData, setArticleData] = useState([])
    
        /*#########################[UseEffect]###########################*/
        useEffect(() => {
            window.scrollTo(0, 0);
            axios.post(`${GConf.ApiToolsLink}/products/liste/select`, {
                tableName: SubCat[genre].tableName,
                selected: code,
              })
              .then(function (response) {
                    console.log(response.data)
                    setArticleData(response.data[0])
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
        const ArticleCard = (props)=>{
            return(<>
                <div className='card card-body shadow-sm mb-4 border-div'>
                        <div className='text-center mb-4'><img src={`https://cdn.abyedh.tn/images/Tools/${SubCat[genre].subCategories.find(item => item.name === tag).image}`} className='text-center' width={'50px'} height={'50px'} /></div> 
                        <h5 className='d-inline mt-0 mb-1'>Nom : {props.data.Nom}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Classe : {props.data.Classe}</h5>
                        <h5 className='d-inline mt-0 mb-1'>AMM : {props.data.AMM}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Conditionnement_primaire : {props.data.Conditionnement_primaire}</h5>
                        <h5 className='d-inline mt-0 mb-1'>DCI : {props.data.DCI}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Date_AMM : {props.data.Date_AMM}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Dosage : {props.data.Dosage}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Duree_de_conservation : {props.data.Duree_de_conservation}</h5>
                        <h5 className='d-inline mt-0 mb-1'>G_P_B : {props.data.G_P_B}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Indications : {props.data.Indications}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Laboratoire : {props.data.Laboratoire}</h5>
                        <h5 className='d-inline mt-0 mb-1'>Presentation : {props.data.Presentation}</h5>
                </div>
            </>)
        }
        const SekeltonCard = () =>{
            const PlaceHolderCard = () =>{
                return(<>
                <Placeholder className='mb-0 border-div' style={{ height: 120, width: '100%' }}>
                    <Placeholder.Image />
                </Placeholder>
                </>)
            }
            return(<>
                <PlaceHolderCard />
                <PlaceHolderCard />
                <PlaceHolderCard />
            </>)
        }

        return ( <>
                {
                    loading ? 
                    <SekeltonCard />
                    :
                    <div>
                       <ArticleCard data={articleData} />
                    </div>
                }
            
    </> );
}

export default BlogProfilePage;