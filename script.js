const   textarea = document.getElementById("textarea1");
        fontsSelect = document.getElementById('select');

function num(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function bold(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function under(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function left(e) {
    textarea.style.textAlign = "left";
}

function center(e) {
    textarea.style.textAlign = "center";
}

function right(e) {
    textarea.style.textAlign = "right";
}

function slash() {
    textarea.value = "";
}

function colors(e) {
    let value = e.value;
    textarea.style.color = value;
}

function count(self) {
    var spaces = self.value.match(/\s+/g);
    var words = spaces ? spaces.length : 0;
    if (words == 1) {
        document.getElementById("count-words").innerHTML = words + " Word";
    }
    else {
        document.getElementById("count-words").innerHTML = words + " Words";
    }
}

function myFunction(cmd, value = null) {
    var target = document.getElementById("text");
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

function addLink() {
    const url = prompt('Insert url');
    formatDoc('createLink', url);
}

function wordsCount() {
    var text = document
        .getElementById("textarea1").value;
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }
    numWords += 1;
    document.getElementById("show")
        .innerHTML = numWords;
}

function lettersCount() {
    var text = document
        .getElementById("textarea1").value;
    var numLetters =-1;
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];
        if (currentCharacter != " ") {
            numLetters += 1;
        }
    }
    numLetters += 1;

    document.getElementById("show1")
        .innerHTML = numLetters;
}

fontsSelect.addEventListener('change', function() {
    textarea.style.fontFamily = fontsSelect.value;
});

function ReplaceWord(){
	var a = document.getElementById("textarea1").value;
	var b = document.getElementById("find").value;
	var c = document.getElementById("replace").value;
	var newText = a.replace(b, c);
	document.getElementById("textarea1").value = newText;
}