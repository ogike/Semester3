package bead_1_hm37uq.geometry;

/**
 * A square shape.
 * @author ogike
 */
public class Square extends Polygon {

    /**
     * The only constructor of this class.
     * @param center the center coordinates of this shape.
     * @param sideLength the length that all the sides share.
     */
    public Square(Point center, double sideLength) {
        super(center, sideLength);
    }
    
    @Override
    public double getArea() {
        return sideLength * sideLength;
    }

    @Override
    public double getPerimeter() {
        return 4 * sideLength;
    }
    
    @Override
    public String toString() {
        return "Square, with center at" + center.toString() + " and sidelength of " + sideLength;
    }
    
    @Override
    public String getType() {
        return "Square";
    }
    
}
