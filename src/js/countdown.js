
function showNotification() {
    var notification = document.querySelector(".welcome-notification");
    notification.style.display = "block";
}

function closeNotification() {
    var notification = document.querySelector(".welcome-notification");
    notification.style.display = "none";
}

function updateCountdown() {
    const saleEnd = new Date("2023-12-30T23:59:59");
    const now = new Date();
    const timeLeft = saleEnd - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").textContent = "Sale has ended!";
    } else {
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("countdown").textContent = `${hours}h : ${minutes}m : ${seconds}s left`;
    }
}


setInterval(updateCountdown, 1000);