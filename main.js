'use strict';

var countries = [{league : "Premier League",logo : "premierleague.png",link : "premierleague.html"},
		{league : "La Liga",logo : "laliga.png",link : "liga.html"},
		{league : "Serie A",logo : "seriea.png",link : "seriea.html"},
		{league : "Bundesliga",logo : "bundesliga.png",link : "bundesliga.html"},
		{league : "Ligue 1",logo : "ligue1.png",link : "ligue1.html"}];


function index(){

	for( var i = 0 ; i < countries.length ; i++ ){

		var country = countries[i];

		if(document.getElementById("bigFive") != null){
			document.getElementById("bigFive").innerHTML += "<div id='competition'><h2>" + country.league + "</h2><div id='logo'><img src='logos/" + 
			country.logo + "'></div><a class='button' href='" + country.link + "'>Click here</a></div>";
		}
	}
}

index()

////////////////////////////////////////////////////////////////////////////

var pages = [{name : "Home", link : "index.html"},
	{name : "Premier League", link : "premierleague.html"},
	{name : "La Liga", link : "liga.html"},		
	{name : "Serie A", link : "seriea.html"},
	{name : "Bundesliga", link : "bundesliga.html"},
	{name : "Ligue 1", link : "ligue1.html"}];


function menu(){
	
	for(var i = 0 ; i < pages.length ; i++){

		var page = pages[i];
		
		if(document.getElementById("menu") != null){
			document.getElementById("menu").innerHTML += "<ul><li><a href='" + page.link + "'>" + page.name + "</a></li></ul>";
		}
		
	}

}

menu();

////////////////////////////////////////////////////////////////////////////

