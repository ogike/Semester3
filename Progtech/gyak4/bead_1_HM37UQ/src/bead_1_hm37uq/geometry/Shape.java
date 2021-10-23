/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq.geometry;

/**
 * The parent class that all shapes inherit from.
 * Has a center point that all other shapes ingerit too.
 * @author ogike
 */
public abstract class Shape {
    protected Point center;
    
    protected Shape (Point p){
        this.center = p;
    }

    /**
     * Returns the center point of the shape
     */
    public Point getCenter() {
        return center;
    }
    
    /**
     * Returns the area of the shape. Implemented in the children classes.
     */
    public abstract double getArea();
    
    /**
     * Returns the perimeter of the shape. Implemented in the children classes.
     */
    public abstract double getPerimeter();

    /**
     * A way to output this shape to the console if needed.
     */
    @Override
    public abstract String toString();
    
    /**
     * Used for testing, returns the shape type
     */
    public abstract String getType();
}
