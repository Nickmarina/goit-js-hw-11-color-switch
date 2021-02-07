import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[ data-action="stop"]'),
  body: document.body,
};
let intervalId = null;

refs.startBtn.addEventListener('click', startChangingColors);
refs.stopBtn.addEventListener('click', stopChangingColors);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangingColors() {
  refs.startBtn.disabled = 'true';
  intervalId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomColor];
    console.log(colors[randomColor]);
  }, 1000);
}

function stopChangingColors() {
  refs.startBtn.removeEventListener;
  clearInterval(intervalId);
  // refs.startBtn.disabled = 'false';
  refs.startBtn.removeAttribute('disabled');
}
