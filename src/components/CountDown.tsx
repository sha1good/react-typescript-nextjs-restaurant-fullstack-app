//WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date("2023-10-25")

// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }

// export default CountDown

//Without a library
"use-client";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  let difference = +new Date(`10/25/2023`) - +new Date();
  //let difference = +new Date(`10/10/2023`) - +new Date();
  console.log(difference);

  const [delay, setDelay] = useState(difference);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {days}:{hours}:{mins}:{seconds}
    </span>
  );
};

export default CountDown;
