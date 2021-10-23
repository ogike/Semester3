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
public abstract class Shape {
    protected Point center;
    
    public abstract double distToPoint(Point p);
    
}
