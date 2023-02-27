const time = document.getElementById("time2");
const Day = ['일', '월', '화', '수', '목', '금','토']
function getTime() {
    const date = new Date();
    const fullyear = date.getFullYear()
    const month = date.getMonth()
    const datee = date.getDate()
    const day = date.getDay()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    

    time.innerText = `${fullyear}년 ${month + 1}월 ${datee}일 ${Day[day]}요일 ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}
getTime()
setInterval(getTime, 1000);
console.log(time);

const date = document.getElementById("date");