import React, { useEffect} from 'react';
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react'
import GConf from '../AssetsM/generalConf';

function setPageSize() {
    const style = document.createElement('style');
    style.innerHTML = `@page {size: landscape}`;
    style.id = 'page-orientation';
    document.head.appendChild(style);
}

function ToolsLandingPage() {
    /*#########################[Const]###########################*/
    const panes = [
        {
            menuItem: { key: 'edfit', icon: 'shield', content:  <span className='me-2'>تطبيقات</span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <AppsCard />,
        },
        {
          menuItem: { key: 'edit', icon: 'book', content:  <span className='me-2'>المدونات</span> , dir:'rtl',  className:'rounded-pill border-tabs' },
          render: () => <Encyclipedia />,
        },
        // {
        //     menuItem: { key: 'edith', icon: 'wrench', content:  <span className='me-2'>أدوات</span> , dir:'rtl',  className:'rounded-pill border-tabs' },
        //   render: () => <ToolsCard />,
        // },

      ]

    /*#########################[UseEffect]###########################*/
    useEffect(() => {
        setPageSize();
        window.scrollTo(0, 0);
    }, [])

    /*#########################[Function]###########################*/
    
    /*#########################[Card]###########################*/
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
                            <NavLink exact='true' to='/' className="m-0 p-0 ms-3">
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
            <div className='card-body rounded-bottom-card footered-card' style={{backgroundColor:'#46d5e8', bottom:'0px !important', position:'relative'}}>
                <div className='text-end text-white me-5'>
                    <b>منصة أبيض التونسية </b>
                </div>
            </div>
        </>)
    }
    const AdsLanding = () =>{
        return(<>
        <div className='card-body   rounded-0' style={{height:'170px',   marginTop:'70px'}}>
            <div className='row'>
                <div className='col-12 col-lg-8 align-self-center text-center'>
                       <h3 className='' dir='rtl' style={{color:'#46d5e8'}}>إكتشف مجموعة أدوات أبيض الإبداعية التي تغنيك عن عديد الأدوات الأخري .</h3>
                       <h6 className='text-secondary d-none d-lg-block'>مجموعة متكاملة من الأدوات الرقمية و  التطبيقات التونسية التي تساعدك علي إيجاد المعلومة المناسبة</h6> 
                </div>
                <div className='col-4 align-self-end text-center d-none d-lg-block'>
                    <img src='https://cdn.abyedh.tn/images/Tools/ads.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
                <div className='col-12 align-self-end text-center d-lg-none mt-4'>
                    <img src='https://cdn.abyedh.tn/images/Tools/ads.svg' className='img-responsive' width='40%' height='40%'  />
                </div>
            </div> 
        </div>
        </>)
    }

    const LinkCard = (props) =>{
        return(<>
            <NavLink exact='true' to={`/Tools/${props.link}`} >
                <div className='card p-0 shadow-sm mb-3 text-center border-div  '>
                   <div className='mb-2'><img src={`https://cdn.abyedh.tn/images/Tools/${props.img}`} className='img-responsive ' width='60px' height='60px' /></div>    
                </div>
                <div className='mb-2 text-center text-secondary'><h6><b>{props.name}</b></h6></div> 
            </NavLink> 
        </>)
    }
    const InlineLinkCard = (props) =>{
        return(<>
            <NavLink exact='true' to={`/Tools/${props.link}`} >
                <div className='card p-0 shadow-sm mb-3 text-center border-div  ms-3'>
                   <div className='mb-2'><img src={`https://cdn.abyedh.tn/images/Tools/${props.img}`} className='img-responsive ' width='60px' height='60px' /></div>    
                </div>
                <div className='mb-2 text-center text-secondary'><h6><b>{props.name}</b></h6></div> 
            </NavLink> 
        </>)
    }
    const Encyclipedia = () =>{
        return(<>
            <div className='row' dir='rtl'>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Blog' name='الإدارية' img='blog.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Products' name='  المنتجات ' img='products.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name='  القانونية ' img='politics.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Sport' name='الرياضية  ' img='sport.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name=' الإقتصادية ' img='finance.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name=' السياحية ' img='images.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name=' الصحافية ' img='journal.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Art' name=' الثقافية ' img='art.svg' /></div> 
            </div> 
        </>)
    }
    const ToolsCard = () =>{
        return(<>
            <div className='row' dir='rtl'>
                <div className='col-4 col-lg-2 mb-3 '><LinkCard link='Data' name=' إحصائيات' img='data.svg' /></div>
                {/* <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name=' يومية ' img='calendar.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name=' المنتدي ' img='forum.svg' /></div> */}
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='News' name=' الإخبار ' img='news.svg' /></div>
            </div> 
        </>)
    }
    const AppsCard = () =>{
        return(<>
            <div className='row' dir='rtl'>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Taxi' name='تاكسي' img='taxi.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Louage' name='سيارة اجرة' img='louage.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Public' name=' النقل ' img='public.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='Renting' name=' للكراء' img='rent_house.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='#' name='أدات فلاحية' img='nature.svg' /></div>
                <div className='col-4 col-lg-2 mb-3'><LinkCard link='News' name=' الإخبار ' img='news.svg' /></div>
                {/* <div className='col-4 col-lg-2 mb-3 '><LinkCard link='Data' name=' إحصائيات' img='data.svg' /></div> */}
                {/* <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name=' إستدعاءات' img='invitation.svg' /></div> */}
                <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name=' الدور التونسي' img='sport.svg' /></div>
                <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name='salaire' img='salaire.svg' /></div> 
                <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name='خدمني' img='jobs.svg' /></div> 
                <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name='حكايات' img='stories.svg' /></div> 
                <div className='col-4 col-lg-1 mb-3'><LinkCard link='#' name='كمبي' img='camping.svg' /></div> 
                
            </div> 
        </>)
    }

    return ( <>
            <TopNavBar />
            <AdsLanding />
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                {/* <Tab dir='rtl' menu={{ secondary: true, style: {overflowX : 'auto', justifyContent: 'right',  overflowY : 'hidden', paddingBottom:'5px'} }} panes={panes} /> */}
                <h5 dir='rtl'>موسوعات </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Blog' name='الإدارية' img='blog.svg' /></div>
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Products' name='  المنتجات ' img='products.svg' /></div>
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Sport' name='الرياضية  ' img='sport.svg' /></div>
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Art' name=' الثقافية ' img='art.svg' /></div>
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Touristique' name=' السياحية ' img='images.svg' /></div>
                        <div className='col-4 col-lg-2 mb-3'><InlineLinkCard link='Jurdique' name='  القانونية ' img='politics.svg' /></div>
                </div> 
                <h5 dir='rtl'> تطبيقات مجال النقل </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Taxi' name='تاكسي' img='taxi.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Louage' name='سيارة اجرة' img='louage.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Public' name=' النقل ' img='public.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Automobile' name=' كرهبة' img='automobile.svg' /></div>
                </div> 

                <h5 dir='rtl'> تطبيقات  مجال التعليم  </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Etude' name='دروس خصوصية' img='etude.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='ProgramScolair' name='البرنامج السنوي ' img='prog_annu.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='LivreScolair' name='الكتاب المدرسي ' img='livre_scolaire.svg' /></div>
                        <div className='col-5 col-lg-2 mb-3'><InlineLinkCard link='Devoirat' name='إمتحانات ' img='devoire.svg' /></div>
                </div> 

                {/* <h5 dir='rtl'> تطبيقات  المجال الصحي  </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-12 col-lg-2 mb-3'><InlineLinkCard link='Products' name='معجم الأدوية' img='medicamment.svg' /></div>
                </div> */}

                <h5 dir='rtl'> تطبيقات   المال و الأعمال  </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-7 col-lg-2 mb-3'><InlineLinkCard link='Jobs' name='خدمني' img='jobs.svg' /></div>
                        <div className='col-7 col-lg-2 mb-3'><InlineLinkCard link='Salaire' name='شهرية' img='salaire.svg' /></div>
                </div>

                <h5 dir='rtl'> تطبيقات  المجال  العقاري  </h5>
                <div className="mt-1 p-1 mb-4 d-flex" dir='rtl'  style={{width:'100%', overflowX: 'auto', overflowY : 'hidden', whiteSpace:'nowrap'}}> 
                        <div className='col-12 col-lg-2 mb-3'><InlineLinkCard link='Renting' name=' للكراء' img='rent_house.svg' /></div>
                </div>

                <h5 dir='rtl'> تطبيقات  أخري  </h5>
                <div className='row' dir='rtl'>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='News' name=' الأخبار ' img='news.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Forum' name=' المنتدي ' img='forum.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Data' name=' إحصائيات' img='data.svg' /></div>
                    {/* <div className='col-4 col-lg-2 mb-3'><LinkCard link='Calendrier' name=' يومية ' img='calendar.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='AgriTools' name='أدات فلاحية' img='nature.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Camping' name='كمبي' img='camping.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Story' name='حكايات' img='stories.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Invitation' name=' إستدعاءات' img='invitation.svg' /></div> */}
                </div>
                {/* <div className='row' dir='rtl'>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Taxi' name='تاكسي' img='taxi.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Louage' name='سيارة اجرة' img='louage.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Public' name=' النقل ' img='public.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Renting' name=' للكراء' img='rent_house.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='AgriTools' name='أدات فلاحية' img='nature.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='News' name=' الإخبار ' img='news.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Salaire' name='salaire' img='salaire.svg' /></div> 
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Jobs' name='خدمني' img='jobs.svg' /></div> 
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Story' name='حكايات' img='stories.svg' /></div> 
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Camping' name='كمبي' img='camping.svg' /></div> 
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Blog' name='الإدارية' img='blog.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Products' name='  المنتجات ' img='products.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Jurdique' name='  القانونية ' img='politics.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Sport' name='الرياضية  ' img='sport.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Economique' name=' الإقتصادية ' img='finance.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Touristique' name=' السياحية ' img='images.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Art' name=' الثقافية ' img='art.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='ProgramScolair' name='البرنامج السنوي ' img='prog_annu.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='LivreScolair' name='الكتاب المدرسي ' img='livre_scolaire.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Devoirat' name='إمتحانات ' img='devoire.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Data' name=' إحصائيات' img='data.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Calendrier' name=' يومية ' img='calendar.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Forum' name=' المنتدي ' img='forum.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Invitation' name=' إستدعاءات' img='invitation.svg' /></div>
                    <div className='col-4 col-lg-2 mb-3'><LinkCard link='Automobile' name=' كرهبة' img='automobile.svg' /></div>
                 </div>  */}

            </div>
            <ButtomCard />
        </> );
}

export default ToolsLandingPage;