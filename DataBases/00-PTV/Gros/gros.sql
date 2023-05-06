-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2023 at 06:14 PM
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
-- Table structure for table `08_vente_en_gros_articles`
--

CREATE TABLE `08_vente_en_gros_articles` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `A_Code` bigint(20) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Prix_vente` float NOT NULL,
  `Quantite` float NOT NULL,
  `Prix_achat` float NOT NULL,
  `Genre` varchar(1000) NOT NULL,
  `Socite` varchar(200) NOT NULL,
  `Repture` float NOT NULL,
  `TVA` int(10) NOT NULL,
  `Photo_Path` varchar(200) NOT NULL,
  `Details` varchar(500) NOT NULL,
  `Groupage` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_articles_genre`
--

CREATE TABLE `08_vente_en_gros_articles_genre` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_article_suivie_stock`
--

CREATE TABLE `08_vente_en_gros_article_suivie_stock` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `BE_ID` bigint(20) NOT NULL,
  `BE_Date` date NOT NULL,
  `Fournisseur` varchar(20) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion`
--

CREATE TABLE `08_vente_en_gros_camion` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Cam_ID` bigint(20) NOT NULL,
  `Cam_Name` varchar(200) NOT NULL,
  `Matricule` varchar(200) NOT NULL,
  `Detail` varchar(200) NOT NULL,
  `Chauffeur` varchar(200) NOT NULL,
  `Pasword` varchar(100) NOT NULL,
  `Identifiant` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_depenses`
--