var premierLeague = [{id : "1", name : "Arsenal",logo : "arsenal.png", firstDivision : "13", faCup : "13", leagueCup : "2", communityShield : "15"},
	{id : "2", name : "Bournemouth",logo : "bournemouth.png" , firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
	{id : "3", name : "Brighton & Hove Albion",logo : "brighton.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "1"},
	{id : "4", name : "Burnley",logo : "burnley.png", firstDivision : "2", faCup : "1", leagueCup : "0", communityShield : "1"},
	{id : "5", name : "Cardiff City",logo : "cardiff.png", firstDivision : "0", faCup : "1", leagueCup : "0", communityShield : "1"},
	{id : "6", name : "Chelsea",logo : "chelsea.png", firstDivision : "6", faCup : "8", leagueCup : "5", communityShield : "4"},
	{id : "7", name : "Crystal Palace",logo : "crystalpalace.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
	{id : "8", name : "Everton",logo : "everton.png", firstDivision : "9", faCup : "5", leagueCup : "0", communityShield : "9"},
	{id : "9", name : "Fulham",logo : "fulham.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
	{id : "10", name : "Huddersfield Town",logo : "huddersfield.png", firstDivision : "3", faCup : "1", leagueCup : "0", communityShield : "0"},
	{id : "11", name : "Leicester City",logo : "leicester.png", firstDivision : "1", faCup : "0", leagueCup : "3", communityShield : "1"},
	{id : "12", name : "Liverpool",logo : "liverpool.png", firstDivision : "18", faCup : "7", leagueCup : "8", communityShield : "15"},
	{id : "13", name : "Manchester City",logo : "manchestercity.png", firstDivision : "5", faCup : "5", leagueCup : "5", communityShield : "5"},
	{id : "14", name : "Manchester United",logo : "manchesterunited.png", firstDivision : "20", faCup : "12", leagueCup : "5", communityShield : "21"},
	{id : "15", name : "Newcastle United",logo : "newcastle.png", firstDivision : "4", faCup : "6", leagueCup : "0", communityShield : "1"},
	{id : "16", name : "Southampton",logo : "southampton.png", firstDivision : "0", faCup : "0", leagueCup : "1", communityShield : "0"},
	{id : "17", name : "Tottenham Hotspur",logo : "tottenham.png", firstDivision : "2", faCup : "8", leagueCup : "4", communityShield : "0"},
	{id : "18", name : "Watford",logo : "watford.png", firstDivision : "0", faCup : "0", leagueCup : "0", communityShield : "0"},
	{id : "19", name : "West Ham United",logo : "westham.png",firstDivision : "0", faCup : "3", leagueCup : "0", communityShield : "1"},
	{id : "20", name : "Wolverhampton Wanderers",logo : "wolves.png", firstDivision : "0", faCup : "4", leagueCup : "2", communityShield : "4"}];
	

function renderPremierLeagueClubs(){

	for(var i = 0 ; i < premierLeague.length ; i++){

		premierLeague[i];

		if(document.getElementById("premierLeague") != null){
			document.getElementById("premierLeague").innerHTML += "<div class='club' data-team='"+ premierLeague[i].name + "'><h2>" + premierLeague[i].name 
			+ "</h2><div class='logoTeam'><img src='teams/PremierLeague/" + 
			premierLeague[i].logo + "'></div></div>";
		}
		
		if(document.getElementById("teamsListEngland") != null){
			document.getElementById("teamsListEngland").innerHTML += "<tr><td class='clubList' data-team='"+ premierLeague[i].name + "'>" + premierLeague[i].name + "</td></tr>";
		}

		clickEventHandlerForPremierLeague();
		
	}	
}

function clickEventHandlerForPremierLeague(){

	var detail = document.querySelectorAll(".club");
	for(var z = 0 ; z < detail.length ; z++){
		var currentDetailBtn = detail[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForPremierLeague);		
	}

	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForPremierLeague);		
	}
}

function renderTrophiesForPremierLeague(e){
	var dataTeam = this.getAttribute('data-team');

	displayForPremierLeague();

	for(var y = 0 ; y < premierLeague.length ; y++){
		if(dataTeam === premierLeague[y].name){
			var teamDetailsHtml = "<h2>" + premierLeague[y].name + " Trophies</h2><img src='teams/PremierLeague/" + premierLeague[y].logo + "'><p>First Division : " + premierLeague[y].firstDivision 
			+ "</p><p>FA Cup : " + premierLeague[y].faCup + "</p><p>League Cup : " + premierLeague[y].leagueCup 
			+ "</p><p>CommunityShield : " + premierLeague[y].communityShield + "</p>";
			var informationsTeam = document.querySelector(".informationsTeam");
					
			if(informationsTeam != null){
				var detailsTeam = document.querySelector('.club[data-team="' + premierLeague[y].name +'"]');
				informationsTeam.innerHTML = teamDetailsHtml;
				console.log(detailsTeam);
			}				
		}
	}
}		

function displayForPremierLeague(){
	if(document.querySelector("#premierLeague") != null){
		document.querySelector("#premierLeague").style.display = "none";
	}
	if(document.querySelector("#informationsBloc") != null){
		document.querySelector("#informationsBloc").style.display = "block";	
	}
}

renderPremierLeagueClubs();			

////////////////////////////////////////////////////////////////////////////


var liga = [{name : "Deportivo Alaves",logo : "alaves.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"},
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
	{name : "Villareal CF",logo : "villareal.png", primeraDivision : "0", copaDelRey : "0", supercopaDeEspana : "0"}];


function renderLigaClubs(){

	for(var i = 0 ; i < liga.length ; i++){

		liga[i];

		if(document.getElementById("liga") != null){
			document.getElementById("liga").innerHTML += "<div class='club' data-team='"+ liga[i].name + "'><h2>" +
			liga[i].name + "</h2><div id='teams'><img src='teams/LaLiga/" + liga[i].logo + "'></div></div>";
		}
		

		if(document.getElementById("teamsListSpain") != null){
			document.getElementById("teamsListSpain").innerHTML += "<tr><td class='clubList' data-team='"+ liga[i].name + "'>" + liga[i].name + "</td></tr>";
		}

		clickEventHandlerForLiga();
	}
}

function clickEventHandlerForLiga(){

	var detailClub = document.querySelectorAll(".club");
	for(var z = 0 ; z < detailClub.length ; z++){
		var currentDetailBtn = detailClub[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForLiga);		
	}

	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForLiga);		
	}
}

function renderTrophiesForLiga(e){
	var dataTeam = this.getAttribute('data-team');

	displayForLiga();

	for(var y = 0 ; y < liga.length ; y++){
		if(dataTeam === liga[y].name){
			var teamDetailsHtml = "<h2>" + liga[y].name + " Trophies</h2><img src='teams/LaLiga/" + liga[y].logo + "'><p>Primera Division : " + liga[y].primeraDivision 
			+ "</p><p>Copa Del Rey : " + liga[y].copaDelRey + "</p><p>Supercopa De Espana : " + liga[y].supercopaDeEspana + "</p>";
			var informationsTeam = document.querySelector(".informationsTeam");
					
			if(informationsTeam != null){
				var detailsTeam = document.querySelector('.club[data-team="' + liga[y].name +'"]');
				informationsTeam.innerHTML = teamDetailsHtml;
				console.log(detailsTeam);
			}				
		}
	}
}		

