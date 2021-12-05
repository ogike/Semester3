package model;

public enum TileType {
    EXIT('E'), WALL('#'), EMPTY(' ');
    TileType(char rep){ representation = rep; }
    public final char representation;
}
