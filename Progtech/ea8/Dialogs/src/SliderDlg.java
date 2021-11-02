import javax.swing.*;
import javax.swing.event.*;
import java.awt.*;

/**
 * Csúszka használatát bemutató párbeszédablak
 */
public class SliderDlg extends OKCancelDialog implements ChangeListener
{
    private JSlider     slider;        // a csúszka

    private JLabel      info;           // a csúszka értékének megjelenítése

    /**
     * Egy csúszkát tartalmazó párbeszédablak létrehozása
     * @param frame ehhez tartozik a dialógus
     * @param name a fejléc tartalma
     * @param min a csúszka alsó határa
     * @param max a csúszka felső határa
     * @param value a csúszak aktuális értéke
     * @param major a fő értékek
     */
    public SliderDlg(JFrame frame, String name, int min, int max, int value, int major)
    {
        super(frame, name);
        if ( value < min || value > max )   value = min;
        info = new JLabel("" + value, SwingConstants.CENTER);
        slider = new JSlider(min, max, value);
        slider.setMajorTickSpacing(major);
        slider.setMinorTickSpacing(1);
        slider.setPaintTicks(true); //kis vonalkák megjelenítése
        slider.setPaintLabels(true); //tickek értékének megjelenítése
        slider.setSnapToTicks(true);
        slider.addChangeListener(this);
        setLayout(new BorderLayout());
        add("North", info);
        add("Center", slider);
        add("South", btnPanel);

        setSize(new Dimension(250, 120));
        setResizable(false);
    }

    @Override
    protected boolean processOK()   { return true; }

    @Override
    protected void processCancel()  {}

    /**
     * A csúszka értékének lekérdezése
     * @return a csúszka értéke
     */
    public int getValue()           { return slider.getValue(); }

    /**
     * A csúszka értékének beállítása (kívülről)
     * @param v az aktuális érték
     */
    public void setValue(int v)
    {
        if ( v < slider.getMinimum() ) v = slider.getMinimum();
        if ( v > slider.getMaximum() ) v = slider.getMaximum();
        slider.setValue(v);
    }

    /**
    * A csúszka változás eseménye (interfaceből)
    * @param e az esemény
    */
    public void stateChanged(ChangeEvent e)
    {
            info.setText("" + slider.getValue());
    }
}
