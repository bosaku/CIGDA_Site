import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <iframe id="bg-iframe" srcdoc="<body style='margin:0;background:#222'></body>"></iframe>

  <div id="overlay">
    
    <h2 class="heading-row">Denver's Casual Game Dev</h2>
    <h2 class="heading-row">'Discovery page'</h2>
    <h4 class="heading-row">This silly thing only exists so that new folks to the area know where to find community!</h4>
    <h3 class="heading-row">so... prove you're a human for a link. </h3>
    <div class="cf-turnstile" 
    data-sitekey="0x4AAAAAABfT1cMNQ9Cze4gQ" 
    data-callback="onTurnstileSuccess"
    </div>
    <a id="secret-link" href="https://discord.gg/Y5YSwGs82Q" target="_blank">.0 Discord Link Unlocked! </a>
  </div>
`;

// Handle Turnstile success callback
;(window as any).onTurnstileSuccess = () => {
  const link = document.getElementById('secret-link')!;
  link.style.display = 'inline-block';
  
};

// Handle iframe click to swap content
document.addEventListener('DOMContentLoaded', () => {
  const catcher = document.getElementById('click-catcher')!;
  const iframe = document.getElementById('bg-iframe')!;

  catcher.addEventListener('click', () => {
    const greys = ['#333', '#444', '#555'];
    const container = document.createElement('div');

    greys.forEach((color) => {
      const miniFrame = document.createElement('iframe');
      miniFrame.srcdoc = `<body style='margin:0;background:${color}'></body>`;
      miniFrame.style.width = '33.3vw';
      miniFrame.style.height = '100vh';
      miniFrame.style.border = 'none';
      miniFrame.style.float = 'left';
      container.appendChild(miniFrame);
    });

    // Remove the original iframe and click catcher
    iframe.remove();
    catcher.remove();
    document.body.appendChild(container);
  });
});


/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
*/

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
