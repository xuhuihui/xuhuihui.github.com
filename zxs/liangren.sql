/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : liangren

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-06-04 10:53:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isuse` int(11) NOT NULL DEFAULT '1' COMMENT '用于软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'aaa', '123456', '1');
INSERT INTO `admin` VALUES ('2', 'bbb', '123456', '1');
INSERT INTO `admin` VALUES ('3', 'ccc', '1112223', '1');
INSERT INTO `admin` VALUES ('4', 'qq', '1567', '1');

-- ----------------------------
-- Table structure for `employee`
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL DEFAULT '123456',
  `sex` int(2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `card_no` varchar(255) NOT NULL DEFAULT '1234567890123456',
  `type` int(11) NOT NULL COMMENT '类型',
  `job` int(11) DEFAULT NULL COMMENT '职称',
  `introduce` varchar(255) DEFAULT '靓人，为您打造您的专属造型' COMMENT '简介',
  `credit` int(11) NOT NULL COMMENT '信用值',
  `price` float NOT NULL DEFAULT '50' COMMENT '价格',
  `trade` int(11) NOT NULL DEFAULT '0' COMMENT '交易量',
  `good_comment` float NOT NULL COMMENT '好评率',
  `online` int(11) NOT NULL DEFAULT '1' COMMENT '判断是否在线',
  `isuse` int(11) NOT NULL DEFAULT '1' COMMENT '用于软删除',
  PRIMARY KEY (`id`),
  KEY `type` (`type`),
  KEY `job` (`job`),
  CONSTRAINT `job` FOREIGN KEY (`job`) REFERENCES `job` (`id`),
  CONSTRAINT `type` FOREIGN KEY (`type`) REFERENCES `type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', 'sanitation', '123456', '0', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '1', '20', '4', '100', '1', '1');
