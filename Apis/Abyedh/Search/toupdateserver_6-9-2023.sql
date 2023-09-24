/*Generate PID*/
UPDATE `09_c_architecture`
SET PID = FLOOR(1000000000 + RAND() * 9000000000);
---------------------------------------------------
--DROP --
clinique_inscie
centre_inscrie
01_labo_inscrie

/*pharmacie*/
ALTER TABLE `01_pharmacie_rdv` ADD `RDV_Time` TIME NOT NULL AFTER `RDV_Date`;
ALTER TABLE `01_pharmacie_shop` ADD `Wanted_Time` TIME NOT NULL AFTER `Wanted_Day`, ADD `Livraison_Par` VARCHAR(1000) NOT NULL AFTER `Wanted_Time`;
ALTER TABLE `01_pharmacie_rdv` CHANGE `user` `RDV_Cause` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `comment` `Comment` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

----------------------------------------------------------
/*clinique */
ALTER TABLE `01_clinique_reserver` CHANGE `ID` `PK` BIGINT(10) NOT NULL AUTO_INCREMENT;
ALTER TABLE `01_clinique_reserver` CHANGE `Name` `RES_Cause` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `Genre` `Comment` VARCHAR(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `remarque` `RES_To_Date` DATE NOT NULL;
ALTER TABLE `01_clinique_reserver` CHANGE `RDV_Date` `RES_From_Date` DATE NOT NULL;
ALTER TABLE `01_clinique_reserver` ADD `RES_From_Time` TIME NOT NULL AFTER `State`, ADD `RES_To_Time` TIME NOT NULL AFTER `RES_From_Time`;
ALTER TABLE `01_clinique_reserver` ADD `R_Time` TIME NOT NULL AFTER `R_Date`;

--------------------------- -------------------------------
/*centre copied from clinique */
/*centre copied from clinique but remove a colum of to (date and time) and from is just rdv */
after that 
ALTER TABLE `01_labo_rdv` CHANGE `RES_Cause` `RDV_Cause` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `RES_From_Date` `RDV_Date` DATE NOT NULL, CHANGE `RES_From_Time` `RDV_Time` TIME NOT NULL;
-----------------------------DONE-----------------------------

/*librairie*/
-- copy pharmacie shop and make some updates : ID <-> PK , and add R_Time 
/*transporteur*/
-- change ID with PK , add R_Time, From, To , Genre , Wanted_Day, Articles,  Wanted_Time, keep comments
ALTER TABLE `03_transporteur_request` CHANGE `type` `Genre` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `poid` `De` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, CHANGE `wanted` `Vers` VARCHAR(500) NOT NULL, CHANGE `comment` `Comment` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

-----------------------------DONE-----------------------------
-- auto ecole
-- location voiture 
-------------------------
--- parking * 2 
---  