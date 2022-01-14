/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter2.donglenh;

import chapter2.logic.PhuongTrinhBac2;

/**
 *
 * @author ADMIN
 */
public class giai2 {
    public static void main(String[] agrs) {
        System.out.println("Giai PTB2");
        PhuongTrinhBac2 obj = new PhuongTrinhBac2(3.2, 4.5, 6.7);
        obj.giaiPhuongTrinh();
        System.out.println(obj.getketqua());
    }
    
}
