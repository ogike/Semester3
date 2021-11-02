import javax.swing.*;
import java.awt.*;

/**
 *Spinner használatát bemutató párbeszédablak
 */
public class SpinnerDlg extends OKCancelDialog
{
    private JSpinner    spinner;

    public SpinnerDlg(JFrame frame, String name, int min, int max, int value)
    {
        super(frame, name);
        spinner = new JSpinner(new SpinnerNumberModel(value, min, max, 1));
        setLayout(new BorderLayout());
        add("Center", spinner);
        add("South", btnPanel);
        pack();
        setResizable(false);
    }

    /** Az aktuális érték beállítása */
    public void setValue(int v)
    {
        SpinnerNumberModel    m = (SpinnerNumberModel)spinner.getModel();
        int min = ((Integer)m.getMinimum()).intValue();
        int max = ((Integer)m.getMaximum()).intValue();
        if ( v < min )  v = min;
        if ( v > max )  v = max;
        spinner.setValue(v);
    }

    /** Az aktuális érték lekérdezése */
    public int getValue()           { return ((Integer)spinner.getValue()).intValue(); }

    @Override
    protected boolean processOK()   { return true; }

    @Override
    protected void processCancel()  {}
}
