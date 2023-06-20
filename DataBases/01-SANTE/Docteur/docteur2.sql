-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2023 at 10:19 AM
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
-- Table structure for table `01_docteur_ordonance`
--

CREATE TABLE `01_docteur_ordonance` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `OR_ID` varchar(100) NOT NULL,
  `OR_Date` date NOT NULL,
  `OR_Time` time NOT NULL,
  `OR_Patient` varchar(100) NOT NULL,
  `OR_State` varchar(100) NOT NULL,
  `Is_Seances` varchar(100) NOT NULL,
  `OR_Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_patient`
--

CREATE TABLE `01_docteur_patient` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `PA_ID` bigint(20) NOT NULL,
  `Releted_UID` bigint(10) NOT NULL,
  `CIN` varchar(100) CHARACTER SET utf8 NOT NULL,
  `PA_Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Creation_Date` date NOT NULL,
  `Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Deleg` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `PA_State` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_rapports`
--

CREATE TABLE `01_docteur_rapports` (
  `PK` bigint(20) NOT NULL,
  `RA_ID` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `RA_Titre` varchar(500) NOT NULL,
  `RA_Genre` varchar(1000) NOT NULL,
  `RA_Date` date NOT NULL,
  `RA_Time` time NOT NULL,
  `RA_Sujet` varchar(2000) NOT NULL,
  `RA_Content` longtext NOT NULL,
  `RA_State` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_seances`
--

CREATE TABLE `01_docteur_seances` (
  `PK` bigint(20) NOT NULL,
  `S_ID` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `S_Patient` varchar(50) NOT NULL,
  `Diagnostic` varchar(5000) NOT NULL,
  `Maladie` varchar(500) NOT NULL,
  `State` varchar(200) NOT NULL,
  `State_Degre` varchar(200) NOT NULL,
  `S_Date` date NOT NULL,
  `S_Time` time NOT NULL,
  `Ordonance` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_setting`
--

CREATE TABLE `01_docteur_setting` (
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
-- Table structure for table `01_docteur_tarif`
--

CREATE TABLE `01_docteur_tarif` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Service` varchar(1000) NOT NULL,
  `Tarif` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_team`
--

CREATE TABLE `01_docteur_team` (
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
-- Table structure for table `01_docteur_team_avance`
--

CREATE TABLE `01_docteur_team_avance` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `AV_Date` date NOT NULL,
  `Valeur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_team_poste`
--

CREATE TABLE `01_docteur_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_team_presence`
--

CREATE TABLE `01_docteur_team_presence` (
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
-- Indexes for table `01_docteur_ordonance`
--
ALTER TABLE `01_docteur_ordonance`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_patient`
--
ALTER TABLE `01_docteur_patient`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_rapports`
--
ALTER TABLE `01_docteur_rapports`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_seances`
--
ALTER TABLE `01_docteur_seances`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_tarif`
--
ALTER TABLE `01_docteur_tarif`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `01_docteur_ordonance`
--
ALTER TABLE `01_docteur_ordonance`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `01_docteur_rapports`
--
ALTER TABLE `01_docteur_rapports`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `01_docteur_seances`
--
ALTER TABLE `01_docteur_seances`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `01_docteur_tarif`
--
ALTER TABLE `01_docteur_tarif`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
