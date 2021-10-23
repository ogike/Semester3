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
public class Cow extends Animal {
    public Cow (String name, int weight){
        super(name, "T", weight);
    }

    @Override
    public boolean isMalnourished() {
        return (this.weight < 100);
    }
    
    
}
