package utalás;

//ez már több adatot eltárol, hogy pl ki tudjuk iratni a számlaszámot
public class NemlétezőSzámlaKivétel extends Exception {

    private final String számlaszám;
    public NemlétezőSzámlaKivétel(String számlaszám) {
        this.számlaszám = számlaszám;
    }
    
    public String számlaszám() {
        return this.számlaszám;
    }
    
}
