package utal�s;


public class NincsFedezetKiv�tel extends Exception {

    private final Banksz�mla sz�mla;
    private final int �sszeg;
    
    public NincsFedezetKiv�tel(Banksz�mla sz�mla, int �sszeg) {
        this.sz�mla = sz�mla;
        this.�sszeg = �sszeg;
    }

    public Banksz�mla sz�mla() {
        return sz�mla;
    }

    public int �sszeg() {
        return �sszeg;
    }
    
    
    
}
