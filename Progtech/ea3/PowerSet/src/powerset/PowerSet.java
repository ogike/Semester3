package powerset;

import java.util.HashSet;
import java.util.Set;

public class PowerSet {

    public static void main(String[] args) {
        Set<Integer> intSet = new HashSet<>();
        for(int i = 1; i<=4 ; ++i) {
            intSet.add(i);
        }
        //hatvényhalmaz = halmazok halmaza
        Set<Set<Integer>> powerSet = new PowerSetProvider().getPowerSet(intSet);
        System.out.println(powerSet);
        System.out.println("Size: " + powerSet.size());
    }
}
