-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 19 2016 г., 18:11
-- Версия сервера: 5.5.45
-- Версия PHP: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `Portfolio`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Autorizate`
--

CREATE TABLE IF NOT EXISTS `Autorizate` (
  `Email` text NOT NULL,
  `Password` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `Autorizate`
--

INSERT INTO `Autorizate` (`Email`, `Password`, `id`) VALUES
('admin@admin', 'admin', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Portfolio`
--

CREATE TABLE IF NOT EXISTS `Portfolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url_prj` text NOT NULL,
  `about_prj` text NOT NULL,
  `img_url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Дамп данных таблицы `Portfolio`
--

INSERT INTO `Portfolio` (`id`, `url_prj`, `about_prj`, `img_url`) VALUES
(4, 'a-industry.ru', 'Корпоративный и в тоже время продающий сайт строительной компании a-industry.', 'pic1.jpg'),
(5, 'домгазобетон.рф', 'Продающая страница для компании ledenland.', 'pic-2.jpg'),
(6, 'crmconsulting.biz', 'Лендинг компании «СRM Consulting» специализирующейся на точной настройке Битрикс24 для бизнеса.', 'pic3-.jpg'),
(7, 'landingsloft.ru', 'Сайт по услугам разработки продающих лендингов.', 'pic4.jpg'),
(8, 'yasnow.biz', 'Landing page по продажи франшизы снежного бизнеса.', 'pic5.jpg'),
(13, 'wg', 'wgw', 'bffc9c7c97b3a344aced0b7ddb30fa2e.jpg'),
(14, 'dej', 'ejeej', 'e22699d7a77131a3584f598117b1a0aa.jpg'),
(15, 'wgwg', 'wf', '9c44098813f1e8ca793a41201fe656c4.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