function displayForLiga(){
	if(document.querySelector("#liga") != null){
		document.querySelector("#liga").style.display = "none";
	}
	if(document.querySelector("#informationsBloc") != null){
		document.querySelector("#informationsBloc").style.display = "block";	
	}
}


renderLigaClubs();


////////////////////////////////////////////////////////////////////////////

var serieA = [{name : "Atalanta", logo : "atalanta.png", firstDivision : "0", italiaCup : "1", supercupItalia : "0"},
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
	{name : "Udinese",logo : "udinese.png", firstDivision : "0", italiaCup : "0", supercupItalia : "0"}];

function renderSerieAClubs(){

	for(var i = 0 ; i < serieA.length ; i++){

		serieA[i];

		if(document.getElementById("serieA") != null){
			document.getElementById("serieA").innerHTML += "<div class='club' data-team='"+ serieA[i].name + "'><h2>" + serieA[i].name + "</h2><div id='teams'><img src='teams/serieA/" + 
			serieA[i].logo + "'></div></div>";
		}
		

		if(document.getElementById("teamsListItalia") != null){
			document.getElementById("teamsListItalia").innerHTML += "<tr><td class='clubList' data-team='"+ serieA[i].name + "'>" + serieA[i].name + "</td></tr>";
		}
		
		clickEventHandlerForSerieA();	
	}
}

function clickEventHandlerForSerieA(){

	var detailClub = document.querySelectorAll(".club");
	for(var z = 0 ; z < detailClub.length ; z++){
		var currentDetailBtn = detailClub[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForSerieA);		
	}

	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForSerieA);		
	}
}

function renderTrophiesForSerieA(e){
	var dataTeam = this.getAttribute('data-team');

	displayForSerieA();

	for(var y = 0 ; y < serieA.length ; y++){
		if(dataTeam === serieA[y].name){
			var teamDetailsHtml = "<h2>" + serieA[y].name + " Trophies</h2><img src='teams/SerieA/" + serieA[y].logo + "'><p>Campionato italiano : " + serieA[y].firstDivision 
			+ "</p><p>Coppa Italia : " + serieA[y].italiaCup + "</p><p>Supercoppa italiana : " + serieA[y].supercupItalia + "</p>";
			var informationsTeam = document.querySelector(".informationsTeam");
					
			if(informationsTeam != null){
				var detailsTeam = document.querySelector('.club[data-team="' + serieA[y].name +'"]');
				informationsTeam.innerHTML = teamDetailsHtml;
				console.log(detailsTeam);
			}				
		}
	}
}		

function displayForSerieA(){
	if(document.querySelector("#serieA") != null){
		document.querySelector("#serieA").style.display = "none";
	}
	if(document.querySelector("#informationsBloc") != null){
		document.querySelector("#informationsBloc").style.display = "block";	
	}
}

renderSerieAClubs();

////////////////////////////////////////////////////////////////////////////

var bundesliga = [{name : "FC Augsburg",logo : "augsburg.png", firstDivision : "0", germanCup : "0", germansuperCup : "0"},
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
	{name : "VfLWolfsburg",logo : "wolfsburg.png", firstDivision : "1", germanCup : "1", germansuperCup : "1"}];

function renderBundesligaClubs(){

	for(var i = 0 ; i < bundesliga.length ; i++){

		bundesliga[i];

		if(document.getElementById("bundesliga") != null){
			document.getElementById("bundesliga").innerHTML += "<div class='club' data-team='"+ bundesliga[i].name + "'><h2>" + bundesliga[i].name + "</h2><div id='teams'><img src='teams/Bundesliga/" + 
			bundesliga[i].logo + "'></div></div>";
		}

		if(document.getElementById("teamsListGermany") != null){
			document.getElementById("teamsListGermany").innerHTML += "<tr><td class='clubList' data-team='"+ bundesliga[i].name + "'>" + bundesliga[i].name + "</td></tr>";
		}

		clickEventHandlerForBundesliga();
	}
}

function clickEventHandlerForBundesliga(){

	var detailClub = document.querySelectorAll(".club");
	for(var z = 0 ; z < detailClub.length ; z++){
		var currentDetailBtn = detailClub[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForBundesliga);		
	}

	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForBundesliga);		
	}
}

