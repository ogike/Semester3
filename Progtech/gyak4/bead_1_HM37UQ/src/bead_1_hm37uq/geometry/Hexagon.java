package bead_1_hm37uq.geometry;

/**
 * A regular hexagon.
 * @author ogike
 */
public class Hexagon extends Polygon {

    /**
     * The only constructor of this class.
     * @param center the center coordinates of this shape.
     * @param sideLength the length that all the sides share.
     */
    public Hexagon(Point center, double sideLength) {
        super(center, sideLength);
    }
    
    @Override
    public double getArea() {
        return (3 * Math.sqrt(3) * sideLength * sideLength) / 2;
    }

    @Override
    public double getPerimeter() {
        return 6 * sideLength;
    }
    
    @Override
    public String toString() {
        return "Hexagon, with center at" + center.toString() + " and sidelength of " + sideLength;
    }
    
    @Override
    public String getType() {
        return "Hexagon";
    }
    
}
