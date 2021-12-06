package model;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Scanner;
import res.ResourceLoader;

/**
 * Singleton so dragons can get it anytime
 * @author ogike
 */
public class Game {
    //                   <"diff", HashMap<id     , GameLevel>>
    private final HashMap<String, HashMap<Integer, GameLevel>> gameLevels;
    private GameLevel gameLevel = null; //current game level
    
    public Game() {
        gameLevels = new HashMap<>();
        readLevels();
    }

    // ------------------------------------------------------------------------
    // The 'interesting' part :)
    // ------------------------------------------------------------------------

    //creating a new gameLevel to reset it
    public void loadGame(GameID gameID){
        gameLevel = new GameLevel(gameLevels.get(gameID.difficulty).get(gameID.level));
    }
    
    //not even sure if we need this
    public void printGameLevel(){ gameLevel.printLevel(); }
    
    /**
     * Processed a round in the game
     * @param d The direction the player tried to move in
     * @return 
     */
    public boolean step(Direction d){
        boolean succesful = gameLevel.movePlayer(d);
        
        if(succesful){
            gameLevel.dragon.step();
        }
        
        return succesful;
    }
    
    // ------------------------------------------------------------------------
    // Getter methods
    // ------------------------------------------------------------------------
    
    public Collection<String> getDifficulties(){ return gameLevels.keySet(); }
    public Collection<Integer> getLevelsOfDifficulty(String difficulty){
        if (!gameLevels.containsKey(difficulty)) return null;
        return gameLevels.get(difficulty).keySet();
    }
    
    public boolean isLevelLoaded(){ 
        return gameLevel != null && !checkWin() && !checkLoose(); 
    }
    public GameID getGameID(){ return (gameLevel != null) ? gameLevel.gameID : null; }
    
    public int getLevelRows(){ return gameLevel.rows; }
    public int getLevelCols(){ return gameLevel.cols; }
    public Tile getTile(int row, int col){ return gameLevel.level[row][col]; }
    public boolean isTileFree(Position pos) { return gameLevel.isFree(pos); }

    public Position getPlayerPos(){ //MAKE IT ~IMMUTABLE
        return gameLevel.player.getPos(); 
    }
    
    public Position getDragonPos(){ //MAKE IT ~IMMUTABLE
        return gameLevel.dragon.getPos(); 
    }
    
    public Position getNextStepFromPath(Position from, Position to){
        return gameLevel.graph.getNextStepToTarget(from, to);
    }
    
    public boolean checkWin(){
        return gameLevel.player.getPos().equals(gameLevel.exitPos);
    }
    
    public boolean checkLoose(){
        return gameLevel.dragon.isPlayerNeighbour();
    }
    
    // ------------------------------------------------------------------------
    // Utility methods to load game levels from res/levels.txt resource file.
    // ------------------------------------------------------------------------

    private void readLevels(){
        //ClassLoader cl = getClass().getClassLoader();
        InputStream is;// = cl.getResourceAsStream("res/levels.txt");
        is = ResourceLoader.loadResource("res/levels.txt");
        
        try (Scanner sc = new Scanner(is)){
            String line = readNextLine(sc); //gonna be the gameId at first
            //gonna store the current levels rows in this temporarily
            ArrayList<String> gameLevelRows = new ArrayList<>();
            
            //goes thru the whole file
            while (!line.isEmpty()){
                //reads out the gameId
                GameID id = readGameID(line);
                if (id == null) return;

                //goes thru one whole level
                gameLevelRows.clear();
                line = readNextLine(sc);
                while (!line.isEmpty() && line.trim().charAt(0) != ';'){
                    gameLevelRows.add(line);                    
                    line = readNextLine(sc);
                }
                addNewGameLevel(new GameLevel(gameLevelRows, id, this));
            }
            //if (is != null) is.close();
        } catch (Exception e){
            System.out.println("Ajaj");
        }
        
    }
    
    private void addNewGameLevel(GameLevel gameLevel){
        HashMap<Integer, GameLevel> levelsOfDifficulty;
        if (gameLevels.containsKey(gameLevel.gameID.difficulty)){
            //get reference to the difficultys hashmap
            levelsOfDifficulty = gameLevels.get(gameLevel.gameID.difficulty);
            //put this level into the difficultys hashmap 
            //  (thats a reference stored in the big hashmap)
            levelsOfDifficulty.put(gameLevel.gameID.level, gameLevel);
        } else {
            levelsOfDifficulty = new HashMap<>();
            levelsOfDifficulty.put(gameLevel.gameID.level, gameLevel);
            gameLevels.put(gameLevel.gameID.difficulty, levelsOfDifficulty);
        }
    }
  
    private String readNextLine(Scanner sc){
        String line = "";
        while (sc.hasNextLine() && line.trim().isEmpty()){
            line = sc.nextLine();
        }
        return line;
    }
    
    private GameID readGameID(String line){
        line = line.trim();
        if (line.isEmpty() || line.charAt(0) != ';') return null;
        
        Scanner s = new Scanner(line);
        s.next(); // skip ';'
        
        if (!s.hasNext()) return null;
        String difficulty = s.next().toUpperCase();
        
        if (!s.hasNextInt()) return null;
        int id = s.nextInt();
        
        return new GameID(difficulty, id);
    }    
}
