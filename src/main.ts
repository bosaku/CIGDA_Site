import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <iframe id="bg-iframe" srcdoc="<body style='margin:0;background:#222'></body>"></iframe>

  <div id="overlay">
    
    <h2 class="heading-row">Denver's Casual Game Dev</h2>
    <h2 class="heading-row">'Discovery page'</h2>
    <h4 class="heading-row">This silly thing only exists so that new folks to the area know where to find the community!</h4>
    <h3 class="heading-row">so... prove you're a human for a link. </h3>
    <div class="cf-turnstile" 
    data-sitekey="0x4AAAAAABfT1cMNQ9Cze4gQ" 
    data-callback="onTurnstileSuccess"
    </div>
    <a id="secret-link" href="https://discord.gg/Y5YSwGs82Q" target="_blank">.0 Discord Link Unlocked! Click Me! 0.</a>
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


 
