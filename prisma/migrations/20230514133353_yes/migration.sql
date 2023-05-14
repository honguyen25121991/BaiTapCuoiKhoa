-- CreateTable
CREATE TABLE `binh_luan` (
    `id_binh_luan` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_cong_viec` INTEGER NOT NULL,
    `ma_nguoi_binh_luan` INTEGER NOT NULL,
    `ngay_binh_luan` VARCHAR(255) NOT NULL,
    `noi_dung` VARCHAR(255) NOT NULL,
    `sao_binh_luan` INTEGER NOT NULL,

    PRIMARY KEY (`id_binh_luan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nguoi_dung` (
    `id_nguoi_dung` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `pass_word` VARCHAR(255) NOT NULL,
    `phone` INTEGER NOT NULL,
    `birth_day` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_nguoi_dung`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dat_phong` (
    `id_dat_phong` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_phong` INTEGER NOT NULL,
    `ngay_den` DATETIME(0) NOT NULL,
    `ngay_di` DATETIME(0) NOT NULL,
    `so_luong_khach` INTEGER NOT NULL,
    `id_nguoi_dung` INTEGER NOT NULL,
    `id_phong` INTEGER NOT NULL,

    INDEX `id_nguoi_dung`(`id_nguoi_dung`),
    INDEX `id_phong`(`id_phong`),
    PRIMARY KEY (`id_dat_phong`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `phong` (
    `id_phong` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_phong` VARCHAR(255) NOT NULL,
    `khach` INTEGER NOT NULL,
    `phong_ngu` INTEGER NOT NULL,
    `giuong` INTEGER NOT NULL,
    `phong_tam` INTEGER NOT NULL,
    `mo_ta` VARCHAR(255) NOT NULL,
    `gia_tien` INTEGER NOT NULL,
    `bep` BOOLEAN NOT NULL DEFAULT false,
    `may_giat` BOOLEAN NOT NULL DEFAULT false,
    `ban_la` BOOLEAN NOT NULL DEFAULT false,
    `tivi` BOOLEAN NOT NULL DEFAULT false,
    `dieu_hoa` BOOLEAN NOT NULL DEFAULT false,
    `wifi` BOOLEAN NOT NULL DEFAULT false,
    `do_xe` BOOLEAN NOT NULL DEFAULT false,
    `ho_boi` BOOLEAN NOT NULL DEFAULT false,
    `ban_ui` BOOLEAN NOT NULL DEFAULT false,
    `hinh_anh` VARCHAR(255) NOT NULL,
    `id_vi_tri` INTEGER NOT NULL,

    INDEX `id_vi_tri`(`id_vi_tri`),
    PRIMARY KEY (`id_phong`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vi_tri` (
    `id_vi_tri` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_vi_tri` VARCHAR(255) NOT NULL,
    `tinh_thanh` VARCHAR(255) NOT NULL,
    `quoc_gia` VARCHAR(255) NOT NULL,
    `hinh_anh` VARCHAR(255) NOT NULL,
    `id_phong` INTEGER NOT NULL,

    INDEX `id_phong`(`id_phong`),
    PRIMARY KEY (`id_vi_tri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dat_phong` ADD CONSTRAINT `dat_phong_ibfk_1` FOREIGN KEY (`id_nguoi_dung`) REFERENCES `nguoi_dung`(`id_nguoi_dung`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `dat_phong` ADD CONSTRAINT `dat_phong_ibfk_2` FOREIGN KEY (`id_phong`) REFERENCES `phong`(`id_phong`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `phong` ADD CONSTRAINT `phong_ibfk_1` FOREIGN KEY (`id_vi_tri`) REFERENCES `vi_tri`(`id_vi_tri`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `vi_tri` ADD CONSTRAINT `vi_tri_ibfk_1` FOREIGN KEY (`id_phong`) REFERENCES `phong`(`id_phong`) ON DELETE NO ACTION ON UPDATE NO ACTION;
