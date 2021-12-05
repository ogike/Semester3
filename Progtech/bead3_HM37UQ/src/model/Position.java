package model;

public class Position {
    public int x, y;

    public Position(int x, int y) {
        this.x = x;
        this.y = y;
    }    
    
    public Position translate(Direction d){
        return new Position(x + d.x, y + d.y);
    }
    
    /**
     * The Manhattan distance between 2 points
     * (so 1 diagonal dist = 2 simple dist)
     * @param other
     * @return 
     */
    public int manhattanDistance(Position other){
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }
    
    public int eucledianDistance(int otherX, int otherY){
        //eucledian
        double distX = this.x - otherX;
        double distY = this.y - otherY;
        return (int)Math.floor(Math.sqrt(distX*distX + distY*distY));
        
        //manhattan
        //return Math.abs(this.x - otherX) + Math.abs(this.y - otherY);
        
        //chebyshev
        //return Math.max(Math.abs(this.x - otherX) , Math.abs(this.y - otherY));
    }
    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + this.x;
        hash = 89 * hash + this.y;
        return hash;
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
        final Position other = (Position) obj;
        if (this.x != other.x) {
            return false;
        }
        if (this.y != other.y) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Position{" + "x=" + x + ", y=" + y + '}';
    }
}
