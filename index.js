clock = () => {
    const date = new Date()
    const tsec = date.getSeconds()
    const tmin = date.getMinutes()
    const thour = date.getHours()
    

    // hr dile =360 deg , 1hr = 30deg, 1min = 1/2
    // for m hour and n min = 30*m+n/2 (hour)

    // 1min = 360* 1sec = 6* , for  n min & s sec = n*6 *s*1/10(min)
    const h = 30 * thour + tmin / 2;
    const m = 6 * tmin + tsec / 10;
    const s = 6 * tsec;

    document.getElementById('hour').style.transform = `rotate(${h}deg)`
    document.getElementById('min').style.transform = `rotate(${m}deg)`
    document.getElementById('sec').style.transform = `rotate(${s}deg)`
    console.log(h, m, s)

}
setInterval(clock,1000)
