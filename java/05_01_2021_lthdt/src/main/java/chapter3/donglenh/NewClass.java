/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter3.donglenh;

import chapter4.sstring;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

/**
 *
 * @author ADMIN
 */
public class NewClass {
    public static void main(sstring[] agrs) {
    
    Scanner sc = new Scanner(System.in);
    System.out.println("Nhap so luong phan tu mang: ");
    sstring input = sc.nextLine();
    //System.out.println(input);
    int n = Integer.parseInt(input);
    int c[] = new int[n];
    
    int temp;
    Random rnd = new Random();
    for (int i = 0; i < n; i++) {
        c[i] = rnd.nextInt(100);
    }
    System.out.println(Arrays.toString(c));
    
        // Short
    Arrays.sort(c);
    System.out.println(Arrays.toString(c));
    
    // tìm kiếm vét cạn
    System.out.print("Nhap gia tri can tim kiem x = ");
    input = sc.nextLine();
    int x = Integer.parseInt(input);
    
    
    // Tìm kiếm nhị phân
    int index = Arrays.binarySearch(c, x);
    
    if(index < 0){
        System.out.print("Khong co");
    }else {
        System.out.print("Thu: " + index);
    }
    
    
    
    
    
//    
//    
//    boolean flag = false;
//    
//    for(int i = 0; i < c.length; i++) {
//        if(c[i] == x){
//        
//            System.out.println("Gia tri can tim o vi tri: " + i);
//            flag = true;
//            break;
//            
//            
//            
//        }
//        }
//    if (!flag){
//            System.out.println("Gia tri khong co");
    }
    
    
    
    
    
    
    
//    for(int i = 0; i < n-1; i++){
//        for(int j = i+1; j < n; j++ ){
//            if(c[i] > c[j]) {
//                temp = c[i];
//                c[i] = c[j];
//                c[j] = temp;
//            }
//        
//        }
//    
//    }
//    
//    System.out.println(Arrays.toString(c));
    
    
//    Arrays.sort(c);
//    System.out.println(Arrays.toString(c));
    
    }
}
