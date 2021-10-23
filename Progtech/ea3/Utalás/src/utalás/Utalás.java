package utal�s;

public class Utal�s {

    public static void main(String[] args) throws Neml�tez�Sz�mlaKiv�tel, NincsFedezetKiv�tel, Negat�v�sszegKiv�tel {
        Bankfi�k fi�k = new Bankfi�k();
        
        fi�k.�jSz�mla(new Banksz�mla("12345678", "Gipsz Jakab"));
        fi�k.�jSz�mla(new Banksz�mla("87654321", "Dzson D�"));
        fi�k.�jSz�mla(new Banksz�mla("12348765", "Dzs�n D�"));
        fi�k.befizet("12345678", 100000);
        fi�k.befizet("87654321", 150000);
        fi�k.befizet("12348765", 170000);
        egyenlegeketKi�r(fi�k, "kezdetben");
        
        fi�k.�tvezet("12345678", "87654321", 57891);
        egyenlegeketKi�r(fi�k, "12345678-r�l 87654321-ra 57891 �tvezet�se ut�n");
        
        fi�k.�tvezet("87654321", "12345678", 57891);
        egyenlegeketKi�r(fi�k, "87654321-r�l 12345678-ra 57891 �tvezet�se ut�n");
        
        try{
            fi�k.�tvezet("87654321", "12348765", 500000);
        }catch(NincsFedezetKiv�tel e) {
            System.out.println("Nincs fedezet.");
            System.out.println("");
        }
        
        egyenlegeketKi�r(fi�k, "miut�n nem volt fedezet az utal�sra");
    }
    
    private static void egyenlegeketKi�r(Bankfi�k fi�k, String c�m) {
        System.out.println(c�m);
        System.out.println("----------------------------");
        fi�k.sz�ml�k().forEach(
            (sz�mla) -> {
                 System.out.println(sz�mla.tulajdonosNeve() + "\t" + sz�mla.sz�mlasz�m() +
                         ": " + sz�mla.egyenleg());
            }
        );
        System.out.println();
    }
    
}
