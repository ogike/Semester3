package dijkstra;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

public class Dijkstra {

    public static void main(String[] args) throws NotANodeOfThisGraphException, NegativeEdgeWeightException {
       DirectedGraph graph = new DirectedGraph();
       graph.addNode(new Node("A"));
       graph.addNode(new Node("B"));
       graph.addNode(new Node("C"));
       graph.addNode(new Node("D"));
       graph.addNode(new Node("E"));
       graph.addNode(new Node("F"));
       graph.createDirectedEdgeBetweenNodes("A", "B", 6.0);
       graph.createDirectedEdgeBetweenNodes("A", "C", 2.0);
       graph.createDirectedEdgeBetweenNodes("A", "D", 7.0);
       graph.createDirectedEdgeBetweenNodes("B", "D", 5.0);
       graph.createDirectedEdgeBetweenNodes("C", "D", 1.0);
       graph.createDirectedEdgeBetweenNodes("C", "E", 8.0);
       graph.createDirectedEdgeBetweenNodes("D", "E", 4.0);
       graph.createDirectedEdgeBetweenNodes("B", "D", 5.0);
       graph.createDirectedEdgeBetweenNodes("F", "A", 3.0);
       graph.createDirectedEdgeBetweenNodes("F", "B", 4.0);
       DijkstraAlgorithm dijkstra = new DijkstraAlgorithm(graph);
       dijkstra.runFromStartingNode(graph.getANodeByName("F"));
       
       System.out.println("Shortest paths from node F: ");
       for(Map.Entry<Node, Double> entry : dijkstra.getDistances().entrySet()) {
           Double distance = entry.getValue();
           Node destinationNode = entry.getKey();
           Node currNode = destinationNode;
           Deque<String> path = new ArrayDeque<>();
           while(currNode != null) {
               path.push(currNode.getNodeName());
               currNode = dijkstra.getPrevNodes().get(currNode);
           }           
           System.out.println("Path to node " + destinationNode.getNodeName() + " with " + distance + " weight: " + path);
       }
       
        System.out.println("---------------");
        System.out.println("After adding a new edge with a negative weight, we try to run the algoritm on the"
                + " modified graph.");
        System.out.println("---------------");
        try {
            graph.createDirectedEdgeBetweenNodes("B", "D", -0.5);
            dijkstra.runFromStartingNode(graph.getANodeByName("F"));
        } catch (NegativeEdgeWeightException e) {
            System.out.println("Error: negative edge weight.");
        }
       
    }
    
}
