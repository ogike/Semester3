package model;

import java.util.ArrayList;

public class GameLevel {
    public final GameID        gameID;
    public final int           rows, cols;
    public final Tile[][] level;
    public Position            player = new Position(0, 0);
    private int                numBoxes, numBoxesInPlace, numSteps;
    
    public GameLevel(ArrayList<String> gameLevelRows, GameID gameID){
        this.gameID = gameID;
        int c = 0;
        for (String s : gameLevelRows) if (s.length() > c) c = s.length();
        rows = gameLevelRows.size();
        cols = c;
        level = new Tile[rows][cols];
        numBoxes = 0;
        numBoxesInPlace = 0;
        numSteps = 0;
        
        for (int i = 0; i < rows; i++){
            String s = gameLevelRows.get(i);
            for (int j = 0; j < s.length(); j++){
                switch (s.charAt(j)){
                    case 'P': player = new Position(j, i);
                              level[i][j] = Tile.EMPTY; break;
                    case '#': level[i][j] = Tile.WALL; break;
                    case 'E': level[i][j] = Tile.EXIT; break;
                    default:  level[i][j] = Tile.EMPTY; break;
                }
            }
            
            //padding the remainder of the row
            for (int j = s.length(); j < cols; j++){ 
                level[i][j] = Tile.EMPTY;
            }
        }
    }

    public GameLevel(GameLevel gl) {
        gameID = gl.gameID;
        rows = gl.rows;
        cols = gl.cols;
        numBoxes = gl.numBoxes;
        numBoxesInPlace = gl.numBoxesInPlace;
        numSteps = gl.numSteps;
        level = new Tile[rows][cols];
        player = new Position(gl.player.x, gl.player.y);
        for (int i = 0; i < rows; i++){
            System.arraycopy(gl.level[i], 0, level[i], 0, cols);
        }
    }

    public boolean isValidPosition(Position p){
        return (p.x >= 0 && p.y >= 0 && p.x < cols && p.y < rows);
    }
    
    public boolean isFree(Position p){
        if (!isValidPosition(p)) return false;
        Tile li = level[p.y][p.x];
        return (li == Tile.EMPTY || li == Tile.EXIT);
    }
    
    /*public boolean movePlayer(Direction d){
        Position curr = player;
        Position next = curr.translate(d);
        if (numBoxesInPlace < numBoxes && isFree(next)) {
            player = next;
            numSteps++;
            return true;
        } 
        return false;
    }*/

    
    public void printLevel(){
        int x = player.x, y = player.y;
        for (int i = 0; i < rows; i++){
            for (int j = 0; j < cols; j++){
                if (i == y && j == x)
                    System.out.print('@');
                else 
                    System.out.print(level[i][j].representation);
            }
            System.out.println("");
        }
    }

    
}
