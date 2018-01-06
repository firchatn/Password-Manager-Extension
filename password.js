var website = document.location.host ;
var password = "" ;
var listwebsite = ['www.facebook.com','www.instagram.com'];

function start() {
	alert('start');
	var activeElm = document.activeElement;
	alert('aa');
	if (activeElm.getAttribute("type") === "password"){
		if(exist(website)){
			alert('exist');
			setpassword(activeElm,website);
		}
		else{
			alert('n exist');
			savepassword(getpassword(activeElm));
		}
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
	listwebsite.push(website);
	alert('o');
}
	
start();

