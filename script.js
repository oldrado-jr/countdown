function countdown() {
  const targetDate = new Date('2023-12-31 23:59:59').getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff < 0) {
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector('#countdown-days').textContent = days.toString().padStart(2, '0');
    document.querySelector('#countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('#countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('#countdown-seconds').textContent = seconds.toString().padStart(2, '0');
  }, 1000);
}

function main() {
  countdown();
}

document.addEventListener('DOMContentLoaded', main);
