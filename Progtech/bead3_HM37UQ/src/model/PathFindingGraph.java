/*

 */
package model;

import java.util.ArrayList;
import java.util.Arrays;

/**
 *
 * @author ogike
 */
public class PathFindingGraph {
    public GameLevel gl;
    public ArrayList<Tile> nodes;
    public int numOfNodes;
    public int infiniteValue; //because of integer overflow, use this as "infinite" distance
    public int[][] d;  //the distances between the nodes
    public int[][] p; //the parent indexes of the nodes in the paths
    
    public PathFindingGraph(GameLevel gl){
        this.gl = gl;
        
        //building the nodeList
        nodes = new ArrayList<>();
        for (int row = 0; row < gl.rows; row++) {
            for(int col = 0; col < gl.cols; col++)
                if(gl.level[row][col].isFreeForPlayer()){
                    nodes.add(gl.level[row][col]);
                }
        }
        
        numOfNodes = nodes.size();
        infiniteValue = numOfNodes*2;
        d = new int[numOfNodes][numOfNodes]; //fill it with inf
        p = new int[numOfNodes][numOfNodes];
        
        //setting up the direct connections
        for(int curInd = 0; curInd < numOfNodes; curInd++){
            //set the default values
            Arrays.fill(d[curInd], infiniteValue);
            
            
            int curX = nodes.get(curInd).col;
            int curY = nodes.get(curInd).row;
            int toTestXs[] = {curX+1, curX-1, curX,   curX};
            int toTestYs[] = {curY,   curY,   curY+1, curY-1};
            
            for(int i = 0; i < 4; i++){
                if(isEmpty(toTestXs[i], toTestYs[i])){
                    int targetInd = nodes.indexOf(gl.level[ toTestYs[i] ][ toTestXs[i] ]);
                    //if(isOpen(curX, curY, toTestXs[i], toTestYs[i])){
                        d[curInd][targetInd] = 1;
                        p[curInd][targetInd] = curInd;
                    //} else{
                    //    d[curInd][targetInd] = infiniteValue; //theoratically infinite
                    //    p[curInd][targetInd] = -1;
                    //}
                }
            }
            
            //diagonal elements (path leading to itself)
            d[curInd][curInd] = 0;
            p[curInd][curInd] = curInd; //should be 0 originally but thats bs...?
        }
        
        //main part of the floyd-warshall algorithm
        for(int k = 0; k < numOfNodes; k++){
            for(int i = 0; i < numOfNodes; i++){
                for(int j = 0; j < numOfNodes; j++){
                    if(d[i][j] > d[i][k] + d[k][j]){ //we found a better path thru k
                        d[i][j] = d[i][k] + d[k][j];
                        p[i][j] = p[k][j];
                    }
                }
            }
        }
    }
    
    /**
     * Calculates a path to target, and returns the first step in the path
     * @return 
     */
    public Position getNextStepToTarget(Position from, Position to){
        if(!isEmpty(from.x, from.y) || !isEmpty(to.x, to.y)) return null;
        
        int fromIndex = nodes.indexOf(gl.level[from.y][from.x]);
        int toIndex = nodes.indexOf(gl.level[to.y][to.x]);
        
        //no route to it
        if(d[fromIndex][toIndex] == infiniteValue) return null;
        
        int nextParent = p[fromIndex][toIndex];
        int safetyCounter = 0;
        
        while(p[fromIndex][nextParent] != fromIndex){
            //System.out.println("Checking nextparent: " + nextParent);
            nextParent = p[fromIndex][nextParent];
            safetyCounter++;
            if(safetyCounter > numOfNodes){
                System.out.println("Entered infinite loop!");
                return null;
            }
        }
        
        return nodes.get(nextParent).getPos();
    }
    
    private boolean isValidPos(int x, int y){
        return x >= 0 && y >= 0 && y < gl.rows && x < gl.cols;
    }
    
    private boolean isEmpty (int x, int y){
        return isValidPos(x, y) && gl.level[y][x].isFreeForPlayer();
    }
    
//    private boolean isOpen (int x1, int y1, int x2, int y2){
//        if(!isEmpty(x2, y2)) return false;
//        if(!isValidPos(x1, y1) || !isValidPos(x2, y2)) return false;
//        return ( Math.abs(x1 - x2) + Math.abs(y1 - y2) ) <= 1;
//    }
    
}
