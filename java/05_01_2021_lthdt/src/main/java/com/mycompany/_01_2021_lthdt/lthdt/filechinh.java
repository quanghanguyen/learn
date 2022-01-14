/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany._01_2021_lthdt.lthdt;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 *
 * @author ADMIN
 */
public class filechinh {
    public static void main(String[] agrs) throws ParseException {
        SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
        String input = "11-03-2011";
        Date ngaysinh = df.parse(input);
        Person person = new Person("Quang Ha", 1, ngaysinh);
        
        System.out.println("Ho ten: " + person.getHoten());
        
        Student sinhvien = new Student();
        sinhvien.setHoten("NEO");
        sinhvien.setGioitinh(0);
        sinhvien.setNgaysinh(df.parse("12-12-2002"));
        sinhvien.setTruonghoc("Hue");
    
                
        System.out.println(sinhvien.getHoten());
        
        
        
        
        
        
        
    }
}
