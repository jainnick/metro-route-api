import express from 'express';
import cors from 'cors';
import Graph from "./Map/classes/Graph.js";
import blue from "./../lines/blue.json" assert {type: "json"};
import bluebranch from "./../lines/blueBranch.json" assert {type: "json"};
import red from "./../lines/red.json" assert {type: "json"};
import pink from "./../lines/pink.json" assert {type: "json"};
import pinkBranch from "./../lines/pinkBranch.json" assert {type: "json"};
import yellow from "./../lines/yellow.json" assert {type: "json"};
import green from "./../lines/green.json" assert {type: "json"};
import greenBranch from "./../lines/greenBranch.json" assert {type: "json"};
import orange from "./../lines/orange.json" assert {type: "json"};
import voilet from "./../lines/voilet.json" assert {type: "json"};
import magenta from "./../lines/magenta.json" assert {type: "json"};

const app = express();

app.use(cors());

//Declare metro line arrays globally
var metrolines = {
  blueline: [],
  bluebranchline: [],
  magentaline: [],
  yellowline: [],
  violetline: [],
  redline: [],
  greenline: [],
  greenbranchline: [],
  pinkline: [],
  pinkbranchline: [],
  orangeline: [],
  aqualine: [],
  greyline: [],
  rapidline: [],
  rapidloopline: [],
}

//Chooses station array based on input
function lineChoose(linein) {
  var line = []
  switch (linein) {
    case 'blue':
      line = metrolines.blueline;
      break
    case 'bluebranch':
      line = metrolines.bluebranchline;
      break;
    case 'magenta':
      line = metrolines.magentaline;
      break
    case 'yellow':
      line = metrolines.yellowline;
      break;
    case 'violet':
      line = metrolines.violetline;
      break;
    case 'red':
      line = metrolines.redline;
      break;
    case 'green':
      line = metrolines.greenline;
      break;
    case 'greenbranch':
      line = metrolines.greenbranchline;
      break;
    case 'pink':
      line = metrolines.pinkline;
      break;
    case 'pinkbranch':
      line = metrolines.pinkbranchline;
      break;
    case 'orange':
      line = metrolines.orangeline;
      break;
    case 'aqua':
      line = metrolines.aqualine;
      break;
    case 'grey':
      line = metrolines.greyline;
      break;
    case 'rapid':
      line = metrolines.rapidline;
      break;
    case 'rapidloop':
      line = metrolines.rapidloopline;
      break;
    default:
      line = 0;
      break;
  }
  return line;
}
    
