// Log to the console to confirm the content script is running
console.log("Guardian content script loaded");

// Function to create and display the safety bubble alert
function createAlert(message) {
  // Create the alert div
  const alertDiv = document.createElement('div');
  alertDiv.id = 'guardian-alert';
  alertDiv.style.position = 'fixed';
  alertDiv.style.bottom = '10px';
  alertDiv.style.right = '10px';
  alertDiv.style.backgroundColor = 'red';
  alertDiv.style.color = 'white';
  alertDiv.style.padding = '10px';
  alertDiv.style.zIndex = '1000';
  alertDiv.style.borderRadius = '5px';
  alertDiv.style.fontWeight = 'bold';
  alertDiv.innerText = `Guardian Alert: ${message}`;
  
  // Append the alert div to the body
  document.body.appendChild(alertDiv);

  // Remove the alert after 5 seconds
  setTimeout(() => {
    document.body.removeChild(alertDiv);
  }, 5000);
}

// Keywords to scan for
const keywords = ['scam', 'phishing', 'malware', 'hack'];

// Function to scan the page for keywords
function scanPageForKeywords() {
  const bodyText = document.body.innerText.toLowerCase();
  for (let keyword of keywords) {
    if (bodyText.includes(keyword)) {
      createAlert(`Potential threat detected: ${keyword}`);
      break;
    }
  }
}

// Scan the page for keywords
scanPageForKeywords();
