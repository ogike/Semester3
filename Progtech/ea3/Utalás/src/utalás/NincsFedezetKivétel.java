package utalás;


public class NincsFedezetKivétel extends Exception {

    private final Bankszámla számla;
    private final int összeg;
    
    public NincsFedezetKivétel(Bankszámla számla, int összeg) {
        this.számla = számla;
        this.összeg = összeg;
    }

    public Bankszámla számla() {
        return számla;
    }

    public int összeg() {
        return összeg;
    }
    
    
    
}
