function openSideBar(){
	document.getElementById('sidebar').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';
}
function closeSideBar(){
	document.getElementById('sidebar').style.width = '0px';
	document.getElementById('main').style.marginLeft = '0px';
}

let settingsButton = document.getElementById("settingsButton");
let settings = document.getElementById("settings");

function displaySettings() {
	console.log(settings.classList);
	settings.classList.toggle("show");
	console.log(settings.classList);
}

let themes = {
	light: {
		background: "#ffffff",
		card: "#f2f2f2",
		text: "#000000"
	},
	dark: {
		background: "#1a1a1a",
		card: "#000000",
		text: "#ffffff"
	},
	blue: {
		background: "#203344",
		card: "#172531",
		text: "#f0f4f8"
	},
	violet: {
		background: "#4b4068",
		card: "#362e4a",
		text: "#f6f5f9"
	},
	green: {
		background: "#519430",
		card: "#3a6a22",
		text: "#f7fcf5"
	},
	tomato: {
		background: "#b72214",
		card: "#83180f",
		text: "#fef4f3"
	}
}

let theme = document.getElementById("theme");
theme.value = "";
console.log(theme.value);
function changeTheme(event) {
	console.log(event);
	console.log(theme.value);
	let { value } = event.target;
	console.log(value);
	document.documentElement.style.setProperty("--backgroundColor", themes[value].background);
	document.documentElement.style.setProperty("--cardColor", themes[value].card);
	document.documentElement.style.setProperty("--textColor", themes[value].text);
}