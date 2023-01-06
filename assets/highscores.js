//list element handler
var scoreListEl = document.querySelector('.score-list');
//make list element
var scoreListItem = document.createElement('li');
var storageList = [];
storageList.push(JSON.parse(localStorage.getItem("top10HighScores")));
var tenDisplay =storageList[0];
let wholeList = tenDisplay.length;

console.log(tenDisplay.length);

scoreListItem.textContent = JSON.parse(localStorage.getItem("score"));
console.log(scoreListItem);
scoreListEl.appendChild(scoreListItem);

for (var i =0; i < wholeList; i++){
    scoreListItem.textContent = (i+1)+": " + tenDisplay[i].initials + " " + tenDisplay[i].scored + " points"
     ;
    scoreListEl.appendChild(scoreListItem);
    //thanks for the tip https://getbutterfly.com/generate-html-list-from-javascript-array/
    scoreListItem = document.createElement('li');
};
