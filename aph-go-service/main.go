package main

import (
	"aph-go-service-master/transport"
	"database/sql"
	_ "expvar"
	"fmt"
	"net/http"
	"os"

	"github.com/go-kit/kit/log"

	_ "github.com/lib/pq"

)

var db *sql.DB

const (
	dbhost = "localhost"
	dbport = "5432"
	dbuser = "postgres"
	dbpass = "rafiadiningrat53"
	dbname = "postgres"
)

func main() {

	initDb()

	logger := log.NewLogfmtLogger(os.Stdout)

	transport.RegisterHttpsServicesAndStartListener()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	logger.Log("listening-on", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		logger.Log("listen.error", err)
	}
}

func initDb() {
	config := dbConfig()
	var err error
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		config[dbhost], config[dbport],
		config[dbuser], config[dbpass], config[dbname])

	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	defer db.Close()
	fmt.Println("Successfully connected!")

	insertStmt := `insert into "Stores" ("nama_toko","toko_id") values('Pedia',25)`
	_, e := db.Exec(insertStmt)
	CheckError(e)

	insertDynStmt := `insert into "Stores" ("nama_toko","toko_id") values($1, $2)`
	_, e = db.Exec(insertDynStmt, "Sure", 30)
	CheckError(e)


}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func dbConfig() map[string]string {
	conf := make(map[string]string)

	conf[dbhost] = "localhost"
	conf[dbport] = "5432"
	conf[dbuser] = "postgres"
	conf[dbpass] = "rafiadiningrat53"
	conf[dbname] = "postgres"
	return conf
}