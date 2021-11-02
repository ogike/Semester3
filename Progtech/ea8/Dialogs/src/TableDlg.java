import javax.swing.*;
import java.awt.*;
import javax.swing.table.AbstractTableModel;

/**
 * Táblázatok használatát szemléltető párveszédablak
 */
public class TableDlg extends OKCancelDialog
{
    private JTable  table;
    private Colour[]  colors;

    public TableDlg(JFrame frame, String name, Colour[] colors)
    {
        super(frame, name);
        this.colors = colors;
        table = new JTable(tableModel);
        setLayout(new BorderLayout());
        add("Center", new JScrollPane(table));
        add("South", btnPanel);
        setSize(400, 200);
        setResizable(true);
    }

    @Override
    protected boolean processOK()   { return true; }

    @Override
    protected void processCancel()  {}

    private AbstractTableModel  tableModel = new AbstractTableModel()
    {
        private final String[]  names = { "Név", "Piros", "Zöld", "Kék" };

        public int getRowCount()    { return colors.length; }

        public int getColumnCount() { return names.length; }

        public Object getValueAt(int rowIndex, int columnIndex)
        {
            switch ( columnIndex )
            {
                case 0: return colors[rowIndex].név();
                case 1: return Integer.valueOf(colors[rowIndex].color().getRed());
                case 2: return Integer.valueOf(colors[rowIndex].color().getGreen());
                case 3: return Integer.valueOf(colors[rowIndex].color().getBlue());
                default:
            }
            return null;
        }

        @Override
        public String getColumnName(int column)
        {
            return names[column];
        }
    };
}
