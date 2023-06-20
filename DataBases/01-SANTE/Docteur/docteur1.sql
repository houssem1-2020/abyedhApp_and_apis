-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 102.219.176.39:3306
-- Generation Time: May 06, 2023 at 05:08 PM
-- Server version: 8.0.21
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `01_docteur_calendar`
--

CREATE TABLE `01_docteur_calendar` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `E_Date` date NOT NULL,
  `Title` varchar(200) NOT NULL,
  `Description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_clients`
--

CREATE TABLE `01_docteur_clients` (
  `PK` bigint NOT NULL,
  `Genre` varchar(10) NOT NULL,
  `PID` bigint NOT NULL,
  `UID` varchar(50) NOT NULL,
  `Client_from` date NOT NULL,
  `State` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_clients_added`
--

CREATE TABLE `01_docteur_clients_added` (
  `PK` bigint NOT NULL,
  `UID` varchar(50) NOT NULL,
  `PID` bigint NOT NULL,
  `Name` varchar(150) NOT NULL,
  `Adress` varchar(500) NOT NULL,
  `PhoneNum` bigint NOT NULL,
  `BirthDay` date NOT NULL,
  `Start_at` date NOT NULL,
  `Last_Rdv` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_ordonance`
--

CREATE TABLE `01_docteur_ordonance` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `Service` varchar(1000) NOT NULL,
  `Tarif` float NOT NULL,
  `UID` bigint NOT NULL,
  `Seance_ID` varchar(200) NOT NULL,
  `O_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_ordonance_articles`
--

CREATE TABLE `01_docteur_ordonance_articles` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `Service` varchar(1000) NOT NULL,
  `Tarif` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_rapports`
--

CREATE TABLE `01_docteur_rapports` (
  `PK` bigint NOT NULL,
  `UID` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `Maladie` varchar(500) NOT NULL,
  `Evaluation` varchar(1000) NOT NULL,
  `S_Date` date NOT NULL,
  `S_time` time NOT NULL,
  `State` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_sessions`
--

CREATE TABLE `01_docteur_sessions` (
  `PK` bigint NOT NULL,
  `UID` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `Diagnostic` varchar(5000) NOT NULL,
  `Maladie` varchar(500) NOT NULL,
  `State` varchar(200) NOT NULL,
  `State_Degre` varchar(200) NOT NULL,
  `S_Date` date NOT NULL,
  `S_time` time NOT NULL,
  `Ordonance` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_tarif`
--

CREATE TABLE `01_docteur_tarif` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `Service` varchar(1000) NOT NULL,
  `Tarif` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_team`
--

CREATE TABLE `01_docteur_team` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `UID` bigint NOT NULL,
  `Poste` varchar(200) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Start_at` date NOT NULL,
  `Finish_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `01_docteur_team_poste`
--

CREATE TABLE `01_docteur_team_poste` (
  `PK` bigint NOT NULL,
  `PID` bigint NOT NULL,
  `P_ID` bigint NOT NULL,
  `Poste` varchar(200) NOT NULL,
  `Description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `01_docteur_calendar`
--
ALTER TABLE `01_docteur_calendar`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_clients`
--
ALTER TABLE `01_docteur_clients`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_clients_added`
--
ALTER TABLE `01_docteur_clients_added`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_ordonance`
--
ALTER TABLE `01_docteur_ordonance`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_ordonance_articles`
--
ALTER TABLE `01_docteur_ordonance_articles`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_rapports`
--
ALTER TABLE `01_docteur_rapports`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_sessions`
--
ALTER TABLE `01_docteur_sessions`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_tarif`
--
ALTER TABLE `01_docteur_tarif`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_team`
--
ALTER TABLE `01_docteur_team`
  ADD PRIMARY KEY (`PK`);

--
-- Indexes for table `01_docteur_team_poste`
--
ALTER TABLE `01_docteur_team_poste`
  ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `01_docteur_calendar`
--
ALTER TABLE `01_docteur_calendar`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_clients`
--
ALTER TABLE `01_docteur_clients`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_clients_added`
--
ALTER TABLE `01_docteur_clients_added`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_ordonance`
--
ALTER TABLE `01_docteur_ordonance`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_ordonance_articles`
--
ALTER TABLE `01_docteur_ordonance_articles`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_rapports`
--
ALTER TABLE `01_docteur_rapports`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_sessions`
--
ALTER TABLE `01_docteur_sessions`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_tarif`
--
ALTER TABLE `01_docteur_tarif`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_team`
--
ALTER TABLE `01_docteur_team`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `01_docteur_team_poste`
--
ALTER TABLE `01_docteur_team_poste`
  MODIFY `PK` bigint NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
