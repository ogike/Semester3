/*

 */
package persistence;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Game;
import model.GameID;
import model.GameLevel;

/**
 *
 * @author ogike
 */
public class HighScoresManager {
    
    private HashSet<GameID> levelsWon;
    //private HighScores highScores;
    
    int maxScores;
    PreparedStatement insertStatement;
    PreparedStatement deleteStatement;
    Connection connection;
    
    public HighScoresManager() {
        levelsWon = new HashSet<GameID>();
        try{
            setUpConnection(10);
        } catch (SQLException ex) {
            Logger.getLogger(HighScoresManager.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    
    //HIGH LEVEL INTERACTIONS ##################################################
    
    public void levelWon(GameID id){
        levelsWon.add(id);
    }
    
    /**
     * Called when the player dies, and scores need to be reset
     */
    public void uploadHighScore(String name){
        try{
            putHighScore(name, getScore());
        } catch (SQLException ex) {
            Logger.getLogger(HighScoresManager.class.getName()).log(Level.SEVERE, null, ex);
        }
        levelsWon.clear();
    }
    
    public int getScore(){ return levelsWon.size(); }
    
    public ArrayList<HighScore> getHighScores(){
        try{
            String query = "SELECT * FROM HIGHSCORES";
            ArrayList<HighScore> highScores = new ArrayList<>();
            Statement stmt = connection.createStatement();
            ResultSet results = stmt.executeQuery(query);
            while (results.next()) { //scanner-hez hasonlóan tudjuk feldolgozni
                String name = results.getString("NAME");
                int score = results.getInt("SCORE");
                highScores.add(new HighScore(name, score));
            }
            sortHighScores(highScores);
            return highScores;
        } catch (SQLException ex) {
            Logger.getLogger(HighScoresManager.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    //DATABASE INTERACTIONS#####################################################
    
    private void setUpConnection(int maxScores) throws SQLException {
        this.maxScores = maxScores;
        String dbURL = "jdbc:derby://localhost:1527/highscores";
        connection = DriverManager.getConnection(dbURL);
        
        //prepared statementek: kérdőjelekbe helyettesítve parancs
        String insertQuery = "INSERT INTO HIGHSCORES (TIMESTAMP, NAME, SCORE) VALUES (?, ?, ?)";
        insertStatement = connection.prepareStatement(insertQuery);
        
        String deleteQuery = "DELETE FROM HIGHSCORES WHERE SCORE=?";
        deleteStatement = connection.prepareStatement(deleteQuery);
    }

    private void putHighScore(String name, int score) throws SQLException {
        ArrayList<HighScore> highScores = getHighScores();
        if (highScores.size() < maxScores) {
            insertScore(name, score);
        } else {
            int leastScore = highScores.get(highScores.size() - 1).getScore();
            if (leastScore < score) {
                deleteScores(leastScore);
                insertScore(name, score);
            }
        }
    }

    /**
     * Sort the high scores in descending order.
     * @param highScores 
     */
    private void sortHighScores(ArrayList<HighScore> highScores) {
        Collections.sort(highScores, new Comparator<HighScore>() {
            @Override
            public int compare(HighScore t, HighScore t1) {
                return t1.getScore() - t.getScore();
            }
        });
    }

    private void insertScore(String name, int score) throws SQLException {
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        insertStatement.setTimestamp(1, ts); //első paramétert timestamp típusként setteljök
        insertStatement.setString(2, name);  //mádosikat stringként setteljük..
        insertStatement.setInt(3, score);    //...
        insertStatement.executeUpdate();     //adatbázisban futtassuk ezt a parancsot
    }

    /**
     * Deletes all the highscores with score.
     *
     * @param score
     */
    private void deleteScores(int score) throws SQLException {
        deleteStatement.setInt(1, score);
        deleteStatement.executeUpdate();
    }
}
