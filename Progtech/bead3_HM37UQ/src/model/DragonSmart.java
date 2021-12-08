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
        if(game.getPlayerTile().isFreeForDragon()){
            return game.getNextStepFromPath(pos, target.getPos());
        } else{
            //TODO: random dir?
            return pos;
        }
    }

    @Override
    public Dragon getDeepCopy() {
        DragonSmart copy = new DragonSmart(pos, game);
        copy.target = this.target;
        copy.isAlive = true;
        return copy;
    }
    
}
