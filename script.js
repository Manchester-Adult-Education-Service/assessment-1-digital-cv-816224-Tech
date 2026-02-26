const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();

if (hour < 12) {
    nameHeading.textContent = "Good Morning, [Kuda]";
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, [Kuda]";
} else {
    nameHeading.textContent = "Good Evening, [Kuda]";
}

console.log("The current hour is: " + hour);