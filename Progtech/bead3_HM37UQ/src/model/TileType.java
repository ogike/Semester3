package model;

public enum TileType {
    EXIT('E'), WALL('#'), EMPTY(' '), GUN('G'), PORTAL('O'), BUSH('B');
    TileType(char rep){ representation = rep; }
    public final char representation;
}
