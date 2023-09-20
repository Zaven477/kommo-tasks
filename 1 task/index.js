const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;
const MILLISECONDS = 1000;

const convertToFormattedTime = (seconds) => {
  const hour = Math.floor(seconds / SECONDS_IN_AN_HOUR);
  const minute = Math.floor(
    (seconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE
  );
  const second = Math.floor(seconds % SECONDS_IN_A_MINUTE);

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`;
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timerEl.textContent = convertToFormattedTime(seconds);

    const intervalId = setInterval(() => {
      if (seconds > 0) {
        seconds = seconds - 1;
        timerEl.textContent = convertToFormattedTime(seconds);
      } else {
        clearInterval(intervalId);
      }
    }, MILLISECONDS);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const currentValue = event.target.value;
  inputEl.value = currentValue.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);

  inputEl.value = "";
});
