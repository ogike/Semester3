package utal�s;

public class Banksz�mla {

    private final String sz�mlasz�m;
    private int egyenleg;
    private final String tulajdonosNeve;
    
    public Banksz�mla(String sz�mlasz�m, String tulajdonosNeve) {
        this.sz�mlasz�m = sz�mlasz�m;
        this.tulajdonosNeve = tulajdonosNeve;
        this.egyenleg = 0;
    }
    
    public String sz�mlasz�m() {
        return this.sz�mlasz�m;
    }

    public int egyenleg() {
        return this.egyenleg;
    }

    public String tulajdonosNeve() {
        return tulajdonosNeve;
    }
    
    //synchronized: egyszerre csak egyszer h�v�dhat ez a f�ggv�ny meg ezen az objektumon
    public synchronized void j�v��r(int �sszeg) throws Negat�v�sszegKiv�tel {
        if(�sszeg < 0) {
            throw new Negat�v�sszegKiv�tel();
        }
        egyenleg += �sszeg;
    }
    
    public synchronized void terhel(int �sszeg) throws NincsFedezetKiv�tel, Negat�v�sszegKiv�tel {
        if(�sszeg < 0) {
            throw new Negat�v�sszegKiv�tel();
        }
        if(egyenleg < �sszeg) {
            throw new NincsFedezetKiv�tel(this, �sszeg);
        }
        egyenleg -= �sszeg;
    }
    
}
