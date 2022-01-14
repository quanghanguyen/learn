/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter2.donglenh;

import chapter2.donglenh.employeelogic.Student;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author ADMIN
 */
public class testStudent {
    public static void main(String[] args) throws ParseException {
    SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
    String input = "07-02-2002";
    Date ngaysinh = df.parse(input);
            
    Student obj = new Student("DHH", "Gioi", "Quang Ha", 1, ngaysinh);
    
    switch(obj.getHocluc()){
        case "Xuat sac" :
            obj.setHocbong(1000);
            break;
        case "Gioi":
            obj.setHocbong(1000);
            break;
        default:
            obj.setHocbong(0);
            break;
    
            
    
    
    
    }
            
    System.out.println(obj);
    }
}
