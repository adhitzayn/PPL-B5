package transport

import (
	"be/datastruct"
	"be/logging"
	"be/service"

	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	// "strconv"
	// "strings"

	// "github.com/gorilla/mux"
)

func TmbhStore(w http.ResponseWriter, r *http.Request) {

	var toko datastruct.Toko
	var member datastruct.Member

	err := json.NewDecoder(r.Body).Decode(&toko)
	if err != nil {
		log.Fatalf("Tidak bisa mendecode dari request body.  %v", err)
	}

	getApiMember := fmt.Sprintf("https://61b226bec8d4640017aaf233.mockapi.io/api/Member/%d", toko.Toko_id)
	response, _ := http.Get(getApiMember)
	if response.StatusCode != 200 {
		w.WriteHeader(response.StatusCode)
		w.Write([]byte("Not found"))
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}

	json.Unmarshal(responseData, &member)

	

	service.TambahToko(toko)

	logging.Log(fmt.Sprintf("menambahkan toko dengan id %d", toko.Toko_id))

	res := datastruct.Response1{
		Status:      "Berhasil",
		Message:     "Data teman telah ditambahkan",
		ID_toko:      toko.Toko_id,
		
	}

	w.WriteHeader(201)
	json.NewEncoder(w).Encode(res)
}


