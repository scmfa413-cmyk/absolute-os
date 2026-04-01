document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("toggle-sidebar");
  if (!sidebar || !toggle) return;

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    toggle.textContent = sidebar.classList.contains("collapsed") ? ">" : "<";
  });
});
