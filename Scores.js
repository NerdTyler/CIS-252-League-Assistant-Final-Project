

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



//for (var p=0; p < amount; ++p){
  //var Loss = NewStats[p].charAt(NewStats[p].length-1);
//alert(NewStats[p]);
//}
var TeamInfo = ["TeamInfo"];
for (var p=0; p < amount; ++p){
    TeamInfo[NewTeamNames[p]] = {
        name: NewTeamNames[p],
        win: (NewStats[p].charAt(NewStats[p].length-5)),
        loss: (NewStats[p].charAt(NewStats[p].length-3)),
		tie: (NewStats[p].charAt(NewStats[p].length-1)),
		score: parseInt(((NewStats[p].charAt(NewStats[p].length-5))*2)+((NewStats[p].charAt(NewStats[p].length-1))*1)),
    };
}
console.log(TeamInfo);
console.log(TeamInfo.score);
