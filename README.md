# Delhi Metro route api
This is a RESTful API built with Node.js, Express.js that allows users to calculate the shortest path between two metro stations. It is designed to be easy to use and can be integrated into any web application.
# Data References
Data about stations per line is downloaded from Wikipedia tables (https://en.wikipedia.org/wiki/Red_Line_(Delhi_Metro)), etc. for each line.
# Description
This API calculates the shortest path between two metro stations in Delhi. It takes "From" and "To" as query parameters and returns the response in JSON format.

The API uses Dijkstra's algorithm to find the shortest path and stores the station with its corresponding time taken to reach that station from the starting station in the priority queue. This ensures that the shortest path is always dequeued first.

In addition to the shortest path, the API also provides details of stations where interchange is required and which line should be taken to reach the destination.
# Working
The implementation of this API is based on Graph and priority queue data structures. The graph is built with nodes and edges, where each node represents a metro station and each edge represents the connection between two stations with the weight of time taken to travel between them.

The Dijkstra's algorithm is used to calculate the shortest path between two stations, which is then stored in an array. This array is later traversed to determine the interchange stations, line endings, and metro lines.
# Hierarchy
function/Map/classes contains all the classes used in this program 
ls:
->all.js: to send the end result 
->queue.js: To implement the priority queue
->Graph.js: To implement the graph which stores the station map
function/Map/functions contains the functions used to implement the program. 
main.js-> where the server is made and API requests are handled.

# Lines implemented
->Blue : 2.02 minutes
->Blue Branch : 1.875 minutes
->Magenta : 2.36 minutes
->Yellow : 2.22 minutes
->Red : 2.03 minutes
->Green : 2.49 minutes
->Green Branch : 1.33 minutes
->Violet : 2.24 minutes
->Pink : 2.69 minutes
->Pink Branch : 2.43 minutes
->Orange (Airport Express Line) : 5.2 minutes
# Restful API endpoint
This endpoint calculates and returns the shortest path between two metro stations. It takes 'from' and 'to' as query parameters and returns the response in JSON format.

URL: /route
Method: GET
Required Query Parameters:
from - Starting station name
to - Destination station name
Response:
mydata - An object containing the shortest path and details of interchange stations and lines to be taken to reach the destination station.
Example Usage:
/api/route?from=Central%20Secretariat&to=Rajiv%20Chowk

Note:
If no input is given for either from or to, the response will be "No input given".


