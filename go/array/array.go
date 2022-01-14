package main

import "fmt"

// array là mảng

func main() {
	//khai báo array
	var myArray [4]int
	fmt.Println(myArray)

	//gán giá trị cho array
	myArray[0] = 123
	fmt.Println(myArray)

	//khởi tạo array và gán luôn giá trị
	array := [3]int{2, 4, 6}
	fmt.Println(array)

	//in ra số lượng phần tử trong mảng
	fmt.Println(len(array))

	//khai báo mảng không cần set size
	array3 := [...]string{"Quant", "Ha", "Deptry"}
	fmt.Println(array3)

	fmt.Println("--------------------------------------------")
	//loop array
	for i := 0; i < len(array3); i++ {
		fmt.Println(array3[i])
	}

	// mảng 2 chiều [hàng][cột]  [row][col]

	matrix := [4][2]int{
		{2, 4},
		{2, 5},
		{7, 8},
		{2, 9},
	}
	fmt.Println(matrix)

	fmt.Println("---------------------------------------")
	for x := 0; x < 4; x++ {
		for j := 0; j < 2; j++ {
			fmt.Print(matrix[x][j], "  ")

		}
		fmt.Println()
	}
}
