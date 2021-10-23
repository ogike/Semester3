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
public class Circle extends Shape {
    protected double radius;

    @Override
    public double distToPoint(Point p) {
        double dist = this.center.getDistToPoint(p);
        return (dist < radius) ? 0 : dist - radius;
    }
    
    
    
}
