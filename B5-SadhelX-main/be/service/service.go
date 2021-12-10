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


