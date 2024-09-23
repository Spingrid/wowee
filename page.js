document.open();
document.write(`
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
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
  </head>
  <body>
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
`);
document.close();
