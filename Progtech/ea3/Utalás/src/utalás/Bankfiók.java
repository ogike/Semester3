package utal�s;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class Bankfi�k {
    private final Map<String, Banksz�mla> sz�ml�k;
    
    public Bankfi�k() {
        this.sz�ml�k = new HashMap<>();
    }
    
    public Collection<Banksz�mla> sz�ml�k() {
        return sz�ml�k.values();
    }
    
    public void �jSz�mla(Banksz�mla sz�mla) {
        sz�ml�k.put(sz�mla.sz�mlasz�m(), sz�mla);
    }
    
    public void sz�ml�tT�r�l(Banksz�mla sz�mla) {
        sz�ml�k.remove(sz�mla.sz�mlasz�m());
    }
    
    public void �tvezet(String terhelend�Sz�mlaSz�ma, String kedvezm�nyezettSz�mlaSz�ma, int �sszeg)
            throws NincsFedezetKiv�tel, Neml�tez�Sz�mlaKiv�tel, Negat�v�sszegKiv�tel {
        
        Banksz�mla terhelend�Sz�mla = sz�ml�k.get(terhelend�Sz�mlaSz�ma);
        if(terhelend�Sz�mla == null) {
            throw new Neml�tez�Sz�mlaKiv�tel(terhelend�Sz�mlaSz�ma);
        }
        Banksz�mla kedvezm�nyezettSz�mla = sz�ml�k.get(kedvezm�nyezettSz�mlaSz�ma);
        if(kedvezm�nyezettSz�mla == null) {
            throw new Neml�tez�Sz�mlaKiv�tel(kedvezm�nyezettSz�mlaSz�ma);
        }
        
        terhelend�Sz�mla.terhel(�sszeg);
        kedvezm�nyezettSz�mla.j�v��r(�sszeg);
    }
    
    public void befizet(String kedvezm�nyezettSz�mlaSz�ma, int �sszeg) throws Neml�tez�Sz�mlaKiv�tel, Negat�v�sszegKiv�tel{
        Banksz�mla kedvezm�nyezettSz�mla = sz�ml�k.get(kedvezm�nyezettSz�mlaSz�ma);
        if(kedvezm�nyezettSz�mla == null) {
            throw new Neml�tez�Sz�mlaKiv�tel(kedvezm�nyezettSz�mlaSz�ma);
        }
        kedvezm�nyezettSz�mla.j�v��r(�sszeg);
    }
}
