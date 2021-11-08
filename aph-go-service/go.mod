module main.go

go 1.17

require (
	aph-go-service-master/transport v0.0.0-00010101000000-000000000000
	github.com/go-kit/kit v0.12.0
	github.com/lib/pq v1.10.3
)

require (
	aph-go-service-master/datastruct v0.0.0-00010101000000-000000000000 // indirect
	aph-go-service-master/logging v0.0.0-00010101000000-000000000000 // indirect
	aph-go-service-master/service v0.0.0-00010101000000-000000000000 // indirect
	github.com/go-kit/log v0.2.0 // indirect
	github.com/go-logfmt/logfmt v0.5.1 // indirect
)

replace aph-go-service-master/transport => ./transport

replace aph-go-service-master/datastruct => ./datastruct

replace aph-go-service-master/logging => ./logging

replace aph-go-service-master/service => ./service
