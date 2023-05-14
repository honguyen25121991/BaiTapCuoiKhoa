/*
  Warnings:

  - You are about to drop the column `id_phong` on the `vi_tri` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `vi_tri` DROP FOREIGN KEY `vi_tri_ibfk_1`;

-- AlterTable
ALTER TABLE `vi_tri` DROP COLUMN `id_phong`;
