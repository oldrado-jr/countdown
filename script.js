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

function handleClickCloseModal() {
  document.querySelector('#shadow').setAttribute('hidden', 'hidden');

  const subscribeFormModal = document.querySelector('#subscribe-form-modal');
  subscribeFormModal.classList.remove('opened-modal');
  subscribeFormModal.classList.add('closed-modal');
}

function handleClickSubscribe(e) {
  e.preventDefault();
  document.querySelector('#shadow').removeAttribute('hidden');

  const subscribeFormModal = document.querySelector('#subscribe-form-modal');
  subscribeFormModal.classList.remove('closed-modal');
  subscribeFormModal.classList.add('opened-modal');
}

function handleSubmitSubscribe(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  console.log({ name, email });
}

function main() {
  countdown();

  document.querySelector('#countdown-container .subscribe-button').addEventListener('click', handleClickSubscribe);
  document.querySelector('#close-modal').addEventListener('click', handleClickCloseModal);
  document.querySelector('#subscribe-form-modal form').addEventListener('submit', handleSubmitSubscribe);
}

document.addEventListener('DOMContentLoaded', main);
