package utal�s;

//ez m�r t�bb adatot elt�rol, hogy pl ki tudjuk iratni a sz�mlasz�mot
public class Neml�tez�Sz�mlaKiv�tel extends Exception {

    private final String sz�mlasz�m;
    public Neml�tez�Sz�mlaKiv�tel(String sz�mlasz�m) {
        this.sz�mlasz�m = sz�mlasz�m;
    }
    
    public String sz�mlasz�m() {
        return this.sz�mlasz�m;
    }
    
}
