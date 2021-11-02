import java.awt.Color;

/**
 * Színek kezelése: szín és név együtt.
 */
public class Colour
{
    private Color   color;
    private String  name;

    public Colour(String name, Color color)
    {
        this.color = color;   this.name = name;
    }

    public Color color() { return color; }

    public String név() { return name; }

    @Override
    public String toString()    { return name; }
}
