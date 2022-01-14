/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter4;

/**
 *
 * @author ADMIN
 */
public class sstring {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        String content = "Long lanh anh nuoc in troi\nThanh xay khoi biec non phoi bong vang";
        System.out.println(content);
        System.out.println("Vi tri cua kí tu a trong chuoi: " + content.indexOf("a"));
        System.out.println("Vi tri cua tu nuoc trong chuoi: " + content.indexOf("nuoc"));
        
        // kiem tra ki tu dau va cuoi chuỗi
        System.out.println("Tu ket thuc chuoi: " + content.startsWith("Long"));
        
        
    }
    
}
