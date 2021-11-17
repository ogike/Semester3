package bead_1_hm37uq.geometry;

/**
 * Point class, for storing the centres of the shapes.
 * X and Y coordinates and stored as doubles.
 * @author ogike
 */
public class Point {
    private double x, y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Point other = (Point) obj;
        double eps = 0.00001;
        
        if ( Math.abs(this.getX() - other.getX()) > eps ) {
            return false;
        }
        if ( Math.abs(this.getY() - other.getY()) > eps ) {
            return false;
        }
        return true;
    }
}
