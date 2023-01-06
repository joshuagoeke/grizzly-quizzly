var scoreListEl = document.querySelector('.score-list');
var scoreListItem = document.createElement('li');

scoreListItem.textContent = JSON.parse(localStorage.getItem("score"));
console.log(scoreListItem);
scoreListEl.appendChild(scoreListItem);