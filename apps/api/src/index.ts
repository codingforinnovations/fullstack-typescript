import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

async function getData(){
  const url = "https://api.github.com/orgs/codingforinnovations/repos";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


app.get('/api/data', async (req, res) => {
  const data = await getData();
  res.json({ data: data });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});