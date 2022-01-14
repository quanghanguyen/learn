/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter4.donglenh;

import chapter4.logic.FibonaciNumber;

/**
 *
 * @author ADMIN
 */
public class testFibonaciNumer {
    public static void main(String[] args) {
        FibonaciNumber fn = new FibonaciNumber();
        System.out.println("So Fib tai vi tri n = 15 la: " + fn.calcFibo(15));
        for(int i = 1; i <= 20; i++){
            System.out.println(fn.calcFibo(i) + ",");
        
        }
    
    }
}
