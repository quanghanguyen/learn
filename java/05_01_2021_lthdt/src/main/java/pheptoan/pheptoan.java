/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pheptoan;

/**
 *
 * @author ADMIN
 */
public class pheptoan {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        int a = 15, b = 21, c;
        c = a + b;
        System.out.println("Tong cua a va b: " + c);
        
        double x = 1.33, y = 2.45, z;
        z = x + y;
        System.out.println("Tong hai so thuc: " + z);
        
        
        // cac ki hieu logic trong java
        /* 
        AND: &&
        OR: ||
        NOT: !
        XOR: ^
        */
        
        // Cac phep toan tren chuoi
        
        String s1 = "quang";
        String s2 = "HA";
                
        System.out.println(s1.toUpperCase());
        System.out.println(s2.toLowerCase());
        System.out.println(s1.contains(s2));
            
        
       
    }
}
