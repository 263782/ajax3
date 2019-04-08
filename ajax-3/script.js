let question = document.getElementById("question");
let txt = document.getElementById("txt");
question.addEventListener('keyup', ajax);
question.addEventListener('focus', clear);

function ajax() {
	let str = question.value;
	console.log(str);
	if (str == "") {
		document.getElementById("txt").innerHTML = "";
		return;
	}
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			txt.innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "getdata.php?q=" + str, true);
	xmlhttp.send();
}

function clear() {
	question.value = "";
	txt.innerHTML = "";
}