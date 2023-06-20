-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2023 at 01:46 PM
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
-- Table structure for table `06_gym_abonnement`
--

CREATE TABLE `06_gym_abonnement` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `AB_ID` varchar(100) NOT NULL,
  `Forfait_ID` varchar(50) NOT NULL,
  `AB_Date` date NOT NULL,
  `AB_Depart_Date` date NOT NULL,
  `AB_Termine_Date` date NOT NULL,
  `AB_Depart_Time` time NOT NULL,
  `AB_Termine_Time` time NOT NULL,
  `Membre_ID` varchar(50) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Is_Commande` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_abonnement_seances`
--

CREATE TABLE `06_gym_abonnement_seances` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `SE_ID` varchar(100) NOT NULL,
  `Abonnement_ID` varchar(100) NOT NULL,
  `Membre_ID` varchar(100) NOT NULL,
  `SE_Date` date NOT NULL,
  `SE_Time` time NOT NULL,
  `SE_State` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_equipement`
--

CREATE TABLE `06_gym_equipement` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `INS_Code` bigint(20) NOT NULL,
  `INS_Name` varchar(500) NOT NULL,
  `INS_Genre` varchar(1000) NOT NULL,
  `INS_Qte` int(5) NOT NULL,
  `Photo_Path` varchar(200) NOT NULL,
  `Description` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_equipement_genre`
--

CREATE TABLE `06_gym_equipement_genre` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_forfait`
--

CREATE TABLE `06_gym_forfait` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `F_Name` varchar(500) NOT NULL,
  `NB_Seance` int(3) NOT NULL,
  `Tarif` float NOT NULL,
  `Genre` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_membres`
--

CREATE TABLE `06_gym_membres` (
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
-- Table structure for table `06_gym_membres_group`
--

CREATE TABLE `06_gym_membres_group` (
  `PK` bigint(10) NOT NULL,
  `Table_ID` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Table_Name` varchar(100) NOT NULL,
  `Table_Num` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_setting`
--

CREATE TABLE `06_gym_setting` (
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
-- Table structure for table `06_gym_team`
--

CREATE TABLE `06_gym_team` (
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
-- Table structure for table `06_gym_team_avance`
--

CREATE TABLE `06_gym_team_avance` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `AV_Date` date NOT NULL,
  `Valeur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_team_poste`
--

CREATE TABLE `06_gym_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `06_gym_team_presence`
--

CREATE TABLE `06_gym_team_presence` (
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
-- Indexes for table `06_gym_abonnement`
--
ALTER TABLE `06_gym_abonnement`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_abonnement_seances`
--
ALTER TABLE `06_gym_abonnement_seances`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_equipement`
--
ALTER TABLE `06_gym_equipement`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_equipement_genre`
--
ALTER TABLE `06_gym_equipement_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_forfait`
--
ALTER TABLE `06_gym_forfait`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_membres`
--
ALTER TABLE `06_gym_membres`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_membres_group`
--
ALTER TABLE `06_gym_membres_group`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `06_gym_setting`
--
ALTER TABLE `06_gym_setting`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `06_gym_abonnement`
--
ALTER TABLE `06_gym_abonnement`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=355;

--
-- AUTO_INCREMENT for table `06_gym_abonnement_seances`
--
ALTER TABLE `06_gym_abonnement_seances`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `06_gym_equipement`
--
ALTER TABLE `06_gym_equipement`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `06_gym_equipement_genre`
--
ALTER TABLE `06_gym_equipement_genre`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `06_gym_forfait`
--
ALTER TABLE `06_gym_forfait`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `06_gym_membres`
--
ALTER TABLE `06_gym_membres`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `06_gym_membres_group`
--
ALTER TABLE `06_gym_membres_group`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
