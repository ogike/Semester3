/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq.geometry;

import java.util.ArrayList;

/**
 *
 * @author ogike
 */
public abstract class Polygon extends Shape {
    protected double sideLength;
    protected ArrayList<Point> vertices;

    public Polygon(double sideLength) {
        this.sideLength = sideLength;
        this.setVertices();
    }
    
    protected abstract void setVertices();

    @Override
    public double distToPoint(Point p) {
        //B ÉS C RÉSZ
        if(isInside(p)){
            return 0;
        }
        
        //D rész: checking distance to the sides
        
        
        return 0;
    }
    
    private boolean isInside(Point p){
        double polarity = 0; //if all is -1 or all is 1: point is inside the polygon
        boolean changedPolarity = false;
        
        for(int i = 0; i < vertices.size() && !changedPolarity; i++){
            int nextIndex =  (i < vertices.size()-1) ? i+1 : 0;
            Vector toNext = Vector.getVectorFromPoints(vertices.get(i), vertices.get(nextIndex));
            Vector toPoint = Vector.getVectorFromPoints(vertices.get(i), p);
            
            double newPolarity = Math.signum(Vector.getScalarProductThirdComponent(toNext, toPoint));
            
            if(polarity == 0){
                polarity = newPolarity;
            }
            else if(newPolarity != 0 && polarity != newPolarity){
                changedPolarity = true;
            }
        }
        
        return !changedPolarity;
    }
    
    
}
