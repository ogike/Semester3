/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bead_1_hm37uq;

import bead_1_hm37uq.geometry.*;
import java.io.FileNotFoundException;

/**
 *
 * @author ogike
 */
public class Bead_1_HM37UQ {

    /**
     * Set isTesting to true if you want to run the tests.
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        boolean isTesting = true;
        
        if(!isTesting)
            runDefault();
        else
            runTests();
    }
    
    /**
     * The default program.
     */
    public static void runDefault(){
        ShapeCollection shapeCollection = new ShapeCollection();
        
        try{
            shapeCollection.read("data.txt"); 
            Shape result = shapeCollection.getResultShape();
            System.out.println("The shape with the least difference between its area and perimeter is: ");
            System.out.println("\t" + result);
        } catch (FileNotFoundException ex) {
            System.out.println("File not found!");
            System.exit(-1);
        } catch (InvalidInputException ex) {
            System.out.println("Invalid input!");
            System.exit(-1);
        } catch (EmptyCollectionException ex) {
            System.out.println("No shapes found!");
            System.exit(-1);      
        } 
    }
    
    public static void runTests(){
        int passed = 0;
        passed += test1();
        passed += test2();
        passed += test3();
        passed += test4();
        passed += test5();
        passed += test6();
        passed += test7();
        passed += test8();
        
        System.out.println("\n" + passed + "/8 tests passed!");
    }
    
    
    /**
     * Test for various shapes
     */
    public static int test1(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test1.txt"); 
            Shape result = shapeCollection.getResultShape();
            
            if(result.getType() == "Square" && 
               result.getCenter().equals(new Point(0, 0)) &&
               ((Square)result).getSideLength() == 3){
                System.out.println("Test 1 passed!");
                return 1;
            }
            else{
                System.out.println("Test 1 failed!");
                return 0;
            }
        }
        catch (Exception e){
            System.out.println("Test 1 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for empty file
     */
    public static int test2(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test2.txt"); 
            Shape result = shapeCollection.getResultShape();
            System.out.println("Test 2 failed!");
            return 0;
        }
        catch (EmptyCollectionException e){
            System.out.println("Test 2 passed!");
            return 1;
        }
        catch (Exception e){
            System.out.println("Test 2 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for non existant file
     */
    public static int test3(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("tet1.txt"); 
            Shape result = shapeCollection.getResultShape();
            System.out.println("Test 3 failed!");
            return 0;
        }
        catch (FileNotFoundException e){
            System.out.println("Test 3 passed!");
            return 1;
        }
        catch (Exception e){
            System.out.println("Test 3 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for invalid number inputs
     */
    public static int test4(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test4.txt"); 
            Shape result = shapeCollection.getResultShape();
            System.out.println("Test 4 failed!");
            return 0;
        }
        catch (InvalidInputException e){
            System.out.println("Test 4 passed!");
            return 1;
        }
        catch (Exception e){
            System.out.println("Test 4 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for invalid shape type inputs
     */
    public static int test5(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test5.txt"); 
            Shape result = shapeCollection.getResultShape();
            System.out.println("Test 5 failed!");
            return 0;
        }
        catch (InvalidInputException e){
            System.out.println("Test 5 passed!");
            return 1;
        }
        catch (Exception e){
            System.out.println("Test 5 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for various shapes #2
     */
    public static int test6(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test6.txt"); 
            Shape result = shapeCollection.getResultShape();
            
            if(result.getType() == "Triangle" && 
               result.getCenter().equals(new Point(-1, -4)) &&
               ((Triangle)result).getSideLength() == 2){
                System.out.println("Test 6 passed!");
                return 1;
            }
            else{
                System.out.println("Test 6 failed!");
                return 0;
            }
        }
        catch (Exception e){
            System.out.println("Test 6 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for various shapes with higher side lengths #3
     */
    public static int test7(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test7.txt"); 
            Shape result = shapeCollection.getResultShape();
            
            if(result.getType() == "Hexagon" && 
               result.getCenter().equals(new Point(1, 2)) &&
               ((Hexagon)result).getSideLength() == 0.5){
                System.out.println("Test 7 passed!");
                return 1;
            }
            else{
                System.out.println("Test 7 failed!");
                return 0;
            }
        }
        catch (Exception e){
            System.out.println("Test 7 failed with an exception!");
            return 0;
        }
    }
    
    /**
     * Test for only one shape
     */
    public static int test8(){
        ShapeCollection shapeCollection = new ShapeCollection();
        try{
            shapeCollection.read("test8.txt"); 
            Shape result = shapeCollection.getResultShape();
            
            if(result.getType() == "Hexagon" && 
               result.getCenter().equals(new Point(1, 2)) &&
               ((Hexagon)result).getSideLength() == 0.5){
                System.out.println("Test 8 passed!");
                return 1;
            }
            else{
                System.out.println("Test 8 failed!");
                return 0;
            }
        }
        catch (Exception e){
            System.out.println("Test 8 failed with an exception!");
            return 0;
        }
    }
}
