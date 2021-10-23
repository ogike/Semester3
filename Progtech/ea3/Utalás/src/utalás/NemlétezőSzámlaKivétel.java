package utalás;

//ez már több adatot eltárol, hogy pl ki tudjuk iratni a számlaszámot
public class NemlétezõSzámlaKivétel extends Exception {

    private final String számlaszám;
    public NemlétezõSzámlaKivétel(String számlaszám) {
        this.számlaszám = számlaszám;
    }
    
    public String számlaszám() {
        return this.számlaszám;
    }
    
}
