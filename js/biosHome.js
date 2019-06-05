console.log("Bio Home JS is linked");
var team = [
  "Kevin",
  "Susie",
  "Justin",
  "Evan M",
  "Evan G",
  "Dani",
  "Mikey",
  "Abby"
];
var bioPages = [
  "kevin",
  "susie",
  "justin",
  "evanm",
  "evang",
  "dani",
  "mikey",
  "abby"
];
function createBioSection() {
  var playerNum = 0;
  //create bio rows
  for (var i = 0; i < 2; i++) {
    var bioRow = "bioRow" + i;
    var row = document.createElement("div");
    row.className = "row bios " + bioRow;
    //create bio columns
    for (var j = 0; j < 4; j++) {
      var playerName = team[playerNum];
      var playerURL = bioPages[playerNum];
      var bioImageString = "url(images/bios/" + playerURL + ".jpg)";

      //create anchor tags, div and add url
      var anchor = document.createElement("a");
      var col = document.createElement("div");
      anchor.setAttribute("href", "bios/" + playerURL + ".html");
      //add classes to anchor. append div to anchor.  append anchor to row
      anchor.className = "col-sm player";
      //setBackground Image
      anchor.style.backgroundImage = bioImageString;
      anchor.appendChild(col);
      row.appendChild(anchor);
      var playerHeader = document.createElement("h3");
      playerHeader.innerHTML = playerName;
      col.appendChild(playerHeader);
      //increment player
      playerNum++;
    }
    document.getElementById("team").appendChild(row);
  }
}

window.addEventListener("load", function() {
  createBioSection();
});
