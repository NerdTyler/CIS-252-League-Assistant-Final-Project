# CIS-252-League-Assistant-Final-Project
CIS 252 Final Project

CIS252 Web Client Programming Final Project – 18WI
League Assistant v1.0
Create a web page to calculate and display team statistics and standings for a sports league.
Your page should incorporate the following:
1. By default the page should display the current league standings in descending order by points. Points are calculated as follows: 2 points for a win, 1 point for a tie, 0 points for a loss.
2. The league Admin should be able to login for additional functions. Keep track of whether an administrator is logged in (cookies). Login requires an email address and a password (8-16 alphanumeric characters, no spaces at least one digit and one uppercase letter) - be sure to validate.
3. The admin should have extra options:
a. Sort the list by wins, points, or alphabetically by name
b. Display a “First Round Matchup” listing showing which teams would play one another if they were “seeded” by points. If there is an odd number of teams the first place team gets a “Bye”
c. Admin logout
4. A Print option should be provided that prints a “cleanly” formatted version of the current view (i.e. just the listing, no buttons, forms, etc.)
Normally the team data and username/password info would come from a database on the server. If a server is available, we will retrieve this data using AJAX. For now, since our focus is on client side programming, we will simulate that by importing two .js files containing the data. (This array looks VERY much like how data would be passed from a MySQL database on the server)
“Live” versions of the data will be provided on the project due date to use for actual sample runs.
stats.js will define an array of strings containing comma delimited team data. (name,win,loss,tie)

var rawteamstats = new Array;

rawteamstats[0] = “Sharks,3,1,2”;

rawteamstats[1] = “Jets,2,4,1”;

rawteamstats[2] = “AppleDumplings,3,3,1”;

rawteamstats[3] = “MightyShrimp, 1, 5, 0”;

rawteamstats[4] = “Volcano, 2, 2, 2”;


and so on…

security.js will define an array of strings containing comma delimted security records.

var passwdtable = new Array;

passwdtable[0] = “john.doe@gmail.com,123XyZ45”;

passwdtable[1] = “mulder@area51.gov,PASSWORD1”;
