const countries = [
  {
    league: "Premier League",
    logo: "premierleague.png",
    page: "Premier League",
    clubs: [
      {
        name: "Arsenal",
        logo: "arsenal.png",
        titles: [
          { title: "Premiere League", count: 13 },
          { title: "FA Cup", count: 13 },
          { title: "League Cup", count: 2 },
          { title: "Community Shield", count: 15 },
        ],
      },
      {
        name: "Bournemouth",
        logo: "bournemouth.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Brighton & Hove Albion",
        logo: "brighton.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Burnley",
        logo: "burnley.png",
        titles: [
          { title: "Premiere League", count: 2 },
          { title: "FA Cup", count: 1 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Cardiff City",
        logo: "cardiff.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 1 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Chelsea",
        logo: "chelsea.png",
        titles: [
          { title: "Premiere League", count: 6 },
          { title: "FA Cup", count: 8 },
          { title: "League Cup", count: 5 },
          { title: "Community Shield", count: 4 },
        ],
      },
      {
        name: "Crystal Palace",
        logo: "crystalpalace.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Everton",
        logo: "everton.png",
        titles: [
          { title: "Premiere League", count: 9 },
          { title: "FA Cup", count: 5 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 9 },
        ],
      },
      {
        name: "Fulham",
        logo: "fulham.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Huddersfield Town",
        logo: "huddersfield.png",
        titles: [
          { title: "Premiere League", count: 3 },
          { title: "FA Cup", count: 1 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Leicester City",
        logo: "leicester.png",
        titles: [
          { title: "Premiere League", count: 1 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 3 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Liverpool",
        logo: "liverpool.png",
        titles: [
          { title: "Premiere League", count: 18 },
          { title: "FA Cup", count: 7 },
          { title: "League Cup", count: 8 },
          { title: "Community Shield", count: 15 },
        ],
      },
      {
        name: "Manchester City",
        logo: "manchestercity.png",
        titles: [
          { title: "Premiere League", count: 5 },
          { title: "FA Cup", count: 5 },
          { title: "League Cup", count: 5 },
          { title: "Community Shield", count: 5 },
        ],
      },
      {
        name: "Manchester United",
        logo: "manchesterunited.png",
        titles: [
          { title: "Premiere League", count: 20 },
          { title: "FA Cup", count: 12 },
          { title: "League Cup", count: 5 },
          { title: "Community Shield", count: 21 },
        ],
      },
      {
        name: "Newcastle United",
        logo: "newcastle.png",
        titles: [
          { title: "Premiere League", count: 4 },
          { title: "FA Cup", count: 6 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Southampton",
        logo: "southampton.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 1 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Tottenham Hotspur",
        logo: "tottenham.png",
        titles: [
          { title: "Premiere League", count: 2 },
          { title: "FA Cup", count: 8 },
          { title: "League Cup", count: 4 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "Watford",
        logo: "watford.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 0 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 0 },
        ],
      },
      {
        name: "West Ham United",
        logo: "westham.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 3 },
          { title: "League Cup", count: 0 },
          { title: "Community Shield", count: 1 },
        ],
      },
      {
        name: "Wolverhampton Wanderers",
        logo: "wolves.png",
        titles: [
          { title: "Premiere League", count: 0 },
          { title: "FA Cup", count: 4 },
          { title: "League Cup", count: 2 },
          { title: "Community Shield", count: 4 },
        ],
      },
    ],
  },
  {
    league: "La Liga",
    logo: "laliga.png",
    page: "La Liga",
    clubs: [
      {
        name: "Deportivo Alaves",
        logo: "alaves.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "FC Barcelona",
        logo: "barcelona.png",
        titles: [
          { title: "La Liga", count: 25 },
          { title: "Copa del Rey", count: 30 },
          { title: "Super Copa de Espana", count: 13 },
        ],
      },
      {
        name: "Real Betis",
        logo: "betis.png",
        titles: [
          { title: "La Liga", count: 1 },
          { title: "Copa del Rey", count: 2 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Athletic Club",
        logo: "bilbao.png",
        titles: [
          { title: "La Liga", count: 8 },
          { title: "Copa del Rey", count: 23 },
          { title: "Super Copa de Espana", count: 2 },
        ],
      },
      {
        name: "RC Celta",
        logo: "celtavigo.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "SD Eibar",
        logo: "eibar.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "RCD Espanyol",
        logo: "espanyol.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 4 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Getafe CF",
        logo: "getafe.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Gigona FC",
        logo: "girona.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "SD Huesca",
        logo: "huesca.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "CD Leganes",
        logo: "leganes.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Levante UD",
        logo: "levante.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Atletico Madrid",
        logo: "atleticomadrid.png",
        titles: [
          { title: "La Liga", count: 10 },
          { title: "Copa del Rey", count: 10 },
          { title: "Super Copa de Espana", count: 2 },
        ],
      },
      {
        name: "Real Madrid",
        logo: "realmadrid.png",
        titles: [
          { title: "La Liga", count: 33 },
          { title: "Copa del Rey", count: 19 },
          { title: "Super Copa de Espana", count: 10 },
        ],
      },
      {
        name: "Sevilla FC",
        logo: "seville.png",
        titles: [
          { title: "La Liga", count: 1 },
          { title: "Copa del Rey", count: 5 },
          { title: "Super Copa de Espana", count: 1 },
        ],
      },
      {
        name: "Real Sociedad",
        logo: "realsociedad.png",
        titles: [
          { title: "La Liga", count: 2 },
          { title: "Copa del Rey", count: 2 },
          { title: "Super Copa de Espana", count: 1 },
        ],
      },
      {
        name: "Valladolid",
        logo: "valladolid.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Rayo Vallecano",
        logo: "realvallecano.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
      {
        name: "Valencia FC",
        logo: "valence.png",
        titles: [
          { title: "La Liga", count: 6 },
          { title: "Copa del Rey", count: 7 },
          { title: "Super Copa de Espana", count: 1 },
        ],
      },
      {
        name: "Villareal CF",
        logo: "villareal.png",
        titles: [
          { title: "La Liga", count: 0 },
          { title: "Copa del Rey", count: 0 },
          { title: "Super Copa de Espana", count: 0 },
        ],
      },
    ],
  },
  {
    league: "Serie A",
    logo: "seriea.png",
    page: "Serie A",
    clubs: [
      {
        name: "Atalanta",
        logo: "atalanta.png",
        titles: [
          { title: "Serie A", count: 6 },
          { title: "Coppa Italia", count: 7 },
          { title: "Super Cup de Italia", count: 1 },
        ],
      },
      {
        name: "Bologna",
        logo: "bologne.png",
        titles: [
          { title: "Serie A", count: 7 },
          { title: "Coppa Italia", count: 2 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Cagliari",
        logo: "cagliari.png",
        titles: [
          { title: "Serie A", count: 1 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Chievo Verona",
        logo: "chievo.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Empoli",
        logo: "empoli.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Fiorentina",
        logo: "fiorentina.png",
        titles: [
          { title: "Serie A", count: 2 },
          { title: "Coppa Italia", count: 6 },
          { title: "Super Cup de Italia", count: 1 },
        ],
      },
      {
        name: "Frosinone",
        logo: "frosinone.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Genoa",
        logo: "genoa.png",
        titles: [
          { title: "Serie A", count: 9 },
          { title: "Coppa Italia", count: 1 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Internazionale",
        logo: "intermilan.png",
        titles: [
          { title: "Serie A", count: 18 },
          { title: "Coppa Italia", count: 7 },
          { title: "Super Cup de Italia", count: 5 },
        ],
      },
      {
        name: "Juventus",
        logo: "juventus.png",
        titles: [
          { title: "Serie A", count: 34 },
          { title: "Coppa Italia", count: 13 },
          { title: "Super Cup de Italia", count: 7 },
        ],
      },
      {
        name: "SS Lazio",
        logo: "lazio.png",
        titles: [
          { title: "Serie A", count: 2 },
          { title: "Coppa Italia", count: 6 },
          { title: "Super Cup de Italia", count: 4 },
        ],
      },
      {
        name: "AC Milan",
        logo: "acmilan.png",
        titles: [
          { title: "Serie A", count: 18 },
          { title: "Coppa Italia", count: 5 },
          { title: "Super Cup de Italia", count: 7 },
        ],
      },
      {
        name: "Napoli",
        logo: "naples.png",
        titles: [
          { title: "Serie A", count: 2 },
          { title: "Coppa Italia", count: 5 },
          { title: "Super Cup de Italia", count: 2 },
        ],
      },
      {
        name: "Parma",
        logo: "parma.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 3 },
          { title: "Super Cup de Italia", count: 1 },
        ],
      },
      {
        name: "AS Roma",
        logo: "asroma.png",
        titles: [
          { title: "Serie A", count: 3 },
          { title: "Coppa Italia", count: 9 },
          { title: "Super Cup de Italia", count: 2 },
        ],
      },
      {
        name: "Sampdoria",
        logo: "sampdoria.png",
        titles: [
          { title: "Serie A", count: 1 },
          { title: "Coppa Italia", count: 4 },
          { title: "Super Cup de Italia", count: 1 },
        ],
      },
      {
        name: "Sassuolo",
        logo: "sassuolo.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "SPAL",
        logo: "spal.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Torino",
        logo: "torino.png",
        titles: [
          { title: "Serie A", count: 7 },
          { title: "Coppa Italia", count: 5 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
      {
        name: "Udinese",
        logo: "udinese.png",
        titles: [
          { title: "Serie A", count: 0 },
          { title: "Coppa Italia", count: 0 },
          { title: "Super Cup de Italia", count: 0 },
        ],
      },
    ],
  },
  {
    league: "Bundesliga",
    logo: "bundesliga.png",
    page: "Bundesliga",
    clubs: [
      {
        name: "FC Augsburg",
        logo: "augsburg.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "FC Bayern Munich",
        logo: "bayernmunich.png",
        titles: [
          { title: "Bundesliga", count: 28 },
          { title: "German Cup", count: 18 },
          { title: "German Super Cup", count: 7 },
        ],
      },
      {
        name: "Borussia Dortmund",
        logo: "dortmund.png",
        titles: [
          { title: "Bundesliga", count: 8 },
          { title: "German Cup", count: 4 },
          { title: "German Super Cup", count: 6 },
        ],
      },
      {
        name: "Fortuna Dusseldorf",
        logo: "dusseldorf.png",
        titles: [
          { title: "Bundesliga", count: 1 },
          { title: "German Cup", count: 2 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "Eintracht Frankfurt",
        logo: "frankfurt.png",
        titles: [
          { title: "Bundesliga", count: 1 },
          { title: "German Cup", count: 5 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "SC Freiburg",
        logo: "freiburg.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "Hannover 96",
        logo: "hannover.png",
        titles: [
          { title: "Bundesliga", count: 2 },
          { title: "German Cup", count: 1 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "Hertha Berlin",
        logo: "herthaberlin.png",
        titles: [
          { title: "Bundesliga", count: 2 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "TSG 1899 Hoffenheim",
        logo: "hoffenheim.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "RB Leipzig",
        logo: "leipzig.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "Bayer Leverkusen",
        logo: "bayerleverkusen.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 1 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "FSV Mainz 05",
        logo: "mainz.png",
        titles: [
          { title: "Bundesliga", count: 0 },
          { title: "German Cup", count: 0 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "Borussia Monchengladbach",
        logo: "monchengladbach.png",
        titles: [
          { title: "Bundesliga", count: 5 },
          { title: "German Cup", count: 3 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "FC Nurnberg",
        logo: "nurnberg.png",
        titles: [
          { title: "Bundesliga", count: 9 },
          { title: "German Cup", count: 4 },
          { title: "German Super Cup", count: 0 },
        ],
      },
      {
        name: "FC Schalke 04",
        logo: "schalke04.png",
        titles: [
          { title: "Bundesliga", count: 7 },
          { title: "German Cup", count: 5 },
          { title: "German Super Cup", count: 1 },
        ],
      },
      {
        name: "VfB Stuttgart",
        logo: "stuttgart.png",
        titles: [
          { title: "Bundesliga", count: 5 },
          { title: "German Cup", count: 3 },
          { title: "German Super Cup", count: 1 },
        ],
      },
      {
        name: "Werder Bremen",
        logo: "werderbremen.png",
        titles: [
          { title: "Bundesliga", count: 4 },
          { title: "German Cup", count: 6 },
          { title: "German Super Cup", count: 3 },
        ],
      },
      {
        name: "VfLWolfsburg",
        logo: "wolfsburg.png",
        titles: [
          { title: "Bundesliga", count: 1 },
          { title: "German Cup", count: 1 },
          { title: "German Super Cup", count: 1 },
        ],
      },
    ],
  },
  {
    league: "Ligue 1",
    logo: "ligue1.png",
    page: "Ligue 1",
    clubs: [
      {
        name: "Amiens SC",
        logo: "amiens.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Angers SCO",
        logo: "angers.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Girondins de Bordeaux",
        logo: "bordeaux.png",
        titles: [
          { title: "Ligue 1", count: 6 },
          { title: "Coupe de France", count: 4 },
          { title: "Coupe de la ligue", count: 3 },
          { title: "Troph\u00e9e des Champions", count: 2 },
        ],
      },
      {
        name: "SM Caen",
        logo: "caen.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Dijon FCO",
        logo: "dijon.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "En Avant de Guingamp",
        logo: "guingamp.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 2 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Lille OSC",
        logo: "lille.png",
        titles: [
          { title: "Ligue 1", count: 3 },
          { title: "Coupe de France", count: 6 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Olympique Lyonnais",
        logo: "lyon.png",
        titles: [
          { title: "Ligue 1", count: 7 },
          { title: "Coupe de France", count: 5 },
          { title: "Coupe de la ligue", count: 1 },
          { title: "Troph\u00e9e des Champions", count: 7 },
        ],
      },
      {
        name: "Olympique de Marseille",
        logo: "marseille.png",
        titles: [
          { title: "Ligue 1", count: 9 },
          { title: "Coupe de France", count: 10 },
          { title: "Coupe de la ligue", count: 3 },
          { title: "Troph\u00e9e des Champions", count: 3 },
        ],
      },
      {
        name: "AS Monaco",
        logo: "monaco.png",
        titles: [
          { title: "Ligue 1", count: 8 },
          { title: "Coupe de France", count: 5 },
          { title: "Coupe de la ligue", count: 1 },
          { title: "Troph\u00e9e des Champions", count: 2 },
        ],
      },
      {
        name: "Montpellier HSC",
        logo: "montpellier.png",
        titles: [
          { title: "Ligue 1", count: 1 },
          { title: "Coupe de France", count: 2 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "FC Nantes",
        logo: "nantes.png",
        titles: [
          { title: "Ligue 1", count: 8 },
          { title: "Coupe de France", count: 3 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 3 },
        ],
      },
      {
        name: "OGC Nice",
        logo: "nice.png",
        titles: [
          { title: "Ligue 1", count: 4 },
          { title: "Coupe de France", count: 3 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 1 },
        ],
      },
      {
        name: "Nimes Olympique",
        logo: "nimes.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Paris Saint-Germain",
        logo: "psg.png",
        titles: [
          { title: "Ligue 1", count: 7 },
          { title: "Coupe de France", count: 12 },
          { title: "Coupe de la ligue", count: 8 },
          { title: "Troph\u00e9e des Champions", count: 8 },
        ],
      },
      {
        name: "Stade de Reims",
        logo: "reims.png",
        titles: [
          { title: "Ligue 1", count: 6 },
          { title: "Coupe de France", count: 2 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 4 },
        ],
      },
      {
        name: "Stade Rennais",
        logo: "rennes.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 2 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 1 },
        ],
      },
      {
        name: "AS Saint-Etienne",
        logo: "saintetienne.png",
        titles: [
          { title: "Ligue 1", count: 10 },
          { title: "Coupe de France", count: 6 },
          { title: "Coupe de la ligue", count: 1 },
          { title: "Troph\u00e9e des Champions", count: 5 },
        ],
      },
      {
        name: "RC Strasbourg Alsace",
        logo: "strasbourg.png",
        titles: [
          { title: "Ligue 1", count: 1 },
          { title: "Coupe de France", count: 3 },
          { title: "Coupe de la ligue", count: 2 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
      {
        name: "Toulouse FC",
        logo: "toulouse.png",
        titles: [
          { title: "Ligue 1", count: 0 },
          { title: "Coupe de France", count: 0 },
          { title: "Coupe de la ligue", count: 0 },
          { title: "Troph\u00e9e des Champions", count: 0 },
        ],
      },
    ],
  },
];

export { countries };
