/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq.geometry;

import java.util.ArrayList;

/**
 * Special abstract shape that has a sidelength.
 * @author ogike
 */
public abstract class Polygon extends Shape {
    protected double sideLength;

    protected Polygon(Point center, double sideLength) {
        super(center);
        this.sideLength = sideLength;
    }
    
    public double getSideLength(){
        return sideLength;
    }
    
}
