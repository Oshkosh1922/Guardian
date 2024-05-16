const express = require('express');
const Twitter = require('twitter-lite');

const app = express();
const port = 3000;

const client = new Twitter({
  consumer_key: 'ZVS6KZUjmsNgFJclY2424iXf8',
  consumer_secret: 'GAbAivHhSnQsE3XbCbsWsQTGrd6JM2PYlP3CKdvGE2iyGaQtvR',
  access_token_key: '1613245889270743040-pTveHI3nHYmDvGd69FceNe72ABtZSU',
  access_token_secret: '1613245889270743040-r9wGpawmzBwArJaGZd8OPMfmFHxZx1',
});

app.get('/twitter-stats', async (req, res) => {
  try {
    const user = await client.get('account/verify_credentials');
    const followers = user.followers_count;
    const engagementRate = '5.6%'; // Placeholder for engagement rate calculation

    res.json({ followers, engagementRate });
  } catch (error) {
    console.error('Error fetching Twitter stats:', error);
    res.status(500).json({ error: 'Failed to fetch Twitter stats' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
