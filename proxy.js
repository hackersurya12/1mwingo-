export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: "Missing url parameter"
    });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");

    return res.status(response.status).send(data);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}