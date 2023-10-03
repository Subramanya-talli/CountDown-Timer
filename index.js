const days = document.getElementById('Days');
const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');
// const subTitle = document.querySelector('.sub-title')

const currentYear = new Date();


const newYearTime = new Date(`January 1 ${currentYear.getFullYear() + 1} 00:00:00 `);




function updateCountDownTime()
{
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    days.value = Math.floor(difference/1000 / 60 / 60 / 24);
    hours.value = Math.floor(difference/1000 / 60 / 60 ) % 24;
    minutes.value = Math.floor(difference/1000 / 60) % 60;
    seconds.value = Math.floor(difference/1000) % 60;
}

setInterval(updateCountDownTime, 1000)