package router

import (
	"be/transport"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/register", transport.TmbhStore).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/create", transport.TmbhProduk).Methods("POST", "OPTIONS")

	return router
}
