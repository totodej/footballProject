'use strict';

var countries = [{league : "", logo : "", page : "Home", clubs : ""},
		{league : "Premier League",logo : "premierleague.png", page : "Premier League", clubs :[{name : "Arsenal",logo : "arsenal.png", firstDivision : "13", faCup : "13", leagueCup : "2", communityShield : "15"},
			{name : "Bournemouth",logo : "bournemouth.png" , firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
			{name : "Brighton & Hove Albion",logo : "brighton.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "1"},
			{name : "Burnley",logo : "burnley.png", firstDivision : "2", faCup : "1", leagueCup : "0", communityShield : "1"},
			{name : "Cardiff City",logo : "cardiff.png", firstDivision : "0", faCup : "1", leagueCup : "0", communityShield : "1"},
			{name : "Chelsea",logo : "chelsea.png", firstDivision : "6", faCup : "8", leagueCup : "5", communityShield : "4"},
			{name : "Crystal Palace",logo : "crystalpalace.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
			{name : "Everton",logo : "everton.png", firstDivision : "9", faCup : "5", leagueCup : "0", communityShield : "9"},
			{name : "Fulham",logo : "fulham.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
			{name : "Huddersfield Town",logo : "huddersfield.png", firstDivision : "3", faCup : "1", leagueCup : "0", communityShield : "0"},
			{name : "Leicester City",logo : "leicester.png", firstDivision : "1", faCup : "0", leagueCup : "3", communityShield : "1"},
			{name : "Liverpool",logo : "liverpool.png", firstDivision : "18", faCup : "7", leagueCup : "8", communityShield : "15"},
			{name : "Manchester City",logo : "manchestercity.png", firstDivision : "5", faCup : "5", leagueCup : "5", communityShield : "5"},
			{name : "Manchester United",logo : "manchesterunited.png", firstDivision : "20", faCup : "12", leagueCup : "5", communityShield : "21"},
			{name : "Newcastle United",logo : "newcastle.png", firstDivision : "4", faCup : "6", leagueCup : "0", communityShield : "1"},
			{name : "Southampton",logo : "southampton.png", firstDivision : "0", faCup : "0", leagueCup : "1", communityShield : "0"},
			{name : "Tottenham Hotspur",logo : "tottenham.png", firstDivision : "2", faCup : "8", leagueCup : "4", communityShield : "0"},
			{name : "Watford",logo : "watford.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
			{name : "West Ham United",logo : "westham.png",firstDivision : "0", faCup : "3", leagueCup : "0", communityShield : "1"},
			{name : "Wolverhampton Wanderers",logo : "wolves.png", firstDivision : "0", faCup : "4", leagueCup : "2", communityShield : "4"}]},
		{league : "La Liga",logo : "laliga.png", page : "La Liga", clubs : [{name : "Deportivo Alaves",logo : "alaves.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "FC Barcelona",logo : "barcelona.png", primeraDivision : "25", copaDelRey : "30", supercopaDeEspana : "13"},
			{name : "Real Betis",logo : "betis.png", primeraDivision : "1", copaDelRey : "2", supercopaDeEspana : "0"},
			{name : "Athletic Club",logo : "bilbao.png", primeraDivision : "8", copaDelRey : "23", supercopaDeEspana : "2"},
			{name : "RC Celta",logo : "celtavigo.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "SD Eibar",logo : "eibar.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "RCD Espanyol",logo : "espanyol.png", primeraDivision : "0", copaDelRey : "4", supercopaDeEspana : "0"},
			{name : "Getafe CF",logo : "getafe.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "Gigona FC",logo : "girona.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "SD Huesca",logo : "huesca.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "CD Leganes",logo : "leganes.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "Levante UD",logo : "levante.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "Atletico Madrid",logo : "atleticomadrid.png", primeraDivision : "10", copaDelRey : "10", supercopaDeEspana : "2"},
			{name : "Real Madrid",logo : "realmadrid.png", primeraDivision : "33", copaDelRey : "19", supercopaDeEspana : "10"},
			{name : "Sevilla FC",logo : "seville.png", primeraDivision : "1", copaDelRey : "5", supercopaDeEspana : "1"},
			{name : "Real Sociedad",logo : "realsociedad.png", primeraDivision : "2", copaDelRey : "2", supercopaDeEspana : "1"},
			{name : "Valladolid",logo : "valladolid.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "Rayo Vallecano",logo : "realvallecano.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
			{name : "Valencia FC", logo : "valence.png", primeraDivision : "6", copaDelRey : "7", supercopaDeEspana : "1"},
			{name : "Villareal CF",logo : "villareal.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"}]},
		{league : "Serie A",logo : "seriea.png", page : "Serie A", clubs : [{name : "Atalanta", logo : "atalanta.png", firstDivision : "0", italiaCup : "1", supercupItalia : "0"},
			{name : "Bologna",logo : "bologne.png", firstDivision : "7", italiaCup : "2", supercupItalia : "0"},
			{name : "Cagliari",logo : "cagliari.png", firstDivision : "1", italiaCup : "0", supercupItalia : "0"},
			{name : "Chievo Verona",logo : "chievo.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"},
			{name : "Empoli",logo : "empoli.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"},
			{name : "Fiorentina",logo : "fiorentina.png", firstDivision : "2", italiaCup : "6", supercupItalia : "1"},
			{name : "Frosinone",logo : "frosinone.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"},
			{name : "Genoa",logo : "genoa.png", firstDivision : "9", italiaCup : "1", supercupItalia : "0"},
			{name : "Internazionale",logo : "intermilan.png", firstDivision : "18", italiaCup : "7", supercupItalia : "5"},
			{name : "Juventus",logo : "juventus.png", firstDivision : "34", italiaCup : "13", supercupItalia : "7"},
			{name : "SS Lazio",logo : "lazio.png", firstDivision : "2", italiaCup : "6", supercupItalia : "4"},
			{name : "AC Milan",logo : "acmilan.png", firstDivision : "18", italiaCup : "5", supercupItalia : "7"},
			{name : "Napoli",logo : "naples.png", firstDivision : "2", italiaCup : "5", supercupItalia : "2"},
			{name : "Parma",logo : "parma.png", firstDivision : "0", italiaCup : "3", supercupItalia : "1"},
			{name : "AS Roma",logo : "asroma.png", firstDivision : "3", italiaCup : "9", supercupItalia : "2"},
			{name : "Sampdoria",logo : "sampdoria.png", firstDivision : "1", italiaCup : "4", supercupItalia : "1"},
			{name : "Sassuolo",logo : "sassuolo.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"},
			{name : "SPAL",logo : "spal.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"},
			{name : "Torino",logo : "torino.png", firstDivision : "7", italiaCup : "5", supercupItalia : "0"},
			{name : "Udinese",logo : "udinese.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"}]},
		{league : "Bundesliga",logo : "bundesliga.png", page : "Bundesliga", clubs : [{name : "FC Augsburg",logo : "augsburg.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
			{name : "FC Bayern Munich",logo : "bayernmunich.png", firstDivision : "28", germanCup : "18", germansuperCup : "7"},
			{name : "Borussia Dortmund",logo : "dortmund.png", firstDivision : "8", germanCup : "4", germansuperCup : "6"},
			{name : "Fortuna Dusseldorf",logo : "dusseldorf.png", firstDivision : "1", germanCup : "2", germansuperCup : "0"},
			{name : "Eintracht Frankfurt",logo : "frankfurt.png", firstDivision : "1", germanCup : "5", germansuperCup : "0"},
			{name : "SC Freiburg",logo : "freiburg.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
			{name : "Hannover 96",logo : "hannover.png", firstDivision : "2", germanCup : "1", germansuperCup : "0"},
			{name : "Hertha Berlin",logo : "herthaberlin.png", firstDivision : "2", germanCup : "0", germansuperCup : "0"},
			{name : "TSG 1899 Hoffenheim",logo : "hoffenheim.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
			{name : "RB Leipzig",logo : "leipzig.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
			{name : "Bayer Leverkusen",logo : "bayerleverkusen.png", firstDivision : "0", germanCup : "1", germansuperCup : "0"},
			{name : "FSV Mainz 05",logo : "mainz.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
			{name : "Borussia Monchengladbach",logo : "monchengladbach.png", firstDivision : "5", germanCup : "3", germansuperCup : "0"},
			{name : "FC Nurnberg",logo : "nurnberg.png", firstDivision : "9", germanCup : "4", germansuperCup : "0"},
			{name : "FC Schalke 04",logo : "schalke04.png", firstDivision : "7", germanCup : "5", germansuperCup : "1"},
			{name : "VfB Stuttgart",logo : "stuttgart.png", firstDivision : "5", germanCup : "3", germansuperCup : "1"},
			{name : "Werder Bremen",logo : "werderbremen.png", firstDivision : "4", germanCup : "6", germansuperCup : "3"},
			{name : "VfLWolfsburg",logo : "wolfsburg.png", firstDivision : "1", germanCup : "1", germansuperCup : "1"}]},
		{league : "Ligue 1",logo : "ligue1.png", page : "Ligue 1", clubs : [{name : "Amiens SC", logo : "amiens.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
			{name : "Angers SCO", logo : "angers.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
			{name : "Girondins de Bordeaux", logo : "bordeaux.png", firstDivision : "6", franceCup : "4", leagueCup : "3", supercupFrance : "2"},
			{name : "SM Caen", logo : "caen.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
			{name : "Dijon FCO", logo : "dijon.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
			{name : "En Avant de Guingamp", logo : "guingamp.png", firstDivision : "0", franceCup : "2", leagueCup : "0", supercupFrance : "0"},
			{name : "Lille OSC", logo : "lille.png", firstDivision : "3", franceCup : "6", leagueCup : "0", supercupFrance : "0"},
			{name : "Olympique Lyonnais", logo : "lyon.png", firstDivision : "7", franceCup : "5", leagueCup : "1", supercupFrance : "7"},
			{name : "Olympique de Marseille", logo : "marseille.png", firstDivision : "9", franceCup : "10", leagueCup : "3", supercupFrance : "3"},
			{name : "AS Monaco", logo : "monaco.png", firstDivision : "8", franceCup : "5", leagueCup : "1", supercupFrance : "2"},
			{name : "Montpellier HSC", logo : "montpellier.png", firstDivision : "1", franceCup : "2", leagueCup : "0", supercupFrance : "0"},
			{name : "FC Nantes", logo : "nantes.png", firstDivision : "8", franceCup : "3", leagueCup : "0", supercupFrance : "3"},
			{name : "OGC Nice", logo : "nice.png", firstDivision : "4", franceCup : "3", leagueCup : "0", supercupFrance : "1"},
			{name : "Nimes Olympique", logo : "nimes.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
			{name : "Paris Saint-Germain",logo : "psg.png", firstDivision : "7", franceCup : "12", leagueCup : "8", supercupFrance : "8"},
			{name : "Stade de Reims", logo : "reims.png", firstDivision : "6", franceCup : "2", leagueCup : "0", supercupFrance : "4"},
			{name : "Stade Rennais",logo : "rennes.png", firstDivision : "0", franceCup : "2", leagueCup : "0", supercupFrance : "1"},
			{name : "AS Saint-Etienne", logo : "saintetienne.png", firstDivision : "10", franceCup : "6", leagueCup : "1", supercupFrance : "5"},
			{name : "RC Strasbourg Alsace",logo : "strasbourg.png", firstDivision : "1", franceCup : "3", leagueCup : "2", supercupFrance : "0"},
			{name : "Toulouse FC",logo : "toulouse.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"}]}];


var bigFive = document.getElementById("bigFive");
var menu = document.getElementById("menu");
var championship = document.getElementById("championship");
var teamsList = document.getElementById("teamsList");
var informationsTeam = document.querySelector(".informationsTeam");
var informationsBloc = document.querySelector("#informationsBloc");
var championships = document.getElementById("championships");
var displayForm = document.getElementById("displayForm");
var displayTitle = document.getElementById("displayTitle");
var contact = document.getElementById("contact");
var errorMessage = document.getElementById("errorMessage");
var theForm = document.getElementById("form");
var name1 = document.getElementById("name");
var mail = document.getElementById("mail");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

function index(){

	for( var i = 0 ; i < countries.length ; i++ ){

		var country = countries[i];

		if(menu != null){
			menu.innerHTML += "<ul><li class='page' data-league='" + country.page + "'>" + country.page + "</li></ul>";
		}
		if(bigFive != null){
			bigFive.innerHTML += "<div id='competition'><h2>" + country.league + "</h2><div id='logo'><img src='logos/" + 
			country.logo + "'></div><button class='button' data-league='" + country.page + "'>Click here</button></div>";
		}

		displayTitle.innerHTML = "<h1>The 5 biggest championships 2018-2019</h1>";

		var pages = document.querySelectorAll(".page");
		for(var j = 0 ; j < pages.length ; j++){
			var page = pages[j];
			page.addEventListener("click", renderleagues);
		}
		var buttons = document.querySelectorAll(".button");
		for(var j = 0 ; j < buttons.length ; j++){
			var button = buttons[j];
			button.addEventListener("click", renderleagues);
		}

		function renderleagues(e){

			var dataLeague = this.getAttribute("data-league");
			console.log(dataLeague);

			championship.innerHTML = "";
			teamsList.innerHTML = "";

			if(dataLeague === "Premier League" || dataLeague === "La Liga" || dataLeague === "Serie A" || dataLeague === "Bundesliga" || dataLeague === "Ligue 1"){
				championships.style.display = "flex";
				bigFive.style.display = "none";
				informationsBloc.style.display = "none";	
				displayForm.style.display = "none";
				championship.style.display = "flex";

				renderClubs(dataLeague);
			}	

			if(dataLeague === "Home"){
				bigFive.style.display = "flex";
				championships.style.display = "none";
				displayForm.style.display = "none";
				displayTitle.innerHTML = "<h1>The 5 biggest championships 2018-2019</h1>";
			}
		}
	}
}

function filterLeague(param){

	for(var i = 0 ; i < countries.length ; i++){

		countries[i];
		if(countries[i].league === param){
			return countries[i];
		}	
	}
}

index();

////////////////////////////////////////////////////////////////////////////
	
function renderClubs(dataLeague){
	// get country object
	// instead of for use only the fetched country and render only the country
	
	var leagueObject = filterLeague(dataLeague);

	displayTitle.innerHTML = "<h1>" + dataLeague + "</h1>";

	for(var i = 0 ; i < leagueObject.clubs.length ; i++){
		if(championship != null){
			championship.innerHTML += "<div class='club' data-team='"+ leagueObject.clubs[i].name + 
			"'><h2>" + leagueObject.clubs[i].name 
			+ "</h2><div class='logoTeam'><img src='teams/" + 
			leagueObject.clubs[i].logo + "'></div></div>";	
		}

		if(teamsList != null){
			teamsList.innerHTML += "<tr><td class='clubList' data-team='"+ leagueObject.clubs[i].name +
			 "'>" + leagueObject.clubs[i].name + "</td></tr>";
		}

		initializeClickHandler();	
	}	
}

function initializeClickHandler(){

	var detail = document.querySelectorAll(".club");
	for(var z = 0 ; z < detail.length ; z++){
		var currentDetailBtn = detail[z];
		currentDetailBtn.addEventListener('click', renderTrophies);		
	}
	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophies);		
	}
}

function renderTrophies(e){

	var dataTeam = this.getAttribute('data-team');
	display();
	for(var a = 0 ; a < countries.length ; a++){
		for(var y = 0 ; y < countries[a].clubs.length ; y++){

			if(dataTeam === countries[a].clubs[y].name){
		
				if(a === 1){
					var teamDetailsHtml = "<h2>" + countries[a].clubs[y].name + " Trophies</h2><img src='teams/" + countries[a].clubs[y].logo + "'><p>Premier League : " + countries[a].clubs[y].firstDivision 
					+ "</p><p>FA Cup : " + countries[a].clubs[y].faCup + "</p><p>League Cup : " + countries[a].clubs[y].leagueCup 
					+ "</p><p>CommunityShield : " + countries[a].clubs[y].communityShield + "</p>";
				}
				if(a === 2){
					var teamDetailsHtml = "<h2>" + countries[a].clubs[y].name + " Trophies</h2><img src='teams/" + countries[a].clubs[y].logo + "'><p>La Liga : " + countries[a].clubs[y].primeraDivision 
					+ "</p><p>Copa Del Rey : " + countries[a].clubs[y].copaDelRey + "</p><p>Super Copa de Espana: " + countries[a].clubs[y].supercopaDeEspana + "</p>";
				}
				if(a === 3){
					var teamDetailsHtml = "<h2>" + countries[a].clubs[y].name + " Trophies</h2><img src='teams/" + countries[a].clubs[y].logo + "'><p>Serie A : " + countries[a].clubs[y].firstDivision 
					+ "</p><p>Italia Cup : " + countries[a].clubs[y].italiaCup + "</p><p>Super Cup de Italia : " + countries[a].clubs[y].supercupItalia + "</p>";
				}
				if(a === 4){
					var teamDetailsHtml = "<h2>" + countries[a].clubs[y].name + " Trophies</h2><img src='teams/" + countries[a].clubs[y].logo + "'><p>Bundesliga : " + countries[a].clubs[y].firstDivision 
					+ "</p><p>German Cup : " + countries[a].clubs[y].germanCup + "</p><p>German Super Cup : " + countries[a].clubs[y].germansuperCup + "</p>";
				}
				if(a === 5){
					var teamDetailsHtml = "<h2>" + countries[a].clubs[y].name + " Trophies</h2><img src='teams/" + countries[a].clubs[y].logo + "'><p>Ligue 1 : " + countries[a].clubs[y].firstDivision 
					+ "</p><p>Coupe de France : " + countries[a].clubs[y].franceCup + "</p><p>Coupe de la Ligue : " + countries[a].clubs[y].leagueCup 
					+ "</p><p>Troph\u00e9e des Champions : " + countries[a].clubs[y].supercupFrance + "</p>";
				}
				
				getClubByName(teamDetailsHtml, a, y);		
			}
		}
	}
}

function getClubByName(teamDetailsHtml, a, y){	

	getClubElementByName(a, y);
	informationsTeam.innerHTML = teamDetailsHtml;
}	

function getClubElementByName(a, y){

	var detailsTeam = document.querySelector('.club[data-team="' + countries[a].clubs[y].name +'"]');
	console.log(detailsTeam);
}

function display(){

	if(championship != null){
		championship.style.display = "none";
	}
	if(informationsBloc != null){
		informationsBloc.style.display = "block";	
	}
}
		

////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////

//Contact-Form

if(contact != null){
	contact.addEventListener("click", form);
}

function form(){

	championships.style.display = "none";
	informationsBloc.style.display = "none";
	bigFive.style.display = "none";
	displayForm.style.display = "block";
	displayTitle.innerHTML = "<h1>Contact-Form</h1>";

	errorMessage.style.display = "none";

	name1.value = "";
	mail.value = "";
	subject.value = "";
	message.value = "";

}


if(theForm != null){
	theForm.addEventListener("submit", validation);
}

var contactForm = {
		name1 : "",
		mail : "",
		subject : "",
		message : ""
};

function validation(event){

	event.preventDefault();


	contactForm.name1 = name1.value;
	contactForm.mail = mail.value;
	contactForm.subject = subject.value;
	contactForm.message = message.value;

	if(name1.value === "" || mail.value === "" || subject.value === "" || message.value === ""){

		errorMessage.style.display = "block";
		errorMessage.innerHTML = "<i class='fas red fa-exclamation-triangle'></i> You must fill all the fields";
		errorMessage.style.border = "solid red 2px";
		errorMessage.style.color = "red";
		errorMessage.style.backgroundColor = "white";
		errorMessage.style.borderRadius = "10px";
		errorMessage.style.padding = "10px";

		return false;
	}

	errorMessage.style.display = "block";
	errorMessage.innerHTML = "<i class='fas green fa-check-circle'></i> Thank you !";
	errorMessage.style.border = "solid green 2px";
	errorMessage.style.color = "green";
	errorMessage.style.backgroundColor = "white";
	errorMessage.style.borderRadius = "10px";
	errorMessage.style.padding = "10px";


	localStorage.setItem("Contact-Form", JSON.stringify(contactForm));

	return true;

}


















