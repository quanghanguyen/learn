/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter3.donglenh;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author ADMIN
 */
public class testArray {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
//        int a[];
//        
//        a = new int [4];
//        a[0] = 1;
//        a[1] = 2;
//        a[2] = 3;
//        a[3] = 4;
//        
//        
//        //Xuat dư liệu
//        System.out.println(Arrays.toString(a));



//         int b[] = new int[] {1, 3, 4, -5, 6, 1};
//         System.out.println(Arrays.toString(b));
//         System.out.println(b.length);
//         
         
         System.out.print("Nhap vao so luong phan tu cua mang: ");
         Scanner nhap = new Scanner(System.in);
         String input = nhap.nextLine();
         int n = Integer.parseInt(input);
         int[] c = new int[n];
         for (int i = 0; i <= n; i++){
         
             System.out.println("[c" + i + "] = ");
             input = nhap.nextLine();
             c[i] = Integer.parseInt(input);
         }
         
         System.out.println(Arrays.toString(c));
         
         
         
    }
    
}
