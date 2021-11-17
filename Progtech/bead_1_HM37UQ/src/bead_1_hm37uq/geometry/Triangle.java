package bead_1_hm37uq.geometry;

/**
 * A regular triangle.
 * @author ogike
 */
public class Triangle extends Polygon {

    /**
     * The only constructor of this class.
     * @param center the center coordinates of this shape
     * @param sideLength the length that all the sides share.
     */
    public Triangle(Point center, double sideLength) {
        super(center, sideLength);
    }

    @Override
    public double getArea() {
        return ( Math.sqrt(3) / 4 ) * sideLength * sideLength;
    }

    @Override
    public double getPerimeter() {
        return 3 * sideLength;
    }
    
    @Override
    public String toString() {
        return "Trinagle, with center at" + center.toString() + " and sidelength of " + sideLength;
    }
    
    @Override
    public String getType() {
        return "Triangle";
    }
    
}
