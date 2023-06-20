-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2023 at 06:31 PM
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
-- Table structure for table `05_cafe_articles`
--

CREATE TABLE `05_cafe_articles` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `A_Code` bigint(20) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Quantite` float NOT NULL,
  `Prix_achat` float NOT NULL,
  `Genre` varchar(1000) NOT NULL,
  `Repture` float NOT NULL,
  `Photo_Path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_caisses`
--

CREATE TABLE `05_cafe_caisses` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `C_ID` bigint(20) NOT NULL,
  `CA_Name` varchar(200) NOT NULL,
  `User_ID` varchar(200) NOT NULL,
  `Identifiant` varchar(500) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Caisse_Fond` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_clients`
--

CREATE TABLE `05_cafe_clients` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `CL_ID` bigint(20) NOT NULL,
  `Releted_UID` bigint(10) NOT NULL,
  `CIN` varchar(100) CHARACTER SET utf8 NOT NULL,
  `CL_Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Creation_Date` date NOT NULL,
  `Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Deleg` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `CL_State` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_factures`
--

CREATE TABLE `05_cafe_factures` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `T_ID` varchar(100) NOT NULL,
  `Caisse_ID` varchar(100) NOT NULL,
  `Final_Value` float NOT NULL,
  `Espece` double NOT NULL,
  `T_Date` date NOT NULL,
  `T_Time` time NOT NULL,
  `Client` varchar(100) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Paye_Bons` longtext NOT NULL,
  `Is_Commande` varchar(100) NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_menu`
--

CREATE TABLE `05_cafe_menu` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `P_Code` bigint(20) NOT NULL,
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
-- Table structure for table `05_cafe_menu_genre`
--

CREATE TABLE `05_cafe_menu_genre` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_setting`
--

CREATE TABLE `05_cafe_setting` (
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
-- Table structure for table `05_cafe_tables`
--

CREATE TABLE `05_cafe_tables` (
  `PK` bigint(10) NOT NULL,
  `Table_ID` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Table_Name` varchar(100) NOT NULL,
  `Table_Num` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_team`
--

CREATE TABLE `05_cafe_team` (
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
-- Table structure for table `05_cafe_team_avance`
--

CREATE TABLE `05_cafe_team_avance` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `AV_Date` date NOT NULL,
  `Valeur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_team_poste`
--

CREATE TABLE `05_cafe_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `05_cafe_team_presence`
--

CREATE TABLE `05_cafe_team_presence` (
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
-- Indexes for table `05_cafe_articles`
--
ALTER TABLE `05_cafe_articles`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_caisses`
--
ALTER TABLE `05_cafe_caisses`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_clients`
--
ALTER TABLE `05_cafe_clients`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_factures`
--
ALTER TABLE `05_cafe_factures`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_menu`
--
ALTER TABLE `05_cafe_menu`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_menu_genre`
--
ALTER TABLE `05_cafe_menu_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_setting`
--
ALTER TABLE `05_cafe_setting`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_tables`
--
ALTER TABLE `05_cafe_tables`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_team`
--
ALTER TABLE `05_cafe_team`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_team_avance`
--
ALTER TABLE `05_cafe_team_avance`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_team_poste`
--
ALTER TABLE `05_cafe_team_poste`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `05_cafe_team_presence`
--
ALTER TABLE `05_cafe_team_presence`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `05_cafe_articles`
--
ALTER TABLE `05_cafe_articles`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `05_cafe_caisses`
--
ALTER TABLE `05_cafe_caisses`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `05_cafe_clients`
--
ALTER TABLE `05_cafe_clients`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `05_cafe_factures`
--
ALTER TABLE `05_cafe_factures`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=350;

--
-- AUTO_INCREMENT for table `05_cafe_menu`
--
ALTER TABLE `05_cafe_menu`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `05_cafe_menu_genre`
--
ALTER TABLE `05_cafe_menu_genre`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `05_cafe_tables`
--
ALTER TABLE `05_cafe_tables`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `05_cafe_team`
--
ALTER TABLE `05_cafe_team`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `05_cafe_team_avance`
--
ALTER TABLE `05_cafe_team_avance`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `05_cafe_team_poste`
--
ALTER TABLE `05_cafe_team_poste`
  MODIFY `PK` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `05_cafe_team_presence`
--
ALTER TABLE `05_cafe_team_presence`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
