export default function handler(req, res) {
  console.log("%j", process.env || "unset");
  res.status(200).json({
    pass: process.env.PASSWORD || "unset",
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}
