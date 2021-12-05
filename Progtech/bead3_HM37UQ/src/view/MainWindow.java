package view;

import java.awt.BorderLayout;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.net.URL;
import javax.swing.AbstractAction;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.WindowConstants;
import model.Direction;
import model.Game;
import model.GameID;

public class MainWindow extends JFrame{
    private final Game game;
    private Board board;
    private final JLabel gameStatLabel;    
    
    public MainWindow() /*throws IOException */{
        //creating the model
        game = new Game();
        
        //setting the windows itself ####
        setTitle("Labirintus ");
        setSize(600, 600);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        URL url = MainWindow.class.getClassLoader().getResource("res/tmp_icon.jpg");
        setIconImage(Toolkit.getDefaultToolkit().getImage(url));
        
        //creating menubar #######################
        JMenuBar menuBar = new JMenuBar();
        JMenu menuGame = new JMenu("Játék");
        JMenu menuGameLevel = new JMenu("Pálya");
        createGameLevelMenuItems(menuGameLevel);

        //exit action ###################
        JMenuItem menuGameExit = new JMenuItem(new AbstractAction("Kilépés") {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
        
        //adding menubar to window
        menuGame.add(menuGameLevel);
        menuGame.add(menuGameExit);
        menuBar.add(menuGame);
        setJMenuBar(menuBar);

        
        //adding the label
        setLayout(new BorderLayout(0, 10));
        gameStatLabel = new JLabel("Timer goes here");
        add(gameStatLabel, BorderLayout.NORTH);
        
        //adding the gameboard
        try { 
            add(board = new Board(game), BorderLayout.CENTER); 
        } catch (IOException ex) {
            System.out.println("ajajj");
        }
        
        //setting up keyboard input for the whole window
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent ke) {
                super.keyPressed(ke); 
                handleKeyPressed(ke);
            }
        });

        //necessary last steps
        setResizable(false);
        setLocationRelativeTo(null);
        
        //starting EASY 1
        game.loadGame(new GameID("EASY", 1));
        board.refresh();
        
        pack();
        //TODO: need to put proper timer here later
        //refreshGameStatLabel();
        setVisible(true);
    }
    
    private void handleKeyPressed(KeyEvent ke){
        if (!game.isLevelLoaded()) return;
        
        int kk = ke.getKeyCode();
        Direction d = null;
        switch (kk){
            case KeyEvent.VK_LEFT:  d = Direction.LEFT; break;
            case KeyEvent.VK_RIGHT: d = Direction.RIGHT; break;
            case KeyEvent.VK_UP:    d = Direction.UP; break;
            case KeyEvent.VK_DOWN:  d = Direction.DOWN; break;
            case KeyEvent.VK_ESCAPE: game.loadGame(game.getGameID());
        }
        //refreshGameStatLabel();
        board.repaint();
        
        if(d != null && !game.checkWin() && !game.checkLoose()){
            game.step(d);
            
            if(game.checkWin()){
                showGameWonDialog();
            } else if (game.checkLoose()){
                showGameOverDialog();
            }
        }
    }
    
    public void showGameWonDialog(){
        JOptionPane.showMessageDialog(MainWindow.this, 
                        "Gratulálok! Nyertél!", 
                        "Gratulálok!", 
                        JOptionPane.INFORMATION_MESSAGE);
                //execution only returns to here when the dialog btn is clicked
                //TODO: should be next level, or check if game completed
                    //(currently only freezes movement)
    }
    
    public void showGameOverDialog(){
        JOptionPane.showMessageDialog(MainWindow.this, 
                        "Game over! Kezdj egy új játékot!", 
                        "Game ovee!", 
                        JOptionPane.INFORMATION_MESSAGE);
        //TODO: actual game over
    }
    
    private void createGameLevelMenuItems(JMenu menu){
        for (String s : game.getDifficulties()){
            JMenu difficultyMenu = new JMenu(s); //create new menu for difficulty
            menu.add(difficultyMenu);
            for (Integer i : game.getLevelsOfDifficulty(s)){
                //create new item for Level inside difficulty
                JMenuItem item = new JMenuItem(new AbstractAction("Level-" + i) {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        game.loadGame(new GameID(s, i));
                        board.refresh();
                        pack();
                    }
                });
                difficultyMenu.add(item);
            }
        }
    }
}
