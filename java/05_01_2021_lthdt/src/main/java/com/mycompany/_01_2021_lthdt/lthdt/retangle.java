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
public class retangle extends Shape {
    private int upper_x;
    private int upper_y;
    private int lower_x;
    private int lower_y;    

    public retangle() {
    }

    public retangle(int upper_x, int upper_y, int lower_x, int lower_y) {
        this.upper_x = upper_x;
        this.upper_y = upper_y;
        this.lower_x = lower_x;
        this.lower_y = lower_y;
    }
    
    @Override
    public double calcPeri() {
        return (2*Math.abs(upper_x - lower_y) + Math.abs(upper_y - lower_y));
    }    
    
    @Override
    public double calsArea() {
        return Math.abs((upper_x - lower_x)*(upper_y - lower_y));
    }

    @Override
    public String toString() {
        String output = "Chu vi CN la: " + calcPeri() +
                "Dien tich: " + calsArea();

                return output;
//To change body of generated methods, choose Tools | Templates.
    }

    
    
    
    public int getUpper_x() {
        return upper_x;
    }

    public void setUpper_x(int upper_x) {
        this.upper_x = upper_x;
    }

    public int getUpper_y() {
        return upper_y;
    }

    public void setUpper_y(int upper_y) {
        this.upper_y = upper_y;
    }

    public int getLower_x() {
        return lower_x;
    }

    public void setLower_x(int lower_x) {
        this.lower_x = lower_x;
    }

    public int getLower_y() {
        return lower_y;
    }

    public void setLower_y(int lower_y) {
        this.lower_y = lower_y;
    }

    @Override
    public double calsPara() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
}












