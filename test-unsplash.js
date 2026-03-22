const https = require('https');

const ids = [
  '1526498460520-4c246339dccb', // Android
  '1511707171634-5f897ff02bc9', // Android 2
  '1611162617474-5b21e879e113', // Social (known good)
  '1560250097001-dc9b5f928a38', // Receptionist
  '1573164713988-8665fc963095', // Receptionist 2 (known good)
  '1454165804606-c3d57bc86b40', // Calendar
  '1507925922073-7463fc7ba0cb', // Calendar 2
  '1486312338219-ce68d2c6f44d', // Calendar 3
];

function checkUrl(id) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=600`;
  https.get(url, (res) => {
    console.log(`${id}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`${id}: Error - ${e.message}`);
  });
}

ids.forEach(checkUrl);
