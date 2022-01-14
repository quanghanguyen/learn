package main

import "fmt"

func main() {

	for f := 0; f < 3; f++ {
		fmt.Println("Quang")
	}

	for z := 0; z < 6; z++ {
		if z == 4 {
			break
		}
		fmt.Println(z)
	}
	fmt.Println("Hết")
	fmt.Println("-------------------------------------------")

	//while loop
	j := 0
	for j < 5 {
		fmt.Println("Hello")
		j++
	}
}
