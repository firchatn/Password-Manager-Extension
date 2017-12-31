
var website = document.location.host ;
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
	    setPwdInputs(localStorage.getItem(website));
	} else {
	   //getinput().onblur = function() {password = getPwdInputs()};
	   password =  getPwdInputs();
	   savePassword(website, password);
	}
}

function getPwdInputs() {
	var pass = "";
	var x = document.getElementsByTagName("input") ;
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		pass = x[i].value ;
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


/* Main */
//browser.browserAction.onClicked.addListener(handleClick);
//savePassword(website,password);
cheekexist(website);

