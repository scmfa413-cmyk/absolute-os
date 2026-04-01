document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command-input");
  const output = document.getElementById("cli-output");
  if (!input || !output) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      handleCommand(cmd, output);
      input.value = "";
    }
  });
});

function handleCommand(cmd, output) {
  if (!cmd) return;

  const lower = cmd.toLowerCase();
  let response = "";

  if (lower === "help") {
    response =
      "Available commands:\n" +
      "  help            - show this help\n" +
      "  open games      - go to games\n" +
      "  open movies     - go to movies\n" +
      "  open about      - go to about\n" +
      "  system.status   - show system status\n" +
      "  clear           - clear output\n";
  } else if (lower === "open games") {
    window.location.href = "games.html";
    return;
  } else if (lower === "open movies") {
    window.location.href = "movies.html";
    return;
  } else if (lower === "open about") {
    window.location.href = "about.html";
    return;
  } else if (lower === "system.status") {
    response =
      "SYSTEM STATUS:\n" +
      "  CORE: STABLE\n" +
      "  NET: LINKED\n" +
      "  USER: ONLINE\n";
  } else if (lower === "clear") {
    output.textContent = "";
    return;
  } else {
    response = `Unknown command: ${cmd}\nType 'help' for a list of commands.\n`;
  }

  output.textContent += `$ ${cmd}\n${response}\n`;
}
