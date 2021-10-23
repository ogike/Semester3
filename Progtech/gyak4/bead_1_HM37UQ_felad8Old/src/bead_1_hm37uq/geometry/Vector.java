/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq.geometry;

/**
 *
 * @author ogike
 */
public class Vector {
    private double x, y;

    public Vector(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Vector other = (Vector) obj;
        
        //TODO: check if precise
        if (Double.doubleToLongBits(this.x) != Double.doubleToLongBits(other.x)) {
            return false;
        }
        if (Double.doubleToLongBits(this.y) != Double.doubleToLongBits(other.y)) {
            return false;
        }
        return true;
    }
    
    //TODO: jobb helyre tenni ezeket
    public static Vector getVectorFromPoints(Point a, Point b){
        return new Vector(b.getX() - a.getX(), b.getY() - b.getY());
    }
    
    //we only need the third copmonent for our calculations
    public static double getScalarProductThirdComponent(Vector a, Vector b){
        return a.getX() * b.getY() - a.getY() * b.getX();
    }
}
