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
public class date_type {
    public static void main(String[] args) throws ParseException{
        // Chuyển kiểu dữ liệu thành String
        SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
        Date currentDate = new Date();
        String output = df.format(currentDate);
        System.out.println(output);
        
        // Chuyển đổi Date thành String
        String input = "14-09-2003";
        Date ngay = df.parse(input);
        System.out.println(ngay);
        System.out.println(df.format(ngay));
    
    }




}
