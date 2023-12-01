document.addEventListener("DOMContentLoaded", function () {
  // Countdown to
  const countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

  // Updates countdown every second
  const x = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Remaining time
    const distance = countDownDate - now;

    // Days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displays countdown
    document.getElementById("countdown").innerHTML = `
      <div class="time-unit">
        <div class="time-value">${days}</div>
        <div class="time-title">DAYS</div>
      </div>
      <div class="time-unit">
        <div class="time-value">${hours}</div>
        <div class="time-title">HOURS</div>
      </div>
      <div class="time-unit">
        <div class="time-value">${minutes}</div>
        <div class="time-title">MIN</div>
      </div>
      <div class="time-unit">
        <div class="time-value">${seconds}</div>
        <div class="time-title">SEC</div>
      </div>
    `;

    // If countdown is over, displays a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "OFFER EXPIRED";
    }
  }, 1000);
});