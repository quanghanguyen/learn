/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany._01_2021_lthdt.lthdt;

import java.util.Date;

/**
 *
 * @author ADMIN
 */
public class Student extends Person implements TaxInterface {
     private String truonghoc;

    public Student(String truonghoc) {
        this.truonghoc = truonghoc;
    }

    public Student(String truonghoc, String hoten, int gioitinh, Date ngaysinh) {
        super(hoten, gioitinh, ngaysinh);
        this.truonghoc = truonghoc;
    }

    Student() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public String getTruonghoc() {
        return truonghoc;
    }

    public void setTruonghoc(String truonghoc) {
        this.truonghoc = truonghoc;
    }

    @Override
    public double calcTax(double income) {
        double tax;
        tax = 0.01 * income;
        return 0;
        
    }
    
    
     
}
