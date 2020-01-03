-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2020 at 02:01 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `averias`
--

-- --------------------------------------------------------

--
-- Table structure for table `nuevas_averias`
--

CREATE TABLE `nuevas_averias` (
  `id` int(100) NOT NULL,
  `numero` text NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `cantidad` int(100) NOT NULL,
  `boleto` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `pueblos` varchar(100) NOT NULL,
  `zona` varchar(100) NOT NULL,
  `radio` varchar(100) NOT NULL,
  `remotos` varchar(100) NOT NULL,
  `dslams` varchar(100) NOT NULL,
  `vrads` varchar(100) NOT NULL,
  `efm` varchar(100) NOT NULL,
  `gpon` varchar(1000) NOT NULL,
  `cisco3800` varchar(100) NOT NULL,
  `cisco24g` varchar(100) NOT NULL,
  `clientes` varchar(100) NOT NULL,
  `fecha` datetime NOT NULL,
  `causa` varchar(100) NOT NULL,
  `comentarios` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nuevas_averias`
--

INSERT INTO `nuevas_averias` (`id`, `numero`, `descripcion`, `cantidad`, `boleto`, `tipo`, `pueblos`, `zona`, `radio`, `remotos`, `dslams`, `vrads`, `efm`, `gpon`, `cisco3800`, `cisco24g`, `clientes`, `fecha`, `causa`, `comentarios`) VALUES
(17, '1578013216709', 'll', 88, 'tt', 'tt', 'rr', 'Metro', 'uuu', 'ttt', 'rr', 'dd', 'ff', 'fff', 'fff', 'hh', 'ddd', '2020-01-03 00:00:00', 'uuu', 'jjjjjj\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nuevas_averias`
--
ALTER TABLE `nuevas_averias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nuevas_averias`
--
ALTER TABLE `nuevas_averias`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
