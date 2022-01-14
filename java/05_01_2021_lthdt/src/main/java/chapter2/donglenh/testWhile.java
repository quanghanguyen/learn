/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter2.donglenh;

import java.util.Scanner;

/**
 *
 * @author ADMIN
 */
public class testWhile {
    public static void main(String[] args) {
        //
    int n = 0;
    int i = 0;
//        
//        // ki thuat cong don
//        double s1 = 0;
//        while (i <= n) {
//            s1 = s1 + (double)1/i;
//            i += 1;
//        }
//        System.out.println("Tong la: " + s1);
    

        Scanner sc = new Scanner(System.in);
        boolean flag = false;
        while(!flag) {
        
        System.out.println("Nhap so le: ");
        String input = sc.nextLine();
        n = Integer.parseInt(input);
        if ((n>0) && (n%2 != 0)){
        flag = true;
        }else {
        flag = false;
        }
        
        }
        
        //int i = 1;
        
        int s2 = 0;
        while(i <= n) {
        
        s2 = s2 + i;
        i += 2;
        
        }
        System.out.println(s2);
    }
}
