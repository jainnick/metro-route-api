//Class to send as result
import { isLineDiff,getLine, NoInterchange } from "../Functions/interchangeHandler.js";
import getLastStation from "../Functions/getlines.js";
class all
{
       constructor() {
        this.line1 = [];
        this.line2 = [];
        this.InterchangeStations = [];
        this.lineEnds = [];
        this.path;
        this.time;
  }
  pathtoSend(startNode, endNode, backTrace,adjacencyList)
  {
    //contains the shortest path from the startNode to endNode.
    let path = [endNode]; //initialize path array with endNode as its first element
    let lastStep = endNode;

      console.log(`startNode: ${startNode},endNode: ${endNode},backTrace: ${backTrace}`);
      while (lastStep!==undefined && lastStep !=startNode) {
          console.log(`laststep: ${lastStep},startNode: ${startNode}`);
          console.log("linediff");
        if (isLineDiff( backTrace[lastStep],lastStep, backTrace[backTrace[lastStep]],adjacencyList))
        {
            if (backTrace[lastStep] == startNode)
                ;
            else if (NoInterchange(lastStep, backTrace[lastStep], backTrace[backTrace[lastStep]]))
            {
                ;
            }
            else
            {
                var firstLine = getLine(backTrace[lastStep], backTrace[backTrace[lastStep]],adjacencyList);
                var secondLine = getLine(lastStep, backTrace[lastStep],adjacencyList);
                var interchange_at = backTrace[lastStep];
                this.line1.unshift(firstLine);
                this.line2.unshift(secondLine); //Inserts new elements at the start of an array
                this.InterchangeStations.unshift(interchange_at);
                console.log("printing interchange stations...");
                for (var i = 0; i < this.InterchangeStations.length; i++)
                {
                    console.log(this.InterchangeStations[i]);
                }
            }
        }
        path.unshift(backTrace[lastStep]);
        lastStep = backTrace[lastStep];
      }
     return path;
    }

    Fill_Lines(adjacencyList)
    {
        if (this.getInterchangesize == 0)
        {
            this.line1[0] = getLine(this.path[0], this.path[1], adjacencyList);
        }
        this.lineEnds = getLastStation(this.path, this.InterchangeStations, this.line1, this.line2);
        console.log(this.time);
    }

    Setpath(path)
    {
        this.path = path;
    }
    SetTime(time)
    {
        this.time = time;
    }
    getInterchange()
    {
        return this.InterchangeStations;
    }
    getPath()
    {
        return this.path;
    }
    getLine1()
    {
        return this.line1;
    }
    getLine2()
    {
        return this.line2;
    }
    getTime()
    {
        return this.time;
    }
    getInterchangesize()
    {
        return this.InterchangeStations.length;
    }
}

export default all;

