-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 19, 2019 at 05:19 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atha_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_user`
--

CREATE TABLE `app_user` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `app_user`
--

INSERT INTO `app_user` (`id`, `username`, `password`) VALUES
(1, 'superadmin', 'superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `group_siswa`
--

CREATE TABLE `group_siswa` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `ta` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `guru` varchar(250) NOT NULL,
  `properties` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_siswa`
--

INSERT INTO `group_siswa` (`id`, `name`, `ta`, `user_id`, `guru`, `properties`) VALUES
(5, 'Foobar', '2016/2017 Semester 2', 1, 'Frederik Nara Kaha', NULL),
(12, 'Foobar', '2016/2017 Semester 2', 1, 'Bullshit', '{ \"weights\": [ 0.5, 0.2, 0.15, 0.1, 0.05 ] }'),
(13, 'ABCDE', '2015/2016 Semester II', 1, 'ABCDE', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `kelas` varchar(250) NOT NULL,
  `rank` int(11) NOT NULL,
  `mat_peng` double NOT NULL,
  `mat_trampil` double NOT NULL,
  `fis_peng` double NOT NULL,
  `fis_trampil` double NOT NULL,
  `kim_peng` double NOT NULL,
  `kim_trampil` double NOT NULL,
  `bio_peng` double NOT NULL,
  `bio_trampil` double NOT NULL,
  `sikap_sos` varchar(10) NOT NULL,
  `sikap_spirit` varchar(10) NOT NULL,
  `jumlah` double NOT NULL,
  `ekstra` varchar(100) DEFAULT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id`, `name`, `kelas`, `rank`, `mat_peng`, `mat_trampil`, `fis_peng`, `fis_trampil`, `kim_peng`, `kim_trampil`, `bio_peng`, `bio_trampil`, `sikap_sos`, `sikap_spirit`, `jumlah`, `ekstra`, `group_id`) VALUES
(1, 'DEGAN ANA GANTENG', 'XII IPA 3', 1, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Pramuka', 12),
(2, 'FulFull', 'XII IPA 1', 2, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Bola Kaki', 12),
(4, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 50, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 0),
(5, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 50, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 0),
(6, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 50, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 0),
(7, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 50, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(8, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 50, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(9, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 33, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(10, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 33, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(11, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(12, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(13, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(14, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(15, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(16, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(17, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(18, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(19, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(20, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(21, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(22, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(23, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(24, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(25, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(26, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(27, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(28, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(29, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(30, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(31, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(32, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(33, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(34, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(35, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(36, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(37, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(38, 'FulFull', 'XII IPA 1', 2, 54, 78, 90, 82, 32, 68, 96, 88, 'A', 'B', 1299, 'Kencing', 1),
(39, 'Jordan L. U. Meta', 'X', 4, 87, 87, 87, 67, 90, 87, 88, 78, 'A', 'A', 2333, 'ASC', 1),
(40, 'Poo Bartrrrog', 'XI IPA 3', 3, 98, 98, 94, 94, 90, 90, 96, 96, 'A', 'A', 2333, 'ADA', 0),
(41, 'Atha', 'XI IPA 2', 2, 99, 99, 99, 99, 99, 99, 99, 99, 'A', 'A', 2345, 'A', 1),
(42, 'Jorda', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 94, 93, 88, 'A', 'A', 2109, 'ADA', 12),
(43, 'Rio', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 94, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(44, 'Om Bai', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 94, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(45, 'Bapa', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 94, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(46, 'Antus', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(47, 'Vino', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(48, 'A1', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(49, 'A2', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(50, 'A3', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(51, 'A4', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(52, 'A7', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(53, 'A8', 'XI IPA 5', 5, 98, 78, 78, 89, 85, 96, 93, 85, 'A', 'A', 2109, 'ADA', 12),
(55, 'Degan', 'XII IPA 3', 1, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Pramuka', 0),
(56, 'Degan', 'XII IPA 3', 1, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Pramuka', 0),
(57, 'Degan', 'XII IPA 3', 1, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Pramuka', 0),
(58, 'Degan', 'XII IPA 3', 1, 88, 88, 88, 88, 88, 88, 88, 88, 'A', 'B', 1299, 'Pramuka', 0),
(59, 'AA', '', 99, 0, 0, 0, 0, 0, 0, 0, 0, 'A', 'A', 0, NULL, 12),
(60, 'B', '', 99, 0, 0, 0, 0, 0, 0, 0, 0, 'A', 'A', 0, NULL, 12),
(61, 'B23', '', 99, 0, 0, 0, 0, 0, 0, 0, 0, 'A', 'A', 0, NULL, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_user`
--
ALTER TABLE `app_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_siswa`
--
ALTER TABLE `group_siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_user`
--
ALTER TABLE `app_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `group_siswa`
--
ALTER TABLE `group_siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
