package utalás;

public class Utalás {

    public static void main(String[] args) throws NemlétezõSzámlaKivétel, NincsFedezetKivétel, NegatívÖsszegKivétel {
        Bankfiók fiók = new Bankfiók();
        
        fiók.újSzámla(new Bankszámla("12345678", "Gipsz Jakab"));
        fiók.újSzámla(new Bankszámla("87654321", "Dzson Dó"));
        fiók.újSzámla(new Bankszámla("12348765", "Dzsén Dó"));
        fiók.befizet("12345678", 100000);
        fiók.befizet("87654321", 150000);
        fiók.befizet("12348765", 170000);
        egyenlegeketKiír(fiók, "kezdetben");
        
        fiók.átvezet("12345678", "87654321", 57891);
        egyenlegeketKiír(fiók, "12345678-ról 87654321-ra 57891 átvezetése után");
        
        fiók.átvezet("87654321", "12345678", 57891);
        egyenlegeketKiír(fiók, "87654321-ról 12345678-ra 57891 átvezetése után");
        
        try{
            fiók.átvezet("87654321", "12348765", 500000);
        }catch(NincsFedezetKivétel e) {
            System.out.println("Nincs fedezet.");
            System.out.println("");
        }
        
        egyenlegeketKiír(fiók, "miután nem volt fedezet az utalásra");
    }
    
    private static void egyenlegeketKiír(Bankfiók fiók, String cím) {
        System.out.println(cím);
        System.out.println("----------------------------");
        fiók.számlák().forEach(
            (számla) -> {
                 System.out.println(számla.tulajdonosNeve() + "\t" + számla.számlaszám() +
                         ": " + számla.egyenleg());
            }
        );
        System.out.println();
    }
    
}
