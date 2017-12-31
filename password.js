
var website = document.location.host ;
//alert(website);
var password = "" ;

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
alert(website);
	    setPwdInputs(localStorage.getItem(website));
 alert(localStorage.getItem(website));
	} else {
	   //getinput().onblur = function() {password = getPwdInputs()};
	   password =  getPwdInputs();
	   alert(password);
	   alert(website);
	   savePassword(website, password);
	}
}

function getPwdInputs() {
	var pass = "";
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		pass = x[i].value ;
			//alert(ch);
		}
	    }
	  
	return pass;
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
if ( pass != ""){
	localStorage.setItem(website, pass);
}
}


// on focus call get pass
// on realte call save Password
// on open call cheekxist


/* Main */
//browser.browserAction.onClicked.addListener(handleClick);
//savePassword(website,password);
cheekexist(website);

