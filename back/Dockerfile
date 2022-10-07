#syntax=docker/dockerfile:1
FROM golang:1.18-alpine3.16 as builder
WORKDIR /docker
COPY go.* ./
COPY . .
RUN go mod download
RUN go build -o test-app main.go

FROM alpine:3.16
WORKDIR /docker
COPY --from=builder /docker/test-app .
CMD ["./test-app"]