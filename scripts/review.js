// Track and display number of reviews submitted
let reviewCount = localStorage.getItem("reviewCount");
if (!reviewCount) {
  reviewCount = 0;
}
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

const reviewCounter = document.getElementById("reviewCount");
if (reviewCounter) {
  reviewCounter.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? "s" : ""}.`;
}
