package main

import "fmt"

func main() {
	var number int
	number = 10
	fmt.Println(number)

	// Type inferance - kiểu tự hiểu biến kiểu gì luôn
	// như python mà chạy trong main của c++
	var number1 = "Nguyen"
	fmt.Println(number1)

	// khai báo giống như python thôi
	var (
		ten  = "Quang Ha"
		tuoi = 25
		ho   = "Minh"
	)
	fmt.Println(ten)
	fmt.Println(tuoi)
	fmt.Println(ho)
}
