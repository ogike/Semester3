import javax.swing.*;
import java.awt.*;

/**
 * Combobox kezelését bemutató párbeszédablak
 */
public class ComboDlg extends OKCancelDialog
{
    private JComboBox   combo;

    public ComboDlg(JFrame frame, String name, Colour[] colors)
    {
        super(frame, name);
        combo = new JComboBox();
        for ( int i = 0; i < colors.length; i++ )
            combo.addItem(colors[i].név());
        combo.setEditable(true);
        setLayout(new BorderLayout());
        add("Center", combo);
        add("South", btnPanel);
        pack();
        setResizable(false);
    }

    /** Érték lekérdezése */
    public String getValue()        { return (String)combo.getEditor().getItem(); }
    
    @Override
    protected boolean processOK()   { return true; }

    @Override
    protected void processCancel()  {}
}
