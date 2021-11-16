package view;

import model.Model;
import model.Player;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class Window extends BaseWindow {

    private int size;
    private Model model;
    private JLabel label;
    private MainWindow mainWindow;
    
    private JButton[][] buttons;
    
    public Window(int size, MainWindow mainWindow) {
        this.size = size;
        this.mainWindow = mainWindow;
        this.buttons = new JButton[size][size];
        
        
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

        getContentPane().setLayout(new BorderLayout());
        getContentPane().add(top, BorderLayout.NORTH);
        getContentPane().add(mainPanel, BorderLayout.CENTER);
    }

    private JButton addButton(JPanel panel, final int i,
            final int j) {
        final JButton button = new JButton();

        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Player newValue = model.step(i, j);
                //button.setText(newValue.name()); //enum.name returns the string
                updateButtons();
                
                updateLabelText();
                
                Player winner = model.findWinner();
                if (winner != Player.NOBODY) {
                    showGameOverMessage(winner);
                }
                
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
                //Replace with img
                Player tile = model.getTile(i, j);//TODO
                //buttons[i][j].setText(model.getTileValue(i, j));
            }
        }
    }

    @Override
    protected void doUponExit() {
        super.doUponExit();
        mainWindow.getWindowList().remove(this);
    }
    
}
