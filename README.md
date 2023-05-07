# Delhi Metro route api - using  Dijkstra's algorithm
This is a RESTful API built with Node.js, Express.js that allows users to calculate the shortest path between two metro stations. It is designed to be easy to use and can be integrated into any web application.
# Data References
Data about stations per line is downloaded from Wikipedia tables (https://![project](https://user-images.githubusercontent.com/114552954/236685910-6b7db885-a3f1-4aa7-a3a4-74d941a6cc32.png)
en.wikipedia.org/wiki/Red_Line_(Delhi_Metro)), etc. for each line.
# Description
This API calculates the shortest path between two metro stations in Delhi. It takes "From" and "To" as query parameters and returns the response in JSON format.

The API uses Dijkstra's algorithm to find the shortest path and stores the station with its corresponding time taken to reach that station from the starting station in the priority queue. This ensures that the shortest path is always dequeued first.

In addition to the shortest path, the API also provides details of stations where interchange is required and which line should be taken to reach the destination.
# Working
The implementation of this API is based on Graph and priority queue data structures. The graph is built with nodes and edges, where each node represents a metro station and each edge represents the connection between two stations with the weight of time taken to travel between them.

The Dijkstra's algorithm is used to calculate the shortest path between two stations, which is then stored in an array. This array is later traversed to determine the interchange stations, line endings, and metro lines.
# Hierarchy
function/Map/classes contains all the classes used in this program <br>
ls:<br>
->all.js: to send the end result <br>
->queue.js: To implement the priority queue<br>
->Graph.js: To implement the graph which stores the station map<br>
function/Map/functions contains the functions used to implement the program.<br> 
main.js-> where the server is made and API requests are handled.<br>
instruction.txt->contains the correct station names that should be used for the API calls.<br>
# Lines implemented
->Blue : 2.02 minutes<br>
->Blue Branch : 1.875 minutes<br>
->Magenta : 2.36 minutes<br>
->Yellow : 2.22 minutes<br>
->Red : 2.03 minutes<br>
->Green : 2.49 minutes<br>
->Green Branch : 1.33 minutes<br>
->Violet : 2.24 minutes<br>
->Pink : 2.69 minutes<br>
->Pink Branch : 2.43 minutes<br>
->Orange (Airport Express Line) : 5.2 minutes<br>
# Restful API endpoint
This endpoint calculates and returns the shortest path between two metro stations. It takes 'from' and 'to' as query parameters and returns the response in JSON format.

URL: /route<br>
Method: GET<br>
Required Query Parameters:<br>
from - Starting station name<br>
to - Destination station name<br>
Response:<br>
mydata - An object containing the shortest path and details of interchange stations and lines to be taken to reach the destination station.<br>
## Example Usage:<br>
/route?from=Akshardham&to=Central%20Secretariat<br>
``` 
{
mydata :
InterchangeStations:['Mandi House']
line1: ['blue']
line2: ['violet']
lineEnds: (2) ['Dwarka Sector 21', 'Raja Nahar Singh']
path: (7) ['Akshardham', 'Yamuna Bank', 'Indraprastha', 'Pragati Maidan', 'Mandi House', 'Janpath', 'Central Secretariat']
time: 21.560000000000002
}
```

### Notes:
If no input is given for either from or to, the response will be "No input given".
To avoid errors, please refer to the instruction.txt file for correct spelling and formatting of station names.


