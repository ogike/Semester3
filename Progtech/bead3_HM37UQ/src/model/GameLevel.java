package model;

import java.util.ArrayList;

public class GameLevel {
    public final GameID     gameID;
    public final int        rows, cols;
    public final TileType[][]   level;
    public Player           player = new Player();
    public Dragon           dragon;
    public Position         exitPos;
    
    private final Game      game;
    
    
    /**
     * Gets basically the relevant portion for levels.txt and loads it into a level model
     * @param gameLevelRows The string representation of the level, line by line
     * @param gameID The difficulty - gameNumber pair
     */
    public GameLevel(ArrayList<String> gameLevelRows, GameID gameID, Game game){
        this.gameID = gameID;
        this.game = game;
        
        //getting the col of the widest line
        int c = 0;
        for (String s : gameLevelRows) if (s.length() > c) c = s.length();
        
        rows = gameLevelRows.size();
        cols = c;
        level = new TileType[rows][cols];
        
        for (int i = 0; i < rows; i++){
            String s = gameLevelRows.get(i);
            for (int j = 0; j < s.length(); j++){
                switch (s.charAt(j)){
                    case 'P': player = new Player(new Position(j, i));
                              level[i][j] = TileType.EMPTY; break;
                              
                    case '#': level[i][j] = TileType.WALL; break;
                    
                    case 'E': exitPos = new Position(j, i);
                              level[i][j] = TileType.EXIT; break;
                              
                    case 'D': dragon = new DragonStupid( new Position(j, i), game );
                              level[i][j] = TileType.EMPTY; break;
                              
                    default:  level[i][j] = TileType.EMPTY; break;
                }
            }
            
            //padding the remainder of the row
            for (int j = s.length(); j < cols; j++){ 
                level[i][j] = TileType.EMPTY;
            }
        }
        
        if(dragon != null){
            dragon.setTarget(player);
        }
    }

    //copy constructor
    public GameLevel(GameLevel gl) {
        gameID = gl.gameID;
        game = gl.game;
        rows = gl.rows;
        cols = gl.cols;
        level = new TileType[rows][cols];
        player = new Player(gl.player);
        dragon = gl.dragon.getDeepCopy();
        dragon.setTarget(player);
        exitPos = new Position(gl.exitPos.x, gl.exitPos.y);
        for (int i = 0; i < rows; i++){
            System.arraycopy(gl.level[i], 0, level[i], 0, cols);
        }
    }

    /**
     * @param p
     * @return "Is this position in-bounds?"
     */
    public boolean isValidPosition(Position p){
        return (p.x >= 0 && p.y >= 0 && p.x < cols && p.y < rows);
    }
    
    /**
     * @param p
     * @return "Can the player move to this position?"
     */
    public boolean isFree(Position p){
        if (!isValidPosition(p)) return false;
        TileType li = level[p.y][p.x];
        return (li == TileType.EMPTY || li == TileType.EXIT);
    }
    
    public boolean movePlayer(Direction d){
        Position currPos = player.getPos();
        Position nextPos = currPos.translate(d);
        if (isFree(nextPos)) {
            player.setPos(nextPos);
            return true;
        } 
        return false;
    }

    /**
     * Honestly have no idea why this is here
     */
    public void printLevel(){
        int x = player.getPos().x;
        int y = player.getPos().y;
        for (int i = 0; i < rows; i++){
            for (int j = 0; j < cols; j++){
                if (i == y && j == x)
                    System.out.print('P');
                else 
                    System.out.print(level[i][j].representation);
            }
            System.out.println("");
        }
    }

    
}
