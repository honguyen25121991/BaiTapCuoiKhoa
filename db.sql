-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `db_airbdn` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_airbdn`;

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `id_binh_luan` int NOT NULL AUTO_INCREMENT,
  `ma_cong_viec` int NOT NULL,
  `ma_nguoi_binh_luan` int NOT NULL,
  `ngay_binh_luan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noi_dung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sao_binh_luan` int NOT NULL,
  `id_phong` int NOT NULL,
  PRIMARY KEY (`id_binh_luan`),
  KEY `id_phong` (`id_phong`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`id_phong`) REFERENCES `phong` (`id_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `dat_phong`;
CREATE TABLE `dat_phong` (
  `id_dat_phong` int NOT NULL AUTO_INCREMENT,
  `ma_phong` int NOT NULL,
  `ngay_den` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_di` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `so_luong_khach` int NOT NULL,
  `id_nguoi_dung` int NOT NULL,
  `id_phong` int NOT NULL,
  PRIMARY KEY (`id_dat_phong`),
  KEY `id_nguoi_dung` (`id_nguoi_dung`),
  KEY `id_phong` (`id_phong`),
  CONSTRAINT `dat_phong_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `nguoi_dung` (`id_nguoi_dung`),
  CONSTRAINT `dat_phong_ibfk_2` FOREIGN KEY (`id_phong`) REFERENCES `phong` (`id_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `id_nguoi_dung` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass_word` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int NOT NULL,
  `birth_day` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinh_anh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_nguoi_dung`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `nguoi_dung` (`id_nguoi_dung`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `hinh_anh`) VALUES
(1,	'honguyen',	'honguyen@gmail.com',	'1111',	338037039,	'25/12/1991',	'Male',	'Admin',	'string'),
(2,	'honguyen',	'honguyen1@gmail.com',	'1111',	338037039,	'25/12/1991',	'Male',	'Admin',	'localhost:3000/public/img/1685277752074_346166714_624897533012575_8197226008487417259_n.png'),
(3,	'nguoi_dung',	'nguoi_dung_01@gmail.com',	'1111',	33333302,	'01/01/2001',	'Male',	'User',	'string');

DROP TABLE IF EXISTS `phong`;
CREATE TABLE `phong` (
  `id_phong` int NOT NULL AUTO_INCREMENT,
  `ten_phong` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `khach` int NOT NULL,
  `phong_ngu` int NOT NULL,
  `giuong` int NOT NULL,
  `phong_tam` int NOT NULL,
  `mo_ta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gia_tien` int NOT NULL,
  `bep` tinyint(1) NOT NULL DEFAULT '0',
  `may_giat` tinyint(1) NOT NULL DEFAULT '0',
  `ban_la` tinyint(1) NOT NULL DEFAULT '0',
  `tivi` tinyint(1) NOT NULL DEFAULT '0',
  `dieu_hoa` tinyint(1) NOT NULL DEFAULT '0',
  `wifi` tinyint(1) NOT NULL DEFAULT '0',
  `do_xe` tinyint(1) NOT NULL DEFAULT '0',
  `ho_boi` tinyint(1) NOT NULL DEFAULT '0',
  `ban_ui` tinyint(1) NOT NULL DEFAULT '0',
  `hinh_anh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_vi_tri` int NOT NULL,
  PRIMARY KEY (`id_phong`),
  KEY `id_vi_tri` (`id_vi_tri`),
  CONSTRAINT `phong_ibfk_1` FOREIGN KEY (`id_vi_tri`) REFERENCES `vi_tri` (`id_vi_tri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `phong` (`id_phong`, `ten_phong`, `khach`, `phong_ngu`, `giuong`, `phong_tam`, `mo_ta`, `gia_tien`, `bep`, `may_giat`, `ban_la`, `tivi`, `dieu_hoa`, `wifi`, `do_xe`, `ho_boi`, `ban_ui`, `hinh_anh`, `id_vi_tri`) VALUES
(1,	'phong vip 1',	5,	2,	3,	1,	'phong dac biet',	15000000,	1,	1,	1,	1,	1,	1,	1,	1,	1,	'string',	1),
(2,	'phong vip 1',	5,	2,	3,	1,	'phong dac biet',	15000000,	1,	1,	1,	1,	1,	1,	1,	1,	1,	'string',	3);

DROP TABLE IF EXISTS `vi_tri`;
CREATE TABLE `vi_tri` (
  `id_vi_tri` int NOT NULL AUTO_INCREMENT,
  `ten_vi_tri` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tinh_thanh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quoc_gia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinh_anh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_vi_tri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `vi_tri` (`id_vi_tri`, `ten_vi_tri`, `tinh_thanh`, `quoc_gia`, `hinh_anh`) VALUES
(1,	'mien nam',	'can tho ',	'viet nam',	'localhost:3000/public/img/1685277944869_346166714_624897533012575_8197226008487417259_n.png'),
(3,	'mien trung',	'da nang',	'viet nam',	'string'),
(4,	'Hạ Long',	'Quảng Ninh',	'Việt Nam',	'string'),
(5,	'Địa đạo Củ Chi',	'Hồ Chí Minh',	'Việt Nam',	'string'),
(6,	'Khách sạn Minh Tâm Quận 8',	'Hồ Chí Minh',	'Việt Nam',	'string'),
(7,	'Lăng Bác Hồ',	'Hà Nội',	'Việt Nam',	'string');

-- 2023-06-01 16:09:06
1