/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq.geometry;

/**
 * Circle shape, with a given radius.
 * @author ogike
 */
public class Circle extends Shape {
    protected double radius;

    public Circle (Point center, double radius){
        super(center);
        this.radius = radius;
    }
    
    public double getRadius(){
        return radius;
    }
    
    @Override
    public double getArea() {
        return 2 * Math.PI * radius;
    }

    @Override
    public double getPerimeter() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public String toString() {
        return "Circle, with center at" + center.toString() + " and radius of " + radius;
    }

    @Override
    public String getType() {
        return "Circle";
    }
    
    
    
    
}
