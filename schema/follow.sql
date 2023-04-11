CREATE TABLE `follow` (
    `member_id` INT NOT NULL,
    `follow_id` INT NOT NULL,
    CONSTRAINT `pk_follow` PRIMARY KEY (`member_id`, `follow_id`),
    CONSTRAINT `fk_follow_member_id` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`),
    CONSTRAINT `fk_follow_follow_id` FOREIGN KEY (`follow_id`) REFERENCES `member`(`id`)
);