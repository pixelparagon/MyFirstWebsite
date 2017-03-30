"use_strict";

var myApp = myApp || {};

myApp.constants = {
	minWidth: 320,
	maxWidth: 640
};

myApp.o = {gender: "m", age: 64}

class Rect {
	constructor(h, w) {
		this.height = h;
		this.width = w;

		document.writeln(h.toString() + " " + w.toString());
	}

	getWidth() {
		return this.width;
	}
}

myApp.load = function(t) {
	
	document.writeln("t is "+t.toString()+"<br>");

	for (var b in t) {
		if (t.hasOwnProperty(b)) {
			document.writeln(b + " " + t[b]+"<br>");
		}
	}

	var t = new Rect(8, 16);
	
	document.writeln("width: " + t.getWidth().toString());
    document.writeln("sdfsdf");

};


(function() {

	window.addEventListener("load", myApp.load);


}());


