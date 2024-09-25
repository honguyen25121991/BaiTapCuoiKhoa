/*
  Warnings:

  - Added the required column `ten_san_pham` to the `khuyen_mai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `khuyen_mai` ADD COLUMN `ten_san_pham` VARCHAR(191) NOT NULL;
