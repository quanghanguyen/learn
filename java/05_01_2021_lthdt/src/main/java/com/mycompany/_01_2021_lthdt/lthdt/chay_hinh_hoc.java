/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany._01_2021_lthdt.lthdt;

/**
 *
 * @author ADMIN
 */
public class chay_hinh_hoc {
    public static void main(String[] agrs) {
        Shape htron = new circle(5, 1, 2);
        System.out.println("Chu vi cua hinh tron la: " + htron.calsPara());
        System.out.println("Dien tich cua hinh tron la: " + htron.calsArea());  
        
        
        Shape hchunhat = new retangle(3, 15, 5, 5);
        System.out.println("Chu vi cua hinh chu nhat la: " + hchunhat.calcPeri());
        System.out.println("Dien tich cua hinh chu nhat la: " + hchunhat.calsArea());
        System.out.println(hchunhat);
    }
    
    
    
    
}
