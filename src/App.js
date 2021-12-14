// hoosks
import { useState } from 'react';
import { useRef } from 'react';
//styles
import './App.css';

function App() {
  //   var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  // // Update the count down every 1 second
  // var x = setInterval(function() {

  //   // Get today's date and time
  //   var now = new Date().getTime();

  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;

  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Output the result in an element with id="demo"
  //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //   + minutes + "m " + seconds + "s ";

  //   // If the count down is over, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // }, 1000);
  //*    States
  const [seconde, setSeconde] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');

  //*Functions

  const countdown = setInterval(() => {
    setHour(Math.floor((h1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((min1 % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconde(Math.floor((sec1 % (1000 * 60)) / 1000));

    // If the count down is over, write some text
    if (hour || minute || seconde < 0) {
      clearInterval(countdown);
      console.log('fucked');
    }
  }, 1000);

  return (
    <div className='App'>
      <h2>Timer</h2>
      <div className='timer'>
        <div className='display'>
          <span>{hour} h</span>:<span>{minute} m</span>:<span>{seconde} s</span>
        </div>
        <button>Start</button>
      </div>

      <div className='time'>
        <div className='time-values'>
          <div className='hour'>
            <label htmlFor='hour'>Hour</label>
            <input
              value={hour}
              onChange={(e) => {
                let h1 = e.target.value;
              }}
              type='text'
              name='hour'
              id='hour'
            />
          </div>
          <div className='minute'>
            <label htmlFor='minute'>Minute</label>
            <input
              value={minute}
              onChange={(e) => {
                let min1 = e.target.value;
              }}
              type='text'
              name='minute'
              id='minute'
            />
          </div>
          <div className='second'>
            <label htmlFor='second'>Second</label>
            <input
              value={seconde}
              onChange={(e) => {
                let sec1 = e.target.value;
              }}
              type='text'
              name='second'
              id='second'
            />
          </div>
        </div>
        <button>ADD</button>
      </div>
    </div>
  );
}

export default App;
