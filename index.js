
const currentDay = document.querySelector('[currentDayOfTheWeek]');
const currentTime = document.querySelector('[currentUTCTime]');
const date = new Date()

const getCurrentDayOfTheWeek = () => {
  const daysOfTheWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]
  const nowIndex = date.getDay();
  const curr = daysOfTheWeek[nowIndex];
  currentDay.innerText = curr;
};

getCurrentDayOfTheWeek();


const generateUTCTime = () => {
  const date = new Date()
  const theTime = date.getTime();
  currentTime.innerText = theTime;
}

generateUTCTime()

setInterval(generateUTCTime, 1000)

