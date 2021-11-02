import javax.swing.*;
import java.awt.event.*;
import java.awt.Color;

/**
 * A párbeszédablakok kezelését végző osztály.
 * Egy keret, amelyből menüvel érhetjük el a különböző
 * párbeszédablakokat.
 */
public class Dialogs extends JFrame
{
    /** az eseményke naplója */
    private JTextArea   info;

    /** színek */
    private Colour[]      colors = { new Colour("Fekete", Color.black), 
                                   new Colour("Fehér", Color.white),
                                   new Colour("Szürke", Color.gray), 
                                   new Colour("Piros", Color.red),
                                   new Colour("Zöld", Color.green), 
                                   new Colour("Kék", Color.blue),
                                   new Colour("Sárga", Color.yellow), 
                                   new Colour("Lila", Color.magenta),
                                   new Colour("Cián", Color.cyan) };

    /** Közös érték a csúszka és spinner demóhoz */
    private int         value = 10;

    /** Csúszka demó elemei */
    private SliderDlg   sliderDlg = new SliderDlg(this, "Csúszka", 0, 20, value, 5);
    private AbstractAction  sliderAction = new AbstractAction("Csúszka")
    {
        public void actionPerformed(ActionEvent e)
        {
            sliderDlg.setValue(value);
            sliderDlg.setVisible(true);
            if ( sliderDlg.getButtonCode() != OKCancelDialog.OK )  return;
            value = sliderDlg.getValue();
            info.append("Csúszka érték: " + value + "\n");
        }
    };

    /** Gomb demó elemei */
    private boolean     inverse = false;
    private ButtonDlg   buttonDlg = new ButtonDlg(this, "Háttérszín", colors, inverse);
    private AbstractAction  buttonAction = new AbstractAction("Gombok")
    {
        public void actionPerformed(ActionEvent e)
        {
            buttonDlg.setValue(inverse);
            buttonDlg.setVisible(true);
            if ( buttonDlg.getButtonCode() != OKCancelDialog.OK ) return;
            if ( inverse = buttonDlg.inverseMode() )
            {
                info.setBackground(inverse(info.getForeground()));
                info.append("Inverz háttér\n");
            }
            else
            {
                info.setBackground(colors[buttonDlg.color()].color());
                info.append("Háttér " + colors[buttonDlg.color()].név() + "\n");
            }
        }
    };

    /** Lista demó elemei */
    private ListDlg     listDlg = new ListDlg(this, "Szövegszín", colors);
    private AbstractAction  listAction = new AbstractAction("Lista")
    {
        public void actionPerformed(ActionEvent e)
        {
            listDlg.setVisible(true);
            if ( listDlg.getButtonCode() != OKCancelDialog.OK )    return;
            Colour    sz = listDlg.getValue();
            info.setForeground(sz.color());
            info.append("Szöveg " + sz.név() + "\n");
        }
    };

    /** Combobox demó elemei */
    private ComboDlg    comboDlg = new ComboDlg(this, "Combo", colors);
    private AbstractAction  comboAction = new AbstractAction("Combobox")
    {
        public void actionPerformed(ActionEvent e)
        {
            comboDlg.setVisible(true);
            if ( comboDlg.getButtonCode() != OKCancelDialog.OK )    return;
            info.append("Combo: " + comboDlg.getValue() + "\n");
        }
    };

    /** Combolista demó elemei */
    private ComboListDlg    comboListDlg = new ComboListDlg(this, "Combolista", colors);
    private AbstractAction  comboListAction = new AbstractAction("Combolista")
    {
        public void actionPerformed(ActionEvent e)
        {
            comboListDlg.setVisible(true);
            if ( comboListDlg.getButtonCode() != OKCancelDialog.OK )    return;
            info.append("Combolista: " + comboListDlg.getValue().név() + "\n");
        }
    };

    /** Szerkesztő demó elemei */
    private EditDlg     editDlg = new EditDlg(this, "Soreditor");
    private AbstractAction  editAction = new AbstractAction("Sorszerkesztő")
    {
        public void actionPerformed(ActionEvent e)
        {
            editDlg.setVisible(true); //ittb átadódik a vezérlés?
            if ( editDlg.getButtonCode() != OKCancelDialog.OK ) return;
            info.append("Sorszerkesztő: " + editDlg.getValue() + "\n");
        }
    };

    /** Spinner demó elemei */
    private SpinnerDlg  spinnerDlg = new SpinnerDlg(this, "Spinner", 0, 20, value);
    private AbstractAction  spinnerAction = new AbstractAction("Spinner")
    {
        public void actionPerformed(ActionEvent e)
        {
            spinnerDlg.setValue(value);
            spinnerDlg.setVisible(true);
            if ( spinnerDlg.getButtonCode() != OKCancelDialog.OK )  return;
            value = spinnerDlg.getValue();
            info.append("Spinner: " + value + "\n");
        }
    };

    /** Táblázat demó elemei */
    private TableDlg tableDlg = new TableDlg(this, "Színek táblázata", colors);
    private AbstractAction  tableAction = new AbstractAction("Táblázat")
    {
        public void actionPerformed(ActionEvent e)
        {
            tableDlg.setVisible(true);
        }
    };

    public Dialogs()
    {
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        JMenuBar    menu = new JMenuBar();
        JMenu       dlg = new JMenu("Párbeszédablakok");
        dlg.setMnemonic('P');
        JMenuItem   item;
        item = dlg.add(sliderAction);    item.setMnemonic('C');
        item = dlg.add(buttonAction);     item.setMnemonic('G');
        item = dlg.add(listAction);      item.setMnemonic('L');
        item = dlg.add(comboAction);      item.setMnemonic('O');
        item = dlg.add(comboListAction);  item.setMnemonic('I');
        item = dlg.add(editAction);       item.setMnemonic('E');
        item = dlg.add(spinnerAction);    item.setMnemonic('S');
        item = dlg.add(tableAction);      item.setMnemonic('T');
        menu.add(dlg);
        setJMenuBar(menu);
        info = new JTextArea();
        info.setForeground(colors[0].color());
        add(new JScrollPane(info));
        setSize(300, 200);
        setVisible(true);
    }

    /** Egy szín inverzének meghatározása */
    private Color inverse(Color c)
    {
        return new Color(255 - c.getRed(), 
                        255 - c.getGreen(), 
                        255 - c.getBlue());
    }

    public static void main(String[] args)
    {
        new Dialogs();
    }
}
