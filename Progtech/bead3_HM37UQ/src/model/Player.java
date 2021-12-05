/*

 */
package model;

/**
 *
 * @author ogike
 */
public class Player {
    private Position pos;
    // public int bulletsLeft; //for later

    public Player() {
        this( new Position(0,0) );
    }
    
    public Player(Position pos) {
        this.pos = pos;
    }
    
    public Player(Player pl){
        this.pos = new Position(pl.pos.x, pl.pos.y);
    }

    public Position getPos() {
        return new Position(pos.x, pos.y);
    }

    public void setPos(Position pos) {
        this.pos = pos;
    }
}
