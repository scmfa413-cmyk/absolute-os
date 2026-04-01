document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".welcome");
  const message = [
    "Initializing Absolute System...",
    "Loading modules...",
    "Establishing secure connection...",
    "System ready."
  ];

  let line = 0;
  let char = 0;

  function type() {
    if (line < message.length) {
      if (char < message[line].length) {
        text.textContent += message[line].charAt(char);
        char++;
        setTimeout(type, 40);
      } else {
        text.textContent += "\n";
        line++;
        char = 0;
        setTimeout(type, 300);
      }
    }
  }

  type();
});

// Try loading normally first
frame.src = url;

// If blocked, use proxy
setTimeout(() => {
  if (frame.contentWindow.location.href === "about:blank") {
    frame.src = "https://textise.net/showtext.aspx?strURL=" + encodeURIComponent(url);
  }
}, 1500);
