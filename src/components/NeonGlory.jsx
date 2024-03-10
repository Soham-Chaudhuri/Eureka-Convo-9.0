import React, { useEffect } from 'react';

const NeonGlory = () => {
  useEffect(() => {
    const target = document.getElementsByTagName('h1')[0];

    const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both ">${letter}</span>`;
    const colorLetter = letter => `<span style="color: hsla(${Math.random() * 360}, 100%, 80%, 1);">${letter}</span>`;
    const flickerAndColorText = text =>
      text.split('').map(flickerLetter).map(colorLetter).join('');
    const neonGlory = target => (target.innerHTML = flickerAndColorText(target.textContent));

    neonGlory(target);
    target.onclick = ({ target }) => neonGlory(target);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      target.onclick = null;
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Monoton');
          
          @-webkit-keyframes text-flicker-in-glow {
            0% { opacity: 0 }
            10% { opacity: 0; text-shadow: none }
            10.1% { opacity: 1; text-shadow: none }
            10.2% { opacity: 0; text-shadow: none }
            20% { opacity: 0; text-shadow: none }
            20.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0) }
            20.6% { opacity: 0; text-shadow: none }
            30% { opacity: 0; text-shadow: none }
            30.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            30.5% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            30.6% { opacity: 0; text-shadow: none }
            45% { opacity: 0; text-shadow: none }
            45.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            50% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            55% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            55.1% { opacity: 0; text-shadow: none }
            57% { opacity: 0; text-shadow: none }
            57.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            60% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            60.1% { opacity: 0; text-shadow: none }
            65% { opacity: 0; text-shadow: none }
            65.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            75% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            75.1% { opacity: 0; text-shadow: none }
            77% { opacity: 0; text-shadow: none }
            77.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1) }
            85% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1) }
            85.1% { opacity: 0; text-shadow: none }
            86% { opacity: 0; text-shadow: none }
            86.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,0),0 0 110px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            100% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,0),0 0 110px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
          }
          
          @keyframes text-flicker-in-glow {
            0% { opacity: 0 }
            10% { opacity: 0; text-shadow: none }
            10.1% { opacity: 1; text-shadow: none }
            10.2% { opacity: 0; text-shadow: none }
            20% { opacity: 0; text-shadow: none }
            20.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0) }
            20.6% { opacity: 0; text-shadow: none }
            30% { opacity: 0; text-shadow: none }
            30.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            30.5% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            30.6% { opacity: 0; text-shadow: none }
            45% { opacity: 0; text-shadow: none }
            45.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            50% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            55% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            55.1% { opacity: 0; text-shadow: none }
            57% { opacity: 0; text-shadow: none }
            57.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            60% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0) }
            60.1% { opacity: 0; text-shadow: none }
            65% { opacity: 0; text-shadow: none }
            65.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            75% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            75.1% { opacity: 0; text-shadow: none }
            77% { opacity: 0; text-shadow: none }
            77.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1) }
            85% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,0),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1) }
            85.1% { opacity: 0; text-shadow: none }
            86% { opacity: 0; text-shadow: none }
            86.1% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,0),0 0 110px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
            100% { opacity: 1; text-shadow: 0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,0),0 0 110px rgba(255,255,255,0),0 0 100px rgba(255,255,255,.1) }
          
          }

          html, body {
            background-color: transparent;
            font-family: 'Monoton', cursive;
          }
          
        `}
      </style>
      <h1 className='mb-4 text-4xl md:text-5xl lg:text-[7rem]'>EUREKA</h1>
    </div>
  );
};

export default NeonGlory;
