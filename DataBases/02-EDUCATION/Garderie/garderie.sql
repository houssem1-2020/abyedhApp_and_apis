-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2023 at 06:55 PM
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
  `AB_Date` date NOT NULL,
  `AB_Time` time NOT NULL,
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
  `INS_Code` bigint(20) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Prix_vente` float NOT NULL,
  `Prix_promo` float NOT NULL,
  `Cout` float NOT NULL,
  `Genre` varchar(1000) NOT NULL,
  `Repture` float NOT NULL,
  `Fast_Input` varchar(50) NOT NULL,
  `Photo_Path` varchar(200) NOT NULL,
  `Ingredient` longtext NOT NULL,
  `Description` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_classes_genre`
--

CREATE TABLE `02_garderie_classes_genre` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
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
-- Table structure for table `02_garderie_membres`
--

CREATE TABLE `02_garderie_membres` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `ME_ID` bigint(20) NOT NULL,
  `Releted_UID` bigint(10) NOT NULL,
  `CIN` varchar(100) CHARACTER SET utf8 NOT NULL,
  `ME_Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Creation_Date` date NOT NULL,
  `Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Deleg` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `ME_State` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_garderie_seances`
--

CREATE TABLE `02_garderie_seances` (
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
-- Table structure for table `02_garderie_seances_salles`
--

CREATE TABLE `02_garderie_seances_salles` (
  `PK` bigint(10) NOT NULL,
  `Table_ID` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Table_Name` varchar(100) NOT NULL,
  `Table_Num` varchar(20) NOT NULL,
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
-- Indexes for table `02_garderie_classes_genre`
--
ALTER TABLE `02_garderie_classes_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_forfait`
--
ALTER TABLE `02_garderie_forfait`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_garderie_membres`
--
ALTER TABLE `02_garderie_membres`
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `02_garderie_abonnement`
--
ALTER TABLE `02_garderie_abonnement`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;

--
-- AUTO_INCREMENT for table `02_garderie_classes`
--
ALTER TABLE `02_garderie_classes`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `02_garderie_classes_genre`
--
ALTER TABLE `02_garderie_classes_genre`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `02_garderie_forfait`
--
ALTER TABLE `02_garderie_forfait`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `02_garderie_membres`
--
ALTER TABLE `02_garderie_membres`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
