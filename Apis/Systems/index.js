const express = require('express')
const app = express()
const port = 3010

app.use(express.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});




app.get('/', (req, res) => {
  res.send('API For system.abyedh.tn')
})


/* ###################################[ADMIN]########################################*/
//ADMIN
const AdminRouter = require('./Admin/admin')
app.use('/admin', AdminRouter)
const DirInputAdminRouter = require('./Admin/dirInputAdmin')
app.use('/admindir', DirInputAdminRouter)


//LogiIN
const LogIn = require('./LogIn/index')
app.use('/LogIn', LogIn)


/* ###################################[PTV]##########################################*/
//Point de vente en gros 
const PtVenteGrosRouter = require('./00-PTV/PtVenteGros/PtVenteGros')
app.use('/ptvg', PtVenteGrosRouter)
const PtVenteGrosInputRouter = require('./00-PTV/PtVenteGros/PtVenteGrosInput')
app.use('/ptvgi', PtVenteGrosInputRouter)


//Magazin 
const PtVenteMagazinRouter = require('./00-PTV/PtVenteMagazin/PtVenteMagazin')
app.use('/magazin', PtVenteMagazinRouter)
const PtVenteMagazinCaisseRouter = require('./00-PTV/PtVenteMagazin/PtVenteMagazinCaisse')
app.use('/magazin-caisse', PtVenteMagazinCaisseRouter)


//Pharmacie 
const PtVentePharmacieRouter = require('./00-PTV/PtVentePharmacie/PtVenteMagazin')
app.use('/pharmacie', PtVentePharmacieRouter)
const PtVentePharmacieCaisseRouter = require('./00-PTV/PtVentePharmacie/PtVenteMagazinCaisse')
app.use('/magazin-caisse', PtVentePharmacieCaisseRouter)


//Boutique
const PtVenteBoutiqueRouter = require('./00-PTV/PtVenteBoutique/PtVenteMagazin')
app.use('/boutique', PtVenteBoutiqueRouter)
const PtVenteBoutiqueCaisseRouter = require('./00-PTV/PtVenteBoutique/PtVenteMagazinCaisse')
app.use('/magazin-caisse', PtVenteBoutiqueCaisseRouter)


//Quancaillerie
const PtVenteQuancaillerieRouter = require('./00-PTV/PtVenteQuancaillerie/PtVenteMagazin')
app.use('/quancaillerie', PtVenteQuancaillerieRouter)
const PtVenteQuancaillerieCaisseRouter = require('./00-PTV/PtVenteQuancaillerie/PtVenteMagazinCaisse')
app.use('/magazin-caisse', PtVenteQuancaillerieCaisseRouter)



/* ###################################[SANTE]########################################*/
//docteur
const docteurRouter = require('./01-Sante/Docteur/Docteur')
app.use('/docteur', docteurRouter)
const docteurRDVRouter = require('./01-Sante/Docteur/DocteurRDV')
app.use('/docteur-rdv', docteurRDVRouter)


/* ###################################[EDUCATION]####################################*/
//garderie
const garderieRouter = require('./02-Education/Garderie/garderie')
app.use('/garderie', garderieRouter)
const garderieProfRouter = require('./02-Education/Garderie/GarderieProf')
app.use('/garderie-prof', garderieProfRouter)


//Lycee
const LyceeRouter = require('./02-Education/Lycee/Lycee')
app.use('/lycee', LyceeRouter)
const LyceeInputRouter = require('./02-Education/Lycee/LyceeInterf')
app.use('/lyceeI', LyceeInputRouter)


//AutoEcole
const AutoEcoleRouter = require('./02-Education/AutoEcole/autoEcole')
app.use('/autoecole', AutoEcoleRouter)
const AutoEcoleInputRouter = require('./02-Education/AutoEcole/autoEcoleInterf')
app.use('/autoecoleI', AutoEcoleInputRouter)


/* ###################################[RESTAURATION]#################################*/
//Restaurant
const RestaurantRouter = require('./03-Restauration/Restaurant/Restaurant')
app.use('/restaurant', RestaurantRouter)

const RestaurantCaisseRouter = require('./03-Restauration/Restaurant/RestaurantCaisse')
app.use('/restaurant-caisse', RestaurantCaisseRouter)

const RestaurantServeurRouter = require('./03-Restauration/Restaurant/RestaurantServeur')
app.use('/restaurant-serveur', RestaurantServeurRouter)

const RestaurantChefRouter = require('./03-Restauration/Restaurant/RestaurantChef')
app.use('/restaurant-chef', RestaurantChefRouter)


//Cafe
const CafeRouter = require('./03-Restauration/Cafe/Cafe')
app.use('/cafe', CafeRouter)

const CafeCaisseRouter = require('./03-Restauration/Cafe/CafeCaisse')
app.use('/cafe-caisse', CafeCaisseRouter)

const CafeServeurRouter = require('./03-Restauration/Cafe/CafeServeur')
app.use('/cafe-serveur', CafeServeurRouter)

const CafeChefRouter = require('./03-Restauration/Cafe/CafeChef')
app.use('/cafe-chef', CafeChefRouter)


//Hotels
const HotelRouter = require('./03-Restauration/Hotel/Hotel')
app.use('/hotel', HotelRouter)
const HotelInputRouter = require('./03-Restauration/Hotel/HotelIntef')
app.use('/hotelI', HotelInputRouter)


/* ###################################[TRANSPORT]####################################*/
//Transporteur
const TransporteurRouter = require('./04-Transport/Transporteur/Transporteur')
app.use('/transporteur', TransporteurRouter)
const TransporteurInputRouter = require('./04-Transport/Transporteur/TransporteurIntef')
app.use('/transporteurI', TransporteurInputRouter)



/* ###################################[SERVICE]######################################*/
//Avocat
const AvocatRouter = require('./05-Service/Avocat/Avocat')
app.use('/avocat', AvocatRouter)
const AvocatInputRouter = require('./05-Service/Avocat/AvocatInterf')
app.use('/avocatI', AvocatInputRouter)


/* ###################################[LIFE]#########################################*/
//Coiffure
const CoiffureRouter = require('./08-Life/Coiffure/Coiffure')
app.use('/coiffure', CoiffureRouter)
const CoiffureInputRouter = require('./08-Life/Coiffure/CoiffureInterf')
app.use('/coiffureI', CoiffureInputRouter)



/* ###################################[SPORT CULTURE]################################*/
//Gym
const GymRouter = require('./10-Sport/Gym/Gym')
app.use('/gym', GymRouter)
const GymInputRouter = require('./10-Sport/Gym/GymCaisse')
app.use('/gym-caisse', GymInputRouter)






app.listen(port, () => {
  console.log(`Abyedh System On port ${port}`)
})