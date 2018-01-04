var website = document.location.host ;
var password = "" ;
var jsonData = '[{"default": "https://.tik.tn"}]';
inputName = "" ;
var currentpass = "" ;



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
	alert('o');
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

inputName = getInputName();
document.getElementsByName(inputName).addEventListener('change', currentpass = getinput);

