/*

 */
package model;

/**
 *
 * @author ogike
 */
public class DragonSmart extends Dragon {

    public DragonSmart(Position pos, Game game) {
        super(pos, game);
    }
    
    @Override
    protected Position calcNextPos() {
       return game.getNextStepFromPath(pos, target.getPos());
    }

    @Override
    public Dragon getDeepCopy() {
        DragonSmart copy = new DragonSmart(pos, game);
        copy.target = this.target;
        copy.isDead = false;
        return copy;
    }
    
}
