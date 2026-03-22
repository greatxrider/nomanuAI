const https = require('https');

const ids = [
  '1556742049-0cfed4f6a45d', // E-commerce
  '1460925895917-afdab827c52f', // Business Dashboard
  '1517836357463-d25dfeac3438', // Fitness
  '1581091226825-a6a2a5aee158', // Field Service
  '1606811841689-23dfddce3e95', // Dental
  '1560518883-ce09059eeffa', // Real Estate
  '1551288049-bebda4e38f71', // SaaS/CSV
  '1557200134-90327ee9fafa', // Email
  '1454165804606-c3d57bc86b40', // Analytics/Property
  '1552664730-d307ca884978', // Sales CRM
  '1554224155-8d04cb21cd6c', // Billing
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
