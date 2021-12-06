package view;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;
import java.net.URL;
import javax.swing.AbstractAction;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.WindowConstants;
import model.Direction;
import model.Game;
import model.GameID;

public class MainWindow extends JFrame{
    private final Game game;
    private Board board;
    private final JLabel gameStatLabel;    
    
    private final JLabel shootUpBtn;
    private final JLabel shootDownBtn;
    private final JLabel shootLeftBtn;
    private final JLabel shootRightBtn;
    
    private boolean isStepping = false;
    
    public static void main(String[] args) {
        //try {
            new MainWindow();
        //} catch (IOException ex) {}
    }
    
    public MainWindow() /*throws IOException */{
        //creating the model
        game = new Game();
        isStepping = true;
        
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

        //top panel(timer and shoot btns inside)
        JPanel topPanel = new JPanel();
        topPanel.setLayout(new BorderLayout());
        
        //adding the time label
        //TODO: whats going on with the numbers
        setLayout(new BorderLayout());
        gameStatLabel = new JLabel("Timer goes here");
        topPanel.add(gameStatLabel, BorderLayout.WEST);
//        add(gameStatLabel, BorderLayout.NORTH);
        
        //adding the shoot button
        JPanel shootPanel = new JPanel();
        shootPanel.setLayout(new BorderLayout());
        shootLeftBtn = addShootBtn(Direction.LEFT, shootPanel);
        shootUpBtn = addShootBtn(Direction.UP, shootPanel);
        shootDownBtn = addShootBtn(Direction.DOWN, shootPanel);
        shootRightBtn = addShootBtn(Direction.RIGHT, shootPanel);
        //topPanel.add(shootPanel, BorderLayout.EAST);    
        //add(topPanel, BorderLayout.NORTH);
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
        
        //TODO: this fucks up a lot of stuff
        setFocusable(true);
        setLocationRelativeTo(null);
        isStepping = false;
    }
    
    private void handleKeyPressed(KeyEvent ke){
        if (!game.isLevelLoaded()) return;
        if (isStepping){ System.out.println("Double stepping!"); return;}
        isStepping = true;
        
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
            //board.repaint();
            
            if(game.checkWin()){
                showGameWonDialog();
            } else if (game.checkLoose()){
                showGameOverDialog();
            }
        }
        
        isStepping = false;
    }
    
    private void handleShootBtnPressed(Direction dir){
        if(!game.checkWin() && !game.checkLoose()){
            game.shootBullet(dir);
            board.repaint();
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
        //board.repaint();
    }
    
    public void showGameOverDialog(){
        JOptionPane.showMessageDialog(MainWindow.this, 
                        "Game over! Kezdj egy új játékot!", 
                        "Game ovee!", 
                        JOptionPane.INFORMATION_MESSAGE);
        //TODO: actual game over
        //board.repaint();
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
    
    private JLabel addShootBtn(Direction dir, JPanel panel){
        JLabel btn = new JLabel();
        btn.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                handleShootBtnPressed(dir);
            }
        });
        btn.setBorder(BorderFactory.createLineBorder(Color.black));
        btn.setHorizontalAlignment( SwingConstants.CENTER );
        
        switch(dir) {
            case UP:
                btn.setText(" Up ");
                panel.add(btn, BorderLayout.NORTH);
                break;
            case DOWN:
                btn.setText(" Down ");
                panel.add(btn, BorderLayout.CENTER);
                break;
            case LEFT:
                btn.setText(" Left ");
                panel.add(btn, BorderLayout.WEST);
                break;
            case RIGHT:
                btn.setText(" Right ");
                panel.add(btn, BorderLayout.EAST);
                break;
        }
        return btn;
    }
}
