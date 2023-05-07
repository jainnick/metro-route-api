function printadj(adjacencyList, station)
{
    if (adjacencyList[station] == undefined)
    {
        console.log("station is undefined");
        return;
    }
    console.log("--Adjacency List Of " + station + "--")
    for (var i = 0; i < adjacencyList[station].length; i++)
      console.log(this.adjacencyList[station][i].line);
}
export default printadj;