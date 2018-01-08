var website = document.location.host ;
var password = "" ;

var listwebsite = {};

localStorage.setItem('passwordManager', listwebsite);
var inputs = document.getElementsByTagName('input');

if (inputs.password != null){
	inputsPass = inputs.password;
}
if (inputs.pass != null){
	inputsPass = inputs.pass;
}


function exist(){
	alert('hkbn');
	find = false;
	var lists = localStorage.getItem('passwordManager');
	alert('loal');
	//lists = JSON.parse(lists);
	keys = Object.keys(lists);
alert('nnj');
	alert(keys.length);	
for (var i = 0 ; i < keys.length ; i++) {
    if (keys[i] === website )
	alert('hg');
	alert(keys[i]);
alert(lists[i]);
	find = true ;
}
	return find ;
}


function start() {
	alert('start');
	if(exist()){
		alert('exist');
		setpassword(activeElm,website);
	}
	else{
		alert('n exist');
		savepassword(getpassword(activeElm));
	}

}


function setpassword(activeElm,website){
	password = '';
	var lists = JSON.parse(localStorage.getItem('passwordManager'));
	//lists = JSON.parse(lists);
	keys = Object.keys(lists);
for (var i = 0 ; i < keys.length ; i++) {
    if (keys[i] === website )
	password = lists[keys[i]];
}
	activeElm.value = password ;
}

function getpassword(activeElm){
	return activeElm.value;
}

function savepassword(pass){
	listwebsite[website] = pass ;
	localStorage.setItem('passwordManager', JSON.stringify(listwebsite));
}
/* Main */

start();


