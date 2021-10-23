package dijkstra;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class DijkstraAlgorithm {
    private final DirectedGraph graph;
    private Map<Node, Node> prevNodes;
    private Map<Node, Double> distances;
    private PriorityQueue<Node> unfinishedNodes;
            
    public DijkstraAlgorithm(DirectedGraph graph) {
        this.graph = graph;
    }
    
    public void runFromStartingNode(Node start) 
            throws NotANodeOfThisGraphException, NegativeEdgeWeightException {
        
        checkIfExistsAnEdgeWithNegativeWeight();
        init(start);
        
        while(!unfinishedNodes.isEmpty()) {
            Node nodeWithMinDistance = unfinishedNodes.poll();
            Double minDistance = distances.get(nodeWithMinDistance);
            
            for(DirectedEdge outgoingEdge : graph.getOutgoingEdges(nodeWithMinDistance)) {
                Double distanceThroughThisNode = minDistance + outgoingEdge.getWeight();
                Node neighbour = outgoingEdge.getTargetNode();
                if(distanceThroughThisNode < distances.get(neighbour)) {
                    updatePath(nodeWithMinDistance, neighbour, distanceThroughThisNode);
                }
            }
        }
    }
    
    private void init(Node start) {
        this.prevNodes = new HashMap<>();
        this.distances = new HashMap<>();
        this.unfinishedNodes = new PriorityQueue(graph.getNodes().size(), new Comparator<Node>() {
            @Override
            public int compare(Node n1, Node n2) {
              return distances.get(n1).compareTo(distances.get(n2));
            }
        });
         
        this.graph.getNodes().forEach( node -> {
            prevNodes.put(node, null);
            distances.put(node, Double.POSITIVE_INFINITY);
            unfinishedNodes.add(node);
        });
        
        distances.put(start, 0.0);
    }

    private void updatePath(Node nodeWithMinDistance, Node neighbour, Double distance) {
        distances.put(neighbour, distance);
        prevNodes.put(neighbour, nodeWithMinDistance);
        //remove and reinsert neighbour from unfinished nodes queue to update it's priority
        unfinishedNodes.remove(neighbour);
        unfinishedNodes.add(neighbour);
    }

    public Map<Node, Node> getPrevNodes() {
        return prevNodes;
    }

    public Map<Node, Double> getDistances() {
        return distances;
    }

    private void checkIfExistsAnEdgeWithNegativeWeight() throws NegativeEdgeWeightException{
        for(DirectedEdge edge: this.graph.getEdges()) {
            if(edge.getWeight() < 0.0) {
                throw new NegativeEdgeWeightException(edge, graph);
            }
        }
    }
    
    
} 
