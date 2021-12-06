/*

 */
package model;

/**
 *
 * @author ogike
 */
public class Bullet {
    public Position pos;
    public Direction dir;
    private GameLevel gl;

    public Bullet(Position pos, Direction dir, GameLevel gl) {
        this.pos = pos;
        this.dir = dir;
        this.gl = gl;
    }
    
    /**
     * 
     * @return if the bullet hit or no
     */
    public boolean step(){
        Position nextPos = pos.translate(dir);
        if(nextPos == gl.dragon.getPos()){
            dragon.die();
        }
        if (gl.isFree(nextPos)) {
            pos = nextPos;
            return true;
        } 
        return false;
    }
}
