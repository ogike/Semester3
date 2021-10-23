/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myanimalfarm;

/**
 *
 * @author ogike
 */
public class Goat extends Animal {
    public Goat (String name, int weight){
        super(name, "K", weight);
    }

    @Override
    public boolean isMalnourished() {
        return (this.weight < 12);
    }
}
