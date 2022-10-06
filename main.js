const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

// 現在のカウント時間を表示
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getUTCHours()).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタンがクリックされたら時間を止める
stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// リセットボタンがクリックされたら時間を０に戻す
resetButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = false;
  resetButton.disabled = true;
  time.textContent = `00:00:00:000`
  stopTime = 0;
});

