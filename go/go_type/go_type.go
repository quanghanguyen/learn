package main

import "fmt"

func main() {
	//Bool --> chỉ có giá trị true hoặc false
	var myBool bool = true // hoặc false
	fmt.Println(myBool)

	//String --> kí tự
	var myString string = "Quant"
	fmt.Println(myString)

	var myInt int = 123
	fmt.Print(myInt)
	// các giá trị có thể khai báo là Int8, 16, 32, 64
	// Mỗi kiểu có range và Bits khác nhau

	fmt.Println("-------------------------")

	//Float --> kiểu thực
	var myFloat float64 = 10.33 //phải chọn float32 hoặc float64
	fmt.Println(myFloat)

	//Complex --> kiểu số ảo z = a + bi
	var myComplex complex64 = 12 + 13i
	fmt.Println(myComplex)

	var myComplex2 complex64 = 34 + 32i
	fmt.Println(myComplex + myComplex2)

	//---------------------------------------------------------------------------------------------------

	//Rune
	//kiểu này không quan trọng bộ nhớ, nó tự cấp phát luôn
	var myString2 string = "NgUyễn"
	fmt.Println(myString2)

	//cộng trừ nhân chia phải cùng kiểu dữ liệu
	// golang không tự động ép kiểu

	var a int = 1
	var b float64 = 3.5

	fmt.Println(float64(a) + b)

	//constants
	// khai báo hằng số

	const PI = 3.142244
	fmt.Println(PI)
}
