import javax.swing.*;
import java.awt.*;

/**
 * Soreditor használatát bemutató párbeszédablak
 */
public class EditDlg extends OKCancelDialog
{
    private JTextField  edit;

    public EditDlg(JFrame keret, String cím)
    {
        super(keret, cím);
        edit = new JTextField();
        setLayout(new BorderLayout());
        add("Center", edit);
        add("South", btnPanel); //származtatott cancel/ok gombok
        pack();
        setResizable(false);
    }

    /** A szerkesztő tartalmának lekérdezése */
    public String getValue()        { return edit.getText(); }

    @Override
    protected boolean processOK()   { return true; }

    @Override
    protected void processCancel()  {}
}
