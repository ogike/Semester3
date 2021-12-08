/*

 */
package model;

/**
 * The parent class that specific dragons inherit from.
 * @author ogike
 */
public abstract class Dragon {
    public Player target;
    protected Position pos;
    public boolean isAlive;
    protected Game game;

    public Dragon(Position pos, Game game) {
        this.pos = pos;
        this.game = game;
        isAlive = true;
    }
    
    public void setTarget(Player target){ this.target = target; }
    
    public void die(){
        isAlive = false;
    }
    
    public void step(){
        //we trust that calcNextDir gives us a valid, free position
        if(isAlive){
            Position nextPos = calcNextPos();
            if(nextPos != null){ //if we have a valid path
                pos = nextPos;
            }
        }
    }
    
    public boolean isPlayerNeighbour(){
        if(game.getPlayerTile().type == TileType.BUSH) return false;
        
        Position plPos = target.getPos();   
        if(pos.manhattanDistance(plPos) <= 1) return true;
        return false;
    }
    
    public Position getPos() {
        if(this.pos == null){
            System.out.println("what");
        }
        return new Position(pos.x, pos.y);
    }

    public boolean isAlive() {
        return isAlive;
    }
    
    protected boolean isTileGood(Position pos){
        return game.isTileFree(pos) && 
                game.getTile(pos.y, pos.x).type == TileType.EMPTY;
    }
    
    protected abstract Position calcNextPos();
    
    public abstract Dragon getDeepCopy();
}
