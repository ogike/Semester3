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
import java.util.ArrayList;
import static javax.management.timer.Timer.ONE_SECOND;
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
import javax.swing.Timer;
import javax.swing.WindowConstants;
import model.Direction;
import model.Game;
import model.GameID;
import model.GameLevel;
import persistence.HighScore;
import persistence.HighScoresManager;

public class MainWindow extends JFrame{
    private final Game game;
    private final HighScoresManager highScoresManager;
    private Board board;
    
    private final JLabel timeLabel;    
    private int elapsedTime;
    private Timer timer;
    
    private final JLabel shootUpBtn;
    private final JLabel shootDownBtn;
    private final JLabel shootLeftBtn;
    private final JLabel shootRightBtn;
    
    private final JLabel bulletCountLabel;
    
    private boolean isStepping = false;
    
    public static void main(String[] args) {
            new MainWindow();
    }
    
    public MainWindow() /*throws IOException */{
        //creating the model
        game = new Game();
        highScoresManager = new HighScoresManager();
        isStepping = true;
        
        //setting the windows itself ####
        setTitle("Labirintus ");
        setSize(600, 600);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        URL url = MainWindow.class.getClassLoader().getResource("res/dragon.png");
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
        
        //display highscores action ####################
        JMenuItem menuHighScores = new JMenuItem(new AbstractAction("Eredmények") {
            @Override
            public void actionPerformed(ActionEvent e) {
                showHighScores();
            }
        });
        
        //adding menubar to window
        menuGame.add(menuGameLevel);
        menuGame.add(menuHighScores);
        menuGame.add(menuGameExit);
        menuBar.add(menuGame);
        setJMenuBar(menuBar);

        //top panel(timer, bulletCount and shoot btns inside)
        setLayout(new BorderLayout());
        JPanel topPanel = new JPanel();
        topPanel.setLayout(new BorderLayout());
        
        JPanel labelPanel = new JPanel();
        labelPanel.setLayout(new BorderLayout());
        timeLabel = new JLabel("Elapsed time: 0");
        labelPanel.add(timeLabel, BorderLayout.NORTH);
        bulletCountLabel = new JLabel("Number of bullets: 0");
        labelPanel.add(bulletCountLabel, BorderLayout.SOUTH);
        topPanel.add(labelPanel, BorderLayout.WEST);
        
        //adding the shoot button
        JPanel shootPanel = new JPanel();
        shootPanel.setLayout(new BorderLayout());
        shootLeftBtn = addShootBtn(Direction.LEFT, shootPanel);
        shootUpBtn = addShootBtn(Direction.UP, shootPanel);
        shootDownBtn = addShootBtn(Direction.DOWN, shootPanel);
        shootRightBtn = addShootBtn(Direction.RIGHT, shootPanel);
        topPanel.add(shootPanel, BorderLayout.EAST);    
        
        add(topPanel, BorderLayout.NORTH);
        
        //adding the gameboard
        try { 
            add(board = new Board(game), BorderLayout.SOUTH); 
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
        game.loadGame(new GameID("EASY", 1/*, "DRAGON2"*/));
        board.refresh();
        
        elapsedTime = 0;
        timer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                elapsedTime++;
                refreshTimerLabel();
            }
            
        });
        timer.start();
        refreshTimerLabel();
        
        refreshBulletLabel();
        
        pack();
        setVisible(true);
        
        setFocusable(true);
        setLocationRelativeTo(null);
        isStepping = false;
    }
    
    //LABEL UPDATE METHODS #####################################################
    private void refreshTimerLabel(){
        timeLabel.setText("Elapsed time: " + elapsedTime);
    }
    
    private void restartTimer(){
        timer.restart();
        elapsedTime = 0;
        refreshTimerLabel();
    }
    
    private void refreshBulletLabel(){
        bulletCountLabel.setText("Number of bullets: " + game.getPlayerBulletCount());
        if(game.getPlayerBulletCount() < 1){
            setShootBtnColor(Color.lightGray);
        } else{
            setShootBtnColor(Color.black);
        }
    }
    
    private void setShootBtnColor(Color col){
        shootLeftBtn.setForeground(col);
        shootRightBtn.setForeground(col);
        shootUpBtn.setForeground(col);
        shootDownBtn.setForeground(col);
    }
    
    //EVENT HANDLING METHODS ###################################################
    private void handleKeyPressed(KeyEvent ke){
        if (!game.isLevelLoaded()) {
            System.out.println("redraw while not loaded");
            return;
        }
        if (isStepping){ System.out.println("Double stepping!"); return;}
        isStepping = true;
        
        int kk = ke.getKeyCode();
        Direction d = null;
        switch (kk){
            case KeyEvent.VK_LEFT:  d = Direction.LEFT; break;
            case KeyEvent.VK_RIGHT: d = Direction.RIGHT; break;
            case KeyEvent.VK_UP:    d = Direction.UP; break;
            case KeyEvent.VK_DOWN:  d = Direction.DOWN; break;
            
            case KeyEvent.VK_A: handleShootBtnPressed(Direction.LEFT); break;
            case KeyEvent.VK_W: handleShootBtnPressed(Direction.UP); break;
            case KeyEvent.VK_D: handleShootBtnPressed(Direction.RIGHT); break;
            case KeyEvent.VK_S: handleShootBtnPressed(Direction.DOWN); break;
                    
            case KeyEvent.VK_ESCAPE: game.loadGame(game.getGameID());
                                     restartTimer();
                                     refreshBulletLabel();
                                     break; //TODO: refactor game restarts
        }
        //refreshGameStatLabel();
        board.repaint();
        
        if(d != null && !game.checkWin() && !game.checkLoose()){
            game.step(d);
            refreshBulletLabel();
            //board.repaint();
            
            if(game.checkWin()){
                timer.stop();
                showGameWonDialog();
            } else if (game.checkLoose()){
                timer.stop();
                showGameOverDialog();
            }
        }
        
        isStepping = false;
    }
    
    private void handleShootBtnPressed(Direction dir){
        if(!game.checkWin() && !game.checkLoose()){
            game.shootBullet(dir);
            refreshBulletLabel();
            board.repaint();
            
            if(game.checkLoose()){
                showGameWonDialog();
            }
        }
    }
    
    //DIALOG METHODS ###########################################################
    public void showGameWonDialog(){
        JOptionPane.showMessageDialog(MainWindow.this, 
                        "Gratulálok! Nyertél!", 
                        "Gratulálok!", 
                        JOptionPane.INFORMATION_MESSAGE);
        highScoresManager.levelWon(game.getGameID());
    }
    
    public void showGameOverDialog(){
        String name = JOptionPane.showInputDialog(this, 
                        "Game over! Kezdj egy új játékot!", 
                        "Game over!", 
                        JOptionPane.INFORMATION_MESSAGE);
        if(name != null && !name.isEmpty())
            highScoresManager.uploadHighScore(name);
    }
    
    public void showHighScores(){
        ArrayList<HighScore> scores = highScoresManager.getHighScores();
        HighScoresWindow window = new HighScoresWindow(scores);
    }
    
    
    //FACTORY METHODS##########################################################
    
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
                        restartTimer();
                        refreshBulletLabel();
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
