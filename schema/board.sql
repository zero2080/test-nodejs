CREATE TABLE `board` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `member_id` INT NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME NULL,
    CONSTRAINT `fk_board_member_id` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`)
);