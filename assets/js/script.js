document.addEventListener("DOMContentLoaded", function () {

    const messages = document.querySelectorAll(".message");
    let daley = 500;

    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.opacity = "1";
            msg.style.transform = "tranlateY(0)";
        }, daley * (index + 1));
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "🔥"
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 500);
});
