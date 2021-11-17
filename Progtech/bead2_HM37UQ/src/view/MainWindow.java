package view;

import java.util.List;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import javax.swing.BoxLayout;
import javax.swing.JButton;


/**
 * The window that lets you start actual games with the specified sizes.
 * @author ogike
 */
public class MainWindow extends BaseWindow {
    
    private List<Window> gameWindows = new ArrayList<>();
    
    /**
     * Creates the first Window
     */
    public MainWindow() {
        
        JButton small = new JButton();
        small.setText("5 x 5");
        
        small.addActionListener(getActionListener(5));
        
        JButton medium = new JButton();
        medium.setText("7 x 7");

        medium.addActionListener(getActionListener(7));

        JButton large = new JButton();
        large.setText("9 x 9");
        
        large.addActionListener(getActionListener(9));
        
        getContentPane().setLayout(
                new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));
        getContentPane().add(small);
        getContentPane().add(medium);
        getContentPane().add(large);
    }
    
    /**
     * Returns an action that creates a new gameboard/window with the specifie size
     * @param size The dimension of the next gameboard
     * @return The ActionListener itself
     */
    private ActionListener getActionListener(final int size) {
        return new ActionListener() { 

            @Override
            public void actionPerformed(ActionEvent e) {
                Window window = new Window(size, MainWindow.this);
                window.setVisible(true);
                gameWindows.add(window);
            }
            
        };
    }
    
    /**
     * @return The window list of all the gameboards
     */
    public List<Window> getWindowList() {
        return gameWindows;
    }
    
    /**
     * Hard exits the whole program on exit
     */
    @Override
    protected void doUponExit() {
        System.exit(0);
    }

}