INSERT INTO `employee` VALUES ('2', '依依', '111111', '0', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '2', '30', '5', '90', '1', '1');
INSERT INTO `employee` VALUES ('3', '三天', '22222', '1', null, '1234567890123456', '3', '3', '靓人，为您打造您的专属造型', '3', '40', '6', '95.5', '1', '1');
INSERT INTO `employee` VALUES ('4', '莫妮娜', '000000', '0', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '4', '50', '4', '90', '1', '1');
INSERT INTO `employee` VALUES ('5', '风味', '1234567', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '1', '22', '3', '70', '1', '1');
INSERT INTO `employee` VALUES ('6', '何瑞', '123456', '1', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '2', '44', '2', '80', '1', '1');
INSERT INTO `employee` VALUES ('7', '贺锦', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '33', '5', '83', '1', '1');
INSERT INTO `employee` VALUES ('8', '晚清', '123456', '0', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '4', '40', '1', '0', '1', '1');
INSERT INTO `employee` VALUES ('9', '青小梅', '123456', '0', null, '1234567890123456', '3', '3', '靓人，为您打造您的专属造型', '1', '30', '4', '95', '1', '1');
INSERT INTO `employee` VALUES ('10', '小指', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '5', '50', '10', '99', '1', '1');
INSERT INTO `employee` VALUES ('11', '肖肖', '123456', '1', null, '1234567890123456', '5', '3', '靓人，为您打造您的专属造型', '5', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('12', '小严', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '3', '50', '2', '90', '1', '1');
INSERT INTO `employee` VALUES ('13', '云帆', '123456', '1', null, '1234567890123456', '5', '3', '靓人，为您打造您的专属造型', '4', '50', '13', '99', '1', '1');
INSERT INTO `employee` VALUES ('14', 'Gary', '123456', '1', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '4', '70', '20', '99.5', '1', '1');
INSERT INTO `employee` VALUES ('15', 'Helen', '123456', '0', null, '1234567890123456', '2', '3', '靓人，为您打造您的专属造型', '1', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('16', 'Bob', '123456', '1', null, '1234567890123456', '1', '3', '靓人，为您打造您的专属造型', '4', '44', '14', '80', '1', '1');
INSERT INTO `employee` VALUES ('17', 'Ann', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '2', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('18', 'Lisa', '123456', '0', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '3', '50', '5', '70', '1', '1');
INSERT INTO `employee` VALUES ('19', 'ggg', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '2', '60', '4', '90', '1', '1');
INSERT INTO `employee` VALUES ('20', '承恩', '123456', '0', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '1', '50', '1', '70', '1', '1');
INSERT INTO `employee` VALUES ('21', '文轩', '123456', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '2', '50', '2', '77', '1', '1');
INSERT INTO `employee` VALUES ('22', '成天', '123456', '1', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '3', '50', '3', '75.7', '1', '1');
INSERT INTO `employee` VALUES ('23', '子文', '123456', '0', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '4', '50', '4', '78', '1', '1');
INSERT INTO `employee` VALUES ('24', '夏炎', '123456', '1', null, '1234567890123456', '1', '3', '靓人，为您打造您的专属造型', '5', '50', '5', '79', '1', '1');
INSERT INTO `employee` VALUES ('25', '一言', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '0', '50', '6', '99', '1', '1');
INSERT INTO `employee` VALUES ('26', '楠', '123456', '0', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '3', '50', '7', '70', '1', '1');
INSERT INTO `employee` VALUES ('27', '七煞', '123456', '1', null, '1234567890123456', '2', '3', '靓人，为您打造您的专属造型', '2', '50', '8', '50', '1', '1');
INSERT INTO `employee` VALUES ('28', '诗诗', '123456', '0', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '1', '50', '9', '90', '1', '1');
INSERT INTO `employee` VALUES ('29', '魔力', '123456', '1', null, '1234567890123456', '2', '3', '靓人，为您打造您的专属造型', '0', '50', '0', '50', '1', '1');
INSERT INTO `employee` VALUES ('30', 'Bill', '123456', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '1', '50', '1', '86', '1', '1');
INSERT INTO `employee` VALUES ('31', '亦菲', '123456', '0', null, '1234567890123456', '5', '3', '靓人，为您打造您的专属造型', '3', '50', '12', '87', '1', '1');
INSERT INTO `employee` VALUES ('32', '天宇', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '4', '50', '13', '88', '1', '1');
INSERT INTO `employee` VALUES ('33', '叶烨', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '5', '50', '14', '85', '1', '1');
INSERT INTO `employee` VALUES ('34', '荣荣', '123456', '0', null, '1234567890123456', '5', '2', '靓人，为您打造您的专属造型', '1', '50', '1', '88.8', '1', '1');
INSERT INTO `employee` VALUES ('35', '哆啦', '123456', '0', null, '1234567890123456', '5', '3', '我是您的神奇魔镜', '5', '50', '1', '88.7', '1', '1');
INSERT INTO `employee` VALUES ('36', '安妮', '123456', '0', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '4', '50', '2', '88.6', '1', '1');
INSERT INTO `employee` VALUES ('37', '宏伟', '123456', '1', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '5', '50', '3', '65', '1', '1');
INSERT INTO `employee` VALUES ('38', '岁岁', '123456', '1', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '3', '50', '4', '67', '1', '1');
INSERT INTO `employee` VALUES ('39', '李老大', '123456', '1', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '1', '50', '5', '68', '1', '1');
INSERT INTO `employee` VALUES ('40', '傅家俊', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '1', '50', '5', '69', '1', '1');
INSERT INTO `employee` VALUES ('41', '俄文', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '2', '50', '6', '91', '1', '1');
INSERT INTO `employee` VALUES ('42', '斐然', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '2', '50', '7', '67', '1', '1');
INSERT INTO `employee` VALUES ('43', '哈卡', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '3', '50', '8', '78', '1', '1');
INSERT INTO `employee` VALUES ('44', '仓鼠', '123456', '1', null, '1234567890123456', '2', '3', '靓人，为您打造您的专属造型', '3', '50', '8', '87', '1', '1');
INSERT INTO `employee` VALUES ('45', '大会', '123456', '0', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '4', '50', '9', '76', '0', '1');
INSERT INTO `employee` VALUES ('46', '端午', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '4', '50', '1', '89', '1', '1');
INSERT INTO `employee` VALUES ('47', '大峰', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '4', '50', '1', '84', '1', '1');
INSERT INTO `employee` VALUES ('48', '王靖', '123456', '1', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '4', '50', '12', '83.6', '1', '1');
INSERT INTO `employee` VALUES ('49', '十分', '123456', '0', null, '1234567890123456', '5', '2', '靓人，为您打造您的专属造型', '4', '50', '11', '55', '1', '1');
INSERT INTO `employee` VALUES ('50', '阿狸', '123456', '1', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '5', '50', '9', '89', '1', '1');
INSERT INTO `employee` VALUES ('51', '若能', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '5', '50', '8', '67', '1', '1');
INSERT INTO `employee` VALUES ('52', '列斯', '123456', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '2', '30', '7', '77', '1', '1');
INSERT INTO `employee` VALUES ('53', '填填', '123456', '0', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '5', '50', '7', '56.9', '1', '1');
INSERT INTO `employee` VALUES ('54', '怪怪', '123456', '1', null, '1234567890123456', '3', '3', '靓人，为您打造您的专属造型', '1', '50', '8', '56.7', '1', '1');
INSERT INTO `employee` VALUES ('55', '他的', '123456', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '2', '50', '9', '56.7', '1', '1');
INSERT INTO `employee` VALUES ('56', '依依', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '50', '8', '88', '1', '1');
INSERT INTO `employee` VALUES ('57', '璐璐', '123456', '0', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '4', '50', '7', '79', '1', '1');
INSERT INTO `employee` VALUES ('58', '娃娃', '123456', '0', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '5', '50', '7', '70', '1', '1');
INSERT INTO `employee` VALUES ('59', '琦林', '123456', '1', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '1', '50', '8', '80', '1', '1');
INSERT INTO `employee` VALUES ('60', '苍天', '123456', '1', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '2', '50', '6', '83', '0', '1');
INSERT INTO `employee` VALUES ('61', '莫莫', '123456', '0', null, '1234567890123456', '5', '3', '靓人，为您打造您的专属造型', '5', '100', '20', '97', '1', '1');
INSERT INTO `employee` VALUES ('62', '宝团', '123456', '1', null, '1234567890123456', '3', '2', '靓人，为您打造您的专属造型', '3', '45', '2', '89', '1', '1');
INSERT INTO `employee` VALUES ('63', '显卡', '123456', '0', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '4', '50', '5', '88', '1', '1');
INSERT INTO `employee` VALUES ('64', '强强', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '4', '50', '5', '96', '1', '1');
INSERT INTO `employee` VALUES ('65', '格尼', '123456', '0', null, '1234567890123456', '3', '3', '靓人，为您打造您的专属造型', '3', '50', '10', '78', '1', '1');
INSERT INTO `employee` VALUES ('66', '菜鸟', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '59', '5', '70', '1', '1');
INSERT INTO `employee` VALUES ('67', '格尼', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '4', '50', '10', '80', '1', '1');
INSERT INTO `employee` VALUES ('68', '儒', '123456', '0', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '4', '50', '9', '78', '1', '1');
INSERT INTO `employee` VALUES ('69', '团ing', '123456', '0', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '4', '50', '9', '68', '1', '1');
INSERT INTO `employee` VALUES ('70', 'gnsl', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '5', '50', '10', '95', '1', '1');
INSERT INTO `employee` VALUES ('71', 'Lee', '123456', '1', null, '1234567890123456', '4', '3', '靓人，为您打造您的专属造型', '5', '120', '34', '95.2', '1', '1');
INSERT INTO `employee` VALUES ('72', 'yingna', '123456', '0', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '1', '50', '0', '50', '1', '1');
INSERT INTO `employee` VALUES ('73', 'poname', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '3', '70', '30', '69', '1', '1');
INSERT INTO `employee` VALUES ('74', 'gkner', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '4', '90', '24', '88.1', '1', '1');
INSERT INTO `employee` VALUES ('75', 'Gerni', '123456', '0', null, '1234567890123456', '4', '3', '靓人，为您打造您的专属造型', '4', '90', '29', '85.1', '1', '1');
INSERT INTO `employee` VALUES ('76', 'Tana', '123456', '0', null, '1234567890123456', '5', '2', '靓人，为您打造您的专属造型', '4', '98', '16', '78.9', '1', '1');
INSERT INTO `employee` VALUES ('77', 'viui', '123456', '1', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '2', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('78', 'Papa', '123456', '1', null, '1234567890123456', '4', '2', '靓人，为您打造您的专属造型', '4', '78', '19', '76.9', '1', '1');
INSERT INTO `employee` VALUES ('79', 'Vivi', '123456', '0', null, '1234567890123456', '4', '3', '靓人，为您打造您的专属造型', '5', '150', '37', '89.2', '1', '1');
INSERT INTO `employee` VALUES ('80', 'cimon', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '50', '10', '70', '1', '1');
INSERT INTO `employee` VALUES ('81', 'Youmi', '123456', '1', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '3', '40', '19', '78', '1', '1');
INSERT INTO `employee` VALUES ('82', 'Gelee', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '4', '70', '20', '77', '1', '1');
INSERT INTO `employee` VALUES ('83', 'Ann', '123456', '0', null, '1234567890123456', '1', '3', '靓人，为您打造您的专属造型', '4', '80', '32', '88', '1', '1');
INSERT INTO `employee` VALUES ('84', 'Zhang', '123456', '1', null, '1234567890123456', '2', '3', '靓人，为您打造您的专属造型', '5', '98', '29', '87.6', '1', '1');
INSERT INTO `employee` VALUES ('85', 'Young', '123456', '1', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '3', '50', '4', '77', '1', '1');
INSERT INTO `employee` VALUES ('86', '依依', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '50', '7', '80', '1', '1');
INSERT INTO `employee` VALUES ('87', '婆娑', '123456', '0', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '2', '50', '6', '67.1', '1', '1');
INSERT INTO `employee` VALUES ('88', '乐了', '123456', '1', null, '1234567890123456', '1', '1', '靓人，为您打造您的专属造型', '1', '50', '3', '66.6', '1', '1');
INSERT INTO `employee` VALUES ('89', '泰安', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '30', '19', '78.9', '1', '1');
INSERT INTO `employee` VALUES ('90', '慵懒', '123456', '0', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '3', '50', '4', '90', '1', '1');
INSERT INTO `employee` VALUES ('91', '睿睿', '123456', '0', null, '1234567890123456', '5', '3', '靓人，为您打造您的专属造型', '5', '150', '30', '90', '1', '1');
INSERT INTO `employee` VALUES ('92', '卡拉', '123456', '1', null, '1234567890123456', '2', '2', '靓人，为您打造您的专属造型', '4', '68', '10', '68', '1', '1');
INSERT INTO `employee` VALUES ('93', '阿曼多', '123456', '0', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '4', '50', '10', '78', '1', '1');
INSERT INTO `employee` VALUES ('94', '卡拉达', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '50', '11', '69.9', '1', '1');
INSERT INTO `employee` VALUES ('95', '优米', '123456', '1', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '3', '50', '10', '78', '1', '1');
INSERT INTO `employee` VALUES ('96', 'tankless', '123456', '0', null, '1234567890123456', '1', '3', '靓人，为您打造您的专属造型', '5', '130', '30', '85.7', '1', '1');
INSERT INTO `employee` VALUES ('97', 'gms', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '4', '50', '4', '68', '1', '1');
INSERT INTO `employee` VALUES ('98', 'tmarla', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '3', '50', '10', '80', '1', '1');
INSERT INTO `employee` VALUES ('99', 'verbobo', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '2', '50', '2', '50', '1', '1');
INSERT INTO `employee` VALUES ('100', 'labobo', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '4', '50', '5', '78', '1', '1');
INSERT INTO `employee` VALUES ('101', 'reager', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('102', 'yale', '123456', '0', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('103', 'lala', '123456', '0', null, '1234567890123456', '2', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('104', 'qq', '123456', '1', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('105', 'rabi', '123456', '0', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '3', '50', '10', '67', '1', '1');
INSERT INTO `employee` VALUES ('106', 'tanna', '123456', '1', null, '1234567890123456', '1', '2', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('107', '小方', '123456', '1', null, '1234567890123456', '3', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('108', '小明', '123456', '1', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('109', '小狼', '123456', '0', null, '1234567890123456', '5', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');
INSERT INTO `employee` VALUES ('110', '肖肖', '123456', '1', null, '1234567890123456', '4', '1', '靓人，为您打造您的专属造型', '0', '50', '0', '0', '1', '1');

-- ----------------------------
-- Table structure for `job`
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '初级造型师' COMMENT '职称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('1', '初级造型师');
INSERT INTO `job` VALUES ('2', '中级造型师');
INSERT INTO `job` VALUES ('3', '高级造型师');

-- ----------------------------
-- Table structure for `member`
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL DEFAULT '123456',
  `sex` int(1) DEFAULT NULL,
  `mobile` char(11) NOT NULL DEFAULT '17812345678',
  `address` varchar(255) DEFAULT NULL,
  `isuse` int(11) NOT NULL DEFAULT '1' COMMENT '用于软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('1', 'yp', '123456', '1', '17816869555', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('2', 'qqq', '123333', '1', '17816869444', '浙江省杭州市西湖区文一西路222号', '1');
INSERT INTO `member` VALUES ('3', '一片', '123456', '1', '17812345678', '浙江省杭州市西湖区文一西路222号', '1');
INSERT INTO `member` VALUES ('4', '投', '123456', '0', '17812345678', '浙江省杭州市西湖区文一西路222号', '1');
INSERT INTO `member` VALUES ('5', 'tr', '123456', '0', '17812345678', '浙江省杭州市西湖区文一西路222号', '1');
INSERT INTO `member` VALUES ('6', 'bob', '123456', '1', '17812345678', '浙江省杭州市西湖区文一西路222号', '1');
INSERT INTO `member` VALUES ('7', '师', '123456', '0', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('8', '菩萨', '123456', '0', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('9', '悄悄', '123456', '0', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('10', '口袋', '123456', '0', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('11', '冬瓜汤好', '123456', '1', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('12', '司法官', '123456', '0', '17812345678', '浙江省杭州市余杭区海曙路58号', '1');
INSERT INTO `member` VALUES ('13', 'voosk', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('14', 'fosg', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('15', 'fofola', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('16', 'vivivi', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('17', 'yonga', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('18', 'qumi', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('19', 'nala', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('20', 'faman', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('21', 'serlin', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('22', 'muma', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('23', 'bob', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('24', 'Ann', '123456', '0', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('25', 'Zhang', '123456', '1', '17812345678', '浙江省杭州市余杭区余杭塘路1318号', '1');
INSERT INTO `member` VALUES ('26', 'Lee', '123456', '1', '17812345678', '浙江省杭州市西湖区文二路231号', '1');
INSERT INTO `member` VALUES ('27', 'Qumi', '123456', '0', '17812345678', '浙江省杭州市西湖区文二路231号', '1');
INSERT INTO `member` VALUES ('28', 'Lana', '123456', '0', '17812345678', '浙江省杭州市西湖区文二路231号', '1');
INSERT INTO `member` VALUES ('29', 'Asa', '123456', '0', '17812345678', '浙江省杭州市西湖区文二路231号', '1');
INSERT INTO `member` VALUES ('30', 'Qiang', '123456', '1', '17812345678', '浙江省杭州市西湖区文二路231号', '1');

-- ----------------------------
-- Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `use_id` int(11) NOT NULL COMMENT '评价的用户',
  `employee_id` int(11) NOT NULL COMMENT '被评价的造型师',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `date` date NOT NULL COMMENT '日期',
  PRIMARY KEY (`no`),
  KEY `use_id` (`use_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `use_id` FOREIGN KEY (`use_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '1', '4', '服务很好', '2016-05-20');
INSERT INTO `message` VALUES ('2', '2', '2', '还不错', '2016-05-22');
INSERT INTO `message` VALUES ('3', '3', '1', '效果不错，价位和其他主流造型店相比有一定的优势', '2016-05-15');
INSERT INTO `message` VALUES ('4', '1', '1', '造型师的动作帅，眼神帅，技术帅，稀饭', '2016-05-06');
INSERT INTO `message` VALUES ('5', '3', '3', '很好哦，下次还会来找这位造型师呢~', '2016-05-06');
INSERT INTO `message` VALUES ('6', '4', '5', '造型师选的衣服都很漂亮哦~我成为了大家的焦点，这种感觉真好~', '2016-05-07');
INSERT INTO `message` VALUES ('7', '8', '1', '在这里做的指甲真是的很好看呢！而且，比起店里的来说，便宜了很多呢！', '2016-05-07');
INSERT INTO `message` VALUES ('8', '15', '47', '差评', '2016-05-10');
INSERT INTO `message` VALUES ('9', '1', '9', '一般般，就是比较便宜的', '2016-05-17');
INSERT INTO `message` VALUES ('10', '4', '14', '嗯，，，，，还不错吧', '2016-05-18');
INSERT INTO `message` VALUES ('11', '6', '11', '造型师态度很好了，人很靓！！', '2016-05-16');
INSERT INTO `message` VALUES ('12', '10', '11', '稀饭稀饭，下次还关顾的~', '2016-05-19');
INSERT INTO `message` VALUES ('13', '7', '20', '造型师态度挺好的，但是把，技术一般般吧', '2016-05-16');
INSERT INTO `message` VALUES ('14', '6', '22', '习惯好评', '2016-05-18');
INSERT INTO `message` VALUES ('15', '6', '24', '挺满意的', '2016-05-10');
INSERT INTO `message` VALUES ('16', '7', '47', '差评差评，一点都不好，造型师审美太差了！！！！', '2016-05-13');
INSERT INTO `message` VALUES ('17', '4', '26', '习惯好评', '2016-06-02');
INSERT INTO `message` VALUES ('18', '18', '42', '还算是不错吧，', '2016-05-04');
INSERT INTO `message` VALUES ('19', '6', '26', '一般般，没有店里的好', '2016-05-17');
INSERT INTO `message` VALUES ('20', '12', '58', '不太好', '2016-05-16');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL COMMENT '对应的造型师',
  `money` int(11) NOT NULL COMMENT '钱',
  `date` date NOT NULL COMMENT '日期',
  PRIMARY KEY (`id`),
  KEY `employeeid` (`employee_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `member` (`id`),
  CONSTRAINT `employeeid` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '1', '20', '2016-05-03');
INSERT INTO `order` VALUES ('2', '4', '3', '40', '2016-03-17');
INSERT INTO `order` VALUES ('3', '2', '2', '50', '2016-04-01');
INSERT INTO `order` VALUES ('4', '2', '3', '70', '2016-05-02');
INSERT INTO `order` VALUES ('5', '3', '39', '50', '2016-05-06');
INSERT INTO `order` VALUES ('6', '12', '89', '70', '2016-05-09');
INSERT INTO `order` VALUES ('7', '9', '64', '44', '2016-05-20');
INSERT INTO `order` VALUES ('8', '10', '48', '48', '2016-05-09');
INSERT INTO `order` VALUES ('9', '3', '37', '39', '2016-05-13');
INSERT INTO `order` VALUES ('10', '12', '24', '40', '2016-05-18');
INSERT INTO `order` VALUES ('11', '6', '17', '47', '2016-05-20');
INSERT INTO `order` VALUES ('12', '8', '31', '47', '2016-05-30');
INSERT INTO `order` VALUES ('13', '1', '59', '39', '2016-05-31');
INSERT INTO `order` VALUES ('14', '3', '84', '48', '2016-05-26');
INSERT INTO `order` VALUES ('15', '9', '40', '45', '2016-05-16');
INSERT INTO `order` VALUES ('16', '10', '73', '48', '2016-05-27');
INSERT INTO `order` VALUES ('17', '5', '69', '38', '2016-05-17');
INSERT INTO `order` VALUES ('18', '10', '92', '47', '2016-05-16');
INSERT INTO `order` VALUES ('19', '2', '32', '34', '2016-05-22');
INSERT INTO `order` VALUES ('20', '7', '75', '36', '2016-05-21');
INSERT INTO `order` VALUES ('21', '20', '69', '34', '2016-05-23');
INSERT INTO `order` VALUES ('22', '8', '72', '34', '2016-05-30');
INSERT INTO `order` VALUES ('23', '18', '9', '45', '2016-05-23');
INSERT INTO `order` VALUES ('24', '17', '69', '50', '2016-05-16');
INSERT INTO `order` VALUES ('25', '15', '54', '44', '2016-04-23');
INSERT INTO `order` VALUES ('26', '19', '73', '50', '2016-05-09');
INSERT INTO `order` VALUES ('27', '15', '81', '50', '2016-05-22');
INSERT INTO `order` VALUES ('28', '20', '68', '50', '2016-04-30');
INSERT INTO `order` VALUES ('29', '6', '30', '53', '2016-05-11');
INSERT INTO `order` VALUES ('30', '11', '60', '49', '2016-05-05');

-- ----------------------------
-- Table structure for `type`
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '造型类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '美发');
INSERT INTO `type` VALUES ('2', '美甲');
INSERT INTO `type` VALUES ('3', '彩妆');
INSERT INTO `type` VALUES ('4', '护肤');
INSERT INTO `type` VALUES ('5', '服饰搭配');
