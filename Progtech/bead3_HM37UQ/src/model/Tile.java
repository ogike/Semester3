/*

 */
package model;

/**
 *
 * @author ogike
 */
public class Tile {
    public TileType type;
    
    public int row, col;
    public int index; //the index of this in the graph
    private static int curIndex = 0;

    public Tile(TileType type, int row, int col) {
        this.type = type;
        this.row = row;
        this.col = col;
        index = curIndex++;
    }
    
    public static void resetIndexCounter() { curIndex = 0; }
    
    public Position getPos(){
        return new Position(col, row);
    }
}
