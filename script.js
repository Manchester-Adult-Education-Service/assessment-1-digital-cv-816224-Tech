const quoteBtn = document.getElementById('quote-btn');
const quoteBtn = document.getElementById('quote-text');
const quoteBtn = document.getElementById('quote-author');

const mainContainer = document.querySelector('main');
const headerBar = document.querySelector('header');
const subTitles = document.querySelector('h2');
const allSkills = document.querySelectorAll('li');

allSkills.forEach(skill => {
    if (skill.textContent.includes("Python")) {
       skill.style.color = "#1b100a";
       skill.style.fontWeight = "bold";
    }
});

const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();


if (hour < 12) {
    nameHeading.textContent = "Good Morning";
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon";
} else {
    nameHeading.textContent = "Good Evening";
}

console.log("The current hour is: " + hour);

document.getElementById('copyright').textContent = newDate().getFullYear();

const personalStatement = document.querySelector('.highlight')
personalStatement.style.backgroundColor = '#2e2a2a';

quoteBtn.addEventListener('click', function() {
    quoteText.textContent = "Loading"
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
    .catch(error => {quoteText.textContent = Could not connect to the quote server});
        quoteText.textContent = '- ${data.author}';
    ));
));