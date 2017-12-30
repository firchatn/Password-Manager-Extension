
website = document.location.host

function cheekexist(website){

	if(website in localStorage){
	    setPwdInputs(localStorage.getItem(website));
	} else {
	   savePassword(website, getPwdInputs()){
	}
}

function getPwdInputs() {
  var ary = [];
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
      ary.push(inputs[i]);
    }
  }
  return ary;
}

function setPwdInputs(pass) {
  var ary = [];
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    inputs[i].value = pass ;
    }
}

function savePassword(name,pass){
	localStorage.setItem(name, pass);
}

