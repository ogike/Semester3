package bead_1_hm37uq.geometry;

import bead_1_hm37uq.EmptyCollectionException;
import bead_1_hm37uq.InvalidInputException;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Shape manager used to store all the shapes in.
 * Handles reading from an input file, and solving the given task.
 * The given task is finding the shape which has the smallest difference between its perimeter and area.
 * @author ogike
 */
public class ShapeCollection {
    private ArrayList<Shape> shapes;

    /**
     * Empty constructor
     */
    public ShapeCollection() {
        shapes = new ArrayList<>();
    }
    
    /**
     * Opens filename and reads the content into the shapes ArrayList
     * @param filename
     * @throws FileNotFoundException if filename isnt found.
     * @throws InvalidInputException if trying to read empty data or a non-existant shape type.
     */
    public void read(String filename) throws FileNotFoundException, InvalidInputException {
        Scanner sc = new Scanner(new BufferedReader(new FileReader(filename)));
        int numOfShapes = sc.nextInt();
        while(sc.hasNext()) {
            Shape shape;
            
            try{
            String kind = sc.next();
            double centerX = sc.nextDouble();
            double centerY = sc.nextDouble();
            double sideLen = sc.nextDouble();
            
                switch(kind) {
                case "C":
                    shape = new Circle(new Point(centerX, centerY),sideLen);
                    break;
                case "T":
                    shape = new Triangle(new Point(centerX, centerY),sideLen);
                    break;
                case "S":
                    shape = new Square(new Point(centerX, centerY),sideLen);
                    break;
                case "H":
                    shape = new Hexagon(new Point(centerX, centerY),sideLen);
                    break;
                default:
                    throw new InvalidInputException();
            }
            
            shapes.add(shape);
            
            } catch (InputMismatchException e){
                throw new InvalidInputException();
            }
        }
    }
    
    /**
     * Finds and returns the shape with the smallest difference between its perimeter and area.
     * @return 
     */
    public Shape getResultShape() throws EmptyCollectionException{
        if(shapes.isEmpty()) throw new EmptyCollectionException();

        Shape minShape = shapes.get(0);
        double minDiff = Math.abs(minShape.getArea() - minShape.getPerimeter());
        
        for (Shape curShape : shapes){
            double curDiff = Math.abs(curShape.getArea() - curShape.getPerimeter());
            if(curDiff < minDiff){
                minDiff  = curDiff;
                minShape = curShape;
            }
        }
        
        return minShape;
    }
    
}
