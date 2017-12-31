
for (var i = 0; i < localStorage.length; i++){
    savedpass(localStorage.getItem(localStorage.key(i)));
}

function savedpass(word) {
    var x = document.createElement("li");
    var t = document.createTextNode(word);
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
}
browser.browserAction.onClicked.addListener(handleClick);
