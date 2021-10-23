package dijkstra;

public class NegativeEdgeWeightException extends Exception {
    private final DirectedEdge edge;
    private final DirectedGraph graph;
    
    public NegativeEdgeWeightException(DirectedEdge edge, DirectedGraph graph) {
        this.edge = edge;
        this.graph = graph;
    }

    public DirectedEdge getEdge() {
        return edge;
    }

    public DirectedGraph getGraph() {
        return graph;
    }
}
