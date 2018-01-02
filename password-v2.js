
var website = document.location.host ;
var password = "" ;
var jsonData = '[{"default": "https://.tik.tn"}]';


//jsonData.push({website: password});

function verif(){
alert('verif');	
if(jsonData.hasOwnProperty(website)){
alert('in');
setpassword();
}
else{
alert('save');
getinput().onblur = function() {password = getpassword()};
alert('save2');
password = getpassword();
savepassword(password);
}
}

function getpassword() {
	var x = document.getElementsByTagName("input") ;
var pass ="";
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
				pass =  x[i] ;	
		}
	    }
return pass ; 
}


function setpassword() {
	var x = document.getElementsByTagName("input") ;
var pass = localStorage.getItem('passwordManager')[website];
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
	      		x[i].value = pass ;
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

function savepassword(pass){
if ( pass != ""){
jsonData.push({website: pass});
	localStorage.setItem('passwordManager', JSON.stringify(jsonData));
}
}

verif();