CREATE TABLE `08_vente_en_gros_camion_depenses` (
  `PK` int(11) NOT NULL,
  `Camion` bigint(100) NOT NULL,
  `Depenses` varchar(500) NOT NULL,
  `Valeur` float NOT NULL,
  `Jour` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_facture`
--

CREATE TABLE `08_vente_en_gros_camion_facture` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(11) NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `Cre_Date` date NOT NULL,
  `Camion` varchar(200) NOT NULL,
  `C_Name` varchar(200) NOT NULL,
  `Tota` varchar(200) NOT NULL,
  `Chauffeur` varchar(200) NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_fond`
--

CREATE TABLE `08_vente_en_gros_camion_fond` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Bon_id` varchar(20) NOT NULL,
  `Camion` varchar(50) NOT NULL,
  `Totale` varchar(20) NOT NULL,
  `Jour` date NOT NULL,
  `SDF` varchar(100) NOT NULL,
  `SCF` varchar(100) NOT NULL,
  `Articles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Genre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_position`
--

CREATE TABLE `08_vente_en_gros_camion_position` (
  `PK` bigint(100) NOT NULL,
  `Camion_ID` varchar(20) NOT NULL,
  `lat` varchar(200) NOT NULL,
  `lng` varchar(200) NOT NULL,
  `jour` date NOT NULL,
  `heur` time NOT NULL,
  `Position` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_stock`
--

CREATE TABLE `08_vente_en_gros_camion_stock` (
  `PK` bigint(20) NOT NULL,
  `Camion` bigint(20) NOT NULL,
  `Article` varchar(200) NOT NULL,
  `Qte` int(100) NOT NULL,
  `Last_Modi` date NOT NULL,
  `Detail` blob NOT NULL,
  `Ultra_Unique` bigint(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_camion_stock_fixed`
--

CREATE TABLE `08_vente_en_gros_camion_stock_fixed` (
  `PK` bigint(20) NOT NULL,
  `Camion` bigint(20) NOT NULL,
  `Jour` date NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_clients`
--

CREATE TABLE `08_vente_en_gros_clients` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Releted_PID` bigint(10) NOT NULL,
  `CL_ID` bigint(20) NOT NULL,
  `Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Cre_Date` date NOT NULL,
  `Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Code_Fiscale` varchar(100) CHARACTER SET utf8 NOT NULL,
  `State` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `Lng` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Lat` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Social_Name` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_factures`
--

CREATE TABLE `08_vente_en_gros_factures` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `Cre_Date` date NOT NULL,
  `Fournisseurs` varchar(200) NOT NULL,
  `C_Name` varchar(200) NOT NULL,
  `Tota` varchar(200) NOT NULL,
  `De` varchar(200) NOT NULL,
  `Vers` varchar(200) NOT NULL,
  `Chauffeur` varchar(200) NOT NULL,
  `Articles` longtext NOT NULL,
  `SDF` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_fournisseur`
--

CREATE TABLE `08_vente_en_gros_fournisseur` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Releted_PID` bigint(20) NOT NULL,
  `Four_ID` bigint(10) NOT NULL,
  `Four_Code_Fiscale` varchar(50) NOT NULL,
  `Four_Name` varchar(500) NOT NULL,
  `Four_Phone` varchar(100) NOT NULL,
  `Articles_Genre` varchar(200) NOT NULL,
  `Four_Gouv` varchar(50) NOT NULL,
  `Four_Deleg` varchar(100) NOT NULL,
  `Four_Adress` varchar(500) NOT NULL,
  `Jour_Periodique` varchar(100) NOT NULL,
  `Four_State` varchar(100) NOT NULL,
  `Four_Lng` varchar(100) NOT NULL,
  `Four_Lat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_setting`
--

CREATE TABLE `08_vente_en_gros_setting` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Profile` longtext NOT NULL,
  `Commandes` longtext NOT NULL,
  `Stock` longtext NOT NULL,
  `Factures` longtext NOT NULL,
  `Camions` longtext NOT NULL,
  `Clients` longtext NOT NULL,
  `Equipe` longtext NOT NULL,
  `Fournisseur` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_team`
--

CREATE TABLE `08_vente_en_gros_team` (
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
  `Start_at` date NOT NULL,
  `Finish_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_team_poste`
--

CREATE TABLE `08_vente_en_gros_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `08_vente_en_gros_team_presence`
--

CREATE TABLE `08_vente_en_gros_team_presence` (
  `PK` bigint(20) NOT NULL,
  `T_ID` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Year` varchar(20) NOT NULL,
  `JAN` varchar(1000) NOT NULL,
  `FEV` varchar(1000) NOT NULL,
  `MAR` varchar(1000) NOT NULL,
  `AVR` varchar(1000) NOT NULL,
  `MAY` varchar(1000) NOT NULL,
  `JUI` varchar(1000) NOT NULL,
  `JUL` varchar(1000) NOT NULL,
  `OUTE` varchar(1000) NOT NULL,
  `SEPT` varchar(1000) NOT NULL,
  `OCT` varchar(1000) NOT NULL,
  `NOV` varchar(1000) NOT NULL,
  `DECM` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `08_vente_en_gros_articles`
--
ALTER TABLE `08_vente_en_gros_articles`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_articles_genre`
--
ALTER TABLE `08_vente_en_gros_articles_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_article_suivie_stock`
--
ALTER TABLE `08_vente_en_gros_article_suivie_stock`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_camion`
--
ALTER TABLE `08_vente_en_gros_camion`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_camion_depenses`
--
ALTER TABLE `08_vente_en_gros_camion_depenses`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_camion_facture`
--
ALTER TABLE `08_vente_en_gros_camion_facture`
  ADD PRIMARY KEY (`PK`),
  ADD UNIQUE KEY `F_ID` (`F_ID`);

--
-- Indexes for table `08_vente_en_gros_camion_fond`
--
ALTER TABLE `08_vente_en_gros_camion_fond`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_camion_position`
--
ALTER TABLE `08_vente_en_gros_camion_position`
  ADD PRIMARY KEY (`PK`),
  ADD UNIQUE KEY `Camion_ID` (`Camion_ID`);

--
-- Indexes for table `08_vente_en_gros_camion_stock`
--
ALTER TABLE `08_vente_en_gros_camion_stock`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_camion_stock_fixed`
--
ALTER TABLE `08_vente_en_gros_camion_stock_fixed`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_clients`
--
ALTER TABLE `08_vente_en_gros_clients`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_factures`
--
ALTER TABLE `08_vente_en_gros_factures`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_fournisseur`
--
ALTER TABLE `08_vente_en_gros_fournisseur`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_setting`
--
ALTER TABLE `08_vente_en_gros_setting`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_team`
--
ALTER TABLE `08_vente_en_gros_team`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_team_poste`
--
ALTER TABLE `08_vente_en_gros_team_poste`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `08_vente_en_gros_team_presence`
--
ALTER TABLE `08_vente_en_gros_team_presence`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `08_vente_en_gros_articles`
--
ALTER TABLE `08_vente_en_gros_articles`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_articles_genre`
--
ALTER TABLE `08_vente_en_gros_articles_genre`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_article_suivie_stock`
--
ALTER TABLE `08_vente_en_gros_article_suivie_stock`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion`
--
ALTER TABLE `08_vente_en_gros_camion`
  MODIFY `PK` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion_facture`
--
ALTER TABLE `08_vente_en_gros_camion_facture`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion_fond`
--
ALTER TABLE `08_vente_en_gros_camion_fond`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion_position`
--
ALTER TABLE `08_vente_en_gros_camion_position`
  MODIFY `PK` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion_stock`
--
ALTER TABLE `08_vente_en_gros_camion_stock`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_camion_stock_fixed`
--
ALTER TABLE `08_vente_en_gros_camion_stock_fixed`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_clients`
--
ALTER TABLE `08_vente_en_gros_clients`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_factures`
--
ALTER TABLE `08_vente_en_gros_factures`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_fournisseur`
--
ALTER TABLE `08_vente_en_gros_fournisseur`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_team`
--
ALTER TABLE `08_vente_en_gros_team`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_team_poste`
--
ALTER TABLE `08_vente_en_gros_team_poste`
  MODIFY `PK` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `08_vente_en_gros_team_presence`
--
ALTER TABLE `08_vente_en_gros_team_presence`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
