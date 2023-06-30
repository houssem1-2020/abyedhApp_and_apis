import TunMap from './tunMap'
import AbyedhADIL from './ADIL'
import dirItem from './Item'

const GetUID = () =>{
    const UserLoggedIn = (localStorage.getItem('UserData') !== null);
    if (UserLoggedIn)  { 
        return {Logged:true, UData : JSON.parse(localStorage.getItem('UserData'))} } 
    else { return {Logged:false, UData : {} }}

}


const GConf = {
    // main variables
    ADIL:AbyedhADIL,
    Items : dirItem,
    abyedhMap : TunMap,
    UserData : GetUID(),
    ApiLink : 'https://api.abyedh.tn/apiAbyedh/Search', //https://api.abyedh.tn/apiAbyedh
    ApiProfileLink : 'https://api.abyedh.tn/apiAbyedh/Profile', //https://api.abyedh.tn/apiAbyedh
    ApiToolsLink : 'https://api.abyedh.tn/apiAbyedh/Tools', //https://api.abyedh.tn/apiAbyedh

    themeColor : '#dc3545',
    TostErrorGonf : {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        icon: "🚫"
    },
    TostSuucessGonf : {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    },
    TostInternetGonf : {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    },

    LeafleftIcon : {
        iconUrl: require('leaflet/dist/images/position.gif'),
        iconRetinaUrl: require('leaflet/dist/images/position.gif'),
        iconSize: [10,10],
        shadowSize: [0,0],
        shadowUrl: '',
        shadowSize:   [0,0],
        iconAnchor:   [0,0],
        shadowAnchor: [0,0],
        popupAnchor:  [0,0]
    },
    LeafleftIconP : {
        iconUrl: require('leaflet/dist/images/position-personal.gif'),
        iconRetinaUrl: require('leaflet/dist/images/position-personal.gif'),
        iconSize: [10,10],
        shadowSize: [0,0],
        shadowUrl: '',
        shadowSize:   [0,0],
        iconAnchor:   [0,0],
        shadowAnchor: [0,0],
        popupAnchor:  [0,0]
    },

    ProfileNavsData : [
        {id:1, name:"Acceuil", icon:"house", link:"ma"},
        {id:2, name:"Suivie", icon:"repeat", link:"sv"},
        {id:3, name:"Pannier", icon:"balloon-heart", link:"fv"},
        {id:4, name:"Documment", icon:"folder-symlink", link:"dc"},
        // {id:5, name:"Calendrier", icon:"calendar2-week", link:"cl"},
        {id:6, name:"Setting", icon:"gear", link:"st"},
    ] ,

    Tools:{
        taxi:{themeColor:'#c6bb0c', imgAds:'' , textAds:'تلوج في تاكسي ؟ تحب تاخو موعد مع تاكسي ؟ تحب تعرف سعر رحلة عبر تاكسي ؟ تحب تربح الوقت و ما تبقاش تستنا برشا ؟ انت في المكان المناسب : منصة ابيض للتاكسي'},
        Louage:{themeColor:'#5ab7d6', imgAds:'' , textAds:'المنصة هاذي هي وجهة محطات النقل البري علي الانترنت , تعطيك جميع المعلومات علي الرحلات المتوفرة و تمكنك من إنك تحجز مكانك في الرحلة باش ترتحك من برشا تعب و تضييع وقت و جهد ...'},
        Renting:{themeColor:'#6f92d9', imgAds:'' , textAds:'المنصة هاذي هي وجهة محطات النقل البري علي الانترنت , تعطيك جميع المعلومات علي الرحلات المتوفرة و تمكنك من إنك تحجز مكانك في الرحلة باش ترتحك من برشا تعب و تضييع وقت و جهد ...'},
        AgritTools:{themeColor:'#265e61', imgAds:'' , textAds:'المنصة هاذي هي وجهة محطات النقل البري علي الانترنت , تعطيك جميع المعلومات علي الرحلات المتوفرة و تمكنك من إنك تحجز مكانك في الرحلة باش ترتحك من برشا تعب و تضييع وقت و جهد ...'},
        blog:{themeColor:'#3b4882', imgAds:'' , textAds:'المنصة هاذي عبارة عن موسوعة شاملة لمختلف العلميات الأدراية التونسيسة و كيفاش تتم العمليات هاذي باش ترتح المواطنين من الحيرة اللي دور في ريوسهم و تعاونهم باش يجاوبو علي مختلف تساءلاتهم'},
        art:{themeColor:'#d469b9', imgAds:'' , textAds:'المنصة هاذي عبارة عن موسوعة شاملة لمختلف العلميات الأدراية التونسيسة و كيفاش تتم العمليات هاذي باش ترتح المواطنين من الحيرة اللي دور في ريوسهم و تعاونهم باش يجاوبو علي مختلف تساءلاتهم'},
        products:{themeColor:'#d91a33', imgAds:'' , textAds:'المنصة هاذي عبارة عن موسوعة شاملة لمختلف العلميات الأدراية التونسيسة و كيفاش تتم العمليات هاذي باش ترتح المواطنين من الحيرة اللي دور في ريوسهم و تعاونهم باش يجاوبو علي مختلف تساءلاتهم'},
        sport:{themeColor:'#8dd673', imgAds:'' , textAds:'المنصة هاذي عبارة عن موسوعة شاملة لمختلف العلميات الأدراية التونسيسة و كيفاش تتم العمليات هاذي باش ترتح المواطنين من الحيرة اللي دور في ريوسهم و تعاونهم باش يجاوبو علي مختلف تساءلاتهم'},
        public:{themeColor:'#04c6ce', imgAds:'' , textAds:'المنصة هاذي عبارة عن موسوعة شاملة لمختلف وسائل النقل العمومي التونسية , تحتوي أوقات جميع الوسائل من قطار و حافلة و مترو و طائرة ...بالإظافة إلي خريطة الرحلات و متتبع يعطيك مكان الوسيلة علي الخريطة'},
    },
}
 
export default GConf 