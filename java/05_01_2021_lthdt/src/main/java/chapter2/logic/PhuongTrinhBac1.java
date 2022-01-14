/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter2.logic;

/**
 *
 * @author ADMIN
 */
public class PhuongTrinhBac1 implements GiaiPhuongTrinhInterface{
    private double a;
    private double b;
    private double nghiem_x;
    private String ketqua;
    
    public PhuongTrinhBac1() {
    }

    public PhuongTrinhBac1(double a, double b) {
        this.a = a;
        this.b = b;
    }

    @Override
    public void giaiPhuongTrinh() {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        if (a != 0) {
            nghiem_x = -b/a;
            ketqua = "Phuong trinh bac nhat co nghiem la: " + nghiem_x;
        } else{
            if (b != 0) {
                ketqua = "Vo nghiem";
            }else {
                ketqua = "Vo so nghiem";

            }
            
        }
            
    
    }

    @Override
    public String toString() {
       if (ketqua == null || ketqua.isEmpty()) {
           giaiPhuongTrinh();

       }
       return ketqua();
    
    }

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public double getNghiem_x() {
        return nghiem_x;
    }

    public void setNghiem_x(double nghiem_x) {
        this.nghiem_x = nghiem_x;
    }

    public String getKetqua() {
        return ketqua;
    }

    public void setKetqua(String ketqua) {
        this.ketqua = ketqua;
    }

    
    
    
    private String ketqua() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    double getketqua() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
