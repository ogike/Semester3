package dijkstra;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class DirectedGraph {
    private final Map<String, Node> nodes;
    private final Collection<DirectedEdge> edges;
    private final Map<Node, Collection<DirectedEdge>> outgoingEdgesMap;
    
    public DirectedGraph() {
        this.nodes = new HashMap<>();
        this.edges = new ArrayList<>();
        this.outgoingEdgesMap = new HashMap<>();
    }
   
    public Collection<Node> getNodes() {
        return this.nodes.values();
    }

    public Collection<DirectedEdge> getEdges() {
        return this.edges;
    }
    
    public void addNode(Node node) {
        this.nodes.put(node.getNodeName(), node);
        this.outgoingEdgesMap.put(node, new ArrayList<>());
    }
    
    public void removeNode(Node node) {
        this.nodes.remove(node.getNodeName());
    }
    
    public void addDirectedEdge(DirectedEdge edge) throws NotANodeOfThisGraphException {
        if(edge != null) {
            if(!this.nodes.values().contains(edge.getSourceNode())) {
                throw new NotANodeOfThisGraphException(edge.getSourceNode(), this);
            }
            
            if(!this.nodes.values().contains(edge.getTargetNode())) {
                throw new NotANodeOfThisGraphException(edge.getTargetNode(), this);
            }
            this.edges.add(edge);
            Collection<DirectedEdge> outgoingEdges = this.outgoingEdgesMap.get(edge.getSourceNode());
            outgoingEdges.add(edge);
        }
    }
    
    public void createDirectedEdgeBetweenNodes(Node sourceNode, Node targetNode, double weight) 
            throws NotANodeOfThisGraphException {
        
        addDirectedEdge(new DirectedEdge(sourceNode, targetNode, weight));
    }
    
    public void createDirectedEdgeBetweenNodes(String sourceNodeName, String targetNodeName, double weight) 
            throws NotANodeOfThisGraphException {
        
        Node sourceNode = getANodeByName(sourceNodeName);
        Node targetNode = getANodeByName(targetNodeName);
        addDirectedEdge(new DirectedEdge(sourceNode, targetNode, weight));
    }
    
    public Collection<Node> getNeighboursOfNode(Node node) throws NotANodeOfThisGraphException {
        if(!this.nodes.values().contains(node)) {
            throw new NotANodeOfThisGraphException(node, this);
        }
        
        return this.outgoingEdgesMap.
                get(node).
                stream().
                map(DirectedEdge::getTargetNode).
                collect(Collectors.toList());
    }
    
    
    public Collection<DirectedEdge> getOutgoingEdges(Node node) throws NotANodeOfThisGraphException {
        if(!this.nodes.values().contains(node)) {
            throw new NotANodeOfThisGraphException(node, this);
        }
        
        return this.outgoingEdgesMap.get(node);
    }
    
    public Node getANodeByName(String name) throws NotANodeOfThisGraphException{
        Node node = this.nodes.get(name);
        if(node == null) {
            throw new NotANodeOfThisGraphException(name, this);
        }
        return node;
    }
    
    
}
