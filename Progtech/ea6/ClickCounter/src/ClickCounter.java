import javax.swing.*;
import java.awt.event.*;
import java.awt.*;
import java.awt.Toolkit;

public class ClickCounter extends JFrame
{
    public static void main(String[] args)
    {
        new ClickCounter();
    }

    private int     counter;
    private JLabel  counterLabel;
    private JMenuItem menuReset;

    public ClickCounter()
    {
        setTitle("Számláló");
        java.net.URL    url = ClickCounter.class.getResource("icon.png");
        setIconImage(Toolkit.getDefaultToolkit().getImage(url));

        addWindowListener(exitAdapter);
        setLayout(new BorderLayout());
        JPanel  gombok = new JPanel(new FlowLayout());
        counterLabel = new JLabel("Kattintások száma: 0");
        gombok.add(new JButton(clickAction));
        gombok.add(new JButton(exitAction));
        add("Center", counterLabel);
        add("South", gombok);

        JMenuBar menuBar = new JMenuBar(); //NEW    
        JMenu menuFile = new JMenu("Tevékenységek");
        menuFile.setMnemonic('T');

        menuReset = new JMenuItem(new AbstractAction("Nullázás") {
            @Override
            public void actionPerformed(ActionEvent e) {
                counter = 0;
                menuReset.setEnabled(false);
                counterLabel.setText("Kattintások száma: " + counter);
            }
        });
        menuReset.setMnemonic('N');
        menuReset.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O, KeyEvent.CTRL_DOWN_MASK));
        menuReset.setEnabled(false);
        menuFile.add(menuReset);
        
        menuFile.addSeparator();
        
        JMenuItem menuExit = new JMenuItem(new AbstractAction("Kilépés") {
            @Override
            public void actionPerformed(ActionEvent e) {
                exit();
            }
        });
        menuExit.setMnemonic('K');
        menuExit.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_X, KeyEvent.ALT_DOWN_MASK));
        menuFile.add(menuExit);
       
        menuBar.add(menuFile);
        setJMenuBar(menuBar);
        
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    private void exit()
    {
        System.exit(0);
    }

    private WindowAdapter   exitAdapter = new WindowAdapter()
    {
        @Override
        public void windowClosing(WindowEvent e)
        {
            exit();
        }
    };

    private AbstractAction  exitAction = new AbstractAction("Kilépés")
    {
        public void actionPerformed(ActionEvent e)
        {
            exit();
        }
    };

    private AbstractAction  clickAction = new AbstractAction("Kattintás")
    {
        public void actionPerformed(ActionEvent e)
        {
            counter++;
            menuReset.setEnabled(true);
            counterLabel.setText("Kattintások száma: " + counter);
        }
    };
}
