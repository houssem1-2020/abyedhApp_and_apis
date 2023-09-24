import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

function AboutPage() {

    /* ############### Const #################*/
    const ItemsData=[
        {id:1, title:'دليل تفاعلي', genre:'IL', adsUrl:'search.svg', card:'annaire', themeColor:'#9ca8a4', link:'/'},
        {id:2, title:'محرك الأنظمة ', genre:'LI', adsUrl:'system.svg', card:'systems', themeColor:'#3fbfa1', link:'https://system.abyedh.tn/'},
        {id:3, title:' مجموعة أدوات إبداعية ', genre:'IL', adsUrl:'wiki.svg', card:'tools', themeColor:'#20bcdb', link:'/Tools'},
        {id:4, title:' إدارة سهلة لكل أنشطتك اليومية ', genre:'LI', adsUrl:'dashbord.svg', card:'profile', themeColor:'#9e0e53', link:'/Profile'},
    ]
    const StatData=[
        {id:1, title:'عميل ',  icon:'person-circle',  themeColor:'#9ca8a4'},
        {id:2, title:' مستخدم  ', icon:'people-fill', themeColor:'#3fbfa1'},
        {id:3, title:' زائر شهريا ',  icon:'eye-fill',  themeColor:'#20bcdb'},
        {id:4, title:' نتيجة بحث ', icon:'search-heart',  themeColor:'#9e0e53'},
    ]
    /* ############### UseEffect #################*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    /* ############### Functions #################*/


    /* ############### Card #################*/
    const TopCard = () =>{
        return(<>
            <div className='row p-0 m-0 ' style={{height:'250px'}}>
                <div className='col-12 col-lg-4 text-center align-self-center'>
                    <NavLink exact='true' to='/' >
                        <img src='https://cdn.abyedh.tn/images/logo/mlogo.gif' className='img-responsive   border border-danger bg-danger' width='70px' height='120px' style={{borderRadius: '10px 20px 10px 50px'}} /> 
                    </NavLink> 
                </div>
                <div className='col-12 col-lg-8     text-center align-self-center'>
                    <h1 className='text-danger display-2'>مِنَصَةْ أَبْيَضْ</h1>
                    <h3 className='text-secondary'> تطبيق تنجم تعمل بيه كل شي  </h3>
                </div>
            </div>
        </>)
    }
    const StatCard = (props) =>{
        return(<>
            <div className='card card-body mb-4 rounded-pill text-center' style={{color:props.data.themeColor}}>
                <h2 className=' mb-0'>{props.value}</h2>
                <h5 className='mt-0'> {props.data.title} <span className={`bi bi-${props.data.icon}`}></span> </h5> 
            </div>
        </>)
    }

    const ContainerLinksCard = (props) =>{
        const StateCard = ({ status }) => {
           
            const statusCard = React.useCallback(() => {
              switch(status) {
                case 'annaire': return <AnnuaireCard color={props.data.themeColor} />;  
                case 'systems': return <SystemsCard color={props.data.themeColor} /> ;
                case 'tools': return <ToolsCard color={props.data.themeColor} /> ;
                case 'profile': return <ProfileCard color={props.data.themeColor} /> ;
                default:  return <span>No</span>;    
              }
            }, [status]);
          
            return (
              <div className="container">
                {statusCard()}
              </div>
            );
        };

        return(<>
            
            <div className="row" style={{marginBottom:'70px'}}>
                <div className={`col-12 col-lg-4 align-self-center text-center order-sm-1   ${props.data.genre === 'LI' ? 'order-lg-2 text-lg-end': 'order-lg-1 text-lg-start'}`}>
                    <img src={`https://cdn.abyedh.tn/images/About/${props.data.adsUrl}`} className="img-responsive mb-4" width="60%" height='60%'/>
                </div>
                <div className={`col-12 col-lg-8 align-self-center ${props.data.genre === 'LI' ? 'order-lg-1 ': 'order-lg-2'}`}>
                    
                    <div className='row' dir='rtl'>
                    <div className={`me-3 text-end  mb-3`} dir="rtl" style={{color: props.data.themeColor}}><h3><b><span className="fa fa-shopping-cart"></span> {props.data.title} :</b></h3></div>
                        <StateCard status={props.data.card}  /> 
                    </div>
                </div>
            </div>
        </>)
    }
    const AnnuaireCard = (props) =>{
        return(<>
         <div className='card-body mb-4' style={{color: props.color}}>
            <h4  dir='rtl'>
                توفر ابيض دليل تفاعلي و محرك بحث, يحتوي أكتر من 21 ألف عملية بحث تتنوع بين أطباء 
                , محامين , مطاعم 
                , مقاهي, مدارس , فنادق , إدارات ,... بالإضافة إلي جميع المعلومات التي تحتاجها لتتخد القرار
                الصائب لأداء نشاطك اليومي من أوقات سفر وسائل النقل و حالات الإدارة التونسية
                مما يسهل الكثير في نشاط المواطن التونسي ...كما يمكنك أيضا التفاعل المباشر مع تنائج البحث
            </h4> 
            <div className='text-start'><NavLink exact='true' to='/'> <Button size='mini' className='rounded-pill bg-danger text-white' icon>   إكتشــف <Icon name='arrow left' /> </Button></NavLink></div>
         </div>
        </>)
    }
    const SystemsCard = (props) =>{
        return(<>
           <div className='card-body mb-4' style={{color: props.color}}>
                <h4  dir='rtl'>
                أبيض توفر العديد من أنضمة المراقبة و الإدارة و المحاسبة لأصحاب الاعمال الحرة
                 و المشاريع الصغيرة و غيرها : إصحاب مدارس و جامعات خاصة , إطباء
                 , محامين , أصحاب مقاهي , مطاعم , نقاط البيع المختلفة , شركات , ... و العديد من 
                الأنظمة الأخري و التي تهدف إلي تحسين و تطوير ميدان الأعمال و الأرتقاء بجودة الخدمات
                 و المنتجات بإستعمال مختلف التقنيات التكنولوجية و البنية التحتية الرقمية  
                </h4> 
                <div className='text-end'><a href='https://system.abyedh.tn/'> <Button size='mini' className='rounded-pill bg-danger text-white' icon> <Icon name='arrow right' />   إكتشــف  </Button></a></div>
            </div>
        </>)
    }
    const ToolsCard = (props) =>{
        return(<>
         <div className='card-body mb-4' style={{color: props.color}}>
            <h4  dir='rtl'>
                من بين الأهداف التي تعمل عليها منصة أبيض هو توفير المعلومة و الإرشادات المناسبة للمستخدم التونسي لتسهيل إنجاز اعماله اليومية و لتزيل من ذهنه الحيرة و التعقيد المرتبط بالإدارة التونسية و ذلك من خلال موسوعة تشرح للمستخدم كيفية القيام بمختلف الأنشطة الإدارية و القانونية اليومية, مثال : كيفية إستخراج جواز السفر , بطاقة التعريف , كيفية تكوين الشركات , كيفية الحصول علي دفتر علاج ... و غيرها من الأمور التي يحتاجها المستخدم في حياته اليومية .
            </h4> 
            <div className='text-start'><NavLink exact='true' to='/Tools'> <Button size='mini' className='rounded-pill bg-danger text-white' icon>   إكتشــف <Icon name='arrow left' /> </Button></NavLink></div>
         </div>
        </>)
    }
    const ProfileCard = (props) =>{
        return(<>
           <div className='card-body mb-4' style={{color: props.color}}>
                <h4  dir='rtl'>
                    يمكن للمستخدم العادي أيضا ان يدير أنشطتة اليومية من خلال حسابه في أبيض بالأعتماد علي واجهة رقمية تنضم له مختلف الانشطة اليومية و كذلك جدول تنضيم و تذكير بالمواعيد كما يمكن ربط هذا الحساب بالحساب البنكي و حساب الإدارة الرقمية التونسية من أجل تسهيل إدارة انشطتك اليومة و توفير الوقت و الجهد . 
                </h4> 
                <div className='text-end'><NavLink exact='true' to='/Profile'> <Button size='mini' className='rounded-pill bg-danger text-white' icon> <Icon name='arrow right' />   إكتشــف </Button></NavLink></div>
            </div>
        </>)
    }

    const ButtomCard = () =>{
        return(<>
            <div className='card-body rounded-bottom-card bg-danger'>
                <div className='row'>
                    <div className='col-12 col-lg-4 align-self-center d-none d-lg-block text-end'>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'> +216 96787676  - <span className='bi bi-telephone-outbound-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'>  abyedh@abyedh.tn -  <span className='bi bi-mailbox2' ></span></NavLink></div>
                        <div className='d-inline mt-2'>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-facebook bi-md' ></span></NavLink></div>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-youtube bi-md' ></span></NavLink></div>
                            <div className='d-inline m-2'><NavLink exact='true' to='/#' className='text-white'><span className='bi bi-app-indicator bi-md' ></span></NavLink></div>
                        </div>
                    </div>
                    <div className='col-7 col-lg-4 align-self-center text-end'>
                        <div className='mb-1'><NavLink exact='true' to='/About' className='text-white'>  ماهي  رؤية منصة أبيض  - <span className='bi bi-patch-question-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'>  كيف استعمل المنصة  -  <span className='bi bi-brush-fill' ></span></NavLink></div>
                        <div className='mb-1'><NavLink exact='true' to='/#' className='text-white'> من نحن ؟  -  <span className='bi bi-people-fill' ></span> </NavLink></div>
                    </div>
                    <div className='col-5 col-lg-4 align-self-center text-center'>
                        <img  className="rounded-pill-abyedh" src="https://cdn.abyedh.tn/images/logo/mlogo.gif" alt="Logo" style={{width:'40px', height:'90px'}} />
                    </div>
                </div>
            </div>
        </>)
    }

    return ( <>
            <div className='bg-about-stopped'>
                    <TopCard />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 col-lg-3'><StatCard key={1} data={StatData[0]} value={'19'}  /> </div>
                            <div className='col-6 col-lg-3'><StatCard key={2} data={StatData[1]} value={'90'}/> </div>
                            <div className='col-6 col-lg-3'><StatCard key={3} data={StatData[2]} value={'60'} /> </div>
                            <div className='col-6 col-lg-3'><StatCard key={4} data={StatData[3]} value={'21K'} /> </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        
                        <div className='card-body mb-4 text-end' dir='rtl'>
                            <h3 className='text-danger'> تهدف منصة أبيض إلي رقمنة أغلب عدد ممكن من أنشطة المستخدم التونسي بهدف خلق محيط رقمي شامل و هي تقوم بذلك من خلال : </h3>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className='row'>
                            <ContainerLinksCard key={1} data={ItemsData[0]}   />
                            <ContainerLinksCard key={2} data={ItemsData[1]}   />
                            <ContainerLinksCard key={3} data={ItemsData[2]}   />
                            <ContainerLinksCard key={4} data={ItemsData[3]}   />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    < ButtomCard />
            </div>
    </> );
}

export default AboutPage;