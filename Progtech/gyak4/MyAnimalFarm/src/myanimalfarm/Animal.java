/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myanimalfarm;

import java.util.List;

/**
 *
 * @author ogike
 */
public abstract class Animal {
    String name;
    String category;
    int weight;
    List<Integer> meals;

    protected Animal(String name, String category, int weight) {
        this.name = name;
        this.category = category;
        this.weight = weight;
    }
    
    public int getSumOfMeals(){
        return meals.stream().reduce(0, (a, b) -> a+b);
    }
    
    public void addMeal(int meal){
        meals.add(meal);
    }

    @Override
    public String toString() {
        return "Animal{" + "name=" + name + ", category=" + category + ", weight=" + weight + ", meals=" + meals + '}';
    }
    
    public abstract boolean isMalnourished();

    
}
