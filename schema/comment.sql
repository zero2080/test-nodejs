CREATE TABLE `comment` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `board_id` INT NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `parent_id` INT,
    `commentor_id` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_comment_board_id` FOREIGN KEY (`board_id`) REFERENCES `board`(`id`),
    CONSTRAINT `fk_comment_parent_id` FOREIGN KEY (`parent_id`) REFERENCES `comment`(`id`),
    CONSTRAINT `fk_comment_commentor_id` FOREIGN KEY (`commentor_id`) REFERENCES `member`(`id`)
);