/*

 */
package view;

import java.util.ArrayList;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import persistence.HighScore;

/**
 *
 * @author ogike
 */
public class HighScoresWindow extends JFrame {

    public HighScoresWindow(ArrayList<HighScore> scores) {
        this.setTitle("Eredmények");
        
        String colNames[] = {"Név", "Elért pontok"};
        
        String[][] data = new String[scores.size()][2];
        for(int i = 0; i < scores.size(); i++){
            data[i][0] = scores.get(i).getName();
            data[i][1] = String.valueOf(scores.get(i).getScore());
        }      
                
        JTable table = new JTable(data, colNames);
        //table.setBoun
        JScrollPane scrollPane = new JScrollPane(table);
        add(scrollPane);
        
        setSize(350,200);
        setVisible(true);
        setLocationRelativeTo(null);
    }
    
}
