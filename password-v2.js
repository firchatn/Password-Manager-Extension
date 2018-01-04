
var website = document.location.host ;
var password = "" ;
var jsonData = '[{"default": "https://.tik.tn"}]';
inputName = "" ;

inputName = getInputName;
document.getElementsByName(inputName).addEventListener('change', getinput);


function getInputName() {
	var x = document.getElementsByTagName("input") ;
var pass ="";
	for(i = 0 ; i< x.length ; i++){
		if (x[i].getAttribute("type") === "password"){
				pass =  x[i].name ;	
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
				return x[i].value ;	
		}
	    }
}

function setinput(pass) {
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

