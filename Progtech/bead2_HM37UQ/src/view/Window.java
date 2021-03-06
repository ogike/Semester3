package view;

import model.Model;
import model.Tile;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import model.Direction;

/**
 * The window for the actual gameboards.
 * @author ogike
 */
public class Window extends BaseWindow {
    private int size;
    private Model model;
    private JLabel curPlayerLabel;
    private JLabel playerOScoreLabel;
    private MainWindow mainWindow;
    
    private JButton[][] buttons;
    
    /**
     * Creates a size x size gameboard, with info labels, a restart button and arrow inputs
     * Also creates a model for the gameboard
     * @param size The dimensions of the gameboard to spawn
     * @param mainWindow The starter window that handles the gameboard windows
     */
    public Window(int size, MainWindow mainWindow) {
        this.size = size;
        this.mainWindow = mainWindow;
        this.buttons = new JButton[size][size];
        
        setTitle("Fekete-lyuk játék " + size + 'x' + size);
        setSize(500, 550);
        
        mainWindow.getWindowList().add(this);
        model = new Model(size);

        //TOP PANEL ###########################################################
        JPanel top = new JPanel();
        
        curPlayerLabel = new JLabel();
        playerOScoreLabel = new JLabel();
        updateLabelsText();
        
        JButton newGameButton = new JButton();
        newGameButton.setText("Új játék");
        newGameButton.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                newGame();
            }
            
        });
        
        top.add(playerOScoreLabel);
        top.add(newGameButton);
        top.add(curPlayerLabel);
        
        //MAIN PANEL ##########################################################
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new GridLayout(size, size));

        for (int i = 0; i < size; ++i) {
            for (int j = 0; j < size; ++j) {
                buttons[i][j] = addButton(mainPanel, i, j);
            }
        }
        updateButtons();

        setLayout(new BorderLayout());
        add(top, BorderLayout.NORTH);
        add(mainPanel, BorderLayout.CENTER);
        
        //ARROW INPUTS ########################################################
        addKeyListener(new KeyAdapter() {
            /**
             * If we press an arrow, moves the player into that direction
             * Also checks for winners after.
             */
            @Override
            public void keyPressed(KeyEvent ke) {
                super.keyPressed(ke); 
                int kk = ke.getKeyCode();
                Direction d = null;
                switch (kk){
                    case KeyEvent.VK_LEFT:  d = Direction.LEFT; break;
                    case KeyEvent.VK_RIGHT: d = Direction.RIGHT; break;
                    case KeyEvent.VK_UP:    d = Direction.UP; break;
                    case KeyEvent.VK_DOWN:  d = Direction.DOWN; break;
                }
                if (d != null && model.move(d)){ //calling the model
                    updateButtons();
                    updateLabelsText();
                    
                    Tile winner = model.findWinner();
                    if(winner != Tile.NOBODY){
                        showGameOverMessage(winner);
                    }
                } 
            }
        });
        
        setFocusable(true);
        setLocationRelativeTo(null);
    }

    /**
     * Adds a tile button to the specified panel
     * @param panel The panel to attach this button unto
     * @param i The row index of this button
     * @param j The column index of this button
     * @return The created button
     */
    private JButton addButton(JPanel panel, final int i,
            final int j) {
        final JButton button = new JButton();

        button.addActionListener(new ActionListener() {
            /**
             * If clicked, select the playrt on this tile
             */
            @Override
            public void actionPerformed(ActionEvent e) {
                model.selectPlayer(i, j);
                updateButtons();
            }
        });
        
        button.setFocusable(false);
        panel.add(button);
        return button;
    }

    /**
     * Pop up dialogue to congratulate the winner, and to start a new game.
     * @param winner The winner of the game to display
     */
    private void showGameOverMessage(Tile winner) {
        JOptionPane.showMessageDialog(this,
                "Játék vége. Nyert: " + winner.name());
        newGame();
    }
    
    /**
     * Creates a new window and a game identical to this one, and closes this
     */
    private void newGame() {
        Window newWindow = new Window(size, mainWindow);
        newWindow.setVisible(true);
        
        this.dispose();
        mainWindow.getWindowList().remove(this);
    }
    
    /**
     * Updates the player scores and the current player label
     */
    private void updateLabelsText() {
        curPlayerLabel.setText("Aktuális játékos: "
                + model.getActualPlayer().name());
        playerOScoreLabel.setText("<html>X pontjai: " + model.getPlayerXScore()
                                + "<br>O pontjai: " + model.getPlayerOScore() + "</html");
        
        if(model.getActualPlayer() == Tile.O){
            curPlayerLabel.setForeground(Color.red);
        } else{
            curPlayerLabel.setForeground(Color.blue);
        }
    }
    
    /**
     * Refreshes all the tiles/buttons on the gameboard
     */
    private void updateButtons(){
        for (int i = 0; i < size; ++i) {
            for (int j = 0; j < size; ++j) {
                Tile tile = model.getTile(i, j);
                String text;
                Color color = null;
                switch (tile){
                    case HOLE:
                        text = "";
                        buttons[i][j].setBackground(Color.black);
                        break;
                    case O:
                        text = (model.getActualPlayer() == Tile.O) ? "O" : "o";
                        color = Color.red;
                        break;
                    case O_SELECTED:
                        text = "(O)";
                        color = Color.red;
                        break;
                    case X:
                        text = (model.getActualPlayer() == Tile.X) ? "X" : "x";
                        color = Color.blue;
                        break;
                    case X_SELECTED:
                        text = "(X)";
                        color = Color.blue;
                        break;
                    default: //NOBODY
                        text = "";
                        break;
                }
                
                buttons[i][j].setText(text);
                if(color != null)
                    buttons[i][j].setForeground(color);
            }
        }
    }

    /**
     * Closes this windows and removes it from the mainWindow
     */
    @Override
    protected void doUponExit() {
        super.doUponExit();
        mainWindow.getWindowList().remove(this);
    }
    
}
