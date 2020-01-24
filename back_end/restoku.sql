-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 24 Jan 2020 pada 04.29
-- Versi Server: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restoku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking`
--

CREATE TABLE `booking` (
  `no_booking` varchar(9) NOT NULL,
  `date_booking` timestamp NULL DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `zipcode` varchar(6) NOT NULL,
  `total_payment` double NOT NULL,
  ` payment_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking_detail`
--

CREATE TABLE `booking_detail` (
  `no_booking` varchar(15) NOT NULL,
  `id_item` int(11) NOT NULL,
  `item_name` varchar(128) NOT NULL,
  `item_price` double NOT NULL,
  `amount` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `carts`
--

CREATE TABLE `carts` (
  `id_cart` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `number_of_item` int(11) NOT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `carts`
--

INSERT INTO `carts` (`id_cart`, `id_item`, `id_user`, `item_name`, `price`, `number_of_item`, `created_on`, `updated_on`) VALUES
(21, 44, 89, 'Peanut Butter Cookie Ice Cream Recipe', 60000, 3, '2020-01-12 16:57:08', '2020-01-13 04:17:59'),
(22, 42, 92, 'Chocolate Peanut Butter Fudge Oreo Ice Cream', 35000, 3, '2020-01-13 03:53:29', '2020-01-13 03:53:29'),
(23, 39, 92, 'Mermaid Ice Cream', 15000, 3, '2020-01-13 03:53:41', '2020-01-13 03:53:41');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id_category`, `category_name`, `created_on`, `updated_on`) VALUES
(1, 'ice Cream', '2019-12-25 09:58:57', '2019-12-25 10:04:50'),
(2, 'Ice Cream Cake', '2019-12-25 09:54:14', '2019-12-25 09:53:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_user`
--

CREATE TABLE `detail_user` (
  `id_user` int(11) NOT NULL,
  `province` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `district` varchar(128) NOT NULL,
  `address` mediumtext NOT NULL,
  `zip_code` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `detail_user`
--

INSERT INTO `detail_user` (`id_user`, `province`, `city`, `district`, `address`, `zip_code`) VALUES
(89, 'Jawa Barat', 'Kota Bekasi', 'Rawa Lumbu', 'Jl. Pelabuhan Ratu RT 03/RW 05 No.156 Kecamatan Rawa Lumbu Kota Bekasi Jawa Barat', 17115),
(92, 'Jawa Barat', 'Kota Bekasi', 'Rawa Lumbu', 'Jl.pangandaran', 17115);

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id_item` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `item_name` longtext NOT NULL,
  `price` double NOT NULL,
  `description` longtext NOT NULL,
  `images` varchar(255) NOT NULL,
  `ratings` float NOT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id_item`, `id_category`, `item_name`, `price`, `description`, `images`, `ratings`, `date_created`, `date_updated`) VALUES
(34, 2, 'Candy Shop Ice Cream Cake', 250000, 'We tend to make desserts as we please, as we think they’re delicious, but when cooking for others, you have to let go of your prejudices and make this awesome cake out of Kit Kat and Ice Cream. It’s the perfect solution for any child’s birthday, especially during those warm days. So don’t just stay ', 'images1578058072562.jpg', 4.67, '2020-01-03 13:27:52', '2020-01-03 13:27:52'),
(35, 2, 'Ginger Bread and Spiced Caramel Ice Cream recipe', 270000, 'Prepare this irresistible gingerbread and spiced caramel ice-cream cake at least 1 day in advance to ensure it has enough time to set.', 'images1578058802505.jpg', 4, '2020-01-03 13:40:02', '2020-01-03 13:40:02'),
(36, 1, 'Ice Cream Carnivel in Bangalore', 50000, 'To celebrate the launch of the new flavours, Smoor Chocolates is offering one free ice cream scoop to the first 150 customers on May 18, 2019 between 3PM and 7PM. The ice cream cart is located at Smoor Signature Lounge, Indiranagar', 'images1578059163267.jpg', 4.33, '2020-01-03 13:46:03', '2020-01-03 13:46:03'),
(37, 1, 'Ice Cream Sundae Pie Piled', 90000, 'Chocolate lovers’ summertime dreams are made of this Piled High Ice Cream Sundae Pie! Scoops of ice cream are generously splattered with a rich, dark chocolate raspberry sauce all on a chocolate wafer crust.', 'images1578059377920.jpg', 0, '2020-01-03 13:49:37', '2020-01-03 13:49:37'),
(38, 2, 'KitKat Ice Cream Pie', 150000, 'I come from a long line family of chocoholics.  The kind of people who believe that if it’s not chocolate, it’s not dessert.  So I like to convince myself that chocolate runs in my veins and that the uncontrollable obsession is out of my hands…it’s in my genes.  At least that’s what I tell myself', 'images1578059547140.jpg', 0, '2020-01-03 13:52:27', '2020-01-03 13:52:27'),
(39, 1, 'Mermaid Ice Cream', 15000, 'No-Churn Mermaid Ice Cream is colorful swirls of easy homemade ice cream filled with sprinkles that is perfect for a mermaid party…or just a hot summer afternoon treat!\n', 'images1578059701443.jpeg', 0, '2020-01-03 13:55:01', '2020-01-03 13:55:01'),
(40, 2, 'Speed Ice Cream Cake', 120000, 'No-Churn Mermaid Ice Cream is colorful swirls of easy homemade ice cream filled with sprinkles that is perfect for a mermaid party…or just a hot summer afternoon treat!\n', 'images1578059790892.jpeg', 0, '2020-01-03 13:56:30', '2020-01-03 13:56:30'),
(41, 1, 'Ingredient Vanila Coconut Ice Cream Incredibly', 20000, 'The funny thing is I was lactose intolerant for the better part of my early childhood, which means somewhere along the line I decided I was going to eat dairy anyway and I don’t think my parents had the heart to tell me no. So ice cream it was, until several years ago when my body shut the whole operation down. Sad day.', 'images1578060443152.jpg', 0, '2020-01-03 14:07:23', '2020-01-03 14:07:23'),
(42, 1, 'Chocolate Peanut Butter Fudge Oreo Ice Cream', 35000, 'This is Oreo crust and ice cream dreamland. It can’t not be addicting when it starts with a seriously thick layer of crushed Oreos with melted butter pressed into a pan, and is then topped with a borderline inappropriately rich layer of homemade fudge sauce, and finally covered with soft ice cream which should definitely be Peanut Butter Panic.', 'images1578060592815.jpg', 0, '2020-01-03 14:09:52', '2020-01-03 14:09:52'),
(43, 2, 'Oreo Brookie Ice Cream Cake', 280000, 'This is Oreo crust and ice cream dreamland. It can’t not be addicting when it starts with a seriously thick layer of crushed Oreos with melted butter pressed into a pan, and is then topped with a borderline inappropriately rich layer of homemade fudge sauce, and finally covered with soft ice cream which should definitely be Peanut Butter Panic.', 'images1578060698925.jpg', 0, '2020-01-03 14:11:38', '2020-01-03 14:11:38'),
(44, 1, 'Peanut Butter Cookie Ice Cream Recipe', 60000, 'This is Oreo crust and ice cream dreamland. It can’t not be addicting when it starts with a seriously thick layer of crushed Oreos with melted butter pressed into a pan, and is then topped with a borderline inappropriately rich layer of homemade fudge sauce, and finally covered with soft ice cream which should definitely be Peanut Butter Panic.', 'images1578060811520.jpg', 0, '2020-01-03 14:13:31', '2020-01-03 14:13:31'),
(45, 2, 'Strawberries and Cream Ice Cream Cake', 200000, 'This is Oreo crust and ice cream dreamland. It can’t not be addicting when it starts with a seriously thick layer of crushed Oreos with melted butter pressed into a pan, and is then topped with a borderline inappropriately rich layer of homemade fudge sauce, and finally covered with soft ice cream which should definitely be Peanut Butter Panic.', 'images1578060879010.jpeg', 0, '2020-01-03 14:14:39', '2020-01-03 14:14:39'),
(46, 1, 'Nasi Aki', 40000, 'Dari daging pilihan dan malika', 'images1579706758383.png', 5, '2020-01-22 15:25:58', '2020-01-22 15:25:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `name` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `description` mediumtext NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `id_admin`, `name`, `logo`, `longitude`, `latitude`, `description`, `created_on`, `updated_on`) VALUES
(1, 0, 'Warung Jati Asih', '123', 0, 0, 'Ini adalah', '2019-12-24 10:47:39', '0000-00-00 00:00:00'),
(2, 0, 'Warung Bocah', 'logo1577354428131.jpg', -6.61155, 106.808, 'ini adalah ', '2019-12-26 10:00:28', '2019-12-26 10:00:28'),
(3, 0, 'warung lenk', 'logo1577447736036.jpg', 0, 0, 'ini adalah', '2019-12-27 11:55:36', '2019-12-27 11:55:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `review`
--

CREATE TABLE `review` (
  `id_review` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `review` longtext NOT NULL,
  `rating` float NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `review`
--

INSERT INTO `review` (`id_review`, `id_item`, `id_user`, `name`, `review`, `rating`, `created_on`, `updated_on`) VALUES
(59, 34, 2, 'arfifa rahman', 'Enak rasanya membuat saya bahagia', 5, '2020-01-04 14:33:50', '2020-01-04 14:33:50'),
(60, 34, 2, 'arfifa rahman', 'Enak Tp saya Ga ada yang traktir', 5, '2020-01-04 14:34:15', '2020-01-04 14:34:15'),
(61, 34, 2, 'arfifa rahman', 'Pengen lagi pengen lagi', 4, '2020-01-04 14:34:31', '2020-01-04 14:34:31'),
(62, 35, 2, 'arfifa rahman', 'enak dimakan saat kumpul keluarga', 4, '2020-01-04 14:34:56', '2020-01-04 14:34:56'),
(63, 35, 2, 'arfifa rahman', 'enak tapi aku ga suka jahe', 3, '2020-01-04 14:35:12', '2020-01-04 14:35:12'),
(64, 35, 2, 'arfifa rahman', 'enak bgt', 5, '2020-01-04 14:35:28', '2020-01-04 14:35:28'),
(65, 36, 2, 'arfifa rahman', 'enak bgt', 4, '2020-01-04 14:35:54', '2020-01-04 14:35:54'),
(66, 36, 2, 'arfifa rahman', 'enak bgt', 4, '2020-01-04 14:36:02', '2020-01-04 14:36:02'),
(67, 36, 2, 'arfifa rahman', 'semuanya enak tp ga ad yang traktir', 5, '2020-01-04 14:36:25', '2020-01-04 14:36:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `revoked_token`
--

CREATE TABLE `revoked_token` (
  `id_token` text NOT NULL,
  `username` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `revoked_token`
--

INSERT INTO `revoked_token` (`id_token`, `username`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9yb2xlIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiaWRfdXNlciI6MywiaWF0IjoxNTc3NjI2MjcxLCJleHAiOjE1Nzc3MTI2NzF9.hRco--UT4pY_jfNo6YzJZmxlhOaHOkyXEDpgHNRdKRI', 'admin'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9yb2xlIjoyLCJ1c2VybmFtZSI6Imthcnlhd2FuIiwiaWRfdXNlciI6MiwiaWF0IjoxNTc3NjMwMjYzLCJleHAiOjE1Nzc3MTY2NjN9.4cNT1OpKCi4cMfw-_0urvEFsQ2SlBQ-cCMTWgdfh-ak', 'karyawan'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9yb2xlIjoxLCJ1c2VybmFtZSI6InJhaG1hbiIsImlkX3VzZXIiOjg5LCJpYXQiOjE1Nzk0NTkwMjgsImV4cCI6MTU3OTU0NTQyOH0.2hqt328p9CbWdzWQJKmLE-7lgfZbpaSnM68J_ire_gw', 'rahman'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9yb2xlIjozLCJ1c2VybmFtZSI6InJhaG1hbmFqYSIsImlkX3VzZXIiOjYsImlhdCI6MTU3NzY4ODgyMywiZXhwIjoxNTc3Nzc1MjIzfQ.jB35jXVzf6D2xwwEYTEPt5R1mAQjfcd4OXFvJPAzy7Q', 'rahmanaja');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id_role` int(3) NOT NULL,
  `role_name` varchar(40) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id_role`, `role_name`, `created_on`, `updated_on`) VALUES
(1, 'Admin', '2019-12-25 05:57:24', '2019-12-25 05:33:53'),
(2, 'Karyawan', '2019-12-25 05:57:40', '2019-12-25 05:51:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `fullname` varchar(128) NOT NULL,
  `date_birth` date DEFAULT NULL,
  `gender` enum('Man','Woman') NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `email` varchar(128) NOT NULL,
  `username` varchar(125) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_role` int(3) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `fullname`, `date_birth`, `gender`, `no_telp`, `email`, `username`, `password`, `id_role`, `created_on`, `updated_on`) VALUES
(89, 'Arfifa Rahman', '2020-01-16', 'Man', '0819342388292', 'arfifarahman509@gmail.com', 'rahman', '$2a$10$FjUawIVoIVs4.XoeNn8o2OhfAD4dffwF9YwC48lx/5ZLHUsihtS3e', 1, '2020-01-12 06:55:57', '2020-01-12 06:55:57'),
(92, 'Arfifa Rahman', '2020-01-15', 'Man', '0819342388292', 'arfifarahman5@gmail.com', 'rahman123', '$2a$10$ouv3lOEKwTSAVquCi08lguHbElVq/0Z7oRk0VS6RB4kDFzcXn/i4W', 1, '2020-01-13 03:52:34', '2020-01-13 03:52:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`no_booking`),
  ADD UNIQUE KEY `no_booking` (`no_booking`);

--
-- Indexes for table `booking_detail`
--
ALTER TABLE `booking_detail`
  ADD UNIQUE KEY `no_booking` (`no_booking`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `detail_user`
--
ALTER TABLE `detail_user`
  ADD UNIQUE KEY `id_user` (`id_user`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id_item`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`);

--
-- Indexes for table `revoked_token`
--
ALTER TABLE `revoked_token`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_role` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
