import express from "express";

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'Nuevo id 123456'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});