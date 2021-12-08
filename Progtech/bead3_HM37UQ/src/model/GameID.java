/**
 * From ea
 */

package model;

import java.util.Objects;

public class GameID {
    public final String difficulty;
    public final int    level;
    //public final String dragonType;

    public GameID(String difficulty, int level/*, String dragonType*/) {
        this.difficulty = difficulty;
        this.level = level;
        //this.dragonType = dragonType;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 37 * hash + Objects.hashCode(this.difficulty);
        hash = 37 * hash + this.level;
        //hash = 37 * hash + Objects.hashCode(this.dragonType);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final GameID other = (GameID) obj;
        if (this.level != other.level) {
            return false;
        }
        if (!Objects.equals(this.difficulty, other.difficulty)) {
            return false;
        }
        //if (!Objects.equals(this.dragonType, other.dragonType)) {
        //    return false;
        //}
        return true;
    }

    
    
    
}
