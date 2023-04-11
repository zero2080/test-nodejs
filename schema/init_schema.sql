CREATE DATABASE `fitdo`;

CREATE USER 'fitdo'@'%' IDENTIFIED BY 'fitdo_password';

GRANT ALL PRIVILEGES ON `fitdo`.* TO 'fitdo'@'%';