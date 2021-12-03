package model;

public enum Tile {
    EXIT('E'), WALL('#'), EMPTY(' ');
    Tile(char rep){ representation = rep; }
    public final char representation;
}
