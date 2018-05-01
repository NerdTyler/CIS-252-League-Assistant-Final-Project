var text = "";

for (i = 0; i < rawteamstats.length; i++) {
  text += rawteamstats[i] + ";";
}
//creates string split by ;
var amount = rawteamstats.length;
//figures out the amount of teams there are
var TextNoSpace = text.replace(/\s/g, '');
//removes spaces from the string of teams
var NewStats = TextNoSpace.split(";");
//splits the teams based on ;
var TeamNamesTextOnly = TextNoSpace.replace(/[0-9-,]/g, '');
//replaces any numbers and spaces
var NewTeamNames = TeamNamesTextOnly.split(";");
//creates names list which is split by ;
var NewStatsFin = NewStats.splice(-1,1);
//removes last array item as it is blank
for (var w = 0; w < amount; ++w) {
  this["marker"+w] = NewStats[w];
}
//creates an array for the team stats
var scoresstuff = "";

for (i = 0; i < rawteamstats.length; i++) {
  scoresstuff += rawteamstats[i] + ";";
}
//gets stats without any team names but keeps the order
var scoresnospace = scoresstuff.replace(/\s/g, '');
//removes any spaces from the scores
var scoresnoletters = scoresnospace.replace(/[a-z-A-Z]/g, '');
//removes any letters from the scores
var Scoresonly = scoresnoletters.split(";");
//splits the scores based on ;
var NewscoresFin = Scoresonly.splice(-1,1);
//removes las tarray item as it is blank
for (var w = 0; w < amount; ++w) {
  this["marker"+w] = Scoresonly[w];
}
//creates an array for the team stats
var TeamInfo = ["TeamInfo"];
//creates the advanced array for each object
for (var p=0; p < amount; ++p){
    TeamInfo[p] = {
      name: NewTeamNames[p],
      win: parseInt(NewStats[p].substr(NewStats[p].indexOf(",")+1,"2").replace(/,/g, '')),
      loss: parseInt(Scoresonly[p].substr(Scoresonly[p].indexOf(",")+3,"2").replace(/,/g, '')),
      tie: parseInt((Scoresonly[p].substr(Scoresonly[p].indexOf(",")+5,"3").replace(/,/g, ''))),
      score: ((NewStats[p].substr(NewStats[p].indexOf(",")+1,"2").replace(/,/g, ''))*2)+((Scoresonly[p].substr(Scoresonly[p].indexOf(",")+5,"3").replace(/,/g, ''))*1),
    };
}

console.log(TeamInfo);

var Totalnumberofteams = TeamInfo.length;

	if (Totalnumberofteams%2 == 0){
    var EvenOrOdd = "Even";
  }

	else{
    var EvenOrOdd = "Odd";
    }
//checks if there is an odd or even number of teams


//below came from http://www.javascriptkit.com/javatutors/arraysort2.shtml
function AlphabetTeamList(){
TeamInfo.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
})
console.log(TeamInfo);
};
//below are the sorting button code
function ScoreLowtoHigh(){
TeamInfo.sort(function(a, b){
    return a.score-b.score
})
console.log(TeamInfo);
};

function ScoreHightoLow(){
TeamInfo.sort(function(a, b){
    return b.score-a.score
})
console.log(TeamInfo);
};

function TieHightoLow(){
TeamInfo.sort(function(a, b){
    return b.tie-a.tie
})
console.log(TeamInfo);
};

function TieLowtoHigh(){
TeamInfo.sort(function(a, b){
    return a.tie-b.tie
})
console.log(TeamInfo);
};

function WinLowtoHigh(){
TeamInfo.sort(function(a, b){
    return a.win-b.win
})
console.log(TeamInfo);
};

function WinHightoLow(){
TeamInfo.sort(function(a, b){
    return b.win-a.win
})
console.log(TeamInfo);
};

function LossLowtoHigh(){
TeamInfo.sort(function(a, b){
    return a.loss-b.loss
})
console.log(TeamInfo);
};

function LossHightoLow(){
TeamInfo.sort(function(a, b){
    return b.loss-a.loss
})
console.log(TeamInfo);
};


//below code creates the tables that hold the stats
function TableShow(){
var html = "<table border='1|1'>";
        html+="<tr>";
        html+="<td><b>Team Name</b></td>";
        html+="<td><b>Win</b></td>";
        html+="<td><b>Loss</b></td>";
        html+="<td><b>Tie</b></td>";
        html+="<td><b>Score</b></td>";
        html+="</tr>";
    for (var i = 0; i < TeamInfo.length; i++) {
        html+="<tr>";
        html+="<td>"+TeamInfo[i].name+"</td>";
        html+="<td>"+TeamInfo[i].win+"</td>";
        html+="<td>"+TeamInfo[i].loss+"</td>";
        html+="<td>"+TeamInfo[i].tie+"</td>";
        html+="<td>"+TeamInfo[i].score+"</td>";
        html+="</tr>";
    }

    html+="</table>";
    html+="<br><br>";
    html+="<h3>Matchups</h3>";

if (EvenOrOdd=="Even"){
    for (var i = 0, d=1; i < Totalnumberofteams; i++, d++) {
        html+="<p><b>Matchup "+[d]+"</b></p>";
        html+="<table>";
        html+="<tr>";
        html+="<td>"+TeamInfo[i].name+"</td>";
        html+="<td>----VS----</td>";
        html+="<td>"+TeamInfo[i+1].name+"</td>";
        html+="</tr>";
        html+="</table>";
        html+="<br>";
      i+=1
    }}
    //below makes makes the matchup based on even or odd amount of teams
if (EvenOrOdd=="Odd"){
    html+="<p><b>Bye Week</b></p>";
    html+="<p>"+TeamInfo[0].name+"</p><br>";
  for (var i = 1, d=0; i < Totalnumberofteams; i++, d++) {
      html+="<p><b>Matchup "+[d+1]+"</b></p>";
      html+="<table>";
      html+="<tr>";
      html+="<td>"+TeamInfo[i].name+"</td>";
      html+="<td>----VS----</td>";
      html+="<td>"+TeamInfo[i+1].name+"</td>";
      html+="</tr>";
      html+="</table>";
      html+="<br>";
    i+=1
  }

}

document.getElementById("box").innerHTML = html;
}
//above creates the table for the scores
