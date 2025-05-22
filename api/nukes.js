export default async function handler(req, res) {
  try {
    const response = await fetch('https://gp-prod-playstation-enforcement-mgs5.akamaized.net/ps4/statistics.json');

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from Konami', status: response.status });
    }

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);

  } catch (error) {
    console.error('Server error:', error); // <-- يظهر في Vercel logs
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
}
