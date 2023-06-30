-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 12:29 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dszrccqg_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_abonnement`
--

CREATE TABLE `02_garderie_abonnement` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `AB_ID` varchar(100) NOT NULL,
  `Forfait_ID` varchar(50) NOT NULL,
  `AB_Seasson` varchar(30) NOT NULL,
  `AB_Date` date NOT NULL,
  `AB_Depart_Date` date NOT NULL,
  `AB_Termine_Date` date NOT NULL,
  `Membre_ID` varchar(50) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Is_Commande` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_classes`
--

CREATE TABLE `02_garderie_classes` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `CL_ID` bigint(20) NOT NULL,
  `CL_Name` varchar(500) NOT NULL,
  `CL_Niveaux` varchar(1000) NOT NULL,
  `CL_Proffeseurs` longtext NOT NULL,
  `CL_Emploi` longtext NOT NULL,
  `CL_Seasson` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_classes_examain`
--

CREATE TABLE `02_garderie_classes_examain` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `EX_ID` varchar(100) NOT NULL,
  `Classes_ID` varchar(100) NOT NULL,
  `Matiere_ID` varchar(30) NOT NULL,
  `Salle_ID` varchar(20) NOT NULL,
  `EX_Genre` varchar(100) NOT NULL,
  `EX_Contenue` longtext NOT NULL,
  `EX_Presence` longtext NOT NULL,
  `EX_Date` date NOT NULL,
  `EX_Time_Depart` time NOT NULL,
  `EX_Time_Finish` time NOT NULL,
  `EX_Notes` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_classes_niveaux`
--

CREATE TABLE `02_garderie_classes_niveaux` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_eleves`
--

CREATE TABLE `02_garderie_eleves` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `EL_ID` bigint(20) NOT NULL,
  `Releted_UID` bigint(10) NOT NULL,
  `EL_Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `EL_Genre` varchar(100) NOT NULL,
  `EL_Naissance` date NOT NULL,
  `Creation_Date` date NOT NULL,
  `EL_Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Deleg` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `EL_Etat_Sanitaire` varchar(500) NOT NULL,
  `EL_Pere_Nom` varchar(100) CHARACTER SET utf8 NOT NULL,
  `EL_Pere_Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `EL_Pere_Metier` varchar(200) NOT NULL,
  `EL_Mere_Nom` varchar(200) NOT NULL,
  `EL_Mere_Phone` varchar(50) NOT NULL,
  `EL_Mere_Metier` varchar(200) NOT NULL,
  `EL_Parant_Etat_Civle` varchar(100) NOT NULL,
  `EL_Classe` varchar(100) NOT NULL,
  `EL_State` varchar(100) CHARACTER SET utf8 NOT NULL,
  `EL_Resultat` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_eleves_avertissement`
--

CREATE TABLE `02_garderie_eleves_avertissement` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `SE_ID` varchar(100) NOT NULL,
  `Abonnement_ID` varchar(100) NOT NULL,
  `Membre_ID` varchar(100) NOT NULL,
  `SE_Presence` longtext NOT NULL,
  `SE_Resumer` longtext NOT NULL,
  `SE_Date` date NOT NULL,
  `SE_Time` time NOT NULL,
  `State` varchar(100) NOT NULL,
  `aa0` float NOT NULL,
  `aa1` double NOT NULL,
  `aa3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_eleves_bultin`
--

CREATE TABLE `02_garderie_eleves_bultin` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `SE_ID` varchar(100) NOT NULL,
  `Abonnement_ID` varchar(100) NOT NULL,
  `Membre_ID` varchar(100) NOT NULL,
  `SE_Presence` longtext NOT NULL,
  `SE_Resumer` longtext NOT NULL,
  `SE_Date` date NOT NULL,
  `SE_Time` time NOT NULL,
  `State` varchar(100) NOT NULL,
  `aa0` float NOT NULL,
  `aa1` double NOT NULL,
  `aa3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_eleves_retenue`
--

CREATE TABLE `02_garderie_eleves_retenue` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `SE_ID` varchar(100) NOT NULL,
  `Abonnement_ID` varchar(100) NOT NULL,
  `Membre_ID` varchar(100) NOT NULL,
  `SE_Presence` longtext NOT NULL,
  `SE_Resumer` longtext NOT NULL,
  `SE_Date` date NOT NULL,
  `SE_Time` time NOT NULL,
  `State` varchar(100) NOT NULL,
  `aa0` float NOT NULL,
  `aa1` double NOT NULL,
  `aa3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_forfait`
--

CREATE TABLE `02_garderie_forfait` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `F_Name` varchar(500) NOT NULL,
  `Tarif` float NOT NULL,
  `Genre` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_seances`
--

