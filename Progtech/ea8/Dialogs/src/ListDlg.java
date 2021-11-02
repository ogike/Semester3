import javax.swing.*;
import java.awt.event.*;
import java.awt.*;
import java.awt.image.BufferedImage;

/**
 * Lista kezelését bemutató párbeszédablak
 */
public class ListDlg extends OKCancelDialog
{
    private JList   list;

    public ListDlg(JFrame frame, String name, Colour[] colors)
    {
        super(frame, name);
        list = new JList(colors);
        list.addMouseListener(mouseListener);
        list.setCellRenderer(cellRenderer); //saját megjelenítő az elemekhez
        setLayout(new BorderLayout());
        add("Center", new JScrollPane(list));
        add("South", btnPanel);

        pack();
        setResizable(false);
    }

    /** A kiválasztott szín lekérdezése */
    public Colour getValue()          { return (Colour)list.getSelectedValue(); }

    @Override
    protected boolean processOK()   { return list.getSelectedIndex() > -1; }

    @Override
    protected void processCancel()  {}

    /** Dupla kattintás kezelése a listán */
    private MouseListener   mouseListener = new MouseAdapter()
    {
        @Override
        public void mouseClicked(MouseEvent e)
        {
            if ( e.getClickCount() == 2 && e.getButton() == MouseEvent.BUTTON1 )
                btnOK.doClick();
        }
    };

    /** Egy listaelem kinézetének megadása */
    private DefaultListCellRenderer cellRenderer = new DefaultListCellRenderer()
    {
        /**
         * l: elemek listája
         * o: objektum amit feldolgozunk
         * index: hanyadik elem az o
         */
        @Override
        public Component getListCellRendererComponent(JList l, Object o, int index,
                                                      boolean isSelected,
                                                      boolean cellHasFocus)
        {
            super.getListCellRendererComponent(l, o, index, isSelected, cellHasFocus);
            BufferedImage   im = new BufferedImage(16, 16, BufferedImage.TYPE_INT_RGB);
            Graphics        g = im.createGraphics();
            g.setColor(((Colour)o).color());
            g.fillRect(0, 0, 16, 16);
            setIcon(new ImageIcon(im));
            return this;
	    }
    };
}
