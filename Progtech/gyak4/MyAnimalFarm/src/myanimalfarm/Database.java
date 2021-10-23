/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myanimalfarm;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author ogike
 */
public class Database {
    private ArrayList<Animal> animals;

    public Database() {
        animals = new ArrayList<>();
    }
    
    public void read (String fileName) throws FileNotFoundException {
        Scanner sc = new Scanner(new BufferedReader(new FileReader(fileName)));
        int numOfAnimals = sc.nextInt();
        
        while(sc.hasNext()){
            Animal curAnimal;
            String type = sc.next();
            switch (type) {
                case "T":
                    curAnimal = new Cow( sc.next(), sc.nextInt());
                    break;
                case "L":
                    curAnimal = new Horse( sc.next(), sc.nextInt());
                    break;
                case "K":
                    curAnimal = new Goat( sc.next(), sc.nextInt());
                    break;
                case "E":
                    curAnimal = new Emu( sc.next(), sc.nextInt());
                    break;
                default:
                    throw new IllegalArgumentException();
            }
            int numOfMeals = sc.nextInt();
            for(int i = 0; i < numOfMeals; i++){
                curAnimal.addMeal( sc.nextInt() );
            }
            animals.add(curAnimal);
        }
    }
}