function renderTrophiesForBundesliga(e){
	var dataTeam = this.getAttribute('data-team');

	displayForBundesliga();

	for(var y = 0 ; y < bundesliga.length ; y++){
		if(dataTeam === bundesliga[y].name){
			var teamDetailsHtml = "<h2>" + bundesliga[y].name + " Trophies</h2><img src='teams/Bundesliga/" + bundesliga[y].logo + "'><p>German Champions : " + bundesliga[y].firstDivision 
			+ "</p><p>German Cup : " + bundesliga[y].germanCup + "</p><p>German Super Cup : " + bundesliga[y].germansuperCup + "</p>";
			var informationsTeam = document.querySelector(".informationsTeam");
					
			if(informationsTeam != null){
				var detailsTeam = document.querySelector('.club[data-team="' + bundesliga[y].name +'"]');
				informationsTeam.innerHTML = teamDetailsHtml;
				console.log(detailsTeam);
			}				
		}
	}
}		

function displayForBundesliga(){
	if(document.querySelector("#bundesliga") != null){
		document.querySelector("#bundesliga").style.display = "none";
	}
	if(document.querySelector("#informationsBloc") != null){
		document.querySelector("#informationsBloc").style.display = "block";	
	}
}

renderBundesligaClubs();


////////////////////////////////////////////////////////////////////////////

var ligue1 = [{name : "Amiens SC", logo : "amiens.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"},
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
	{name : "Toulouse FC",logo : "toulouse.png", firstDivision : "0", franceCup : "0", leagueCup : "0", supercupFrance : "0"}];


function renderLigue1Clubs(){

	for(var i = 0 ; i < ligue1.length ; i++){

		ligue1[i];

		if(document.getElementById("ligue1") != null){
			document.getElementById("ligue1").innerHTML += "<div class='club' data-team='"+ ligue1[i].name + "'><h2>" + ligue1[i].name + "</h2><div id='teams'><img src='teams/Ligue1/" + 
			ligue1[i].logo + "'></div></div>";
		}
		

		if(document.getElementById("teamsListFrance") != null){
			document.getElementById("teamsListFrance").innerHTML += "<tr><td class='clubList' data-team='"+ ligue1[i].name + "'>" + ligue1[i].name + "</td></tr>";
		}

		clickEventHandlerForLigue1();
	}
}

function clickEventHandlerForLigue1(){

	var detailClub = document.querySelectorAll(".club");
	for(var z = 0 ; z < detailClub.length ; z++){
		var currentDetailBtn = detailClub[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForLigue1);		
	}

	var detailClubList = document.querySelectorAll(".clubList");
	for(var z = 0 ; z < detailClubList.length ; z++){
		var currentDetailBtn = detailClubList[z];
		currentDetailBtn.addEventListener('click', renderTrophiesForLigue1);		
	}
}

function renderTrophiesForLigue1(e){
	var dataTeam = this.getAttribute('data-team');

	displayForLigue1();

	for(var y = 0 ; y < ligue1.length ; y++){
		if(dataTeam === ligue1[y].name){
			var teamDetailsHtml = "<h2>" + ligue1[y].name + " Trophies</h2><img src='teams/Ligue1/" + ligue1[y].logo + "'><p>Championnat de France : " + ligue1[y].firstDivision 
			+ "</p><p>Coupe de France : " + ligue1[y].franceCup + "</p><p>Coupe de la ligue : " + ligue1[y].leagueCup + "</p><p>Supercoupe de France : " + ligue1[y].supercupFrance + "</p>";
			var informationsTeam = document.querySelector(".informationsTeam");
					
			if(informationsTeam != null){
				var detailsTeam = document.querySelector('.club[data-team="' + ligue1[y].name +'"]');
				informationsTeam.innerHTML = teamDetailsHtml;
				console.log(detailsTeam);
			}				
		}
	}
}		

function displayForLigue1(){
	if(document.querySelector("#ligue1") != null){
		document.querySelector("#ligue1").style.display = "none";
	}
	if(document.querySelector("#informationsBloc") != null){
		document.querySelector("#informationsBloc").style.display = "block";	
	}
}

renderLigue1Clubs();

////////////////////////////////////////////////////////////////////////////

var theForm = document.getElementById("form")
if(theForm != null){
	theForm.addEventListener("submit", validation, false);
}


var name1 = document.getElementById("name");
var mail = document.getElementById("mail");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

	var contactForm = {
		name1 : "",
		mail : "",
		subject : "",
		message : ""
	};

function validation(){

	contactForm.name1 = name1.value;
	contactForm.mail = mail.value;
	contactForm.subject = subject.value;
	contactForm.message = message.value;


	localStorage.setItem("Contact-Form", JSON.stringify(contactForm));

	
	return true;
}

















