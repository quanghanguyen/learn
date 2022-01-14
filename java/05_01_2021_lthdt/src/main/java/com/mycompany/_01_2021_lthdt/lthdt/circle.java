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
public class circle extends Shape {
    private int radius;
    private int x, y;

    public circle() {
    }

    public circle(int radius, int x, int y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    
    @Override
    public double calsPara() {
        double result = 2*Math.PI*this.radius;
        return result;
    }
    
    @Override
    public double calsArea() {
        double result = Math.PI*this.radius*this.radius;
        return result;
    }
    
    
    // getter and setter

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public double calcPeri() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
    
    
    
}
