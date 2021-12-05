package view;

import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.io.IOException;
import javax.swing.JPanel;
import model.Game;
import model.TileType;
import model.Position;
import res.ResourceLoader;

public class Board extends JPanel {
    private int fogOfWarDist = 3;
    
    private Game game;
        //EXIT('E'), WALL('#'), EMPTY(' ');
    private final Image exit, player, wall, empty, dragon, darkness;
    private double scale;
    private int scaled_size;
    private final int tile_size = 32;
    
    public Board(Game g) throws IOException{
        game = g;
        scale = 1.0;
        scaled_size = (int)(scale * tile_size);
        exit = ResourceLoader.loadImage("res/destination.png");
        player = ResourceLoader.loadImage("res/player.png");
        wall = ResourceLoader.loadImage("res/wall.png");
        empty = ResourceLoader.loadImage("res/empty.png");
        dragon = ResourceLoader.loadImage("res/dragon.png");
        darkness = ResourceLoader.loadImage("res/darkness.png");
        
    }
    
    public boolean setScale(double scale){
        this.scale = scale;
        scaled_size = (int)(scale * tile_size);
        return refresh();
    }
    
    //resizes the window and repaints
    public boolean refresh(){
        if (!game.isLevelLoaded()) return false;
        Dimension dim = new Dimension(game.getLevelCols() * scaled_size, game.getLevelRows() * scaled_size);
        setPreferredSize(dim);
        setMaximumSize(dim);
        setSize(dim);
        repaint(); //calls paintComponent thru swing
        return true;
    }
    
    @Override //paints the whole board
    protected void paintComponent(Graphics g) {
        if (!game.isLevelLoaded()) return;
        
        Graphics2D gr = (Graphics2D)g;
        int w = game.getLevelCols();
        int h = game.getLevelRows();
        Position p = game.getPlayerPos();
        Position d = game.getDragonPos();
        
        //iterating thru each cell on the board
        for (int y = 0; y < h; y++){
            for (int x = 0; x < w; x++){
                Image img = null;
                TileType li = game.getTile(y, x).type;
                switch (li){
                    case EXIT: img = exit; break;
                    case WALL: img = wall; break;
                    case EMPTY: img = empty; break;
                }
                if (p.x == x && p.y == y) img = player;
                if (d.x == x && d.y == y) img = dragon;
                
                if(p.eucledianDistance(x, y) > fogOfWarDist) img = darkness;
                
                if (img == null) continue;
                
                gr.drawImage(img, 
                        x * scaled_size, //x koord helye
                        y * scaled_size, //y koord helye
                        scaled_size, 
                        scaled_size, null);
            }
        }
    }
    
}