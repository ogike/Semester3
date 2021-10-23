package utalás;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class Bankfiók {
    private final Map<String, Bankszámla> számlák;
    
    public Bankfiók() {
        this.számlák = new HashMap<>();
    }
    
    public Collection<Bankszámla> számlák() {
        return számlák.values();
    }
    
    public void újSzámla(Bankszámla számla) {
        számlák.put(számla.számlaszám(), számla);
    }
    
    public void számlátTöröl(Bankszámla számla) {
        számlák.remove(számla.számlaszám());
    }
    
    public void átvezet(String terhelendõSzámlaSzáma, String kedvezményezettSzámlaSzáma, int összeg)
            throws NincsFedezetKivétel, NemlétezõSzámlaKivétel, NegatívÖsszegKivétel {
        
        Bankszámla terhelendõSzámla = számlák.get(terhelendõSzámlaSzáma);
        if(terhelendõSzámla == null) {
            throw new NemlétezõSzámlaKivétel(terhelendõSzámlaSzáma);
        }
        Bankszámla kedvezményezettSzámla = számlák.get(kedvezményezettSzámlaSzáma);
        if(kedvezményezettSzámla == null) {
            throw new NemlétezõSzámlaKivétel(kedvezményezettSzámlaSzáma);
        }
        
        terhelendõSzámla.terhel(összeg);
        kedvezményezettSzámla.jóváír(összeg);
    }
    
    public void befizet(String kedvezményezettSzámlaSzáma, int összeg) throws NemlétezõSzámlaKivétel, NegatívÖsszegKivétel{
        Bankszámla kedvezményezettSzámla = számlák.get(kedvezményezettSzámlaSzáma);
        if(kedvezményezettSzámla == null) {
            throw new NemlétezõSzámlaKivétel(kedvezményezettSzámlaSzáma);
        }
        kedvezményezettSzámla.jóváír(összeg);
    }
}
