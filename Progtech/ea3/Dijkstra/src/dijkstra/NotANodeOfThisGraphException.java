package dijkstra;

public class NotANodeOfThisGraphException extends Exception {

    private final Node node;
    private final DirectedGraph graph;
    
    public NotANodeOfThisGraphException(Node node, DirectedGraph graph) {
        this.node = node;
        this.graph = graph;
    }
    
    public NotANodeOfThisGraphException(String nodeName, DirectedGraph graph) {
        this.node = new Node(nodeName);
        this.graph = graph;
    }

    public Node getNode() {
        return this.node;
    }

    public DirectedGraph getGraph() {
        return this.graph;
    }
    
    
    
}
