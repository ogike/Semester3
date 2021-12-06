/*

 */
package model;

import java.util.List;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;

/**
 *
 * @author ogike
 */
public class DragonStupid extends Dragon {

    public Direction lastDir;
    
    public DragonStupid(Position pos, Game game) {
        super(pos, game);
        lastDir = Direction.UP; //choose the first direction
    }

    @Override
    protected Position calcNextPos() {
        Position nextPos = pos.translate(lastDir);
        if(isTileGood(nextPos)) return nextPos;
        
        return chooseNewPos();
    }
    
    /**
     * Chooses a new direction randomly
     * @return 
     */
    private Position chooseNewPos(){
        Position nextPos = pos;
        boolean goodDir = false;
        
        LinkedList<Direction> newDirs = new LinkedList(Arrays.asList(
                                                    Direction.DOWN, Direction.LEFT, 
                                                    Direction.RIGHT, Direction.UP)  );
        newDirs.remove(lastDir);
        Collections.shuffle(newDirs);
        
        while(!goodDir && !newDirs.isEmpty()){
            lastDir = newDirs.removeFirst();
            nextPos = pos.translate( lastDir );
            goodDir = isTileGood(nextPos);
        }
        
        if(!goodDir){
            //TODO: handle dragon not being able to move
            System.out.println("Error, dragon cant move.");
            nextPos = pos;
        }
        
        return nextPos;
    }

    @Override
    public Dragon getDeepCopy() {
        DragonStupid copy = new DragonStupid(pos, game);
        copy.target = this.target;
        copy.isAlive = true;
        return copy;
    }
    
    
}
