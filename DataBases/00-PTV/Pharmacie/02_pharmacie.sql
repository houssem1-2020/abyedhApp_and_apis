-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2023 at 12:17 AM
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
-- Table structure for table `02_pharmacie_articles`
--

CREATE TABLE `02_pharmacie_articles` (
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
  `Groupage` int(5) NOT NULL,
  `Fast_Input` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_articles_genre`
--

CREATE TABLE `02_pharmacie_articles_genre` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_article_suivie_stock`
--

CREATE TABLE `02_pharmacie_article_suivie_stock` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `BE_ID` bigint(20) NOT NULL,
  `BE_Date` date NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_caisses`
--

CREATE TABLE `02_pharmacie_caisses` (
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
-- Table structure for table `02_pharmacie_caisses_bons`
--

CREATE TABLE `02_pharmacie_caisses_bons` (
  `PK` bigint(20) NOT NULL,
  `Bon` varchar(20) NOT NULL,
  `Genre` varchar(200) NOT NULL,
  `B_Valeur` varchar(20) NOT NULL,
  `B_Remise` varchar(20) NOT NULL,
  `B_Nette` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_caisses_depenses`
--

CREATE TABLE `02_pharmacie_caisses_depenses` (
  `PK` bigint(20) NOT NULL,
  `Caisse_ID` bigint(20) NOT NULL,
  `Depense` varchar(1000) NOT NULL,
  `Valeur` double NOT NULL,
  `Description` varchar(2000) NOT NULL,
  `D_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_clients`
--

CREATE TABLE `02_pharmacie_clients` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `CL_ID` bigint(20) NOT NULL,
  `Releted_PID` bigint(10) NOT NULL,
  `CIN` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Name` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Creation_Date` date NOT NULL,
  `Phone` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Adress` varchar(500) CHARACTER SET utf8 NOT NULL,
  `Localite` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Gouv` varchar(150) CHARACTER SET utf8 NOT NULL,
  `State` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_clients_reglement`
--

CREATE TABLE `02_pharmacie_clients_reglement` (
  `PK` bigint(20) NOT NULL,
  `R_ID` bigint(20) NOT NULL,
  `Client` varchar(100) NOT NULL,
  `Reglemment` float NOT NULL,
  `R_Date` date NOT NULL,
  `Caisse_ID` bigint(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_factures`
--

CREATE TABLE `02_pharmacie_factures` (
  `PK` bigint(20) NOT NULL,
  `T_ID` varchar(100) NOT NULL,
  `Caisse_ID` varchar(100) NOT NULL,
  `Final_Value` float NOT NULL,
  `Espece` double NOT NULL,
  `T_Date` date NOT NULL,
  `T_Time` time NOT NULL,
  `Client` varchar(100) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Paye_Bons` longtext NOT NULL,
  `Articles` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_fournisseur`
--

CREATE TABLE `02_pharmacie_fournisseur` (
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
-- Table structure for table `02_pharmacie_setting`
--

CREATE TABLE `02_pharmacie_setting` (
  `PK` bigint(10) NOT NULL,
  `PID` bigint(10) NOT NULL,
  `Profile` longtext NOT NULL,
  `Commandes` longtext NOT NULL,
  `Stock` longtext NOT NULL,
  `Factures` longtext NOT NULL,
  `Caisses` longtext NOT NULL,
  `Clients` longtext NOT NULL,
  `Equipe` longtext NOT NULL,
  `Fournisseur` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_team`
--

CREATE TABLE `02_pharmacie_team` (
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
  `Finish_at` date NOT NULL,
  `Identifiant` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_team_avance`
--

CREATE TABLE `02_pharmacie_team_avance` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `AV_Date` date NOT NULL,
  `Valeur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_team_poste`
--

CREATE TABLE `02_pharmacie_team_poste` (
  `PK` int(10) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Poste` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Salaire` varchar(100) NOT NULL,
  `Experience_Target` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_team_presence`
--

CREATE TABLE `02_pharmacie_team_presence` (
  `PK` bigint(10) NOT NULL,
  `Team_ID` bigint(20) NOT NULL,
  `PR_Date` date NOT NULL,
  `Genre` varchar(100) NOT NULL,
  `Description` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_tools_date_proche`
--

CREATE TABLE `02_pharmacie_tools_date_proche` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Genre` varchar(20) NOT NULL,
  `Valeur` float NOT NULL,
  `Description` varchar(800) NOT NULL,
  `F_Jour` date NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_tools_finance`
--

CREATE TABLE `02_pharmacie_tools_finance` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Genre` varchar(20) NOT NULL,
  `Valeur` float NOT NULL,
  `Description` varchar(800) NOT NULL,
  `F_Jour` date NOT NULL,
  `F_ID` bigint(20) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_tools_finance_genre`
--

CREATE TABLE `02_pharmacie_tools_finance_genre` (
  `PK` bigint(20) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Finance_Genre` varchar(500) NOT NULL,
  `Genre_Description` varchar(20000) NOT NULL,
  `Genre_IO` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `02_pharmacie_tools_ticket_prix`
--

CREATE TABLE `02_pharmacie_tools_ticket_prix` (
  `PK` int(11) NOT NULL,
  `PID` bigint(20) NOT NULL,
  `Code` bigint(20) NOT NULL,
  `State` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `02_pharmacie_articles`
--
ALTER TABLE `02_pharmacie_articles`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_articles_genre`
--
ALTER TABLE `02_pharmacie_articles_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_article_suivie_stock`
--
ALTER TABLE `02_pharmacie_article_suivie_stock`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_caisses`
--
ALTER TABLE `02_pharmacie_caisses`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_caisses_bons`
--
ALTER TABLE `02_pharmacie_caisses_bons`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_caisses_depenses`
--
ALTER TABLE `02_pharmacie_caisses_depenses`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_clients`
--
ALTER TABLE `02_pharmacie_clients`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_clients_reglement`
--
ALTER TABLE `02_pharmacie_clients_reglement`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_factures`
--
ALTER TABLE `02_pharmacie_factures`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_fournisseur`
--
ALTER TABLE `02_pharmacie_fournisseur`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_setting`
--
ALTER TABLE `02_pharmacie_setting`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_team`
--
ALTER TABLE `02_pharmacie_team`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_team_avance`
--
ALTER TABLE `02_pharmacie_team_avance`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_team_poste`
--
ALTER TABLE `02_pharmacie_team_poste`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_team_presence`
--
ALTER TABLE `02_pharmacie_team_presence`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_tools_date_proche`
--
ALTER TABLE `02_pharmacie_tools_date_proche`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_tools_finance`
--
ALTER TABLE `02_pharmacie_tools_finance`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_tools_finance_genre`
--
ALTER TABLE `02_pharmacie_tools_finance_genre`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `02_pharmacie_tools_ticket_prix`
--
ALTER TABLE `02_pharmacie_tools_ticket_prix`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `02_pharmacie_articles`
--
ALTER TABLE `02_pharmacie_articles`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `02_pharmacie_articles_genre`
--
ALTER TABLE `02_pharmacie_articles_genre`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `02_pharmacie_article_suivie_stock`
--
ALTER TABLE `02_pharmacie_article_suivie_stock`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `02_pharmacie_caisses`
--
ALTER TABLE `02_pharmacie_caisses`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `02_pharmacie_caisses_bons`
--
ALTER TABLE `02_pharmacie_caisses_bons`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `02_pharmacie_caisses_depenses`
--
ALTER TABLE `02_pharmacie_caisses_depenses`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `02_pharmacie_clients`
--
ALTER TABLE `02_pharmacie_clients`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `02_pharmacie_clients_reglement`
--
ALTER TABLE `02_pharmacie_clients_reglement`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `02_pharmacie_factures`
--
ALTER TABLE `02_pharmacie_factures`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=312;

--
-- AUTO_INCREMENT for table `02_pharmacie_fournisseur`
--
ALTER TABLE `02_pharmacie_fournisseur`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `02_pharmacie_team`
--
ALTER TABLE `02_pharmacie_team`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `02_pharmacie_team_avance`
--
ALTER TABLE `02_pharmacie_team_avance`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `02_pharmacie_team_poste`
--
ALTER TABLE `02_pharmacie_team_poste`
  MODIFY `PK` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `02_pharmacie_team_presence`
--
ALTER TABLE `02_pharmacie_team_presence`
  MODIFY `PK` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `02_pharmacie_tools_date_proche`
--
ALTER TABLE `02_pharmacie_tools_date_proche`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_pharmacie_tools_finance`
--
ALTER TABLE `02_pharmacie_tools_finance`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `02_pharmacie_tools_finance_genre`
--
ALTER TABLE `02_pharmacie_tools_finance_genre`
  MODIFY `PK` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `02_pharmacie_tools_ticket_prix`
--
ALTER TABLE `02_pharmacie_tools_ticket_prix`
  MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8574;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
