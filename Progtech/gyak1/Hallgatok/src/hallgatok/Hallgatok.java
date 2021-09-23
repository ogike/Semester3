/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hallgatok;

import hallgatok.Hallgato;
import java.util.ArrayList;
import java.util.Scanner;


/**
 *
 * @author ogike
 */
public class Hallgatok {

    private static ArrayList<Hallgato> hallgatok;
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        hallgatok = new ArrayList<>();
        
        System.out.print("Hány hallgatót akarsz beírni?: ");
        int numOfHallgatok = sc.nextInt();
        sc.nextLine(); //emptying the buffer after an int
        for (int i = 0; i < numOfHallgatok; i++) {
            hallgatok.add( readnewHallgato(sc) );
        }
        
        //if numOfHallgatok == 0 ????
        
        //melyik hallgatónak van a legjobb és a legrosszabb átlaga
        //  (programozási tételekkel)!
        double legjobbVal  = hallgatok.get(0).getAtlag();
        int    legjobbInd  = 0;
        double legrosszVal = hallgatok.get(0).getAtlag();
        int    legrosszInd = 0;

        Hallgato cur;
        for (int i = 1; i < numOfHallgatok; i++) {
            cur = hallgatok.get(i);
            if(cur.getAtlag() > legjobbVal){
                legjobbVal = cur.getAtlag();
                legjobbInd = i;
            }
            if(cur.getAtlag() < legrosszVal){
                legrosszVal = cur.getAtlag();
                legrosszInd = i;
            }
        }
        
        System.out.println("A legjobb átlaga" 
                           + hallgatok.get(legjobbInd) + "-nek van");
        System.out.println("A legrosszabb átlaga" 
                           + hallgatok.get(legrosszInd)+ "-nek van");

    }
    
    public static Hallgato readnewHallgato(Scanner sc) {
        System.out.println("Következő hallgató adatai:");
        System.out.print("\tNév: ");
        String nev = sc.nextLine();
        
        System.out.print("\tNemzetiség: ");
        String nat = sc.nextLine();
        
        System.out.print("\tÁtlag: ");
        double avg = sc.nextInt();

        return new Hallgato (nev, nat, avg);
    }
    
}
