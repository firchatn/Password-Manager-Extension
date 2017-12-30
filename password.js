
var website = document.location.host ;
//alert(website);

function startRead() {
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		if (x[i] === document.activeElement){
				return true;
			}
		}
	    }
}


function getinput() {
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		
				return x[i] ;
			
		}
	    }
}
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
			alert(ch);
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



// on focus call get pass
// on realte call save Password
// on open call cheekxist
getinput().onblur = function() {getPwdInputs()};


