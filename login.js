function ShowLogin (){
	document.getElementById('AdminShow').style.display='block';}
function HideLogin (){
	document.getElementById('button').style.display='none';}

function loginval() {
var Username = document.getElementById("Username").value;
var Password = document.getElementById("Password").value;
var usernameval = Username.includes("@");
var passwordcharcount = Password.length;
var hasspace = Password.includes(" ");
var howmanydigit = Password.replace(/\D/g, '').length
var uppercasecheck = Password.length - Password.replace(/[A-Z]/g, '').length;
var OK = /^([a-zA-Z0-9]+)$/;


function passval(){
	if (passwordcharcount>16 || passwordcharcount<8){
		alert("The password must be between 8 and 16 characters.");
	}
	else{
		if (hasspace==true){
			alert("The password cannot contain a space.");
		}
		else{
			if(howmanydigit>=1){
				if (uppercasecheck>=1){
					if(OK.test(Password)==false){
						alert("Invalid character in password");
					}
					else{
						var check = Username+","+Password;
						var validate = passwdtable.includes(check);
							if (validate==true){
								alert("Success");
								var cookie = "username=" + check + "; expires=" + expire;	
								document.cookie = cookie;
								window.open("AdminSite.html");
	//PUT CODE HERE THAT CHECKS IF THE PASSWORD MATCHES THE ONES IN THE DATABASE
							}
							else{
								alert("Login failed, please try again.");
								
							}
						
					}
				}
				else{
					alert("The password must contain at least 1 uppercase character.");
				}
			}
			else{
				alert("Password must contain at least 1 digit.");
			}
		}
	}
}


switch (usernameval){
	case true:
	passval();
	break;
	
	case false:
	alert("The username cannot be left blank.");
	break;
}
}

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;}
var expire = new Date().addHours(1);

function load (){
var cookieinformation = document.cookie;
var revalidatecookie = cookieinformation.substr(9);
var validate = passwdtable.includes(revalidatecookie);
if (validate==true){
alert("Success");
document.getElementById('Adminhiddenpage').style.display='block';
}
else{alert("Sorry, but you do not have permission to view this site.");
window.open("index.html");
	window.close("AdminSite.html");}
}

function SignOut(){
	window.close();
	window.open("index.html");
	document.cookie = "username=" + Username + "; expires=Mon, 12 Apr 1999 12:00:00 UTC;";
}