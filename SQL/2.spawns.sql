-- ----------------------------
--  Table structure for `spawns`
-- ----------------------------
DROP TABLE IF EXISTS `spawns`;
CREATE TABLE `spawns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idd` int(11) NOT NULL,
  `f` int(11) NOT NULL,
  `fh` int(11) NOT NULL,
  `type` varchar(1) NOT NULL,
  `cy` int(11) NOT NULL,
  `rx0` int(11) NOT NULL,
  `rx1` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `mobtime` int(11) DEFAULT '1000',
  `mid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `spawns`
-- ----------------------------
BEGIN;
INSERT INTO `spawns` VALUES 
('1', '9220020', '0', '103', 'n', '34', '-635', '-735', '-685', '34', '1000', '910000000'),
('2', '1202000', '1', '16', 'n', '95', '-265', '-365', '-315', '95', '1000', '180000000');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;