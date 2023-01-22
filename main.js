import { countries } from "./data.js";

const bigFive = document.getElementById("bigFive");
const menu = document.querySelector("#menu ul");
const championship = document.querySelector(".championship");
const teamsList = document.getElementById("teamsList");
const informationsTeam = document.querySelector(".informationsTeam");
const informationsBloc = document.querySelector("#informationsBloc");
const championships = document.getElementById("championships");
const displayForm = document.getElementById("displayForm");
const displayTitle = document.getElementById("displayTitle");
const contact = document.getElementById("contact");
const errorMessage = document.getElementById("errorMessage");
const theForm = document.getElementById("form");
const name1 = document.getElementById("name");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function index() {
  countries.forEach((country) => {
    menu.innerHTML +=
      "<li class='page' data-league='" +
      country.page +
      "'>" +
      country.page +
      "</li>";
    bigFive.innerHTML +=
      "<div class='competition'><h2>" +
      country.league +
      "</h2><div id='logo'><img src='../assets/logos/" +
      country.logo +
      "' alt='" +
      country.league +
      "'></div><button class='button' data-league='" +
      country.page +
      "'>Click here</button></div>";
    displayTitle.innerHTML = "<h1>The 5 biggest championships 2018-2019</h1>";
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.addEventListener("click", renderleagues);
    });
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", renderleagues);
    });

    function renderleagues(e) {
      const dataLeague = this.getAttribute("data-league");

      championship.innerHTML = "";
      teamsList.innerHTML = "";
      if (
        dataLeague === "Premier League" ||
        dataLeague === "La Liga" ||
        dataLeague === "Serie A" ||
        dataLeague === "Bundesliga" ||
        dataLeague === "Ligue 1"
      ) {
        championships.style.display = "flex";
        bigFive.style.display = "none";
        informationsBloc.style.display = "none";
        displayForm.style.display = "none";
        championship.style.display = "grid";
        renderClubs(dataLeague);
      }
      if (dataLeague === "Home") {
        bigFive.style.display = "flex";
        championships.style.display = "none";
        displayForm.style.display = "none";
        displayTitle.innerHTML =
          "<h1>The 5 biggest championships 2018-2019</h1>";
      }
    }
  });
}

function filterLeague(param) {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].league === param) {
      return countries[i];
    }
  }
}

index();

////////////////////////////////////////////////////////////////////////////

function renderClubs(dataLeague) {
  let leagueObject = filterLeague(dataLeague);

  displayTitle.innerHTML = "<h1>" + dataLeague + "</h1>";
  leagueObject.clubs.forEach((club) => {
    championship.innerHTML +=
      "<div class='club' data-team='" +
      club.name +
      "'><h2>" +
      club.name +
      "</h2><div class='logoTeam'><img src='../assets/teams/" +
      club.logo +
      "' alt='" +
      club.name +
      "'></div></div>";
    teamsList.innerHTML +=
      "<tr><td class='clubList' data-team='" +
      club.name +
      "'>" +
      club.name +
      "</td></tr>";
    initializeClickHandler();
  });
}

function initializeClickHandler() {
  const detail = document.querySelectorAll(".club");
  const detailClubList = document.querySelectorAll(".clubList");

  detail.forEach((currentDetailBtn) => {
    currentDetailBtn.addEventListener("click", renderTrophies);
  });

  detailClubList.forEach((currentDetailBtn) => {
    currentDetailBtn.addEventListener("click", renderTrophies);
  });
}

function renderTrophies(e) {
  const dataTeam = this.getAttribute("data-team");
  displayClubInformations();
  let teamObject = getClubByName(dataTeam);
  let teamDetailsHtml =
    "<h2>" +
    teamObject.name +
    "</h2><img src='../assets/teams/" +
    teamObject.logo +
    "' alt='" +
    teamObject.name +
    "'><h3>Trophies</h3>";
  let teamTrophies = getClubTrophies(teamObject);
  informationsTeam.innerHTML = teamDetailsHtml + teamTrophies;
}

function getClubTrophies(teamObject) {
  let teamTrophies = "";
  teamObject.titles.forEach((trophies) => {
    teamTrophies += getTrophyHtml(trophies);
  });
  return teamTrophies;
}

function getTrophyHtml(trophy) {
  return "<p>" + trophy.title + " : " + trophy.count + "</p>";
}

function getClubByName(param) {
  for (let i = 0; i < countries.length; i++) {
    for (let index = 0; index < countries[i].clubs.length; index++) {
      if (countries[i].clubs[index].name === param) {
        return countries[i].clubs[index];
      }
    }
  }
}

function displayClubInformations() {
  championship.style.display = "none";
  informationsBloc.style.display = "block";
}

////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////

//Contact-Form

contact.addEventListener("click", form);

function form() {
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

theForm.addEventListener("submit", validation);

let contactForm = {
  name1: "",
  mail: "",
  subject: "",
  message: "",
};

function validation(event) {
  event.preventDefault();
  contactForm.name1 = name1.value;
  contactForm.mail = mail.value;
  contactForm.subject = subject.value;
  contactForm.message = message.value;
  if (
    name1.value === "" ||
    mail.value === "" ||
    subject.value === "" ||
    message.value === ""
  ) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML =
      "<i class='fas red fa-exclamation-triangle'></i> You must fill all the fields";
    errorMessage.style.border = "solid red 2px";
    errorMessage.style.color = "red";
    errorMessage.style.backgroundColor = "white";
    errorMessage.style.borderRadius = "10px";
    errorMessage.style.padding = "10px";
    return false;
  }
  errorMessage.style.display = "block";
  errorMessage.innerHTML =
    "<i class='fas green fa-check-circle'></i> Thank you !";
  errorMessage.style.border = "solid green 2px";
  errorMessage.style.color = "green";
  errorMessage.style.backgroundColor = "white";
  errorMessage.style.borderRadius = "10px";
  errorMessage.style.padding = "10px";
  localStorage.setItem("Contact-Form", JSON.stringify(contactForm));
  return true;
}
