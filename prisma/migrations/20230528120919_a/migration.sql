/*
  Warnings:

  - Added the required column `hinh_anh` to the `nguoi_dung` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nguoi_dung` ADD COLUMN `hinh_anh` VARCHAR(255) NOT NULL;
