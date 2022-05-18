import React, { useEffect,useState } from 'react';
import './timer.css';

const Timer=()=> {

    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);

    var timer ;
    useEffect(()=>{
         timer= setInterval(()=>{
            setSeconds(seconds+1);
            console.log(seconds)
            if(seconds===59)
            {
                setMinutes(minutes+1);

                setSeconds(0);
            }
        },1000)

         return ()=>clearInterval(timer);

    });

  const restart=()=>{
      setSeconds(0);
      setMinutes(0);
  }

  const stop = ()=>{
      clearInterval(timer);
  }




    return (
        <div className="timer">
            <div className="container">
                <div className="timer_container">
                    <h1>Timer</h1>
                    <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>

                  <button className="restart" onClick={restart}>Restart</button>
                  <button className="stop" onClick={stop}>Stop</button>
                </div>

            </div>
            
        </div>
    )
}

export default Timer