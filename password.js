var website = document.location.host ;
var password = "" ;

var listwebsite = {};

localStorage.setItem('passwordManager', listwebsite.toString());
var inputs = document.getElementsByTagName('input');

if (inputs.password != null){
	inputsPass = inputs.password;
}
if (inputs.pass != null){
	inputsPass = inputs.pass;
}

function start() {
	alert('start');
	if(exist(website)){
		alert('exist');
		setpassword(activeElm,website);
	}
	else{
		alert('n exist');
		savepassword(getpassword(activeElm));
	}

}

function exist(website){
	if (website in listwebsite)
		return true;
	else
		return false;
}

function setpassword(activeElm,website){
	password = '';
	activeElm.value = password ;
	alert('i');
}

function getpassword(activeElm){
	return activeElm.value;
}

function savepassword(pass){
	listwebsite[website] = pass ;
	localStorage.setItem('passwordManager', listwebsite.toString());
}
/* Main */

start();


