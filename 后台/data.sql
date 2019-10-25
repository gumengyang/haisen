SET NAMES UTF8;
-- 如果存在，丢弃指定数据库
DROP DATABASE IF EXISTS hs;
-- 创建新的数据库嗨森
CREATE DATABASE hs CHARSET=UTF8;
-- 进入该数据库
USE hs;
-- 用户信息
CREATE TABLE hs_master(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO hs_master VALUES (NULL,'15993576621',md5('123456'));
-- 创建保存歌曲详情数据的表detail
-- 歌曲id、歌曲名字、演唱人、发布时间、歌曲时长、专辑
CREATE TABLE hs_detail(
    gid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(256),
    gname VARCHAR(112),
    people VARCHAR(32),
    grelease VARCHAR(32),
    -- people VARCHAR(32),
    -- release VARCHAR(32),
    gtime VARCHAR(8),
    special VARCHAR(112),
    aid INT
);
INSERT INTO detail VALUES
    (null,'music/zgz.jpg','追光者','岑宁儿','2018-1-17','3`55','追光者',1),
    (null,'music/syst.jpg','岁月神偷','金玟岐','2014-2-1','4`04','岁月神偷',2),
    (null,'music/hsggx.jpg','红色高跟鞋','于大海','2009-8-19','3`26','红色高跟鞋',3),
    (null,'music/kl.jpg','可乐','赵紫骅','2014-11-05','4`02','赵紫骅',4);