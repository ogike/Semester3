import javax.swing.*;
import java.awt.event.*;
import java.awt.*;

/**
 * OK és Mégsem gombokkal rendelkező párbeszédablakok közös őse.
 */
public abstract class OKCancelDialog extends JDialog
{
    public static final int     OK = 1;     // OK gombbal történő lezárás kódja
    public static final int     CANCEL = 0; // Mégsem gombbal történő lezárás kódja

    protected int       btnCode;            // a megnyomott gomb kódja

    protected JPanel    btnPanel ;         // az OK, Mégsem gombok elhelyezésére szolgáló panel

    protected JButton   btnOK;             // OK gomb

    protected JButton   btnCancel;         // Mégsem gomb

    /**
     * Egy párbeszédablak létrehozása
     * @param frame a keret, amihez a párbeszédablak tartozik
     * @param name a párbeszédablak címe
     */
    protected OKCancelDialog(JFrame frame, String name)
    {
        super(frame, name, true);
        //elrejti az ablakot, vezérlés vissza megnyitó ablaknak, következő használatkor nem kell konstruálni
        setDefaultCloseOperation(WindowConstants.HIDE_ON_CLOSE);
        btnCode = CANCEL;
        btnOK = new JButton(actionOK);
        btnOK.setMnemonic('O');
        btnOK.setPreferredSize(new Dimension(90, 25));
        btnCancel = new JButton(actionCancel);
        // Az Esc billentyű hozzárendelése a mégsem gombhoz (Esc lenyomása a párbeszédablakon belül -> mégsem gomb lenyomása
        KeyStroke mégsemKeyStroke = KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0);
        //InputMap/ActionMap páros: inputhoz esemény kapcsolása
        InputMap inputMap = btnCancel.getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW);
        ActionMap actionMap = btnCancel.getActionMap();
        if (inputMap != null && actionMap != null)
        {
            inputMap.put(mégsemKeyStroke, "cancel");
            actionMap.put("cancel", actionCancel);
        }
        btnCancel.setPreferredSize(new Dimension(90, 25));
        getRootPane().setDefaultButton(btnOK); //ez az Enter lenyomása?
        btnPanel = new JPanel(new FlowLayout());
        btnPanel.add(btnOK);
        btnPanel.add(btnCancel);
    }

    /**
     * Az ablak bezárását okozó gomb lekérdezése
     * @return a gomb kódja
     */
    public int getButtonCode()      { return btnCode; }

    /**
     * az OK megnyomásakor elvégzendő ellenőrzések, műveletek
     * @return true, ha a gomb lenyomása elfogadott
     */
    protected abstract boolean processOK();

    /**
     * a Cancel megnyomásakor elvégzendő tevékenységek
     */
    protected abstract void processCancel();

    /**
     * Az OK gomb eseménykezelője
     */
    private AbstractAction  actionOK = new AbstractAction("OK")
    {
        public void actionPerformed(ActionEvent e)
        {
            if ( processOK() ) //validálás
            {
                btnCode = OK;
                OKCancelDialog.this.setVisible(false);
            }
        }
    };

    /**
     * A Mégsem gomb esemény kezelője
     */
    private AbstractAction actionCancel = new AbstractAction("Mégsem")
    {
        public void actionPerformed(ActionEvent e)
        {
            processCancel();
            btnCode = CANCEL;
            OKCancelDialog.this.setVisible(false);
        }
    };
}
