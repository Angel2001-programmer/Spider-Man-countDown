import styles from "./MyApp.module.css";
import { useState } from "react";
const MyApp = () => {

    let endDate = new Date("10/20/2023 12:0 AM");
    
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    const showTimeRemain = (e) => {
        let now = new Date();
        let dist = endDate - now;
        if(dist < 0){
            clearInterval(timer);
            console.log("Time is up!")
            return;
        }
        let days = Math.floor(dist / _day);
        let hours = Math.floor(dist % _day / _hour);
        let minutes = Math.floor((dist % _hour) / _minute);
        let seconds = Math.floor((dist % _minute) / _second);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }
    timer = setInterval(showTimeRemain, 1000);

    return(
        <div className={styles.myapp}>

            <div className={styles.screen}>
            <h1>Days: {days}</h1>
            <h1>Hours: {hours}</h1>
            <h1>Minutes: {minutes}</h1>
            <h1>Seconds: {seconds}</h1>
            </div>
        </div>
    )
}

export default MyApp;