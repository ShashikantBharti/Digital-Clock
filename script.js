
let time = document.getElementById('time');

function showTime(){
	let today = new Date();
	let hours = today.getHours();
	let minuts = today.getMinutes();
	let seconds = today.getSeconds();
	let amPM = hours >= 12 ? 'PM':'AM';
	hours = hours %12 || 12;
	time.innerText = `${hours}:${addZero(minuts)}:${addZero(seconds)} ${amPM}`;
	setTimeout(showTime, 1000);
}
showTime();

function addZero(n){
	return (parseInt(n, 10) < 10 ? '0':'') +n;
}