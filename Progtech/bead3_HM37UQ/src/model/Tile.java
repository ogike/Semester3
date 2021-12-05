/*

 */
package model;

/**
 *
 * @author ogike
 */
public class Tile {
    public TileType type;
    
    public int x, y;
    public int index; //the index of this in the graph
    private static int curIndex = 0;

    public Tile(TileType type, int x, int y) {
        this.type = type;
        this.x = x;
        this.y = y;
        index = curIndex++;
    }
    
    public static void resetIndexCounter() { curIndex = 0; }
}
