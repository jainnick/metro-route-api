import shortestPath from "../Functions/dijikstra.js";
class Graph
{
    constructor()
    {
        this.nodes = [];
        this.adjacencyList = {};
    }
    //insert node to graph 
    insertNode(node)
    {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }

    insertEdge(node1, node2, weight, lineColor)
    {
        console.log(node1,node2);
        this.adjacencyList[node1].push({ node: node2, weight: weight, line: lineColor });
        this.adjacencyList[node2].push({ node: node1, weight: weight, line: lineColor });
    }
    insertDirectedEdge(node1, node2, weight, lineColor)
    {
        this.adjacencyList[node1].push({ node: node2, weight: weight, line: lineColor });
    }
    dijkstra(startNode, endNode)
    {
        return shortestPath(startNode, endNode, this.adjacencyList, this.nodes)
    }
   
    printGraph(station)
    {
        console.log(`--Adjacency List Of ${station}--`);
        for (var i = 0; i < this.adjacencyList[station].length; i++){
            console.log(`${this.adjacencyList[station][i].node}--${this.adjacencyList[station][i].weight}--${this.adjacencyList[station][i].line}`);
        }
    }
    
}

export default Graph;
