package main

import "fmt"

func chao() {
	fmt.Println("Hello")
}

func chao2(name string) {
	fmt.Println("Hello", name)
}

func many(i, h int) (int, int, int) {
	area := i * h
	return i, h, area
}

func main() {
	chao()
	chao2("Quang")

	i, h, area := many(100, 200)
	fmt.Println("i la:", i)
	fmt.Println("h la:", h)
	fmt.Println("hehe", area)
}
