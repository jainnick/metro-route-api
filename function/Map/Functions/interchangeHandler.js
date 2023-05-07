import printadj from "./debug.js";

function getLine(station1, station2, adjacencyList)
{
    console.log(`station1: ${station1}, station2:${station2}`);
    var staList1 = adjacencyList[station1];
    console.log(staList1);
    var staList2 = adjacencyList[station2];
    if (staList1 == undefined || staList2 == undefined)
        return -2;
        //finding the station2 in the adjacency list of station1 as station2 is neigbor of station1
        for (let i = 0; i < adjacencyList[station1].length; i++)
        {
            console.log(`ajacencyList[${station1}]-->${adjacencyList[station1][i].node}`);
            if (adjacencyList[station1][i].node == station2)
            {
                var Lines = adjacencyList[station1][i].line;
                console.log("line: ",Lines);
                return Lines;
            }
        }
    for (let i = 0; i < adjacencyList[station2].length; i++)
        {
            console.log(`ajacencyList[${station2}]-->${adjacencyList[station2][i].node}`);
            if (adjacencyList[station2][i].node == station1)
            {
                var Line = adjacencyList[station2][i].line;
                console.log("line: ",Line);
                return 
            }
        }
    return -1;
}
//backTrace[lastStep],lastStep, backTrace[backTrace[lastStep]]
function isLineDiff(currentNode, nextNode, prevNode,adjacencyList)
{
    console.log("isLineDiff");
    console.log(`currentNode:${currentNode},nextNode:${nextNode},prevNode:${prevNode}`);
    var ans = getLine(currentNode, nextNode, adjacencyList) != getLine(currentNode, prevNode, adjacencyList);
    console.log(ans);
    return ans
}


function isInterchange(currentNode, nextNode, prevNode,adjacencyList,time)
{
    console.log(`isInterchange--->currentNode:${currentNode},nextNode:${nextNode},prevNode:${prevNode},time:${time}`);
        //Yamuna bank to Indraprastha (blue line) 
        //Yamuna bank to Lakshmi Nagar (Blue Branch line)
    if (currentNode == 'Yamuna Bank' && nextNode == 'Indraprastha' && prevNode == 'Laxmi Nagar')
        {
            //No interchange needed because they are in same Line i.e. Blue
                time = time + 0;
        }
    else if (currentNode == 'Yamuna Bank' && nextNode == 'Laxmi Nagar' && prevNode == 'Indraprastha')
        {
            //No interchange needed because they are in same Line i.e. Blue
                time = time + 0;
        }
        //Dhaula Kuan - Durgabai Deshmukh South Campus Handler
    else if (getLine(currentNode, nextNode, adjacencyList) == "1.2km Skywalk" || getLine(currentNode, prevNode, adjacencyList) == "1.2km Skywalk")
        {
                time = time + 0;
        }
        //Noida Sector 51 - Noida Sector 52 Handler
    else if (getLine(currentNode, nextNode, adjacencyList) == "300m Walkway/Free e-Rickshaw" || getLine(currentNode, prevNode, adjacencyList) == "300m Walkway/Free e-Rickshaw")
        {
                time = time + 0;
        }
        //Ashok Park Main handler
    else if (currentNode == 'Ashok Park Main' && nextNode == 'Punjabi Bagh' && prevNode == 'Satguru Ram Singh Marg')
        {
                time = time + 0;
        }
    else if (currentNode == 'Ashok Park Main' && nextNode == 'Satguru Ram Singh Marg' &&prevNode == 'Punjabi Bagh')
        {
                time = time + 0;
        } 
    //else there is an interchange and it takes 9 minutes to change the line.
        else
        {
                time = time + 9;
        }
    return time;
}

function NoInterchange(lastStep,secondLastStep,ThirdLastStep, SourceNode)
{
    //ThirdlastStep---->secondLastStep---->lastStep
    //Nothing will happen in these cases because no interchange happened
    if (secondLastStep == SourceNode) {
        return true;
    }
    else if (secondLastStep == 'Yamuna Bank' && lastStep == 'Indraprastha' && ThirdLastStep == 'Laxmi Nagar') {
        return true;
    }
    else if (secondLastStep == 'Yamuna Bank' && lastStep == 'Laxmi Nagar' && ThirdLastStep == 'Indraprastha') {
        return true;
    }
    //Ashok Park Main Handler
    else if (secondLastStep == 'Ashok Park Main' && lastStep == 'Punjabi Bagh' && ThirdLastStep == 'Satguru Ram Singh Marg') {
        return true;
    }
    else if (secondLastStep == 'Ashok Park Main' && lastStep == 'Satguru Ram Singh Marg' && ThirdLastStep == 'Punjabi Bagh') {
        return true;
    }
    return false;
}
export { isLineDiff, isInterchange,NoInterchange,getLine};