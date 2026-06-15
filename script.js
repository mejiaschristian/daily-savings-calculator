const itemName = document.getElementById("floatingItemName");
const itemPrice = document.getElementById("floatingItemPrice");
const currentSavings = document.getElementById("floatingCurrentSavings");
const itemDays = document.getElementById("floatingItemDays");
const result = document.getElementById("result");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");

function calculateDailyEarnings(event) {
    event.preventDefault();

    const name = itemName.value.trim();
    const price = parseFloat(itemPrice.value);
    const savings = parseFloat(currentSavings.value) || 0;
    const days = parseInt(itemDays.value);

    if (!name || isNaN(price) || isNaN(days)) {
        result.textContent = "Please fill in all fields with valid values.";
        return;
    }

    const dailyEarnings = (price - savings) / days;
    const progressPercentage = (savings / price) * 100;

    document.querySelector(".progress-bar").style.width =
        `${progressPercentage}%`;
    document.querySelector(".progress-bar").textContent =
        `${progressPercentage.toFixed(2)}%`;

    let resultEarning = `you need to earn <b>₱${dailyEarnings.toFixed(2)}/day</b>.`;
    let bonusMessage = `you don't need to earn anything, buy it anytime. <br><br> 
    <img src="congrats-happy-for-you.gif" width="200" alt="Bonus Image">`;
    result.innerHTML = `To buy a <b>${name}</b> in <b>${days}</b> days, `;

    if (savings > 0) {
        progressLabel.classList.add("visible-text");
        progressBar.classList.add("visible-text");
    }
    result.classList.add("visible-text");

    if (savings >= price) {
        result.innerHTML += bonusMessage;
    } else {
        result.innerHTML += resultEarning;
    }
}

function clearResult() {
    itemName.value = "";
    itemPrice.value = "";
    currentSavings.value = "";
    itemDays.value = "";
    result.textContent = "";
    result.classList.remove("visible-text");
    progressLabel.classList.remove("visible-text");
    progressBar.classList.remove("visible-text");
}
