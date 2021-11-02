import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.image.BufferedImage;

/**
 * Gombok kezelését bemutató párbeszédablak
 */
public class ButtonDlg extends OKCancelDialog
{
    private JCheckBox       inverse;
    private JRadioButton[]  colorButtons;
    private int             selected;

    /**
     * Egy párbeszédablak létrehozása
     * @param frame ehhez tartozik a dialógus
     * @param name a fejléc tartalma
     * @param colors a választható színek
     * @param inv a szövegszín inverzét választjuk-e
     */
    public ButtonDlg(JFrame frame, String name, Colour[] colors, boolean inv)
    {
        super(frame, name);
        inverse = new JCheckBox("Szövegszín inverze", inv);
        
        ButtonGroup csoport = new ButtonGroup();
        JPanel      panel = new JPanel(new GridLayout(colors.length / 3, 3));
        panel.setBorder(new TitledBorder(new EtchedBorder(), "Háttérszín: "));
        colorButtons = new JRadioButton[colors.length];
        for ( int i = 0; i < colors.length; i++ )
        {
            colorButtons[i] = button(colors[i]);
            panel.add(colorButtons[i]);
            csoport.add(colorButtons[i]);
        }
        
        setLayout(new BorderLayout());
        add("North", inverse);
        add("Center", panel);
        add("South", btnPanel);

        pack();
        setResizable(false);
    }

    /**
     * Beállítja a checkbox és a rádiógombok értékét
     * @param inv inverz mód-e (checkbox)
     */
    public void setValue(boolean inv)
    {
        inverse.setSelected(inv);
    }

    /**
     * Iverzmód lekérdezése
     * @return igaz, ha inverz módot írtunk elő, hamis különben
     */
    public boolean inverseMode()          { return inverse.isSelected(); }

    /**
     * A kiválasztott szín indexének lekérdezése
     * @return az index
     */
    public int color()                   { return selected; }

    @Override
    protected boolean processOK()
    {
        if ( inverse.isSelected() )  return true;
        for ( int i = 0; i < colorButtons.length; i++ )
            if ( colorButtons[i].isSelected() )
            {
                selected = i;
                return true;
            }
        return false;
    }

    @Override
    protected void processCancel()      {}

    /**
     * Egy színnek megfelelő rádiógomb létrehozása
     * @param sz a szín
     * @return rádiógomb
     */
    private JRadioButton button(Colour sz)
    {
        //alapból ennek minden pontja átlátszó
        BufferedImage   img = new BufferedImage(16, 16, BufferedImage.TYPE_INT_ARGB);
        
        //alap ikon
        Graphics        g = img.getGraphics(); //erre fogunk rajzolni
        g.setColor(sz.color());
        g.fillOval(0, 0, 16, 16);
        JRadioButton    b = new JRadioButton(sz.név(), new ImageIcon(img));
        
        //kiválasztott ikon
        img = new BufferedImage(16, 16, BufferedImage.TYPE_INT_ARGB);
        g = img.getGraphics();
        g.setColor(sz.color());
        g.fillOval(0, 0, 16, 16);
        if ( sz.color().equals(Color.black) )    g.setColor(Color.white);
        else                                    g.setColor(Color.black);
        g.fillOval(4, 4, 8, 8); //a belső kiválasztási pötty
        b.setSelectedIcon(new ImageIcon(img));
        
        return b;
    }
}
