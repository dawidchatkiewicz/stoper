const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');
const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
		console.log(timesArr);
	}

	clearStuff();
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	timesArr = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = '';
	let num = 1;
	timesArr.forEach(time => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${num}: <span> ${time}</span>`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	modalShadow.style.display = 'block';
	modalShadow.classList.toggle('modal-animation');
};

const closeModal = () => {
	modalShadow.style.display = 'none';
};

// const changeColor = () => {

// }

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => (e.target === modalShadow ? closeModal() : false));

colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors');
});

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(239, 71, 111)');
});
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(255, 209, 102)');
});
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6, 214, 160)');
});
colorFour.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(17, 138, 178)');
});
