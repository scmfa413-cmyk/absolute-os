document.addEventListener("DOMContentLoaded", () => {
  const bootLines = [
    "[ABSOLUTE OS v3.7]",
    "> INITIALIZING KERNEL...",
    "> LOADING SYSTEM DRIVERS...",
    "> WARNING: UNSTABLE MODULE DETECTED",
    "> PATCHING MEMORY SECTORS...",
    "> ESTABLISHING SECURE LINK...",
    "> CONNECTION LOST",
    "> RECONNECTING...",
    "> CONNECTION RESTORED",
    "> SYSTEM ONLINE."
  ];

  const bootEl = document.getElementById("boot-lines");
  const bootScreen = document.getElementById("boot-screen");
  const mainUI = document.getElementById("main-ui");

  let i = 0;

  function nextLine() {
    if (i < bootLines.length) {
      bootEl.textContent += bootLines[i] + "\n";
      i++;
      setTimeout(nextLine, 250);
    } else {
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        mainUI.classList.remove("hidden");
        startWelcomeTyping();
      }, 600);
    }
  }

  nextLine();
});

function startWelcomeTyping() {
  const text = document.getElementById("welcome");
  if (!text) return;

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
        setTimeout(type, 250);
      }
    }
  }

  type();
}
