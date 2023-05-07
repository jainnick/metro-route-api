import { lineChoose, metrolines } from "../../main.js";


function branchHandler(currentLine, InterchangeStations, lastStations)
{
    //Bluebranch at Yamuna Bank Handler: vaishali--to-->Yamuna Bank--to-->Dwarka
    if (currentLine == 'bluebranch' && InterchangeStations[0] == 'Yamuna Bank')
    {
        lastStations.push('Dwarka Sector 21');
        isBranch = true;
    }
    //Greenbranch at Ashok Park Main Handler
    else if (currentLine == 'greenbranch' && InterchangeStations[0] == 'Ashok Park Main') {
        lastStations.push('Brigadier Hoshiyar Singh');
        isBranch = true;
    }
}

function getLastStation(path, InterchangeStations, line1, line2)
{
    var Line
    var currentLine
    var lastStations = [];
    currentLine = line1[0];
    if (currentLine == 'bluebranch' || currentLine == 'greenbranch') {
        branchHandler(currentLine, InterchangeStations, lastStations);
    } 
    else {
        Line = lineChoose(currentLine)
        lastStations.push(getLastStationFromPath(Line,path,InterchangeStations));
    }

    if (line2.length == 0) {
        return lastStations;
    }
    for (var i = 0; i < line2.length; i++){
        currentLine = line2[i];
        Line = lineChoose(currentLine);
        lastStations.push(getLastStationFromInterchange(Line,path,InterchangeStations[i],InterchangeStations[i+1]));
    }
    return lastStations;
}
function getLastStationFromPath(line, path, InterchangeStations) {
    var startPosition = 1000;
    var endPosition = 1000;
    if (line == 0)
        return 0;
    for (let i = 0; i <= line.length; i++) {
        if (line[i] == path[0]) {
            startPosition = i;
        }
        if (InterchangeStations.length == 0) {
            if (line[i] == path[path.length - 1]) {
                endPosition = i;
            }
        }
        else if (line[i] == InterchangeStations[0]) {
            endPosition = i;
        }
        return comparePosforStation(startPosition, endPosition, line)
    }
}

function getLastStationFromInterchange(line, path, InterchangeStation, interchangenextStation) {
    var startPosition = 1000;
    var endPosition = 1000;
    if (line == 0)
        return 0;
    
    for (let j = 0; j <= line.length; j++) {
        if (line[j] == InterchangeStation)
            startPosition = j;
        if (interchangenextStation != undefined) {
            if (line[j] == interchangenextStation) {
                endPosition = j;
            }
        }
        else {
            if (line[j] == path[path.length - 1])
                endPosition = j;
        }  
    }
    return comparePosforStation(startPosition, endPosition, line); 
}

function comparePosforStation(startPosition, endPosition, line) {
    //Out of line start handler
    if (startPosition == 1000) {
        if (line == metrolines.blueline)
            return 'Dwarka Sector 21'
        else if (line == metrolines.bluebranchline)
            return 'Vaishali'
        else if (line == metrolines.greenline)
            return 'Brigadier Hoshiyar Singh'
        else if (line == metrolines.greenbranchline)
            return 'Kirti Nagar'
    }
    if (endPosition == 1000) {
        if (line == metrolines.blueline)
            return 'Vaishali';
        else if (line == metrolines.bluebranchline)
            return 'Dwarka Sector 21'
        else if (line == metrolines.greenline)
            return 'Kirti Nagar'
        else if (line == metrolines.greenbranchline)
            return 'Brigadier Hoshiyar Singh'
    }
    if (endPosition < startPosition) {
        if (line == metrolines.bluebranchline)
            return 'Dwarka Sector 21'
        if (line == metrolines.greenbranchline)
            return 'Brigadier Hoshiyar Singh'
        else
            return line[0];
    }
    else
        return line[line.length - 1];
}
export default getLastStation