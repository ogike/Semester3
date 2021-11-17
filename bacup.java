package view;

import model.Model;
import model.Player;

import java.awt.BorderLayout;
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

public class Window extends BaseWindow {

    private int size;
    private Model model;
    private JLabel label;
    private MainWindow mainWindow;
    
    private JButton[][] buttons;
    
    private BaseWindow window;
    
    //creating the window
    public Window(int size, MainWindow mainWindow) {
        this.size = size;
        this.mainWindow = mainWindow;
        this.buttons = new JButton[size][size];
        this.window = window;
        
        mainWindow.getWindowList().add(this);
        model = new Model(size);

        //TOP PANEL ###########################################################
        JPanel top = new JPanel();
        
        label = new JLabel();
        updateLabelText();
        
        JButton newGameButton = new JButton();
        newGameButton.setText("Új játék");
        newGameButton.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                newGame();
                //window.requestFocusInWindow();
            }
            
        });
        
        top.add(label);
        top.add(newGameButton);
        
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
        
        System.out.println("test before");
        //ARROW INPUTS ########################################################
        
        System.out.println(getContentPane());
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent ke) {
                System.out.println("test" + ke);
                super.keyPressed(ke); 
                int kk = ke.getKeyCode();
                Direction d = null;
                switch (kk){
                    case KeyEvent.VK_LEFT:  d = Direction.LEFT; break;
                    case KeyEvent.VK_RIGHT: d = Direction.RIGHT; break;
                    case KeyEvent.VK_UP:    d = Direction.UP; break;
                    case KeyEvent.VK_DOWN:  d = Direction.DOWN; break;
                    //case KeyEvent.VK_ESCAPE: game.loadGame(game.getGameID());
                }
                System.out.println(d);
                if (d != null && model.move(d)){ //calling the model
                    System.out.println("Succesfully moved!");
                    updateButtons();
                    updateLabelText();
                } 
            }
        });
        
        //setFocusable(true);
        //this.requestFocusInWindow();
        setLocationRelativeTo(null);
        //pack();
    }

    private JButton addButton(JPanel panel, final int i,
            final int j) {
        final JButton button = new JButton();

        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Player newValue = model.step(i, j);
                
                model.selectPlayer(i, j);
                //next step is to implement listeners for moving in directions
                
                //button.setText(newValue.name()); //enum.name returns the string
                updateButtons();
                
                //updateLabelText(); //should be at the moving function
                /*Player winner = model.findWinner();
                if (winner != Player.NOBODY) {
                    showGameOverMessage(winner);
                }*/
                //window.requestFocusInWindow();
            }
        });

        panel.add(button);
        return button;
    }

    private void showGameOverMessage(Player winner) {
        JOptionPane.showMessageDialog(this,
                "Játék vége. Nyert: " + winner.name());
        newGame();
    }
    
    private void newGame() {
        Window newWindow = new Window(size, mainWindow);
        newWindow.setVisible(true);
        
        this.dispose();
        mainWindow.getWindowList().remove(this);
    }
    
    private void updateLabelText() {
        label.setText("Aktuális játékos: "
                + model.getActualPlayer().name());
    }
    
    private void updateButtons(){
        for (int i = 0; i < size; ++i) {
            for (int j = 0; j < size; ++j) {
                //TODO: Replace with img
                Player tile = model.getTile(i, j);
                String text;
                switch (tile){
                    case HOLE:
                        text = "[]";
                        break;
                    case O:
                        text = "o";
                        break;
                    case O_SELECTED:
                        text = "(O)";
                        break;
                    case X:
                        text = "x";
                        break;
                    case X_SELECTED:
                        text = "(X)";
                        break;
                    case NOBODY:
                        text = "";
                        break;
                    default:
                        text = "error";
                        break;
                }
                
                buttons[i][j].setText(text);
            }
        }
    }

    @Override
    protected void doUponExit() {
        super.doUponExit();
        mainWindow.getWindowList().remove(this);
    }
    
}

