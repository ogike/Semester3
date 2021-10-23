package dijkstra;

public class DirectedEdge {
    private final Node sourceNode;
    private final Node targetNode;
    private final Double weight;
    
    public DirectedEdge(Node sourceNode, Node targetNode, Double weight) {
        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
        this.weight = weight;
    }

    public Node getSourceNode() {
        return this.sourceNode;
    }

    public Node getTargetNode() {
        return this.targetNode;
    }

    public Double getWeight() {
        return this.weight;
    }
    
    
}
