/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hallgatok;

/**
 *
 * @author ogike
 */
public class Hallgato {
    
    private String nev;
    private String nemzetiseg;
    private double atlag;

    public Hallgato(String nev, String nemzetiseg, double atlag) {
        this.nev = nev;
        this.nemzetiseg = nemzetiseg;
        this.atlag = atlag;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public String getNemzetiseg() {
        return nemzetiseg;
    }

    public void setNemzetiseg(String nemzetiseg) {
        this.nemzetiseg = nemzetiseg;
    }

    public double getAtlag() {
        return atlag;
    }

    public void setAtlag(double atlag) {
        this.atlag = atlag;
    }
    
    
}
