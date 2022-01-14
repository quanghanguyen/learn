/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter3.donglenh;

import chapter4.sstring;
import chapter3.donglenh.coffeelogic.CoffeeShop;
import chapter3.donglenh.coffeelogic.Manager;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Locale;

/**
 *
 * @author ADMIN
 */
public class testCoffee {
     public static void main(sstring[] args) throws ParseException {
         SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
         CoffeeShop[] a = new CoffeeShop[]{new CoffeeShop("Ha Coffee", "108/131")};
    
     
         Manager[] manager = new Manager[] {new Manager(a, 1000, "Hello", 0, df.parse("12-12-1999"))          
         };
}
}
