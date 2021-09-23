/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package employee;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author ogike
 */
public class Employee {

    private String firstName, lastName;
    private String job;
    private int    salary;

    public Employee(String firstName, String lastName, String job, int salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.salary = salary;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getJob() {
        return job;
    }

    public int getSalary() {
        return salary;
    }
    
    public void raiseSalary(int percent){
        salary = (int) (salary * (1.0 + percent / 100.0));
    }

    @Override
    public String toString() {
        return firstName + " " + lastName + " (" + job + ") fizetése: " + salary;
    }
    
    
    
    private static String readString(Scanner sc, String msg){
        System.out.print(msg);
        return sc.nextLine();
    }
    
    private static int readInt(Scanner sc, String msg){
        System.out.print(msg);
        int i = sc.nextInt(); //Sor végi ENTER-t pufferben hagyja! 
                              //zavarná a következő beolvasást
        sc.nextLine();
        return i;
    }
    
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Scanner: adsz neki egy input streamet, és abból olvas be
        Scanner sc = new Scanner(System.in);
        ArrayList<Employee> employees = new ArrayList<>();
        for(int i = 0; i < 3; i++){
            employees.add( readEmployee(sc) );
        }
        
        int raise = readInt(sc, "Emelés mértéke(%): ");
        String job = readString(sc, "Érintett beosztás: ");
    }

    private static Employee readEmployee(Scanner sc) {
        String firstName = readString(sc, "Vezetéknév: ");
        String lastName  = readString(sc, "Vezetéknév: ");
        String job       = readString(sc, "Vezetéknév: ");
        int    salary    = readInt   (sc, "Fizetés: ");
        Employee e = new Employee(firstName, lastName, job, salary);
        return e;
    }
    
}
