// 🎂 Countdown Timer
let countdown = document.getElementById("countdown");

if (countdown) {
    let birthday = new Date("April 25, 2026 00:00:00").getTime();

    let timer = setInterval(function () {
        let now = new Date().getTime();
        let diff = birthday - now;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdown.innerHTML = "🎉 " + days + " days " + hours + " hours left 🎉";

        if (diff < 0) {
            clearInterval(timer);
            countdown.innerHTML = "🎂 It's Birthday Time!";
        }
    }, 1000);
}

// 💌 Add Wishes
function addWish() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    let wish = document.createElement("p");
    wish.innerHTML = "<b>" + name + ":</b> " + message;

    document.getElementById("wishList").appendChild(wish);

    // Clear input
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}