
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mettravels-backend.onrender.com
/api/packages")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("package-list");
      const packageOptions = document.getElementById("package-options");
      data.forEach(pkg => {
        const div = document.createElement("div");
        div.className = "package";
        div.innerHTML = `
          <img src="${pkg.image}" alt="${pkg.destination}" width="100%">
          <h3>${pkg.destination}</h3>
          <p>${pkg.description}</p>
          <strong>${pkg.price}</strong>
        `;
        container.appendChild(div);

        const option = document.createElement("option");
        option.value = pkg.destination;
        option.textContent = pkg.destination;
        packageOptions.appendChild(option);
      });
    });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    fetch("https://mettravels-backend.onrender.com
/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => alert(res.message));
  });

  document.getElementById("booking-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    fetch("https://mettravels-backend.onrender.com
/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => alert(res.message));
  });
});
