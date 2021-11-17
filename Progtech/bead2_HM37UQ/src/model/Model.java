package model;

public class Model {

    private int size;
    private int winningScore;

    private Tile actualPlayer;
    private int playerOScore;
    private int playerXScore;

    private Tile[][] table;
    
    private int centerIndex;
    private int lastSelectedRow; //-1 if none
    private int lastSelectedCol;
    

    /**
     * Prepares and sets the gameboard
     * @param size the dimension of the table
     */
    public Model(int size) {
        this.size = size;
        winningScore = (int)Math.floor(size/2);
        actualPlayer = Tile.X;
        playerOScore = 0;
        playerXScore = 0;

        centerIndex = (int)Math.floor(size/2);
        
        //tábla inicializálás
        table = new Tile[size][size];
        for (int i = 0; i < size; ++i) {
            for (int j = 0; j < size; ++j) {
                if(i == j || i + j == size - 1){
                    if       (j < centerIndex){
                        table[i][j] = Tile.X;
                    } else if(j == centerIndex && i == centerIndex){
                        table[i][j] = Tile.HOLE;
                    } else if(j > centerIndex){
                        table[i][j] = Tile.O;
                    }
                } else{
                    table[i][j] = Tile.NOBODY;
                }
            }
        }
        
        lastSelectedCol = -1;
        lastSelectedRow = -1;
    }

    /**
     * Moves the selected player as much as they can into the direction
     * If the player goes into a blackhole, it disappears and the score increases
     * @param dir the direction the current playrt move in
     * @return whether or not the gameboard changed
     */
    public boolean move(Direction dir) {
        boolean hasMoved = false;
        boolean intoHole = false;
        int curY = lastSelectedRow;
        int curX = lastSelectedCol;
        
        //if we have selected a tile
        if(lastSelectedCol != -1 && lastSelectedRow != -1){
            int nextX, nextY;
            boolean canMove = true;
            
            while(canMove){
                nextX = curX + dir.x;
                nextY = curY + dir.y;
                
                //if next tile is not out of map
                if(0 <= nextX && nextX < size && 0 <= nextY && nextY < size){
                    if(table[nextY][nextX] == Tile.NOBODY){
                        hasMoved = true;
                        curX = nextX;
                        curY = nextY;
                    } else if(table[nextY][nextX] == Tile.HOLE){
                        hasMoved = true;
                        intoHole = true;
                        canMove  = false;
                    } else{ //if next tile is a player
                        canMove = false;
                    }
                } else{
                    canMove = false;
                }
            }
        }
        
        if(hasMoved){
            table[lastSelectedRow][lastSelectedCol] = Tile.NOBODY;
            
            if(intoHole){ //if we well into the hole
                if (actualPlayer == Tile.X) {
                    playerXScore++;
                } else {
                    actualPlayer = Tile.O;
                    playerOScore++;
                }
            } else {    //if we just simply moved
                table[curY][curX] = actualPlayer; 
            }
            
            //next players turn
            if (actualPlayer == Tile.X) {
                actualPlayer = Tile.O;
            } else {
                actualPlayer = Tile.X;
            }
            
            //deselecting last selected
            lastSelectedCol = -1;
            lastSelectedRow = -1;
            
            return true;
        }
        return false;

    }

    /**
     * Selects a player on the gameboard
     * @param row the row index of the selected player
     * @param column the column index of the selected player
     * @return whether or not the current player succsefully selected the tile
     */
    public boolean selectPlayer(int row, int column){
        Tile selected = table[row][column];

        //check if player is actualPlayer
        if(table[row][column] == actualPlayer){
            deSelectLastPlayer();
            
            togglePlayerSelected(row, column);
            lastSelectedRow = row;
            lastSelectedCol = column;
            
            return true;
        }
        return false;
    }
    
    /**
     * Deselects the last selected player
     */
    private void deSelectLastPlayer(){
        //resetting last selected
        if(lastSelectedCol != -1 && lastSelectedRow != -1){
            togglePlayerSelected(lastSelectedRow, lastSelectedCol);
        }
    }
    
    /**
     * Toggles the given player's selection
     * @param row the row index of the selected player
     * @param column the column index of the selected player
     */
    private void togglePlayerSelected(int row, int column){
        Tile player = table[row][column];
        switch (player) {
            case O_SELECTED:
                table[row][column] = Tile.O;
                break;
            case O:
                table[row][column] = Tile.O_SELECTED;
                break;
            case X_SELECTED:
                table[row][column] = Tile.X;
                break;
            case X:
                table[row][column] = Tile.X_SELECTED;
                break;
            default:
                break;
        }
    }
    
    /**
     * Checks if there is a winner
     * @return The winning player, or Player.Nobody if no one won yet
     */
    public Tile findWinner() {
        if(playerOScore >= winningScore)
            return Tile.O;
        if(playerXScore >= winningScore)
            return Tile.X;
        
        return Tile.NOBODY;
    }

    /**
     * Getter for the actual player.
     * @return The actual player
     */
    public Tile getActualPlayer() {
        return actualPlayer;
    }
    
    /**
     * Getter for Player X's score
     * @return Player X's score
     */
    public int getPlayerXScore() {
        return playerXScore;
    }
    
    /**
     * Getter for Player O's score
     * @return Player O's score
     */
    public int getPlayerOScore() {
        return playerOScore;
    }
    
    /**
     * @param x the row index of the requested tile
     * @param y the column index of the requested tile
     * @return The tile as a Player object
     */
    public Tile getTile(int x, int y){
        return table[x][y];
    }

}
