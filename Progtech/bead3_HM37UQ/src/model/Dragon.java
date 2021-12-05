/*

 */
package model;

/**
 * The parent class that specific dragons inherit from.
 * @author ogike
 */
public abstract class Dragon {
    public Player target;
    public Position pos;
    protected Game game;

    public Dragon(Position pos, Game game) {
        this.pos = pos;
        this.game = game;
    }
    
    public void setTarget(Player target){ this.target = target; }
    
    public void step(){
        //we trust that calcNextDir gives us a valid, free position
        pos = calcNextPos();;
    }
    
    public boolean isPlayerNeighbour(){
        Position plPos = target.getPos();   
        if(pos.manhattanDistance(plPos) <= 1) return true;
        return false;
    }
    
    public Position getPos() {
        return new Position(pos.x, pos.y);
    }
    
    protected boolean isTileGood(Position pos){
        return game.isTileFree(pos) && game.getTile(pos.y, pos.x) == TileType.EMPTY;
    }
    
    protected abstract Position calcNextPos();
    
    /**
     * TODO
     * @return 
     */
    public abstract Dragon getDeepCopy();
}
