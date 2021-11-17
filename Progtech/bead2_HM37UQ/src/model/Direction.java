package model;

/**
 * Enumerator for the directions a player can move
 * Contains the x and y coordinates of the direction too
 * @author ogike
 */
public enum Direction {
    DOWN(0, 1), LEFT(-1, 0), UP(0, -1), RIGHT(1, 0);
    
    Direction(int x, int y){
        this.x = x;
        this.y = y;
    }
    public final int x, y;
}
