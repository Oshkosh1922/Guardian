console.log("Guardian popup script loaded");

// Placeholder function to fetch Twitter stats
function fetchTwitterStats() {
  // Placeholder data
  const stats = {
    followers: 1234,
    engagementRate: '5.6%'
  };

  // Update the DOM with the fetched stats
  document.getElementById('follower-count').innerText = `Followers: ${stats.followers}`;
  document.getElementById('engagement-rate').innerText = `Engagement Rate: ${stats.engagementRate}`;
}

// Fetch and display Twitter stats when the popup is opened
fetchTwitterStats();



 