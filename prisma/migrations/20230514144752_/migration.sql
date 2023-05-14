/*
  Warnings:

  - Added the required column `id_phong` to the `binh_luan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `binh_luan` ADD COLUMN `id_phong` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `id_phong` ON `binh_luan`(`id_phong`);

-- AddForeignKey
ALTER TABLE `binh_luan` ADD CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`id_phong`) REFERENCES `phong`(`id_phong`) ON DELETE NO ACTION ON UPDATE NO ACTION;
