// Footer date scripts
const yearSpan = document.getElementById("currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById("lastModified");
if (lastMod) lastMod.textContent = `Last Modification: ${document.lastModified}`;

// Updated product array with IDs
const products = [
  { id: "p001", name: "Smart Watch" },
  { id: "p002", name: "Wireless Earbuds" },
  { id: "p003", name: "Fitness Tracker" },
  { id: "p004", name: "Bluetooth Speaker" },
  { id: "p005", name: "Smartphone Case" }
];

// Populate select menu
const select = document.getElementById("product");

if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;  // ID as the value
    option.textContent = product.name;  // Name for display
    select.appendChild(option);
  });
}
