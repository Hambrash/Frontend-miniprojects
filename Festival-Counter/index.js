const dayE1 = document.getElementById("day")
const hourE1 = document.getElementById("hour")
const minsE1 = document.getElementById("mins")
const secsE1 =document.getElementById("secs")
const anniversary = new Date("March 9,2025 00:00:00").getTime()
updatecountdown()
function updatecountdown(){
    const now = new Date().getTime();
    const gap = anniversary - now

    const secs =1000;
    const mins = secs * 60;
    const hour = mins * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / mins);
    const s = Math.floor((gap %mins) / secs)

    dayE1.innerText = d;
    hourE1.innerText = h;
    minsE1.innerText = m;
    secsE1.innerText = s;

    setTimeout(updatecountdown,1000)
}