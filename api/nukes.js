export default async function handler(req, res) {
  try {
    const response = await fetch('https://gp-prod-playstation-enforcement-mgs5.akamaized.net/ps4/statistics.json');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Konami' });
  }
}
