-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2019 at 09:18 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

INSERT INTO `nuevas_averias` (`id`, `descripcion`, `cantidad`, `boleto`, `tipo`, `pueblos`, `zona`, `radio`, `remotos`, `dslams`, `vrads`, `efm`, `gpon`, `cisco3800`, `cisco24g`, `clientes`, `fecha`, `causa`, `comentarios`) VALUES
(3, 'ssssssss', 333333333, 'ddd', 'ddd', 'ddd', 'ddd', 'ggg', 'nnnn', 'lll', 'ppp', 'mmm', 'rrr', 'sss', 'ppp', 'aaaaaaaaaa', '2019-12-03 00:00:00', 'sssssss', 'fsadfaddddddddddddddddddd\r\ndfgdfg\r\nfghfgh'),
(5, 'ssssssss', 333333333, 'ddd', 'ddd', 'ddd', 'ddd', 'ggg', 'nnnn', 'lll', 'ppp', 'mmm', 'rrr', 'sss', 'ppp', 'aaaaaaaaaa', '2019-12-02 23:00:00', 'sssssss', 'fsadfaddddddddddddddddddd\r\ndfgdfg\r\nfghfgh'),
(6, 'ssssssss', 333333333, 'ddd', 'ddd', 'ddd', 'ddd', 'ggg', 'nnnn', 'lll', 'ppp', 'mmm', 'rrr', 'sss', 'ppp', 'aaaaaaaaaa', '2019-12-02 23:00:00', 'sssssss', 'fsadfaddddddddddddddddddd\r\ndfgdfg\r\nfghfgh'),
(7, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(8, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(9, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(10, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(11, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(12, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(13, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(14, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(15, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh'),
(16, 'ffff', 333, 'adfewr', 'c', 'eeeeeeee', 'Metro', 'e', 'dddd', 'rrr', 'ddd', 'j', 'werwqe', 'werwer', '', 'm', '2019-12-10 00:00:00', 'ddd', 'asdasddddddddddddddddddddddddddddddd\njhfgh');

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
