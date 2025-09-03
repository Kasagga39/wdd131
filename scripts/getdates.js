// Get all <p> elements inside the footer
const footerParagraphs = document.querySelectorAll("footer p");

// Get the current year
const currentYear = new Date().getFullYear();

// Set the first paragraph with the copyright info
footerParagraphs[0].textContent = `© ${currentYear} Note this CodePen ☼ JavaScript Date Object summary of using the Date object in different ways.`;

// Get the document's last modified date (native format)
const lastModifiedDate = document.lastModified;

// Set the second paragraph with the last modified date
footerParagraphs[1].textContent = `Last Modified: ${lastModifiedDate}`;
