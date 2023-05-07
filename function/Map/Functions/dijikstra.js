import PriorityQueue from "../classes/queue.js";
import { isLineDiff, isInterchange, NoInterchange,getLine } from "../Functions/interchangeHandler.js";
import all from "../classes/All.js";
import printadj from "./debug.js";

function Init_with_zero(Node,times)
{
    times[Node] = 0;
}
 
// Initialize all node time other than SourceNode as INFINITE
function Init_with_Infinity(nodes, SourceNode,times)
{
    nodes.forEach(node => {
        console.log("node:", node);
        if (node != SourceNode) {
            times[node] = Infinity;
        }
    });
}
 
//Calculate time to reach the neighbor node from the current node.
function calTime(times, neighbor, currentNode)
{
    let time = times[currentNode] + neighbor.weight;
    return time;
}
 
//currentNode -----> neighbor.node
function setbackTrace(nextNode, currentNode,backTrace)
{
    backTrace[nextNode] = currentNode;
}

//update the new time taken to reach the nextNode from currentNode
function updateTime(currentNode, nextNode, time, times,backTrace)
{
    //update the new time taken to reach the neighbor node from currentNode
    times[nextNode] = time;
    //currentNode -----> neighbor.node
    setbackTrace(nextNode, currentNode,backTrace);
}

//dijkstra
function shortestpath (startNode, endNode, adjacencyList, nodes) {
    console.log(`Direction from ${startNode}------to------${endNode}`);
    
    let times = {};//store node:time
    let backTrace = {};//to keep tract of previous node
    let pq = new PriorityQueue();
    
    // Time taken by startNode to reach itself is always 0.
    Init_with_zero(startNode, times); 
    // Initialize all Time as INFINITE
    Init_with_Infinity(nodes, startNode,times);
    //inserting start node into the queue
    pq.enqueue([startNode, times[startNode]]);
    while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
         //shotestStep contains [node, time]
        console.log("shortestStep:", shortestStep);
        let currentNode = shortestStep[0];
        if (currentNode === endNode)
            break;
        //traverse current node neighbors.
        adjacencyList[currentNode].forEach(neighbor => {
        
            console.log(`neighbor:${neighbor.node}, currentNode: ${currentNode}`);
            //Calculate time to reach the neighbor node from the current node.
            let time = calTime(times,neighbor,currentNode);
            
            
            if (currentNode != startNode) {
                /*checking if there is a need to interchange by
                checking if there is a difference in line between current node and the neighbor node or
                current node and the previous node.
                backtrace[currentNode]----->currentNode------>neighbor.node */
                if (isLineDiff(currentNode, neighbor.node, backTrace[currentNode], adjacencyList)) {
                    time = isInterchange(currentNode, neighbor.node, backTrace[currentNode], adjacencyList, time);
                }
            }
            //if time to reach the neighbor node from currentNode is less than the previous recorded time.
            if (time < times[neighbor.node]) {
                //update the new time taken to reach the neighbor node from currentNode
                updateTime(currentNode, neighbor.node, time, times,backTrace);
                 // Adding the neighbor node to the priority queue ensures that the shortest path to that node is explored next.
                pq.enqueue([neighbor.node, time]);
            }
            /*****************************Example******************************* 
             * Suppose we are at Mayur Vihar phase-1 and we have to go trilokPuri
             * Ajacency list of Mayur Vihar would be [Nizamudin, AksharDham, Mayur Vihar Extention]
             * The node which takes shortest time will get in top*/
        })
    }
    console.log("done");
    var result = new all();
    var path = result.pathtoSend(startNode, endNode, backTrace, adjacencyList);
    console.log("printing path");
    for (var i = 0; i < path.length; i++){
        console.log(path[i]);
    }
    console.log("printing time");
    console.log(times[endNode]);
    result.Setpath(path);
    result.SetTime(times[endNode]);
    result.Fill_Lines(adjacencyList);
    return result;
}

export default shortestpath;