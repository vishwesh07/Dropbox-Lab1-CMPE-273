-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: dropbox
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (10,'F1','folder','./public/upload/vish@gmail.com/','vish@gmail.com',0,'2017-10-15 20:36:47',0),(11,'cmpe 272 green sheet.docx','file','./public/upload/vish@gmail.com/','vish@gmail.com',1,'2017-10-16 05:37:47',0),(12,'F2','folder','./public/upload/vish@gmail.com/F1/','vish@gmail.com',0,'2017-10-15 19:13:06',0),(13,'CMPE 272 Project Proposal.docx','file','./public/upload/vish@gmail.com/F1/','vish@gmail.com',0,'2017-10-15 19:12:42',0),(14,'F3','folder','./public/upload/vish@gmail.com/F1/','vish@gmail.com',0,'2017-10-15 19:12:44',0),(15,'F3','folder','./public/upload/vish@gmail.com/F1/F2/','vish@gmail.com',0,'2017-10-15 11:53:31',0),(16,'CMPE 272 Project Proposal.pdf','file','./public/upload/vish@gmail.com/F1/F2/','vish@gmail.com',0,'2017-10-15 11:53:34',0),(17,'f1','folder','./public/upload/Arkil@gmail.com/','Arkil@gmail.com',0,'2017-10-15 11:59:10',0),(18,'IoT.pdf','file','./public/upload/Arkil@gmail.com/','Arkil@gmail.com',0,'2017-10-15 11:59:17',0),(19,'f2','folder','./public/upload/Arkil@gmail.com/f1/','Arkil@gmail.com',0,'2017-10-15 11:59:23',0),(20,'BigData.pdf','file','./public/upload/Arkil@gmail.com/f1/','Arkil@gmail.com',0,'2017-10-15 11:59:31',0),(21,'f3','folder','./public/upload/Arkil@gmail.com/f1/f2/','Arkil@gmail.com',0,'2017-10-15 12:00:44',0),(22,'latest_blacklist.txt','file','./public/upload/Arkil@gmail.com/f1/f2/','Arkil@gmail.com',0,'2017-10-15 12:00:52',0),(23,'f3','folder','./public/upload/Arkil@gmail.com/f1/f2/','Arkil@gmail.com',0,'2017-10-15 12:00:59',0),(24,'f3','folder','./public/upload/Arkil@gmail.com/f1/f2/','Arkil@gmail.com',0,'2017-10-15 12:02:20',0),(25,'latest_blacklist.csv','file','./public/upload/Arkil@gmail.com/f1/f2/f3/','Arkil@gmail.com',0,'2017-10-15 12:02:38',0),(26,'f1','folder','./public/upload/Arkil@gmail.com/','Arkil@gmail.com',0,'2017-10-15 12:03:35',0),(27,'f1','folder','./public/upload/Arkil@gmail.com/','Arkil@gmail.com',0,'2017-10-15 12:09:18',0),(28,'f11','folder','./public/upload/Arkil@gmail.com/','Arkil@gmail.com',0,'2017-10-15 12:09:22',0),(29,'The Cloud OS.pdf','file','./public/upload/vish@gmail.com/F1/F2/F3/','vish@gmail.com',0,'2017-10-15 17:00:08',0),(30,'NewFolder','folder','./public/upload/vish@gmail.com/F1/F2/F3/','vish@gmail.com',0,'2017-10-15 17:00:39',0),(31,'Information in the cloud.pdf','file','./public/upload/vish@gmail.com/F1/F2/F3/NewFolder/','vish@gmail.com',0,'2017-10-15 17:00:58',0),(32,'XYZ','folder','./public/upload/vish@gmail.com/F1/F2/F3/NewFolder/','vish@gmail.com',0,'2017-10-15 17:09:40',0),(33,'F4','folder','./public/upload/vish@gmail.com/F1/F2/','vish@gmail.com',0,'2017-10-15 17:43:44',0),(34,'F24','folder','./public/upload/vish@gmail.com/F1/F2/F4/','vish@gmail.com',0,'2017-10-15 17:43:52',0),(35,'Information in the cloud.pdf','file','./public/upload/vish@gmail.com/F1/F3/','vish@gmail.com',0,'2017-10-15 19:11:43',0),(36,'MyFolder','folder','./public/upload/Shashi@gmail.com/','Shashi@gmail.com',0,'2017-10-15 19:20:38',0),(37,'Information in the cloud.pdf','file','./public/upload/Shashi@gmail.com/','Shashi@gmail.com',0,'2017-10-15 19:20:54',0),(38,'MyFolder1','folder','./public/upload/Shashi@gmail.com/MyFolder/','Shashi@gmail.com',0,'2017-10-15 19:21:36',0),(39,'Mini Project _ Database.pdf','file','./public/upload/Shashi@gmail.com/MyFolder/','Shashi@gmail.com',0,'2017-10-15 19:21:55',0),(40,'Cross Join _ 2.JPG','file','./public/upload/Shashi@gmail.com/MyFolder/MyFolder1/','Shashi@gmail.com',0,'2017-10-15 19:22:23',0),(41,'F2','folder','./public/upload/vish@gmail.com/','vish@gmail.com',0,'2017-10-15 20:36:48',0),(42,'vishFolder','folder','./public/upload/vish@gmail.com/','vish@gmail.com',1,'2017-10-16 05:37:49',0),(43,'Cross Join _1 .JPG','file','./public/upload/vish@gmail.com/vishFolder/','vish@gmail.com',0,'2017-10-15 20:31:03',0),(44,'FinalFolder','folder','./public/upload/vish@gmail.com/F1/F2/F3/NewFolder/XYZ/','vish@gmail.com',1,'2017-10-15 20:41:07',0),(45,'NewFl','folder','./public/upload/vish@gmail.com/','vish@gmail.com',0,'2017-10-15 22:26:19',0),(46,'NewFl1','folder','./public/upload/vish@gmail.com/NewFl/','vish@gmail.com',0,'2017-10-15 20:37:48',0),(47,'Schema.JPG','file','./public/upload/vish@gmail.com/NewFl/','vish@gmail.com',0,'2017-10-15 20:37:57',0),(48,'Naturl Join.JPG','file','./public/upload/vish@gmail.com/NewFl/NewFl1/','vish@gmail.com',1,'2017-10-15 20:38:13',0),(49,'FL','folder','./public/upload/vish@gmail.com/','vish@gmail.com',1,'2017-10-16 05:37:53',0),(50,'Cross Join _ 2.JPG','file','./public/upload/vish@gmail.com/FL/','vish@gmail.com',1,'2017-10-15 20:58:53',0),(51,'FL6','folder','./public/upload/vish@gmail.com/F1/','vish@gmail.com',0,'2017-10-15 21:10:01',0),(52,'Cross Join _ 2.JPG','file','./public/upload/vish@gmail.com/F1/','vish@gmail.com',0,'2017-10-15 21:10:09',0),(53,'Inner Join.JPG','file','./public/upload/vish@gmail.com/','vish@gmail.com',0,'2017-10-15 22:25:15',0),(54,'Inner Join.JPG','file','./public/upload/Ram@gmail.com/','Ram@gmail.com',1,'2017-10-15 22:44:29',0),(55,'MyF','folder','./public/upload/Ram@gmail.com/','Ram@gmail.com',0,'2017-10-15 22:47:13',0),(56,'MyF1','folder','./public/upload/Ram@gmail.com/MyF/','Ram@gmail.com',0,'2017-10-15 22:47:24',0),(57,'Inner Join.JPG','file','./public/upload/Ram@gmail.com/MyF/MyF1/','Ram@gmail.com',0,'2017-10-15 22:47:31',0),(58,'Prem_Personal_Folder','folder','./public/upload/Prem@gmail.com/','Prem@gmail.com',1,'2017-10-16 05:08:03',0),(59,'Schema.JPG','file','./public/upload/Prem@gmail.com/','Prem@gmail.com',0,'2017-10-16 05:08:19',0),(60,'NestedFolder','folder','./public/upload/Prem@gmail.com/Prem_Personal_Folder/','Prem@gmail.com',0,'2017-10-16 05:08:44',0),(61,'NewFolder','folder','./public/upload/Prim@gmail.com/','Prim@gmail.com',0,'2017-10-16 05:16:24',0),(62,'Folder2','folder','./public/upload/Prim@gmail.com/NewFolder/','Prim@gmail.com',0,'2017-10-16 05:17:28',0),(63,'Outer Join.JPG','file','./public/upload/vish@gmail.com/','vish@gmail.com',0,'2017-10-16 05:21:03',0);
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-15 23:40:15