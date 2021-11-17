package view;

import java.awt.Toolkit;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.net.URL;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import static javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE;

/**
 * The parent window that the other windows derive from
 * Used to abstract the Exit dialgue mechanims, and the icon
 * @author ogike
 */
public class BaseWindow extends JFrame {

    public BaseWindow() {
        setTitle("Fekete-lyuk játék");
        setSize(275, 125);
        setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                showExitConfirmation();
            }
        });
        
        URL url = BaseWindow.class.getResource("antmaker.png");
        setIconImage(Toolkit.getDefaultToolkit().getImage(url));

    }
    
    /**
     * Extra dialogue before exit.
     */
    private void showExitConfirmation() {
        int n = JOptionPane.showConfirmDialog(this, "Valóban ki akar lépni?",
                "Megerősítés", JOptionPane.YES_NO_OPTION);
        if (n == JOptionPane.YES_OPTION) {
            doUponExit();
        }
    }
    
    //ez mainWindowban felül van írva
    protected void doUponExit() {
        //adott ablak felszámolása
        this.dispose();
    }
    
}