CREATE TABLE `02_garderie_seances` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `SE_ID` varchar(100) NOT NULL,
  `SE_Date` date NOT NULL,
  `SE_Time_Start` time NOT NULL,
  `SE_Time_Finish` time NOT NULL,
  `Proffeseur_ID` varchar(100) NOT NULL,
  `Classe_ID` varchar(100) NOT NULL,
  `Salle_ID` varchar(30) NOT NULL,
  `SE_Genre` varchar(30) NOT NULL,
  `SE_Presence` longtext NOT NULL,
  `SE_Activite` longtext NOT NULL,
  `SE_State` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_seances_salles`
--

CREATE TABLE `02_garderie_seances_salles` (
  `PK` bigint(10) NOT NULL,
  `Salle_ID` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Salle_Name` varchar(100) NOT NULL,
  `Salle_Genre` varchar(200) NOT NULL,
  `Salle_Num` varchar(20) NOT NULL,
  `Salle_Bloc` varchar(200) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_setting`
--

CREATE TABLE `02_garderie_setting` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Profile` longtext NOT NULL,
  `Commandes` longtext NOT NULL,
  `Menu` longtext NOT NULL,
  `Stock` longtext NOT NULL,
  `Factures` longtext NOT NULL,
  `Caisses` longtext NOT NULL,
  `Clients` longtext NOT NULL,
  `Equipe` longtext NOT NULL,
  `Fournisseur` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_team`
--

CREATE TABLE `02_garderie_team` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `T_ID` bigint(10) NOT NULL,
  `Releted_UID` bigint(10) NOT NULL,
  `T_Name` varchar(500) NOT NULL,
  `T_CIN` varchar(10) NOT NULL,
  `T_Phone` varchar(100) NOT NULL,
  `T_Adress` varchar(1000) NOT NULL,
  `Poste` varchar(200) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Started_At` date NOT NULL,
  `Finish_at` date NOT NULL,
  `Identifiant` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `T_Gouv` varchar(200) NOT NULL,
  `T_Deleg` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_team_avance`
--

CREATE TABLE `02_garderie_team_avance` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `AV_Date` date NOT NULL,
  `Valeur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_team_matiere`
--

CREATE TABLE `02_garderie_team_matiere` (
  `PK` bigint(10) NOT NULL,
  `Matiere_ID` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Matiere_Name` varchar(100) NOT NULL,
  `Matiere_Genre` varchar(20) NOT NULL,
  `Matiere_Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_team_poste`
--

CREATE TABLE `02_garderie_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_team_presence`
--

CREATE TABLE `02_garderie_team_presence` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `PR_Date` date NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `02_garderie_abonnement`
--
ALTER TABLE `02_garderie_abonnement`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_classes`
--
ALTER TABLE `02_garderie_classes`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_classes_examain`
--
ALTER TABLE `02_garderie_classes_examain`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_classes_niveaux`
--
ALTER TABLE `02_garderie_classes_niveaux`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_eleves`
--
ALTER TABLE `02_garderie_eleves`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_eleves_avertissement`
--
ALTER TABLE `02_garderie_eleves_avertissement`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_eleves_bultin`
--
ALTER TABLE `02_garderie_eleves_bultin`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_eleves_retenue`
--
ALTER TABLE `02_garderie_eleves_retenue`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_forfait`
--
ALTER TABLE `02_garderie_forfait`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_seances`
--
ALTER TABLE `02_garderie_seances`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_seances_salles`
--
ALTER TABLE `02_garderie_seances_salles`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_setting`
--
ALTER TABLE `02_garderie_setting`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_team_matiere`
--
ALTER TABLE `02_garderie_team_matiere`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `02_garderie_abonnement`
--
ALTER TABLE `02_garderie_abonnement`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `02_garderie_classes`
--
ALTER TABLE `02_garderie_classes`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `02_garderie_classes_examain`
--
ALTER TABLE `02_garderie_classes_examain`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_garderie_classes_niveaux`
--
ALTER TABLE `02_garderie_classes_niveaux`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `02_garderie_eleves`
--
ALTER TABLE `02_garderie_eleves`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `02_garderie_eleves_avertissement`
--
ALTER TABLE `02_garderie_eleves_avertissement`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_garderie_eleves_bultin`
--
ALTER TABLE `02_garderie_eleves_bultin`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_garderie_eleves_retenue`
--
ALTER TABLE `02_garderie_eleves_retenue`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_garderie_forfait`
--
ALTER TABLE `02_garderie_forfait`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `02_garderie_seances`
--
ALTER TABLE `02_garderie_seances`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `02_garderie_seances_salles`
--
ALTER TABLE `02_garderie_seances_salles`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `02_garderie_team_matiere`
--
ALTER TABLE `02_garderie_team_matiere`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
