/*

 */
package model;

/**
 *
 * @author ogike
 */
public class Bullet {
    private Position pos;
    private Direction dir;
    private GameLevel gl;

    public Bullet(Position pos, Direction dir, GameLevel gl) {
        this.pos = pos;
        this.dir = dir;
        this.gl = gl;
        
        //shouldnt be possible since we spawn the bullet on the player
        /*if(pos.equals( gl.dragon.getPos() )){
            gl.dragon.die();
        }*/
    }
    
    /**
     * 
     * @return if the bullet hit or no
     */
    public boolean step(){
        
        pos = pos.translate(dir);
        return checkCollision();
    }
    
    public boolean checkCollision(){
        if(gl.dragon.isAlive() && pos.equals( gl.dragon.getPos() )){
            gl.dragon.die();
            return true;
        }
        if (gl.isFree(pos)) {
            return false;
        } 
        return true;
    }

    public Position getPos() {
        return pos;
    }
    
    
}
