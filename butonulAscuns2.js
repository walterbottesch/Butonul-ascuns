var setUp = {
	setWinner:  function() {
		var winner = Math.floor(Math.random() * 3);
		//console.log(winner);
		var b = document.getElementById(winner);
		b.setAttribute("class", "lucky");
		console.log("butonul " + winner + " este castigator");
	}
};


var controller = {
	reply_click: function(elem) {
		console.log(elem.className);
		if(elem.className == "lucky") {
			alert("Buton Castigator");
		} else {
			alert("Buton Necastigator");
		}
	}
};

window.onload = setUp.setWinner;
