

var text = "";
for (i = 0; i < rawteamstats.length; i++) {
    text += rawteamstats[i] + ";";
}
var amount = rawteamstats.length;
var TextNoSpace = text.replace(/\s/g, '');
//alert(TextNoSpace);

var NewStats = TextNoSpace.split(";");
var TeamNamesTextOnly = TextNoSpace.replace(/[0-9-,]/g, '');
var NewTeamNames = TeamNamesTextOnly.split(";");

var NewStatsFin = NewStats.splice(-1,1);
for (var w = 0; w < amount; ++w) {
    this["marker"+w] = NewStats[w];
}

//var Sorted1 = marker0;

//need to put in way to sort the scores


//for (var p=0; p < amount; ++p){
  //var Loss = NewStats[p].charAt(NewStats[p].length-1);
//alert(NewStats[p]);
//}
var TeamInfo = ["TeamInfo"];
for (var p=0; p < amount; ++p){
    TeamInfo[p] = {
        name: NewTeamNames[p],
        win: parseInt((NewStats[p].charAt(NewStats[p].length-5))),
        loss: parseInt((NewStats[p].charAt(NewStats[p].length-3))),
		tie: parseInt((NewStats[p].charAt(NewStats[p].length-1))),
		score: parseInt(((NewStats[p].charAt(NewStats[p].length-5))*2)+((NewStats[p].charAt(NewStats[p].length-1))*1)),
    };
}
console.log(TeamInfo);

var Totalnumberofteams = TeamInfo.length;



	if (Totalnumberofteams%2 == 0){
		alert("EVEN");
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
document.getElementById("box").innerHTML = html;
}
//above creates the table for the scores
