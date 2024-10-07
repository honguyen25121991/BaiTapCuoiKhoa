/*
  Warnings:

  - Added the required column `hinh_anh` to the `khuyen_mai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `khuyen_mai` ADD COLUMN `hinh_anh` VARCHAR(255) NOT NULL;
