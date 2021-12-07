package model;

import java.util.ArrayList;

public class GameLevel {
    public final GameID     gameID;
    public final int        rows, cols;
    public final Tile[][]   level;
    public Player           player = new Player();
    public Dragon           dragon;
    public Bullet           bullet; //TODO: should be a list for multiple possible bullets
    public Position         exitPos;
    
    private final Game      game;
    public final PathFindingGraph graph;      
    
    
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
        level = new Tile[rows][cols];
        
        for (int i = 0; i < rows; i++){
            String s = gameLevelRows.get(i);
            for (int j = 0; j < s.length(); j++){
                switch (s.charAt(j)){
                    case 'P': player = new Player(new Position(j, i));
                              level[i][j] = new Tile(TileType.EMPTY, i, j); break;
                              
                    case '#': level[i][j] = new Tile(TileType.WALL, i, j); break;
                    
                    case 'E': exitPos = new Position(j, i);
                              level[i][j] = new Tile(TileType.EXIT, i, j); break;
                              
                    case 'D': dragon = new DragonSmart( new Position(j, i), game );
                              level[i][j] = new Tile(TileType.EMPTY, i, j); break;
                    
                    case 'G': level[i][j] = new Tile(TileType.GUN, i, j); break;
                              
                    default:  level[i][j] = new Tile(TileType.EMPTY, i, j); break;
                }
            }
            
            //padding the remainder of the row
            for (int j = s.length(); j < cols; j++){ 
                level[i][j] = new Tile(TileType.EMPTY, i, j);
            }
        }
        
        if(dragon != null){
            dragon.setTarget(player);
        }
        graph = null; //we only set it once we actually start the map
    }

    /**
     * Called when loading the level, to reset the level data
     * @param gl 
     */
    public GameLevel(GameLevel gl) {
        gameID = gl.gameID;
        game = gl.game;
        rows = gl.rows;
        cols = gl.cols;
        level = new Tile[rows][cols];
        player = new Player(gl.player);
        dragon = gl.dragon.getDeepCopy();
        dragon.setTarget(player);
        exitPos = new Position(gl.exitPos.x, gl.exitPos.y);
        for (int i = 0; i < rows; i++){
            System.arraycopy(gl.level[i], 0, level[i], 0, cols);
        }
        graph = new PathFindingGraph(this);
    }
    
    //move the bullet and see if there is something on the updated tile
    public void stepBullet(){
        if(bullet != null){
            boolean hit = bullet.step();
            if(hit){
                bullet = null; //basically destroy the bullet if we hit something
            }
        }
    }
    
    public void checkBullet(){
        //check if there is already something on the bullets tile
        if(bullet != null && bullet.checkCollision()) bullet = null; 
    }
    
    /**
     * 
     * @param dir
     * @return if we succesfully fired or not
     */
    public boolean shootBullet(Direction dir){
        if(player.bulletsLeft <= 0) return false;
        
        Position bulletPos = player.getPos().translate(dir);
        if(isFree(bulletPos)){
            bullet = new Bullet(player.getPos(), dir, this);
            player.bulletsLeft--;
            stepBullet();
            return true;
        }
        return false;
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
        return level[p.y][p.x].isFreeForPlayer();
    }
    
    public boolean movePlayer(Direction d){
        Position currPos = player.getPos();
        Position nextPos = currPos.translate(d);
        if (isFree(nextPos)) {
            player.setPos(nextPos);
            Tile tile = level[nextPos.y][nextPos.x];
            if(tile.type == TileType.GUN){
                player.bulletsLeft++; //TODO: should be a method
                level[nextPos.y][nextPos.x] = new Tile(TileType.EMPTY, nextPos.x, nextPos.y);
            }
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
                    System.out.print(level[i][j].type.representation);
            }
            System.out.println("");
        }
    }

    
}
