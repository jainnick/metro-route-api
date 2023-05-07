//Chooses station array based on input
function lineChoose(linein) {
  var line = []
  if (linein == 'blue')
    line = blueline;
  else if (linein == 'bluebranch')
    line = bluebranchline;
  else if (linein == 'magenta')
    line = magentaline;
  else if (linein == 'yellow')
    line = yellowline;
  else if (linein == 'violet')
    line = violetline;
  else if (linein == 'red')
    line = redline;
  else if (linein == 'green')
    line = greenline;
  else if (linein == 'greenbranch')
    line = greenbranchline;
  else if (linein == 'pink')
    line = pinkline;
  else if (linein == 'pinkbranch')
    line = pinkbranchline;
  else if (linein == 'orange')
    line = orangeline;
  else if (linein == 'aqua')
    line = aqualine;
  else if (linein == 'grey')
    line = greyline;
  else if (linein == 'rapid')
    line = rapidline
  else if (linein == 'rapidloop')
    line = rapidloopline
  else
    line = 0;
  return line;
}
export default lineChoose;