
var website = document.location.host ;
alert(website);

function cheekexist(website){

	if(website in localStorage){
	    setPwdInputs(localStorage.getItem(website));
	} else {
	   savePassword(website, getPwdInputs());
	}
}

function getPwdInputs() {
	var pass = "";
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		ch = x[i].value ;
		}
	    }
	  
	return ch;
}

function setPwdInputs(pass) {
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		x[i].value = pass ;
		}
	    }
}

function savePassword(website,pass){
	localStorage.setItem(website, pass);
}
alert(getPwdInputs());

