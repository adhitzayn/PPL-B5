package service

import (
	"be/config"
	"be/datastruct"
	"log"
)

func TambahToko(toko datastruct.Toko) int64 {

	db := config.CreateConnection()

	defer db.Close()

	sqlStatement := `INSERT INTO stores (toko_id, nama_toko, kodepos_toko, foto_toko, deskripsi_toko, nama_domain, nama_kota, nama_kecamatan) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING toko_id`

	err := db.QueryRow(sqlStatement, toko.Toko_id, toko.Nama_toko, toko.Kodepos_toko, toko.Foto_toko, toko.Deskripsi_toko, toko.Nama_domain, toko.Nama_kota, toko.Nama_kecamatan).Scan(&toko.Toko_id)

	if err != nil {
		log.Fatalf("Tidak Bisa mengeksekusi query. %v", err)
	}

	return toko.Toko_id
}

func TambahProduk(produk datastruct.Produk) int64 {

	db := config.CreateConnection()

	defer db.Close()

	sqlStatement := `INSERT INTO products (produk_id, nama_produk, deskripsi_produk, stok, harga_produk, foto_produk, rating_produk, jumlah_terjual, jumlah_dilihat, ukuran, warna) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING produk_id`

	err := db.QueryRow(sqlStatement, produk.Produk_id, produk.Nama_produk, produk.Deskripsi_produk, produk.Stok, produk.Harga_produk, produk.Foto_produk, produk.Rating_produk, produk.Jumlah_terjual,
		produk.Jumlah_dilihat, produk.Ukuran, produk.Warna).Scan(&produk.Produk_id)

	if err != nil {
		log.Fatalf("Tidak Bisa mengeksekusi query. %v", err)
	}

	return produk.Produk_id
}


