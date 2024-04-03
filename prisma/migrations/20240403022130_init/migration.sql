-- CreateTable
CREATE TABLE `Drawing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `data` JSON NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `thickness` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `whiteboardId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Drawing` ADD CONSTRAINT `Drawing_whiteboardId_fkey` FOREIGN KEY (`whiteboardId`) REFERENCES `Whiteboard`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
