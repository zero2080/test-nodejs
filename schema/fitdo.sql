CREATE TABLE `fitdo`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `member_id` INT NOT NULL,
    `duration` INT NOT NULL,
    `completed` BOOLEAN DEFAULT FALSE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME,
    CONSTRAINT `fk_fitdo_member_id` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`)
);