const footerParagraphs = document.querySelectorAll("footer p");

const currentYear = new Date().getFullYear();
footerParagraphs[0].textContent = `© ${currentYear}|Kasagga Frank.`;

const lastModifiedDate = document.lastModified;
footerParagraphs[1].textContent = `Last Modified: ${lastModifiedDate}`;
footerParagraphs[0].textContent = `© ${currentYear} Note this CodePen ☼ JavaScript Date Object summary of using the Date object in different ways.`;

// Get the document's last modified date (native format)
const lastModifiedDate = document.lastModified;

// Set the second paragraph with the last modified date
footerParagraphs[1].textContent = `Last Modified: ${lastModifiedDate}`;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
