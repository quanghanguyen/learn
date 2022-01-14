package loop

import "fmt"

func main() {
	i := 10

	// if condition {code here}
	if i == 10 {
		fmt.Println("Ha dep trai")
	}

	if i > 10 {
		fmt.Println("Anh Ha")
	} else {
		fmt.Println("Em Ha")
	}

	if a := 100; a > 11 {
		fmt.Println("ZO")
	}

	//switch - case
	x := 10
	switch x {
	case 1:
		fmt.Println("Hehe")
	case 10, 290, 1000:
		fmt.Println("Ahihi")
	default:
		fmt.Println("unknown")
	}

	y := 50
	switch {
	case y > 30:
		fmt.Println("Anh")
	}
	fmt.Println("-----------------------------------------------------------------------")
	// for loop
	for f := 10; f < 10; f++ {
		fmt.Println(f)
	}
}