function importlines() {
  //
  //METRO LINES
  //



  //Blue Line
    
  for (var i = 0; i < blue.length; i++) {
       
    metrolines.blueline[i] = blue[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.blueline.length; i++) {
    map.insertNode(metrolines.blueline[i]);
  }
  for (var i = 0; i < (metrolines.blueline.length - 1); i++) {
    map.insertEdge(metrolines.blueline[i], metrolines.blueline[i + 1], 2.02, "blue");
  }
  for (var i = 0; i < (metrolines.blueline.length - 1); i++) {
    console.log(metrolines.blueline[i]);
    map.printGraph(metrolines.blueline[i]);
  }



  //bluebranch line
  for (var i = 0; i < bluebranch.length; i++) {

    metrolines.bluebranchline[i] = bluebranch[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.bluebranchline.length; i++) {
    //Skip Interchange
    if (metrolines.bluebranchline[i] == 'Yamuna Bank')
      continue;
    else
      map.insertNode(metrolines.bluebranchline[i]);
  }

  for (var i = 0; i < (metrolines.bluebranchline.length - 1); i++) {
    console.log("bluebranch",metrolines.bluebranchline[i], metrolines.bluebranchline[i + 1]);
    map.insertEdge(metrolines.bluebranchline[i], metrolines.bluebranchline[i + 1], 1.875, "bluebranch");
  }
  


  //Magenta 

  for (var i = 0; i < magenta.length; i++) {
    metrolines.magentaline[i] = magenta[i]["25"];
  }
  for (var i = 0; i < metrolines.magentaline.length; i++) {
    //Skip Interchange
    if (metrolines.magentaline[i] == 'Janakpuri West')
      continue;
    if (metrolines.magentaline[i] == 'Botanical Garden')
      continue;
    else
      map.insertNode(metrolines.magentaline[i]);
  }
  for (var i = 0; i < (metrolines.magentaline.length - 1); i++) {
    console.log("magenta",metrolines.magentaline[i] + " " + metrolines.magentaline[i+1])
    map.insertEdge(metrolines.magentaline[i], metrolines.magentaline[i + 1], 2.36, "magenta");
  }



  //Yellow Line

  for (var i = 0; i <yellow.length; i++) {
    metrolines.yellowline[i] = yellow[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.yellowline.length; i++) {
    //yellowline[i] == 'Hauz Khas' ||
    if ( metrolines.yellowline[i] == 'Rajiv Chowk'|| metrolines.yellowline[i] == 'Hauz Khas')
      continue;
    else
      map.insertNode(metrolines.yellowline[i]);
  }
  for (var i = 0; i < (metrolines.yellowline.length - 1); i++) {
    map.insertEdge(metrolines.yellowline[i], metrolines.yellowline[i + 1], 2.22, "yellow");
  }
  for (var i = 0; i < (metrolines.yellowline.length - 1); i++) {
    console.log(metrolines.yellowline[i]);
   map.printGraph(metrolines.yellowline[i]);
  }


  //Violet Line

  for (var i = 0; i < voilet.length; i++) {

    metrolines.violetline[i] = voilet[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.violetline.length; i++) {
    if (metrolines.violetline[i] == 'Kashmere Gate' || metrolines.violetline[i] == 'Mandi House' || metrolines.violetline[i] == 'Central Secretariat' || metrolines.violetline[i] == 'Kalkaji Mandir')
      continue;
    else
      map.insertNode(metrolines.violetline[i]);
  }
  for (var i = 0; i < (metrolines.violetline.length - 1); i++) {
    console.log("voiletline",metrolines.violetline[i] + ' ' + metrolines.violetline[i + 1]);
   map.insertEdge(metrolines.violetline[i], metrolines.violetline[i + 1], 2.24, "violet");
  }


  //red Line
  
  for (var i = 0; i < red.length; i++) {
    metrolines.redline[i] = red[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.redline.length; i++) {
    if (metrolines.redline[i] == 'Kashmere Gate')
      continue;
    else
      map.insertNode(metrolines.redline[i]);
  }
  for (var i = 0; i < (metrolines.redline.length - 1); i++) {
    map.insertEdge(metrolines.redline[i], metrolines.redline[i + 1], 2.03, "red");
  }
  for (var i = 0; i < (metrolines.redline.length - 1); i++) {
    console.log(metrolines.redline[i])
    map.printGraph(metrolines.redline[i]);
  }


  //green Line

  for (var i = 0; i < green.length; i++) {
    metrolines.greenline[i] = green[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.greenline.length; i++) {
    if (metrolines.greenline[i] == 'Inderlok')
      continue;
    else
      map.insertNode(metrolines.greenline[i]);
  }
  for (var i = 0; i < (metrolines.greenline.length - 1); i++) {
    console.log("greenline",metrolines.greenline[i] + ' ' + metrolines.greenline[i + 1]);
    map.insertEdge(metrolines.greenline[i], metrolines.greenline[i + 1], 2.49, "green");
  }
  for (var i = 0; i < (metrolines.greenline.length - 1); i++) {
    console.log(metrolines.greenline[i]);
   map.printGraph(metrolines.greenline[i]);
  }


  //greenbranch Line
  
  for (var i = 0; i < greenBranch.length; i++) {
    metrolines.greenbranchline[i] = greenBranch[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.greenbranchline.length; i++) {
    if (metrolines.greenbranchline[i] == 'Kirti Nagar' || metrolines.greenbranchline[i] == 'Ashok Park Main')
      continue;
    else
      map.insertNode(metrolines.greenbranchline[i]);
  }
  for (var i = 0; i < (metrolines.greenbranchline.length - 1); i++) {
    console.log("greenbranchline",metrolines.greenbranchline[i] + ' ' + metrolines.greenbranchline[i + 1]);
    map.insertEdge(metrolines.greenbranchline[i], metrolines.greenbranchline[i + 1], 1.33, "greenbranch");
  }


  //pink line
  // pink = require("./../lines/pink.json");

  for (var i = 0; i < pink.length; i++) {
    metrolines.pinkline[i] = pink[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.pinkline.length; i++) {
    //pinkline[i] == 'Lajpat Nagar'
    if (metrolines.pinkline[i] == 'Lajpat Nagar'||metrolines.pinkline[i] == 'Azadpur' || metrolines.pinkline[i] == 'Netaji Subhash Place' || metrolines.pinkline[i] == 'Rajouri Garden' || metrolines.pinkline[i] == 'INA' || metrolines.pinkline[i] == 'Mayur Vihar – I')
      continue;
    else
      map.insertNode(metrolines.pinkline[i]);
  }
  for (var i = 0; i < (metrolines.pinkline.length - 1); i++) {
    map.insertEdge(metrolines.pinkline[i], metrolines.pinkline[i + 1], 2.69, "pink");
  }
  for (var i = 0; i < metrolines.pinkline.length; i++){
    console.log(metrolines.pinkline[i]);
    map.printGraph(metrolines.pinkline[i]);
  }


  //pinkbranch Line

  for (var i = 0; i < pinkBranch.length; i++) {
    metrolines.pinkbranchline[i] = pinkBranch[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.pinkbranchline.length; i++) {
    if (metrolines.pinkbranchline[i] == 'Anand Vihar' || metrolines.pinkbranchline[i] == 'Karkarduma' || metrolines.pinkbranchline[i] == 'Welcome')
      continue;
    else
      map.insertNode(metrolines.pinkbranchline[i]);
  }
  for (var i = 0; i < (metrolines.pinkbranchline.length - 1); i++) {
    map.insertEdge(metrolines.pinkbranchline[i], metrolines.pinkbranchline[i + 1], 2.43, "pinkbranch");
  }

  //Orange

  for (var i = 0; i < orange.length; i++) {
    metrolines.orangeline[i] = orange[i]["Hindi"];
  }
  for (var i = 0; i < metrolines.orangeline.length; i++) {
    if (metrolines.orangeline[i] == 'New Delhi' || metrolines.orangeline[i] == 'Dwarka Sector 21')
      continue;
    else
      map.insertNode(metrolines.orangeline[i]);
  }
  for (var i = 0; i < (metrolines.orangeline.length - 1); i++) {
    map.insertEdge(metrolines.orangeline[i], metrolines.orangeline[i + 1], 5.2, "orange");
  }
}

let map = new Graph();

importlines();

app.get('/route', (req, res) => {
  const { from } = req.query;
  const { to } = req.query;
  if (from && to) {
    let mydata = map.dijkstra(from, to);
    res.json({mydata});
  }
  else {
    res.send("No input given");
  }
})

app.listen(8080, () =>console.log("listening"));

export { lineChoose, metrolines };